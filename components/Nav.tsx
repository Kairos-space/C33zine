import Link from "next/link";
import { getCurrentIssue } from "@/lib/issues";
import { rubriques } from "@/lib/categories";
import LangToggle from "@/components/LangToggle";

export default function Nav() {
  const issue = getCurrentIssue();
  return (
    <header lang="fr" className="border-b border-line">
      {/* Utility bar */}
      <div className="border-b border-line">
        <div className="px-5 md:px-10 h-9 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
          <span className="hidden md:inline">
            <span className="text-klein font-bold">+33</span> · France ↔ Chine
          </span>
          <span className="md:hidden text-klein font-bold">+33</span>
          <span className="truncate min-w-0 px-2 text-center">
            <span className="hidden sm:inline">Vol.01 — </span>N°{issue.number} ·{" "}
            {issue.season} {issue.year}
            <span className="hidden md:inline"> · ISSN 2981-2844</span>
          </span>
          <span className="inline-flex items-center shrink-0">
            <LangToggle />
          </span>
        </div>
      </div>

      {/* Masthead */}
      <div className="px-5 md:px-10 py-7 md:py-10 grid grid-cols-3 items-center">
        <nav className="flex items-center gap-4 md:gap-8 font-mono text-[11px] uppercase tracking-[0.16em] justify-self-start">
          <Link href="/issues" className="hover:text-klein transition-colors">
            Issues
          </Link>
          <Link
            href="/journal"
            className="hover:text-klein transition-colors hidden md:inline"
          >
            Journal
          </Link>
          <Link
            href="/lexique"
            className="hover:text-klein transition-colors hidden md:inline"
          >
            Lexique
          </Link>
        </nav>
        <Link
          href="/"
          aria-label="C33 — accueil"
          className="font-display tracking-[-0.03em] text-[44px] md:text-[64px] leading-none justify-self-center"
        >
          C33
        </Link>
        <nav className="flex items-center gap-4 md:gap-8 font-mono text-[11px] uppercase tracking-[0.16em] justify-self-end">
          <Link
            href="/medias"
            className="hover:text-klein transition-colors hidden md:inline"
          >
            Médias
          </Link>
          <Link
            href="/about"
            className="hover:text-klein transition-colors hidden md:inline"
          >
            About
          </Link>
          <Link href="/contact" className="hover:text-klein transition-colors">
            Contact
          </Link>
        </nav>
      </div>

      {/* Rubriques bar — all sections, visible right under the masthead */}
      <div className="border-t border-line">
        <nav className="px-4 md:px-8 h-9 flex items-center md:justify-center gap-x-5 md:gap-x-8 overflow-x-auto whitespace-nowrap font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
          {rubriques.map((c) => (
            <Link
              key={c.slug}
              href={`/category/${c.slug}`}
              className="shrink-0 hover:text-klein transition-colors"
            >
              {c.fr}
              <span className="ml-1 normal-case tracking-normal text-muted/80">
                {c.cn}
              </span>
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
