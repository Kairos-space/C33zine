import Link from "next/link";
import Image from "next/image";
import { getCurrentIssue, issues, issueAccentStyle } from "@/lib/issues";
import { resolveCover } from "@/lib/cover";
import EditorialImage from "@/components/EditorialImage";
import Newsletter from "@/components/Newsletter";

export default function HomePage() {
  const current = getCurrentIssue();
  const currentCover = resolveCover(current.cover);
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
              <span aria-hidden className="block h-px w-12 bg-klein mb-5" />
              <p className="font-display italic text-[18px] md:text-[22px]">
                Entre Paris et Shanghai, quatre fois l&apos;an.
              </p>
            </div>
          </div>

          {/* right — the current issue cover, shown whole on the accent */}
          <div className="relative bg-klein text-white overflow-hidden min-h-[440px] md:min-h-[600px] flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 px-6 md:px-12 py-12 md:py-0">
            {currentCover && (
              <Link
                href={`/issue/${current.slug}`}
                aria-label={`Lire le numéro ${current.number}`}
                className="relative z-10 order-1 md:order-2 block w-[60%] max-w-[240px] md:max-w-[290px] shrink-0 shadow-[0_28px_70px_-24px_rgba(0,0,0,0.55)]"
              >
                <Image
                  src={currentCover}
                  alt={current.coverAlt ?? current.title}
                  width={1054}
                  height={1492}
                  sizes="(min-width: 768px) 290px, 60vw"
                  priority
                  className="w-full h-auto"
                />
              </Link>
            )}

            <div className="relative z-10 order-2 md:order-1 md:max-w-[300px]">
              <div className="font-mono text-[11px] uppercase tracking-[0.24em] text-white/80 mb-5">
                N°{current.number} · {current.season} {current.year} · Numéro courant
              </div>
              <p className="font-display italic text-[22px] md:text-[28px] leading-[1.3] text-white">
                {current.tagline}
              </p>
              <Link
                href={`/issue/${current.slug}`}
                className="group inline-flex items-center gap-3 mt-8 font-mono text-[12px] uppercase tracking-[0.2em] text-white"
              >
                <span aria-hidden className="inline-block h-px w-8 bg-white transition-all group-hover:w-12" />
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
