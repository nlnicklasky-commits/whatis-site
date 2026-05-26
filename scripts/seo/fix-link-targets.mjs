// High-precision internal-link target repair.
//
// Repoints a body link [anchor](/target) -> /<slug(anchor)> ONLY when ALL hold:
//   1. slug(anchor) is an existing article slug
//   2. the current target is a different existing slug (not already correct)
//   3. the current target does NOT contain slug(anchor) as a substring
//      (preserves intentional "more specific" links, e.g. [design](/graphic-design))
//   4. slug(anchor) is not the article's own slug (no self-links)
//
// This catches mismatches like [cryptography](/blockchain) -> [cryptography](/cryptography)
// while leaving descriptive/legitimate links untouched.
//
// Dry-run by default. Apply with: node scripts/seo/fix-link-targets.mjs --apply
import { readFileSync, writeFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

const DIR = 'src/content/articles';
const APPLY = process.argv.includes('--apply');

const files = readdirSync(DIR).filter((f) => f.endsWith('.md'));
const slugSet = new Set(files.map((f) => f.replace(/\.md$/, '')));

function slugify(s) {
  return s
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

const linkRe = /\[([^\]]+)\]\(\/([a-z0-9-]+)\)/g;
let changed = 0;
const sample = [];
const filesTouched = new Set();

for (const file of files) {
  const ownSlug = file.replace(/\.md$/, '');
  const path = join(DIR, file);
  let content = readFileSync(path, 'utf8');
  const fmEnd = content.indexOf('---', content.indexOf('---') + 3);
  const head = content.slice(0, fmEnd + 3);
  let body = content.slice(fmEnd + 3);

  body = body.replace(linkRe, (whole, anchor, target) => {
    const a = slugify(anchor);
    if (!a || !slugSet.has(a)) return whole;          // anchor isn't an article
    if (a === ownSlug) return whole;                   // would be a self-link
    if (a === target) return whole;                    // already correct
    if (!slugSet.has(target)) return whole;            // leave dead/odd targets alone
    if (target.includes(a)) return whole;              // intentional more-specific link
    changed++;
    filesTouched.add(file);
    if (sample.length < 25) sample.push(`${file}: [${anchor}](/${target}) -> /${a}`);
    return `[${anchor}](/${a})`;
  });

  if (APPLY && filesTouched.has(file)) writeFileSync(path, head + body);
}

console.log(sample.join('\n'));
console.log(`\n${APPLY ? 'APPLIED' : 'DRY RUN'} — ${changed} link(s) across ${filesTouched.size} file(s).`);
if (!APPLY) console.log('Re-run with --apply to write changes.');
