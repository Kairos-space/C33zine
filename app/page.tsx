import { brand } from "@/lib/brand";
import Link from "next/link";
import Image from "next/image";
import { getCurrentIssue, issues, issueAccentStyle } from "@/lib/issues";
import { resolveCover } from "@/lib/cover";
import EditorialImage from "@/components/EditorialImage";
import Newsletter from "@/components/Newsletter";
import { instagramPosts, instagramProfile } from "@/lib/instagram";

export default function HomePage() {
  const current = getCurrentIssue();
  const currentCover = resolveCover(current.cover);
  const others = issues
    .filter((i) => i.slug !== current.slug)
    .sort((a, b) => b.number.localeCompare(a.number));

  return (
    <div>
      {/* 2. BRAND + CURRENT ISSUE — meet C33 first, then enter the issue */}
      <section aria-label="C33 — numéro courant" className="border-b border-black">
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
                lang="en"
              >
                {brand.description}
              </p>
              <p
                className="font-serif text-[18px] md:text-[20px] leading-[1.7] text-muted mt-6"
                lang="zh-CN"
              >
                {brand.descriptionCn}
              </p>
            </div>
            <div>
              <span aria-hidden className="block h-px w-12 bg-klein mb-5" />
              <p className="font-display italic text-[18px] md:text-[22px]">
                <span lang="en">Fashion, art and culture.</span>
                <span lang="zh-CN">时尚、艺术与文化。</span>
              </p>
            </div>
          </div>

          {/* right — the current issue cover, shown whole on the accent */}
          <div style={issueAccentStyle(current)} className="relative bg-klein text-white overflow-hidden min-h-[440px] md:min-h-[600px] flex flex-col xl:flex-row items-center justify-center gap-8 px-6 md:px-10 py-12">
            {currentCover && (
              <Link
                href={`/issue/${current.slug}`}
                aria-label={`Lire le numéro ${current.number}`}
                className="relative z-10 order-2 block w-[60%] max-w-[220px] xl:w-[48%] xl:max-w-[260px] shrink-0"
              >
                <Image
                  src={currentCover}
                  alt={current.coverAlt ?? current.title}
                  width={1086}
                  height={1448}
                  sizes="(min-width: 768px) 290px, 60vw"
                  priority
                  className="w-full h-auto"
                />
              </Link>
            )}

            <div className="relative z-10 order-1 min-w-0 max-w-[340px]">
              <div className="font-mono text-[11px] uppercase tracking-[0.24em] text-white/80 mb-5">
                N°{current.number} · {current.season} {current.year} · Numéro courant
              </div>
              <h2 className="font-display text-[34px] md:text-[40px] leading-[1.05] mb-5">
                <span lang="fr">{current.title.split(" / ")[0]}</span>
                <span lang="zh-CN">{current.title.split(" / ")[1]}</span>
              </h2>
              <p lang="fr" className="font-display italic text-[20px] md:text-[22px] leading-[1.3] text-white">
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

      {/* Curated posts from C33's Instagram, with original covers and source links. */}
      <section aria-labelledby="home-journal" className="border-b border-black px-6 md:px-12 py-14 md:py-20">
        <div className="flex flex-wrap items-end justify-between gap-5 mb-10">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-klein mb-3">Instagram · @c33zine</p>
            <h2 id="home-journal" className="font-display text-[32px] md:text-[42px]">
              Journal <span lang="zh-CN" className="font-serif text-[18px]">/ 精选</span>
            </h2>
          </div>
          <a href={instagramProfile} target="_blank" rel="noopener noreferrer" className="font-mono text-[11px] uppercase tracking-[0.12em] text-klein hover:text-ink">
            <span lang="fr">Suivre @c33zine ↗</span><span lang="zh-CN">关注 @c33zine ↗</span>
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-7 lg:gap-10">
          {instagramPosts.slice(0, 3).map((post) => (
            <article key={post.id} className="min-w-0 flex flex-col">
              <a href={post.url} target="_blank" rel="noopener noreferrer" className="group block focus-visible:outline focus-visible:outline-2 focus-visible:outline-klein focus-visible:outline-offset-4">
                <Image src={post.image} alt={`${post.category} — ${post.title} / ${post.titleCn}`} width={1080} height={1350} sizes="(min-width: 768px) 33vw, 100vw" className="w-full h-auto border border-line" />
                <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-klein mt-5 mb-3">{post.category}</p>
                <h3 className="font-display text-[26px] lg:text-[30px] leading-[1.15] group-hover:text-klein transition-colors">
                  <span lang="fr">{post.title}</span><span lang="zh-CN" className="font-serif text-[23px] leading-relaxed">{post.titleCn}</span>
                </h3>
              </a>
              <p className="text-[17px] leading-[1.6] text-muted mt-4 mb-5">
                <span lang="fr" className="font-display">{post.excerpt}</span><span lang="zh-CN" className="font-serif text-[15px]">{post.excerptCn}</span>
              </p>
              <a href={post.url} target="_blank" rel="noopener noreferrer" className="mt-auto self-start font-mono text-[11px] uppercase tracking-[0.12em] text-klein hover:text-ink">
                <span lang="fr">Voir le carrousel ↗</span><span lang="zh-CN">查看 Instagram 图集 ↗</span>
              </a>
              <p className="text-[10px] leading-relaxed text-muted mt-4 pt-3 border-t border-line">{post.credit}</p>
            </article>
          ))}
        </div>
      </section>

      {/* 3. LES NUMÉROS — issue cards, each in its own accent */}
      <section aria-label="Les numéros" className="border-b border-black">
        <div className="px-6 md:px-12 py-14 md:py-20">
          <div className="flex flex-wrap gap-4 items-baseline justify-between mb-10 md:mb-14">
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
                className="group grid grid-cols-[120px_minmax(0,1fr)] lg:grid-cols-[180px_minmax(0,1fr)] gap-5 lg:gap-7 items-start"
              >
                <div className="overflow-hidden">
                  <EditorialImage
                    src={resolveCover(i.cover)}
                    alt={i.coverAlt ?? i.title}
                    ratio="aspect-[3/4]"
                    sizes="(min-width: 1024px) 180px, 120px"
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
      <section aria-label="À propos et abonnement" className="border-b border-black">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="px-6 md:px-12 py-14 md:py-20 md:border-r border-line">
            <div className="font-mono text-[11px] uppercase tracking-[0.3em] text-klein mb-6">
              À propos
            </div>
            <p lang="en" className="font-display text-[22px] md:text-[30px] leading-[1.3] tracking-[-0.01em]">
              {brand.about}
            </p>
            <p
              className="font-serif text-[15px] md:text-[16px] leading-[1.85] text-muted mt-5 max-w-[420px]"
              lang="zh-CN"
            >
              {brand.aboutCn}
            </p>
            <Link
              href="/about"
              className="inline-block mt-9 font-mono text-[12px] uppercase tracking-[0.2em] text-klein hover:text-ink"
            >
              À propos de C33 →
            </Link>
          </div>
          <div id="newsletter" tabIndex={-1} className="scroll-mt-8 px-6 md:px-12 py-14 md:py-20 bg-kleinSoft">
            <Newsletter compact />
          </div>
        </div>
      </section>
    </div>
  );
}
