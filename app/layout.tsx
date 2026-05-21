import type { Metadata } from "next";
import { Inter, Noto_Serif_SC } from "next/font/google";
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

export const metadata: Metadata = {
  title: {
    default: "C33 — 中法时尚与品牌叙事季刊",
    template: "%s — C33",
  },
  description:
    "C33 décode les logiques de l'industrie de la mode et des récits de marque, à travers la distance et le lien entre la France et la Chine.",
  metadataBase: new URL("https://c33zine.com"),
  openGraph: {
    title: "C33",
    description:
      "解码时尚产业与品牌叙事的逻辑,在中法之间的距离与连接里。",
    url: "https://c33zine.com",
    siteName: "C33",
    locale: "zh_CN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN" className={`${inter.variable} ${notoSerifSC.variable}`}>
      <body className="min-h-screen flex flex-col">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
