# Google Search Console API — Setup & Usage Guide

Reference for integrating the GSC API into whatis-site SEO scripts. Based on the proven pattern from the ai-small-business-blog project.

## 1. Create a Google Cloud Service Account

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a project (or use an existing one)
3. Enable these APIs (APIs & Services > Library):
   - **Google Search Console API** (a.k.a. "Google Webmasters API")
   - **Web Search Indexing API** (for URL submission)
4. Create a service account (IAM & Admin > Service Accounts):
   - Name it something like `whatis-gsc`
   - No special IAM roles needed (GSC access is granted separately)
5. Create a JSON key for the service account and download it
6. Save the key file to `.secrets/gsc-service-account.json` in the project root (this path is gitignored)

## 2. Grant the Service Account Access to Search Console

1. Open [Google Search Console](https://search.google.com/search-console)
2. Select the `whatis.site` property
3. Settings > Users and permissions > Add user
4. Enter the service account email (e.g. `whatis-gsc@your-project.iam.gserviceaccount.com`)
5. Permission level: **Restricted** (read-only — sufficient for analytics queries)
   - Use **Full** if you also want to submit URLs via the Indexing API

## 3. Environment Variables

Add to `.env.local` (gitignored):

```bash
# Path to the service account JSON key file
GOOGLE_SERVICE_ACCOUNT_JSON=".secrets/gsc-service-account.json"

# GSC property identifier — use one of these formats:
#   Domain property:     "sc-domain:whatis.site"
#   URL-prefix property: "https://whatis.site"
GSC_SITE_URL="sc-domain:whatis.site"
```

Make sure `.gitignore` includes:

```
.secrets/
.env.local
```

## 4. Authentication Pattern

Two approaches work. Pick one per script.

### Option A: Manual JWT (zero dependencies)

Uses only Node built-ins (`crypto`, `fs`, `fetch`). Good for simple scripts.

```javascript
import { readFileSync } from "fs";
import { createSign } from "crypto";

async function getGscAccessToken() {
  const sa = JSON.parse(
    readFileSync(process.env.GOOGLE_SERVICE_ACCOUNT_JSON, "utf8")
  );

  const header = Buffer.from(
    JSON.stringify({ alg: "RS256", typ: "JWT" })
  ).toString("base64url");

  const now = Math.floor(Date.now() / 1000);
  const payload = Buffer.from(
    JSON.stringify({
      iss: sa.client_email,
      scope: "https://www.googleapis.com/auth/webmasters.readonly",
      aud: "https://oauth2.googleapis.com/token",
      iat: now,
      exp: now + 3600,
    })
  ).toString("base64url");

  const signature = createSign("RSA-SHA256")
    .update(`${header}.${payload}`)
    .sign(sa.private_key, "base64url");

  const res = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: `grant_type=urn:ietf:params:oauth:grant-type:jwt-bearer&assertion=${header}.${payload}.${signature}`,
  });

  const { access_token } = await res.json();
  return access_token;
}
```

### Option B: googleapis Library

Cleaner API, handles token refresh automatically. Requires `npm install --save-dev googleapis`.

```javascript
import { google } from "googleapis";
import { readFileSync } from "fs";

async function getWebmastersClient() {
  const credentials = JSON.parse(
    readFileSync(process.env.GOOGLE_SERVICE_ACCOUNT_JSON, "utf8")
  );

  const auth = new google.auth.JWT({
    email: credentials.client_email,
    key: credentials.private_key,
    scopes: ["https://www.googleapis.com/auth/webmasters.readonly"],
  });

  await auth.authorize();
  return google.webmasters({ version: "v3", auth });
}
```

## 5. Common API Calls

### Search Analytics (queries, clicks, impressions, position)

```javascript
// Manual fetch version
const token = await getGscAccessToken();
const res = await fetch(
  `https://www.googleapis.com/webmasters/v3/sites/${encodeURIComponent(
    process.env.GSC_SITE_URL
  )}/searchAnalytics/query`,
  {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      startDate: "2026-04-09",
      endDate: "2026-05-09",
      dimensions: ["query", "page"],
      rowLimit: 1000,
    }),
  }
);
const data = await res.json();
// data.rows = [{ keys: [query, page], clicks, impressions, ctr, position }]
```

### URL Inspection (check if a URL is indexed)

```javascript
const token = await getGscAccessToken();
// Scope needed: https://www.googleapis.com/auth/webmasters.readonly
const res = await fetch(
  "https://searchconsole.googleapis.com/v1/urlInspection/index:inspect",
  {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      inspectionUrl: "https://whatis.site/machine-learning",
      siteUrl: process.env.GSC_SITE_URL,
    }),
  }
);
const data = await res.json();
// data.inspectionResult.indexStatusResult.coverageState
//   → "Submitted and indexed" | "Discovered - currently not indexed" | etc.
```

### Indexing API (request re-crawl)

```javascript
// Scope needed: https://www.googleapis.com/auth/indexing
// (update JWT scope accordingly)
const res = await fetch("https://indexing.googleapis.com/v3/urlNotifications:publish", {
  method: "POST",
  headers: {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    url: "https://whatis.site/machine-learning",
    type: "URL_UPDATED",
  }),
});
```

## 6. Rate Limits

| API | Limit | Notes |
|-----|-------|-------|
| Search Analytics | 1,200 queries/min | Rarely an issue |
| URL Inspection | 600 requests/min, 2,000/day | Batch carefully for 1,600+ articles |
| Indexing API | 200 URLs/day, 600/min | Hard-cap submissions per run |

## 7. Useful Scopes Reference

| Scope | Grants |
|-------|--------|
| `https://www.googleapis.com/auth/webmasters.readonly` | Search Analytics + URL Inspection (read) |
| `https://www.googleapis.com/auth/webmasters` | Full read/write (sitemaps, etc.) |
| `https://www.googleapis.com/auth/indexing` | Indexing API (URL submission) |

## 8. Script Ideas for whatis.site

Given 1,600+ articles, these would be high-value:

- **Indexation audit** — Read sitemap, check each URL via Inspection API, report coverage gaps. Critical at this scale.
- **Keyword opportunities** — Pull Search Analytics, find page-2 queries (position 11-20) with decent impressions. These are the easiest wins.
- **Title/description audit** — Map top queries to page metadata, flag mismatches that hurt CTR.
- **Bulk submit** — After publishing a batch of new articles, submit URLs to the Indexing API (respect the 200/day cap).

## 9. Reference Implementation

The ai-small-business-blog project has working scripts you can adapt:

```
ai-small-business-blog/scripts/seo/
  gsc-sync.mjs              # Search Analytics + URL Inspection (manual JWT)
  keyword-opportunities.mjs  # Striking-distance finder (googleapis library)
  index-now.mjs             # Indexation audit + submission (manual JWT)
  title-audit.mjs           # Title/meta CTR analysis
  README.md                 # Full usage docs
```

Copy and adapt rather than starting from scratch. The main changes needed:
- Swap `GSC_SITE_URL` to `sc-domain:whatis.site`
- Remove Notion sync logic (unless you want it)
- Adjust sitemap URL to the Astro-generated one
- Account for the larger article count (1,600+ vs ~50) in batching/rate-limit logic
