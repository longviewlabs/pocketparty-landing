"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = [
      { id: "about", key: "about" },
    ];
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );
    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  const [open, setOpen] = useState(false);

  const NavLinks = () => (
    <ul className="flex items-center gap-6">
      <li>
                  <a
            href="#about"
            aria-current={active === "about" ? "page" : undefined}
            className="text-base text-muted-foreground hover:text-foreground focus-visible:outline-2 focus-visible:outline-ring rounded px-2 py-1"
          >
            About
          </a>
      </li>

      <li>
        <Link
          href="/press"
          className="text-base text-muted-foreground hover:text-foreground focus-visible:outline-2 focus-visible:outline-ring rounded px-2 py-1"
        >
          Press
        </Link>
      </li>
    </ul>
  );

  return (
    <header
      role="banner"
      className="sticky top-0 z-50 border-b backdrop-blur bg-background/70 data-[scrolled=true]:bg-background"
      data-scrolled={scrolled}
    >
      <nav aria-label="Primary" className="mx-auto max-w-6xl px-4 h-[70px] flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2" aria-label="Pocket Party Home">
          <Logo />
        </Link>

        <div className="hidden md:flex items-center gap-6">
          <NavLinks />
                              <a href="https://game.pocketparty.app/" target="_blank" rel="noreferrer">
                      <Button size="default" className="bg-[#FFF845] text-black font-bold hover:bg-[#FFF845]/90 rounded-full px-6 py-2">Play Now</Button>
                    </a>
        </div>

        <button
          aria-label="Open menu"
          className="md:hidden p-2 rounded focus-visible:outline-2 focus-visible:outline-ring"
          onClick={() => setOpen(true)}
        >
          <Menu className="h-5 w-5" />
        </button>
      </nav>

      {open ? (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 md:hidden"
          onClick={() => setOpen(false)}
        >
          <div className="absolute inset-0 bg-black/40" />
          <div
            className="absolute right-0 top-0 h-full w-80 max-w-[85%] bg-background border-l p-6 flex flex-col gap-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-sm font-medium">Menu</div>
            <div className="flex flex-col gap-4">
              <a href="#about" className="text-base py-1" onClick={() => setOpen(false)}>About</a>

              <Link href="/press" className="text-base py-1" onClick={() => setOpen(false)}>Press</Link>
            </div>
            <div className="mt-auto">
              <a href="https://game.pocketparty.app/" target="_blank" rel="noreferrer" onClick={() => setOpen(false)}>
                <Button className="w-full bg-[#FFF845] text-black font-bold hover:bg-[#FFF845]/90 rounded-full px-6 py-3">Play Now</Button>
              </a>
            </div>
          </div>
        </div>
      ) : null}

      {/* Mobile sticky bottom CTA */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t bg-background/95 p-3 md:hidden">
        <div className="mx-auto max-w-6xl px-4">
          <a href="https://game.pocketparty.app/" target="_blank" rel="noreferrer">
            <Button className="w-full bg-[#FFF845] text-black font-bold hover:bg-[#FFF845]/90 rounded-full px-6 py-3">Play Now</Button>
          </a>
        </div>
      </div>
    </header>
  );
}

export default SiteHeader;


