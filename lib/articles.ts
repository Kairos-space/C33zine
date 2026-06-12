import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { getCategoryBySlug } from "./categories";

export type ArticleMeta = {
  slug: string;
  title: string;
  author: string;
  issue: string;
  category: string;
  date?: string;
  excerpt?: string;
  order?: number;
  readingTime: number;
};

export type Article = ArticleMeta & {
  content: string;
};

// Reading time for mixed CJK + Latin prose.
// CJK readers average ~400 chars/min; Latin ~200 words/min.
function estimateReadingTime(content: string): number {
  const cjk = (content.match(/[一-鿿㐀-䶿]/g) || []).length;
  const latinWords = (content.match(/[A-Za-zÀ-ÿ0-9]+/g) || []).length;
  const minutes = cjk / 400 + latinWords / 200;
  return Math.max(1, Math.round(minutes));
}

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
      order: typeof data.order === "number" ? data.order : undefined,
      readingTime: estimateReadingTime(content),
      content,
    };
  });
}

export function getArticleBySlug(slug: string): Article | null {
  const all = getAllArticles();
  return all.find((a) => a.slug === slug) ?? null;
}

export function getArticlesByIssue(issue: string): Article[] {
  return getAllArticles()
    .filter((a) => a.issue === issue)
    .sort((a, b) => {
      // Explicit order wins; articles without order fall to the end, then by date.
      const ao = a.order ?? Number.POSITIVE_INFINITY;
      const bo = b.order ?? Number.POSITIVE_INFINITY;
      if (ao !== bo) return ao - bo;
      return (a.date ?? "").localeCompare(b.date ?? "");
    });
}

export function getArticlesByCategorySlug(slug: string): Article[] {
  const cat = getCategoryBySlug(slug);
  if (!cat) return [];
  return getAllArticles()
    .filter((a) => a.category === cat.cn)
    .sort((a, b) => {
      // Newest issue first, then explicit order, then date.
      if (a.issue !== b.issue) return b.issue.localeCompare(a.issue);
      const ao = a.order ?? Number.POSITIVE_INFINITY;
      const bo = b.order ?? Number.POSITIVE_INFINITY;
      if (ao !== bo) return ao - bo;
      return (a.date ?? "").localeCompare(b.date ?? "");
    });
}
