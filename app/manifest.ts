import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "C33 — Revue indépendante, Paris ⇄ Shanghai",
    short_name: "C33",
    description:
      "Revue indépendante bilingue franco-chinoise sur le goût, les récits de marque et l'art de vivre.",
    start_url: "/",
    display: "standalone",
    background_color: "#faf9f4",
    theme_color: "#faf9f4",
    lang: "fr",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
