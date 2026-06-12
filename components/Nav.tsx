import Link from "next/link";
import { getCurrentIssue } from "@/lib/issues";

export default function Nav() {
  const issue = getCurrentIssue();
  return (
    <header lang="fr" className="border-b border-black">
      {/* Utility bar */}
      <div className="border-b border-black">
        <div className="px-4 md:px-8 h-9 flex items-center justify-between font-sans text-[10px] uppercase tracking-[0.18em]">
          <span className="hidden md:inline">
            France · Chine — Trimestriel
          </span>
          <span className="md:hidden">FR · CN</span>
          <span>
            Vol. 01 — N° {issue.number} · {issue.season} {issue.year}
          </span>
          <span className="hidden md:inline">Bilingue 中 / FR</span>
        </div>
      </div>

      {/* Masthead */}
      <div className="px-4 md:px-8 py-6 md:py-8 grid grid-cols-3 items-center">
        <nav className="flex items-center gap-4 md:gap-7 text-[11px] font-sans uppercase tracking-[0.14em] justify-self-start">
          <Link href="/issues" className="hover:underline underline-offset-4">
            Issues
          </Link>
          <Link
            href="/manifeste"
            className="hover:underline underline-offset-4 hidden md:inline"
          >
            Manifeste
          </Link>
          <Link href="/about" className="hover:underline underline-offset-4">
            About
          </Link>
        </nav>
        <Link
          href="/"
          aria-label="C33 — accueil"
          className="font-display font-medium tracking-[-0.04em] text-[44px] md:text-[64px] leading-none justify-self-center"
        >
          C33
        </Link>
        <nav className="flex items-center gap-4 md:gap-7 text-[11px] font-sans uppercase tracking-[0.14em] justify-self-end">
          <Link
            href="/mentions-legales"
            className="hover:underline underline-offset-4 hidden md:inline"
          >
            Légales
          </Link>
          <Link
            href="/contact"
            className="hover:underline underline-offset-4"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
