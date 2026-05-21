import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <article className="px-6 md:px-10 py-16">
      <div className="max-w-prose mx-auto">
        <div className="font-sans text-[11px] uppercase tracking-[0.12em] mb-6">
          Contact
        </div>
        <h1 className="font-sans font-semibold text-[48px] md:text-[64px] leading-[0.95] tracking-[-0.03em] mb-12">
          Écrire à C33
        </h1>

        <div className="space-y-10">
          <div>
            <div className="font-sans text-[11px] uppercase tracking-[0.12em] mb-2">
              Général / 一般咨询
            </div>
            <a
              href="mailto:contact@c33zine.com"
              className="font-serif text-[24px] md:text-[28px] underline underline-offset-4 decoration-1"
            >
              contact@c33zine.com
            </a>
          </div>

          <div>
            <div className="font-sans text-[11px] uppercase tracking-[0.12em] mb-2">
              Pitch / 投稿
            </div>
            <p className="font-serif text-[18px] leading-[1.7]">
              暂不开放公开投稿。如有合作或选题提案,请通过上述邮箱联系,
              邮件主题请注明{" "}
              <span className="font-mono text-[15px]">[PITCH]</span>。
            </p>
          </div>

          <div>
            <div className="font-sans text-[11px] uppercase tracking-[0.12em] mb-2">
              Presse & partenariats
            </div>
            <p className="font-serif text-[18px] leading-[1.7]">
              媒体与品牌合作请联系{" "}
              <a
                href="mailto:contact@c33zine.com"
                className="underline underline-offset-4 decoration-1"
              >
                contact@c33zine.com
              </a>
              。
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}
