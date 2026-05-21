import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-black mt-24">
      <div className="px-6 md:px-10 py-10 flex flex-col md:flex-row justify-between gap-6 text-[12px] font-sans uppercase tracking-[0.08em]">
        <div className="space-y-1">
          <div>© C33 2026. Tous droits réservés.</div>
          <div>
            Une publication Lumicome — ISSN en cours d&apos;attribution
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-2 md:gap-8">
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
