import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";
import {
  getAllArticles,
  getArticleBySlug,
  getArticlesByIssue,
} from "@/lib/articles";
import { getIssueBySlug, issueAccentStyle } from "@/lib/issues";
import { getCategoryByCn } from "@/lib/categories";
import ArticleCard from "@/components/ArticleCard";
import BilingualTitle from "@/components/BilingualTitle";

const mdxComponents = {
  blockquote: (props: React.HTMLAttributes<HTMLQuoteElement>) => (
    <blockquote className="pull-quote" {...props} />
  ),
};

export async function generateStaticParams() {
  return getAllArticles().map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const article = getArticleBySlug(params.slug);
  if (!article) return {};
  const url = `/article/${article.slug}`;
  const metaTitle = article.titleFr ?? article.title;
  const metaDescription = article.excerptFr ?? article.excerpt;
  return {
    title: metaTitle,
    description: metaDescription,
    authors: [{ name: article.author }],
    alternates: { canonical: url },
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      url,
      type: "article",
      publishedTime: article.date,
      authors: [article.author],
      section: article.category,
    },
  };
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = getArticleBySlug(params.slug);
  if (!article) notFound();
  const issue = getIssueBySlug(article.issue);
  const cat = getCategoryByCn(article.category);
  const issueArticles = getArticlesByIssue(article.issue);
  const folio = String(
    issueArticles.findIndex((a) => a.slug === article.slug) + 1,
  ).padStart(2, "0");
  const relatedArticles = issueArticles
    .filter((a) => a.slug !== article.slug)
    .slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.titleFr ?? article.title,
    description: article.excerptFr ?? article.excerpt,
    inLanguage: article.titleFr ? "fr" : "zh-CN",
    datePublished: article.date,
    dateModified: article.date,
    author: {
      "@type": "Person",
      name: article.author,
    },
    publisher: {
      "@type": "Organization",
      name: "C33",
      url: "https://c33zine.com",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://c33zine.com/article/${article.slug}`,
    },
    articleSection: article.category,
    isPartOf: issue
      ? {
          "@type": "PublicationIssue",
          issueNumber: issue.number,
          datePublished: `${issue.year}`,
          isPartOf: {
            "@type": "Periodical",
            name: "C33",
            issn: "2981-2844",
          },
        }
      : undefined,
  };

  return (
    <article style={issueAccentStyle(issue)}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Folio header — like a printed running header */}
      <div className="border-b border-black">
        <div className="px-4 md:px-8 h-9 flex items-center justify-between font-sans text-[10px] uppercase tracking-[0.18em]">
          {issue ? (
            <Link
              href={`/issue/${article.issue}`}
              className="hover:underline underline-offset-4"
            >
              C33 — Issue N° {article.issue}
            </Link>
          ) : (
            <Link
              href={cat ? `/category/${cat.slug}` : "/"}
              className="hover:underline underline-offset-4"
            >
              C33 — {cat ? cat.fr : "Rubrique"}
            </Link>
          )}
          <span className="hidden md:inline font-display italic normal-case tracking-normal">
            {cat && <span lang="fr">{cat.fr}</span>}
            <span lang="zh-CN">{article.category}</span>
          </span>
          <span>
            {issue ? `${issue.season} ${issue.year}` : "Rubrique permanente"}
          </span>
        </div>
      </div>

      {/* Ouverture — a black opener plate that gives each article a visual anchor */}
      <div className="relative bg-black text-white overflow-hidden">
        <div className="px-6 md:px-10 py-12 md:py-20 flex items-center justify-between gap-6">
          <div
            aria-hidden
            className="font-display font-medium leading-[0.8] tracking-[-0.04em] text-[34vw] md:text-[22vw] opacity-[0.16] select-none -ml-2"
          >
            {folio}
          </div>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
            <div className="font-sans text-[10px] uppercase tracking-[0.28em] mb-4">
              {cat && <span lang="fr">{cat.fr}</span>}
              <span lang="zh-CN">{article.category}</span>
            </div>
            <h1 className="font-display font-medium text-[36px] md:text-[68px] leading-[1.02] tracking-[-0.02em] max-w-[900px]">
              <BilingualTitle article={article} />
            </h1>
          </div>
        </div>
      </div>

      {/* Deck + byline */}
      <header className="px-6 md:px-10 pt-12 md:pt-16 pb-10 md:pb-14 text-center border-b border-black">
        <div className="max-w-[820px] mx-auto">
          {article.excerptFr && (
            <p
              lang="fr"
              className="font-display italic text-[20px] md:text-[24px] leading-[1.4] max-w-[640px] mx-auto mb-10"
            >
              {article.excerptFr}
            </p>
          )}
          {article.excerpt && (
            <p
              lang="zh-CN"
              className="font-display italic text-[20px] md:text-[24px] leading-[1.4] max-w-[640px] mx-auto mb-10"
            >
              {article.excerpt}
            </p>
          )}
          <div className="flex flex-wrap justify-center items-center gap-x-5 gap-y-2 font-sans text-[11px] uppercase tracking-[0.18em]">
            <span>Par {article.author}</span>
            {article.date && <span aria-hidden>·</span>}
            {article.date && <span>{article.date}</span>}
            <span aria-hidden>·</span>
            <span>Lecture · {article.readingTime} min</span>
          </div>
        </div>
      </header>

      {/* Body */}
      <div className="px-6 md:px-10 py-12 md:py-20">
        <div className="max-w-prose mx-auto prose-c33">
          <MDXRemote source={article.content} components={mdxComponents} />
        </div>
      </div>

      {/* Continuer la lecture — same-issue articles, for internal linking */}
      {relatedArticles.length > 0 && (
        <section className="border-t border-black px-6 md:px-10 py-12 md:py-16">
          <div className="max-w-[1100px] mx-auto">
            <div className="text-center mb-8 md:mb-10">
              <div className="font-sans text-[10px] uppercase tracking-[0.22em] mb-2">
                — Continuer la lecture / 继续阅读 —
              </div>
              {issue && (
                <div className="font-display italic text-[15px] text-neutral-600">
                  Dans le numéro {issue.number} · {issue.season} {issue.year}
                </div>
              )}
            </div>
            {relatedArticles.map((a, i) => (
              <ArticleCard key={a.slug} article={a} index={i} />
            ))}
            <div className="border-t border-black" />
          </div>
        </section>
      )}

      {/* Back link */}
      <div className="px-6 md:px-10 pb-16 border-t border-black pt-8">
        <div className="max-w-prose mx-auto flex justify-between items-baseline">
          <Link
            href={`/issue/${article.issue}`}
            className="font-sans text-[11px] uppercase tracking-[0.18em] hover:underline underline-offset-4"
          >
            ← Retour au sommaire
          </Link>
          <span className="font-display italic text-[14px]">返回当期目录</span>
        </div>
      </div>
    </article>
  );
}
