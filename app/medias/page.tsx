import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Médias & presse",
  description:
    "Espace presse de C33 — identité, contacts et informations pour les médias et partenaires.",
  alternates: { canonical: "/medias" },
};

export default function MediasPage() {
  return (
    <article>
      <div className="border-b border-black">
        <div className="px-4 md:px-8 h-9 flex items-center justify-between font-sans text-[10px] uppercase tracking-[0.18em]">
          <span>C33 — Presse</span>
          <span className="hidden md:inline font-display italic normal-case tracking-normal">
            Médias<span lang="zh-CN"> / 媒体</span>
          </span>
          <span>2026</span>
        </div>
      </div>

      <header className="px-6 md:px-10 pt-16 md:pt-24 pb-12 text-center border-b border-black">
        <div className="font-sans text-[10px] uppercase tracking-[0.22em] mb-6">
          — Presse & partenariats —
        </div>
        <h1 className="font-display font-medium text-[44px] md:text-[80px] leading-[0.95] tracking-[-0.02em]">
          Médias
        </h1>
        <p className="font-display italic text-[16px] md:text-[18px] mt-6 max-w-[560px] mx-auto">
          Informations pour la presse, les institutions et les marques.
        </p>
      </header>

      <div className="px-6 md:px-10 py-14 md:py-20">
        <div className="max-w-[720px] mx-auto space-y-12 font-serif text-[16px] leading-[1.85]">
          <section>
            <h2 className="font-sans text-[10px] uppercase tracking-[0.22em] mb-3 border-b border-black pb-2">
              La revue
            </h2>
            <p lang="fr">
              C33 est une revue indépendante bilingue franco-chinoise qui décode
              le goût, les récits de marque et l&apos;art de vivre. Quatre
              numéros par an, un thème par numéro, portés par de longs textes en
              chinois et éclairés d&apos;un regard français. Éditée par Lumicome,
              basée à Paris.
            </p>
            <p lang="zh-CN" className="mt-3">
              C33 是一本中法双语的独立季刊,解码品味、品牌叙事与生活方式。一年四期,每期一个主题,以中文长文为主,辅以法语视角。由 Lumicome 出版,常驻巴黎。
            </p>
          </section>

          <section>
            <h2 className="font-sans text-[10px] uppercase tracking-[0.22em] mb-3 border-b border-black pb-2">
              Identité visuelle
            </h2>
            <p lang="fr">
              Pour obtenir le logo C33, la couverture du numéro en cours ou
              d&apos;autres éléments visuels destinés à une citation dans la
              presse, écrivez à la rédaction à l&apos;adresse ci-dessous : nous
              vous transmettrons les fichiers aux formats requis.
            </p>
            <p lang="zh-CN" className="mt-3">
              如需 C33 标识、当期封面或其他视觉素材用于媒体引用,请通过下方邮箱联系编辑部,我们会提供相应规格的文件。
            </p>
          </section>

          <section>
            <h2 className="font-sans text-[10px] uppercase tracking-[0.22em] mb-3 border-b border-black pb-2">
              Partenariats
            </h2>
            <p lang="fr">
              Nous explorons avec les marques et les institutions des formes
              variées de collaboration — sujets sur mesure, numéros thématiques,
              portraits de couverture, partenariats de rubrique — étudiées au cas
              par cas.
            </p>
            <p lang="zh-CN" className="mt-3">
              我们与品牌、机构探讨定制选题、专题号、封面人物、栏目合作等多种形式,可一事一议。
            </p>
          </section>

          <section>
            <h2 className="font-sans text-[10px] uppercase tracking-[0.22em] mb-3 border-b border-black pb-2">
              Contact presse
            </h2>
            <p>
              <a
                href="mailto:contact@c33zine.com?subject=%5BPARTNERSHIP%5D"
                className="underline underline-offset-4"
              >
                contact@c33zine.com
              </a>
              <br />
              <span lang="fr" className="text-neutral-600 text-[14px]">
                Demandes presse et collaborations de marque : merci
                d&apos;indiquer [PARTNERSHIP] en objet du courriel.
              </span>
              <br />
              <span lang="zh-CN" className="text-neutral-600 text-[14px]">
                媒体咨询与品牌合作,邮件主题请注明 [PARTNERSHIP]。
              </span>
            </p>
          </section>
        </div>
      </div>
    </article>
  );
}
