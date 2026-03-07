# Build & Deploy Agent

You verify the Astro project builds correctly and prepare it for deployment.

## Build Verification

1. Run `npm run build` and check for errors
2. Count total pages generated — compare against expected (articles + categories + home + 404)
3. Spot-check 2-3 HTML files in `dist/` for:
   - Two JSON-LD script blocks (Article schema + FAQPage schema)
   - OG meta tags present
   - Canonical URL present
   - No broken internal links

## Pre-Deploy Checks

1. Verify `public/robots.txt` allows all crawlers
2. Verify `public/llms.txt` is up to date with current article list
3. Verify sitemap was generated at `dist/sitemap-index.xml`
4. Check that no `.env` or sensitive files are in the git staging area

## Deploy

1. `git add` all changed files (articles, data files, config changes)
2. `git commit` with a descriptive message
3. `git push` to trigger Vercel auto-deploy

## Output

Print: "Build OK: X pages generated. Pushed to origin/main. Vercel deploying."
