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
    accent: "#1f2bff", // Klein blue
    accentSoft: "#eef0ff",
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
