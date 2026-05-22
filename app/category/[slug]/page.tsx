import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { categories, getCategoryBySlug } from "@/lib/categories";
import { getArticlesByCategorySlug } from "@/lib/articles";
import ArticleCard from "@/components/ArticleCard";

export async function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const cat = getCategoryBySlug(params.slug);
  if (!cat) return {};
  return {
    title: `${cat.fr} / ${cat.cn}`,
  };
}

export default function CategoryPage({
  params,
}: {
  params: { slug: string };
}) {
  const cat = getCategoryBySlug(params.slug);
  if (!cat) notFound();
  const articles = getArticlesByCategorySlug(cat.slug);

  return (
    <div>
      {/* Folio bar */}
      <div className="border-b border-black">
        <div className="px-4 md:px-8 h-9 flex items-center justify-between font-sans text-[10px] uppercase tracking-[0.18em]">
          <span>C33 — Rubrique</span>
          <span className="hidden md:inline font-display italic normal-case tracking-normal">
            {cat.fr} / {cat.cn}
          </span>
          <span>2026</span>
        </div>
      </div>

      {/* Header */}
      <header className="border-b border-black px-6 md:px-10 py-16 md:py-24 text-center">
        <div className="font-sans text-[10px] uppercase tracking-[0.22em] mb-6">
          — Rubrique —
        </div>
        <h1 className="font-display font-medium text-[56px] md:text-[104px] leading-[0.95] tracking-[-0.02em]">
          {cat.fr}
        </h1>
        <div className="font-serif mt-4 text-[18px] md:text-[22px] text-neutral-700">
          {cat.cn}
        </div>
        <div className="font-display italic mt-8 text-[14px] md:text-[16px]">
          {String(articles.length).padStart(2, "0")} pièce
          {articles.length === 1 ? "" : "s"}
        </div>
      </header>

      {/* Articles list */}
      <section className="px-6 md:px-10 py-14 md:py-20">
        <div className="max-w-[1100px] mx-auto">
          {articles.length === 0 ? (
            <div className="text-center py-16">
              <div className="font-display italic text-[22px] md:text-[26px] text-neutral-500">
                À paraître.
              </div>
              <div className="font-serif text-[15px] mt-2 text-neutral-500">
                待发布。
              </div>
            </div>
          ) : (
            <>
              {articles.map((a, i) => (
                <ArticleCard key={a.slug} article={a} index={i} />
              ))}
              <div className="border-t border-black" />
            </>
          )}
        </div>
      </section>
    </div>
  );
}
