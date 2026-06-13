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
      },
      colors: {
        ink: "#16130d",
        paper: "#fbfaf7",
        line: "#e4e0d6",
        muted: "#8c887e",
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
