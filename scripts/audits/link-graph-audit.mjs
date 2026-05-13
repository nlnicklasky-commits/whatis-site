// scripts/audits/link-graph-audit.mjs
//
// Audits the internal link graph for WhatIs.site.
// Reads:
//   - src/data/link-graph.json
//   - src/content/articles/*.md  (frontmatter only, light parse)
// Writes:
//   - .audit-link-graph.json  (JSON report at project root)
//
// Plain Node, no deps. Run from project root:
//   node scripts/audits/link-graph-audit.mjs

import { readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { join, dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const ROOT = resolve(__dirname, '..', '..');

const LINK_GRAPH_PATH = join(ROOT, 'src', 'data', 'link-graph.json');
const ARTICLES_DIR = join(ROOT, 'src', 'content', 'articles');
const OUTPUT_PATH = join(ROOT, '.audit-link-graph.json');

// --- Load link graph --------------------------------------------------------
const graph = JSON.parse(readFileSync(LINK_GRAPH_PATH, 'utf8'));
const slugsInGraph = Object.keys(graph);

// --- Build set of slugs that have an actual article markdown file ----------
const articleFiles = readdirSync(ARTICLES_DIR).filter((f) => f.endsWith('.md'));
const articleSlugs = new Set(articleFiles.map((f) => f.replace(/\.md$/, '')));

// --- Minimal YAML frontmatter parser for `slug` and `relatedArticles` ------
// We only need two fields. Avoid bringing in a YAML dep.
function parseFrontmatter(raw) {
  if (!raw.startsWith('---')) return {};
  const end = raw.indexOf('\n---', 3);
  if (end === -1) return {};
  const block = raw.slice(3, end);
  const lines = block.split(/\r?\n/);
  const result = {};
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // slug: foo
    const slugMatch = line.match(/^slug:\s*"?([^"\n]+?)"?\s*$/);
    if (slugMatch) {
      result.slug = slugMatch[1].trim();
      continue;
    }

    // relatedArticles: ["a", "b", "c"]   (inline form, common in this repo)
    const relInline = line.match(/^relatedArticles:\s*\[(.*)\]\s*$/);
    if (relInline) {
      const inner = relInline[1];
      result.relatedArticles = inner
        .split(',')
        .map((s) => s.trim().replace(/^["']|["']$/g, ''))
        .filter(Boolean);
      continue;
    }

    // relatedArticles:                   (block list form)
    //   - "a"
    //   - "b"
    if (/^relatedArticles:\s*$/.test(line)) {
      const items = [];
      let j = i + 1;
      while (j < lines.length && /^\s+-\s+/.test(lines[j])) {
        const item = lines[j]
          .replace(/^\s+-\s+/, '')
          .trim()
          .replace(/^["']|["']$/g, '');
        if (item) items.push(item);
        j++;
      }
      result.relatedArticles = items;
      i = j - 1;
      continue;
    }
  }
  return result;
}

// --- Read every article's frontmatter --------------------------------------
const articleFrontmatter = {}; // slug -> { slug, relatedArticles }
for (const file of articleFiles) {
  const slugFromFile = file.replace(/\.md$/, '');
  let raw;
  try {
    raw = readFileSync(join(ARTICLES_DIR, file), 'utf8');
  } catch {
    continue;
  }
  const fm = parseFrontmatter(raw);
  const slug = fm.slug || slugFromFile;
  articleFrontmatter[slug] = {
    slug,
    fileSlug: slugFromFile,
    relatedArticles: Array.isArray(fm.relatedArticles) ? fm.relatedArticles : [],
  };
}

// --- 1. Orphan articles (incoming.length === 0) ----------------------------
const orphans = [];
for (const slug of slugsInGraph) {
  const inc = graph[slug].incoming || [];
  if (inc.length === 0) orphans.push(slug);
}
orphans.sort();

// --- 2. Underlinked (incoming.length < 3) ----------------------------------
let underlinkedCount = 0;
for (const slug of slugsInGraph) {
  const inc = graph[slug].incoming || [];
  if (inc.length < 3) underlinkedCount++;
}

// --- 3. Dead outgoing links (outgoing slug has no article .md file) --------
// Map: deadTargetSlug -> list of source slugs that link to it
const deadOutgoingMap = new Map();
let deadOutgoingTotal = 0;
for (const slug of slugsInGraph) {
  const out = graph[slug].outgoing || [];
  for (const target of out) {
    if (!articleSlugs.has(target)) {
      deadOutgoingTotal++;
      if (!deadOutgoingMap.has(target)) deadOutgoingMap.set(target, []);
      deadOutgoingMap.get(target).push(slug);
    }
  }
}
const deadOutgoingExamples = [];
for (const [target, sources] of deadOutgoingMap.entries()) {
  for (const src of sources) {
    deadOutgoingExamples.push({ source: src, deadTarget: target });
    if (deadOutgoingExamples.length >= 30) break;
  }
  if (deadOutgoingExamples.length >= 30) break;
}

// --- 4. Highest in-degree (top 15) -----------------------------------------
const byInDegree = slugsInGraph
  .map((slug) => ({ slug, inDegree: (graph[slug].incoming || []).length }))
  .sort((a, b) => b.inDegree - a.inDegree)
  .slice(0, 15);

// --- 5. Highest out-degree (top 15) ----------------------------------------
const byOutDegree = slugsInGraph
  .map((slug) => ({ slug, outDegree: (graph[slug].outgoing || []).length }))
  .sort((a, b) => b.outDegree - a.outDegree)
  .slice(0, 15);

// --- 6. Articles with zero outgoing internal links -------------------------
let zeroOutgoingCount = 0;
const zeroOutgoingSamples = [];
for (const slug of slugsInGraph) {
  const out = graph[slug].outgoing || [];
  if (out.length === 0) {
    zeroOutgoingCount++;
    if (zeroOutgoingSamples.length < 20) zeroOutgoingSamples.push(slug);
  }
}

// --- 7. Frontmatter relatedArticles referencing non-existent slugs ---------
// A "non-existent" related slug = no article .md file with that slug.
const badRelated = []; // { slug, missing: [...] }
for (const slug of Object.keys(articleFrontmatter)) {
  const { relatedArticles } = articleFrontmatter[slug];
  if (!relatedArticles.length) continue;
  const missing = relatedArticles.filter((r) => !articleSlugs.has(r));
  if (missing.length) badRelated.push({ slug, missing });
}
badRelated.sort((a, b) => b.missing.length - a.missing.length);
const badRelatedTop = badRelated.slice(0, 20);

// --- 8. Reciprocal coverage ------------------------------------------------
// For every outgoing pair (A -> B), check if B -> A also exists in graph.
let totalOutgoingPairs = 0;
let reciprocalPairs = 0;
for (const slug of slugsInGraph) {
  const out = graph[slug].outgoing || [];
  for (const target of out) {
    totalOutgoingPairs++;
    const targetEntry = graph[target];
    if (targetEntry && Array.isArray(targetEntry.outgoing) && targetEntry.outgoing.includes(slug)) {
      reciprocalPairs++;
    }
  }
}
const reciprocalPct = totalOutgoingPairs
  ? Number(((reciprocalPairs / totalOutgoingPairs) * 100).toFixed(2))
  : 0;

// --- Assemble report -------------------------------------------------------
const report = {
  generatedAt: new Date().toISOString(),
  totals: {
    articlesInGraph: slugsInGraph.length,
    articleFilesOnDisk: articleSlugs.size,
    totalOutgoingPairs,
    reciprocalPairs,
  },
  orphans: {
    count: orphans.length,
    sample: orphans.slice(0, 30),
  },
  underlinked: {
    threshold: 3,
    count: underlinkedCount,
  },
  deadOutgoingLinks: {
    totalDeadEdges: deadOutgoingTotal,
    uniqueDeadTargets: deadOutgoingMap.size,
    sample: deadOutgoingExamples,
  },
  topInDegree: byInDegree,
  topOutDegree: byOutDegree,
  zeroOutgoing: {
    count: zeroOutgoingCount,
    sample: zeroOutgoingSamples,
  },
  badRelatedArticles: {
    articlesWithBadRefs: badRelated.length,
    sample: badRelatedTop,
  },
  reciprocal: {
    totalOutgoingPairs,
    reciprocalPairs,
    reciprocalPct,
  },
};

writeFileSync(OUTPUT_PATH, JSON.stringify(report, null, 2));

// --- Console summary -------------------------------------------------------
console.log(`Wrote ${OUTPUT_PATH}`);
console.log(`Articles in graph:        ${slugsInGraph.length}`);
console.log(`Article .md files:        ${articleSlugs.size}`);
console.log(`Orphans (incoming=0):     ${orphans.length}`);
console.log(`Underlinked (<3 incoming): ${underlinkedCount}`);
console.log(`Dead outgoing edges:      ${deadOutgoingTotal} (unique targets: ${deadOutgoingMap.size})`);
console.log(`Zero outgoing:            ${zeroOutgoingCount}`);
console.log(`Articles with bad relatedArticles refs: ${badRelated.length}`);
console.log(`Reciprocal coverage:      ${reciprocalPairs}/${totalOutgoingPairs} = ${reciprocalPct}%`);
