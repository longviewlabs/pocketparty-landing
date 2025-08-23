import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SiteHeader from "@/components/site-header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://pocketparty.app"),
  title: "Pocket Party – 150+ Social Games for Real-Life Fun",
  description:
    "Pocket Party helps friends, families, and teams connect offline with 150+ social games in 16 languages. Free, ad-free, and trusted by 1.4M+ players.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    url: "https://pocketparty.app/",
    title: "Pocket Party – 150+ Social Games for Real-Life Fun",
    description:
      "Pocket Party helps friends, families, and teams connect offline with 150+ social games in 16 languages. Free, ad-free, and trusted by 1.4M+ players.",
    siteName: "Pocket Party",
    images: [
      {
        url: "/twitter-card.jpg",
        width: 1200,
        height: 630,
        alt: "Friends playing Pocket Party together in real life",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pocket Party – 150+ Social Games for Real-Life Fun",
    description:
      "Pocket Party helps friends, families, and teams connect offline with 150+ social games in 16 languages. Free, ad-free, and trusted by 1.4M+ players.",
    images: {
      url: "/twitter-card.jpg",
      alt: "Friends playing Pocket Party together offline in real life"
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SiteHeader />
        {children}
      </body>
    </html>
  );
}
