import Link from "next/link";
import type { Metadata } from "next";
import { getAllArticles } from "@/lib/articles";

export const metadata: Metadata = {
  title: "Contributeurs",
  description:
    "Les contributeurs de C33 — la revue trimestrielle franco-chinoise.",
  alternates: { canonical: "/contributeurs" },
};

type Contributor = {
  name: string;
  role: string;
  roleCn: string;
  bioFr: string;
  bio: string;
};

const contributors: Contributor[] = [
  {
    name: "Kairos Zhang",
    role: "Rédactrice en chef · Fondatrice",
    roleCn: "主编 · 创始人",
    bioFr:
      "Observatrice du goût et de l'art de vivre entre la Chine et la France, à la tête de C33 et de Modezine. Basée à Paris, elle écrit sur les mécanismes réels qui se jouent sous la surface du goût.",
    bio: "中法品味与生活方式的观察者,C33 与 Modezine 的主理人。常驻巴黎,书写品味表面之下的实际机制。",
  },
];

export default function ContributeursPage() {
  const all = getAllArticles();

  return (
    <div>
      <div className="border-b border-black">
        <div className="px-4 md:px-8 h-9 flex items-center justify-between font-sans text-[10px] uppercase tracking-[0.18em]">
          <span>C33 — Contributeurs</span>
          <span className="hidden md:inline font-display italic normal-case tracking-normal">
            Contributeurs<span lang="zh-CN"> / 撰稿人</span>
          </span>
          <span>2026</span>
        </div>
      </div>

      <header className="border-b border-black px-6 md:px-10 py-16 md:py-24 text-center">
        <div className="font-sans text-[10px] uppercase tracking-[0.22em] mb-6">
          — Contributeurs —
        </div>
        <h1 className="font-display font-medium text-[44px] md:text-[88px] leading-[0.95] tracking-[-0.02em]">
          Qui écrit C33
        </h1>
        <p className="font-display italic text-[16px] md:text-[18px] mt-6 max-w-[560px] mx-auto">
          C33 est une revue ouverte aux regards extérieurs. La rédaction lit
          toutes les propositions.
        </p>
      </header>

      <section className="px-6 md:px-10 py-14 md:py-20">
        <div className="max-w-[820px] mx-auto">
          {contributors.map((c) => {
            const pieces = all.filter((a) => a.author === c.name);
            return (
              <div key={c.name} className="border-t border-black py-10 md:py-14">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                  <div className="md:col-span-4">
                    <h2 className="font-display font-medium text-[28px] md:text-[36px] leading-[1.05] tracking-[-0.01em]">
                      {c.name}
                    </h2>
                    <div className="font-sans text-[10px] uppercase tracking-[0.18em] mt-3">
                      {c.role}
                    </div>
                    <div
                      className="font-serif text-[13px] text-neutral-600 mt-1"
                      lang="zh-CN"
                    >
                      {c.roleCn}
                    </div>
                  </div>
                  <div className="md:col-span-8">
                    <p
                      className="font-serif text-[16px] md:text-[17px] leading-[1.85]"
                      lang="fr"
                    >
                      {c.bioFr}
                    </p>
                    <p
                      className="font-serif text-[16px] md:text-[17px] leading-[1.85] mt-3"
                      lang="zh-CN"
                    >
                      {c.bio}
                    </p>
                    {pieces.length > 0 && (
                      <ul className="mt-6 space-y-2">
                        {pieces.map((p) => (
                          <li key={p.slug}>
                            <Link
                              href={`/article/${p.slug}`}
                              className="font-display italic text-[17px] md:text-[19px] hover:underline underline-offset-4 decoration-1"
                            >
                              {p.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
          <div className="border-t border-black" />
        </div>

        <div className="max-w-[560px] mx-auto text-center mt-16">
          <p className="font-display italic text-[18px] md:text-[20px] leading-[1.4] mb-4">
            Vous souhaitez écrire pour C33 ?
          </p>
          <Link
            href="/pitch"
            className="font-sans text-[11px] uppercase tracking-[0.18em] underline underline-offset-4"
          >
            Voir les modalités de proposition →
          </Link>
        </div>
      </section>
    </div>
  );
}
