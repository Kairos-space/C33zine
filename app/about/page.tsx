import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About",
  description:
    "À propos de C33 — une revue indépendante, trimestrielle, bilingue, écrite entre Paris et Shanghai.",
  alternates: { canonical: "/about" },
};

type Block = {
  label?: string;
  fr: string[];
  cn: string[];
};

const blocks: Block[] = [
  {
    fr: [
      "C33 est une revue indépendante, trimestrielle et bilingue, publiée entre Paris et Shanghai.",
      "Elle décode le goût, les récits de marque et l'art de vivre, et leurs circulations culturelles entre la Chine et la France.",
    ],
    cn: [
      "C33 是一本中法双语独立季刊,写作于巴黎与上海之间。",
      "我们关注品味与生活方式的形成、品牌叙事的生成,以及在中国与法国之间流动的人、物、图像与符号。",
    ],
  },
  {
    fr: [
      "C33 ne produit pas de l'actualité immédiate.",
      "La revue ne se consacre ni aux nouvelles de l'industrie, ni aux lancements de produits, ni aux commentaires de tendance.",
      "Elle choisit un autre rythme : celui de l'enquête, de l'analyse et de la mise en perspective.",
    ],
    cn: [
      "C33 不生产即时资讯。",
      "我们不做行业新闻,不做新品评测,也不追逐短暂的话题热度。",
      "我们选择另一种节奏:研究、分析与重新理解。",
    ],
  },
  {
    fr: [
      "Nous nous intéressons à ce qui se tient derrière l'image visible du goût :",
      "la manière dont une narration de marque se construit ;",
      "la façon dont un signe circule, se traduit ou se transforme ;",
      "les rapports entre production, désir, représentation et marché ;",
      "les différences de lecture entre les contextes chinois et français.",
    ],
    cn: [
      "我们关心品味表面图像背后的结构:",
      "一个品牌叙事如何被搭建;",
      "一个符号如何被传播、翻译与重新解释;",
      "生产、欲望、身份与市场之间如何相互作用;",
      "以及中法两种语境如何以不同方式理解同一个行业。",
    ],
  },
  {
    fr: [
      "La revue est principalement écrite en chinois, accompagnée de textes, résumés et repères en français.",
      "Chaque numéro est construit autour d'un thème.",
      "Quatre fois par an, C33 propose un objet éditorial pensé pour être lu, relu et conservé.",
    ],
    cn: [
      "刊物以中文长文为主,并配合法语文本、摘要与术语索引。",
      "每期围绕一个主题展开。",
      "一年四期,C33 希望成为一种可以被阅读、重读与保存的编辑物。",
    ],
  },
  {
    label: "Pourquoi C33 / 为什么是 C33",
    fr: [
      "« 33 » est l'indicatif téléphonique de la France.",
      "« C » renvoie à la Chine, au code, au caractère, à la culture.",
      "C33 est à la fois un signe, une adresse et une position.",
    ],
    cn: [
      '"33" 是法国的国际电话区号。',
      '"C" 指向 Chine,也指向 Code、Caractère 与 Culture。',
      "C33 既是一个符号,一个地址,也是一种立足之点。",
    ],
  },
  {
    label: "Édition / 出版",
    fr: [
      "C33 est éditée par Lumicome, maison d'édition indépendante en cours de constitution à Paris, France.",
      "La revue est dirigée par Kairos Zhang, rédactrice en chef.",
    ],
    cn: [
      "C33 由 Lumicome 策划与出版。Lumicome 是一家正在巴黎筹建中的独立出版机构。",
      "刊物由 Kairos Zhang 担任主编。",
    ],
  },
  {
    label: "Origine éditoriale / 编辑源流",
    fr: [
      "C33 prolonge le travail éditorial mené depuis plusieurs années avec Modezine, une plateforme chinoise consacrée à l'observation de la mode, des marques et des récits culturels.",
      "Là où Modezine observe le présent dans le contexte sinophone, C33 propose une lecture plus lente, plus structurée et franco-chinoise.",
      "C33 n'est pas une traduction de Modezine.",
      "C'est sa continuation sous une autre forme.",
    ],
    cn: [
      "C33 延续了 Modezine 多年以来在中文语境中关于时尚、品牌与文化叙事的编辑工作。",
      "如果说 Modezine 更贴近中文世界的当下现场,",
      "那么 C33 则以更慢、更结构化的方式,在中法之间重新阅读这些问题。",
      "C33 不是 Modezine 的翻译版。",
      "它是 Modezine 在另一种媒介形态中的延伸。",
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
                  <span lang="zh-CN"> / {label.split(" / ").slice(1).join(" / ")}</span>
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
          <span>C33 — Manifeste</span>
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
          Une revue trimestrielle franco-chinoise sur le goût, les marques
          et l&apos;art de vivre.
        </div>
      </section>
    </article>
  );
}
