/**
 * indexnow-submit.mjs
 *
 * Submit newly published URLs to the IndexNow API (used by Bing, Yandex,
 * Seznam, and others — Google doesn't subscribe but the others do).
 *
 * Setup once:
 *   1. Generate a random key: e.g. node -e "console.log(require('crypto').randomBytes(16).toString('hex'))"
 *   2. Save the key to public/<key>.txt with the same string as its only content
 *   3. Set INDEXNOW_KEY env var
 *
 * Usage:
 *   INDEXNOW_KEY=xxx node scripts/seo/indexnow-submit.mjs https://whatis.site/foo https://whatis.site/bar
 *   INDEXNOW_KEY=xxx node scripts/seo/indexnow-submit.mjs --new-assets   (submits all 10 new assets)
 */

const HOST = 'whatis.site';
const KEY = process.env.INDEXNOW_KEY;

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

async function main() {
  if (!KEY) {
    console.error('INDEXNOW_KEY env var is required. Generate one and host it at https://whatis.site/<key>.txt.');
    process.exit(1);
  }

  const args = process.argv.slice(2);
  let urls;
  if (args.includes('--new-assets')) {
    urls = NEW_ASSETS;
  } else if (args.length) {
    urls = args.filter(a => a.startsWith('http'));
  } else {
    console.error('Usage: indexnow-submit.mjs <urls...> | --new-assets');
    process.exit(1);
  }

  console.log(`Submitting ${urls.length} URLs to IndexNow...`);
  const body = {
    host: HOST,
    key: KEY,
    keyLocation: `https://${HOST}/${KEY}.txt`,
    urlList: urls,
  };

  const res = await fetch('https://api.indexnow.org/IndexNow', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
  console.log(`IndexNow response: ${res.status} ${res.statusText}`);
  // 200 = success, 202 = accepted, 422 = invalid URL/key
}

main().catch(err => { console.error(err); process.exit(1); });
