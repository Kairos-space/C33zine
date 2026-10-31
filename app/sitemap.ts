import type { MetadataRoute } from "next";
import { issues } from "@/lib/issues";
import { categories } from "@/lib/categories";

import { getStories, getArchive } from '@/lib/edition/content';
import { getFilmArticles } from '@/lib/edition/film-articles';

const BASE_URL = "https://c33zine.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE_URL}/issues`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/lexique`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/manifeste`, lastModified: now, changeFrequency: "yearly", priority: 0.7 },
    { url: `${BASE_URL}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/contributeurs`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/pitch`, lastModified: now, changeFrequency: "yearly", priority: 0.5 },
    { url: `${BASE_URL}/medias`, lastModified: now, changeFrequency: "yearly", priority: 0.5 },
    { url: `${BASE_URL}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${BASE_URL}/mentions-legales`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];

  const issuePages: MetadataRoute.Sitemap = issues.map((i) => ({
    url: `${BASE_URL}/issue/${i.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const categoryPages: MetadataRoute.Sitemap = categories.map((c) => ({
    url: `${BASE_URL}/category/${c.slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.6,
  }));

  const paths = ['', 'fashion', 'culture', 'film', 'people', 'about', 'masthead', 'letter', 'contact', 'legal', 'issues', 'archive', 'topics', 'topics/milan-ss27', 'topics/paris-ss27'];
  const editionPages: MetadataRoute.Sitemap = ['en', 'zh'].flatMap(locale => [
    ...paths.map(p => ({url: BASE_URL + '/' + locale + (p ? '/' + p : ''), changeFrequency: 'weekly' as const, priority: p ? 0.7 : 1})),
    ...getStories().map(s => ({url: BASE_URL + '/' + locale + '/read/' + s.slug, lastModified: new Date(s.updated || s.date), changeFrequency: 'monthly' as const, priority: 0.9})),
    ...getFilmArticles().filter(article => article.publishedAt).map(article => ({url: BASE_URL + '/' + locale + '/read/' + article.slug, lastModified: new Date(article.publishedAt!), changeFrequency: 'monthly' as const, priority: 0.8})),
    ...getArchive().filter(() => locale === 'zh').map(a => ({url: BASE_URL + '/' + locale + '/archive/' + a.slug, lastModified: new Date(a.date), changeFrequency: 'monthly' as const, priority: 0.6}))
  ]);
  return [
    ...editionPages,
    ...staticPages,
    ...issuePages,
    ...categoryPages,
  ];
}
