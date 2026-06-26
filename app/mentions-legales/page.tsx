import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions légales",
  description:
    "Mentions légales de C33 — éditeur, directrice de la publication, SIRET, ISSN, hébergement, RGPD.",
  alternates: { canonical: "/mentions-legales" },
};

export default function MentionsLegalesPage() {
  return (
    <article>
      <div className="border-b border-black">
        <div className="px-4 md:px-8 h-9 flex items-center justify-between font-sans text-[10px] uppercase tracking-[0.18em]">
          <span>C33 — <span lang="fr">Ours</span><span lang="zh-CN"> / 版权页</span></span>
          <span className="hidden md:inline font-display italic normal-case tracking-normal">
            Mentions légales
          </span>
          <span>2026</span>
        </div>
      </div>

      <header className="px-6 md:px-10 pt-16 md:pt-24 pb-12 text-center border-b border-black">
        <div className="font-sans text-[10px] uppercase tracking-[0.22em] mb-6">
          — Ours —
        </div>
        <h1 className="font-display font-medium text-[40px] md:text-[72px] leading-[0.95] tracking-[-0.02em]">
          Mentions légales
        </h1>
        <p className="font-display italic text-[16px] md:text-[18px] mt-6 max-w-[520px] mx-auto">
          Conformément à la loi française pour la confiance dans
          l&apos;économie numérique.
        </p>
      </header>

      <div className="px-6 md:px-10 py-16">
        <div className="max-w-[720px] mx-auto grid md:grid-cols-2 gap-x-12 gap-y-12 font-serif text-[16px] leading-[1.8]">
          <section>
            <h2 className="font-sans text-[10px] uppercase tracking-[0.22em] mb-3 border-b border-black pb-2">
              Éditeur
            </h2>
            <p>
              Édité par <strong>Yifei ZHANG</strong>
              <br />
              Micro-entrepreneur enregistré en France
              <br />
              SIRET : 851 054 254 00020
              <br />
              13 Avenue Haroun Tazieff
              <br />
              77600 Bussy-Saint-Georges
            </p>
          </section>

          <section>
            <h2 className="font-sans text-[10px] uppercase tracking-[0.22em] mb-3 border-b border-black pb-2">
              Direction de la publication
            </h2>
            <p>
              Directrice de la publication :{" "}
              <strong>Yifei ZHANG</strong>
              <br />
              Contact :{" "}
              <a
                href="mailto:contact@c33zine.com"
                className="underline underline-offset-4"
              >
                contact@c33zine.com
              </a>
            </p>
          </section>

          <section>
            <h2 className="font-sans text-[10px] uppercase tracking-[0.22em] mb-3 border-b border-black pb-2">
              Publication
            </h2>
            <p>
              Une publication <strong>Lumicome</strong>
              <br />
              Société d&apos;édition en cours de constitution
            </p>
          </section>

          <section>
            <h2 className="font-sans text-[10px] uppercase tracking-[0.22em] mb-3 border-b border-black pb-2">
              ISSN
            </h2>
            <p>
              <strong>ISSN 2981-2844</strong>
              <br />
              Périodique en ligne, trimestriel.
              <br />
              Attribué par le Centre ISSN France (Bibliothèque nationale de
              France).
            </p>
          </section>

          <section>
            <h2 className="font-sans text-[10px] uppercase tracking-[0.22em] mb-3 border-b border-black pb-2">
              Hébergement
            </h2>
            <p>
              Vercel Inc.
              <br />
              440 N Barranca Ave #4133
              <br />
              Covina, CA 91723, USA
              <br />
              <a
                href="https://vercel.com"
                className="underline underline-offset-4"
              >
                vercel.com
              </a>
            </p>
          </section>

          <section>
            <h2 className="font-sans text-[10px] uppercase tracking-[0.22em] mb-3 border-b border-black pb-2">
              Propriété intellectuelle
            </h2>
            <p>
              © C33 2026. Tous droits réservés. L&apos;ensemble des contenus
              publiés sur c33zine.com (textes, images, vidéos, design) est
              protégé par le droit d&apos;auteur. Toute reproduction, même
              partielle, sans autorisation écrite préalable de l&apos;éditeur
              est interdite.
            </p>
          </section>

          <section>
            <h2 className="font-sans text-[10px] uppercase tracking-[0.22em] mb-3 border-b border-black pb-2">
              Données personnelles
            </h2>
            <p>
              Conformément au Règlement Général sur la Protection des Données
              (RGPD) et à la loi Informatique et Libertés, vous disposez
              d&apos;un droit d&apos;accès, de rectification et de suppression
              des données vous concernant. Pour exercer ce droit, écrivez à{" "}
              <a
                href="mailto:contact@c33zine.com"
                className="underline underline-offset-4"
              >
                contact@c33zine.com
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="font-sans text-[10px] uppercase tracking-[0.22em] mb-3 border-b border-black pb-2">
              Cookies
            </h2>
            <p>
              Ce site n&apos;utilise pas de cookies de tracking publicitaire.
              Seuls les cookies techniques strictement nécessaires au
              fonctionnement du site sont déployés.
            </p>
          </section>
        </div>
      </div>
    </article>
  );
}
