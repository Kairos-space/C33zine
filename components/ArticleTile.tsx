import Link from "next/link";
import EditorialImage from "@/components/EditorialImage";
import type { ArticleMeta } from "@/lib/articles";

export default function ArticleTile({
  article,
  ratio = "aspect-[4/5]",
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
        label={article.category}
        sublabel={`N° ${article.issue}`}
        className="mb-5"
      />
      <div className="text-[11px] uppercase tracking-[0.2em] text-muted mb-3">
        {article.category}
      </div>
      <h3 className="font-display text-[26px] md:text-[32px] leading-[1.1] tracking-[-0.01em] group-hover:italic">
        {article.title}
      </h3>
      <div className="mt-4 flex items-center gap-3 text-[12px] tracking-[0.04em] text-muted">
        <span>{article.author}</span>
        <span aria-hidden>—</span>
        <span>Lecture {article.readingTime} min</span>
      </div>
    </Link>
  );
}
