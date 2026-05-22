export type Category = {
  slug: string;
  fr: string;
  cn: string;
};

export const categories: Category[] = [
  { slug: "edito", fr: "Édito", cn: "卷首" },
  { slug: "observations", fr: "Observations", cn: "观察" },
  { slug: "critiques", fr: "Critiques", cn: "评论" },
  { slug: "archives", fr: "Archives", cn: "档案" },
];

export function getCategoryBySlug(slug: string): Category | null {
  return categories.find((c) => c.slug === slug) ?? null;
}

export function getCategoryByCn(cn: string): Category | null {
  return categories.find((c) => c.cn === cn) ?? null;
}
