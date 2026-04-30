import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "GSA Traders | Quality Seafood Wholesale, Processing & Export | Cape Town",
    template: "%s | GSA Traders",
  },
  description:
    "GSA Traders is an established South African seafood wholesaler, processor, importer, exporter, and distributor based in Cape Town. Supplying quality seafood to local and international markets since 1989.",
  keywords: [
    "seafood wholesaler South Africa",
    "Cape Town seafood supplier",
    "seafood exporter South Africa",
    "seafood processor Cape Town",
    "wholesale fish supplier",
    "GSA Traders",
    "seafood distributor",
    "hake supplier",
    "squid exporter",
  ],
  openGraph: {
    siteName: "GSA Traders",
    locale: "en_ZA",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full`}>
      <body className="min-h-full flex flex-col text-navy-500 bg-white antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
