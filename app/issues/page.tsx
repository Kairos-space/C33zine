import Link from "next/link";
import type { Metadata } from "next";
import { issues, issueAccentStyle } from "@/lib/issues";
import { getArticlesByIssue } from "@/lib/articles";
import { resolveCover } from "@/lib/cover";
import EditorialImage from "@/components/EditorialImage";

export const metadata: Metadata = {
  title: "Les numéros",
  description:
    "Tous les numéros de C33 — la revue trimestrielle franco-chinoise sur le goût, les marques et l'art de vivre. 所有期号。",
  alternates: { canonical: "/issues" },
};

export default function IssuesPage() {
  const ordered = [...issues].sort((a, b) => b.number.localeCompare(a.number));

  return (
    <div>
      {/* Folio bar */}
      <div className="border-b border-line">
        <div className="px-4 md:px-8 h-9 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
          <span>C33 — Les numéros</span>
          <span className="hidden md:inline italic normal-case tracking-normal text-ink">
            Issues / 期号
          </span>
          <span>2026</span>
        </div>
      </div>

      {/* Header */}
      <header className="border-b border-line">
        <div className="px-5 md:px-10 py-20 md:py-28 text-center">
          <div className="inline-flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.3em] text-klein mb-10">
            <span aria-hidden className="h-px w-6 bg-klein" />
            Archive / 期号
            <span aria-hidden className="h-px w-6 bg-klein" />
          </div>
          <h1 className="font-display text-[48px] md:text-[88px] leading-[0.95] tracking-[-0.025em]">
            Les numéros
          </h1>
          <p className="font-display italic text-[18px] md:text-[20px] mt-8 max-w-[560px] mx-auto text-muted">
            Une revue trimestrielle. Un thème par numéro, quatre par an.
          </p>
        </div>
      </header>

      {/* Issue list */}
      <section className="px-5 md:px-10 py-14 md:py-20">
        <div className="max-w-[1240px] mx-auto space-y-16 md:space-y-24">
          {ordered.map((issue, i) => {
            const count = getArticlesByIssue(issue.slug).length;
            const cover = resolveCover(issue.cover);
            const reversed = i % 2 === 1;

            const imgPart = (
              <div className="md:col-span-6">
                <Link
                  href={`/issue/${issue.slug}`}
                  className="group block"
                >
                  <EditorialImage
                    src={cover}
                    alt={issue.coverAlt ?? issue.title}
                    ratio="aspect-[3/2]"
                    sizes="(min-width: 768px) 50vw, 100vw"
                    label={issue.title}
                    sublabel={`Numéro ${issue.number}`}
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
                    {issue.status === "current"
                      ? "Numéro courant"
                      : "Archive"}
                  </span>
                  <span className="text-muted">
                    {issue.season} {issue.year}
                  </span>
                </div>
                <Link
                  href={`/issue/${issue.slug}`}
                  className="group block"
                >
                  <h2 className="font-display text-[34px] md:text-[56px] leading-[1.02] tracking-[-0.02em] group-hover:text-klein transition-colors">
                    N° {issue.number}
                    <br />
                    <span className="italic">{issue.title}</span>
                  </h2>
                </Link>
                <p className="font-display italic text-[17px] md:text-[19px] mt-5 text-muted">
                  {issue.subtitle} · {String(count).padStart(2, "0")} pièces
                </p>
                <Link
                  href={`/issue/${issue.slug}`}
                  className="inline-flex items-center gap-3 mt-7 font-mono text-[12px] uppercase tracking-[0.2em] text-klein group"
                >
                  <span
                    aria-hidden
                    className="inline-block h-px w-8 bg-klein transition-all group-hover:w-12"
                  />
                  Lire le numéro
                </Link>
              </div>
            );

            return (
              <article
                key={issue.slug}
                style={issueAccentStyle(issue)}
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
      </section>
    </div>
  );
}
