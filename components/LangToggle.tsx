"use client";

import { useEffect, useState } from "react";

type Mode = "both" | "fr" | "cn";
const KEY = "c33-lang-mode";

function apply(mode: Mode) {
  if (typeof document === "undefined") return;
  document.body.dataset.langMode = mode;
}

export default function LangToggle() {
  const [mode, setMode] = useState<Mode>("fr");

  useEffect(() => {
    const saved = (localStorage.getItem(KEY) as Mode | null) ?? "fr";
    setMode(saved);
    apply(saved);
  }, []);

  function pick(next: Mode) {
    setMode(next);
    apply(next);
    localStorage.setItem(KEY, next);
  }

  return (
    <div
      role="radiogroup"
      aria-label="Langue d'affichage"
      className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em]"
    >
      {(
        [
          ["fr", "FR"],
          ["both", "Bilingue"],
          ["cn", "中"],
        ] as [Mode, string][]
      ).map(([k, label]) => {
        const active = mode === k;
        return (
          <button
            key={k}
            type="button"
            role="radio"
            aria-checked={active}
            onClick={() => pick(k)}
            className={`px-1.5 py-0.5 transition-colors ${
              active
                ? "text-klein border-b border-klein"
                : "text-muted hover:text-ink"
            }`}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
}
