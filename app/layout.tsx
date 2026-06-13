import type { Metadata } from "next";
import {
  Inter,
  Noto_Serif_SC,
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

const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-bodoni",
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  adjustFontFallback: false,
  fallback: ["Bodoni 72", "Didot", "Times New Roman", "serif"],
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "C33 — 中法时尚与品牌叙事季刊",
    template: "%s — C33",
  },
  description:
    "C33 décode les logiques de l'industrie de la mode et des récits de marque, à travers la distance et le lien entre la France et la Chine.",
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
      "C33 décode les logiques de l'industrie de la mode et des récits de marque, à travers la distance et le lien entre la France et la Chine.",
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
      lang="zh-CN"
      className={`${inter.variable} ${notoSerifSC.variable} ${bodoni.variable} ${spaceMono.variable}`}
    >
      <body className="min-h-screen flex flex-col">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
