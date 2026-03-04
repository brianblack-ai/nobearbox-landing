import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "No Bear Box - Keep Bears Out. Keep Trash In.",
  description:
    "No Bear Box manufactures modular, painted steel bear boxes designed for residential and multi-property use in bear country. Standard models for 65- and 95-gallon cans.",
  keywords: [
    "bear resistant trash enclosure",
    "bear proof garbage can",
    "bear country property management",
    "Poconos bear protection",
    "bear resistant storage",
    "modular bear box",
  ],
  openGraph: {
    title: "No Bear Box - Keep Bears Out. Keep Trash In.",
    description:
      "Modular, painted steel bear boxes for residential and multi-property use. Built for mountain properties where bears and houses overlap.",
    url: "https://nobearbox.com",
    siteName: "No Bear Box",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "No Bear Box - Keep Bears Out. Keep Trash In.",
    description:
      "Modular, painted steel bear boxes for residential and multi-property use in bear country.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.variable}>{children}</body>
    </html>
  );
}
