"use client";

import { useState } from "react";
import Link from "next/link";
import LangToggle from "@/components/LangToggle";
import { rubriques } from "@/lib/categories";

const pages: [string, string][] = [
  ["/issues", "Issues"],
  ["/journal", "Journal"],
  ["/lexique", "Lexique"],
  ["/about", "About"],
  ["/medias", "Médias"],
  ["/contact", "Contact"],
];

/**
 * Mobile-only navigation. A hamburger that opens a full-screen sheet with all
 * the pages, the rubriques and the language toggle. Hidden on md+ (the
 * masthead shows the inline navs there).
 */
export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-label="Ouvrir le menu"
        aria-expanded={open}
        onClick={() => setOpen(true)}
        className="font-mono text-[11px] uppercase tracking-[0.16em] hover:text-klein transition-colors"
      >
        ☰ Menu
      </button>

      {open && (
        <div className="fixed inset-0 z-50 bg-paper text-ink flex flex-col">
          <div className="px-5 h-[3.25rem] flex items-center justify-between border-b border-black">
            <Link
              href="/"
              onClick={() => setOpen(false)}
              className="font-display text-[28px] leading-none tracking-[-0.03em]"
            >
              C33
            </Link>
            <button
              type="button"
              aria-label="Fermer le menu"
              onClick={() => setOpen(false)}
              className="font-mono text-[11px] uppercase tracking-[0.16em] hover:text-klein transition-colors"
            >
              ✕ Fermer
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto px-6 py-8 flex flex-col">
            {pages.map(([href, label]) => (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="font-display text-[30px] leading-[1.2] py-2 hover:text-klein transition-colors"
              >
                {label}
              </Link>
            ))}

            <div className="mt-9 mb-3 font-mono text-[10px] uppercase tracking-[0.28em] text-klein">
              <span lang="fr">Rubriques</span>
              <span lang="zh-CN"> / 栏目</span>
            </div>
            <div className="flex flex-col gap-1.5">
              {rubriques.map((c) => (
                <Link
                  key={c.slug}
                  href={`/category/${c.slug}`}
                  onClick={() => setOpen(false)}
                  className="font-mono text-[12px] uppercase tracking-[0.16em] text-muted hover:text-ink transition-colors"
                >
                  <span lang="fr">{c.fr}</span>
                  <span lang="zh-CN" className="ml-1.5 normal-case tracking-normal">
                    {c.cn}
                  </span>
                </Link>
              ))}
            </div>
          </nav>

          <div className="px-6 py-5 border-t border-line">
            <LangToggle />
          </div>
        </div>
      )}
    </div>
  );
}
