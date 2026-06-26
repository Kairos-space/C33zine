import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Propositions",
  description:
    "Proposer un sujet à C33 — modalités, format et délais. 投稿与选题提案指南。",
  alternates: { canonical: "/pitch" },
};

export default function PitchPage() {
  return (
    <article>
      <div className="border-b border-black">
        <div className="px-4 md:px-8 h-9 flex items-center justify-between font-sans text-[10px] uppercase tracking-[0.18em]">
          <span>C33 — Propositions</span>
          <span className="hidden md:inline font-display italic normal-case tracking-normal">
            Pitch / 投稿
          </span>
          <span>2026</span>
        </div>
      </div>

      <header className="px-6 md:px-10 pt-16 md:pt-24 pb-12 text-center border-b border-black">
        <div className="font-sans text-[10px] uppercase tracking-[0.22em] mb-6">
          — Propositions —
        </div>
        <h1 className="font-display font-medium text-[44px] md:text-[80px] leading-[0.95] tracking-[-0.02em]">
          Proposer un sujet
        </h1>
        <p className="font-display italic text-[16px] md:text-[18px] mt-6 max-w-[560px] mx-auto">
          C33 n&apos;accepte pas les articles non sollicités, mais lit toutes
          les propositions de sujet.
        </p>
      </header>

      <div className="px-6 md:px-10 py-14 md:py-20">
        <div className="max-w-[720px] mx-auto grid md:grid-cols-2 gap-x-12 gap-y-12 font-serif text-[16px] leading-[1.85]">
          <section>
            <h2 className="font-sans text-[10px] uppercase tracking-[0.22em] mb-3 border-b border-black pb-2">
              Ce que nous cherchons
            </h2>
            <p lang="fr">
              Des sujets précis, des observations de terrain, des analyses de
              projets transfrontaliers. Nous nous intéressons aux mécanismes
              plutôt qu&apos;à l&apos;actualité, aux écarts plutôt qu&apos;aux
              tendances. Les textes longs en chinois ont notre préférence ; les
              propositions en français sont tout aussi bienvenues.
            </p>
            <p lang="zh-CN">
              特定的选题提案、行业观察、跨境项目分析。我们关注机制而非新闻,关注落差而非话题。中文长文优先,法语提案同样欢迎。
            </p>
          </section>

          <section>
            <h2 className="font-sans text-[10px] uppercase tracking-[0.22em] mb-3 border-b border-black pb-2">
              Votre proposition
            </h2>
            <p lang="fr">
              Une proposition réunit : un résumé du sujet en deux cents mots, un
              exemple de texte déjà publié et une présentation en une phrase.
              N&apos;envoyez pas d&apos;article achevé.
            </p>
            <p lang="zh-CN">
              一份提案请包含:200 字以内的选题摘要、一份过往写作样本、一句话个人简介。请勿直接投递完整成稿。
            </p>
          </section>

          <section>
            <h2 className="font-sans text-[10px] uppercase tracking-[0.22em] mb-3 border-b border-black pb-2">
              Délai de réponse
            </h2>
            <p lang="fr">
              Nous répondons sous quatre semaines aux propositions retenues.
              Sans réponse de notre part, considérez que le sujet n&apos;a pas
              trouvé sa place dans ce numéro ; une nouvelle proposition reste
              toujours la bienvenue.
            </p>
            <p lang="zh-CN">
              我们会在 4 周内回复有意向的提案。未获回复即视为本期暂不合适,欢迎日后再次提案。
            </p>
          </section>

          <section>
            <h2 className="font-sans text-[10px] uppercase tracking-[0.22em] mb-3 border-b border-black pb-2">
              Rémunération
            </h2>
            <p lang="fr">
              Les textes retenus sont rémunérés, selon l&apos;ampleur et la forme
              du sujet, convenues ensemble. C33 ne publie aucun contenu sponsorisé
              non signalé comme tel.
            </p>
            <p lang="zh-CN">
              已采用的稿件支付稿酬,具体依选题体量与形式商定。C33 不发布任何未经标识的赞助内容。
            </p>
          </section>
        </div>

        <div className="max-w-[560px] mx-auto text-center mt-16">
          <div className="font-sans text-[10px] uppercase tracking-[0.22em] mb-3">
            Envoyer une proposition
          </div>
          <a
            href="mailto:contact@c33zine.com?subject=%5BPITCH%5D"
            className="font-display italic text-[24px] md:text-[32px] underline underline-offset-[6px] decoration-1"
          >
            contact@c33zine.com
          </a>
          <p lang="fr" className="font-serif text-[14px] text-neutral-600 mt-3">
            Indiquez la mention [PITCH] en objet de votre message.
          </p>
          <p lang="zh-CN" className="font-serif text-[14px] text-neutral-600 mt-3">
            邮件主题请注明 [PITCH]。
          </p>
        </div>
      </div>
    </article>
  );
}
