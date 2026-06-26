import Link from "next/link";
import EditorialImage from "@/components/EditorialImage";
import type { ArticleMeta } from "@/lib/articles";
import BilingualTitle from "@/components/BilingualTitle";

export default function ArticleTile({
  article,
  ratio = "aspect-[3/2]",
  sizes = "(min-width: 768px) 50vw, 100vw",
  priority = false,
}: {
  article: ArticleMeta;
  ratio?: string;
  sizes?: string;
  priority?: boolean;
}) {
  return (
    <Link href={`/article/${article.slug}`} className="group block">
      <EditorialImage
        src={article.cover}
        alt={article.coverAlt ?? article.title}
        ratio={ratio}
        sizes={sizes}
        priority={priority}
        label={article.titleFr ?? article.title}
        sublabel={article.category}
        className="mb-4"
      />
      <div className="flex items-center gap-3 mb-2 font-mono text-[10px] uppercase tracking-[0.2em]">
        <span className="inline-flex items-center gap-2 text-klein">
          <span aria-hidden className="inline-block h-1.5 w-1.5 rounded-full bg-klein" />
          {article.category}
        </span>
        <span className="text-muted">N°{article.issue}</span>
      </div>
      <h3 className="font-display text-[22px] md:text-[26px] leading-[1.15] tracking-[-0.01em] group-hover:text-klein transition-colors">
        <BilingualTitle article={article} />
      </h3>
      <div className="mt-3 flex items-center gap-3 font-mono text-[11px] tracking-[0.02em] text-muted">
        <span>{article.author}</span>
        <span aria-hidden>/</span>
        <span>{article.readingTime} MIN</span>
      </div>
    </Link>
  );
}
