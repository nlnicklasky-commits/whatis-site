// De-orphan internal-link coverage by seeding `relatedArticles` reciprocally.
//
// 388 articles have zero body inbound links. RelatedArticles.astro renders real
// crawlable <a> links from the `relatedArticles` frontmatter (first 5), so adding
// an orphan to articles it ALREADY links to creates genuine, topical, reciprocal
// inbound links and reduces its click-depth — without touching prose.
//
// Goal: every orphan listed in >= 2 other articles' relatedArticles.
// Hosts are chosen from the orphan's own outgoing links (reciprocal + on-topic),
// same-category first, only when the host has room to render it (< 5 entries),
// capped at +2 additions per host to spread the load.
//
// Dry-run by default. Apply with: node scripts/seo/seed-orphan-related.mjs --apply
import { readFileSync, writeFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

const DIR = 'src/content/articles';
const APPLY = process.argv.includes('--apply');
const TARGET = 2;        // desired inbound relatedArticles per orphan
const HOST_CAP = 5;      // don't append if host already has >= this many (won't render)
const PER_HOST_MAX = 2;  // max orphans appended to a single host

const graph = JSON.parse(readFileSync('src/data/link-graph.json', 'utf8'));
const files = readdirSync(DIR).filter((f) => f.endsWith('.md'));

// Parse each file: slug, category, inline relatedArticles, raw line.
const bySlug = new Map();   // slug -> record
const records = [];
for (const file of files) {
  const content = readFileSync(join(DIR, file), 'utf8');
  const slug = (content.match(/^slug:\s*"?([^"\n]+?)"?\s*$/m) || [])[1]?.trim() || file.replace(/\.md$/, '');
  const cat = (content.match(/^category:\s*(.+)$/m) || [])[1]?.trim() || '';
  const relLine = content.match(/^relatedArticles:\s*\[(.*)\]\s*$/m);
  const isInline = !!relLine;
  const related = isInline
    ? relLine[1].split(',').map((s) => s.trim().replace(/^["']|["']$/g, '')).filter(Boolean)
    : [];
  const rec = { file, slug, cat, related, isInline, content, added: [] };
  bySlug.set(slug, rec);
  records.push(rec);
}

// Current inbound relatedArticles coverage: slug -> count.
const coverage = new Map();
for (const r of records) for (const t of r.related) coverage.set(t, (coverage.get(t) || 0) + 1);
const cov = (s) => (coverage.get(s) || 0) + (pendingCov.get(s) || 0);
const pendingCov = new Map();
const hostLoad = new Map(); // file -> count appended

const orphans = Object.keys(graph).filter((s) => (graph[s].incoming || []).length === 0).sort();

let additions = 0;
for (const A of orphans) {
  let need = TARGET - cov(A);
  if (need <= 0) continue;
  const aCat = graph[A]?.category || bySlug.get(A)?.cat || '';
  const outgoing = graph[A]?.outgoing || [];
  // Reciprocal candidates first (articles A links to), same-category prioritized.
  const cand = [...outgoing]
    .map((s) => bySlug.get(s))
    .filter(Boolean)
    .sort((x, y) => (y.cat === aCat) - (x.cat === aCat));
  // Always extend with same-category articles so an orphan still finds room
  // when its reciprocal (outgoing) hosts are full or capped.
  for (const r of records) if (r.cat === aCat && !cand.includes(r)) cand.push(r);
  for (const host of cand) {
    if (need <= 0) break;
    if (!host.isInline) continue;                 // skip the 1 block-form file
    if (host.slug === A) continue;
    if (host.related.includes(A) || host.added.includes(A)) continue;
    if (host.related.length + host.added.length >= HOST_CAP) continue;
    if ((hostLoad.get(host.file) || 0) >= PER_HOST_MAX) continue;
    host.added.push(A);
    hostLoad.set(host.file, (hostLoad.get(host.file) || 0) + 1);
    pendingCov.set(A, (pendingCov.get(A) || 0) + 1);
    additions++;
    need--;
  }
}

// Apply: rewrite inline relatedArticles for hosts that gained entries.
let filesTouched = 0;
for (const r of records) {
  if (!r.added.length) continue;
  filesTouched++;
  if (!APPLY) continue;
  const merged = [...r.related, ...r.added];
  const serialized = '[' + merged.map((s) => `"${s}"`).join(', ') + ']';
  const updated = r.content.replace(/^relatedArticles:\s*\[.*\]\s*$/m, `relatedArticles: ${serialized}`);
  writeFileSync(join(DIR, r.file), updated);
}

// Coverage after.
let cov0 = 0, cov1 = 0, cov2 = 0;
for (const A of orphans) { const c = cov(A); if (c === 0) cov0++; else if (c === 1) cov1++; else cov2++; }

console.log(`${APPLY ? 'APPLIED' : 'DRY RUN'}`);
console.log(`Orphans: ${orphans.length}`);
console.log(`Additions: ${additions} across ${filesTouched} host files`);
console.log(`Orphan related-inbound coverage AFTER -> 0:${cov0}  1:${cov1}  >=2:${cov2}`);
if (!APPLY) console.log('Re-run with --apply to write changes.');
