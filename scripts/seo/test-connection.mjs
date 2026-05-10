// Quick GSC connection test — pulls last 7 days of top queries.
import { google } from "googleapis";
import { readFileSync } from "fs";
import { config } from "dotenv";

config({ path: ".env.local" });

const credentials = JSON.parse(
  readFileSync(process.env.GOOGLE_SERVICE_ACCOUNT_JSON, "utf8")
);

const auth = new google.auth.JWT({
  email: credentials.client_email,
  key: credentials.private_key,
  scopes: ["https://www.googleapis.com/auth/webmasters.readonly"],
});

await auth.authorize();
const webmasters = google.webmasters({ version: "v3", auth });

const sites = await webmasters.sites.list();
console.log("Verified properties on this service account:");
for (const s of sites.data.siteEntry || []) {
  console.log(`  ${s.siteUrl}  (${s.permissionLevel})`);
}

const end = new Date();
const start = new Date(end);
start.setDate(start.getDate() - 7);
const fmt = (d) => d.toISOString().slice(0, 10);

const res = await webmasters.searchanalytics.query({
  siteUrl: process.env.GSC_SITE_URL,
  requestBody: {
    startDate: fmt(start),
    endDate: fmt(end),
    dimensions: ["query"],
    rowLimit: 10,
  },
});

console.log(`\nTop 10 queries for ${process.env.GSC_SITE_URL} (last 7 days):`);
console.table(
  (res.data.rows || []).map((r) => ({
    query: r.keys[0],
    clicks: r.clicks,
    impressions: r.impressions,
    ctr: (r.ctr * 100).toFixed(2) + "%",
    position: r.position.toFixed(1),
  }))
);
