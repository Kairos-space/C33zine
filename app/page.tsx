import Link from "next/link";
import { getCurrentIssue } from "@/lib/issues";
import { getArticlesByIssue } from "@/lib/articles";
import { categories } from "@/lib/categories";
import { resolveCover } from "@/lib/cover";
import ArticleTile from "@/components/ArticleTile";
import EditorialImage from "@/components/EditorialImage";
import Newsletter from "@/components/Newsletter";

export default function HomePage() {
  const issue = getCurrentIssue();
  const issueCover = resolveCover(issue.cover);
  const articles = getArticlesByIssue(issue.slug);
  const [lead, ...rest] = articles;
  const [titleFR, titleCN] = issue.title.includes(" / ")
    ? issue.title.split(" / ")
    : [issue.title, ""];

  return (
    <div>
      {/* HERO — split: editorial title + image plate */}
      <section className="border-b border-line">
        <div className="grid grid-cols-1 md:grid-cols-12">
          {/* Left — metadata + title */}
          <div className="md:col-span-5 px-5 md:px-10 py-12 md:py-16 flex flex-col justify-between md:border-r border-line">
            <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted flex flex-col gap-2">
              <span className="flex items-center gap-2">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-klein" />
                <span className="text-klein">Numéro courant</span>
              </span>
              <span>
                N°{issue.number} / {issue.season} {issue.year}
              </span>
            </div>

            <div className="my-12 md:my-10">
              <h1 className="font-display leading-[0.95] tracking-[-0.025em]">
                <span className="block text-[44px] md:text-[64px]">
                  {titleFR}
                </span>
                {titleCN && (
                  <span className="block font-display italic text-[26px] md:text-[36px] text-muted mt-1">
                    / {titleCN}
                  </span>
                )}
              </h1>
              <p className="font-display italic text-[18px] md:text-[22px] leading-[1.35] mt-6 max-w-[420px]">
                La fabrique des récits — derrière la mode, le métier qui les
                tient.
              </p>
            </div>

            <Link
              href={`/issue/${issue.slug}`}
              className="group inline-flex items-center gap-3 font-mono text-[12px] uppercase tracking-[0.2em] text-klein w-fit"
            >
              <span
                aria-hidden
                className="inline-block h-px w-8 bg-klein transition-all group-hover:w-12"
              />
              Découvrir le numéro
              <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </div>

          {/* Right — image plate (fills column height on desktop) */}
          <div className="md:col-span-7 relative md:min-h-[560px]">
            <div className="md:absolute md:inset-0">
              <EditorialImage
                src={issueCover}
                alt={issue.coverAlt ?? issue.title}
                ratio="aspect-[3/2] md:aspect-auto"
                sizes="(min-width: 768px) 58vw, 100vw"
                priority
                label={issue.title}
                sublabel={`Numéro ${issue.number}`}
                className="md:!h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ÉDITO */}
      <section className="border-b border-line">
        <div className="px-5 md:px-10 py-14 md:py-20 max-w-[860px] mx-auto text-center">
          <div className="inline-flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.3em] text-klein mb-7">
            <span aria-hidden className="h-px w-6 bg-klein" />
            Édito
            <span aria-hidden className="h-px w-6 bg-klein" />
          </div>
          <p className="font-display text-[26px] md:text-[38px] leading-[1.22] tracking-[-0.015em]">
            C33 décode les logiques de l&apos;industrie de la mode et des récits
            de marque, <span className="italic text-klein">entre la France et
            la Chine</span> — entre les deux regards, les deux traductions, et
            leurs réalités respectives.
          </p>
          <div className="mt-7 max-w-[560px] mx-auto font-serif text-[15px] md:text-[16px] leading-[1.85] text-muted">
            解码时尚产业与品牌叙事的逻辑——在中国与法国的间距之中,在双重凝视、双向转译、以及各自面对的现实困局之间。
          </div>
          <div className="mt-8 font-mono text-[11px] uppercase tracking-[0.22em] text-muted">
            <span className="text-klein">●</span> Kairos Zhang — Rédactrice en chef
          </div>
        </div>
      </section>

      {/* SOMMAIRE */}
      <section className="border-b border-line">
        <div className="px-5 md:px-10 py-12 md:py-16">
          <div className="max-w-[1280px] mx-auto">
            <div className="flex items-baseline justify-between mb-10 md:mb-12">
              <h2 className="font-display text-[30px] md:text-[44px] tracking-[-0.01em] relative pl-4 md:pl-6">
                <span aria-hidden className="absolute left-0 top-1/2 -translate-y-1/2 h-7 md:h-9 w-[2px] bg-klein" />
                Le sommaire
              </h2>
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
                目录 / N°{issue.number}
              </span>
            </div>

            {lead && (
              <div className="mb-12 md:mb-16 max-w-[1000px] mx-auto">
                <div className="font-mono text-[10px] uppercase tracking-[0.24em] text-klein mb-4 text-center">
                  ● En tête / 头条
                </div>
                <Link
                  href={`/article/${lead.slug}`}
                  className="group block"
                >
                  <EditorialImage
                    src={lead.cover}
                    alt={lead.coverAlt ?? lead.title}
                    ratio="aspect-[16/9]"
                    sizes="(min-width: 768px) 1000px, 100vw"
                    priority
                    label={lead.title}
                    sublabel={lead.category}
                    className="mb-6"
                  />
                  <div className="text-center max-w-[720px] mx-auto">
                    <div className="flex items-center justify-center gap-3 mb-3 font-mono text-[10px] uppercase tracking-[0.2em]">
                      <span className="inline-flex items-center gap-2 text-klein">
                        <span aria-hidden className="inline-block h-1.5 w-1.5 rounded-full bg-klein" />
                        {lead.category}
                      </span>
                      <span className="text-muted">N°{lead.issue}</span>
                    </div>
                    <h3 className="font-display text-[28px] md:text-[40px] leading-[1.1] tracking-[-0.015em] group-hover:text-klein transition-colors">
                      {lead.title}
                    </h3>
                    {lead.excerpt && (
                      <p className="font-display italic text-[17px] md:text-[19px] leading-[1.4] text-muted mt-4 max-w-[560px] mx-auto">
                        {lead.excerpt}
                      </p>
                    )}
                    <div className="mt-5 flex items-center justify-center gap-3 font-mono text-[11px] tracking-[0.02em] text-muted">
                      <span>{lead.author}</span>
                      <span aria-hidden>/</span>
                      <span>{lead.readingTime} MIN</span>
                    </div>
                  </div>
                </Link>
              </div>
            )}

            <div className="border-t border-line pt-12 md:pt-16">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 md:gap-x-10 gap-y-12 md:gap-y-16">
                {rest.map((a) => (
                  <ArticleTile key={a.slug} article={a} />
                ))}
              </div>
            </div>

            <div className="text-center mt-20 md:mt-28">
              <span aria-hidden className="inline-block h-px w-10 bg-klein mb-5" />
              <p className="font-display italic text-[22px] md:text-[28px] leading-[1.4]">
                Cinq pièces, cinq regards.
              </p>
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] mt-4 text-muted">
                五篇文章 / 五种视角
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* RUBRIQUES */}
      <section className="border-b border-line">
        <div className="px-5 md:px-10 py-14 md:py-20 text-center">
          <div className="inline-flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.3em] text-klein mb-10">
            <span aria-hidden className="h-px w-6 bg-klein" />
            Rubriques
            <span aria-hidden className="h-px w-6 bg-klein" />
          </div>
          <ul className="flex flex-wrap justify-center items-baseline gap-x-10 md:gap-x-16 gap-y-4">
            {categories.map((c) => (
              <li key={c.slug}>
                <Link
                  href={`/category/${c.slug}`}
                  className="group inline-flex items-baseline gap-2"
                >
                  <span className="font-display text-[24px] md:text-[32px] tracking-tight border-b border-transparent group-hover:border-klein group-hover:text-klein transition-all">
                    {c.fr}
                  </span>
                  <span className="font-mono text-[11px] text-muted">
                    {c.cn}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Newsletter />
    </div>
  );
}
