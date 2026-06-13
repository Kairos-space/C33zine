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
          "var(--font-bodoni)",
          "Bodoni 72",
          "Didot",
          "Times New Roman",
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
        // Dark "couture × code" system
        paper: "#0a0a0b",
        ink: "#f3f1ea",
        line: "#26262a",
        muted: "#7d7c84",
        klein: "#1f2bff",
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
