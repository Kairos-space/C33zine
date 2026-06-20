import Link from "next/link";

export default function Footer() {
  return (
    <footer lang="fr" className="border-t border-line mt-8">
      {/* Colophon masthead */}
      <div className="border-b border-line">
        <div className="px-5 md:px-10 py-16 md:py-24 text-center">
          <div className="font-display text-[88px] md:text-[160px] leading-[0.82] tracking-[-0.04em]">
            C33
          </div>
          <div className="font-display italic text-[17px] md:text-[20px] mt-8 max-w-[540px] mx-auto leading-snug">
            Une revue trimestrielle franco-chinoise sur l&apos;industrie de la
            mode et les récits de marque.
          </div>
        </div>
      </div>

      {/* Sitemap links */}
      <div className="border-b border-line px-5 md:px-10 py-8">
        <nav className="flex flex-wrap justify-center gap-x-7 gap-y-2 font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
          <Link href="/issues" className="hover:text-klein transition-colors">
            Les numéros
          </Link>
          <Link href="/journal" className="hover:text-klein transition-colors">
            Journal
          </Link>
          <Link href="/lexique" className="hover:text-klein transition-colors">
            Lexique
          </Link>
          <Link href="/manifeste" className="hover:text-klein transition-colors">
            Manifeste
          </Link>
          <Link href="/about" className="hover:text-klein transition-colors">
            About
          </Link>
          <Link
            href="/contributeurs"
            className="hover:text-klein transition-colors"
          >
            Contributeurs
          </Link>
          <Link href="/pitch" className="hover:text-klein transition-colors">
            Propositions
          </Link>
          <Link href="/medias" className="hover:text-klein transition-colors">
            Médias
          </Link>
          <Link href="/contact" className="hover:text-klein transition-colors">
            Contact
          </Link>
          <a href="/feed.xml" className="hover:text-klein transition-colors">
            RSS
          </a>
        </nav>
      </div>

      {/* Bottom strip */}
      <div className="px-5 md:px-10 py-10 grid grid-cols-1 md:grid-cols-3 gap-6 font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
        <div className="space-y-1">
          <div>© C33 — Lumicome, 2026 · Tous droits réservés</div>
          <div>Rédactrice en chef : Kairos Zhang</div>
        </div>
        <div className="space-y-1 md:text-center">
          <div>ISSN 2981-2844</div>
          <div>Paris, France</div>
        </div>
        <div className="flex flex-col gap-1 md:items-end">
          <a
            href="mailto:contact@c33zine.com"
            className="hover:text-klein transition-colors"
          >
            contact@c33zine.com
          </a>
          <Link
            href="/mentions-legales"
            className="hover:text-klein transition-colors"
          >
            Mentions légales
          </Link>
        </div>
      </div>
    </footer>
  );
}
