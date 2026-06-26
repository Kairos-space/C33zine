import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Manifeste",
  description:
    "Le manifeste de C33 — pourquoi cette revue existe, ce qu'elle refuse, sa position éditoriale. C33 的编辑宣言。",
  alternates: { canonical: "/manifeste" },
};

type Section = {
  fr: string[];
  cn: string[];
};

const sections: Section[] = [
  {
    fr: [
      "À l'heure où les informations circulent plus vite que jamais, les récits se construisent, se diffusent et disparaissent parfois avant même d'avoir été compris.",
      "Une marque devient un symbole.",
      "Une campagne devient un sujet.",
      "Une tendance devient une certitude.",
      "Pourtant, les mécanismes qui façonnent réellement l'industrie — les systèmes de production, les contextes culturels, les stratégies de marque, les structures médiatiques et les logiques économiques — demeurent souvent invisibles.",
      "C33 choisit un autre rythme.",
      "Celui de l'observation, de l'analyse et de la compréhension.",
    ],
    cn: [
      "当信息传播的速度越来越快,",
      "一个品牌的形象、一场传播活动、一种市场趋势,",
      "往往在被理解之前就已经被消费。",
      "品牌成为符号,",
      "话题成为观点,",
      "趋势成为共识。",
      "而那些真正塑造行业的力量——",
      "供应链、文化语境、品牌战略、媒体机制与商业逻辑,",
      "却常常被忽略。",
      "C33 选择另一种节奏。",
      "一种观察、分析与理解的节奏。",
    ],
  },
  {
    fr: [
      "C33 est né entre la Chine et la France.",
      "Nous n'appartenons entièrement à aucun de ces deux mondes.",
      "C'est précisément cette position qui nous permet d'observer ce que chacun perçoit difficilement de l'autre.",
      "Un même événement ne raconte jamais la même histoire à Paris et à Shanghai.",
      "Une même marque ne signifie jamais exactement la même chose en français et en chinois.",
      "Nous ne cherchons pas à traduire.",
      "Nous cherchons à interpréter.",
    ],
    cn: [
      "C33 诞生于中国与法国之间。",
      "我们并不完全属于任何一边。",
      "也正因此,",
      "我们得以观察两种文化、两种市场与两种叙事体系之间的距离。",
      "同一件事,",
      "在巴黎与上海拥有不同的意义;",
      "同一个品牌,",
      "在中文与法语中也拥有不同的解释。",
      "我们不满足于翻译。",
      "我们更关注理解。",
    ],
  },
  {
    fr: [
      "Nous nous intéressons au goût,",
      "mais aussi à ce qui le dépasse.",
      "Les marques.",
      "Les industries culturelles.",
      "Les médias.",
      "Les récits.",
      "Les imaginaires collectifs.",
      "Car le goût n'est jamais une simple question d'esthétique.",
      "Elle est aussi une question de pouvoir, de représentation, de désir et de valeur.",
    ],
    cn: [
      "我们关注品味,",
      "但并不止于时尚。",
      "我们关注品牌,",
      "关注文化产业,",
      "关注媒体,",
      "关注叙事,",
      "关注不同社会如何塑造自己的想象。",
      "因为品味从来不只关于衣着。",
      "它同样关乎权力、身份、价值与时代。",
    ],
  },
  {
    fr: [
      "C33 est une revue indépendante.",
      "Nous refusons toute confusion entre contenu éditorial et contenu commercial.",
      "Toute collaboration rémunérée sera clairement identifiée.",
      "L'indépendance éditoriale n'est pas une posture.",
      "Elle est la condition même de notre existence.",
    ],
    cn: [
      "C33 是一本独立刊物。",
      "我们拒绝编辑内容与商业内容之间的界限被模糊。",
      "所有合作内容都将被明确标识。",
      "独立性不是一种姿态。",
      "而是一份刊物存在的前提。",
    ],
  },
  {
    fr: [
      "Nous ne confondons pas visibilité et importance.",
      "Les chiffres mesurent l'attention.",
      "Ils ne mesurent pas nécessairement la valeur.",
      "Nous préférons les questions qui demeurent aux sujets qui passent.",
    ],
    cn: [
      "我们不将热度等同于重要性。",
      "流量可以衡量关注,",
      "却无法定义价值。",
      "相比追逐每一个热点,",
      "我们更关心那些多年以后仍值得被重新阅读的问题。",
    ],
  },
  {
    fr: [
      "Nous croyons au temps long.",
      "Nous croyons à la recherche.",
      "Nous croyons au travail éditorial.",
      "Nous croyons qu'une revue peut encore être un lieu de réflexion.",
      "Un lieu où l'on ralentit suffisamment pour comprendre.",
    ],
    cn: [
      "我们相信长期主义。",
      "相信研究。",
      "相信编辑工作本身的价值。",
      "相信一本刊物仍然可以成为思考发生的地方。",
      "一个让人放慢速度、",
      "重新理解世界的地方。",
    ],
  },
  {
    fr: [
      "C33 est une revue trimestrielle bilingue franco-chinoise.",
      "Une publication consacrée au goût, aux récits de marque et à l'art de vivre, entre l'Europe et la Chine.",
      "Nous ne cherchons pas à répondre trop vite.",
      "Nous essayons d'abord de regarder avec précision.",
    ],
    cn: [
      "C33 是一本中法双语季刊。",
      "关注品味、品牌叙事与生活方式,在中欧之间。",
      "我们不急于给出答案。",
      "我们首先尝试把问题看清。",
    ],
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
              Décoder,
              <br />
              <span className="italic">pas commenter.</span>
            </span>
          </h1>
          <div
            className="font-serif text-[22px] md:text-[32px] mt-10 text-muted"
            lang="zh-CN"
          >
            解码,而非评论。
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
              <p>C33 ne décrit pas le goût.</p>
              <p className="italic text-klein mt-2">C33 le décode.</p>
            </div>
            <div
              className="md:col-span-5 font-serif text-[22px] md:text-[26px] leading-[1.7]"
              lang="zh-CN"
            >
              <p>C33 不描述品味。</p>
              <p className="mt-2">C33 解码品味。</p>
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
        <div className="font-display text-[80px] md:text-[140px] leading-[0.88] tracking-[-0.03em]">
          C33
        </div>
        <div className="mt-8 font-display italic text-[22px] md:text-[32px]">
          Décoder, pas commenter.
        </div>
        <div
          className="mt-3 font-serif text-[18px] md:text-[22px] text-muted"
          lang="zh-CN"
        >
          解码,而非评论。
        </div>
      </section>
    </article>
  );
}
