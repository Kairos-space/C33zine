"use client";

import { useState } from "react";

/**
 * Newsletter sign-up.
 *
 * Production: set NEXT_PUBLIC_NEWSLETTER_ENDPOINT to a URL that accepts
 * a POST body { email }. Compatible with Buttondown (free, 100 subs):
 *
 *   NEXT_PUBLIC_NEWSLETTER_ENDPOINT="https://buttondown.email/api/emails/embed-subscribe/<USERNAME>"
 *
 * or Substack (https://your-pub.substack.com/api/v1/free) or any custom
 * endpoint. If the env var is unset, the form falls back to opening the
 * user's mail client at contact@c33zine.com.
 *
 * `compact` renders a left-aligned, frameless variant for use inside a
 * column (e.g. the homepage "About + Subscribe" band); the default renders
 * a full centered section.
 */
const ENDPOINT = process.env.NEXT_PUBLIC_NEWSLETTER_ENDPOINT;

type State = "idle" | "loading" | "ok" | "error";

export default function Newsletter({ compact = false }: { compact?: boolean }) {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<State>("idle");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;

    // Fallback: no endpoint configured → mailto
    if (!ENDPOINT) {
      const subject = encodeURIComponent("Abonnement C33");
      const body = encodeURIComponent(
        `Je souhaite être prévenu(e) de la parution du prochain numéro.\n\nE-mail : ${email}`,
      );
      window.location.href = `mailto:contact@c33zine.com?subject=${subject}&body=${body}`;
      setState("ok");
      return;
    }

    setState("loading");
    setErrorMsg(null);
    try {
      // Buttondown's embed-subscribe endpoint expects form-encoded data
      // and doesn't allow CORS, so we use no-cors mode. The request still
      // reaches the server even if the browser cannot read the response.
      const isButtondown = ENDPOINT.includes("buttondown.email");
      if (isButtondown) {
        const body = new URLSearchParams({ email });
        await fetch(ENDPOINT, {
          method: "POST",
          mode: "no-cors",
          body,
        });
        setState("ok");
        setEmail("");
      } else {
        const res = await fetch(ENDPOINT, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email }),
        });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        setState("ok");
        setEmail("");
      }
    } catch (err) {
      setState("error");
      setErrorMsg(err instanceof Error ? err.message : "Erreur réseau");
    }
  }

  const inner =
    state === "ok" ? (
      <p className="font-display italic text-[18px]" lang="fr">
        Merci — votre abonnement est enregistré.{" "}
        <span lang="zh-CN" className="not-italic font-serif text-muted">
          感谢订阅。
        </span>
      </p>
    ) : (
      <>
        <form
          onSubmit={handleSubmit}
          className={`flex flex-col sm:flex-row gap-3 max-w-[460px] ${
            compact ? "" : "mx-auto"
          }`}
        >
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="votre@email.com"
            aria-label="E-mail"
            disabled={state === "loading"}
            className="flex-1 border border-line bg-transparent px-4 h-12 font-mono text-[12px] tracking-[0.04em] placeholder:text-muted focus:outline-none focus:border-klein disabled:opacity-50"
          />
          <button
            type="submit"
            disabled={state === "loading"}
            className="border border-klein bg-klein text-white h-12 px-6 font-mono text-[11px] uppercase tracking-[0.18em] hover:bg-transparent hover:text-klein transition-colors disabled:opacity-50"
          >
            {state === "loading" ? "..." : "S'abonner"}
          </button>
        </form>
        {state === "error" && errorMsg && (
          <p className="mt-4 font-mono text-[11px] text-red-600">{errorMsg}</p>
        )}
      </>
    );

  if (compact) {
    return (
      <div className="no-print">
        <div className="font-mono text-[11px] uppercase tracking-[0.3em] text-klein mb-6">
          <span lang="fr">Newsletter</span>
          <span lang="zh-CN"> / 订阅</span>
        </div>
        <p
          className="font-display italic text-[22px] md:text-[28px] leading-[1.3] mb-3"
          lang="fr"
        >
          Une lettre entre Paris et Shanghai.
        </p>
        <p
          className="font-serif text-[15px] md:text-[16px] text-muted mb-8 max-w-[420px]"
          lang="zh-CN"
        >
          每季一封。新刊上线时,我们会通知你。
        </p>
        {inner}
      </div>
    );
  }

  return (
    <section className="border-t border-line no-print">
      <div className="px-6 md:px-10 py-16 md:py-24 text-center max-w-[680px] mx-auto">
        <div className="inline-flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.3em] text-klein mb-7">
          <span aria-hidden className="h-px w-6 bg-klein" />
          Newsletter
          <span aria-hidden className="h-px w-6 bg-klein" />
        </div>
        <p
          className="font-display italic text-[24px] md:text-[34px] leading-[1.3] mb-3"
          lang="fr"
        >
          Le prochain numéro paraît à l&apos;été 2026.
        </p>
        <p
          className="font-serif text-[15px] md:text-[16px] text-muted mb-9"
          lang="zh-CN"
        >
          留下邮箱,下一期上线时我们会通知你。
        </p>
        {inner}
      </div>
    </section>
  );
}
