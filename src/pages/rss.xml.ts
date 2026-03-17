import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

export const GET: APIRoute = async () => {
  const siteUrl = import.meta.env.PUBLIC_SITE_URL || 'https://whatis.site';
  const siteName = import.meta.env.PUBLIC_SITE_NAME || 'WhatIs.site';

  const allArticles = await getCollection('articles');
  const sorted = allArticles
    .sort((a, b) => new Date(b.data.dateModified).getTime() - new Date(a.data.dateModified).getTime())
    .slice(0, 50); // Latest 50 articles

  const items = sorted.map((article) => {
    const pubDate = new Date(article.data.datePublished).toUTCString();
    const description = article.data.description
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
    const title = article.data.title
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');

    return `    <item>
      <title>${title}</title>
      <link>${siteUrl}/${article.data.slug}</link>
      <guid isPermaLink="true">${siteUrl}/${article.data.slug}</guid>
      <description>${description}</description>
      <pubDate>${pubDate}</pubDate>
      <category>${article.data.category.replace(/-/g, ' ')}</category>
    </item>`;
  }).join('\n');

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${siteName}</title>
    <link>${siteUrl}</link>
    <description>Clear, human-written explanations of the concepts, ideas, and terms that shape our world.</description>
    <language>en</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${siteUrl}/rss.xml" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>`;

  return new Response(rss, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
};
