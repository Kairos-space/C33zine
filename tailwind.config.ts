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
      },
      colors: {
        ink: "#000000",
        paper: "#FFFFFF",
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
