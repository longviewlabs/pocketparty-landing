"use client";

import Image from "next/image";
import Link from "next/link";

export function StoreBadges() {
  return (
    <div className="flex items-center justify-start gap-2 w-full">
      <Link
        href="https://apps.apple.com/lv/app/pocket-party-games/id6446099729"
        prefetch={false}
        className="inline-block transition-all duration-300 ease-out hover:scale-110 hover:shadow-lg hover:shadow-[#FFF845]/25"
        rel="nofollow"
        target="_blank"
        aria-label="Download Pocket Party on the App Store"
      >
        <Image
          src="/badges/app-store.svg"
          alt="Download on the App Store"
          width={140}
          height={42}
          loading="lazy"
          className="h-12 w-auto sm:h-11 md:h-12 transition-transform duration-300 ease-out hover:scale-105"
        />
      </Link>
      <Link
        href="https://play.google.com/store/apps/details?id=app.pocketparty.twa&hl=en_US"
        prefetch={false}
        className="inline-block transition-all duration-300 ease-out hover:scale-110 hover:shadow-lg hover:shadow-[#FFF845]/25"
        rel="nofollow"
        target="_blank"
        aria-label="Get Pocket Party on Google Play"
      >
        <Image
          src="/badges/google-play.svg"
          alt="Get it on Google Play"
          width={155}
          height={46}
          loading="lazy"
          className="h-12 w-auto sm:h-11 md:h-12 transition-transform duration-300 ease-out hover:scale-105"
        />
      </Link>
      <Link
        href="https://game.pocketparty.app/"
        prefetch={false}
        className="inline-block transition-all duration-300 ease-out hover:scale-110 hover:shadow-lg hover:shadow-[#FFF845]/25"
        rel="nofollow"
        target="_blank"
        aria-label="Play Pocket Party on the Web"
      >
        <Image
          src="/play-on-the-web.png"
          alt="Play on the Web"
          width={140}
          height={42}
          loading="lazy"
          className="h-12 w-auto sm:h-11 md:h-12 transition-transform duration-300 ease-out hover:scale-105"
        />
      </Link>
    </div>
  );
}

export default StoreBadges;


