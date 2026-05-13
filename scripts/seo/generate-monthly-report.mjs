/**
 * generate-monthly-report.mjs
 *
 * Generates a Markdown backlink growth report for a given month from CSV
 * exports placed under data/seo-exports/YYYY-MM/.
 *
 * Expected inputs (any combination is OK — sections without their CSV print "[DATA MISSING]"):
 *   ahrefs-backlinks.csv        — full referring-domains export
 *   ahrefs-organic-pages.csv    — top pages by organic traffic
 *   gsc-queries.csv             — GSC queries last 28 days
 *   gsc-pages.csv               — GSC pages last 28 days
 *   ai-overview-spot-checks.json — manual AI Overview citation log
 *
 * Output: docs/backlinks/reports/backlink-growth-report-YYYY-MM.md
 *
 * Usage:
 *   node scripts/seo/generate-monthly-report.mjs --month 2026-06
 *   node scripts/seo/generate-monthly-report.mjs                 (defaults to current month)
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..', '..');

function parseArgs() {
  const args = process.argv.slice(2);
  const out = {};
  for (let i = 0; i < args.length; i++) {
    if (args[i] === '--month') out.month = args[++i];
  }
  if (!out.month) {
    const d = new Date();
    out.month = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`;
  }
  return out;
}

const { month } = parseArgs();
const exportDir = path.join(ROOT, 'data', 'seo-exports', month);
const reportPath = path.join(ROOT, 'docs', 'backlinks', 'reports', `backlink-growth-report-${month}.md`);

// Minimal CSV parser. Handles quoted fields and embedded commas.
function parseCsv(text) {
  const rows = [];
  let row = [];
  let cur = '';
  let inQuote = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (inQuote) {
      if (c === '"') {
        if (text[i + 1] === '"') { cur += '"'; i++; }
        else inQuote = false;
      } else cur += c;
    } else {
      if (c === '"') inQuote = true;
      else if (c === ',') { row.push(cur); cur = ''; }
      else if (c === '\n') { row.push(cur); rows.push(row); row = []; cur = ''; }
      else if (c === '\r') {}
      else cur += c;
    }
  }
  if (cur.length || row.length) { row.push(cur); rows.push(row); }
  if (!rows.length) return [];
  const header = rows.shift();
  return rows.filter(r => r.length === header.length).map(r => {
    const obj = {};
    for (let i = 0; i < header.length; i++) obj[header[i].trim()] = (r[i] || '').trim();
    return obj;
  });
}

function tryRead(name) {
  const p = path.join(exportDir, name);
  if (!fs.existsSync(p)) return null;
  return fs.readFileSync(p, 'utf-8');
}

const ahrefsBacklinks = tryRead('ahrefs-backlinks.csv');
const ahrefsPages = tryRead('ahrefs-organic-pages.csv');
const gscQueries = tryRead('gsc-queries.csv');
const gscPages = tryRead('gsc-pages.csv');
const aiOverview = tryRead('ai-overview-spot-checks.json');

const now = new Date().toISOString().slice(0, 10);

function section(heading) {
  return `\n## ${heading}\n\n`;
}

function missingNote(file) {
  return `_[DATA MISSING — drop ${file} into ${path.relative(ROOT, exportDir)}/]_\n`;
}

let md = `# Backlink Growth Report — ${month}\n\n`;
md += `**Generated:** ${now}\n`;
md += `**Site:** whatis.site\n`;
md += `**Data folder:** \`${path.relative(ROOT, exportDir).replace(/\\/g, '/')}\`\n`;

md += section('1. Headline numbers');
if (ahrefsBacklinks) {
  const rows = parseCsv(ahrefsBacklinks);
  const refDomains = new Set(rows.map(r => r.Domain || r['Referring Domain'] || r['Referring domain'] || r.domain).filter(Boolean));
  md += `- Total referring domains in export: **${refDomains.size}**\n`;
  md += `- Total rows in export: ${rows.length}\n`;
} else {
  md += missingNote('ahrefs-backlinks.csv');
}

md += section('2. New referring domains this month');
if (ahrefsBacklinks) {
  md += `| Domain | Linking page | Anchor | Target | Type | Quality | Action |\n`;
  md += `|---|---|---|---|---|---|---|\n`;
  md += `_Filter the Ahrefs export to "First seen ≥ ${month}-01" externally and paste the prioritized rows here, classified per the rubric in docs/backlinks/phase-5-monitoring.md §B.2._\n`;
} else {
  md += missingNote('ahrefs-backlinks.csv');
}

md += section('3. Per-asset performance');
md += `| Asset | URL | RDs | Clicks 28d | Impressions 28d | Top KW | Position | Notes |\n`;
md += `|---|---|---|---|---|---|---|---|\n`;
const assets = [
  ['AI Stats 2026', '/artificial-intelligence-statistics-2026'],
  ['Remote Work Stats 2026', '/remote-work-statistics-2026'],
  ['Crypto Stats 2026', '/cryptocurrency-statistics-2026'],
  ['Mental Health Stats 2026', '/mental-health-statistics-2026'],
  ['Climate Stats 2026', '/climate-change-statistics-2026'],
  ['Compound Interest Calculator', '/compound-interest-calculator'],
  ['Word Count Calculator', '/word-count-reading-time-calculator'],
  ['Unit Converter', '/unit-converter'],
  ['/statistics hub', '/statistics'],
  ['/free-tools hub', '/free-tools'],
];

let gscPagesMap = null;
if (gscPages) {
  const rows = parseCsv(gscPages);
  gscPagesMap = new Map();
  for (const r of rows) {
    const url = r.Page || r.URL || r.url || r.page;
    if (url) gscPagesMap.set(url, r);
  }
}

for (const [name, url] of assets) {
  let clicks = '—', imp = '—';
  if (gscPagesMap) {
    const row = [...gscPagesMap.entries()].find(([k]) => k.endsWith(url) || k.endsWith(url + '/'));
    if (row) {
      clicks = row[1].Clicks || row[1].clicks || '—';
      imp = row[1].Impressions || row[1].impressions || '—';
    } else {
      clicks = '0'; imp = '0';
    }
  }
  md += `| ${name} | ${url} | — | ${clicks} | ${imp} | — | — | |\n`;
}
if (!gscPages) md += `\n${missingNote('gsc-pages.csv')}`;

md += section('4. AI Overview / Perplexity citations');
if (aiOverview) {
  try {
    const log = JSON.parse(aiOverview);
    const monthLog = (log.entries || []).filter(e => (e.date || '').startsWith(month));
    md += `Spot-checks recorded this month: **${monthLog.length}**\n\n`;
    md += `| Date | Query | Google AI? | Perplexity? | ChatGPT? | Note |\n`;
    md += `|---|---|---|---|---|---|\n`;
    for (const e of monthLog) {
      md += `| ${e.date || ''} | ${e.query || ''} | ${e.google ? 'yes' : 'no'} | ${e.perplexity ? 'yes' : 'no'} | ${e.chatgpt ? 'yes' : 'no'} | ${e.note || ''} |\n`;
    }
  } catch (err) {
    md += `_Invalid JSON in ai-overview-spot-checks.json: ${err.message}_\n`;
  }
} else {
  md += missingNote('ai-overview-spot-checks.json');
}

md += section('5. Underperforming assets');
md += `_For each asset with > 30 days since publish AND zero new RDs AND < 50 GSC impressions, list it here with the likely-issue + proposed-fix rubric from docs/backlinks/phase-5-monitoring.md §B.5._\n`;

md += section('6. New opportunity signals');
md += `_From competitor "lost vs gained" Ahrefs reports — what they earned links to that we don't have an analog for._\n`;

md += section('7. Iteration plan');
md += `- [ ] Refresh stats pages older than 90 days\n`;
md += `- [ ] Audit internal links from top-impression articles\n`;
md += `- [ ] Spin up next stats roundup (per linkable-assets-strategy.md wave 2)\n`;

md += section('8. Sanity checks');
md += `- [ ] No indexation drops (GSC coverage)\n`;
md += `- [ ] Sitemap includes every published asset\n`;
md += `- [ ] llms.txt up to date\n`;
md += `- [ ] Schema validates on each new asset\n`;

// Ensure dir
fs.mkdirSync(path.dirname(reportPath), { recursive: true });
fs.writeFileSync(reportPath, md);
console.log(`Wrote ${path.relative(ROOT, reportPath)}`);
