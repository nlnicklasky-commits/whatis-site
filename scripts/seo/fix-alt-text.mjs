// Fix hero alt text flagged by the r-1779812042 audit:
//   - 8 alts truncated mid-word (ed9c630 split the description on the first ".")
//   - 430 alts over the ~125-char alt ceiling
// For each flagged article, re-derive heroAlt from the (clean) description,
// trimmed to <=125 chars at a clean clause/word boundary. Articles whose alt is
// already <=125 and not in the truncated list are left untouched.
//
// Dry-run by default; apply with --apply.
import { readFileSync, writeFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

const DIR = 'src/content/articles';
const APPLY = process.argv.includes('--apply');
const MAX = 125;
const TRUNCATED = new Set([
  'presidential-history', 'marathon-running', 'chinese-language', 'english-language',
  'cold-war-history', 'state-government', 'the-history-of-technology', 'cuban-history',
]);

function clean(s) {
  return s.replace(/\[([^\]]+)\]\([^)]*\)/g, '$1').replace(/[*_`#>]/g, '').replace(/\s+/g, ' ').trim();
}

// Trim to <=MAX at a clean boundary; no trailing period (alt convention).
function altFromDescription(desc) {
  let a = clean(desc).replace(/\s*[.!?]+\s*$/, '');
  if (a.length <= MAX) return a;
  const cut = a.slice(0, MAX);
  const idx = Math.max(cut.lastIndexOf(', '), cut.lastIndexOf(' — '), cut.lastIndexOf('; '));
  if (idx >= 60) return cut.slice(0, idx).replace(/[\s,;:—]+$/, '');
  const stop = new Set(['and', 'or', 'but', 'that', 'the', 'a', 'an', 'of', 'to', 'with', 'in', 'on',
    'for', 'by', 'as', 'at', 'from', 'into', 'their', 'its', 'this', 'these', 'those', 'which', 'who',
    'whose', 'when', 'while', 'is', 'are', 'was', 'were']);
  const words = cut.slice(0, cut.lastIndexOf(' ')).split(' ');
  while (words.length && stop.has(words[words.length - 1].toLowerCase().replace(/[—,;:]/g, ''))) words.pop();
  return words.join(' ').replace(/[\s,;:—]+$/, '');
}

const files = readdirSync(DIR).filter((f) => f.endsWith('.md'));
let fixed = 0;
const sample = [];

for (const file of files) {
  const slug = file.replace(/\.md$/, '');
  const path = join(DIR, file);
  const content = readFileSync(path, 'utf8');
  const altM = content.match(/^heroAlt:\s*"([^"]*)"\s*$/m);
  const descM = content.match(/^description:\s*"?(.+?)"?\s*$/m);
  if (!altM || !descM) continue;
  const alt = altM[1];
  const needsFix = alt.length > MAX || TRUNCATED.has(slug);
  if (!needsFix) continue;
  const newAlt = altFromDescription(descM[1]);
  if (!newAlt || newAlt.length < 15 || newAlt.includes('"') || newAlt === alt) continue;
  fixed++;
  if (sample.length < 12) sample.push(`${slug} (${alt.length}->${newAlt.length}): ${newAlt}`);
  if (APPLY) writeFileSync(path, content.replace(/^heroAlt:\s*"[^"]*"\s*$/m, `heroAlt: "${newAlt}"`));
}

console.log(sample.join('\n'));
console.log(`\n${APPLY ? 'APPLIED' : 'DRY RUN'} — ${fixed} heroAlt fixed (target ~438: 8 truncated + 430 over-length).`);
if (!APPLY) console.log('Re-run with --apply to write changes.');
