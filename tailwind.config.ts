import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx,mdx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{md,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        serif: [
          "var(--font-noto-serif-sc)",
          "Songti SC",
          "SimSun",
          "serif",
        ],
        display: [
          "var(--font-display)",
          "Cormorant",
          "EB Garamond",
          "Didot",
          "serif",
        ],
        mono: [
          "var(--font-mono)",
          "ui-monospace",
          "SFMono-Regular",
          "monospace",
        ],
      },
      colors: {
        // Clean white system with one electric accent (per-issue overridable)
        paper: "#ffffff",
        ink: "#0e0e10",
        line: "#e6e6e6",
        muted: "#7a7a7e",
        klein: "var(--accent, #1f2bff)",
        kleinSoft: "var(--accent-soft, #eef0ff)",
      },
      maxWidth: {
        prose: "680px",
      },
      borderRadius: {
        none: "0",
        DEFAULT: "0",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
