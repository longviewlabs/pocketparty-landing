import Image from "next/image";
import Link from "next/link";

import StoreBadges from "@/components/StoreBadges";
import Benefits from "@/components/Benefits";
import Testimonials from "@/components/Testimonials";
import HeroVideo from "@/components/HeroVideo";
import Pill from "@/components/Pill";




export default function Home() {
  const currentYear = new Date().getFullYear();
  return (
    <div className="font-sans">
      <main className="mx-auto max-w-6xl px-4 py-12 space-y-20">
        {/* HERO */}
        <section className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              <span className="text-[#FFF845] font-extrabold">The world&apos;s best social games</span> <span className="italic">— all in one app.</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              150+ free games and activities — powering the world&apos;s largest offline social play movement for real connection.
            </p>
            {/* Desktop: Show badges and pills here */}
            <div className="hidden md:block" id="download">
              <StoreBadges />
            </div>
            <div className="hidden md:flex flex-wrap gap-3">
              <Pill icon={<svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>}>
                1.4M+ followers
              </Pill>
              <Pill icon={<svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>}>
                150+ games
              </Pill>
              <Pill icon={<svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>}>
                16 languages
              </Pill>
            </div>
          </div>
          <div className="space-y-6">
            <HeroVideo />
            {/* Mobile: Show badges and pills under the video */}
            <div className="md:hidden space-y-4">
              <div id="download-mobile">
                <StoreBadges />
              </div>
              <div className="flex flex-wrap gap-3">
                <Pill icon={<svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>}>
                  1.4M+ followers
                </Pill>
                <Pill icon={<svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>}>
                  150+ games
                </Pill>
                <Pill icon={<svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>}>
                  16 languages
                </Pill>
              </div>
            </div>
          </div>
        </section>

        {/* BENEFITS */}
        <Benefits />

        {/* TESTIMONIALS */}
        <Testimonials />

        {/* ABOUT / MISSION */}
        <section id="about" className="mx-auto max-w-6xl px-4 md:px-6 scroll-mt-24">
          <div className="text-center space-y-2">
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
              Why we built Pocket Party
            </h2>
            <p className="mt-2 text-muted-foreground">
              Our mission is simple: help people put their phones down and reconnect through real play.
            </p>
          </div>
          
          <div className="mt-8 grid md:grid-cols-2 gap-8 items-center">
            {/* Left column: Photos */}
            <div className="space-y-4">
              <Image
                src="/photo-game1.jpg"
                alt="Friends playing Pocket Party game together"
                width={600}
                height={400}
                className="w-full h-auto rounded-xl object-cover"
                loading="lazy"
              />
              <Image
                src="/photo-game2.jpg"
                alt="Group enjoying offline activities with Pocket Party"
                width={600}
                height={400}
                className="w-full h-auto rounded-xl object-cover"
                loading="lazy"
              />
            </div>
            
            {/* Right column: Mission copy */}
            <div className="space-y-8 text-base md:text-lg leading-relaxed">
              <p>
                <span className="font-bold text-[#FCEA10]">Scrolling isn&apos;t connection.</span><br />
                We built Pocket Party to bring people back together through play. In a world of rising loneliness and endless feeds, we offer a simpler, more joyful alternative.
              </p>
              <p>
                <span className="font-bold text-[#FCEA10]">Democratizing play for everyone.</span><br />
                150+ of the world&apos;s best social games — free & ad-free, in 16 languages. Play instantly on web or app, no downloads or equipment required. Joy isn&apos;t locked behind paywalls, and everything is designed for less screen time and more laughter.
              </p>
              <p>
                <span className="font-bold text-[#FCEA10]">The world&apos;s largest offline play movement.</span><br />
                Millions across 150+ countries are choosing less scrolling and more living. By making play free and accessible to anyone, anywhere, Pocket Party is fueling a global shift toward real connection, belonging, and community.
              </p>
            </div>
          </div>
        </section>

        {/* COMMUNITY CTA */}
        <section id="play" className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-white">Join the Offline Revolution</h2>
            <p className="text-muted-foreground">
              The best moments aren&apos;t on a feed — they&apos;re around you.<br />
              Millions have already made the switch. It&apos;s your turn.
            </p>
            <div className="flex items-center gap-4 flex-wrap">
              <StoreBadges />
            </div>
          </div>
          <figure className="rounded-2xl border shadow-sm p-4 bg-card">
            <video
              src="/looped-video-bottom.mp4"
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              poster="/video-thumb.jpg"
              controls={false}
              disablePictureInPicture
              controlsList="nodownload nofullscreen noremoteplayback"
              className="w-full h-64 object-cover rounded-xl shadow-lg pointer-events-none select-none [&::-webkit-media-controls]:hidden [&::-webkit-media-controls-panel]:hidden [&::-webkit-media-controls-play-button]:hidden [&::-webkit-media-controls-start-playback-button]:hidden"
              aria-hidden="true"
            />
            <figcaption className="text-sm text-muted-foreground mt-2">
              The best memories aren&apos;t online. Start playing today.
            </figcaption>
          </figure>
        </section>

      </main>
      

      
      {/* FOOTER */}
      <footer className="footer relative bg-[#FFF845]">
        {/* Yellow wavy background shape - tiled horizontally */}
        <div 
          className="footer-wave"
        />
        
        {/* Footer content */}
        <div className="absolute top-14 left-0 right-0 h-max w-full bg-[#FFF845] z-10 text-black pt-20 pb-28 md:pb-12">
          <div className="mx-auto max-w-6xl px-4 sm:px-8">
            {/* Mobile: Stack vertically, Desktop: 3 columns */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-start">
              
              {/* Left column - Legal links */}
              <div className="space-y-3 md:space-y-4 text-center md:text-left">
                <a 
                  href="https://pocketparty.app/terms-of-service" 
                  target="_blank"
                  rel="noreferrer"
                  className="block text-lg font-medium hover:underline"
                >
                  Terms & Conditions
                </a>
                <a 
                  href="https://pocketparty.app/privacy-policy" 
                  target="_blank"
                  rel="noreferrer"
                  className="block text-lg font-medium hover:underline"
                >
                  Privacy Policy
                </a>
              </div>
              
              {/* Center column - Contact */}
              <div className="space-y-4 md:space-y-6 text-center">
                <p className="text-lg font-medium">Say hi 👋</p>
                <Link 
                  href="mailto:hey@pocketparty.app" 
                  className="block text-lg font-medium underline hover:no-underline"
                >
                  hey@pocketparty.app
                </Link>
              </div>
              
              {/* Right column - Social media */}
              <div className="text-center md:text-right space-y-4">
                <h3 className="follow-title">Follow us for more</h3>
                
                {/* Sub-caption */}
                <p className="text-sm md:text-base text-black/70 mb-4 md:mb-6">
                  Join 1.4M followers on social
                </p>
                
                <div className="social-row justify-center md:justify-end">
                  <a 
                    href="https://www.instagram.com/pocketpartyapp/" 
                    aria-label="Instagram"
                    target="_blank"
                    rel="noreferrer"
                    className="
                      group relative inline-flex items-center justify-center
                      transition-transform duration-200 ease-out
                      hover:scale-[1.16] focus-visible:scale-[1.16]
                      outline-none
                      motion-reduce:transition-none
                    "
                  >
                    {/* Glow overlay */}
                    <span
                      className="
                        absolute inset-0 rounded-full
                        bg-purple-500/40 blur-[16px]
                        opacity-0 transition-opacity duration-200
                        group-hover:opacity-100 group-focus-visible:opacity-100
                        pointer-events-none
                      "
                      aria-hidden="true"
                    />
                    <Image className="social-icon relative z-10" src="/Insta.svg" alt="Instagram" width={24} height={24} />
                  </a>
                  <a 
                    href="https://www.tiktok.com/@pocketparty.app" 
                    aria-label="TikTok"
                    target="_blank"
                    rel="noreferrer"
                    className="
                      group relative inline-flex items-center justify-center
                      transition-transform duration-200 ease-out
                      hover:scale-[1.16] focus-visible:scale-[1.16]
                      outline-none
                      motion-reduce:transition-none
                    "
                  >
                    {/* Glow overlay */}
                    <span
                      className="
                        absolute inset-0 rounded-full
                        bg-purple-500/40 blur-[16px]
                        opacity-0 transition-opacity duration-200
                        group-hover:opacity-100 group-focus-visible:opacity-100
                        pointer-events-none
                      "
                      aria-hidden="true"
                    />
                    <Image className="social-icon relative z-10" src="/TT.svg" alt="TikTok" width={24} height={24} />
                  </a>
                  <a 
                    href="https://www.facebook.com/PocketPartyApp/" 
                    aria-label="Facebook"
                    target="_blank"
                    rel="noreferrer"
                    className="
                      group relative inline-flex items-center justify-center
                      transition-transform duration-200 ease-out
                      hover:scale-[1.16] focus-visible:scale-[1.16]
                      outline-none
                      motion-reduce:transition-none
                    "
                  >
                    {/* Glow overlay */}
                    <span
                      className="
                        absolute inset-0 rounded-full
                        bg-purple-500/40 blur-[16px]
                        opacity-0 transition-opacity duration-200
                        group-hover:opacity-100 group-focus-visible:opacity-100
                        pointer-events-none
                      "
                      aria-hidden="true"
                    />
                    <Image className="social-icon relative z-10" src="/FB.svg" alt="Facebook" width={24} height={24} />
                  </a>
                  <a 
                    href="https://www.youtube.com/@pocketpartyapp" 
                    aria-label="YouTube"
                    target="_blank"
                    rel="noreferrer"
                    className="
                      group relative inline-flex items-center justify-center
                      transition-transform duration-200 ease-out
                      hover:scale-[1.16] focus-visible:scale-[1.16]
                      outline-none
                      motion-reduce:transition-none
                    "
                  >
                    {/* Glow overlay */}
                    <span
                      className="
                        absolute inset-0 rounded-full
                        bg-purple-500/40 blur-[16px]
                        opacity-0 transition-opacity duration-200
                        group-hover:opacity-100 group-focus-visible:opacity-100
                        pointer-events-none
                      "
                      aria-hidden="true"
                    />
                    <Image className="social-icon relative z-10" src="/YT.svg" alt="YouTube" width={24} height={24} />
                  </a>
                </div>
              </div>
              
            </div>
            
            {/* Copyright centered at bottom */}
            <div className="text-center mt-12 md:mt-16">
              <p className="text-lg">© Pocket Party {currentYear}</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
