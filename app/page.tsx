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

  return (
    <div>
      {/* HERO — the current issue, image-forward and spacious */}
      <section className="px-5 md:px-10 pt-10 md:pt-16 pb-16 md:pb-24">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
            <div className="md:col-span-7">
              <EditorialImage
                src={issue.cover}
                alt={issue.coverAlt ?? issue.title}
                ratio="aspect-[5/6] md:aspect-[4/5]"
                sizes="(min-width: 768px) 58vw, 100vw"
                priority
                label={`Numéro ${issue.number}`}
                sublabel={`${issue.season} ${issue.year}`}
              />
            </div>
            <div className="md:col-span-5">
              <div className="text-[11px] uppercase tracking-[0.24em] text-muted mb-6">
                Le numéro courant — N° {issue.number}
              </div>
              <h1 className="font-display text-[44px] md:text-[68px] leading-[1.02] tracking-[-0.02em]">
                {issue.title}
              </h1>
              <p className="font-display italic text-[20px] md:text-[24px] leading-[1.35] mt-6 max-w-[420px]">
                La fabrique des récits — derrière la mode, le métier qui les
                tient.
              </p>
              <p className="font-serif text-[15px] leading-[1.9] text-muted mt-6 max-w-[420px]">
                {issue.season} {issue.year} · {String(articles.length).padStart(2, "0")}{" "}
                pièces
              </p>
              <Link
                href={`/issue/${issue.slug}`}
                className="inline-block mt-8 text-[12px] uppercase tracking-[0.2em] border-b border-ink pb-1 hover:text-muted hover:border-muted transition-colors"
              >
                Découvrir le numéro
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ÉDITO — a calm editorial statement */}
      <section className="border-t border-line">
        <div className="px-5 md:px-10 py-20 md:py-28 max-w-[860px] mx-auto text-center">
          <div className="text-[11px] uppercase tracking-[0.24em] text-muted mb-10">
            Édito
          </div>
          <p className="font-display text-[26px] md:text-[40px] leading-[1.32] tracking-[-0.01em]">
            C33 décode les logiques de l&apos;industrie de la mode et des récits
            de marque, <span className="italic">entre la France et la Chine</span>{" "}
            — entre les deux regards, les deux traductions, et leurs réalités
            respectives.
          </p>
          <div className="mt-12 max-w-[600px] mx-auto font-serif text-[16px] md:text-[17px] leading-[1.95] text-muted">
            解码时尚产业与品牌叙事的逻辑——在中国与法国的间距之中,在双重凝视、双向转译、以及各自面对的现实困局之间。
          </div>
          <div className="mt-12 text-[11px] uppercase tracking-[0.24em] text-muted">
            Kairos Zhang · Rédactrice en chef
          </div>
        </div>
      </section>

      {/* LE SOMMAIRE — image-forward article grid */}
      <section className="border-t border-line">
        <div className="px-5 md:px-10 py-16 md:py-24">
          <div className="max-w-[1280px] mx-auto">
            <div className="flex items-baseline justify-between mb-12 md:mb-16">
              <h2 className="font-display text-[28px] md:text-[40px] tracking-[-0.01em]">
                Le sommaire
              </h2>
              <span className="text-[11px] uppercase tracking-[0.2em] text-muted">
                目录 · N° {issue.number}
              </span>
            </div>

            {/* Lead piece — full width, larger */}
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

            {/* The rest — two-up grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-16 md:gap-y-24">
              {rest.map((a) => (
                <ArticleTile key={a.slug} article={a} />
              ))}
            </div>

            <div className="text-center mt-20 md:mt-28">
              <p className="font-display italic text-[22px] md:text-[28px] leading-[1.4]">
                Cinq pièces, cinq regards.
              </p>
              <p className="font-serif text-[15px] mt-3 text-muted">
                五篇文章,五种视角。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* RUBRIQUES */}
      <section className="border-t border-line">
        <div className="px-5 md:px-10 py-14 md:py-20 text-center">
          <div className="text-[11px] uppercase tracking-[0.24em] text-muted mb-8">
            Les rubriques
          </div>
          <ul className="flex flex-wrap justify-center items-baseline gap-x-10 md:gap-x-16 gap-y-4">
            {categories.map((c) => (
              <li key={c.slug}>
                <Link
                  href={`/category/${c.slug}`}
                  className="group inline-flex items-baseline gap-2"
                >
                  <span className="font-display text-[24px] md:text-[30px] tracking-tight group-hover:italic">
                    {c.fr}
                  </span>
                  <span className="font-serif text-[13px] text-muted">
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
