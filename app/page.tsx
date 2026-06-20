import Link from "next/link";
import { getCurrentIssue, issueAccentStyle, C33_ISSN } from "@/lib/issues";
import { getArticlesByIssue } from "@/lib/articles";
import { categories } from "@/lib/categories";
import EditorialImage from "@/components/EditorialImage";
import Newsletter from "@/components/Newsletter";

export default function HomePage() {
  const issue = getCurrentIssue();
  const articles = getArticlesByIssue(issue.slug);
  const [titleFR, titleCN] = issue.title.includes(" / ")
    ? issue.title.split(" / ")
    : [issue.title, ""];

  return (
    <div style={issueAccentStyle(issue)}>
      {/* COUVERTURE — restrained typographic cover: paper ground, accent as jewelry */}
      <section className="border-b border-black">
        <div className="px-5 md:px-10 pt-10 md:pt-14 pb-12 md:pb-16 min-h-[76vh] flex flex-col justify-between">
          {/* top line */}
          <div className="flex items-center justify-between font-mono text-[10px] md:text-[11px] uppercase tracking-[0.24em] text-muted">
            <span>C33 — Revue franco-chinoise</span>
            <span className="flex items-center gap-2">
              <span aria-hidden className="inline-block h-1.5 w-1.5 rounded-full bg-klein" />
              N°{issue.number} · {issue.season} {issue.year}
            </span>
          </div>

          {/* center — issue title + standfirst */}
          <div className="my-12 md:my-8">
            <div className="font-mono text-[10px] md:text-[11px] uppercase tracking-[0.32em] text-klein mb-6">
              — Le numéro —
            </div>
            <h1 className="font-display leading-[0.9] tracking-[-0.03em] text-ink">
              <span className="block text-[52px] md:text-[96px]">
                {titleFR}
              </span>
              {titleCN && (
                <span className="block font-display italic text-[38px] md:text-[72px] text-klein mt-1 md:mt-2">
                  {titleCN}
                </span>
              )}
            </h1>
            <p className="font-display italic text-[20px] md:text-[28px] leading-[1.3] mt-7 max-w-[640px] text-muted">
              {issue.tagline}
            </p>
          </div>

          {/* cover lines — the issue's headline pieces */}
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted mb-3">
              À la une / 本期导读
            </div>
            <ul className="border-t border-black">
              {articles.slice(0, 4).map((a, i) => (
                <li key={a.slug} className="border-b border-line">
                  <Link
                    href={`/article/${a.slug}`}
                    className="group flex items-baseline gap-4 md:gap-6 py-3 md:py-4"
                  >
                    <span className="font-mono text-[11px] tracking-[0.16em] text-klein w-6 shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-display text-[19px] md:text-[28px] leading-[1.15] tracking-[-0.01em] text-ink group-hover:text-klein transition-colors">
                      {a.title}
                    </span>
                    <span className="ml-auto hidden md:inline self-center font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
                      {a.category}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex items-center justify-between gap-4 mt-6 font-mono text-[10px] uppercase tracking-[0.22em] text-muted">
              <span>France · Chine</span>
              <span className="hidden md:inline">ISSN {C33_ISSN}</span>
              <Link
                href={`/issue/${issue.slug}`}
                className="text-klein underline underline-offset-4 decoration-1 hover:text-ink"
              >
                Lire le numéro →
              </Link>
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

      {/* SOMMAIRE — vertical alternating image/text rows */}
      <section className="border-b border-line">
        <div className="px-5 md:px-10 py-12 md:py-20">
          <div className="max-w-[1240px] mx-auto">
            <div className="flex items-baseline justify-between mb-12 md:mb-20">
              <h2 className="font-display text-[30px] md:text-[44px] tracking-[-0.01em] relative pl-4 md:pl-6">
                <span aria-hidden className="absolute left-0 top-1/2 -translate-y-1/2 h-7 md:h-9 w-[2px] bg-klein" />
                Le sommaire
              </h2>
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
                目录 / N°{issue.number}
              </span>
            </div>

            <div className="space-y-16 md:space-y-24">
              {articles.map((a, i) => {
                const isLead = i === 0;
                const reversed = i % 2 === 1; // alternate sides

                const imgPart = (
                  <div className="md:col-span-6">
                    <Link href={`/article/${a.slug}`} className="group block">
                      <EditorialImage
                        src={a.cover}
                        alt={a.coverAlt ?? a.title}
                        ratio="aspect-[3/2]"
                        sizes="(min-width: 768px) 50vw, 100vw"
                        priority={isLead}
                        label={a.title}
                        sublabel={a.category}
                      />
                    </Link>
                  </div>
                );

                const textPart = (
                  <div className="md:col-span-5 md:col-start-auto">
                    {isLead && (
                      <div className="font-mono text-[10px] uppercase tracking-[0.28em] text-klein mb-5">
                        ● En tête / 头条
                      </div>
                    )}
                    <div className="flex items-center gap-3 mb-4 font-mono text-[10px] uppercase tracking-[0.22em]">
                      <span className="inline-flex items-center gap-2 text-klein">
                        <span
                          aria-hidden
                          className="inline-block h-1.5 w-1.5 rounded-full bg-klein"
                        />
                        {a.category}
                      </span>
                      <span className="text-muted">N°{a.issue}</span>
                      <span className="text-muted">
                        — {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <Link href={`/article/${a.slug}`} className="group block">
                      <h3 className="font-display text-[26px] md:text-[38px] leading-[1.1] tracking-[-0.015em] group-hover:text-klein transition-colors">
                        {a.title}
                      </h3>
                    </Link>
                    {a.excerpt && (
                      <p className="font-display italic text-[17px] md:text-[19px] leading-[1.45] text-muted mt-5">
                        {a.excerpt}
                      </p>
                    )}
                    <div className="mt-6 flex items-center gap-3 font-mono text-[11px] tracking-[0.02em] text-muted">
                      <span>{a.author}</span>
                      <span aria-hidden>/</span>
                      <span>{a.readingTime} MIN</span>
                      <span aria-hidden>/</span>
                      <Link
                        href={`/article/${a.slug}`}
                        className="text-klein hover:text-ink transition-colors"
                      >
                        Lire →
                      </Link>
                    </div>
                  </div>
                );

                return (
                  <article
                    key={a.slug}
                    className="grid grid-cols-1 md:grid-cols-12 gap-y-6 md:gap-x-16 items-center"
                  >
                    {reversed ? (
                      <>
                        {textPart}
                        <div className="md:col-span-1 hidden md:block" />
                        {imgPart}
                      </>
                    ) : (
                      <>
                        {imgPart}
                        <div className="md:col-span-1 hidden md:block" />
                        {textPart}
                      </>
                    )}
                  </article>
                );
              })}
            </div>

            <div className="text-center mt-20 md:mt-28">
              <span
                aria-hidden
                className="inline-block h-px w-10 bg-klein mb-5"
              />
              <p className="font-display italic text-[22px] md:text-[28px] leading-[1.4]">
                {issue.signoff}
              </p>
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] mt-4 text-muted">
                {issue.signoffCn}
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
