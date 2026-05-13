/**
 * rewrite-hero-alts.mjs
 *
 * Replaces the templated `heroAlt:` value
 *   "Editorial photograph representing the concept of {topic}"
 * with a unique alt derived from the article's frontmatter description
 * (its first sentence). This kills the AI-templated signal and gives
 * Google Image Search + screen readers real semantic content.
 *
 * Usage:
 *   node scripts/audits/rewrite-hero-alts.mjs --dry-run   # report only
 *   node scripts/audits/rewrite-hero-alts.mjs             # write
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ARTICLES = path.resolve(__dirname, '../../src/content/articles');
const DRY = process.argv.includes('--dry-run');
const TODAY = '2026-05-12';

const TEMPLATE_PREFIX = 'Editorial photograph representing the concept of';

function firstSentence(text) {
  if (!text) return '';
  // Strip leading whitespace, take up to first sentence terminator
  const trimmed = text.trim();
  const m = trimmed.match(/^([^.!?]+[.!?])/);
  return (m ? m[1] : trimmed).replace(/[.!?]\s*$/, '').trim();
}

function deriveAlt({ title, description, slug }) {
  const sentence = firstSentence(description);
  // Sanity: 25-160 chars, otherwise fall back
  if (sentence && sentence.length >= 25 && sentence.length <= 160) {
    return sentence;
  }
  // Fallback: title-based
  const cleanTitle = title.replace(/^What Is (an? )?/i, '').replace(/\?$/, '').trim();
  return `${cleanTitle} — concept visualization`;
}

function parseFrontmatter(src) {
  const m = src.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!m) return null;
  const yaml = m[1];
  const get = (key) => {
    const r = new RegExp(`^${key}:\\s*"?(.+?)"?\\s*$`, 'm');
    const mm = yaml.match(r);
    return mm ? mm[1] : '';
  };
  return { title: get('title'), slug: get('slug'), description: get('description') };
}

const files = fs.readdirSync(ARTICLES).filter(f => f.endsWith('.md'));
const samples = [];
let edited = 0;
let skipped = 0;
let fallback = 0;

for (const file of files) {
  const fp = path.join(ARTICLES, file);
  const src = fs.readFileSync(fp, 'utf-8');
  const fm = parseFrontmatter(src);
  if (!fm) { skipped++; continue; }

  const altLine = src.match(/^heroAlt:\s*"([^"]*)"\s*$/m);
  if (!altLine) { skipped++; continue; }
  const currentAlt = altLine[1];

  // Only rewrite if the current alt matches the templated pattern
  if (!currentAlt.startsWith(TEMPLATE_PREFIX)) {
    skipped++;
    continue;
  }

  const newAlt = deriveAlt(fm);
  // Escape any double quotes (rare in descriptions but possible)
  const safeAlt = newAlt.replace(/"/g, '\\"');
  const usedFallback = !firstSentence(fm.description) ||
    firstSentence(fm.description).length < 25 ||
    firstSentence(fm.description).length > 160;
  if (usedFallback) fallback++;

  if (samples.length < 12) {
    samples.push({ slug: fm.slug, before: currentAlt, after: newAlt });
  }

  if (!DRY) {
    let updated = src.replace(altLine[0], `heroAlt: "${safeAlt}"`);
    // Bump dateModified (the audit already touched 213 + 3, leave those alone if newer)
    updated = updated.replace(
      /^dateModified:\s*"[^"]*"\s*$/m,
      `dateModified: "${TODAY}"`,
    );
    fs.writeFileSync(fp, updated, 'utf-8');
  }
  edited++;
}

console.log(`${DRY ? '[DRY-RUN] Would edit' : 'Edited'}: ${edited}`);
console.log(`Skipped: ${skipped}`);
console.log(`Used title fallback: ${fallback}`);
console.log('\nSample 12 before/after:\n');
for (const s of samples) {
  console.log(`  /${s.slug}`);
  console.log(`    -  ${s.before}`);
  console.log(`    +  ${s.after}\n`);
}

if (!DRY) {
  fs.writeFileSync(
    path.resolve(__dirname, '../../.audit-rewrite-hero-alts.json'),
    JSON.stringify({ edited, skipped, fallback, samples }, null, 2),
  );
}
