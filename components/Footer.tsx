import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-black mt-24">
      {/* Colophon masthead */}
      <div className="border-b border-black">
        <div className="px-4 md:px-8 py-12 md:py-16 text-center">
          <div className="font-sans text-[10px] uppercase tracking-[0.18em] mb-4">
            — Colophon —
          </div>
          <div className="font-display text-[80px] md:text-[140px] leading-[0.85] tracking-[-0.04em]">
            C33
          </div>
          <div className="font-display italic text-[16px] md:text-[18px] mt-6 max-w-[520px] mx-auto leading-snug">
            Une revue trimestrielle franco-chinoise sur l&apos;industrie de la
            mode et les récits de marque.
          </div>
        </div>
      </div>

      {/* Bottom strip */}
      <div className="px-4 md:px-8 py-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-[10px] font-sans uppercase tracking-[0.16em]">
        <div className="space-y-1">
          <div>© C33 — Lumicome, 2026 · Tous droits réservés</div>
          <div>Édité par Yifei ZHANG</div>
          <div>Directrice de la publication : Kairos Zhang</div>
        </div>
        <div className="space-y-1 md:text-center">
          <div>ISSN — en cours d&apos;attribution</div>
          <div>Bussy-Saint-Georges, France</div>
        </div>
        <div className="flex flex-col gap-1 md:items-end">
          <a
            href="mailto:contact@c33zine.com"
            className="hover:underline underline-offset-4"
          >
            contact@c33zine.com
          </a>
          <Link
            href="/mentions-legales"
            className="hover:underline underline-offset-4"
          >
            Mentions légales
          </Link>
        </div>
      </div>
    </footer>
  );
}
