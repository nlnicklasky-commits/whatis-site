// Repair truncated meta descriptions. 664 articles carry a templated description
// cut off mid-sentence ("...Discover the...") — bad for SERP snippets. Regenerate
// each from the article's own opening sentence(s): a clean, complete summary
// <=160 chars (Zod max), no markdown, no mid-word cut, ending on a period.
//
// Only touches descriptions that are truncated (end with "..." or contain the
// "Discover the" template). Dry-run by default; apply with --apply.
import { readFileSync, writeFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

const DIR = 'src/content/articles';
const APPLY = process.argv.includes('--apply');
const MAX = 158;

function isTruncated(d) {
  return /\.\.\.\s*$/.test(d) || /\bDiscover the\b/.test(d);
}

// Strip markdown, collapse whitespace.
function clean(s) {
  return s
    .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1') // links -> text
    .replace(/[*_`#>]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

// First prose paragraph after frontmatter (skip headings/blank lines).
function firstParagraph(body) {
  const lines = body.split(/\r?\n/);
  const para = [];
  for (const line of lines) {
    const t = line.trim();
    if (!t) { if (para.length) break; else continue; }
    if (/^#{1,6}\s/.test(t) || /^[-*>|]/.test(t)) { if (para.length) break; else continue; }
    para.push(t);
  }
  return clean(para.join(' '));
}

// Split into sentences (guard common abbreviations).
function sentences(text) {
  const protectedText = text.replace(/\b(e\.g|i\.e|Dr|Mr|Mrs|Ms|St|vs|U\.S|etc|approx|Inc|Ltd|No)\./g, '$1<DOT>');
  return protectedText
    .split(/(?<=[.!?])\s+(?=[A-Z0-9"'])/)
    .map((s) => s.replace(/<DOT>/g, '.').trim())
    .filter(Boolean);
}

function buildDescription(body) {
  const para = firstParagraph(body);
  if (!para) return null;
  const sents = sentences(para);
  if (!sents.length) return null;
  let desc = sents[0];
  // Add the 2nd sentence if the first is short and the pair still fits.
  if (desc.length < 110 && sents[1] && (desc + ' ' + sents[1]).length <= MAX) {
    desc = desc + ' ' + sents[1];
  }
  if (desc.length > MAX) {
    const cut = desc.slice(0, MAX);
    const idx = Math.max(cut.lastIndexOf(', '), cut.lastIndexOf(' — '), cut.lastIndexOf('; '));
    if (idx >= 80) {
      desc = cut.slice(0, idx);
    } else {
      const stop = new Set(['and', 'or', 'but', 'that', 'the', 'a', 'an', 'of', 'to', 'with', 'in',
        'on', 'for', 'by', 'as', 'at', 'from', 'into', 'their', 'its', 'this', 'these', 'those',
        'which', 'who', 'whose', 'when', 'while', 'is', 'are', 'was', 'were']);
      const words = cut.slice(0, cut.lastIndexOf(' ')).split(' ');
      while (words.length && stop.has(words[words.length - 1].toLowerCase().replace(/[—,;:]/g, ''))) words.pop();
      desc = words.join(' ');
    }
    desc = desc.replace(/[,;:\s—]+$/, '');
    if (!/[.!?]$/.test(desc)) desc += '.';
  }
  return desc;
}

const files = readdirSync(DIR).filter((f) => f.endsWith('.md'));
let fixed = 0;
const skipped = [];
const sample = [];

for (const file of files) {
  const path = join(DIR, file);
  const content = readFileSync(path, 'utf8');
  const m = content.match(/^description:\s*"([^"]*)"\s*$/m);
  if (!m || !isTruncated(m[1])) continue;
  const fmEnd = content.indexOf('---', content.indexOf('---') + 3);
  const body = content.slice(fmEnd + 3);
  const desc = buildDescription(body);
  if (!desc || desc.length < 60 || desc.includes('"')) { skipped.push(file); continue; }
  fixed++;
  if (sample.length < 10) sample.push(`${file} (${desc.length}): ${desc}`);
  if (APPLY) writeFileSync(path, content.replace(/^description:\s*"[^"]*"\s*$/m, `description: "${desc}"`));
}

console.log(sample.join('\n'));
console.log(`\n${APPLY ? 'APPLIED' : 'DRY RUN'} — ${fixed} description(s) regenerated; ${skipped.length} skipped (couldn't build a clean one).`);
if (skipped.length) console.log('skipped sample:', skipped.slice(0, 10).join(', '));
if (!APPLY) console.log('Re-run with --apply to write changes.');
