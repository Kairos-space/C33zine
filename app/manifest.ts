import { brand } from "@/lib/brand";
import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: brand.title,
    short_name: "C33",
    description: brand.description,
    start_url: "/",
    display: "standalone",
    background_color: "#faf9f4",
    theme_color: "#faf9f4",
    lang: "fr",
    icons: [
      {
        src: "/icon.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
