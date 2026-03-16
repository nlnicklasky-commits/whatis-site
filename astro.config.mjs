import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';
import fs from 'node:fs';
import path from 'node:path';

// Build a slug → dateModified map from article frontmatter
const articlesDir = './src/content/articles';
const dateMap = new Map();
if (fs.existsSync(articlesDir)) {
  for (const file of fs.readdirSync(articlesDir).filter(f => f.endsWith('.md'))) {
    const content = fs.readFileSync(path.join(articlesDir, file), 'utf-8');
    const slugMatch = content.match(/^slug:\s*(.+)$/m);
    const dateMatch = content.match(/^dateModified:\s*"?([^"\n]+)"?$/m);
    if (slugMatch && dateMatch) {
      dateMap.set(slugMatch[1].trim(), dateMatch[1].trim());
    }
  }
}

export default defineConfig({
  site: 'https://whatis.site',
  output: 'static',
  adapter: vercel({
    webAnalytics: { enabled: true },
    imageService: true,
  }),
  integrations: [
    tailwind(),
    sitemap({
      serialize(item) {
        // Extract slug from URL: https://whatis.site/some-slug/
        const urlPath = new URL(item.url).pathname.replace(/^\/|\/$/g, '');
        const dateModified = dateMap.get(urlPath);
        if (dateModified) {
          item.lastmod = new Date(dateModified).toISOString();
        }
        return item;
      },
    }),
  ],
  markdown: {
    shikiConfig: { theme: 'github-light' },
  },
});
