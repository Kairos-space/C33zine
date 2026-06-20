import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export type JournalPostMeta = {
  slug: string;
  title: string;
  author: string;
  date: string;
  /** Single short tag, e.g. "Note de l'éditrice", "Carnet d'atelier" */
  kind: string;
  /** Optional short summary */
  excerpt?: string;
  /** Reading language: "fr" | "zh-CN" | "both" */
  lang: "fr" | "zh-CN" | "both";
};

export type JournalPost = JournalPostMeta & { content: string };

const DIR = path.join(process.cwd(), "content", "journal");

export function getAllJournalPosts(): JournalPost[] {
  if (!fs.existsSync(DIR)) return [];
  const files = fs
    .readdirSync(DIR)
    .filter((f) => f.endsWith(".mdx") || f.endsWith(".md"));

  return files
    .map((file) => {
      const slug = file.replace(/\.mdx?$/, "");
      const raw = fs.readFileSync(path.join(DIR, file), "utf-8");
      const { data, content } = matter(raw);
      return {
        slug,
        title: data.title ?? slug,
        author: data.author ?? "Kairos Zhang",
        date: data.date ?? "",
        kind: data.kind ?? "Note",
        excerpt: data.excerpt,
        lang: (data.lang as JournalPost["lang"]) ?? "both",
        content,
      };
    })
    .sort((a, b) => (b.date ?? "").localeCompare(a.date ?? ""));
}

export function getJournalPost(slug: string): JournalPost | null {
  return getAllJournalPosts().find((p) => p.slug === slug) ?? null;
}
