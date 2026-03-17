import type { GetStaticPaths, APIRoute } from 'astro';
import { getCollection } from 'astro:content';

export const getStaticPaths: GetStaticPaths = async () => {
  const articles = await getCollection('articles');
  return articles.map((article) => ({
    params: { slug: article.data.slug },
    props: { article },
  }));
};

export const GET: APIRoute = async ({ props }) => {
  const { article } = props as any;
  const d = article.data;
  const siteUrl = import.meta.env.PUBLIC_SITE_URL || 'https://whatis.site';

  // Extract first paragraph from the raw markdown body as the summary
  const body = article.body || '';
  const paragraphs = body
    .split(/\n\n+/)
    .map((p: string) => p.trim())
    .filter((p: string) => p && !p.startsWith('#') && !p.startsWith('!') && !p.startsWith('|') && !p.startsWith('-') && !p.startsWith('```'));
  const summary = paragraphs[0]
    ?.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1') // strip markdown links
    ?.replace(/\*\*([^*]+)\*\*/g, '$1')       // strip bold
    ?.replace(/\*([^*]+)\*/g, '$1')            // strip italic
    ?.replace(/`([^`]+)`/g, '$1')              // strip inline code
    ?.trim() || d.description;

  const response = {
    term: d.title.replace(/^What (?:Is|Are) /, '').replace(/\?$/, ''),
    title: d.title,
    slug: d.slug,
    summary,
    description: d.description,
    category: d.category,
    tags: d.tags,
    url: `${siteUrl}/${d.slug}`,
    datePublished: d.datePublished,
    dateModified: d.dateModified,
    readingTime: d.readingTime,
    wordCount: d.wordCount,
    faq: d.faq?.map((item: { q: string; a: string }) => ({
      question: item.q,
      answer: item.a,
    })) || [],
    attribution: {
      text: `Source: ${d.title} — WhatIs.site`,
      url: `${siteUrl}/${d.slug}`,
      license: 'Please link back to the source when citing.',
    },
  };

  return new Response(JSON.stringify(response, null, 2), {
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Access-Control-Allow-Origin': '*',
    },
  });
};
