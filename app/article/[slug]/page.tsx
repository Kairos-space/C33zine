import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllArticles, getArticleBySlug } from "@/lib/articles";
import { getIssueBySlug } from "@/lib/issues";

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
  return {
    title: article.title,
    description: article.excerpt,
    authors: [{ name: article.author }],
  };
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = getArticleBySlug(params.slug);
  if (!article) notFound();
  const issue = getIssueBySlug(article.issue);

  return (
    <article className="px-6 md:px-10 py-12 md:py-16">
      <div className="max-w-prose mx-auto">
        {/* Top kicker */}
        <div className="flex justify-between items-baseline font-sans text-[11px] uppercase tracking-[0.12em] mb-12 border-b border-black pb-4">
          <Link
            href={`/issue/${article.issue}`}
            className="hover:underline underline-offset-4"
          >
            Issue N° {article.issue}
          </Link>
          <span>{article.category}</span>
        </div>

        {/* Title */}
        <header className="mb-12">
          <h1 className="font-serif text-[36px] md:text-[56px] leading-[1.05] tracking-tight mb-8">
            {article.title}
          </h1>
          <div className="flex flex-wrap gap-x-6 gap-y-2 font-sans text-[12px] uppercase tracking-[0.08em]">
            <span>{article.author}</span>
            {article.date && <span>{article.date}</span>}
            {issue && (
              <span>
                {issue.season} {issue.year}
              </span>
            )}
          </div>
        </header>

        {/* Body */}
        <div className="prose-c33">
          <MDXRemote source={article.content} />
        </div>

        {/* Back to issue */}
        <div className="mt-24 pt-8 border-t border-black">
          <Link
            href={`/issue/${article.issue}`}
            className="font-sans text-[12px] uppercase tracking-[0.1em] hover:underline underline-offset-4"
          >
            ← Retour au sommaire / 返回当期目录
          </Link>
        </div>
      </div>
    </article>
  );
}
