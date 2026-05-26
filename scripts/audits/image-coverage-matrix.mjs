#!/usr/bin/env node
/**
 * Image coverage matrix for WhatIs.site (read-only audit).
 *
 * For every article in src/content/articles/*.md computes:
 *   (a) heroImage file exists on disk
 *   (b) 400w variant exists  (<base>-400.webp where heroImage is <base>.webp)
 *   (c) 800w variant exists  (<base>-800.webp)
 *   (d) count of in-content/inline markdown images in body  ( ![alt](url) )
 *
 * Cross-references public/images/articles/ for orphans + total storage.
 * Writes .audit-image-coverage.json (gitignored scratch). Does NOT edit source.
 */

import { readdirSync, readFileSync, statSync, writeFileSync } from 'node:fs';
import { join, extname, basename } from 'node:path';

const ROOT = 'c:/Users/nlnic/Documents/Projects/whatis-site';
const ARTICLES_DIR = join(ROOT, 'src/content/articles');
const IMAGES_DIR = join(ROOT, 'public/images/articles');
const OUT_JSON = join(ROOT, '.audit-image-coverage.json');

function parseFrontmatter(md) {
  if (!md.startsWith('---')) return { fm: {}, body: md };
  const end = md.indexOf('\n---', 3);
  if (end === -1) return { fm: {}, body: md };
  const block = md.slice(3, end).split(/\r?\n/);
  const body = md.slice(end + 4);
  const fm = {};
  for (const line of block) {
    const m = line.match(/^([A-Za-z0-9_]+):\s*(.*)$/);
    if (!m) continue;
    let val = m[2].trim();
    if ((val.startsWith('"') && val.endsWith('"')) ||
        (val.startsWith("'") && val.endsWith("'"))) {
      val = val.slice(1, -1);
    }
    fm[m[1]] = val;
  }
  return { fm, body };
}

// Inline markdown image pattern: ![alt](url) — NOT preceded by extra char that
// would make it a link. Standard ![...](...) form.
const INLINE_IMG_RE = /!\[[^\]]*\]\(([^)]+)\)/g;

// 1. Walk articles
const articleFiles = readdirSync(ARTICLES_DIR).filter(f => f.endsWith('.md'));
const articles = [];
for (const f of articleFiles) {
  const md = readFileSync(join(ARTICLES_DIR, f), 'utf8');
  const { fm, body } = parseFrontmatter(md);
  const inlineImgs = [];
  let m;
  INLINE_IMG_RE.lastIndex = 0;
  while ((m = INLINE_IMG_RE.exec(body)) !== null) inlineImgs.push(m[1]);
  articles.push({
    file: f,
    slug: fm.slug || f.replace(/\.md$/, ''),
    category: fm.category || '(none)',
    heroImage: fm.heroImage || '',
    inlineImages: inlineImgs
  });
}

// 2. Walk image dir
const imageFiles = readdirSync(IMAGES_DIR);
const imageSet = new Set(imageFiles);
const imageStats = imageFiles.map(name => {
  const st = statSync(join(IMAGES_DIR, name));
  return { name, sizeBytes: st.size, ext: extname(name).toLowerCase() };
});

// 3. Per-article coverage
const referenced = new Set();
referenced.add('placeholder.svg'); // layout fallback — never an orphan

let heroPresent = 0, w400Present = 0, w800Present = 0, inContentPresent = 0;
const missingHero = [], missing400 = [], missing800 = [];
const withInline = [];

for (const a of articles) {
  const heroBase = a.heroImage ? basename(a.heroImage) : '';        // foo-hero.webp
  const stem = heroBase.replace(/\.webp$/i, '');                    // foo-hero
  const v400 = stem ? `${stem}-400.webp` : '';
  const v800 = stem ? `${stem}-800.webp` : '';

  if (heroBase) referenced.add(heroBase);
  if (v400) referenced.add(v400);
  if (v800) referenced.add(v800);
  for (const u of a.inlineImages) {
    if (u.startsWith('/images/articles/')) referenced.add(basename(u));
  }

  const heroOk = heroBase && imageSet.has(heroBase);
  const ok400 = v400 && imageSet.has(v400);
  const ok800 = v800 && imageSet.has(v800);

  if (heroOk) heroPresent++; else missingHero.push({ slug: a.slug, category: a.category, heroImage: a.heroImage });
  if (ok400) w400Present++; else missing400.push({ slug: a.slug, category: a.category, expected: v400 });
  if (ok800) w800Present++; else missing800.push({ slug: a.slug, category: a.category, expected: v800 });
  if (a.inlineImages.length > 0) {
    inContentPresent++;
    withInline.push({ slug: a.slug, category: a.category, count: a.inlineImages.length, images: a.inlineImages });
  }
}

// 4. Orphans + storage
const orphans = imageStats.filter(s => !referenced.has(s.name));
const totalBytes = imageStats.reduce((s, x) => s + x.sizeBytes, 0);
const orphanBytes = orphans.reduce((s, x) => s + x.sizeBytes, 0);

const fmtPct = (n, d) => d ? +((n / d) * 100).toFixed(1) : 0;
const N = articles.length;

const report = {
  generatedAt: new Date().toISOString(),
  totals: {
    articles: N,
    imageFiles: imageFiles.length,
    totalImageStorageMB: +(totalBytes / (1024 * 1024)).toFixed(2),
    orphanStorageMB: +(orphanBytes / (1024 * 1024)).toFixed(2)
  },
  coverage: {
    heroPresent: { count: heroPresent, pct: fmtPct(heroPresent, N), missing: missingHero.length },
    w400Present: { count: w400Present, pct: fmtPct(w400Present, N), missing: missing400.length },
    w800Present: { count: w800Present, pct: fmtPct(w800Present, N), missing: missing800.length },
    inContentImagePresent: { count: inContentPresent, pct: fmtPct(inContentPresent, N) }
  },
  gaps: {
    missingHero,
    missing400,
    missing800
  },
  inContent: {
    articlesWithInline: inContentPresent,
    items: withInline
  },
  orphans: {
    count: orphans.length,
    storageMB: +(orphanBytes / (1024 * 1024)).toFixed(2),
    files: orphans.map(o => ({ name: o.name, sizeKB: +(o.sizeBytes / 1024).toFixed(1) }))
  }
};

writeFileSync(OUT_JSON, JSON.stringify(report, null, 2));

console.log(`Articles: ${N}`);
console.log(`Hero present:   ${heroPresent} (${fmtPct(heroPresent, N)}%)  missing ${missingHero.length}`);
console.log(`400w present:   ${w400Present} (${fmtPct(w400Present, N)}%)  missing ${missing400.length}`);
console.log(`800w present:   ${w800Present} (${fmtPct(w800Present, N)}%)  missing ${missing800.length}`);
console.log(`In-content img: ${inContentPresent} (${fmtPct(inContentPresent, N)}%)`);
console.log(`Image files: ${imageFiles.length}  total ${report.totals.totalImageStorageMB} MB`);
console.log(`Orphans: ${orphans.length}  (${report.totals.orphanStorageMB} MB)`);
console.log(`Wrote ${OUT_JSON}`);
