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
};

export const issues: Issue[] = [
  {
    slug: "01",
    number: "01",
    title: "La fabrique / 制造",
    subtitle: "Premier numéro",
    season: "Printemps",
    year: "2026",
    status: "current",
    cover: "/images/issue-01.png",
    coverAlt: "巴黎工作室:高定人台与样片",
    accent: "#0ea5e9", // 天蓝 sky blue
    accentSoft: "#e0f2fe",
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
