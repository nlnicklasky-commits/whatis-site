/**
 * prune-related-articles.mjs
 *
 * Removes broken slug refs from `relatedArticles:` frontmatter arrays.
 * A ref is "broken" if `src/content/articles/{slug}.md` does not exist.
 *
 * Safety: only edits the line matching `relatedArticles: [...]`. Skips
 * articles where the YAML form is multi-line (none use that today).
 * Writes back only when the pruned array differs from the original.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ARTICLES = path.resolve(__dirname, '../../src/content/articles');

const files = fs.readdirSync(ARTICLES).filter(f => f.endsWith('.md'));
const validSlugs = new Set(files.map(f => f.replace(/\.md$/, '')));

let edited = 0;
let totalRefsRemoved = 0;
const report = [];

for (const file of files) {
  const fp = path.join(ARTICLES, file);
  const src = fs.readFileSync(fp, 'utf-8');

  // Match a single-line array form. The codebase uses this form universally.
  const m = src.match(/^relatedArticles:\s*\[([^\]\n]*)\]\s*$/m);
  if (!m) continue;

  const raw = m[1];
  const slugs = raw
    .split(',')
    .map(s => s.trim().replace(/^["']|["']$/g, ''))
    .filter(Boolean);

  const kept = slugs.filter(s => validSlugs.has(s));
  const removed = slugs.filter(s => !validSlugs.has(s));
  if (removed.length === 0) continue;

  const rebuilt = kept.length === 0
    ? 'relatedArticles: []'
    : `relatedArticles: [${kept.map(s => `"${s}"`).join(', ')}]`;

  const updated = src.replace(m[0], rebuilt);
  fs.writeFileSync(fp, updated, 'utf-8');
  edited++;
  totalRefsRemoved += removed.length;
  report.push({ file, removed });
}

console.log(`Pruned ${totalRefsRemoved} broken refs from ${edited} articles`);
fs.writeFileSync(
  path.resolve(__dirname, '../../.audit-prune-related.json'),
  JSON.stringify({ edited, totalRefsRemoved, articles: report }, null, 2),
);
