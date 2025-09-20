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
  title: {
    default: "Pocket Party – 150+ Social Games for Real-Life Fun",
    template: "%s | Pocket Party",
  },
  description:
    "Pocket Party helps friends, families, and teams connect offline with 150+ social games in 16 languages. Free, ad-free, and trusted by 1.4M+ players worldwide.",
  keywords: [
    "party games",
    "social games",
    "offline games",
    "group games",
    "family games",
    "ice breaker games",
    "team building",
    "friendship games",
    "real life games",
    "mobile games",
    "free games",
    "ad-free games",
    "conversation starters",
    "get to know you games",
    "party activities",
  ],
  authors: [{ name: "Long View Labs Limited", url: "https://pocketparty.app" }],
  creator: "Long View Labs Limited",
  publisher: "Long View Labs Limited",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  manifest: "/manifest.json",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    url: "https://pocketparty.app/",
    title: "Pocket Party – 150+ Social Games for Real-Life Fun",
    description:
      "Pocket Party helps friends, families, and teams connect offline with 150+ social games in 16 languages. Free, ad-free, and trusted by 1.4M+ players worldwide.",
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
    alternateLocale: [
      "es_ES",
      "fr_FR",
      "de_DE",
      "it_IT",
      "pt_BR",
      "ja_JP",
      "ko_KR",
      "zh_CN",
      "zh_TW",
      "ar_SA",
      "hi_IN",
      "ru_RU",
      "pl_PL",
      "nl_NL",
      "sv_SE",
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pocket Party – 150+ Social Games for Real-Life Fun",
    description:
      "Pocket Party helps friends, families, and teams connect offline with 150+ social games in 16 languages. Free, ad-free, and trusted by 1.4M+ players worldwide.",
    images: {
      url: "/twitter-card.jpg",
      alt: "Friends playing Pocket Party together offline in real life",
    },
    creator: "@pocketparty",
    site: "@pocketparty",
  },
  alternates: {
    canonical: "https://pocketparty.app",
  },
  category: "entertainment",
  verification: {
    google: "", // Add your Google Search Console verification code
    // yandex: "", // Add if targeting Russian market
    // bing: "", // Add Bing verification if needed
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Pocket Party",
    alternateName: ["PocketParty", "Pocket Party App"],
    url: "https://pocketparty.app",
    logo: "https://pocketparty.app/pocket-party-logo-wide.png",
    description:
      "Pocket Party helps friends, families, and teams connect offline with 150+ social games in 16 languages. Free, ad-free, and trusted by 1.4M+ players worldwide.",
    foundingDate: "2023",
    founder: {
      "@type": "Person",
      name: "Julian Stewart",
    },
    numberOfEmployees: "4",
    knowsAbout: [
      "Party Games",
      "Social Games",
      "Offline Games",
      "Group Activities",
      "Team Building",
      "Family Entertainment",
    ],
    applicationCategory: "Entertainment",
    operatingSystem: ["iOS", "Android", "Web"],
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      ratingCount: "1400000",
    },
    sameAs: [
      "https://www.instagram.com/pocketpartyapp/",
      "https://www.tiktok.com/@pocketparty.app",
      "https://www.facebook.com/PocketPartyApp/",
      "https://www.youtube.com/@pocketpartyapp",
      "https://apps.apple.com/lv/app/pocket-party-games/id6446099729",
      "https://play.google.com/store/apps/details?id=app.pocketparty.twa&hl=en_US",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      email: "julian@pocketparty.app",
      contactType: "customer service",
      availableLanguage: [
        "English",
        "Spanish",
        "French",
        "German",
        "Italian",
        "Portuguese",
        "Japanese",
        "Korean",
        "Chinese",
        "Arabic",
        "Hindi",
        "Russian",
        "Polish",
        "Dutch",
        "Swedish",
      ],
    },
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SiteHeader />
        {children}
      </body>
    </html>
  );
}
