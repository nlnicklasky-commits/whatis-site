#!/usr/bin/env node

/**
 * Build Link Graph
 * Reads all articles, extracts internal links, and outputs src/data/link-graph.json
 */

import fs from 'node:fs';
import path from 'node:path';

const ARTICLES_DIR = './src/content/articles';
const OUTPUT = './src/data/link-graph.json';

const files = fs.readdirSync(ARTICLES_DIR).filter(f => f.endsWith('.md'));
const graph = {};

// First pass: register all articles
for (const file of files) {
  const content = fs.readFileSync(path.join(ARTICLES_DIR, file), 'utf-8');
  const slugMatch = content.match(/^slug:\s*(.+)$/m);
  const titleMatch = content.match(/^title:\s*"?([^"\n]+)"?$/m);
  const categoryMatch = content.match(/^category:\s*(.+)$/m);

  if (slugMatch) {
    const slug = slugMatch[1].trim();
    graph[slug] = {
      title: titleMatch ? titleMatch[1].trim() : slug,
      category: categoryMatch ? categoryMatch[1].trim() : '',
      outgoing: [],
      incoming: [],
    };
  }
}

const allSlugs = new Set(Object.keys(graph));

// Second pass: extract links
for (const file of files) {
  const content = fs.readFileSync(path.join(ARTICLES_DIR, file), 'utf-8');
  const slugMatch = content.match(/^slug:\s*(.+)$/m);
  if (!slugMatch) continue;
  const slug = slugMatch[1].trim();

  // Get body (after frontmatter)
  const fmEnd = content.indexOf('---', content.indexOf('---') + 3);
  const body = content.slice(fmEnd + 3);

  // Find all internal links
  const linkRegex = /\[([^\]]*)\]\(\/([^)#]+)\)/g;
  let match;
  const targets = new Set();

  while ((match = linkRegex.exec(body)) !== null) {
    const target = match[2].replace(/\/$/, '');
    if (allSlugs.has(target) && target !== slug) {
      targets.add(target);
    }
  }

  graph[slug].outgoing = [...targets].sort();
  for (const target of targets) {
    if (graph[target]) {
      graph[target].incoming.push(slug);
    }
  }
}

// Sort incoming arrays
for (const slug of Object.keys(graph)) {
  graph[slug].incoming.sort();
}

fs.writeFileSync(OUTPUT, JSON.stringify(graph, null, 2));

// Stats
const total = Object.keys(graph).length;
const noOut = Object.values(graph).filter(v => v.outgoing.length === 0).length;
const noIn = Object.values(graph).filter(v => v.incoming.length === 0).length;
const orphans = Object.values(graph).filter(v => v.outgoing.length === 0 && v.incoming.length === 0).length;
const avgOut = (Object.values(graph).reduce((s, v) => s + v.outgoing.length, 0) / total).toFixed(1);
const avgIn = (Object.values(graph).reduce((s, v) => s + v.incoming.length, 0) / total).toFixed(1);

console.log(`Link graph written to ${OUTPUT}`);
console.log(`  Total articles: ${total}`);
console.log(`  Avg outgoing: ${avgOut}`);
console.log(`  Avg incoming: ${avgIn}`);
console.log(`  No outgoing: ${noOut} (${(noOut * 100 / total).toFixed(0)}%)`);
console.log(`  No incoming: ${noIn} (${(noIn * 100 / total).toFixed(0)}%)`);
console.log(`  Fully orphaned: ${orphans}`);
