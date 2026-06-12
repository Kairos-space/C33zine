"use client";

import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    const subject = encodeURIComponent("Abonnement C33");
    const body = encodeURIComponent(
      `Je souhaite être prévenu(e) de la parution du prochain numéro.\n\nE-mail : ${email}`,
    );
    window.location.href = `mailto:contact@c33zine.com?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <section className="border-t border-black no-print">
      <div className="px-6 md:px-10 py-14 md:py-20 text-center max-w-[680px] mx-auto">
        <div className="font-sans text-[10px] uppercase tracking-[0.22em] mb-6">
          — Newsletter —
        </div>
        <p className="font-display italic text-[22px] md:text-[30px] leading-[1.3] mb-3">
          Le prochain numéro paraît à l&apos;été 2026.
        </p>
        <p className="font-serif text-[15px] md:text-[16px] text-neutral-600 mb-8">
          留下邮箱,下一期上线时我们会通知你。
        </p>

        {sent ? (
          <p className="font-display italic text-[18px]">
            Merci — votre messagerie va s&apos;ouvrir. / 感谢,正在打开邮件。
          </p>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 max-w-[460px] mx-auto"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="votre@email.com"
              aria-label="E-mail"
              className="flex-1 border border-black bg-transparent px-4 h-11 font-sans text-[13px] tracking-[0.04em] placeholder:text-neutral-400 focus:outline-none focus:bg-black focus:text-white"
            />
            <button
              type="submit"
              className="border border-black bg-black text-white h-11 px-6 font-sans text-[11px] uppercase tracking-[0.18em] hover:bg-white hover:text-black transition-colors"
            >
              S&apos;abonner
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
