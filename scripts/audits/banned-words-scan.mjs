#!/usr/bin/env node
/**
 * banned-words-scan.mjs
 *
 * Audits every article in src/content/articles/ for violations of the
 * humanization rules documented in CLAUDE.md.
 *
 * Outputs:
 *   - .audit-content-quality.json at the repo root (machine-readable)
 *   - A summary printed to stdout (human-readable)
 *
 * Usage:
 *   node scripts/audits/banned-words-scan.mjs
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const REPO_ROOT = path.resolve(__dirname, '..', '..');
const ARTICLES_DIR = path.join(REPO_ROOT, 'src', 'content', 'articles');
const OUT_PATH = path.join(REPO_ROOT, '.audit-content-quality.json');

const BANNED_WORDS = [
  'delve', 'tapestry', 'multifaceted', 'comprehensive', 'realm', 'landscape',
  'paradigm', 'innovative', 'cutting-edge', 'leverage', 'utilize', 'harness',
  'robust', 'pivotal', 'testament', 'cornerstone', 'underpinning', 'embark',
  'navigate', 'foster', 'cultivate', 'synergy', 'holistic', 'dynamic',
  'transformative', 'groundbreaking', 'spearhead', 'revolutionize', 'advent',
  'plethora'
];

const BANNED_PHRASES = [
  "it's important to note",
  "it's worth noting",
  "in today's world",
  "at its core",
  "in the realm of",
  "serves as a",
  "plays a crucial role",
  "it is important to understand",
  "one cannot overstate",
  "the power of",
  "when it comes to",
  "at the end of the day",
  "has become increasingly",
  "in an era of"
];

// Common English contractions used to detect AI-flat voice.
const CONTRACTION_REGEX = /\b(?:don't|doesn't|didn't|won't|wouldn't|can't|cannot|couldn't|isn't|aren't|wasn't|weren't|hasn't|haven't|hadn't|shouldn't|mustn't|mightn't|i'm|i've|i'd|i'll|you're|you've|you'd|you'll|he's|she's|it's|we're|we've|we'd|we'll|they're|they've|they'd|they'll|that's|there's|here's|what's|who's|where's|let's|y'all)\b/gi;

function escapeRegex(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

// Build a per-word matcher. We use lookarounds so that "cutting-edge" still
// works (the hyphen is part of the word) but boundaries are enforced.
function buildWordRegex(word) {
  // For words containing hyphens, default \b is unreliable, so we use
  // non-word lookarounds with the hyphen treated as part of the token.
  const escaped = escapeRegex(word);
  return new RegExp(`(?<![A-Za-z0-9_-])${escaped}(?![A-Za-z0-9_-])`, 'gi');
}

const wordRegexes = Object.fromEntries(
  BANNED_WORDS.map((w) => [w, buildWordRegex(w)])
);

function stripFrontmatter(raw) {
  // YAML frontmatter is everything between the first two --- delimiters.
  if (!raw.startsWith('---')) return { frontmatter: '', body: raw };
  const closingIdx = raw.indexOf('\n---', 3);
  if (closingIdx === -1) return { frontmatter: '', body: raw };
  const fm = raw.slice(0, closingIdx + 4); // include closing ---
  let body = raw.slice(closingIdx + 4);
  if (body.startsWith('\n')) body = body.slice(1);
  return { frontmatter: fm, body };
}

function extractTitleFromFrontmatter(fm) {
  const match = fm.match(/^title:\s*(.+)$/m);
  if (!match) return '';
  return match[1].trim().replace(/^['"]|['"]$/g, '');
}

function countWord(word, text) {
  const re = wordRegexes[word];
  re.lastIndex = 0;
  const matches = text.match(re);
  return matches ? matches.length : 0;
}

function countPhrase(phrase, text) {
  // Case-insensitive substring count.
  const lower = text.toLowerCase();
  const target = phrase.toLowerCase();
  if (!target) return 0;
  let count = 0;
  let idx = 0;
  while ((idx = lower.indexOf(target, idx)) !== -1) {
    count++;
    idx += target.length;
  }
  return count;
}

function firstParagraph(body) {
  // Skip leading blank lines and skip headings until we find a real prose
  // paragraph. A paragraph ends at a blank line.
  const lines = body.split(/\r?\n/);
  const paraLines = [];
  let started = false;
  for (const rawLine of lines) {
    const line = rawLine.trim();
    if (!started) {
      if (line === '') continue;
      if (line.startsWith('#')) continue; // skip H1/H2
      if (line.startsWith('>')) continue; // skip blockquote callouts
      if (line.startsWith('![')) continue; // skip image-only line
      started = true;
      paraLines.push(line);
      continue;
    }
    if (line === '') break;
    if (line.startsWith('#')) break;
    paraLines.push(line);
  }
  return paraLines.join(' ').trim();
}

function countSentences(text) {
  if (!text) return 0;
  // Naive sentence splitter — splits on . ! ? followed by whitespace or end.
  // Filters out empty matches and very short fragments.
  const stripped = text.replace(/\b(?:e\.g|i\.e|etc|vs|mr|mrs|dr|st|no)\.\s*/gi, '$&');
  const parts = stripped.split(/(?<=[.!?])\s+(?=[A-Z0-9"'“])/);
  return parts.filter((p) => p.trim().length > 0).length;
}

function listMarkdownFiles(dir) {
  const out = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      out.push(...listMarkdownFiles(full));
    } else if (entry.isFile() && entry.name.endsWith('.md')) {
      out.push(full);
    }
  }
  return out;
}

function main() {
  if (!fs.existsSync(ARTICLES_DIR)) {
    console.error(`Articles directory not found: ${ARTICLES_DIR}`);
    process.exit(1);
  }

  const files = listMarkdownFiles(ARTICLES_DIR);
  const violationTotals = Object.create(null); // term -> total count
  const articleStats = []; // per-file detail

  let articlesWithAnyViolation = 0;
  let comprehensiveInBodyArticles = 0;
  let comprehensiveInTitleArticles = 0;
  let comprehensiveBodyTotal = 0;
  let comprehensiveTitleTotal = 0;

  let tripleEmDashCount = 0;
  let articlesWithTripleEmDash = 0;
  let zeroContractionArticles = [];
  let longFirstParagraphArticles = [];

  for (const file of files) {
    const raw = fs.readFileSync(file, 'utf8');
    const { frontmatter, body } = stripFrontmatter(raw);
    const fileName = path.basename(file);
    const title = extractTitleFromFrontmatter(frontmatter);

    // Banned words in body
    const wordCounts = {};
    let totalBanned = 0;
    for (const word of BANNED_WORDS) {
      const c = countWord(word, body);
      if (c > 0) {
        wordCounts[word] = c;
        totalBanned += c;
        violationTotals[word] = (violationTotals[word] || 0) + c;
      }
    }

    // Banned phrases in body
    const phraseCounts = {};
    for (const phrase of BANNED_PHRASES) {
      const c = countPhrase(phrase, body);
      if (c > 0) {
        phraseCounts[phrase] = c;
        totalBanned += c;
        violationTotals[phrase] = (violationTotals[phrase] || 0) + c;
      }
    }

    if (totalBanned > 0) articlesWithAnyViolation++;

    // Track "comprehensive" title vs body.
    const compInBody = wordCounts['comprehensive'] || 0;
    if (compInBody > 0) {
      comprehensiveInBodyArticles++;
      comprehensiveBodyTotal += compInBody;
    }
    const titleLower = title.toLowerCase();
    const compInTitle = (titleLower.match(/\bcomprehensive\b/g) || []).length;
    if (compInTitle > 0) {
      comprehensiveInTitleArticles++;
      comprehensiveTitleTotal += compInTitle;
    }

    // Voice patterns
    // Triple em-dash --- (three or more hyphens) — but only after we strip
    // frontmatter so the YAML delimiters aren't double-counted. Markdown HR
    // lines are also `---` on their own line; we exclude those.
    const tripleEm = (body.match(/(?<!^|\n)-{3,}(?!\n|$)/gm) || []).length
      + (body.match(/—\s*—\s*—/g) || []).length;
    if (tripleEm > 0) {
      articlesWithTripleEmDash++;
      tripleEmDashCount += tripleEm;
    }

    const contractionMatches = body.match(CONTRACTION_REGEX) || [];
    const contractionCount = contractionMatches.length;
    if (contractionCount === 0) {
      zeroContractionArticles.push(fileName);
    }

    const firstPara = firstParagraph(body);
    const firstParaSentences = countSentences(firstPara);
    if (firstParaSentences > 4) {
      longFirstParagraphArticles.push({
        file: fileName,
        sentences: firstParaSentences,
        chars: firstPara.length,
      });
    }

    articleStats.push({
      file: fileName,
      title,
      totalViolations: totalBanned,
      wordCounts,
      phraseCounts,
      compInBody,
      compInTitle,
      tripleEmDashHits: tripleEm,
      contractions: contractionCount,
      firstParagraphSentences: firstParaSentences,
    });
  }

  // Sort + slice top lists.
  const sortedViolations = Object.entries(violationTotals)
    .sort((a, b) => b[1] - a[1]);
  const top20Violations = sortedViolations.slice(0, 20);

  const top20Articles = [...articleStats]
    .sort((a, b) => b.totalViolations - a.totalViolations)
    .slice(0, 20)
    .map((a) => ({
      file: a.file,
      title: a.title,
      totalViolations: a.totalViolations,
      breakdown: { ...a.wordCounts, ...a.phraseCounts },
    }));

  const longestFirstParas = [...longFirstParagraphArticles]
    .sort((a, b) => b.sentences - a.sentences)
    .slice(0, 25);

  const report = {
    scannedAt: new Date().toISOString(),
    articlesScanned: files.length,
    articlesWithAnyViolation,
    pctArticlesWithViolation: +(100 * articlesWithAnyViolation / files.length).toFixed(2),
    totalViolationsOverall: sortedViolations.reduce((s, [, c]) => s + c, 0),
    top20Violations: top20Violations.map(([term, count]) => ({ term, count })),
    top20Articles,
    comprehensive: {
      bodyOccurrences: comprehensiveBodyTotal,
      titleOccurrences: comprehensiveTitleTotal,
      articlesWithInBody: comprehensiveInBodyArticles,
      articlesWithInTitle: comprehensiveInTitleArticles,
      note: 'Title hits are reported separately because they are visible to readers/SEO and may be intentional, whereas body uses are clear humanization violations.',
    },
    voicePatterns: {
      tripleEmDash: {
        articlesWith: articlesWithTripleEmDash,
        totalHits: tripleEmDashCount,
        note: 'Triple em-dash usage signals more humanized prose. Higher is generally better.',
      },
      zeroContractions: {
        articlesWith: zeroContractionArticles.length,
        sample: zeroContractionArticles.slice(0, 25),
        note: 'Articles with zero contractions in the body are likely AI-flat. Recommend mixing in "don\'t / you\'re / it\'s" naturally.',
      },
      longFirstParagraph: {
        articlesWith: longFirstParagraphArticles.length,
        top: longestFirstParas,
        note: 'First paragraphs longer than 4 sentences fail citation-worthiness. GEO rules require a clean definition under 3 sentences.',
      },
    },
    allViolationTotals: Object.fromEntries(sortedViolations),
  };

  fs.writeFileSync(OUT_PATH, JSON.stringify(report, null, 2));

  // Print a short summary to stdout for the agent.
  console.log(`Scanned ${files.length} articles`);
  console.log(`Articles with at least one violation: ${articlesWithAnyViolation} (${report.pctArticlesWithViolation}%)`);
  console.log(`Total banned-term occurrences: ${report.totalViolationsOverall}`);
  console.log('');
  console.log('Top 20 most frequent violations:');
  for (const { term, count } of report.top20Violations) {
    console.log(`  ${count.toString().padStart(6)}  ${term}`);
  }
  console.log('');
  console.log('Top 20 most violating articles:');
  for (const a of report.top20Articles) {
    console.log(`  ${a.totalViolations.toString().padStart(4)}  ${a.file}`);
  }
  console.log('');
  console.log(`"comprehensive" in body: ${comprehensiveBodyTotal} hits across ${comprehensiveInBodyArticles} articles`);
  console.log(`"comprehensive" in title: ${comprehensiveTitleTotal} hits across ${comprehensiveInTitleArticles} articles`);
  console.log('');
  console.log(`Triple em-dash usage: ${tripleEmDashCount} hits across ${articlesWithTripleEmDash} articles`);
  console.log(`Articles with zero contractions: ${zeroContractionArticles.length}`);
  console.log(`Articles with first paragraph >4 sentences: ${longFirstParagraphArticles.length}`);
  console.log('');
  console.log(`Wrote raw report to: ${OUT_PATH}`);
}

main();
