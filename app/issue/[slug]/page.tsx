import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { issues, getIssueBySlug, issueAccentStyle } from "@/lib/issues";
import { getArticlesByIssue } from "@/lib/articles";
import { getCategoryByCn } from "@/lib/categories";
import { resolveCover } from "@/lib/cover";
import EditorialImage from "@/components/EditorialImage";
import BilingualTitle from "@/components/BilingualTitle";

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
  const titleFr = issue.title.includes(" / ")
    ? issue.title.split(" / ")[0]
    : issue.title;
  const title = `Issue N° ${issue.number} — ${titleFr}`;
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
  const cover = resolveCover(issue.cover);
  const [titleFR, titleCN] = issue.title.includes(" / ")
    ? issue.title.split(" / ")
    : [issue.title, ""];

  return (
    <div style={issueAccentStyle(issue)}>
      {/* Folio bar */}
      <div className="border-b border-line">
        <div className="px-4 md:px-8 h-9 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
          <Link href="/issues" className="hover:text-klein transition-colors">
            ← Les numéros
          </Link>
          <span className="hidden md:inline italic normal-case tracking-normal text-ink">
            Numéro {issue.number}
          </span>
          <span>
            {issue.season} {issue.year}
          </span>
        </div>
      </div>

      {/* HERO — split: title left + cover image right */}
      <section className="border-b border-line">
        <div className="grid grid-cols-1 md:grid-cols-12">
          <div className="md:col-span-5 px-5 md:px-10 py-12 md:py-16 flex flex-col justify-between md:border-r border-line">
            <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted flex flex-col gap-2">
              <span className="flex items-center gap-2">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-klein" />
                <span className="text-klein">
                  {issue.status === "current" ? "Numéro courant" : "Archive"}
                </span>
              </span>
              <span>
                N°{issue.number} / {issue.season} {issue.year}
              </span>
            </div>

            <div className="my-12 md:my-10">
              <div className="font-display italic text-[14px] md:text-[16px] tracking-[0.04em] text-muted mb-4">
                — {issue.subtitle} —
              </div>
              <h1 className="font-display leading-[0.95] tracking-[-0.025em]">
                <span className="block text-[44px] md:text-[64px]">
                  {titleFR}
                </span>
                {titleCN && (
                  <span
                    className="block font-display italic text-[26px] md:text-[36px] text-muted mt-1"
                    lang="zh-CN"
                  >
                    / {titleCN}
                  </span>
                )}
              </h1>
              <p className="font-display italic text-[18px] md:text-[22px] leading-[1.35] mt-6 max-w-[420px]">
                {issue.tagline}
              </p>
            </div>

            <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted flex items-center gap-3">
              <span>France / Chine</span>
              <span aria-hidden>·</span>
              <span>
                {String(articles.length).padStart(2, "0")} pièces
              </span>
            </div>
          </div>

          <div className="md:col-span-7">
            <EditorialImage
              src={cover}
              alt={issue.coverAlt ?? issue.title}
              ratio="aspect-[3/2]"
              sizes="(min-width: 768px) 58vw, 100vw"
              priority
              label={issue.title}
              sublabel={`Numéro ${issue.number}`}
            />
          </div>
        </div>
      </section>

      {/* Sommaire — alternating image/text rows (same rhythm as home) */}
      <section className="border-b border-line">
        <div className="px-5 md:px-10 py-12 md:py-20">
          <div className="max-w-[1240px] mx-auto">
            <div className="flex items-baseline justify-between mb-12 md:mb-20">
              <h2 className="font-display text-[30px] md:text-[44px] tracking-[-0.01em] relative pl-4 md:pl-6">
                <span
                  aria-hidden
                  className="absolute left-0 top-1/2 -translate-y-1/2 h-7 md:h-9 w-[2px] bg-klein"
                />
                Le sommaire
              </h2>
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
                <span lang="zh-CN">目录 / </span>N°{issue.number}
              </span>
            </div>

            <div className="space-y-16 md:space-y-24">
              {articles.map((a, i) => {
                const reversed = i % 2 === 1;
                const imgPart = (
                  <div className="md:col-span-6">
                    <Link
                      href={`/article/${a.slug}`}
                      className="group block"
                    >
                      <EditorialImage
                        src={a.cover}
                        alt={a.coverAlt ?? a.title}
                        ratio="aspect-[3/2]"
                        sizes="(min-width: 768px) 50vw, 100vw"
                        label={a.titleFr ?? a.title}
                        sublabel={getCategoryByCn(a.category)?.fr ?? a.category}
                      />
                    </Link>
                  </div>
                );
                const textPart = (
                  <div className="md:col-span-5">
                    <div className="flex items-center gap-3 mb-4 font-mono text-[10px] uppercase tracking-[0.22em]">
                      <span className="inline-flex items-center gap-2 text-klein">
                        <span
                          aria-hidden
                          className="inline-block h-1.5 w-1.5 rounded-full bg-klein"
                        />
                        <span lang="fr">{getCategoryByCn(a.category)?.fr ?? a.category}</span>
                        <span lang="zh-CN">{a.category}</span>
                      </span>
                      <span className="text-muted">
                        — {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <Link
                      href={`/article/${a.slug}`}
                      className="group block"
                    >
                      <h3 className="font-display text-[26px] md:text-[38px] leading-[1.1] tracking-[-0.015em] group-hover:text-klein transition-colors">
                        <BilingualTitle article={a} />
                      </h3>
                    </Link>
                    {a.excerptFr && (
                      <p
                        lang="fr"
                        className="font-display italic text-[17px] md:text-[19px] leading-[1.45] text-muted mt-5"
                      >
                        {a.excerptFr}
                      </p>
                    )}
                    {a.excerpt && (
                      <p
                        lang="zh-CN"
                        className="font-display italic text-[17px] md:text-[19px] leading-[1.45] text-muted mt-5"
                      >
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

            <div className="text-center mt-20 md:mt-24">
              <span
                aria-hidden
                className="inline-block h-px w-10 bg-klein mb-5"
              />
              <p className="font-display italic text-[22px] md:text-[28px] leading-[1.4]">
                {issue.signoff}
              </p>
              <p
                className="font-mono text-[11px] uppercase tracking-[0.2em] mt-4 text-muted"
                lang="zh-CN"
              >
                {issue.signoffCn}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
