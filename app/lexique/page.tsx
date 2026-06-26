import Link from "next/link";
import type { Metadata } from "next";
import { lexique } from "@/lib/lexique";

export const metadata: Metadata = {
  title: "Lexique",
  description:
    "Lexique bilingue C33 — petits termes pour lire le goût et l'art de vivre entre la France et la Chine.",
  alternates: { canonical: "/lexique" },
};

export default function LexiquePage() {
  // Group by field
  const grouped = lexique.reduce<
    Record<string, { field: string; fieldCn: string; items: typeof lexique }>
  >((acc, entry) => {
    if (!acc[entry.field]) {
      acc[entry.field] = {
        field: entry.field,
        fieldCn: entry.fieldCn,
        items: [],
      };
    }
    acc[entry.field].items.push(entry);
    return acc;
  }, {});
  const fields = Object.values(grouped);

  return (
    <div>
      {/* Folio bar */}
      <div className="border-b border-line">
        <div className="px-4 md:px-8 h-9 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
          <span>C33 — Lexique</span>
          <span className="hidden md:inline italic normal-case tracking-normal text-ink">
            <span lang="fr">Lexique</span>
            <span lang="zh-CN"> / 词条</span>
          </span>
          <span>2026</span>
        </div>
      </div>

      {/* Header */}
      <header className="border-b border-line">
        <div className="px-5 md:px-10 py-20 md:py-28 text-center">
          <div className="inline-flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.3em] text-klein mb-10">
            <span aria-hidden className="h-px w-6 bg-klein" />
            <span lang="fr">Lexique</span>
            <span lang="zh-CN"> / 词条</span>
            <span aria-hidden className="h-px w-6 bg-klein" />
          </div>
          <h1 className="font-display text-[48px] md:text-[88px] leading-[0.95] tracking-[-0.025em]">
            Lire entre deux langues.
          </h1>
          <p className="font-serif text-[18px] md:text-[20px] mt-8 max-w-[640px] mx-auto text-muted" lang="fr">
            De petits termes pour lire le goût et l&apos;art de vivre entre deux
            langues. Chaque entrée donne deux explications — car un même mot ne
            désigne pas toujours la même chose.
          </p>
          <p className="font-serif text-[18px] md:text-[20px] mt-8 max-w-[640px] mx-auto text-muted" lang="zh-CN">
            一些用于在中法两种语境之间阅读品味与生活方式的小词条。每个词条同时给出两种解释——因为同一个词,常常并不指向同一件事。
          </p>
        </div>
      </header>

      {/* Entries grouped by field */}
      {fields.map((group) => (
        <section key={group.field} className="border-b border-line">
          <div className="px-5 md:px-10 py-12 md:py-16">
            <div className="max-w-[1240px] mx-auto">
              <div className="flex items-baseline justify-between mb-10 md:mb-12">
                <h2 className="font-display text-[28px] md:text-[40px] tracking-[-0.01em] relative pl-4 md:pl-6">
                  <span
                    aria-hidden
                    className="absolute left-0 top-1/2 -translate-y-1/2 h-7 md:h-9 w-[2px] bg-klein"
                  />
                  {group.field}
                </h2>
                <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
                  <span lang="fr">{group.field}</span>
                  <span lang="zh-CN">{group.fieldCn}</span> ·{" "}
                  {String(group.items.length).padStart(2, "0")}
                </span>
              </div>

              <div className="space-y-12 md:space-y-16">
                {group.items.map((entry, i) => (
                  <article
                    key={entry.slug}
                    className="grid grid-cols-1 md:grid-cols-12 gap-y-6 md:gap-x-16"
                  >
                    {/* Term head */}
                    <div className="md:col-span-3">
                      <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-klein mb-3">
                        {String(i + 1).padStart(2, "0")} / {group.field}
                      </div>
                      <h3 className="font-display text-[26px] md:text-[34px] leading-[1.1] tracking-[-0.01em]" lang="fr">
                        {entry.fr}
                      </h3>
                      <div className="mt-2 font-serif text-[20px] md:text-[24px]" lang="zh-CN">
                        {entry.cn}
                        {entry.pinyin && (
                          <span className="font-mono text-[12px] text-muted ml-3 align-middle">
                            {entry.pinyin}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* FR definition */}
                    <div
                      className="md:col-span-5 font-display text-[16px] md:text-[17px] leading-[1.6]"
                      lang="fr"
                    >
                      <p>{entry.defFr}</p>
                      {entry.noteFr && (
                        <p className="mt-3 text-muted text-[15px] italic">
                          — {entry.noteFr}
                        </p>
                      )}
                    </div>

                    {/* CN definition */}
                    <div
                      className="md:col-span-4 font-serif text-[15px] md:text-[16px] leading-[1.9]"
                      lang="zh-CN"
                    >
                      <p>{entry.defCn}</p>
                      {entry.noteCn && (
                        <p className="mt-3 text-muted italic">
                          —— {entry.noteCn}
                        </p>
                      )}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Outro */}
      <section className="px-5 md:px-10 py-20 md:py-28 text-center">
        <p
          className="font-display italic text-[20px] md:text-[26px] max-w-[640px] mx-auto leading-snug"
          lang="fr"
        >
          Le lexique s&apos;agrandit numéro après numéro.
        </p>
        <p
          className="font-serif text-[16px] mt-3 text-muted"
          lang="zh-CN"
        >
          词条会随每期持续增补。
        </p>
        <Link
          href="/contact"
          className="inline-block mt-8 font-mono text-[11px] uppercase tracking-[0.2em] text-klein border-b border-klein pb-1 hover:text-ink hover:border-ink transition-colors"
        >
          Proposer un terme →
        </Link>
      </section>
    </div>
  );
}
