import type { Metadata } from "next";
import {
  Inter,
  Noto_Serif_SC,
  Fraunces,
  Bodoni_Moda,
  Space_Mono,
} from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const notoSerifSC = Noto_Serif_SC({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-noto-serif-sc",
});

// Didone display face — high-contrast serif that matches the C33 wordmark and
// gives the masthead, headlines and drop caps the look of a French revue.
const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
  style: ["normal", "italic"],
  weight: ["400", "500", "600", "700"],
  adjustFontFallback: false,
  fallback: ["Didot", "Bodoni MT", "Times New Roman", "serif"],
});

// Text serif for French reading prose (Latin, not a CJK serif).
const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-serif",
  axes: ["opsz", "SOFT"],
  style: ["normal", "italic"],
  adjustFontFallback: false,
  fallback: ["EB Garamond", "Georgia", "serif"],
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: {
    default:
      "C33 — Revue indépendante du goût et de l'art de vivre, entre Paris et Shanghai",
    template: "%s — C33",
  },
  description:
    "C33 décode le goût, les récits de marque et l'art de vivre, à travers la distance et le lien entre la France et la Chine.",
  metadataBase: new URL("https://c33zine.com"),
  alternates: {
    canonical: "/",
    types: {
      "application/rss+xml": "https://c33zine.com/feed.xml",
    },
  },
  openGraph: {
    title: "C33",
    description:
      "C33 décode le goût, les récits de marque et l'art de vivre, à travers la distance et le lien entre la France et la Chine.",
    url: "https://c33zine.com",
    siteName: "C33",
    locale: "fr_FR",
    alternateLocale: ["zh_CN"],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="fr"
      className={`${inter.variable} ${notoSerifSC.variable} ${bodoni.variable} ${fraunces.variable} ${spaceMono.variable}`}
    >
      <body
        className="min-h-screen flex flex-col"
        data-lang-mode="fr"
        suppressHydrationWarning
      >
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
