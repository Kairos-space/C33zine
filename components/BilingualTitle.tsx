import type { ArticleMeta } from "@/lib/articles";

/**
 * Renders a title French-first, each language wrapped in a `lang` element so
 * the global LangToggle (body[data-lang-mode]) can show one or both.
 * In a single-language mode the off-language span is hidden by CSS; in
 * "both" mode the two stack, French on top — matching the homepage hero.
 *
 * Falls back gracefully: if no French title exists yet, only the Chinese
 * shows (and stays visible in FR mode too, so nothing ever disappears).
 */
export default function BilingualTitle({
  article,
  className,
}: {
  article: Pick<ArticleMeta, "title" | "titleFr">;
  className?: string;
}) {
  const fr = article.titleFr?.trim();
  return (
    <span className={className}>
      {fr && (
        <span lang="fr" className="block">
          {fr}
        </span>
      )}
      <span lang="zh-CN" className={fr ? "block" : undefined}>
        {article.title}
      </span>
    </span>
  );
}
