/** Shared by every issue of C33 — the periodical's ISSN attributed by
 *  Centre ISSN France (BnF), June 2026. */
export const C33_ISSN = "2981-2844";

export type Issue = {
  slug: string;
  number: string;
  title: string;
  subtitle: string;
  season: string;
  year: string;
  status: "current" | "upcoming" | "archive";
  cover?: string;
  coverAlt?: string;
  /** Hex color used as the issue accent (overrides the default Klein blue) */
  accent?: string;
  /** Soft tint of the accent for backgrounds */
  accentSoft?: string;
  /** Issue standfirst (FR) shown under the cover title */
  tagline?: string;
  /** Closing line of the sommaire (FR + 中文) */
  signoff?: string;
  signoffCn?: string;
};

export const issues: Issue[] = [
  {
    slug: "01",
    number: "01",
    title: "La fabrique / 制造",
    subtitle: "Premier numéro",
    season: "Printemps",
    year: "2026",
    status: "archive",
    cover: "/images/issue-01-v2.jpg",
    coverAlt: "C33 N°01 « La fabrique » — l'atelier, buste Stockman et croquis",
    accent: "#0ea5e9", // 天蓝 sky blue
    accentSoft: "#e0f2fe",
    tagline:
      "La fabrique des récits — derrière la mode, le métier qui les tient.",
    signoff: "Cinq pièces, cinq regards.",
    signoffCn: "五篇文章 / 五种视角",
  },
  {
    slug: "02",
    number: "02",
    title: "Le déplacement / 位移",
    subtitle: "Deuxième numéro",
    season: "Été",
    year: "2026",
    status: "current",
    cover: "/images/issue-02-v2.jpg",
    coverAlt: "C33 N°02 « Le déplacement » — carnet de voyage Shanghai-Paris",
    accent: "#e2462a", // 盛夏朱砂橙 summer vermillion
    accentSoft: "#fce7e0",
    tagline: "Quand la mode change de lieu, de langue et de pouvoir.",
    signoff: "Le déplacement, en cours.",
    signoffCn: "位移 · 正在发生",
  },
];

export function getCurrentIssue(): Issue {
  return issues.find((i) => i.status === "current") ?? issues[0];
}

export function getIssueBySlug(slug: string): Issue | null {
  return issues.find((i) => i.slug === slug) ?? null;
}

/** Inline CSS variables for an issue's accent — apply on a wrapper element */
export function issueAccentStyle(issue?: Issue | null): React.CSSProperties {
  if (!issue?.accent) return {};
  return {
    ["--accent" as string]: issue.accent,
    ["--accent-soft" as string]: issue.accentSoft ?? issue.accent + "1a",
  };
}
