import Image from "next/image";

/** Render a "Français / 中文" string as two lang-tagged spans so the language
 *  toggle can hide one half; a plain string renders as-is. */
function BiText({ value }: { value: string }) {
  if (value.includes(" / ")) {
    const [fr, ...rest] = value.split(" / ");
    return (
      <>
        <span lang="fr">{fr}</span>
        <span lang="zh-CN"> / {rest.join(" / ")}</span>
      </>
    );
  }
  return <>{value}</>;
}

type Props = {
  src?: string;
  alt?: string;
  /** Tailwind aspect-ratio class, e.g. "aspect-[4/5]" */
  ratio?: string;
  /** Small label shown on the placeholder when no image is set */
  label?: string;
  sublabel?: string;
  /** next/image sizes hint */
  sizes?: string;
  priority?: boolean;
  className?: string;
};

/**
 * Editorial image slot. Renders an optimized photograph when `src` is set,
 * otherwise a refined placeholder plate so the layout reads as intentional
 * whitespace rather than a missing asset. Drop a file in /public/images and
 * set `cover:` in the article/issue frontmatter to fill it.
 */
export default function EditorialImage({
  src,
  alt = "",
  ratio = "aspect-[4/5]",
  label,
  sublabel,
  sizes = "100vw",
  priority = false,
  className = "",
}: Props) {
  return (
    <div
      className={`relative ${ratio} w-full overflow-hidden bg-[#171719] ${className}`}
    >
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover"
        />
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-8 text-white/85">
          <div className="font-mono text-[10px] uppercase tracking-[0.32em] text-klein mb-4">
            ● {sublabel ? <BiText value={sublabel} /> : "C33"}
          </div>
          <div className="font-display italic text-[18px] md:text-[22px] leading-snug text-white/70">
            {label ? <BiText value={label} /> : "Image à venir"}
          </div>
        </div>
      )}
    </div>
  );
}
