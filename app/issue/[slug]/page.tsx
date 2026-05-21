import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { issues, getIssueBySlug } from "@/lib/issues";
import { getArticlesByIssue } from "@/lib/articles";
import ArticleCard from "@/components/ArticleCard";

export async function generateStaticParams() {
  return issues.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const issue = getIssueBySlug(params.slug);
  if (!issue) return {};
  return {
    title: `Issue N° ${issue.number} — ${issue.title}`,
  };
}

export default function IssuePage({ params }: { params: { slug: string } }) {
  const issue = getIssueBySlug(params.slug);
  if (!issue) notFound();
  const articles = getArticlesByIssue(issue.slug);

  return (
    <div>
      <section className="border-b border-black">
        <div className="px-6 md:px-10 pt-16 pb-12">
          <div className="flex justify-between items-start font-sans text-[11px] uppercase tracking-[0.12em] mb-8">
            <span>Issue N° {issue.number}</span>
            <span>
              {issue.season} {issue.year}
            </span>
          </div>
          <h1 className="font-serif text-[64px] md:text-[120px] leading-[0.95] tracking-tight">
            {issue.title}
          </h1>
          <div className="mt-8 font-sans text-[12px] uppercase tracking-[0.1em]">
            {issue.subtitle}
          </div>
        </div>
      </section>

      <section className="px-6 md:px-10 py-12">
        <div className="flex justify-between items-baseline mb-8">
          <h2 className="font-sans text-[11px] uppercase tracking-[0.12em]">
            Sommaire / 目录
          </h2>
          <span className="font-sans text-[11px] uppercase tracking-[0.12em]">
            {String(articles.length).padStart(2, "0")} articles
          </span>
        </div>
        <div>
          {articles.map((a, i) => (
            <ArticleCard key={a.slug} article={a} index={i} />
          ))}
          <div className="border-t border-black" />
        </div>
      </section>
    </div>
  );
}
