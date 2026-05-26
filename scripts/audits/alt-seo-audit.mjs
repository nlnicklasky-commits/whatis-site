#!/usr/bin/env node
/**
 * Alt-text & image-SEO audit for WhatIs.site (scratch, gitignored).
 * Reads src/content/articles/*.md, public/images/articles/, dist/ if present.
 * Writes .audit-alt-seo.json
 */
import { readdirSync, readFileSync, statSync, writeFileSync, existsSync } from 'node:fs';
import { join, basename, extname } from 'node:path';

const ROOT = 'c:/Users/nlnic/Documents/Projects/whatis-site';
const ARTICLES_DIR = join(ROOT, 'src/content/articles');
const IMAGES_DIR = join(ROOT, 'public/images/articles');
const OUT_JSON = join(ROOT, '.audit-alt-seo.json');

const DEFAULT_ALT_RE = /^Editorial photograph representing the concept of /i;

function parseFrontmatter(md) {
  if (!md.startsWith('---')) return {};
  const end = md.indexOf('\n---', 3);
  if (end === -1) return {};
  const block = md.slice(3, end).split(/\r?\n/);
  const fm = {};
  for (const line of block) {
    const m = line.match(/^([A-Za-z0-9_]+):\s*(.*)$/);
    if (!m) continue;
    let val = m[2].trim();
    if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
      val = val.slice(1, -1);
    }
    fm[m[1]] = val;
  }
  return fm;
}

// scan article body for markdown/html images (in-content images)
function findBodyImages(md) {
  const end = md.indexOf('\n---', 3);
  const body = end === -1 ? md : md.slice(end + 4);
  const out = [];
  // markdown ![alt](src)
  const mdImg = /!\[([^\]]*)\]\(([^)]+)\)/g;
  let m;
  while ((m = mdImg.exec(body))) out.push({ type: 'md', alt: m[1], src: m[2] });
  // html <img ...>
  const htmlImg = /<img\b[^>]*>/gi;
  while ((m = htmlImg.exec(body))) {
    const tag = m[0];
    const altM = tag.match(/\balt\s*=\s*["']([^"']*)["']/i);
    out.push({ type: 'html', alt: altM ? altM[1] : null, src: (tag.match(/\bsrc\s*=\s*["']([^"']*)["']/i) || [])[1] || '' });
  }
  return out;
}

const articleFiles = readdirSync(ARTICLES_DIR).filter(f => f.endsWith('.md'));
const articles = [];
for (const f of articleFiles) {
  const md = readFileSync(join(ARTICLES_DIR, f), 'utf8');
  const fm = parseFrontmatter(md);
  articles.push({
    file: f,
    slug: fm.slug || f.replace(/\.md$/, ''),
    title: fm.title || '',
    heroImage: fm.heroImage || '',
    heroAlt: fm.heroAlt || '',
    bodyImages: findBodyImages(md),
  });
}

const total = articles.length;

// ---- 1. ALT QUALITY ----
const missing = articles.filter(a => !a.heroAlt || !a.heroAlt.trim());
const tooShort = articles.filter(a => a.heroAlt && a.heroAlt.trim().length > 0 && a.heroAlt.trim().length < 15);
const tooLong = articles.filter(a => a.heroAlt.trim().length > 125);
const stillTemplate = articles.filter(a => DEFAULT_ALT_RE.test(a.heroAlt));

// duplicates
const altMap = new Map();
for (const a of articles) {
  const key = a.heroAlt.trim().toLowerCase();
  if (!key) continue;
  if (!altMap.has(key)) altMap.set(key, []);
  altMap.get(key).push(a.slug);
}
const dupes = [...altMap.entries()].filter(([, v]) => v.length > 1)
  .map(([alt, slugs]) => ({ alt, slugs, count: slugs.length }))
  .sort((a, b) => b.count - a.count);

// keyword-stuffing heuristic: alt that is essentially just the slug words, or
// repeats the same token >=3x, or is a bare title with no verb/sentence structure
function slugWords(slug) { return slug.replace(/-/g, ' ').toLowerCase().split(/\s+/).filter(Boolean); }
const stuffed = [];
for (const a of articles) {
  const alt = a.heroAlt.trim();
  if (!alt) continue;
  const words = alt.toLowerCase().replace(/[^a-z0-9\s]/g, '').split(/\s+/).filter(Boolean);
  // repeated-token check
  const counts = {};
  for (const w of words) if (w.length > 3) counts[w] = (counts[w] || 0) + 1;
  const maxRepeat = Math.max(0, ...Object.values(counts));
  // alt is just slug words verbatim (set equality, no extra natural phrasing)
  const sw = new Set(slugWords(a.slug));
  const altSet = new Set(words.filter(w => w.length > 2));
  const onlySlug = sw.size > 0 && [...altSet].every(w => sw.has(w)) && altSet.size <= sw.size + 1;
  if (maxRepeat >= 3 || onlySlug) stuffed.push({ slug: a.slug, heroAlt: alt, maxRepeat, onlySlug });
}

// length distribution
let lenSum = 0, lenMin = Infinity, lenMax = 0;
const buckets = { '<15': 0, '15-39': 0, '40-79': 0, '80-125': 0, '>125': 0 };
for (const a of articles) {
  const l = a.heroAlt.trim().length;
  lenSum += l; lenMin = Math.min(lenMin, l); lenMax = Math.max(lenMax, l);
  if (l < 15) buckets['<15']++; else if (l < 40) buckets['15-39']++;
  else if (l < 80) buckets['40-79']++; else if (l <= 125) buckets['80-125']++; else buckets['>125']++;
}

// alt that ends with period / starts with capital (sentence vs fragment) — descriptive-of-topic test
// heuristic: does alt describe IMAGE (photo of...) or just restate topic definition?
const describesImage = articles.filter(a => /\b(photo|photograph|image|illustration|diagram|close-up|aerial|view of|shot of|depicting|showing)\b/i.test(a.heroAlt));

// ---- 2. IN-CONTENT IMAGES ----
const bodyImgArticles = articles.filter(a => a.bodyImages.length > 0);
const bodyImgMissingAlt = [];
for (const a of articles) {
  for (const img of a.bodyImages) {
    if (img.alt === null || img.alt.trim() === '') bodyImgMissingAlt.push({ slug: a.slug, src: img.src, type: img.type });
  }
}

// ---- 3. TECHNICAL IMAGE SEO ----
const imageFiles = readdirSync(IMAGES_DIR);
const imageSet = new Set(imageFiles);
const imageStats = imageFiles.map(name => {
  const st = statSync(join(IMAGES_DIR, name));
  return { name, sizeBytes: st.size, sizeKB: +(st.size / 1024).toFixed(1), ext: extname(name).toLowerCase() };
});
const formatDist = {};
for (const s of imageStats) formatDist[s.ext || '(none)'] = (formatDist[s.ext || '(none)'] || 0) + 1;
const totalMB = +(imageStats.reduce((s, x) => s + x.sizeBytes, 0) / (1024 * 1024)).toFixed(2);
const largest = [...imageStats].sort((a, b) => b.sizeBytes - a.sizeBytes).slice(0, 20).map(({ name, sizeKB }) => ({ name, sizeKB }));

// srcset variant coverage: each hero should have -400 and -800
const missingVariants = [];
for (const a of articles) {
  if (!a.heroImage) continue;
  const base = basename(a.heroImage);
  if (!imageSet.has(base)) { missingVariants.push({ slug: a.slug, missing: base, kind: 'main' }); continue; }
  const v400 = base.replace('.webp', '-400.webp');
  const v800 = base.replace('.webp', '-800.webp');
  if (!imageSet.has(v400)) missingVariants.push({ slug: a.slug, missing: v400, kind: '400' });
  if (!imageSet.has(v800)) missingVariants.push({ slug: a.slug, missing: v800, kind: '800' });
}

// filename quality: descriptive vs generic. our pattern is {slug}-hero.webp = descriptive.
const genericNameRe = /^(img|image|photo|hero|untitled|dsc|screenshot|pic)[-_]?\d*\.(webp|png|jpg|jpeg)$/i;
const genericNames = imageFiles.filter(n => genericNameRe.test(n));

// non-webp main assets
const nonWebp = imageStats.filter(s => s.ext && s.ext !== '.webp' && s.ext !== '.svg');

// ---- sitemap check (dist) ----
const distDir = join(ROOT, 'dist');
let sitemapInfo = { built: false };
if (existsSync(distDir)) {
  const distFiles = readdirSync(distDir);
  const sitemaps = distFiles.filter(f => /^sitemap.*\.xml$/.test(f));
  let hasImageNs = false, sampleEntry = '';
  for (const sm of sitemaps) {
    const xml = readFileSync(join(distDir, sm), 'utf8');
    if (xml.includes('xmlns:image') || xml.includes('<image:image>')) { hasImageNs = true; sampleEntry = sm; break; }
  }
  sitemapInfo = { built: true, sitemaps, hasImageExtension: hasImageNs, sampleEntry };
}

const report = {
  generatedAt: new Date().toISOString(),
  totals: { articles: total, imageFiles: imageFiles.length, totalImageStorageMB: totalMB, formatDistribution: formatDist },
  altQuality: {
    missingEmpty: { count: missing.length, sample: missing.slice(0, 10).map(a => a.slug) },
    tooShort: { count: tooShort.length, sample: tooShort.slice(0, 10).map(a => ({ slug: a.slug, heroAlt: a.heroAlt, len: a.heroAlt.length })) },
    tooLong: { count: tooLong.length, sample: tooLong.slice(0, 15).map(a => ({ slug: a.slug, heroAlt: a.heroAlt, len: a.heroAlt.trim().length })) },
    stillTemplate: { count: stillTemplate.length, sample: stillTemplate.slice(0, 10).map(a => a.slug) },
    duplicates: { groups: dupes.length, affected: dupes.reduce((s, d) => s + d.count, 0), top: dupes.slice(0, 15) },
    keywordStuffed: { count: stuffed.length, sample: stuffed.slice(0, 15) },
    describesImageVsTopic: { describesImage: describesImage.length, restatesTopic: total - describesImage.length },
    lengthStats: { min: lenMin, max: lenMax, mean: +(lenSum / total).toFixed(1), buckets },
  },
  inContentImages: {
    articlesWithBodyImages: bodyImgArticles.length,
    totalBodyImages: articles.reduce((s, a) => s + a.bodyImages.length, 0),
    missingAlt: { count: bodyImgMissingAlt.length, sample: bodyImgMissingAlt.slice(0, 20) },
  },
  technical: {
    missingVariants: { count: missingVariants.length, sample: missingVariants.slice(0, 20) },
    genericFilenames: { count: genericNames.length, sample: genericNames.slice(0, 20) },
    nonWebp: { count: nonWebp.length, sample: nonWebp.slice(0, 20) },
    largestImages: largest,
    sitemap: sitemapInfo,
  },
};

writeFileSync(OUT_JSON, JSON.stringify(report, null, 2));
console.log(JSON.stringify({
  articles: total,
  missingEmpty: missing.length,
  tooShort: tooShort.length,
  tooLong: tooLong.length,
  stillTemplate: stillTemplate.length,
  dupeGroups: dupes.length, dupeAffected: dupes.reduce((s, d) => s + d.count, 0),
  stuffed: stuffed.length,
  describesImage: describesImage.length,
  lengthStats: { min: lenMin, max: lenMax, mean: +(lenSum / total).toFixed(1), buckets },
  bodyImages: articles.reduce((s, a) => s + a.bodyImages.length, 0),
  bodyImgMissingAlt: bodyImgMissingAlt.length,
  missingVariants: missingVariants.length,
  genericNames: genericNames.length,
  nonWebp: nonWebp.length,
  largest: largest.slice(0, 8),
  totalMB,
  formatDist,
  sitemap: sitemapInfo,
}, null, 2));
