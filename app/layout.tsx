import type { Metadata } from "next";
import {
  Inter,
  Noto_Serif_SC,
  Fraunces,
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

const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
  axes: ["opsz", "SOFT"],
  style: ["normal", "italic"],
  adjustFontFallback: false,
  fallback: ["Cormorant", "EB Garamond", "Didot", "serif"],
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "C33 — 解码品味与生活方式的中法季刊",
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
      lang="zh-CN"
      className={`${inter.variable} ${notoSerifSC.variable} ${fraunces.variable} ${spaceMono.variable}`}
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
