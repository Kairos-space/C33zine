import Link from "next/link";
import Image from "next/image";
import { getCurrentIssue, issues, issueAccentStyle } from "@/lib/issues";
import { resolveCover } from "@/lib/cover";
import EditorialImage from "@/components/EditorialImage";
import Newsletter from "@/components/Newsletter";

export default function HomePage() {
  const current = getCurrentIssue();
  const currentCover = resolveCover(current.cover);
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
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* left — what C33 is */}
          <div className="px-6 md:px-12 py-14 md:py-20 md:border-r border-line flex flex-col justify-between gap-14">
            <h1 className="leading-none">
              <Image
                src="/logo-c33.png"
                alt="C33"
                width={779}
                height={436}
                priority
                className="h-16 md:h-28 w-auto"
              />
            </h1>
            <div>
              <p
                className="font-display text-[28px] md:text-[40px] leading-[1.15] tracking-[-0.02em]"
                lang="fr"
              >
                Une revue indépendante qui décode le goût et l&apos;art de
                vivre, entre Paris et Shanghai.
              </p>
              <p
                className="font-serif text-[18px] md:text-[20px] leading-[1.7] text-muted mt-6"
                lang="zh-CN"
              >
                一本解码品味与生活方式的中法双语独立季刊——写作于巴黎与上海之间。
              </p>
            </div>
            <div>
              <span
                aria-hidden
                className="block h-px w-12 bg-klein mb-5"
              />
              <p className="font-display italic text-[18px] md:text-[22px]">
                <span lang="fr">Décoder, pas commenter.</span>{" "}
                <span lang="zh-CN" className="not-italic font-serif text-muted">
                  / 解码,而非评论。
                </span>
              </p>
            </div>
          </div>

          {/* right — current issue card, accent-bounded */}
          <div className="relative bg-klein text-white overflow-hidden flex flex-col justify-between min-h-[440px] md:min-h-[600px]">
            {currentCover && (
              <div className="pointer-events-none absolute inset-y-0 right-0 w-3/5 hidden md:block">
                <Image
                  src={currentCover}
                  alt={current.coverAlt ?? current.title}
                  fill
                  sizes="40vw"
                  priority
                  className="object-cover"
                />
                <div
                  aria-hidden
                  className="absolute inset-y-0 left-0 w-28 bg-gradient-to-r from-klein to-transparent"
                />
              </div>
            )}

            <div className="relative z-10 px-6 md:px-12 pt-10 md:pt-14">
              <div className="font-mono text-[11px] uppercase tracking-[0.24em] text-white/80">
                N°{current.number} · {current.season} {current.year}
              </div>
            </div>

            <div className="relative z-10 px-6 md:px-12 pb-10 md:pb-14">
              <Link href={`/issue/${current.slug}`} className="group block">
                <h2 className="font-display leading-[0.98] tracking-[-0.03em]">
                  <span className="block text-[42px] md:text-[64px]" lang="fr">
                    {curFR}
                  </span>
                  {curCN && (
                    <span
                      className="block font-display italic text-[30px] md:text-[46px] text-white/90 mt-1"
                      lang="zh-CN"
                    >
                      {curCN}
                    </span>
                  )}
                </h2>
              </Link>
              <p className="font-display italic text-[18px] md:text-[21px] leading-[1.4] text-white/85 mt-6 max-w-[360px]">
                {current.tagline}
              </p>
              <Link
                href={`/issue/${current.slug}`}
                className="group inline-flex items-center gap-3 mt-9 font-mono text-[12px] uppercase tracking-[0.2em] text-white"
              >
                <span
                  aria-hidden
                  className="inline-block h-px w-8 bg-white transition-all group-hover:w-12"
                />
                Lire le numéro →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. LES NUMÉROS — issue cards, each in its own accent */}
      <section className="border-b border-black">
        <div className="px-6 md:px-12 py-14 md:py-20">
          <div className="flex items-baseline justify-between mb-10 md:mb-14">
            <h2 className="font-display text-[28px] md:text-[42px] tracking-[-0.01em]">
              Les numéros
              <span
                className="font-mono text-[11px] align-top tracking-[0.2em] text-muted ml-3"
                lang="zh-CN"
              >
                / 期号
              </span>
            </h2>
            <Link
              href="/issues"
              className="font-mono text-[11px] uppercase tracking-[0.2em] text-klein hover:text-ink"
            >
              Voir tous les numéros →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14">
            {[current, ...others].map((i) => {
              const [iFR, iCN] = i.title.includes(" / ")
                ? i.title.split(" / ")
                : [i.title, ""];
              return (
              <Link
                key={i.slug}
                href={`/issue/${i.slug}`}
                style={issueAccentStyle(i)}
                className="group grid grid-cols-[120px_1fr] md:grid-cols-[180px_1fr] gap-5 md:gap-7 items-start"
              >
                <div className="overflow-hidden">
                  <EditorialImage
                    src={resolveCover(i.cover)}
                    alt={i.coverAlt ?? i.title}
                    ratio="aspect-[3/4]"
                    sizes="(min-width: 768px) 180px, 120px"
                    label={i.title}
                    sublabel={`N°${i.number}`}
                  />
                </div>
                <div>
                  <div className="font-mono text-[10px] md:text-[11px] uppercase tracking-[0.2em] text-klein mb-3">
                    N°{i.number} · {i.season} {i.year}
                    {i.status === "current" ? " · Numéro courant" : " · Archive"}
                  </div>
                  <h3 className="font-display text-[24px] md:text-[32px] leading-[1.05] tracking-[-0.015em] group-hover:text-klein transition-colors">
                    {iFR}
                    {iCN && <span lang="zh-CN"> / {iCN}</span>}
                  </h3>
                  <p className="font-display italic text-[16px] md:text-[18px] leading-[1.4] text-muted mt-3 max-w-[360px]">
                    {i.tagline}
                  </p>
                </div>
              </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. ABOUT + SUBSCRIBE */}
      <section className="border-b border-black">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="px-6 md:px-12 py-14 md:py-20 md:border-r border-line">
            <div className="font-mono text-[11px] uppercase tracking-[0.3em] text-klein mb-6">
              À propos
            </div>
            <p className="font-display text-[22px] md:text-[30px] leading-[1.3] tracking-[-0.01em]">
              Indépendante, trimestrielle, bilingue — éditée à Paris, écrite
              entre deux villes.
            </p>
            <p
              className="font-serif text-[15px] md:text-[16px] leading-[1.85] text-muted mt-5 max-w-[420px]"
              lang="zh-CN"
            >
              独立、季度、双语——编辑部设于巴黎,写作往返于巴黎与上海之间。
            </p>
            <Link
              href="/about"
              className="inline-block mt-9 font-mono text-[12px] uppercase tracking-[0.2em] text-klein hover:text-ink"
            >
              Lire le manifeste →
            </Link>
          </div>
          <div className="px-6 md:px-12 py-14 md:py-20">
            <Newsletter compact />
          </div>
        </div>
      </section>
    </div>
  );
}
