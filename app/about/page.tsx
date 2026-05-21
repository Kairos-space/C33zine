import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <article>
      {/* Folio bar */}
      <div className="border-b border-black">
        <div className="px-4 md:px-8 h-9 flex items-center justify-between font-sans text-[10px] uppercase tracking-[0.18em]">
          <span>C33 — Manifeste</span>
          <span className="hidden md:inline font-display italic normal-case tracking-normal">
            About / 关于
          </span>
          <span>2026</span>
        </div>
      </div>

      <header className="px-6 md:px-10 pt-16 md:pt-24 pb-12 text-center border-b border-black">
        <div className="font-sans text-[10px] uppercase tracking-[0.22em] mb-6">
          — Manifeste —
        </div>
        <h1 className="font-display font-medium text-[44px] md:text-[88px] leading-[0.95] tracking-[-0.02em] mb-8">
          À propos de C33
        </h1>
        <p className="font-display italic text-[20px] md:text-[26px] leading-[1.4] max-w-[640px] mx-auto">
          Une revue indépendante, trimestrielle, bilingue —
          écrite depuis le pli entre Paris et Shanghai.
        </p>
      </header>

      <div className="px-6 md:px-10 py-12 md:py-20">
        <div className="max-w-prose mx-auto prose-c33">
          <p>
            C33 是一本中法双语的独立季刊,关注时尚产业的结构、品牌叙事的运作,
            以及在中国与法国之间流动的人、物与符号。
          </p>
          <p>
            我们不做行业新闻,不做产品评测。我们试图把目光放在更慢一些的地方:
            一种叙事是如何被构造的、一种「代号」是如何被生产和消费的、
            一座城市的产业逻辑如何塑造它出口给世界的「形象」。
          </p>
          <p>
            刊物以中文长文为主,辅以法语摘要与术语索引。每期一个主题,
            一年四期,印刷感优先于即时性。
          </p>
          <h2>Pourquoi C33</h2>
          <p>
            «&nbsp;33&nbsp;» est l&apos;indicatif téléphonique de la France.
            «&nbsp;C&nbsp;» pour Chine, pour Code, pour Caractère.
            C33,是一个号码,也是一个站位。
          </p>
          <h2>Édition</h2>
          <p>
            C33 est dirigé par Kairos Zhang, au sein de la maison
            d&apos;édition Lumicome (en cours de constitution), depuis
            Bussy-Saint-Georges, France. L&apos;éditeur légal de la
            publication est Yifei ZHANG.
          </p>
        </div>
      </div>
    </article>
  );
}
