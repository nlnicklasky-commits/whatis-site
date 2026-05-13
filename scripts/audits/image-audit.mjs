#!/usr/bin/env node
/**
 * Image asset audit for WhatIs.site
 *
 * Computes:
 *  1. Articles whose heroImage points to a missing file
 *  2. Orphan images (in public/images/articles/ but unreferenced)
 *  3. heroAlt entries that match the default template
 *     "Editorial photograph representing the concept of X"
 *  4. heroAlt that is missing, empty, or shorter than 15 chars
 *  5. Top 20 largest image files by size
 *  6. Total image storage in MB
 *  7. Image format distribution
 *
 * Outputs:
 *  - .audit-images.json (full JSON report)
 *  - Markdown summary printed to stdout (< 300 words)
 */

import { readdirSync, readFileSync, statSync, writeFileSync } from 'node:fs';
import { join, extname, basename } from 'node:path';

const ROOT = 'c:/Users/nlnic/Documents/Projects/whatis-site';
const ARTICLES_DIR = join(ROOT, 'src/content/articles');
const IMAGES_DIR = join(ROOT, 'public/images/articles');
const OUT_JSON = join(ROOT, '.audit-images.json');

const DEFAULT_ALT_RE = /^Editorial photograph representing the concept of .+$/i;

function parseFrontmatter(md) {
  // crude but robust YAML-ish frontmatter parser for the fields we need
  if (!md.startsWith('---')) return {};
  const end = md.indexOf('\n---', 3);
  if (end === -1) return {};
  const block = md.slice(3, end).split(/\r?\n/);
  const fm = {};
  for (const line of block) {
    const m = line.match(/^([A-Za-z0-9_]+):\s*(.*)$/);
    if (!m) continue;
    const key = m[1];
    let val = m[2].trim();
    // strip wrapping quotes
    if ((val.startsWith('"') && val.endsWith('"')) ||
        (val.startsWith("'") && val.endsWith("'"))) {
      val = val.slice(1, -1);
    }
    fm[key] = val;
  }
  return fm;
}

// 1. Walk articles
const articleFiles = readdirSync(ARTICLES_DIR).filter(f => f.endsWith('.md'));
const articles = [];
for (const f of articleFiles) {
  const md = readFileSync(join(ARTICLES_DIR, f), 'utf8');
  const fm = parseFrontmatter(md);
  articles.push({
    file: f,
    slug: fm.slug || f.replace(/\.md$/, ''),
    heroImage: fm.heroImage || '',
    heroAlt: fm.heroAlt || ''
  });
}

// 2. Walk image dir
const imageFiles = readdirSync(IMAGES_DIR);
const imageSet = new Set(imageFiles);
const imageStats = imageFiles.map(name => {
  const full = join(IMAGES_DIR, name);
  const st = statSync(full);
  return {
    name,
    sizeBytes: st.size,
    sizeKB: +(st.size / 1024).toFixed(1),
    ext: extname(name).toLowerCase()
  };
});

// --- 1. Missing hero images ---
const missingHero = [];
const referencedImages = new Set();
for (const a of articles) {
  if (!a.heroImage) continue;
  // heroImage is like /images/articles/foo-hero.webp
  const base = basename(a.heroImage);
  referencedImages.add(base);
  if (!imageSet.has(base)) {
    missingHero.push({ slug: a.slug, heroImage: a.heroImage });
  }
}

// --- 2. Orphan images (in dir but unreferenced) ---
// Always keep placeholder.svg as referenced (used by fallback in layout)
referencedImages.add('placeholder.svg');
const orphans = imageFiles.filter(n => !referencedImages.has(n));

// --- 3. Default-template heroAlt ---
const defaultAlt = articles.filter(a => DEFAULT_ALT_RE.test(a.heroAlt));

// --- 4. Missing / empty / short heroAlt ---
const weakAlt = articles
  .filter(a => !a.heroAlt || a.heroAlt.trim().length < 15)
  .map(a => ({ slug: a.slug, heroAlt: a.heroAlt, length: a.heroAlt.length }));

// --- 5. Largest files ---
const largest = [...imageStats]
  .sort((a, b) => b.sizeBytes - a.sizeBytes)
  .slice(0, 20)
  .map(({ name, sizeKB }) => ({ name, sizeKB }));

// --- 6. Total storage ---
const totalBytes = imageStats.reduce((s, x) => s + x.sizeBytes, 0);
const totalMB = +(totalBytes / (1024 * 1024)).toFixed(2);

// --- 7. Format distribution ---
const formatDist = {};
for (const s of imageStats) {
  const ext = s.ext || '(none)';
  formatDist[ext] = (formatDist[ext] || 0) + 1;
}

const report = {
  generatedAt: new Date().toISOString(),
  totals: {
    articles: articles.length,
    imageFiles: imageFiles.length,
    totalImageStorageMB: totalMB,
    formatDistribution: formatDist
  },
  missingHeroImages: {
    count: missingHero.length,
    sample: missingHero.slice(0, 50)
  },
  orphanImages: {
    count: orphans.length,
    sample: orphans.slice(0, 30)
  },
  defaultTemplateAlt: {
    count: defaultAlt.length,
    pattern: 'Editorial photograph representing the concept of X',
    sampleSlugs: defaultAlt.slice(0, 20).map(a => a.slug)
  },
  weakOrMissingAlt: {
    count: weakAlt.length,
    items: weakAlt
  },
  largestImages: largest
};

writeFileSync(OUT_JSON, JSON.stringify(report, null, 2));

// --- Markdown summary ---
const fmtPct = (n, d) => d ? `${((n / d) * 100).toFixed(1)}%` : '0%';
const fmtDist = Object.entries(formatDist)
  .sort((a, b) => b[1] - a[1])
  .map(([ext, n]) => `${ext} ${n}`)
  .join(', ');

const md = `# Image Audit Summary

**Generated:** ${report.generatedAt}
**Articles scanned:** ${articles.length}
**Image files:** ${imageFiles.length}
**Total storage:** ${totalMB} MB
**Formats:** ${fmtDist}

## Findings

- **Missing hero images:** ${missingHero.length} articles reference a heroImage that does not exist on disk (${fmtPct(missingHero.length, articles.length)} of articles). These fall back to placeholder.svg at build time.
- **Orphan images:** ${orphans.length} files in \`public/images/articles/\` are not referenced by any article. Candidates for deletion to reduce repo size.
- **Default-template heroAlt:** ${defaultAlt.length} articles use the generic pattern *"Editorial photograph representing the concept of X"* (${fmtPct(defaultAlt.length, articles.length)} of articles). This is weak alt text for SEO and accessibility — it tells screen readers and search engines nothing the title doesn't already say.
- **Missing / empty / short (<15 chars) heroAlt:** ${weakAlt.length} articles.
- **Largest single image:** ${largest[0]?.name} at ${largest[0]?.sizeKB} KB.

## Top-line risks

1. ${defaultAlt.length > 100 ? `Sitewide alt-text problem — ${defaultAlt.length} articles share the same template phrase. Image search and AI Overviews want descriptive alt text. Worth a one-pass rewrite using the article title + key entities.` : 'Alt-text template is contained.'}
2. ${missingHero.length > 0 ? `${missingHero.length} hero images are missing on disk. Users see a blue placeholder. Either generate the WebPs or update the frontmatter.` : 'All hero images resolve.'}
3. ${orphans.length > 50 ? `${orphans.length} orphan images bloat the repo. Audit and prune.` : 'Orphan image count is low.'}

Full data: \`.audit-images.json\`
`;

console.log(md);
