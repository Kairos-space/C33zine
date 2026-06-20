import Link from "next/link";
import {
  getCurrentIssue,
  issues,
  issueAccentStyle,
  C33_ISSN,
} from "@/lib/issues";
import { getArticlesByIssue } from "@/lib/articles";
import Newsletter from "@/components/Newsletter";

export default function HomePage() {
  const current = getCurrentIssue();
  const currentArticles = getArticlesByIssue(current.slug);
  const [curFR, curCN] = current.title.includes(" / ")
    ? current.title.split(" / ")
    : [current.title, ""];
  const others = issues
    .filter((i) => i.slug !== current.slug)
    .sort((a, b) => b.number.localeCompare(a.number));

  return (
    <div style={issueAccentStyle(current)}>
      {/* 2. BRAND + CURRENT ISSUE — meet C33 first, then enter the issue */}
      <section className="border-b border-black">
        <div className="grid grid-cols-1 md:grid-cols-12">
          {/* left — what C33 is */}
          <div className="md:col-span-5 px-6 md:px-12 py-16 md:py-24 md:border-r border-line flex flex-col justify-between gap-16">
            <div className="font-mono text-[11px] uppercase tracking-[0.24em] text-muted">
              Revue franco-chinoise · 中法时尚季刊
            </div>
            <div>
              <h1 className="font-display text-[44px] md:text-[64px] leading-none tracking-[-0.03em] mb-8">
                C33
              </h1>
              <p className="font-display text-[22px] md:text-[30px] leading-[1.3] tracking-[-0.01em]">
                解码时尚产业与品牌叙事的逻辑——在巴黎与上海之间,在两种凝视、两种转译之间。
              </p>
              <p
                className="font-serif text-[15px] md:text-[16px] leading-[1.85] text-muted mt-7 max-w-[440px]"
                lang="fr"
              >
                C33 décode les logiques de l&apos;industrie de la mode et des
                récits de marque, entre la France et la Chine.
              </p>
            </div>
            <Link
              href="/about"
              className="font-mono text-[12px] uppercase tracking-[0.2em] text-klein hover:text-ink w-fit"
            >
              À propos de C33 →
            </Link>
          </div>

          {/* right — current issue entry */}
          <div className="md:col-span-7 px-6 md:px-12 py-16 md:py-24">
            <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.22em] text-muted mb-12 md:mb-16">
              <span className="flex items-center gap-2">
                <span
                  aria-hidden
                  className="inline-block h-1.5 w-1.5 rounded-full bg-klein"
                />
                <span className="text-klein">Numéro courant</span>
              </span>
              <span>
                N°{current.number} · {current.season} {current.year}
              </span>
            </div>

            <Link href={`/issue/${current.slug}`} className="group block">
              <h2 className="font-display leading-[0.98] tracking-[-0.03em]">
                <span className="block text-[44px] md:text-[76px] group-hover:text-klein transition-colors">
                  {curFR}
                </span>
                {curCN && (
                  <span className="block font-display italic text-[30px] md:text-[52px] text-klein mt-3">
                    {curCN}
                  </span>
                )}
              </h2>
            </Link>
            <p className="font-display italic text-[19px] md:text-[24px] leading-[1.4] text-muted mt-8 max-w-[520px]">
              {current.tagline}
            </p>

            {/* cover lines */}
            <ul className="mt-12 border-t border-line">
              {currentArticles.slice(0, 4).map((a, i) => (
                <li key={a.slug} className="border-b border-line">
                  <Link
                    href={`/article/${a.slug}`}
                    className="group flex items-baseline gap-4 md:gap-6 py-4 md:py-5"
                  >
                    <span className="font-mono text-[11px] tracking-[0.16em] text-klein w-6 shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-display text-[17px] md:text-[22px] leading-[1.25] tracking-[-0.01em] text-ink group-hover:text-klein transition-colors">
                      {a.title}
                    </span>
                    <span className="ml-auto hidden md:inline self-center font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
                      {a.category}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>

            <Link
              href={`/issue/${current.slug}`}
              className="group inline-flex items-center gap-3 mt-10 font-mono text-[12px] uppercase tracking-[0.2em] text-klein hover:text-ink"
            >
              <span
                aria-hidden
                className="inline-block h-px w-8 bg-klein transition-all group-hover:w-12"
              />
              Lire le numéro →
            </Link>
          </div>
        </div>
      </section>

      {/* 3. LES NUMÉROS — current primary, past secondary */}
      <section className="border-b border-black">
        <div className="px-6 md:px-12 py-16 md:py-24">
          <div className="flex items-baseline justify-between mb-12 md:mb-16">
            <h2 className="font-display text-[28px] md:text-[42px] tracking-[-0.01em]">
              Les numéros
              <span className="font-mono text-[11px] align-top tracking-[0.2em] text-muted ml-3">
                / 期号
              </span>
            </h2>
            <Link
              href="/issues"
              className="font-mono text-[11px] uppercase tracking-[0.2em] text-klein hover:text-ink"
            >
              Tous les numéros →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-y-12 md:gap-x-14">
            {/* current — primary */}
            <Link
              href={`/issue/${current.slug}`}
              className="group md:col-span-7 border-t-2 border-black pt-7"
            >
              <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-klein mb-5">
                N°{current.number} · {current.season} {current.year} · Numéro
                courant
              </div>
              <h3 className="font-display text-[36px] md:text-[60px] leading-[1] tracking-[-0.025em] group-hover:text-klein transition-colors">
                {current.title}
              </h3>
              <p className="font-display italic text-[17px] md:text-[21px] leading-[1.4] text-muted mt-5 max-w-[500px]">
                {current.tagline}
              </p>
            </Link>

            {/* past — secondary */}
            <div className="md:col-span-5 flex flex-col gap-10">
              {others.map((prev) => (
                <Link
                  key={prev.slug}
                  href={`/issue/${prev.slug}`}
                  className="group border-t border-line pt-7"
                >
                  <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted mb-5">
                    N°{prev.number} · {prev.season} {prev.year} · Archive
                  </div>
                  <h3 className="font-display text-[26px] md:text-[34px] leading-[1.05] tracking-[-0.015em] group-hover:text-klein transition-colors">
                    {prev.title}
                  </h3>
                  <p className="font-display italic text-[16px] md:text-[18px] leading-[1.4] text-muted mt-4 max-w-[420px]">
                    {prev.tagline}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. ABOUT + SUBSCRIBE */}
      <section className="border-b border-black">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="px-6 md:px-12 py-16 md:py-24 md:border-r border-line">
            <div className="font-mono text-[11px] uppercase tracking-[0.3em] text-klein mb-6">
              À propos
            </div>
            <p className="font-display text-[22px] md:text-[30px] leading-[1.3] tracking-[-0.01em]">
              C33 est une revue indépendante, écrite entre Paris et Shanghai.
            </p>
            <p
              className="font-serif text-[15px] md:text-[16px] leading-[1.85] text-muted mt-5 max-w-[420px]"
              lang="zh-CN"
            >
              一本写作于巴黎与上海之间的独立中法季刊——关注时尚产业的结构与品牌叙事的实践。
            </p>
            <Link
              href="/about"
              className="inline-block mt-9 font-mono text-[12px] uppercase tracking-[0.2em] text-klein hover:text-ink"
            >
              Lire le manifeste →
            </Link>
          </div>
          <div className="px-6 md:px-12 py-16 md:py-24">
            <Newsletter compact />
          </div>
        </div>
      </section>
    </div>
  );
}
