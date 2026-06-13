import Link from "next/link";
import { getCurrentIssue } from "@/lib/issues";

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
          <span>
            Vol.01 — N°{issue.number} · {issue.season} {issue.year}
          </span>
          <span className="hidden md:inline">Bilingue 中 / FR</span>
        </div>
      </div>

      {/* Masthead */}
      <div className="px-5 md:px-10 py-7 md:py-10 grid grid-cols-3 items-center">
        <nav className="flex items-center gap-4 md:gap-8 font-mono text-[11px] uppercase tracking-[0.16em] justify-self-start">
          <Link href="/issues" className="hover:text-klein transition-colors">
            Issues
          </Link>
          <Link
            href="/manifeste"
            className="hover:text-klein transition-colors hidden md:inline"
          >
            Manifeste
          </Link>
          <Link href="/about" className="hover:text-klein transition-colors">
            About
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
          <Link href="/contact" className="hover:text-klein transition-colors">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
