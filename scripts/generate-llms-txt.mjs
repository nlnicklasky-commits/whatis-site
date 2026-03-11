/**
 * generate-llms-txt.mjs
 *
 * Generates public/llms.txt and public/llms-full.txt at build time.
 * llms.txt — Summary with all categories and top articles per category
 * llms-full.txt — Extended version with article descriptions
 *
 * Run: node scripts/generate-llms-txt.mjs
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const ARTICLES_DIR = path.join(ROOT, 'src', 'content', 'articles');
const CATEGORIES_FILE = path.join(ROOT, 'src', 'data', 'categories.json');
const OUTPUT_LLMS = path.join(ROOT, 'public', 'llms.txt');
const OUTPUT_LLMS_FULL = path.join(ROOT, 'public', 'llms-full.txt');

// Parse YAML-ish frontmatter (simple parser — no dependency needed)
function parseFrontmatter(content) {
  const match = content.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return null;
  const yaml = match[1];
  const data = {};

  for (const line of yaml.split('\n')) {
    const kv = line.match(/^(\w+):\s*"?(.+?)"?\s*$/);
    if (kv) {
      data[kv[1]] = kv[2].replace(/^["']|["']$/g, '');
    }
  }
  return data;
}

// Read all articles
const files = fs.readdirSync(ARTICLES_DIR).filter(f => f.endsWith('.md'));
const articles = [];

for (const file of files) {
  const content = fs.readFileSync(path.join(ARTICLES_DIR, file), 'utf-8');
  const fm = parseFrontmatter(content);
  if (fm && fm.title && fm.slug && fm.category) {
    articles.push({
      title: fm.title,
      slug: fm.slug,
      description: fm.description || '',
      category: fm.category,
      tier: fm.tier || '3',
      wordCount: parseInt(fm.wordCount) || 0,
    });
  }
}

// Read categories
const categories = JSON.parse(fs.readFileSync(CATEGORIES_FILE, 'utf-8'));

// Sort: tier 1 first, then tier 2, then tier 3; within tiers by word count desc
articles.sort((a, b) => {
  const tierDiff = parseInt(a.tier) - parseInt(b.tier);
  if (tierDiff !== 0) return tierDiff;
  return b.wordCount - a.wordCount;
});

// Group by category
const byCategory = {};
for (const cat of categories) {
  byCategory[cat.slug] = articles.filter(a => a.category === cat.slug);
}

// --- Generate llms.txt ---
let llmsTxt = `# WhatIs.site

> WhatIs.site provides clear, human-written explanations of concepts, ideas, and terms across technology, science, finance, philosophy, history, and more. Over ${articles.length.toLocaleString()} articles covering ${categories.length} categories.

## Categories

`;

for (const cat of categories) {
  llmsTxt += `- [${cat.label}](/category/${cat.slug}): ${cat.description}\n`;
}

llmsTxt += `\n## Top Articles by Category\n`;

for (const cat of categories) {
  const catArticles = byCategory[cat.slug] || [];
  if (catArticles.length === 0) continue;

  // Show top 5 per category (prioritizing tier 1 and 2)
  const top = catArticles.slice(0, 5);
  llmsTxt += `\n### ${cat.label}\n\n`;
  for (const a of top) {
    llmsTxt += `- [${a.title}](/${a.slug})\n`;
  }
}

llmsTxt += `\n## About\n\nWhatIs.site is an educational content platform. Each article is structured with a clear definition in the opening paragraph, detailed sections, frequently asked questions, and citations to authoritative sources. Content is designed to be citation-worthy and quotable.\n`;

fs.writeFileSync(OUTPUT_LLMS, llmsTxt);
console.log(`Generated llms.txt (${articles.length} articles across ${categories.length} categories)`);

// --- Generate llms-full.txt ---
let llmsFullTxt = `# WhatIs.site — Full Article Index

> Complete index of all ${articles.length.toLocaleString()} articles on WhatIs.site, organized by category with descriptions.

`;

for (const cat of categories) {
  const catArticles = byCategory[cat.slug] || [];
  if (catArticles.length === 0) continue;

  llmsFullTxt += `## ${cat.label}\n\n`;
  llmsFullTxt += `${cat.description}\n\n`;

  for (const a of catArticles) {
    const desc = a.description ? `: ${a.description}` : '';
    llmsFullTxt += `- [${a.title}](/${a.slug})${desc}\n`;
  }
  llmsFullTxt += `\n`;
}

fs.writeFileSync(OUTPUT_LLMS_FULL, llmsFullTxt);
console.log(`Generated llms-full.txt (${articles.length} articles with descriptions)`);
