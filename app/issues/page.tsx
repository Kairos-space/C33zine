import Link from "next/link";
import type { Metadata } from "next";
import { issues } from "@/lib/issues";
import { getArticlesByIssue } from "@/lib/articles";

export const metadata: Metadata = {
  title: "Les numéros",
  description:
    "Tous les numéros de C33 — la revue trimestrielle franco-chinoise sur l'industrie de la mode et les récits de marque. 所有期号。",
  alternates: { canonical: "/issues" },
};

export default function IssuesPage() {
  const ordered = [...issues].sort((a, b) => b.number.localeCompare(a.number));

  return (
    <div>
      {/* Folio bar */}
      <div className="border-b border-black">
        <div className="px-4 md:px-8 h-9 flex items-center justify-between font-sans text-[10px] uppercase tracking-[0.18em]">
          <span>C33 — Les numéros</span>
          <span className="hidden md:inline font-display italic normal-case tracking-normal">
            Issues / 期号
          </span>
          <span>2026</span>
        </div>
      </div>

      {/* Header */}
      <header className="border-b border-black px-6 md:px-10 py-16 md:py-24 text-center">
        <div className="font-sans text-[10px] uppercase tracking-[0.22em] mb-6">
          — Archive —
        </div>
        <h1 className="font-display font-medium text-[44px] md:text-[88px] leading-[0.95] tracking-[-0.02em]">
          Les numéros
        </h1>
        <p className="font-display italic text-[16px] md:text-[18px] mt-6 max-w-[520px] mx-auto">
          Une revue trimestrielle. Un thème par numéro, quatre par an.
        </p>
      </header>

      {/* Issue list */}
      <section className="px-6 md:px-10 py-14 md:py-20">
        <div className="max-w-[1100px] mx-auto">
          {ordered.map((issue) => {
            const count = getArticlesByIssue(issue.slug).length;
            return (
              <Link
                key={issue.slug}
                href={`/issue/${issue.slug}`}
                className="group block border-t border-black"
              >
                <div className="grid grid-cols-12 gap-4 md:gap-6 py-10 md:py-14 items-center">
                  {/* Cover thumbnail */}
                  <div className="col-span-4 md:col-span-3">
                    <div
                      aria-hidden
                      className="aspect-[3/4] bg-black w-full flex flex-col items-center justify-center text-white text-center p-3"
                    >
                      <div className="font-sans text-[9px] uppercase tracking-[0.2em] mb-2">
                        N° {issue.number}
                      </div>
                      <div className="font-display font-medium text-[18px] md:text-[26px] leading-[1.05] tracking-tight">
                        {issue.title}
                      </div>
                    </div>
                  </div>
                  {/* Meta */}
                  <div className="col-span-8 md:col-span-9">
                    <div className="font-sans text-[10px] uppercase tracking-[0.18em] mb-3">
                      {issue.status === "current"
                        ? "Numéro courant"
                        : "Archive"}{" "}
                      · {issue.season} {issue.year}
                    </div>
                    <h2 className="font-display font-medium text-[30px] md:text-[52px] leading-[1.02] tracking-[-0.02em] group-hover:underline underline-offset-4 decoration-1">
                      N° {issue.number} — {issue.title}
                    </h2>
                    <div className="mt-4 font-display italic text-[15px] md:text-[17px] text-neutral-600">
                      {issue.subtitle} · {String(count).padStart(2, "0")} pièces
                    </div>
                    <div className="mt-6 font-sans text-[11px] uppercase tracking-[0.18em]">
                      Lire le numéro →
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
          <div className="border-t border-black" />
        </div>
      </section>
    </div>
  );
}
