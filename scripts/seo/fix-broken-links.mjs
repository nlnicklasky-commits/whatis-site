// One-shot repair of 11 malformed nested-markdown links flagged by the audit
// (pattern: `[Anchor](/[inner](/target)-suffix)` from a bad auto-linker pass).
// Heading links are removed entirely (headings should not contain links);
// body links are reconstructed to their correct, existing target slug.
// Run from project root: node scripts/seo/fix-broken-links.mjs
import { readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const DIR = 'src/content/articles';

// [file, exactOldString, newString]
const fixes = [
  // --- Heading links: strip to plain text ---
  ['dyeing.md', '## A [History](/[dance](/dance)-history) in Color', '## A History in Color'],
  ['japanese-language.md', '# What Is [Japanese](/[japanese](/japanese-mythology)-art) Language?', '# What Is Japanese Language?'],
  ['social-contract-theory.md', '# What Is [Social](/[social](/social-choice-theory)-democracy) Contract Theory?', '# What Is Social Contract Theory?'],
  ['water-law.md', '# What Is [Water](/[water](/water-purification)-management) Law?', '# What Is Water Law?'],
  // --- Body links: reconstruct to correct existing target ---
  ['gourmet-cooking.md', '[food](/[food](/food-styling)-science)', '[food](/food-science)'],
  ['recycling.md', '[waste](/[waste](/zero-waste-living)-[management](/management))', '[waste](/waste-management)'],
  ['recycling.md', '[environmental](/environmental-[engineering](/engineering))', '[environmental](/environmental-engineering)'],
  ['voting-theory.md', '[political](/[political](/the-history-of-political-science)-science)', '[political](/political-science)'],
  ['warhammer.md', '[game](/[video](/video-game-history)-game-design)', '[game](/game-design)'],
  ['whale-watching.md', '[wildlife](/[wildlife](/wildlife-conservation)-photography)', '[wildlife](/wildlife-photography)'],
  ['whittling.md', '[wood](/[wood](/wood-finishing)-carving)', '[wood](/wood-carving)'],
];

let applied = 0;
const failed = [];
for (const [file, oldStr, newStr] of fixes) {
  const path = join(DIR, file);
  const content = readFileSync(path, 'utf8');
  if (!content.includes(oldStr)) {
    failed.push(`${file}: old string not found`);
    continue;
  }
  writeFileSync(path, content.replace(oldStr, newStr));
  applied++;
  console.log(`fixed ${file}: ${newStr}`);
}
console.log(`\nApplied ${applied}/${fixes.length} fixes.`);
if (failed.length) console.error('FAILURES:\n' + failed.join('\n'));
