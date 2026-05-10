// Indexation audit — samples URLs from sitemap, asks GSC URL Inspection API
// for each one's index status, and writes a report.
//
// Output: data/indexation-audit.json + data/indexation-audit.md
// Defaults: random sample of 200 URLs (URL Inspection has a 2,000/day quota).
//
// Override sample size: SAMPLE=500 node scripts/seo/indexation-audit.mjs
// Audit all URLs:        SAMPLE=all node scripts/seo/indexation-audit.mjs

import { google } from "googleapis";
import { readFileSync, writeFileSync, mkdirSync } from "fs";
import { config } from "dotenv";

config({ path: ".env.local" });

const SITEMAP_URL = "https://whatis.site/sitemap-0.xml";
const SAMPLE = process.env.SAMPLE || "200";
const OUT_JSON = "data/indexation-audit.json";
const OUT_MD = "data/indexation-audit.md";

// URL Inspection: 600 req/min = 10/sec. Stay safely under at 6/sec.
const REQUESTS_PER_SEC = 6;
const DELAY_MS = Math.ceil(1000 / REQUESTS_PER_SEC);

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

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

async function fetchAllUrls() {
  const xml = await fetch(SITEMAP_URL).then((r) => r.text());
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
}

function pickSample(urls, n) {
  if (n === "all" || n >= urls.length) return urls;
  const copy = [...urls];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy.slice(0, Number(n));
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
  if (!res.ok) {
    const body = await res.text();
    return { url, error: `HTTP ${res.status}: ${body.slice(0, 200)}` };
  }
  const data = await res.json();
  const idx = data.inspectionResult?.indexStatusResult || {};
  return {
    url,
    verdict: idx.verdict || "UNKNOWN",
    coverageState: idx.coverageState || "UNKNOWN",
    crawledAs: idx.crawledAs || null,
    lastCrawlTime: idx.lastCrawlTime || null,
    googleCanonical: idx.googleCanonical || null,
    userCanonical: idx.userCanonical || null,
    indexingState: idx.indexingState || null,
    pageFetchState: idx.pageFetchState || null,
    robotsTxtState: idx.robotsTxtState || null,
    referringUrls: idx.referringUrls?.length || 0,
  };
}

function summarize(results) {
  const byCoverage = {};
  const byVerdict = {};
  const byPageFetch = {};
  const errors = [];

  for (const r of results) {
    if (r.error) {
      errors.push(r);
      continue;
    }
    byCoverage[r.coverageState] = (byCoverage[r.coverageState] || 0) + 1;
    byVerdict[r.verdict] = (byVerdict[r.verdict] || 0) + 1;
    if (r.pageFetchState) {
      byPageFetch[r.pageFetchState] = (byPageFetch[r.pageFetchState] || 0) + 1;
    }
  }

  return { byCoverage, byVerdict, byPageFetch, errorCount: errors.length };
}

function renderMarkdown({ totalUrls, sampleSize, summary, results, runDate }) {
  const indexed = results.filter((r) => r.verdict === "PASS").length;
  const successCount = results.length - summary.errorCount;
  const indexedPct = successCount
    ? ((indexed / successCount) * 100).toFixed(1)
    : "0.0";

  const sortLines = (obj) =>
    Object.entries(obj)
      .sort((a, b) => b[1] - a[1])
      .map(([k, v]) => {
        const pct = ((v / successCount) * 100).toFixed(1);
        return `| ${k} | ${v} | ${pct}% |`;
      })
      .join("\n");

  const notIndexedExamples = results
    .filter((r) => r.verdict && r.verdict !== "PASS")
    .slice(0, 25)
    .map(
      (r) =>
        `- \`${r.url}\` — ${r.coverageState}` +
        (r.pageFetchState && r.pageFetchState !== "PAGE_FETCH_STATE_UNSPECIFIED"
          ? ` (fetch: ${r.pageFetchState})`
          : "")
    )
    .join("\n");

  const errorExamples = results
    .filter((r) => r.error)
    .slice(0, 10)
    .map((r) => `- \`${r.url}\` — ${r.error}`)
    .join("\n");

  return `# Indexation Audit — whatis.site

Run: ${runDate}
Total URLs in sitemap: **${totalUrls}**
Sample inspected: **${sampleSize}**
Successful inspections: **${successCount}**
Errors: **${summary.errorCount}**

## Headline

**${indexed} / ${successCount} (${indexedPct}%) of inspected URLs are indexed (verdict = PASS).**

## Coverage State

| State | Count | % of sample |
|---|---:|---:|
${sortLines(summary.byCoverage)}

## Verdict

| Verdict | Count | % of sample |
|---|---:|---:|
${sortLines(summary.byVerdict)}

## Page Fetch State

| State | Count | % of sample |
|---|---:|---:|
${sortLines(summary.byPageFetch)}

## Examples — Not Indexed (first 25)

${notIndexedExamples || "_none_"}

${errorExamples ? `## Errors (first 10)\n\n${errorExamples}\n` : ""}

## Interpretation Quick Reference

- **PASS / Submitted and indexed** — healthy, in Google's index.
- **NEUTRAL / Crawled - currently not indexed** — Google fetched it but chose not to index. Quality/duplicate signal.
- **NEUTRAL / Discovered - currently not indexed** — Google knows about it but hasn't crawled. Crawl budget / discovery problem.
- **NEUTRAL / Duplicate, Google chose different canonical** — your canonical is being overridden.
- **FAIL / Blocked by robots.txt** — robots.txt is blocking the page.
- **FAIL / Page with redirect** — URL redirects somewhere else.
`;
}

async function main() {
  console.log("Authenticating…");
  const auth = await getAuth();

  console.log(`Fetching sitemap ${SITEMAP_URL}…`);
  const allUrls = await fetchAllUrls();
  console.log(`  ${allUrls.length} URLs found.`);

  const sample = pickSample(allUrls, SAMPLE);
  console.log(`Inspecting ${sample.length} URLs (pacing ${REQUESTS_PER_SEC}/s)…`);

  const results = [];
  let i = 0;
  for (const url of sample) {
    i++;
    try {
      const r = await inspectUrl(auth, url);
      results.push(r);
      if (i % 25 === 0 || i === sample.length) {
        process.stdout.write(`  ${i}/${sample.length}\n`);
      }
    } catch (err) {
      results.push({ url, error: err.message });
    }
    await sleep(DELAY_MS);
  }

  const summary = summarize(results);
  const payload = {
    runDate: new Date().toISOString(),
    sitemap: SITEMAP_URL,
    totalUrls: allUrls.length,
    sampleSize: sample.length,
    summary,
    results,
  };

  mkdirSync("data", { recursive: true });
  writeFileSync(OUT_JSON, JSON.stringify(payload, null, 2));
  writeFileSync(
    OUT_MD,
    renderMarkdown({
      totalUrls: allUrls.length,
      sampleSize: sample.length,
      summary,
      results,
      runDate: payload.runDate,
    })
  );

  console.log(`\nWrote ${OUT_JSON}`);
  console.log(`Wrote ${OUT_MD}`);
  console.log("\nSummary:");
  console.log("  Coverage:", summary.byCoverage);
  console.log("  Verdict :", summary.byVerdict);
  console.log("  Errors  :", summary.errorCount);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
