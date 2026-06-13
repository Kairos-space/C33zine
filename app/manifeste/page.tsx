import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Manifeste",
  description:
    "Le manifeste de C33 — pourquoi cette revue existe, ce qu'elle refuse, sa position éditoriale. C33 的编辑宣言。",
  alternates: { canonical: "/manifeste" },
};

export default function ManifestePage() {
  return (
    <article lang="fr">
      <div className="border-b border-black">
        <div className="px-4 md:px-8 h-9 flex items-center justify-between font-sans text-[10px] uppercase tracking-[0.18em]">
          <span>C33 — Position</span>
          <span className="hidden md:inline font-display italic normal-case tracking-normal">
            Manifeste / 宣言
          </span>
          <span>2026</span>
        </div>
      </div>

      <header className="px-6 md:px-10 pt-16 md:pt-24 pb-12 text-center border-b border-black">
        <div className="font-sans text-[10px] uppercase tracking-[0.22em] mb-6">
          — Manifeste —
        </div>
        <h1 className="font-display font-medium text-[44px] md:text-[96px] leading-[0.92] tracking-[-0.02em]">
          Décoder,
          <br />
          pas commenter.
        </h1>
      </header>

      <div className="px-6 md:px-10 py-12 md:py-20">
        <div className="max-w-prose mx-auto prose-c33" lang="zh-CN">
          <p>
            C33 不报道时尚,C33 解码时尚。
          </p>
          <p>
            今天,关于时尚与品牌的讨论太快了——快到来不及看清一个叙事是怎么被搭起来的、一个符号是怎么被翻译又被误读的、一条供应链是怎么变成一个故事的。我们选择季度的节奏,把它慢下来。
          </p>

          <blockquote className="pull-quote">
            Nous ne couvrons pas la mode. Nous la décodons.
          </blockquote>

          <p>
            我们站在中国与法国之间——两边都不彻底属于,因此能看见两边各自看不见的东西。同一件事,在中文与法语里本就该被讲两次,而不是讲一次、再配一行字幕。
          </p>

          <h2>我们拒绝什么</h2>
          <p>
            我们拒绝不标注的软文。C33 不发布任何未经标识的赞助内容——
            <span lang="fr">C33 ne publie pas de contenu sponsorisé non identifié.</span>
          </p>
          <p>
            我们拒绝把"热闹"当成"重要"。流量、转化、话题度,是别人的指标,不是我们的判断。
          </p>
          <p>
            我们拒绝只用一把尺子量别人。创刊号里,我们用审视品牌、影视、跨境项目的同一把尺子,也审视媒体行业自己——包括我们自己。
          </p>

          <h2>我们相信什么</h2>
          <p>
            我们相信慢,相信长文,相信印刷感先于即时性。我们相信一本刊物可以既是中文的,也是法语的,而不必牺牲任何一边的厚度。我们相信,只有先把一件事看清,才看得清这个行业里什么才是值得被尊重的工作。
          </p>

          <p lang="fr">
            C33 est une revue indépendante. Elle ne doit sa ligne à personne.
          </p>
        </div>
      </div>
    </article>
  );
}
