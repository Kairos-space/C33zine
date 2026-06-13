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
    <div className={`relative ${ratio} w-full overflow-hidden bg-[#ebe9e4] ${className}`}>
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
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 text-[#a8a399]">
          <div className="font-display italic text-[15px] md:text-[17px] leading-snug">
            {label ?? "Image à venir"}
          </div>
          {sublabel && (
            <div className="font-sans text-[9px] uppercase tracking-[0.24em] mt-3">
              {sublabel}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
