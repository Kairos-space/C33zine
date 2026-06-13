import Link from "next/link";
import { getCurrentIssue } from "@/lib/issues";
import { getArticlesByIssue } from "@/lib/articles";
import { categories } from "@/lib/categories";
import ArticleTile from "@/components/ArticleTile";
import EditorialImage from "@/components/EditorialImage";
import Newsletter from "@/components/Newsletter";

export default function HomePage() {
  const issue = getCurrentIssue();
  const articles = getArticlesByIssue(issue.slug);
  const [lead, ...rest] = articles;

  const ticker = [
    "+33",
    "DÉCODAGE",
    `N°${issue.number}`,
    "LA FABRIQUE",
    "PARIS ↔ SHANGHAI",
    `${issue.season.toUpperCase()} ${issue.year}`,
  ];

  return (
    <div>
      {/* CODE TICKER — the "+33 / décodage" terminal bar */}
      <div className="bg-klein text-white overflow-hidden">
        <div className="flex whitespace-nowrap font-mono text-[10px] uppercase tracking-[0.3em] py-2">
          {[0, 1].map((dup) => (
            <div key={dup} className="flex shrink-0" aria-hidden={dup === 1}>
              {ticker.concat(ticker).map((t, i) => (
                <span key={`${dup}-${i}`} className="px-5">
                  {t} ·
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* HERO — couture × code */}
      <section className="border-b border-line">
        <div className="grid grid-cols-1 md:grid-cols-12">
          {/* Left — metadata + title */}
          <div className="md:col-span-5 px-5 md:px-10 py-12 md:py-20 flex flex-col justify-between md:border-r border-line">
            <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted flex flex-col gap-2">
              <span>
                <span className="text-klein">●</span> Numéro courant
              </span>
              <span>N°{issue.number} / {issue.season} {issue.year}</span>
            </div>

            <div className="my-12 md:my-0">
              <h1 className="font-display text-[52px] md:text-[84px] leading-[0.98] tracking-[-0.03em]">
                {issue.title}
              </h1>
              <p className="font-display italic text-[20px] md:text-[26px] leading-[1.3] mt-6 max-w-[440px] text-ink/90">
                La fabrique des récits — derrière la mode, le métier qui les
                tient.
              </p>
            </div>

            <Link
              href={`/issue/${issue.slug}`}
              className="font-mono text-[12px] uppercase tracking-[0.2em] text-klein hover:text-ink transition-colors w-fit"
            >
              → Décoder le numéro
            </Link>
          </div>

          {/* Right — image plate */}
          <div className="md:col-span-7">
            <EditorialImage
              src={issue.cover}
              alt={issue.coverAlt ?? issue.title}
              ratio="aspect-[4/5] md:aspect-auto md:h-full"
              sizes="(min-width: 768px) 58vw, 100vw"
              priority
              label={issue.title}
              sublabel={`Numéro ${issue.number}`}
              className="md:h-full"
            />
          </div>
        </div>
      </section>

      {/* ÉDITO */}
      <section className="border-b border-line">
        <div className="px-5 md:px-10 py-20 md:py-32 max-w-[920px] mx-auto text-center">
          <div className="font-mono text-[11px] uppercase tracking-[0.3em] text-klein mb-10">
            [ Édito ]
          </div>
          <p className="font-display text-[28px] md:text-[44px] leading-[1.28] tracking-[-0.01em]">
            C33 décode les logiques de l&apos;industrie de la mode et des récits
            de marque, <span className="italic text-klein">entre la France et
            la Chine</span> — entre les deux regards, les deux traductions, et
            leurs réalités respectives.
          </p>
          <div className="mt-12 max-w-[600px] mx-auto font-serif text-[16px] md:text-[17px] leading-[1.95] text-muted">
            解码时尚产业与品牌叙事的逻辑——在中国与法国的间距之中,在双重凝视、双向转译、以及各自面对的现实困局之间。
          </div>
          <div className="mt-12 font-mono text-[11px] uppercase tracking-[0.22em] text-muted">
            Kairos Zhang — Rédactrice en chef
          </div>
        </div>
      </section>

      {/* SOMMAIRE */}
      <section className="border-b border-line">
        <div className="px-5 md:px-10 py-16 md:py-24">
          <div className="max-w-[1280px] mx-auto">
            <div className="flex items-baseline justify-between mb-12 md:mb-16">
              <h2 className="font-display text-[30px] md:text-[44px] tracking-[-0.01em]">
                Le sommaire
              </h2>
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
                目录 / N°{issue.number}
              </span>
            </div>

            {lead && (
              <div className="mb-16 md:mb-24">
                <ArticleTile
                  article={lead}
                  ratio="aspect-[16/10] md:aspect-[21/9]"
                  sizes="(min-width: 768px) 1280px, 100vw"
                  priority
                />
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-16 md:gap-y-24">
              {rest.map((a) => (
                <ArticleTile key={a.slug} article={a} />
              ))}
            </div>

            <div className="text-center mt-20 md:mt-28">
              <p className="font-display italic text-[22px] md:text-[28px] leading-[1.4]">
                Cinq pièces, cinq regards.
              </p>
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] mt-4 text-muted">
                五篇文章 / 五种视角
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* RUBRIQUES */}
      <section className="border-b border-line">
        <div className="px-5 md:px-10 py-14 md:py-20 text-center">
          <div className="font-mono text-[11px] uppercase tracking-[0.3em] text-klein mb-8">
            [ Rubriques ]
          </div>
          <ul className="flex flex-wrap justify-center items-baseline gap-x-10 md:gap-x-16 gap-y-4">
            {categories.map((c) => (
              <li key={c.slug}>
                <Link
                  href={`/category/${c.slug}`}
                  className="group inline-flex items-baseline gap-2"
                >
                  <span className="font-display text-[24px] md:text-[32px] tracking-tight group-hover:text-klein transition-colors">
                    {c.fr}
                  </span>
                  <span className="font-mono text-[11px] text-muted">
                    {c.cn}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Newsletter />
    </div>
  );
}
