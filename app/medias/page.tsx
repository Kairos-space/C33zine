import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Médias & presse",
  description:
    "Espace presse de C33 — identité, contacts et informations pour les médias et partenaires. 媒体与合作。",
  alternates: { canonical: "/medias" },
};

export default function MediasPage() {
  return (
    <article lang="fr">
      <div className="border-b border-black">
        <div className="px-4 md:px-8 h-9 flex items-center justify-between font-sans text-[10px] uppercase tracking-[0.18em]">
          <span>C33 — Presse</span>
          <span className="hidden md:inline font-display italic normal-case tracking-normal">
            Médias / 媒体
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
            <p lang="zh-CN">
              C33 是一本中法双语的独立时尚季刊,关注时尚产业的结构与品牌叙事的实践。一年四期,每期一个主题,以中文长文为主,辅以法语视角。由 Lumicome 出版,常驻巴黎。
            </p>
          </section>

          <section>
            <h2 className="font-sans text-[10px] uppercase tracking-[0.22em] mb-3 border-b border-black pb-2">
              Identité visuelle
            </h2>
            <p lang="zh-CN">
              如需 C33 标识、当期封面或其他视觉素材用于媒体引用,请通过下方邮箱联系编辑部,我们会提供相应规格的文件。
            </p>
          </section>

          <section>
            <h2 className="font-sans text-[10px] uppercase tracking-[0.22em] mb-3 border-b border-black pb-2">
              Partenariats
            </h2>
            <p lang="zh-CN">
              我们与品牌、机构探讨自定义选题、专题号、栏目合作等多种可能。
            </p>
            <p className="mt-3 font-display italic" lang="fr">
              C33 ne publie pas de contenu sponsorisé non identifié.
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
