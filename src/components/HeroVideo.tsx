"use client";

import { useState } from "react";
import Image from "next/image";

export function HeroVideo() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isVideoPaused, setIsVideoPaused] = useState(false);

  const handlePlayVideo = () => {
    setIsVideoPlaying(true);
    setIsVideoPaused(false);
  };

  const handleVideoEnd = () => {
    setIsVideoPlaying(false);
    setIsVideoPaused(false);
  };

  const handleVideoClick = () => {
    const video = document.getElementById('hero-video') as HTMLVideoElement;
    if (video) {
      if (video.paused) {
        video.play();
        setIsVideoPaused(false);
      } else {
        video.pause();
        setIsVideoPaused(true);
      }
    }
  };

  return (
    <div className="space-y-4">
      <div className="relative">
        <Image
          src="/3-phones.png"
          alt="Three phones displaying the Pocket Party app interface showing social games"
          className="w-full h-auto rounded-xl"
          width={1200}
          height={800}
          priority
        />
        {/* Watch Now Button Overlay */}
        {!isVideoPlaying && (
          <button
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse-simple"
            onClick={handlePlayVideo}
            aria-label="Play Pocket Party intro video"
          >
            <Image
              src="/play-button-new.png"
              alt=""
              width={85}
              height={85}
              className="w-16 h-16 md:w-20 md:h-20"
              aria-hidden="true"
            />
          </button>
        )}
        {/* Video Overlay */}
        {isVideoPlaying && (
          <video
            id="hero-video"
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[39%] h-[65%] object-cover rounded-lg cursor-pointer"
            autoPlay
            playsInline
            preload="metadata"
            poster="/video-thumb.jpg"
            onEnded={handleVideoEnd}
            onClick={handleVideoClick}
          >
            <source src="/PP-Intro-Video-V1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
      </div>
      <p className="text-center text-[#FCEA10] text-xl font-bold italic mt-0 tracking-wide">
        ▶ Watch Pocket Party in Action
      </p>
    </div>
  );
}

export default HeroVideo;
