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
  const title = `Issue N° ${issue.number} — ${issue.title}`;
  const description = `${issue.subtitle} · ${issue.season} ${issue.year} · Le sommaire complet du numéro ${issue.number} de C33.`;
  const url = `/issue/${issue.slug}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url, type: "website" },
  };
}

export default function IssuePage({ params }: { params: { slug: string } }) {
  const issue = getIssueBySlug(params.slug);
  if (!issue) notFound();
  const articles = getArticlesByIssue(issue.slug);

  return (
    <div>
      {/* Cover plate */}
      <section className="border-b border-black">
        <div className="relative">
          <div
            aria-hidden
            className="aspect-[4/5] md:aspect-[16/9] w-full bg-black"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-between text-white py-10 md:py-16 px-6 md:px-12 text-center">
            <div className="w-full flex justify-between font-sans text-[10px] uppercase tracking-[0.22em]">
              <span>N° {issue.number}</span>
              <span>
                {issue.season} · {issue.year}
              </span>
            </div>
            <div>
              <div className="font-display italic text-[12px] md:text-[14px] tracking-[0.1em] mb-4 md:mb-6">
                — {issue.subtitle} —
              </div>
              <h1 className="font-display font-medium text-[48px] md:text-[112px] leading-[0.95] tracking-[-0.02em]">
                {issue.title}
              </h1>
            </div>
            <div className="w-full flex justify-between font-sans text-[10px] uppercase tracking-[0.22em]">
              <span>France / Chine</span>
              <span>
                {String(articles.length).padStart(2, "0")} pièces
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Sommaire */}
      <section className="px-6 md:px-10 py-14 md:py-20">
        <div className="text-center mb-10 md:mb-14">
          <div className="font-sans text-[10px] uppercase tracking-[0.22em] mb-4">
            — Sommaire / 目录 —
          </div>
          <h2 className="font-display text-[34px] md:text-[48px] leading-[1] tracking-[-0.01em]">
            Numéro {issue.number}
          </h2>
        </div>
        <div className="max-w-[1100px] mx-auto">
          {articles.map((a, i) => (
            <ArticleCard key={a.slug} article={a} index={i} />
          ))}
          <div className="border-t border-black" />
        </div>

        <div className="text-center mt-12 md:mt-16">
          <p className="font-display italic text-[20px] md:text-[26px] leading-[1.4]">
            Quatre pièces, quatre regards.
          </p>
          <p className="font-serif text-[15px] md:text-[16px] mt-2 text-neutral-600">
            四篇文章,四种视角。
          </p>
        </div>
      </section>
    </div>
  );
}
