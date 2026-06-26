import Link from "next/link";
import type { ArticleMeta } from "@/lib/articles";
import BilingualTitle from "@/components/BilingualTitle";
import { getCategoryByCn } from "@/lib/categories";

export default function ArticleCard({
  article,
  index,
}: {
  article: ArticleMeta;
  index: number;
}) {
  const folio = String((index + 1) * 12 + 8).padStart(3, "0"); // pretend page number, e.g. 020, 032

  return (
    <Link
      href={`/article/${article.slug}`}
      className="group block border-t border-black"
    >
      <div className="grid grid-cols-12 gap-3 md:gap-6 py-7 md:py-9 items-baseline">
        {/* serial */}
        <span className="col-span-2 md:col-span-1 font-display text-[18px] md:text-[22px] italic">
          {String(index + 1).padStart(2, "0")}.
        </span>

        {/* category */}
        <span className="col-span-10 md:col-span-2 font-sans text-[10px] uppercase tracking-[0.18em]">
          <span lang="fr">{getCategoryByCn(article.category)?.fr ?? article.category}</span>
          <span lang="zh-CN">{article.category}</span>
        </span>

        {/* title */}
        <h3 className="col-span-12 md:col-span-6 font-display italic font-medium text-[24px] md:text-[32px] leading-[1.15] tracking-tight group-hover:underline underline-offset-4 decoration-1">
          <BilingualTitle article={article} />
        </h3>

        {/* author */}
        <span className="col-span-9 md:col-span-2 font-sans text-[11px] uppercase tracking-[0.16em] md:text-right">
          par {article.author}
        </span>

        {/* page */}
        <span className="col-span-3 md:col-span-1 font-display text-[14px] tabular-nums text-right">
          p. {folio}
        </span>
      </div>
    </Link>
  );
}
