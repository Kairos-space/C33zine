export type Category = {
  slug: string;
  fr: string;
  cn: string;
};

export const categories: Category[] = [
  { slug: "mode", fr: "Mode", cn: "时尚" },
  { slug: "art-design", fr: "Art & Design", cn: "艺术·设计" },
  { slug: "culture", fr: "Culture", cn: "文化" },
  { slug: "villes", fr: "Villes", cn: "城市" },
  { slug: "chroniques", fr: "Chroniques", cn: "专栏" },
];

/**
 * Rubriques surfaced in section navigation (nav bar + footer).
 * The five sections are subject-based (mode / art & design / culture /
 * cities / columns); every one is a first-class browse rubrique.
 * "Chroniques / 专栏" holds the recurring columns and the portrait pieces.
 */
export const rubriques: Category[] = categories;

export function getCategoryBySlug(slug: string): Category | null {
  return categories.find((c) => c.slug === slug) ?? null;
}

export function getCategoryByCn(cn: string): Category | null {
  return categories.find((c) => c.cn === cn) ?? null;
}
