import { brand } from "@/lib/brand";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About",
  description: brand.description,
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About — C33",
    description: `${brand.description} ${brand.about}`,
    url: "/about",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: brand.description }],
  },
  twitter: {
    card: "summary_large_image",
    title: "About — C33",
    description: `${brand.description} ${brand.about}`,
    images: ["/opengraph-image"],
  },
};

type Block = {
  label?: string;
  fr: string[];
  cn: string[];
};

const blocks: Block[] = [
  {
    label: "Notre regard / 我们关注什么",
    fr: [
      "La mode, l’art et la culture sont nos points de départ. Nos sujets peuvent aussi nous mener vers le cinéma, la musique, le design ou la vie quotidienne.",
      "Nous suivons les personnes, les œuvres et les idées qui donnent matière à un récit.",
    ],
    cn: [
      "时尚、艺术与文化是我们的出发点。选题也可以延伸至电影、音乐、设计与日常生活。",
      "我们从具体的人、作品与想法出发，寻找值得展开的故事。",
    ],
  },
  {
    label: "Édition / 出版",
    fr: [
      "C33 est éditée par LUMEN ADVANCE, société par actions simplifiée immatriculée au RCS de Meaux sous le numéro 130 086 770.",
      "La revue est dirigée par Kairos Zhang, rédactrice en chef.",
    ],
    cn: [
      "C33 由 LUMEN ADVANCE 出版。该公司为法国简易股份公司（SAS），在 Meaux 商业与公司注册处登记，注册号为 130 086 770。",
      "刊物由 Kairos Zhang 担任主编。",
    ],
  },
];

function Block({
  label,
  fr,
  cn,
  index,
}: Block & { index: number }) {
  return (
    <section className="border-b border-line">
      <div className="px-5 md:px-10 py-12 md:py-16">
        <div className="max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-y-6 md:gap-x-16">
          <div className="md:col-span-1 font-mono text-[11px] uppercase tracking-[0.24em] text-klein">
            {String(index + 1).padStart(2, "0")}
          </div>
          <div className="md:col-span-6" lang="fr">
            {label &&
              (label.includes(" / ") ? (
                <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted mb-4">
                  <span lang="fr">{label.split(" / ")[0]}</span>
                </div>
              ) : (
                <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted mb-4">
                  {label}
                </div>
              ))}
            <div className="font-display text-[18px] md:text-[20px] leading-[1.55] tracking-[-0.005em]">
              {fr.map((line, i) => (
                <p key={i} className={i > 0 ? "mt-3" : ""}>
                  {line}
                </p>
              ))}
            </div>
          </div>
          <div className="md:col-span-5" lang="zh-CN">
            {label && <div className="font-mono text-[11px] tracking-[0.12em] text-muted mb-4">{label.split(" / ")[1]}</div>}
            <div className="font-serif text-[16px] md:text-[17px] leading-[1.9]">
              {cn.map((line, i) => (
                <p key={i} className={i > 0 ? "mt-3" : ""}>
                  {line}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function AboutPage() {
  return (
    <article>
      {/* Folio bar */}
      <div className="border-b border-line">
        <div className="px-4 md:px-8 h-9 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
          <span>C33 — About</span>
          <span className="hidden md:inline italic normal-case tracking-normal text-ink">
            <span lang="fr">About</span>
            <span lang="zh-CN"> / 关于</span>
          </span>
          <span>2026</span>
        </div>
      </div>

      {/* Hero */}
      <header className="border-b border-line">
        <div className="px-5 md:px-10 py-20 md:py-28 text-center">
          <div className="inline-flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.3em] text-klein mb-10">
            <span aria-hidden className="h-px w-6 bg-klein" />
            <span lang="fr">About</span>
            <span lang="zh-CN"> / 关于</span>
            <span aria-hidden className="h-px w-6 bg-klein" />
          </div>
          <h1 className="font-display text-[48px] md:text-[88px] leading-[0.95] tracking-[-0.025em]">
            <span lang="fr">À propos de C33</span>
            <span lang="zh-CN">关于 C33</span>
          </h1>
        </div>
      </header>

      <section className="border-b border-line px-5 md:px-10 py-12 md:py-16">
        <div className="max-w-[900px] mx-auto">
          <p lang="en" className="font-display text-[28px] md:text-[40px] leading-[1.25] tracking-[-0.015em]">{brand.description}</p>
          <p lang="en" className="font-display text-[22px] md:text-[28px] leading-[1.5] mt-6">{brand.about}</p>
          <p lang="zh-CN" className="font-serif text-[22px] md:text-[28px] leading-[1.7]">{brand.descriptionCn}</p>
          <p lang="zh-CN" className="font-serif text-[18px] md:text-[22px] leading-[1.8] mt-6">{brand.aboutCn}</p>
        </div>
      </section>

      {/* Bilingual blocks */}
      {blocks.map((b, i) => (
        <Block key={i} index={i} label={b.label} fr={b.fr} cn={b.cn} />
      ))}

      {/* Outro — Modezine credit + signoff */}
      <section className="px-5 md:px-10 py-20 md:py-28 text-center">
        <div className="font-mono text-[10px] uppercase tracking-[0.28em] text-muted" lang="fr">
          Modezine · WeChat
        </div>
        <div className="font-mono text-[10px] uppercase tracking-[0.28em] text-muted" lang="zh-CN">
          Modezine · WeChat 公众号
        </div>
        <Image
          src="/logo-c33.png"
          alt="C33"
          width={779}
          height={436}
          className="mt-16 h-16 md:h-24 w-auto mx-auto"
        />
        <div className="mt-6 font-display italic text-[18px] md:text-[22px] max-w-[640px] mx-auto leading-snug">
          <span lang="en">{brand.description}</span>
          <span lang="zh-CN" className="font-serif not-italic">{brand.descriptionCn}</span>
        </div>
      </section>
    </article>
  );
}
