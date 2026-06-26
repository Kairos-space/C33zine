import { ImageResponse } from "next/og";
import { getArticleBySlug, getAllArticles } from "@/lib/articles";
import { getCategoryByCn } from "@/lib/categories";

export const runtime = "nodejs";
export const alt = "C33";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export async function generateStaticParams() {
  return getAllArticles().map((a) => ({ slug: a.slug }));
}

export default async function Image({
  params,
}: {
  params: { slug: string };
}) {
  const article = getArticleBySlug(params.slug);
  const title = article?.titleFr ?? article?.title ?? "C33";
  const category = article
    ? getCategoryByCn(article.category)?.fr ?? article.category
    : "";
  const issue = article?.issue ?? "01";
  const author = article?.author ?? "C33";

  return new ImageResponse(
    (
      <div
        style={{
          background: "#000",
          color: "#fff",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 80px",
          fontFamily: "serif",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 18,
            letterSpacing: 6,
            textTransform: "uppercase",
          }}
        >
          <span>C33 — Issue N° {issue}</span>
          <span>{category}</span>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: title.length > 40 ? 56 : 72,
            fontWeight: 500,
            lineHeight: 1.1,
            letterSpacing: -2,
            maxWidth: 1040,
          }}
        >
          {title}
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            fontSize: 18,
            letterSpacing: 6,
            textTransform: "uppercase",
          }}
        >
          <span>Par {author}</span>
          <span>c33zine.com</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
