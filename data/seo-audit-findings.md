# SEO Audit — Phase 1 Findings (Indexation)

Run: 2026-05-09
Sample: 200 of 1,690 sitemap URLs inspected via GSC URL Inspection API.

## Headline

**0 / 200 sampled URLs are indexed by Google. 90.5% are not even known to Google.**

This is an indexation/discovery crisis, not a ranking problem. The site has 1,615 articles published, and Google has effectively zero of them in its index.

## Coverage Breakdown

| State | Count | % of sample | What it means |
|---|---:|---:|---|
| URL is unknown to Google | 181 | 90.5% | Google has never seen this URL |
| Blocked by robots.txt | 8 | 4.0% | Stale — last crawled Nov-Jan when robots.txt was probably stricter |
| Not found (404) | 6 | 3.0% | Stale — last crawled in January; pages return 200 OK now |
| Alternate page with proper canonical tag | 4 | 2.0% | **Smoking gun** — see Root Cause |
| Crawled - currently not indexed | 1 | 0.5% | Quality/duplicate signal |

## Root Cause #1 — Sitemap-vs-Canonical Slash Mismatch

Sample URL: `/blockchain/`

| Surface | URL form |
|---|---|
| Sitemap entry | `https://whatis.site/blockchain/` (trailing slash) |
| `<link rel="canonical">` | `https://whatis.site/blockchain` (no slash) |
| `<meta property="og:url">` | `https://whatis.site/blockchain` (no slash) |
| JSON-LD `@id` and `mainEntityOfPage` | `https://whatis.site/blockchain` (no slash) |
| Live HTTP for both forms | 200 OK (no redirect either way) |

Google sees two valid URLs for every article, and the sitemap submits the version that the page itself points away from. Result: when Google does crawl, it correctly identifies the no-slash version as canonical and treats the sitemap URL as a duplicate (`Alternate page with proper canonical tag`). The sitemap becomes an anti-signal — Google learns to distrust it, which suppresses discovery of the other 1,500+ URLs.

[`src/layouts/ArticleLayout.astro:13`](src/layouts/ArticleLayout.astro#L13) builds canonical as `${siteUrl}/${frontmatter.slug}` (no slash). [`astro.config.mjs`](astro.config.mjs) has no `trailingSlash` setting, so Astro defaults to generating `/blockchain/index.html` and the sitemap reflects that with a trailing slash.

## Root Cause #2 — Sitemap Probably Not Submitted in GSC

The sitemap URL exists at `https://whatis.site/sitemap-index.xml` and is referenced from `robots.txt`. But last 7 days of search data shows only 4 impressions across the entire site. Either:

- The sitemap was never submitted in GSC's Sitemaps section, OR
- It was submitted but is failing validation (likely because of root cause #1)

**Verify in GSC:** [search.google.com/search-console](https://search.google.com/search-console) → property `https://whatis.site/` → Sitemaps. Check whether `sitemap-index.xml` is listed and what the status says.

## Root Cause #3 — No Backlinks / No External Discovery

With 0 backlinks (likely) and a brand-new domain, Google relies entirely on the sitemap for discovery. With root cause #1 actively breaking the sitemap signal, there's no path for Google to find pages.

## Secondary Findings

### 6 URLs returned 404 in last crawl (now return 200)

```
/tort-law/, /costume-design/, /jewish-history/,
/motorcycle-racing/, /economics/, /sports-science/
```

Last crawled ~2026-01-10 to 2026-01-29. All currently return 200 OK. Likely deploy-timing artifacts; will resolve on re-crawl once #1 is fixed.

### 8 URLs blocked by robots.txt in last crawl (now allowed)

```
/thai-history/, /school-administration/, /pantomime/,
/human-computer-interaction/, /showmanship/, /forensic-science/,
/sanskrit/, /microbiology/
```

Last crawled 2025-11-10 to 2026-01-08. Current robots.txt is wide open. Stale state; will resolve on re-crawl.

## Fix Plan (in priority order)

### 1. Fix slash mismatch — Pick ONE option

**Option A (recommended, surgical):** Strip trailing slashes from sitemap output. Matches canonicals, no URL structure changes.

```js
// astro.config.mjs — modify the existing serialize function:
serialize(item) {
  item.url = item.url.replace(/\/$/, '') || item.url; // strip trailing slash, except for root
  const urlPath = new URL(item.url).pathname.replace(/^\/|\/$/g, '');
  const dateModified = dateMap.get(urlPath);
  if (dateModified) {
    item.lastmod = new Date(dateModified).toISOString();
  }
  return item;
},
```

**Option B (cleaner long-term):** Add `trailingSlash: 'never'` and `build: { format: 'file' }` to astro.config.mjs. Generates `/blockchain.html` so only one form exists. Requires a Vercel redirect from `/foo/` → `/foo` to prevent old links from hitting 404. Also re-test that all internal links still work.

### 2. Resubmit sitemap in GSC

After deploying #1, go to GSC → Sitemaps → resubmit `sitemap-index.xml`. This is what triggers Google to start re-crawling.

### 3. Use Indexing API to fast-track a sample

GSC's Indexing API (separate from URL Inspection) can submit up to 200 URLs/day for re-crawl. Pick the top ~50 articles you most want indexed; submit them via API after the fix lands. Don't bulk-submit all 1,690 — Google ignores spam-like submissions.

### 4. Run this audit again in 2-3 weeks

After Google has had time to re-crawl, re-run `node scripts/seo/indexation-audit.mjs` with `SAMPLE=500` to measure progress. Target: indexation rate >50% within 30 days, >80% within 60 days.

## Reports

- Raw data: [data/indexation-audit.json](data/indexation-audit.json)
- Markdown report: [data/indexation-audit.md](data/indexation-audit.md)

## Next-phase audits to run after the fix

- 16-month traffic trend pull — has the site ever had impressions, or is this a flat zero?
- Striking-distance keywords — queries in positions 11-30 with impressions
- On-page audit on a sample of 50 articles — title/description quality, H1/H2 structure, internal link counts
- Sitemap content quality check — find the 6 stale 404s and any other broken entries
