import { getAllArticles } from "@/lib/articles";

const BASE_URL = "https://c33zine.com";

function escapeXml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export async function GET() {
  const articles = getAllArticles().sort((a, b) =>
    (b.date ?? "").localeCompare(a.date ?? ""),
  );

  const items = articles
    .map((a) => {
      const url = `${BASE_URL}/article/${a.slug}`;
      const pubDate = a.date
        ? new Date(a.date).toUTCString()
        : new Date().toUTCString();
      return `    <item>
      <title>${escapeXml(a.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <dc:creator>${escapeXml(a.author)}</dc:creator>
      <category>${escapeXml(a.category)}</category>
      <pubDate>${pubDate}</pubDate>
      <description>${escapeXml(a.excerpt ?? "")}</description>
    </item>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:prism="http://prismstandard.org/namespaces/basic/2.0/">
  <channel>
    <title>C33</title>
    <link>${BASE_URL}</link>
    <atom:link href="${BASE_URL}/feed.xml" rel="self" type="application/rss+xml" />
    <description>Une revue trimestrielle franco-chinoise sur l'industrie de la mode et les récits de marque.</description>
    <language>zh-CN</language>
    <prism:issn>2981-2844</prism:issn>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
