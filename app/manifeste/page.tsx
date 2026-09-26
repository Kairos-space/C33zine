import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Manifeste",
  description:
    "Le regard éditorial de C33 sur la mode, l’art et la culture.",
  alternates: { canonical: "/manifeste" },
};

type Section = {
  fr: string[];
  cn: string[];
};

const sections: Section[] = [
  {
    fr: ["La mode, l’art et la culture sont nos points de départ. Le cinéma, la musique, le design et la vie quotidienne peuvent aussi trouver leur place dans nos pages."],
    cn: ["时尚、艺术与文化是我们的出发点。电影、音乐、设计与日常生活，也可以成为刊物中的选题。"],
  },
  {
    fr: ["Un entretien peut partir d’une question, une critique d’un détail, un récit d’une rencontre. Nous cherchons ce qui mérite d’être regardé et raconté de plus près."],
    cn: ["一次访谈可以从一个问题开始，一篇评论可以从一个细节展开，一个故事可以源于一次相遇。我们寻找值得仔细观察、认真讲述的内容。"],
  },
  {
    fr: ["C33 est une revue indépendante. Toute collaboration rémunérée sera clairement identifiée."],
    cn: ["C33 是一本独立刊物。付费合作内容会明确标识。"],
  },
];

function SectionBlock({ fr, cn, index }: Section & { index: number }) {
  return (
    <section className="border-b border-line">
      <div className="px-5 md:px-10 py-14 md:py-20">
        <div className="max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-y-8 md:gap-x-16">
          <div className="md:col-span-1 font-mono text-[11px] uppercase tracking-[0.24em] text-klein">
            {String(index + 1).padStart(2, "0")}
          </div>
          <div
            className="md:col-span-6 font-display text-[18px] md:text-[20px] leading-[1.55] tracking-[-0.005em]"
            lang="fr"
          >
            {fr.map((line, i) => (
              <p key={i} className={i > 0 ? "mt-3" : ""}>
                {line}
              </p>
            ))}
          </div>
          <div
            className="md:col-span-5 font-serif text-[16px] md:text-[17px] leading-[1.9]"
            lang="zh-CN"
          >
            {cn.map((line, i) => (
              <p key={i} className={i > 0 ? "mt-3" : ""}>
                {line}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function ManifestePage() {
  return (
    <article>
      {/* Folio bar */}
      <div className="border-b border-line">
        <div className="px-4 md:px-8 h-9 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
          <span>C33 — Position</span>
          <span className="hidden md:inline italic normal-case tracking-normal text-ink">
            Manifeste<span lang="zh-CN"> / 宣言</span>
          </span>
          <span>2026</span>
        </div>
      </div>

      {/* Hero */}
      <header className="border-b border-line">
        <div className="px-5 md:px-10 py-20 md:py-28 text-center">
          <div className="inline-flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.3em] text-klein mb-10">
            <span aria-hidden className="h-px w-6 bg-klein" />
            Manifeste<span lang="zh-CN"> / 宣言</span>
            <span aria-hidden className="h-px w-6 bg-klein" />
          </div>
          <h1 className="font-display leading-[0.95] tracking-[-0.025em]">
            <span className="block text-[56px] md:text-[110px]">
              Regarder,
              <br />
              <span className="italic">raconter.</span>
            </span>
          </h1>
          <div
            className="font-serif text-[22px] md:text-[32px] mt-10 text-muted"
            lang="zh-CN"
          >
            观察与讲述。
          </div>
        </div>
      </header>

      {/* Opening pull statement — bigger type, bilingual */}
      <section className="border-b border-line">
        <div className="px-5 md:px-10 py-16 md:py-24">
          <div className="max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-y-10 md:gap-x-16 items-baseline">
            <div className="md:col-span-1 font-mono text-[11px] uppercase tracking-[0.24em] text-klein">
              00
            </div>
            <div
              className="md:col-span-6 font-display text-[28px] md:text-[40px] leading-[1.18] tracking-[-0.015em]"
              lang="fr"
            >
              <p>Des personnes, des œuvres, des idées.</p>
              <p className="italic text-klein mt-2">Des histoires à lire.</p>
            </div>
            <div
              className="md:col-span-5 font-serif text-[22px] md:text-[26px] leading-[1.7]"
              lang="zh-CN"
            >
              <p>人、作品与想法。</p>
              <p className="mt-2">值得读的故事。</p>
            </div>
          </div>
        </div>
      </section>

      {/* Body sections */}
      {sections.map((s, i) => (
        <SectionBlock key={i} fr={s.fr} cn={s.cn} index={i} />
      ))}

      {/* Closing signoff */}
      <section className="px-5 md:px-10 py-24 md:py-32 text-center">
        <Image
          src="/logo-c33.png"
          alt="C33"
          width={779}
          height={436}
          className="h-16 md:h-28 w-auto mx-auto"
        />
        <div className="mt-8 font-display italic text-[22px] md:text-[32px]">
          Regarder, raconter.
        </div>
        <div
          className="mt-3 font-serif text-[18px] md:text-[22px] text-muted"
          lang="zh-CN"
        >
          观察与讲述。
        </div>
      </section>
    </article>
  );
}
