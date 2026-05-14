// Weekly SEO progress tracker.
// Pulls GSC sitemap status + search analytics totals + indexation rate
// on a fixed 50-URL sample, then appends one row to a trend log.
//
// Run: node scripts/seo/weekly-progress.mjs
// Output: data/progress-log.json (history) + console summary

import { google } from "googleapis";
import { readFileSync, writeFileSync, existsSync, mkdirSync } from "fs";
import { config } from "dotenv";

config({ path: ".env.local" });

const SITEMAP_URL = "https://whatis.site/sitemap-index.xml";
const SAMPLE_PATH = "data/progress-sample.json"; // fixed sample, persisted so week-over-week is comparable
const LOG_PATH = "data/progress-log.json";
const SAMPLE_SIZE = 50;
const REQUESTS_PER_SEC = 6;
const DELAY_MS = Math.ceil(1000 / REQUESTS_PER_SEC);

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const fmt = (d) => d.toISOString().slice(0, 10);

async function getAuth() {
  const credentials = JSON.parse(
    readFileSync(process.env.GOOGLE_SERVICE_ACCOUNT_JSON, "utf8")
  );
  const auth = new google.auth.JWT({
    email: credentials.client_email,
    key: credentials.private_key,
    scopes: ["https://www.googleapis.com/auth/webmasters.readonly"],
  });
  await auth.authorize();
  return auth;
}

async function getOrCreateSample(auth) {
  if (existsSync(SAMPLE_PATH)) {
    return JSON.parse(readFileSync(SAMPLE_PATH, "utf8"));
  }
  const xml = await fetch("https://whatis.site/sitemap-0.xml").then((r) =>
    r.text()
  );
  const all = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  const copy = [...all];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  const sample = copy.slice(0, SAMPLE_SIZE);
  mkdirSync("data", { recursive: true });
  writeFileSync(SAMPLE_PATH, JSON.stringify(sample, null, 2));
  return sample;
}

async function inspectUrl(auth, url) {
  const res = await fetch(
    "https://searchconsole.googleapis.com/v1/urlInspection/index:inspect",
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${(await auth.getAccessToken()).token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        inspectionUrl: url,
        siteUrl: process.env.GSC_SITE_URL,
      }),
    }
  );
  if (!res.ok) return { url, error: `HTTP ${res.status}` };
  const data = await res.json();
  const idx = data.inspectionResult?.indexStatusResult || {};
  return {
    url,
    verdict: idx.verdict || "UNKNOWN",
    coverageState: idx.coverageState || "UNKNOWN",
  };
}

async function getSitemapStatus(webmasters) {
  try {
    const res = await webmasters.sitemaps.get({
      siteUrl: process.env.GSC_SITE_URL,
      feedpath: SITEMAP_URL,
    });
    const d = res.data;
    return {
      lastSubmitted: d.lastSubmitted || null,
      lastDownloaded: d.lastDownloaded || null,
      isPending: d.isPending || false,
      isSitemapsIndex: d.isSitemapsIndex || false,
      errors: d.errors || 0,
      warnings: d.warnings || 0,
      contents: d.contents || [],
    };
  } catch (err) {
    return { error: err.message };
  }
}

async function getSearchTotals(webmasters, days) {
  const end = new Date();
  const start = new Date(end);
  start.setDate(start.getDate() - days);
  try {
    const res = await webmasters.searchanalytics.query({
      siteUrl: process.env.GSC_SITE_URL,
      requestBody: {
        startDate: fmt(start),
        endDate: fmt(end),
        rowLimit: 1,
      },
    });
    const row = res.data.rows?.[0];
    return {
      windowDays: days,
      clicks: row?.clicks || 0,
      impressions: row?.impressions || 0,
      ctr: row?.ctr || 0,
      avgPosition: row?.position || null,
    };
  } catch (err) {
    return { windowDays: days, error: err.message };
  }
}

async function main() {
  const auth = await getAuth();
  const webmasters = google.webmasters({ version: "v3", auth });

  console.log("Loading fixed 50-URL sample…");
  const sample = await getOrCreateSample(auth);
  console.log(`  sample size: ${sample.length}`);

  console.log("Fetching sitemap submission status…");
  const sitemap = await getSitemapStatus(webmasters);

  console.log("Fetching 28-day search totals…");
  const search28 = await getSearchTotals(webmasters, 28);
  console.log("Fetching 7-day search totals…");
  const search7 = await getSearchTotals(webmasters, 7);

  console.log(`Inspecting ${sample.length} URLs (pacing ${REQUESTS_PER_SEC}/s)…`);
  const results = [];
  let i = 0;
  for (const url of sample) {
    i++;
    try {
      results.push(await inspectUrl(auth, url));
    } catch (err) {
      results.push({ url, error: err.message });
    }
    if (i % 10 === 0 || i === sample.length) {
      process.stdout.write(`  ${i}/${sample.length}\n`);
    }
    await sleep(DELAY_MS);
  }

  const byCoverage = {};
  for (const r of results) {
    if (r.error) continue;
    byCoverage[r.coverageState] = (byCoverage[r.coverageState] || 0) + 1;
  }
  const indexed = results.filter((r) => r.verdict === "PASS").length;
  const ok = results.filter((r) => !r.error).length;
  const indexedPct = ok ? (indexed / ok) * 100 : 0;

  const entry = {
    date: new Date().toISOString(),
    sample: {
      size: ok,
      indexed,
      indexedPct: Number(indexedPct.toFixed(1)),
      byCoverage,
    },
    sitemap,
    search7,
    search28,
  };

  let log = [];
  if (existsSync(LOG_PATH)) {
    log = JSON.parse(readFileSync(LOG_PATH, "utf8"));
  }
  log.push(entry);
  writeFileSync(LOG_PATH, JSON.stringify(log, null, 2));

  console.log("\n=== Snapshot ===");
  console.log(`Date          : ${entry.date}`);
  console.log(
    `Indexation    : ${indexed}/${ok} (${indexedPct.toFixed(1)}%) of fixed sample`
  );
  console.log("Coverage:");
  for (const [state, count] of Object.entries(byCoverage).sort(
    (a, b) => b[1] - a[1]
  )) {
    console.log(`  ${count.toString().padStart(3)}  ${state}`);
  }
  console.log("\nSitemap:");
  console.log(`  lastSubmitted : ${sitemap.lastSubmitted || "—"}`);
  console.log(`  lastDownloaded: ${sitemap.lastDownloaded || "—"}`);
  if (sitemap.contents?.length) {
    for (const c of sitemap.contents) {
      console.log(
        `  ${c.type || "Web"}: submitted=${c.submitted || 0}  indexed=${
          c.indexed || 0
        }`
      );
    }
  }
  console.log(
    `\nSearch (7d)   : ${search7.clicks} clicks, ${search7.impressions} impressions, avg pos ${
      search7.avgPosition?.toFixed(1) || "—"
    }`
  );
  console.log(
    `Search (28d)  : ${search28.clicks} clicks, ${search28.impressions} impressions, avg pos ${
      search28.avgPosition?.toFixed(1) || "—"
    }`
  );

  if (log.length > 1) {
    const prev = log[log.length - 2];
    const dIndexed = entry.sample.indexedPct - prev.sample.indexedPct;
    const dImpr =
      (entry.search7.impressions || 0) - (prev.search7?.impressions || 0);
    console.log("\n=== Week-over-week ===");
    console.log(
      `Indexation Δ  : ${dIndexed >= 0 ? "+" : ""}${dIndexed.toFixed(1)} pp`
    );
    console.log(`Impressions Δ : ${dImpr >= 0 ? "+" : ""}${dImpr} (7d window)`);
  }

  console.log(`\nLog: ${LOG_PATH} (${log.length} snapshot(s))`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
