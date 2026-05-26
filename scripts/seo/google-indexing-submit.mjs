// Google Indexing API submitter — nudges Google to crawl a curated PRIORITY set
// of URLs (homepage, hubs, stats roundups, tools, categories, and the highest
// in-degree articles). For a no-history domain this is the fastest lever to move
// URLs from "unknown/Discovered" to "Crawled" — IndexNow does NOT reach Google.
//
// SETUP (one-time, required before --submit works):
//   1. In Google Cloud, enable the "Web Search Indexing API" for the project that
//      owns the service account.
//   2. In Google Search Console (whatis.site property) → Settings → Users and
//      permissions, add the service-account email (client_email from the JSON)
//      as an OWNER.
//   3. In .env.local set GOOGLE_SERVICE_ACCOUNT_JSON to the path of the
//      service-account key file (same var indexation-audit.mjs already uses).
//
// Quota: 200 URL notifications/day. Run it daily; it submits the top N each run.
//
//   node scripts/seo/google-indexing-submit.mjs            # dry run: print the list
//   node scripts/seo/google-indexing-submit.mjs --submit   # actually call the API
//   LIMIT=200 node scripts/seo/google-indexing-submit.mjs --submit
import { google } from 'googleapis';
import { readFileSync, readdirSync } from 'node:fs';
import { config } from 'dotenv';

config({ path: '.env.local' });

const SITE = 'https://whatis.site';
const LIMIT = Number(process.env.LIMIT || 200);
const SUBMIT = process.argv.includes('--submit');

// --- Build the priority URL list -------------------------------------------
const staticPages = ['', 'statistics', 'free-tools', 'categories', 'about', 'methodology'];

const pageFiles = readdirSync('src/pages').filter((f) => f.endsWith('.astro'));
const statsPages = pageFiles.filter((f) => /-statistics-2026\.astro$/.test(f)).map((f) => f.replace(/\.astro$/, ''));
const toolPages = ['compound-interest-calculator', 'unit-converter', 'word-count-reading-time-calculator']
  .filter((s) => pageFiles.includes(`${s}.astro`));

let categorySlugs = [];
try {
  categorySlugs = JSON.parse(readFileSync('src/data/categories.json', 'utf8')).map((c) => `category/${c.slug}`);
} catch {}

const graph = JSON.parse(readFileSync('src/data/link-graph.json', 'utf8'));
const topArticles = Object.keys(graph)
  .sort((a, b) => (graph[b].incoming?.length || 0) - (graph[a].incoming?.length || 0));

// Order matters: hubs/landing first, then articles, deduped, capped at LIMIT.
const ordered = [...staticPages, ...statsPages, ...toolPages, ...categorySlugs, ...topArticles];
const seen = new Set();
const urls = [];
for (const path of ordered) {
  const url = path === '' ? `${SITE}/` : `${SITE}/${path}`;
  if (seen.has(url)) continue;
  seen.add(url);
  urls.push(url);
  if (urls.length >= LIMIT) break;
}

console.log(`Priority set: ${urls.length} URLs (limit ${LIMIT})`);
console.log(urls.slice(0, 20).join('\n') + (urls.length > 20 ? `\n…and ${urls.length - 20} more` : ''));

if (!SUBMIT) {
  console.log('\nDRY RUN — re-run with --submit to notify Google (requires setup above).');
  process.exit(0);
}

// --- Submit ----------------------------------------------------------------
if (!process.env.GOOGLE_SERVICE_ACCOUNT_JSON) {
  console.error('\nGOOGLE_SERVICE_ACCOUNT_JSON not set in .env.local — cannot submit. See setup notes in this file.');
  process.exit(1);
}

const credentials = JSON.parse(readFileSync(process.env.GOOGLE_SERVICE_ACCOUNT_JSON, 'utf8'));
const auth = new google.auth.JWT({
  email: credentials.client_email,
  key: credentials.private_key,
  scopes: ['https://www.googleapis.com/auth/indexing'],
});
await auth.authorize();
const indexing = google.indexing({ version: 'v3', auth });

let ok = 0, fail = 0;
for (const url of urls) {
  try {
    await indexing.urlNotifications.publish({ requestBody: { url, type: 'URL_UPDATED' } });
    ok++;
  } catch (e) {
    fail++;
    console.error(`  fail ${url}: ${e.message}`);
  }
  await new Promise((r) => setTimeout(r, 120)); // ~8/sec, well under limits
}
console.log(`\nSubmitted ${ok} URL(s), ${fail} failure(s).`);
