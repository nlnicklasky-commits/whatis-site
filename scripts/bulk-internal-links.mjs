#!/usr/bin/env node

/**
 * Bulk Internal Linking Script
 *
 * Scans all articles and injects contextual internal links where:
 * - Another article's title/topic is mentioned in plain text
 * - That mention isn't already linked
 * - The link target exists as a real article
 *
 * Rules:
 * - Only link each target slug once per article (first occurrence)
 * - Don't link inside headings, existing links, code blocks, or frontmatter
 * - Don't self-link (article linking to itself)
 * - Target 5-10 internal links per article
 * - Skip very short/common words that would over-link
 */

import fs from 'node:fs';
import path from 'node:path';

const ARTICLES_DIR = './src/content/articles';
const MIN_SLUG_LENGTH = 4; // Skip very short slugs like "ai", "css"
const MAX_LINKS_TO_ADD = 8; // Don't add more than this many new links per article
const MIN_WORD_LENGTH_FOR_MATCH = 4; // Minimum word length for single-word matches

// ── Load all articles ──
console.log('Loading articles...');
const files = fs.readdirSync(ARTICLES_DIR).filter(f => f.endsWith('.md'));
const articles = new Map();

for (const file of files) {
  const content = fs.readFileSync(path.join(ARTICLES_DIR, file), 'utf-8');
  const fmEnd = content.indexOf('---', content.indexOf('---') + 3);
  const frontmatter = content.slice(0, fmEnd + 3);
  const body = content.slice(fmEnd + 3);

  const slugMatch = frontmatter.match(/^slug:\s*(.+)$/m);
  const titleMatch = frontmatter.match(/^title:\s*"?([^"\n]+)"?$/m);

  if (slugMatch && titleMatch) {
    const slug = slugMatch[1].trim();
    let title = titleMatch[1].trim();
    // Strip "What Is " / "What Are " prefix for matching
    const cleanTitle = title
      .replace(/^What (?:Is|Are) /, '')
      .replace(/\?$/, '')
      .trim();

    articles.set(slug, {
      file,
      slug,
      title,
      cleanTitle,
      frontmatter,
      body,
      fullContent: content,
    });
  }
}

console.log(`Loaded ${articles.size} articles`);

// ── Build match patterns ──
// Sort by title length descending so longer phrases match first
const matchTargets = [...articles.values()]
  .filter(a => a.slug.length >= MIN_SLUG_LENGTH)
  .filter(a => a.cleanTitle.length >= MIN_WORD_LENGTH_FOR_MATCH)
  .sort((a, b) => b.cleanTitle.length - a.cleanTitle.length);

// Words that are too common to link (would create noise)
const SKIP_WORDS = new Set([
  'data', 'game', 'home', 'idea', 'iron', 'jazz', 'judo', 'kite', 'lace',
  'lead', 'life', 'love', 'mind', 'myth', 'news', 'note', 'play', 'poem',
  'rice', 'risk', 'role', 'rope', 'rule', 'salt', 'sand', 'silk', 'soap',
  'song', 'soul', 'tape', 'team', 'test', 'time', 'tool', 'type', 'unit',
  'wave', 'wine', 'wood', 'word', 'work', 'yoga', 'zinc', 'that', 'this',
  'with', 'from', 'they', 'been', 'have', 'will', 'what', 'when', 'your',
  'more', 'some', 'than', 'them', 'into', 'also', 'just', 'like', 'make',
  'each', 'only', 'over', 'such', 'take', 'most', 'very', 'well', 'know',
  'even', 'good', 'back', 'many', 'then', 'much', 'need', 'here', 'come',
  'form', 'long', 'part', 'made', 'find', 'days', 'look', 'used', 'help',
  'line', 'turn', 'move', 'live', 'real', 'left', 'same', 'last', 'keep',
  'does', 'high', 'hand', 'read', 'base', 'area', 'open', 'free', 'body',
]);

// ── Process each article ──
let totalLinksAdded = 0;
let articlesModified = 0;

for (const [currentSlug, article] of articles) {
  let { body } = article;
  const existingLinks = new Set();
  let linksAdded = 0;

  // Find all existing internal links in the body
  const linkRegex = /\[([^\]]*)\]\(\/([^)]+)\)/g;
  let linkMatch;
  while ((linkMatch = linkRegex.exec(body)) !== null) {
    existingLinks.add(linkMatch[2].replace(/\/$/, ''));
  }

  // Track which slugs we've already linked in this article
  const linkedInThisPass = new Set([...existingLinks, currentSlug]);

  for (const target of matchTargets) {
    if (linksAdded >= MAX_LINKS_TO_ADD) break;
    if (linkedInThisPass.has(target.slug)) continue;
    if (SKIP_WORDS.has(target.cleanTitle.toLowerCase())) continue;

    // Build a regex for the clean title (case-insensitive, word boundaries)
    const escapedTitle = target.cleanTitle.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    // Match the exact phrase with word boundaries
    const pattern = new RegExp(`\\b(${escapedTitle})\\b`, 'i');

    // Split body into "safe" and "unsafe" zones
    // We only want to link in plain paragraph text, not in:
    // - Headings (lines starting with #)
    // - Existing markdown links [text](url)
    // - Code blocks (``` ... ```)
    // - HTML tags
    // - Bold/italic markers wrapping the term

    const lines = body.split('\n');
    let inCodeBlock = false;
    let modified = false;

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];

      // Track code blocks
      if (line.trim().startsWith('```')) {
        inCodeBlock = !inCodeBlock;
        continue;
      }
      if (inCodeBlock) continue;

      // Skip headings
      if (line.trim().startsWith('#')) continue;

      // Skip lines that are just links or list items starting with links
      if (line.trim().startsWith('[') && line.includes('](')) continue;

      // Skip empty lines
      if (line.trim() === '') continue;

      // Check if the term appears in this line
      const match = pattern.exec(line);
      if (!match) continue;

      // Make sure we're not inside an existing markdown link
      const beforeMatch = line.slice(0, match.index);
      const afterMatch = line.slice(match.index + match[0].length);

      // Count unmatched [ before our match - if odd, we're inside a link text
      const openBrackets = (beforeMatch.match(/\[/g) || []).length;
      const closeBrackets = (beforeMatch.match(/\]/g) || []).length;
      if (openBrackets > closeBrackets) continue;

      // Check we're not inside a link URL (after ]( and before ))
      if (beforeMatch.includes('](') && !beforeMatch.includes(')')) continue;

      // Check we're not right before a link target ](
      if (afterMatch.startsWith('](')) continue;

      // All good — inject the link
      const matchedText = match[1]; // Use the actual case from the text
      const replacement = `[${matchedText}](/${target.slug})`;
      lines[i] = line.slice(0, match.index) + replacement + afterMatch;

      linkedInThisPass.add(target.slug);
      linksAdded++;
      modified = true;
      break; // Only link first occurrence
    }

    if (modified) {
      body = lines.join('\n');
    }
  }

  if (linksAdded > 0) {
    // Write the modified file
    const newContent = article.frontmatter + body;
    fs.writeFileSync(path.join(ARTICLES_DIR, article.file), newContent);
    totalLinksAdded += linksAdded;
    articlesModified++;
    if (articlesModified % 100 === 0) {
      console.log(`  Processed ${articlesModified} articles, ${totalLinksAdded} links added...`);
    }
  }
}

console.log(`\nDone!`);
console.log(`  Articles modified: ${articlesModified}`);
console.log(`  Total links added: ${totalLinksAdded}`);
console.log(`  Avg links added per modified article: ${(totalLinksAdded / (articlesModified || 1)).toFixed(1)}`);
