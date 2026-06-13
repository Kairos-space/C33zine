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
    cover: "/images/issue-01.jpg",
    coverAlt: "巴黎工作室:高定人台与样片",
  },
];

export function getCurrentIssue(): Issue {
  return issues.find((i) => i.status === "current") ?? issues[0];
}

export function getIssueBySlug(slug: string): Issue | null {
  return issues.find((i) => i.slug === slug) ?? null;
}
