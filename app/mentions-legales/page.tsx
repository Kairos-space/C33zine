import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions légales",
};

export default function MentionsLegalesPage() {
  return (
    <article className="px-6 md:px-10 py-16">
      <div className="max-w-prose mx-auto">
        <div className="font-sans text-[11px] uppercase tracking-[0.12em] mb-6">
          Mentions légales
        </div>
        <h1 className="font-sans font-semibold text-[40px] md:text-[56px] leading-[0.95] tracking-[-0.03em] mb-12">
          Mentions légales
        </h1>

        <div className="space-y-10 font-serif text-[17px] leading-[1.8]">
          <section>
            <h2 className="font-sans text-[11px] uppercase tracking-[0.12em] mb-3">
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
            <h2 className="font-sans text-[11px] uppercase tracking-[0.12em] mb-3">
              Direction de la publication
            </h2>
            <p>
              Directrice de la publication : <strong>Yifei ZHANG</strong>
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
            <h2 className="font-sans text-[11px] uppercase tracking-[0.12em] mb-3">
              Publication
            </h2>
            <p>
              Une publication <strong>Lumicome</strong>
              <br />
              Société d&apos;édition en cours de constitution
            </p>
          </section>

          <section>
            <h2 className="font-sans text-[11px] uppercase tracking-[0.12em] mb-3">
              ISSN
            </h2>
            <p>ISSN : en cours d&apos;attribution</p>
          </section>

          <section>
            <h2 className="font-sans text-[11px] uppercase tracking-[0.12em] mb-3">
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
            <h2 className="font-sans text-[11px] uppercase tracking-[0.12em] mb-3">
              Propriété intellectuelle
            </h2>
            <p>
              © C33 2026. Tous droits réservés. L&apos;ensemble des contenus
              (textes, images, identité visuelle) publiés sur c33zine.com est
              protégé par le droit d&apos;auteur. Toute reproduction, même
              partielle, est soumise à autorisation écrite préalable de
              l&apos;éditeur.
            </p>
          </section>
        </div>
      </div>
    </article>
  );
}
