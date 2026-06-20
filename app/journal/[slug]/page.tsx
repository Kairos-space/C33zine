import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllJournalPosts, getJournalPost } from "@/lib/journal";

export async function generateStaticParams() {
  return getAllJournalPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = getJournalPost(params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    authors: [{ name: post.author }],
    alternates: { canonical: `/journal/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `/journal/${post.slug}`,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
    },
  };
}

export default function JournalPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = getJournalPost(params.slug);
  if (!post) notFound();

  return (
    <article>
      {/* Folio bar */}
      <div className="border-b border-line">
        <div className="px-4 md:px-8 h-9 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
          <Link href="/journal" className="hover:text-klein transition-colors">
            ← Journal
          </Link>
          <span className="hidden md:inline italic normal-case tracking-normal text-ink">
            {post.kind}
          </span>
          <span>{post.date}</span>
        </div>
      </div>

      {/* Header */}
      <header className="border-b border-line px-5 md:px-10 pt-16 md:pt-24 pb-12 md:pb-16 text-center">
        <div className="max-w-[820px] mx-auto">
          <div className="font-mono text-[11px] uppercase tracking-[0.28em] text-klein mb-6">
            ● {post.kind}
          </div>
          <h1 className="font-display text-[36px] md:text-[60px] leading-[1.05] tracking-[-0.02em]">
            {post.title}
          </h1>
          {post.excerpt && (
            <p className="font-display italic text-[19px] md:text-[22px] leading-[1.4] mt-8 max-w-[640px] mx-auto text-muted">
              {post.excerpt}
            </p>
          )}
          <div className="mt-8 font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
            Par {post.author} · {post.date}
          </div>
        </div>
      </header>

      {/* Body */}
      <div className="px-5 md:px-10 py-12 md:py-20">
        <div className="max-w-prose mx-auto prose-c33">
          <MDXRemote source={post.content} />
        </div>
      </div>

      {/* Back */}
      <div className="px-5 md:px-10 pb-16 border-t border-line pt-8">
        <div className="max-w-prose mx-auto text-center">
          <Link
            href="/journal"
            className="font-mono text-[11px] uppercase tracking-[0.18em] text-klein hover:text-ink transition-colors"
          >
            ← Toutes les notes du journal
          </Link>
        </div>
      </div>
    </article>
  );
}
