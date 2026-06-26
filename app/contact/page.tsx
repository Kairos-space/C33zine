import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Écrire à C33 — contact, pitch et partenariats.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <article>
      <div className="border-b border-black">
        <div className="px-4 md:px-8 h-9 flex items-center justify-between font-sans text-[10px] uppercase tracking-[0.18em]">
          <span>C33 — Correspondance</span>
          <span className="hidden md:inline font-display italic normal-case tracking-normal">
            Contact / 联系
          </span>
          <span>2026</span>
        </div>
      </div>

      <header className="px-6 md:px-10 pt-16 md:pt-24 pb-12 text-center border-b border-black">
        <div className="font-sans text-[10px] uppercase tracking-[0.22em] mb-6">
          — Correspondance —
        </div>
        <h1 className="font-display font-medium text-[44px] md:text-[88px] leading-[0.95] tracking-[-0.02em] mb-8">
          Écrire à C33
        </h1>
        <p className="font-display italic text-[20px] md:text-[26px] leading-[1.4] max-w-[640px] mx-auto">
          Une lettre, un pitch, une proposition — la rédaction lit tout.
        </p>
      </header>

      <div className="px-6 md:px-10 py-16 md:py-24">
        <div className="max-w-[720px] mx-auto space-y-14">
          <div className="text-center border-b border-black pb-10">
            <div className="font-sans text-[10px] uppercase tracking-[0.22em] mb-3">
              Rédaction — Général
            </div>
            <a
              href="mailto:contact@c33zine.com"
              className="font-display italic text-[28px] md:text-[40px] underline underline-offset-[6px] decoration-1"
            >
              contact@c33zine.com
            </a>
          </div>

          <div className="grid md:grid-cols-2 gap-10 border-b border-black pb-10">
            <div>
              <div className="font-sans text-[10px] uppercase tracking-[0.22em] mb-3">
                Pitch / 投稿
              </div>
              <p lang="fr" className="font-serif text-[17px] leading-[1.8]">
                Pour une proposition de sujet ou une collaboration éditoriale,
                consultez nos{" "}
                <a href="/pitch" className="underline underline-offset-4">
                  modalités de proposition
                </a>
                {" "}ou indiquez la mention{" "}
                <span className="font-mono text-[14px] bg-black text-white px-1.5">
                  [PITCH]
                </span>
                {" "}en objet de votre message.
              </p>
              <p lang="zh-CN" className="font-serif text-[17px] leading-[1.8]">
                选题提案与撰稿合作,请见{" "}
                <a href="/pitch" className="underline underline-offset-4">
                  投稿指南
                </a>
                ;或于邮件主题注明{" "}
                <span className="font-mono text-[14px] bg-black text-white px-1.5">
                  [PITCH]
                </span>
                。
              </p>
            </div>
            <div>
              <div className="font-sans text-[10px] uppercase tracking-[0.22em] mb-3">
                Presse & partenariats
              </div>
              <p lang="fr" className="font-serif text-[17px] leading-[1.8]">
                Pour toute demande presse ou partenariat de marque, indiquez la
                mention{" "}
                <span className="font-mono text-[14px] bg-black text-white px-1.5">
                  [PARTNERSHIP]
                </span>
                {" "}en objet de votre message.
              </p>
              <p lang="zh-CN" className="font-serif text-[17px] leading-[1.8]">
                媒体咨询与品牌合作,请于邮件主题注明{" "}
                <span className="font-mono text-[14px] bg-black text-white px-1.5">
                  [PARTNERSHIP]
                </span>
                。
              </p>
            </div>
          </div>

          <div className="text-center font-sans text-[10px] uppercase tracking-[0.22em] text-neutral-600">
            Paris — France
          </div>
        </div>
      </div>
    </article>
  );
}
