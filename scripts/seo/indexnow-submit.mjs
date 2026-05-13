/**
 * indexnow-submit.mjs
 *
 * Submit URLs to the IndexNow API (used by Bing, Yandex, Seznam, and others —
 * Google doesn't subscribe but the others do).
 *
 * Setup once:
 *   1. Generate a random key (e.g. https://www.bing.com/indexnow)
 *   2. Save the key to public/<key>.txt with the same string as its only content
 *   3. Set INDEXNOW_KEY env var (locally or in Vercel project settings)
 *
 * Modes:
 *   --auto              Safe postbuild mode. Submits URLs with lastmod within
 *                       the last 3 days. Silently exits with code 0 if
 *                       INDEXNOW_KEY is not set (so builds don't fail).
 *   --all               Submits every URL from dist/sitemap-0.xml. Use sparingly
 *                       — appropriate after a sitemap/canonical fix or migration,
 *                       not as a routine action.
 *   --recent <days>     Submits URLs with lastmod within the last <days> days.
 *   --new-assets        Submits the 10 backlink-wave URLs (legacy convenience).
 *   <url> <url> ...     Submit specific URLs.
 *
 * Usage:
 *   INDEXNOW_KEY=xxx npm run seo:indexnow              (alias for --new-assets)
 *   INDEXNOW_KEY=xxx node scripts/seo/indexnow-submit.mjs --all
 *   INDEXNOW_KEY=xxx node scripts/seo/indexnow-submit.mjs --recent 7
 *   INDEXNOW_KEY=xxx node scripts/seo/indexnow-submit.mjs --auto
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..', '..');
const SITEMAP_PATH = path.join(ROOT, 'dist', 'sitemap-0.xml');

const HOST = 'whatis.site';
const KEY = process.env.INDEXNOW_KEY;
const BATCH_SIZE = 10000; // IndexNow accepts up to 10,000 URLs per POST

const NEW_ASSETS = [
  'https://whatis.site/artificial-intelligence-statistics-2026',
  'https://whatis.site/remote-work-statistics-2026',
  'https://whatis.site/cryptocurrency-statistics-2026',
  'https://whatis.site/mental-health-statistics-2026',
  'https://whatis.site/climate-change-statistics-2026',
  'https://whatis.site/compound-interest-calculator',
  'https://whatis.site/word-count-reading-time-calculator',
  'https://whatis.site/unit-converter',
  'https://whatis.site/statistics',
  'https://whatis.site/free-tools',
];

function parseSitemapUrls(maxAgeDays) {
  if (!fs.existsSync(SITEMAP_PATH)) {
    console.error(`Sitemap not found at ${SITEMAP_PATH}. Run "npm run build" first.`);
    return null;
  }
  const xml = fs.readFileSync(SITEMAP_PATH, 'utf-8');
  // Match each <url>…</url> block, extract <loc> and optional <lastmod>.
  const blocks = xml.match(/<url>[\s\S]*?<\/url>/g) || [];
  const cutoff = maxAgeDays != null
    ? Date.now() - maxAgeDays * 24 * 60 * 60 * 1000
    : null;

  const urls = [];
  for (const block of blocks) {
    const loc = (block.match(/<loc>([^<]+)<\/loc>/) || [])[1];
    if (!loc) continue;
    if (cutoff != null) {
      const lastmod = (block.match(/<lastmod>([^<]+)<\/lastmod>/) || [])[1];
      if (!lastmod) continue;
      const t = Date.parse(lastmod);
      if (isNaN(t) || t < cutoff) continue;
    }
    urls.push(loc);
  }
  return urls;
}

async function submit(urls) {
  if (!urls.length) {
    console.log('No URLs to submit.');
    return { ok: true, batches: 0 };
  }
  const batches = [];
  for (let i = 0; i < urls.length; i += BATCH_SIZE) {
    batches.push(urls.slice(i, i + BATCH_SIZE));
  }

  console.log(`Submitting ${urls.length} URLs across ${batches.length} batch${batches.length === 1 ? '' : 'es'}...`);
  let allOk = true;
  for (let b = 0; b < batches.length; b++) {
    const body = {
      host: HOST,
      key: KEY,
      keyLocation: `https://${HOST}/${KEY}.txt`,
      urlList: batches[b],
    };
    const res = await fetch('https://api.indexnow.org/IndexNow', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });
    const ok = res.status >= 200 && res.status < 300;
    console.log(`  Batch ${b + 1}/${batches.length} (${batches[b].length} URLs): ${res.status} ${res.statusText}`);
    if (!ok) {
      allOk = false;
      try {
        const text = await res.text();
        if (text) console.log(`    Response body: ${text.slice(0, 500)}`);
      } catch (e) { /* ignore */ }
    }
  }
  return { ok: allOk, batches: batches.length };
}

async function main() {
  const args = process.argv.slice(2);

  // --auto is the safe postbuild mode: silently exit if no key configured.
  if (args.includes('--auto')) {
    if (!KEY) {
      console.log('IndexNow: INDEXNOW_KEY not set, skipping postbuild submission.');
      return;
    }
    const urls = parseSitemapUrls(3);
    if (!urls) process.exit(0); // sitemap missing — don't fail build
    console.log(`IndexNow auto-mode: ${urls.length} URLs changed in last 3 days.`);
    if (urls.length === 0) return;
    await submit(urls);
    return;
  }

  if (!KEY) {
    console.error('INDEXNOW_KEY env var is required. Generate one at https://www.bing.com/indexnow and host it at https://whatis.site/<key>.txt.');
    process.exit(1);
  }

  let urls;
  const allIdx = args.indexOf('--all');
  const recentIdx = args.indexOf('--recent');

  if (allIdx >= 0) {
    urls = parseSitemapUrls(null);
    if (!urls) process.exit(1);
    console.log(`IndexNow --all: ${urls.length} URLs from sitemap.`);
  } else if (recentIdx >= 0) {
    const days = parseInt(args[recentIdx + 1], 10);
    if (isNaN(days) || days <= 0) {
      console.error('--recent requires a positive integer (days).');
      process.exit(1);
    }
    urls = parseSitemapUrls(days);
    if (!urls) process.exit(1);
    console.log(`IndexNow --recent ${days}: ${urls.length} URLs changed in last ${days} days.`);
  } else if (args.includes('--new-assets')) {
    urls = NEW_ASSETS;
  } else {
    urls = args.filter(a => a.startsWith('http'));
    if (!urls.length) {
      console.error('Usage: indexnow-submit.mjs [--auto|--all|--recent N|--new-assets|<urls...>]');
      process.exit(1);
    }
  }

  const { ok } = await submit(urls);
  process.exit(ok ? 0 : 1);
}

main().catch(err => { console.error(err); process.exit(1); });
