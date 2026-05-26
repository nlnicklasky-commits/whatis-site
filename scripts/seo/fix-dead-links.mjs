// Unlink dead internal links: convert [anchor](/slug) -> anchor (plain text)
// when /slug is not a valid route (no article file, no page, no category).
// Removing a link to a non-existent page is always an improvement (no 404 link).
// Dry-run by default; apply with --apply.
import { readFileSync, writeFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

const DIR = 'src/content/articles';
const APPLY = process.argv.includes('--apply');

const files = readdirSync(DIR).filter((f) => f.endsWith('.md'));
const valid = new Set(files.map((f) => f.replace(/\.md$/, '')));
for (const p of readdirSync('src/pages')) {
  if (p.endsWith('.astro') && !p.startsWith('[') && p !== 'index.astro') valid.add(p.replace(/\.astro$/, ''));
}
try { for (const c of JSON.parse(readFileSync('src/data/categories.json', 'utf8'))) valid.add(`category/${c.slug}`); } catch {}
['', 'categories', 'about', 'statistics', 'free-tools', 'methodology', 'privacy', 'terms'].forEach((x) => valid.add(x));

const re = /\[([^\]]+)\]\(\/([a-z0-9-]+)\)/g;
let changed = 0;
const filesTouched = new Set();
const sample = [];

for (const file of files) {
  const path = join(DIR, file);
  const content = readFileSync(path, 'utf8');
  const fmEnd = content.indexOf('---', content.indexOf('---') + 3);
  const head = content.slice(0, fmEnd + 3);
  let body = content.slice(fmEnd + 3);
  body = body.replace(re, (whole, anchor, slug) => {
    if (valid.has(slug)) return whole;
    changed++;
    filesTouched.add(file);
    if (sample.length < 30) sample.push(`${file}: [${anchor}](/${slug}) -> ${anchor}`);
    return anchor;
  });
  if (APPLY && filesTouched.has(file)) writeFileSync(path, head + body);
}

console.log(sample.join('\n'));
console.log(`\n${APPLY ? 'APPLIED' : 'DRY RUN'} — unlinked ${changed} dead link(s) across ${filesTouched.size} file(s).`);
if (!APPLY) console.log('Re-run with --apply to write changes.');
