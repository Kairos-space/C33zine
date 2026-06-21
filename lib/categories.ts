export type Category = {
  slug: string;
  fr: string;
  cn: string;
};

export const categories: Category[] = [
  { slug: "edito", fr: "Édito", cn: "卷首" },
  { slug: "observations", fr: "Observations", cn: "观察" },
  { slug: "portraits", fr: "Portraits", cn: "人物" },
  { slug: "interieurs", fr: "Intérieurs", cn: "居所" },
  { slug: "critiques", fr: "Critiques", cn: "评论" },
  { slug: "analyses", fr: "Analyses", cn: "产业" },
  { slug: "archives", fr: "Archives", cn: "档案" },
  { slug: "lexique", fr: "Lexique", cn: "词条" },
];

/**
 * Rubriques surfaced in section navigation (nav bar + footer).
 * Excludes structural categories that aren't browse-rubriques on their own:
 * Édito (an issue position) and Lexique (already a top-nav page).
 */
export const rubriques: Category[] = categories.filter(
  (c) => !["edito", "lexique"].includes(c.slug),
);

export function getCategoryBySlug(slug: string): Category | null {
  return categories.find((c) => c.slug === slug) ?? null;
}

export function getCategoryByCn(cn: string): Category | null {
  return categories.find((c) => c.cn === cn) ?? null;
}
