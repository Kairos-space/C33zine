import Link from "next/link";
import { getCurrentIssue } from "@/lib/issues";
import { getArticlesByIssue } from "@/lib/articles";
import ArticleCard from "@/components/ArticleCard";

export default function HomePage() {
  const issue = getCurrentIssue();
  const articles = getArticlesByIssue(issue.slug);

  return (
    <div>
      {/* Hero */}
      <section className="border-b border-black">
        <div className="px-6 md:px-10 pt-16 md:pt-24 pb-12">
          <div className="flex justify-between items-start text-[11px] font-sans uppercase tracking-[0.12em] mb-8">
            <span>Quarterly / Trimestriel</span>
            <span>
              N° {issue.number} — {issue.season} {issue.year}
            </span>
          </div>
          <h1 className="font-sans font-semibold tracking-[-0.04em] leading-[0.85] text-[28vw] md:text-[22vw]">
            C33
          </h1>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-12 gap-6">
            <p className="md:col-span-7 font-serif text-[18px] md:text-[20px] leading-[1.6]">
              C33 décode les logiques de l&apos;industrie de la mode et des
              récits de marque, à travers la distance et le lien entre la
              France et la Chine.
            </p>
            <p className="md:col-span-5 md:col-start-8 font-serif text-[16px] md:text-[18px] leading-[1.8] text-neutral-700">
              解码时尚产业与品牌叙事的逻辑,在中法之间的距离与连接里。
            </p>
          </div>
        </div>
      </section>

      {/* Current issue cover */}
      <section className="border-b border-black">
        <div className="px-6 md:px-10 py-10">
          <div className="flex justify-between items-baseline text-[11px] font-sans uppercase tracking-[0.12em] mb-6">
            <span>Numéro courant</span>
            <Link
              href={`/issue/${issue.slug}`}
              className="hover:underline underline-offset-4"
            >
              Voir le sommaire →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-end">
            <div className="md:col-span-7">
              <div
                aria-hidden
                className="aspect-[3/4] bg-black w-full"
                style={{ backgroundColor: "#000" }}
              />
            </div>
            <div className="md:col-span-4 md:col-start-9">
              <div className="font-sans text-[11px] uppercase tracking-[0.12em] mb-3">
                Issue N° {issue.number}
              </div>
              <h2 className="font-serif text-[40px] md:text-[56px] leading-[1.05] tracking-tight">
                {issue.title}
              </h2>
              <div className="mt-6 font-sans text-[12px] uppercase tracking-[0.08em]">
                {issue.season} {issue.year}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article list */}
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
          {/* placeholder filler rows so we always show 6 lines */}
          {Array.from({ length: Math.max(0, 6 - articles.length) }).map(
            (_, i) => (
              <div
                key={`ph-${i}`}
                className="border-t border-black py-6 flex items-baseline gap-6 opacity-40"
              >
                <span className="font-sans text-[11px] tracking-[0.1em] uppercase w-8 shrink-0">
                  {String(articles.length + i + 1).padStart(2, "0")}
                </span>
                <div className="flex-1">
                  <div className="font-sans text-[11px] tracking-[0.1em] uppercase mb-2">
                    À paraître
                  </div>
                  <h3 className="font-serif text-[22px] md:text-[26px] leading-[1.25]">
                    À paraître / 待发布
                  </h3>
                  <div className="font-sans text-[12px] mt-3 uppercase tracking-[0.08em]">
                    —
                  </div>
                </div>
              </div>
            ),
          )}
          <div className="border-t border-black" />
        </div>
      </section>
    </div>
  );
}
