export type Issue = {
  slug: string;
  number: string;
  title: string;
  subtitle: string;
  season: string;
  year: string;
  status: "current" | "upcoming" | "archive";
};

export const issues: Issue[] = [
  {
    slug: "01",
    number: "01",
    title: "代号 / 距离",
    subtitle: "Premier numéro",
    season: "Printemps",
    year: "2026",
    status: "current",
  },
];

export function getCurrentIssue(): Issue {
  return issues.find((i) => i.status === "current") ?? issues[0];
}

export function getIssueBySlug(slug: string): Issue | null {
  return issues.find((i) => i.slug === slug) ?? null;
}
