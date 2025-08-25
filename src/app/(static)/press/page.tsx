import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Download, Mail, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Pocket Party — Press",
  description: "Free, ad-free offline social games played by millions across 150+ countries. Press materials, logos, screenshots, and contact.",
  openGraph: {
    title: "Pocket Party — Press",
    description: "Free, ad-free offline social games played by millions across 150+ countries. Press materials, logos, screenshots, and contact.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pocket Party — Press",
    description: "Free, ad-free offline social games played by millions across 150+ countries. Press materials, logos, screenshots, and contact.",
  },
};

// JSON-LD Schema
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Pocket Party",
  "url": "https://pocketparty.app",
  "sameAs": [
    "https://www.instagram.com/pocketpartyapp/",
    "https://www.tiktok.com/@pocketparty.app",
    "https://www.facebook.com/PocketPartyApp/",
    "https://www.youtube.com/@pocketpartyapp"
  ]
};

export default function PressPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      
      <main className="min-h-screen bg-[#9F32E5] text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-20 pb-16">
          <div className="mx-auto max-w-6xl px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-white">
                  Pocket Party: the world&apos;s largest offline social play movement
                </h1>
                <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                  150+ free, ad-free games built to spark laughter and real connection — played by millions across 150+ countries.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    asChild
                    size="lg"
                    className="bg-[#FFF845] text-black font-bold hover:bg-[#FFF845]/90 rounded-full px-8 py-3"
                  >
                    <a 
                      href="/PocketParty-PressKit-2025.zip" 
                      download
                      className="flex items-center gap-2"
                    >
                      <Download className="w-5 h-5" />
                      Download Press Kit
                    </a>
                  </Button>
                  <Button 
                    asChild
                    variant="outline"
                    size="lg"
                    className="border-white/20 text-white hover:bg-white/10 rounded-full px-8 py-3"
                  >
                    <a href="mailto:julian@pocketparty.app" className="flex items-center gap-2">
                      <Mail className="w-5 h-5" />
                      Contact press
                    </a>
                  </Button>
                </div>
              </div>
              
              {/* Video Preview */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <video
                  src="/PP-Intro-Video-V1.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  poster="/video-thumb.jpg"
                  className="w-full h-64 md:h-80 object-cover"
                  aria-label="Pocket Party intro video preview"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Snapshot - Quick Facts */}
        <section className="py-16 bg-white/5">
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12 text-white">
              Snapshot
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[
                { label: "Founded", value: "2023" },
                { label: "Founded in", value: "Christchurch, New Zealand" },
                { label: "HQ", value: "Fully remote" },
                { label: "Company", value: "Long View Labs Limited" },
                { label: "Team", value: "4" },
                { label: "Languages", value: "16" },
                { label: "Countries", value: "150+" },
                { label: "Model", value: "Free & ad-free; pay-what-you-want" },
              ].map((item, index) => (
                <Card key={index} className="bg-white/10 border-white/20 text-center">
                  <CardContent className="p-4">
                    <div className="text-xs font-medium text-[#FFF845] uppercase tracking-wide mb-1">
                      {item.label}
                    </div>
                    <div className="text-sm md:text-base font-bold text-white">
                      {item.value}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Momentum - Stats */}
        <section className="py-16">
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12 text-white">
              Momentum
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { stat: "+1.5m", label: "Downloads" },
                { stat: "+250m", label: "Organic video views" },
                { stat: "10 min", label: "Avg session duration" },
                { stat: "~55k", label: "MAUs" },
                { stat: "+1.4m", label: "Social followers" },
                { stat: "+700k", label: "Email list" },
              ].map((item, index) => (
                <Card key={index} className="bg-white/10 border-white/20 text-center">
                  <CardContent className="p-6">
                    <div className="text-3xl md:text-4xl font-extrabold text-[#FFF845] mb-2">
                      {item.stat}
                    </div>
                    <div className="text-sm font-medium text-white/90">
                      {item.label}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Founder Quote */}
        <section className="py-16 bg-white/5">
          <div className="mx-auto max-w-4xl px-4">
            <Card className="bg-white/10 border-white/20">
              <CardContent className="p-8 md:p-12">
                <blockquote className="text-xl md:text-2xl font-medium text-white leading-relaxed mb-6">
                  &quot;We obsess over delivering the best possible IRL experience—ten times better than anything else—so putting our games in everyone&apos;s hands for free was the only choice that made sense.&quot;
                </blockquote>
                <cite className="text-[#FFF845] font-bold text-lg">
                  — Julian Stewart, Founder & CEO
                </cite>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* About / Boilerplate */}
        <section className="py-16">
          <div className="mx-auto max-w-4xl px-4">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-8 text-white">
              About Pocket Party
            </h2>
            <p className="text-lg leading-relaxed text-white/90">
              Pocket Party is the free, ad-free app for real-life connection—150+ social games and activities that help people laugh, bond, and belong without screens getting in the way. Founded in 2023 by Long View Labs Limited (Christchurch, NZ; fully remote), Pocket Party serves millions across 150+ countries and 16 languages with a pay-what-you-want model so anyone can join.
            </p>
          </div>
        </section>

        {/* Links & Contact */}
        <section className="py-16 bg-white/5">
          <div className="mx-auto max-w-6xl px-4">
            <div className="grid md:grid-cols-2 gap-12">
              {/* App Links */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Get the App</h3>
                <div className="space-y-4">
                  <Button 
                    asChild
                    variant="outline"
                    className="w-full justify-start border-white/20 text-white hover:bg-white/10"
                  >
                    <a href="https://apps.apple.com/lv/app/pocket-party-games/id6446099729" target="_blank" rel="noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      App Store
                    </a>
                  </Button>
                  <Button 
                    asChild
                    variant="outline"
                    className="w-full justify-start border-white/20 text-white hover:bg-white/10"
                  >
                    <a href="https://play.google.com/store/apps/details?id=app.pocketparty.twa&hl=en_US" target="_blank" rel="noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Google Play
                    </a>
                  </Button>
                  <Button 
                    asChild
                    variant="outline"
                    className="w-full justify-start border-white/20 text-white hover:bg-white/10"
                  >
                    <a href="https://game.pocketparty.app/" target="_blank" rel="noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Play on Web
                    </a>
                  </Button>
                </div>
              </div>

              {/* Press Contact */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Press Contact</h3>
                <Card className="bg-white/10 border-white/20">
                  <CardContent className="p-6">
                    <div className="mb-6">
                      <p className="text-white/90 mb-2">Press inquiries:</p>
                      <a 
                        href="mailto:julian@pocketparty.app" 
                        className="text-[#FFF845] font-medium hover:underline"
                      >
                        julian@pocketparty.app
                      </a>
                    </div>
                    
                    <div>
                      <p className="text-white/90 mb-4">Follow us:</p>
                      <div className="flex gap-4">
                        <a
                          href="https://www.instagram.com/pocketpartyapp/"
                          target="_blank"
                          rel="noreferrer"
                          className="text-white/70 hover:text-[#FFF845] transition-colors"
                          aria-label="Instagram"
                        >
                          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                          </svg>
                        </a>
                        <a
                          href="https://www.tiktok.com/@pocketparty.app"
                          target="_blank"
                          rel="noreferrer"
                          className="text-white/70 hover:text-[#FFF845] transition-colors"
                          aria-label="TikTok"
                        >
                          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                          </svg>
                        </a>
                        <a
                          href="https://www.facebook.com/PocketPartyApp/"
                          target="_blank"
                          rel="noreferrer"
                          className="text-white/70 hover:text-[#FFF845] transition-colors"
                          aria-label="Facebook"
                        >
                          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                          </svg>
                        </a>
                        <a
                          href="https://www.youtube.com/@pocketpartyapp"
                          target="_blank"
                          rel="noreferrer"
                          className="text-white/70 hover:text-[#FFF845] transition-colors"
                          aria-label="YouTube"
                        >
                          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}


