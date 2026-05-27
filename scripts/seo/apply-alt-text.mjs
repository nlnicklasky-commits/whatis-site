// Apply the vision-generated hero alts to article frontmatter (heroAlt), under
// the CONSERVATIVE policy: replace with the new image-descriptive alt only when
// it is genuinely descriptive AND on-topic. Keep the existing topic alt for:
//   - source == fallback (low-confidence / guard fired)
//   - duplicate-collision records
//   - portrait-mismatch (appearance/expression person shots, off-topic)
//   - any alt that would collide with an alt already in use (uniqueness)
// Only the heroAlt frontmatter field is touched. Bodies (incl. 87 figure alts)
// are never opened. Dry-run by default; apply with --apply.
import { readFileSync, writeFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

const DIR = 'src/content/articles';
const APPLY = process.argv.includes('--apply');
const m = JSON.parse(readFileSync('out/r-1779838900/alt-text.json', 'utf8'));
const qa = JSON.parse(readFileSync('out/r-1779838900/alt-text-qa.json', 'utf8'));

// Off-topic person-portrait detector (appearance/expression focus, no task).
const PORTRAIT = /(pensive|pensively|thoughtful|thoughtfully|contemplat|gazing|staring|serious expression|smiling at the camera|looking (off|away|at the camera|directly|into the|to the side)|with (long |short |curly |straight )?(blonde|brown|black|red|gray|grey|dark) hair|blue eyes|green eyes|wearing (a |an )?(white |black |blue |dark )?(scarf|suit|shirt|sweater|hat|glasses|blazer|jacket))/i;

function currentAlt(content) {
  const m = content.match(/^heroAlt:\s*"([^"]*)"\s*$/m);
  return m ? m[1] : null;
}

// Build set of alts already in use (current heroAlts of articles we will NOT change),
// to guard uniqueness when applying new ones.
const files = readdirSync(DIR).filter((f) => f.endsWith('.md'));
const slugToFile = new Map();
const curAlts = new Map();
for (const f of files) {
  const slug = f.replace(/\.md$/, '');
  slugToFile.set(slug, f);
  curAlts.set(slug, currentAlt(readFileSync(join(DIR, f), 'utf8')));
}

// Decide apply vs keep.
const decisions = []; // {slug, newAlt}
let keepFallback = 0, keepPortrait = 0, keepDup = 0, keepCollide = 0, keepNoQuote = 0, keepMissing = 0;
for (const slug of Object.keys(m)) {
  const q = qa[slug] || {};
  const reason = (q.reason || '').toString();
  const alt = m[slug];
  if (!slugToFile.has(slug)) { keepMissing++; continue; }
  if (q.source === 'fallback') { keepFallback++; continue; }
  if (reason.includes('duplicate-collision')) { keepDup++; continue; }
  if (q.source === 'vision' && PORTRAIT.test(alt)) { keepPortrait++; continue; }
  if (alt.includes('"')) { keepNoQuote++; continue; }
  decisions.push({ slug, newAlt: alt });
}

// Uniqueness guard: final alt set must stay distinct. Seed with the alts of all
// articles we are NOT changing (their current alt stays).
const changing = new Set(decisions.map((d) => d.slug));
const used = new Set();
for (const [slug, a] of curAlts) if (!changing.has(slug) && a) used.add(a.toLowerCase());
const finalApply = [];
for (const d of decisions) {
  if (used.has(d.newAlt.toLowerCase())) { keepCollide++; continue; }
  used.add(d.newAlt.toLowerCase());
  finalApply.push(d);
}

// Apply.
let written = 0;
for (const { slug, newAlt } of finalApply) {
  const path = join(DIR, slugToFile.get(slug));
  const content = readFileSync(path, 'utf8');
  if (!/^heroAlt:\s*"[^"]*"\s*$/m.test(content)) continue;
  if (APPLY) writeFileSync(path, content.replace(/^heroAlt:\s*"[^"]*"\s*$/m, `heroAlt: "${newAlt}"`));
  written++;
}

console.log(`${APPLY ? 'APPLIED' : 'DRY RUN'}`);
console.log(`Hero alts rewritten: ${written}`);
console.log(`Kept existing — fallback:${keepFallback} portrait:${keepPortrait} duplicate:${keepDup} collision:${keepCollide} hadQuote:${keepNoQuote} missingFile:${keepMissing}`);
console.log(`Total kept: ${keepFallback + keepPortrait + keepDup + keepCollide + keepNoQuote + keepMissing}`);
if (!APPLY) {
  console.log('\nSample rewrites:');
  finalApply.slice(0, 8).forEach((d) => console.log(`  ${d.slug} -> ${d.newAlt}`));
  console.log('Re-run with --apply to write.');
}
