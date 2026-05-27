#!/usr/bin/env node
/**
 * Hero alt-text QUALITY audit for WhatIs.site (gitignored scratch).
 *
 * Goal: quantify the P2 defect from out/r-1779812042/t2-alt-seo.md —
 * heroAlt RESTATES THE TOPIC rather than DESCRIBING THE IMAGE.
 *
 * Computes over src/content/articles/*.md:
 *  - length distribution of heroAlt (min/mean/max, buckets, % >125)
 *  - missing/empty heroAlt
 *  - exact duplicate heroAlt across corpus
 *  - "topic-restatement" classification: alt opens with the subject
 *    followed by a copular/definitional verb (is/are/was/were/refers to/
 *    means/describes/explained/covers/explores)
 *  - alts that contain visual/scene language (a hint of being descriptive)
 *  - in-content figure/image alts in article BODIES (markdown ![]() and <img>)
 *    — these are hand-written, descriptive, and must be EXCLUDED from rewrite scope
 *
 * Output: .audit-hero-alt-quality.json (full data) + stdout summary.
 */

import { readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const ROOT = 'c:/Users/nlnic/Documents/Projects/whatis-site';
const ARTICLES_DIR = join(ROOT, 'src/content/articles');
const OUT_JSON = join(ROOT, '.audit-hero-alt-quality.json');
const ALT_MAX = 125;

function splitFrontmatter(md) {
  if (!md.startsWith('---')) return { fm: {}, body: md };
  const end = md.indexOf('\n---', 3);
  if (end === -1) return { fm: {}, body: md };
  const block = md.slice(3, end).split(/\r?\n/);
  const body = md.slice(end + 4);
  const fm = {};
  for (const line of block) {
    const m = line.match(/^([A-Za-z0-9_]+):\s*(.*)$/);
    if (!m) continue;
    const key = m[1];
    let val = m[2].trim();
    if ((val.startsWith('"') && val.endsWith('"')) ||
        (val.startsWith("'") && val.endsWith("'"))) {
      val = val.slice(1, -1);
    }
    fm[key] = val;
  }
  return { fm, body };
}

// Derive the "subject" from slug for restatement detection (e.g. "cold-war-history" -> "cold war history")
function slugWords(slug) {
  return slug.replace(/-/g, ' ').toLowerCase();
}

// Definitional / topic verbs that signal restatement when the SUBJECT is the topic.
// Includes copulas AND the encyclopedic present-tense verbs the rewrite used
// (studies, applies, spans, explains, transforms, enables, delivers, designs, etc.).
const DEF_VERB = /^\s*(is|are|was|were|refers\s+to|means|describes?|denotes?|explained|explores?|covers?|encompasses?|involves?|consists?\s+of|comprises?|studies|study|applies|apply|spans?|explains?|transforms?|enables?|delivers?|designs?|builds?|traces?|removes?|comes?\s+from|uses?|combines?|predicts?|separates?|protects?|interprets?|measures?|analyzes?|focuses?|deals?\s+with|has\s+two)\b/i;

// Visual / scene words that suggest an actual image description
const VISUAL_RE = /\b(photo(graph)?|close[- ]?up|aerial|illustration|diagram|drawing|sketch|portrait|view of|scene|stands?|sits?|holds?|holding|wearing|surrounded|background|foreground|on a|against a|in front of|atop|lined with|covered in|resting|glowing|silhouette|sunset|sunrise|golden hour|rows of|stretching|ascending|placed)\b/i;

// Filler we want to ban in the quality bar (for measuring how many already use it)
const FILLER_RE = /\b(image of|photo of|picture of|a photo showing|an image of|illustration of)\b/i;

const files = readdirSync(ARTICLES_DIR).filter(f => f.endsWith('.md'));

const articles = [];
let bodyImgArticles = 0;
let bodyImgCount = 0;
const bodyImgSamples = [];

for (const f of files) {
  const md = readFileSync(join(ARTICLES_DIR, f), 'utf8');
  const { fm, body } = splitFrontmatter(md);
  const slug = fm.slug || f.replace(/\.md$/, '');
  const heroAlt = fm.heroAlt || '';

  // In-content body images: markdown ![alt](url) and <img ... alt="...">
  const mdImgs = [...body.matchAll(/!\[([^\]]*)\]\(([^)]+)\)/g)];
  const htmlImgs = [...body.matchAll(/<img\b[^>]*\balt=["']([^"']*)["'][^>]*>/gi)];
  const totalBody = mdImgs.length + htmlImgs.length;
  if (totalBody > 0) {
    bodyImgArticles++;
    bodyImgCount += totalBody;
    if (bodyImgSamples.length < 12) {
      bodyImgSamples.push({
        slug,
        mdImgAlts: mdImgs.map(m => m[1]).slice(0, 3),
        htmlImgAlts: htmlImgs.map(m => m[1]).slice(0, 3),
      });
    }
  }

  articles.push({ file: f, slug, heroAlt, len: heroAlt.length });
}

// --- length stats ---
const lens = articles.map(a => a.len);
const min = Math.min(...lens);
const max = Math.max(...lens);
const mean = +(lens.reduce((s, x) => s + x, 0) / lens.length).toFixed(1);
const buckets = { '0 (missing)': 0, '1-14': 0, '15-39': 0, '40-79': 0, '80-125': 0, '126+': 0 };
for (const l of lens) {
  if (l === 0) buckets['0 (missing)']++;
  else if (l < 15) buckets['1-14']++;
  else if (l < 40) buckets['15-39']++;
  else if (l < 80) buckets['40-79']++;
  else if (l <= 125) buckets['80-125']++;
  else buckets['126+']++;
}
const over125 = articles.filter(a => a.len > ALT_MAX);

// --- missing / empty ---
const missing = articles.filter(a => a.heroAlt.trim().length === 0);

// --- exact duplicates ---
const altMap = new Map();
for (const a of articles) {
  const k = a.heroAlt.trim().toLowerCase();
  if (!altMap.has(k)) altMap.set(k, []);
  altMap.get(k).push(a.slug);
}
const dupes = [...altMap.entries()].filter(([, slugs]) => slugs.length > 1);

// --- topic restatement detection ---
// An alt is a restatement if it OPENS WITH THE SUBJECT followed by a definitional verb.
// Robust check: does the alt's leading words match the slug words, and is the next token a DEF_VERB?
function isRestatement(a) {
  const alt = a.heroAlt.trim();
  if (!alt) return false;
  const probe = alt.toLowerCase().replace(/^(the|a|an)\s+/, '');

  // Subject candidates from slug: full ("cold war history"), minus trailing topic suffix
  const full = slugWords(a.slug);
  const noSuffix = full.replace(/\b(history|theory|engineering|studies|science|arts?)\b/g, '').trim();
  const firstWord = full.split(/\s+/)[0];
  const candidates = [full, noSuffix, firstWord].filter(Boolean);

  // 1) Alt begins with the topic subject, immediately followed by a definitional verb.
  for (const c of candidates) {
    if (probe.startsWith(c)) {
      const rest = probe.slice(c.length);
      if (DEF_VERB.test(rest)) return true;
    }
  }

  // 2) Generic "<Capitalized subject phrase> <def-verb> ..." in the first 8 words,
  //    catching restatements whose subject wording differs slightly from the slug
  //    (e.g. "Amateur radio -- often called ham radio -- is ...").
  const firstChunk = alt.split(/\s+/).slice(0, 9).join(' ');
  // strip parenthetical/dash asides so "X — also called Y — is" still matches "X is"
  const stripped = firstChunk.replace(/\s*[—\-]{1,2}.*?[—\-]{1,2}\s*/g, ' ').replace(/\([^)]*\)/g, ' ');
  if (/^[A-Z][a-zA-Z\s,]*?\b(is|are|was|were|refers to|means|describes?|denotes?|explores?|explained|covers?|encompasses?|involves?|comprises?|studies|study|applies|apply|spans?|explains?|transforms?|enables?|delivers?|designs?|builds?|traces?|removes?|comes? from|uses?|combines?|predicts?|separates?|protects?|interprets?|measures?|analyzes?|focuses?|deals? with|has two)\b/.test(stripped)) {
    if (!VISUAL_RE.test(firstChunk)) return true;
  }
  return false;
}

const restatements = articles.filter(isRestatement);
const notRestatement = articles.filter(a => !isRestatement(a));

// --- visual/descriptive language present? ---
const hasVisual = articles.filter(a => VISUAL_RE.test(a.heroAlt));
const hasFiller = articles.filter(a => FILLER_RE.test(a.heroAlt));

// --- "already descriptive" estimate: has visual language AND is NOT a restatement ---
const alreadyDescriptive = articles.filter(a => VISUAL_RE.test(a.heroAlt) && !isRestatement(a));

const report = {
  generatedAt: new Date().toISOString(),
  totals: { articles: articles.length },
  length: { min, mean, max, buckets, over125: over125.length, pctOver125: +((over125.length / articles.length) * 100).toFixed(1) },
  missing: { count: missing.length, slugs: missing.map(a => a.slug).slice(0, 20) },
  duplicates: { groups: dupes.length, items: dupes.slice(0, 20).map(([alt, slugs]) => ({ alt, slugs })) },
  restatement: {
    count: restatements.length,
    pct: +((restatements.length / articles.length) * 100).toFixed(1),
    sample: restatements.slice(0, 30).map(a => ({ slug: a.slug, heroAlt: a.heroAlt, len: a.len })),
  },
  notRestatement: {
    count: notRestatement.length,
    sample: notRestatement.slice(0, 40).map(a => ({ slug: a.slug, heroAlt: a.heroAlt, len: a.len })),
  },
  visualLanguage: { count: hasVisual.length, sample: hasVisual.slice(0, 30).map(a => ({ slug: a.slug, heroAlt: a.heroAlt })) },
  alreadyDescriptive: { count: alreadyDescriptive.length, sample: alreadyDescriptive.slice(0, 40).map(a => ({ slug: a.slug, heroAlt: a.heroAlt })) },
  fillerPhrase: { count: hasFiller.length, sample: hasFiller.slice(0, 20).map(a => ({ slug: a.slug, heroAlt: a.heroAlt })) },
  inContentBodyImages: { articlesWithBodyImages: bodyImgArticles, totalBodyImages: bodyImgCount, samples: bodyImgSamples },
};

writeFileSync(OUT_JSON, JSON.stringify(report, null, 2));

console.log(`Articles scanned: ${articles.length}`);
console.log(`Length: min ${min}, mean ${mean}, max ${max}`);
console.log(`Buckets:`, buckets);
console.log(`Over ${ALT_MAX}: ${over125.length} (${report.length.pctOver125}%)`);
console.log(`Missing/empty: ${missing.length}`);
console.log(`Duplicate groups: ${dupes.length}`);
console.log(`Topic-restatement: ${restatements.length} (${report.restatement.pct}%)`);
console.log(`NOT restatement: ${notRestatement.length}`);
console.log(`Visual-language present: ${hasVisual.length}`);
console.log(`Already-descriptive (visual & not restatement): ${alreadyDescriptive.length}`);
console.log(`Filler 'image/photo of': ${hasFiller.length}`);
console.log(`Articles w/ in-content body images: ${bodyImgArticles} (total body imgs ${bodyImgCount})`);
console.log(`\nFull JSON -> ${OUT_JSON}`);
