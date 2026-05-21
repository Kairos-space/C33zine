import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export type ArticleMeta = {
  slug: string;
  title: string;
  author: string;
  issue: string;
  category: string;
  date?: string;
  excerpt?: string;
};

export type Article = ArticleMeta & {
  content: string;
};

const ARTICLES_DIR = path.join(process.cwd(), "content", "articles");

export function getAllArticles(): Article[] {
  if (!fs.existsSync(ARTICLES_DIR)) return [];
  const files = fs
    .readdirSync(ARTICLES_DIR)
    .filter((f) => f.endsWith(".mdx") || f.endsWith(".md"));

  return files.map((file) => {
    const slug = file.replace(/\.mdx?$/, "");
    const raw = fs.readFileSync(path.join(ARTICLES_DIR, file), "utf-8");
    const { data, content } = matter(raw);
    return {
      slug,
      title: data.title ?? slug,
      author: data.author ?? "—",
      issue: data.issue ?? "01",
      category: data.category ?? "",
      date: data.date,
      excerpt: data.excerpt,
      content,
    };
  });
}

export function getArticleBySlug(slug: string): Article | null {
  const all = getAllArticles();
  return all.find((a) => a.slug === slug) ?? null;
}

export function getArticlesByIssue(issue: string): Article[] {
  return getAllArticles().filter((a) => a.issue === issue);
}
