import Link from "next/link";
import type { ArticleMeta } from "@/lib/articles";

export default function ArticleCard({
  article,
  index,
}: {
  article: ArticleMeta;
  index: number;
}) {
  return (
    <Link
      href={`/article/${article.slug}`}
      className="group block border-t border-black py-6"
    >
      <div className="flex items-baseline gap-6">
        <span className="font-sans text-[11px] tracking-[0.1em] uppercase shrink-0 w-8">
          {String(index + 1).padStart(2, "0")}
        </span>
        <div className="flex-1 min-w-0">
          <div className="font-sans text-[11px] tracking-[0.1em] uppercase mb-2">
            {article.category}
          </div>
          <h3 className="font-serif text-[22px] md:text-[26px] leading-[1.25] tracking-tight group-hover:underline underline-offset-4 decoration-1">
            {article.title}
          </h3>
          <div className="font-sans text-[12px] mt-3 uppercase tracking-[0.08em]">
            {article.author}
          </div>
        </div>
      </div>
    </Link>
  );
}
