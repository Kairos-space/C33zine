import Image from "next/image";

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
      className={`relative ${ratio} w-full overflow-hidden bg-[#121217] ${className}`}
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
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-klein">
            {sublabel ?? "C33"}
          </div>
          <div className="font-display italic text-[16px] md:text-[19px] leading-snug mt-3 text-muted">
            {label ?? "Image à venir"}
          </div>
        </div>
      )}
    </div>
  );
}
