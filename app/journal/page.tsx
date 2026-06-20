import Link from "next/link";
import type { Metadata } from "next";
import { getAllJournalPosts } from "@/lib/journal";

export const metadata: Metadata = {
  title: "Journal",
  description:
    "Le carnet de C33 — notes courtes entre deux numéros. C33 编辑部的间期笔记。",
  alternates: { canonical: "/journal" },
};

export default function JournalPage() {
  const posts = getAllJournalPosts();

  return (
    <div>
      {/* Folio bar */}
      <div className="border-b border-line">
        <div className="px-4 md:px-8 h-9 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
          <span>C33 — Journal</span>
          <span className="hidden md:inline italic normal-case tracking-normal text-ink">
            Journal / 编辑部日志
          </span>
          <span>2026</span>
        </div>
      </div>

      {/* Header */}
      <header className="border-b border-line">
        <div className="px-5 md:px-10 py-20 md:py-28 text-center">
          <div className="inline-flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.3em] text-klein mb-10">
            <span aria-hidden className="h-px w-6 bg-klein" />
            Journal / 编辑部日志
            <span aria-hidden className="h-px w-6 bg-klein" />
          </div>
          <h1 className="font-display text-[48px] md:text-[88px] leading-[0.95] tracking-[-0.025em]">
            Entre les numéros.
          </h1>
          <p className="font-serif text-[18px] md:text-[20px] mt-8 max-w-[640px] mx-auto text-muted">
            两期之间的短笔记 —— 工作室的现场、编辑过程的反思、读到的好东西、想推荐的人。
          </p>
        </div>
      </header>

      {/* Entries */}
      <section className="px-5 md:px-10 py-12 md:py-20">
        <div className="max-w-[1100px] mx-auto">
          {posts.length === 0 ? (
            <p
              className="text-center font-display italic text-[20px] text-muted py-20"
              lang="fr"
            >
              Le premier billet paraît bientôt.
            </p>
          ) : (
            <div className="space-y-12 md:space-y-16">
              {posts.map((p, i) => (
                <article
                  key={p.slug}
                  className="grid grid-cols-1 md:grid-cols-12 gap-y-4 md:gap-x-12 pb-12 md:pb-16 border-b border-line last:border-b-0 last:pb-0"
                >
                  <div className="md:col-span-3">
                    <div className="font-mono text-[10px] uppercase tracking-[0.24em] text-klein mb-2">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
                      {p.date}
                    </div>
                    <div className="font-display italic text-[15px] mt-2">
                      {p.kind}
                    </div>
                    <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted mt-2">
                      {p.author}
                    </div>
                  </div>
                  <div className="md:col-span-9">
                    <Link href={`/journal/${p.slug}`} className="group block">
                      <h2 className="font-display text-[26px] md:text-[34px] leading-[1.15] tracking-[-0.015em] group-hover:text-klein transition-colors">
                        {p.title}
                      </h2>
                    </Link>
                    {p.excerpt && (
                      <p className="font-display italic text-[17px] md:text-[19px] leading-[1.5] text-muted mt-4 max-w-[640px]">
                        {p.excerpt}
                      </p>
                    )}
                    <Link
                      href={`/journal/${p.slug}`}
                      className="inline-block mt-5 font-mono text-[11px] uppercase tracking-[0.2em] text-klein hover:text-ink transition-colors"
                    >
                      Lire la note →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
