/**
 * ai-overview-spotcheck.mjs
 *
 * Spot-checks whether whatis.site appears in AI Overview / Perplexity /
 * ChatGPT-search results for a fixed set of target queries.
 *
 * Two operating modes:
 *
 * 1. Manual (default): prints the queries + URLs to check by hand, and
 *    appends an empty results template you can fill in.
 *
 * 2. Automated: if SERPAPI_KEY is set in environment, hits SerpApi and
 *    parses for "whatis.site" string. Logs JSON to
 *    data/ai-overview-log.json.
 *
 * Output: data/ai-overview-log.json (append-only).
 *
 * Usage:
 *   node scripts/seo/ai-overview-spotcheck.mjs
 *   SERPAPI_KEY=xxx node scripts/seo/ai-overview-spotcheck.mjs
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..', '..');
const LOG = path.join(ROOT, 'data', 'ai-overview-log.json');

const QUERIES = [
  'ai statistics 2026',
  'artificial intelligence statistics',
  'remote work statistics 2026',
  'how many people work from home',
  'cryptocurrency statistics 2026',
  'crypto adoption statistics',
  'mental health statistics 2026',
  'how common is depression',
  'climate change statistics 2026',
  'global temperature 2024',
  'compound interest formula',
  'how compound interest works',
  'what is machine learning',
  'what is blockchain',
];

const today = new Date().toISOString().slice(0, 10);
const SITE = 'whatis.site';
const API_KEY = process.env.SERPAPI_KEY;

function loadLog() {
  if (!fs.existsSync(LOG)) return { entries: [] };
  return JSON.parse(fs.readFileSync(LOG, 'utf-8'));
}

function saveLog(log) {
  fs.mkdirSync(path.dirname(LOG), { recursive: true });
  fs.writeFileSync(LOG, JSON.stringify(log, null, 2));
}

async function checkSerpApi(query) {
  // SerpApi google_ai_overview engine: docs at https://serpapi.com/
  const url = `https://serpapi.com/search.json?engine=google&q=${encodeURIComponent(query)}&api_key=${API_KEY}&google_domain=google.com&gl=us&hl=en`;
  try {
    const res = await fetch(url);
    if (!res.ok) {
      return { error: `HTTP ${res.status}` };
    }
    const data = await res.json();
    const haystack = JSON.stringify(data).toLowerCase();
    const aiOverview = data.ai_overview ? JSON.stringify(data.ai_overview).toLowerCase() : '';
    return {
      ai_overview_present: !!data.ai_overview,
      whatis_cited_in_ai_overview: aiOverview.includes(SITE),
      whatis_in_top10: (data.organic_results || []).slice(0, 10).some(r => (r.link || '').includes(SITE)),
      whatis_anywhere: haystack.includes(SITE),
    };
  } catch (err) {
    return { error: err.message };
  }
}

async function main() {
  const log = loadLog();

  if (!API_KEY) {
    console.log('No SERPAPI_KEY set — manual mode.\n');
    console.log(`Append the following ${QUERIES.length} entries to ${path.relative(ROOT, LOG)} after running checks by hand:\n`);
    const template = QUERIES.map(q => ({
      date: today,
      query: q,
      google: false,
      perplexity: false,
      chatgpt: false,
      note: 'manual check pending'
    }));
    console.log(JSON.stringify(template, null, 2));
    // Don't write — manual mode requires human input. Just print.
    return;
  }

  console.log(`Running automated spot-checks for ${QUERIES.length} queries via SerpApi...\n`);
  for (const q of QUERIES) {
    const result = await checkSerpApi(q);
    const entry = {
      date: today,
      query: q,
      google: !!result.whatis_cited_in_ai_overview,
      google_top10: !!result.whatis_in_top10,
      ai_overview_present: !!result.ai_overview_present,
      perplexity: null,
      chatgpt: null,
      raw: result,
    };
    log.entries.push(entry);
    console.log(`  ${entry.google ? '✓' : '✗'} ${q}${result.error ? ` (error: ${result.error})` : ''}`);
  }

  saveLog(log);
  console.log(`\nAppended ${QUERIES.length} entries to ${path.relative(ROOT, LOG)}`);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
