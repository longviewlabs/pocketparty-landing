"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  { 
    featured: false, 
    quote: "It's amazing! All the team, silly, indoor or outdoor games in one spot!! Not only is the description simple & clear but there are videos showing actual fun. So grateful!", 
    author: "Maja Matusz", 
    dateOrLocation: "Apr 24, 2023" 
  },
  { 
    featured: false, 
    quote: "This game is so good!! I love this game. We played it so many times and saw your guys TikTok!! It's so interesting and fun!", 
    author: "vibes_with__Jana", 
    dateOrLocation: "Jul 03, 2023" 
  },
  { 
    featured: false, 
    quote: "It has sooo many options of games we can play!! It allows us to choose the number of players and suggests the game accordingly!! The games are really fun, and the short video clips explain perfectly. Much needed app!", 
    author: "Minahil Haider", 
    dateOrLocation: "Jun 20, 2023" 
  },
  { 
    featured: true, 
    quote: "A must-have for friend groups. I have a large friend group and we hang out often and we always want to play games but none of us know enough. This app is literally perfect — it's so fun, has so many games, and even gives you step-by-step tutorials. Whoever invented this needs to win an award. Such a good idea!", 
    author: "k_seed", 
    dateOrLocation: "02/04/2024" 
  },
  { 
    featured: false, 
    quote: "I love this game!!! I've taught it to nearly all my friends 😂😂😂", 
    author: "rebeca.figuera", 
    dateOrLocation: "2w ago" 
  },
  { 
    featured: false, 
    quote: "Great resource. I work with children and youth and have found this app to be a great source for coming up with game ideas.", 
    author: "KJ.MacKay3", 
    dateOrLocation: "May 23, 2023" 
  },
  { 
    featured: false, 
    quote: "This app is the best. I just installed it and already love it!", 
    author: "mobinaadel719", 
    dateOrLocation: "Aug 21, 2023" 
  }
];

interface TestimonialCardProps {
  testimonial: typeof testimonials[0];
  index: number;
  activeIndex: number;
  totalCards: number;
}

function TestimonialCard({ testimonial, index, activeIndex, totalCards }: TestimonialCardProps) {
  const isActive = index === activeIndex;
  const isNeighbor = Math.abs(index - activeIndex) === 1;
  const isFar = Math.abs(index - activeIndex) > 1;
  
  let opacity = "opacity-100";
  let scale = "scale-100";
  
  if (isNeighbor) {
    opacity = "opacity-70";
    scale = "scale-95";
  } else if (isFar) {
    opacity = "opacity-40";
    scale = "scale-95";
  }

  return (
    <article 
      role="group" 
      aria-roledescription="slide" 
      aria-label={`Testimonial ${index + 1} of ${totalCards}`}
      aria-current={isActive ? "true" : undefined}
      className={`
        flex-shrink-0 w-72 sm:w-80 md:w-96 rounded-2xl border-white/10 bg-white/30 shadow-sm 
        transition-all duration-300 ease-in-out
        ${opacity} ${scale}
        ${testimonial.featured ? 'p-6 md:p-8 shadow-lg' : 'p-4 md:p-6'}
      `}
    >
      <div className="space-y-4 h-full">
        <Quote className="h-6 w-6 text-[#FFF845] opacity-70" />
        <blockquote className={`${testimonial.featured ? 'text-base md:text-lg' : 'text-sm md:text-base'} leading-relaxed max-w-[60ch] text-black`}>
          &quot;{testimonial.quote}&quot;
        </blockquote>
        <footer className="text-xs text-black/70">
          <div className="font-medium">{testimonial.author}</div>
        </footer>
      </div>
    </article>
  );
}

export function Testimonials() {
  // Find featured testimonial index to start with it centered
  const featuredIndex = testimonials.findIndex(t => t.featured);
  const [activeIndex, setActiveIndex] = useState(featuredIndex !== -1 ? featuredIndex : 0);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const goToPrevious = () => {
    setActiveIndex(prev => Math.max(0, prev - 1));
  };

  const goToNext = () => {
    setActiveIndex(prev => Math.min(testimonials.length - 1, prev + 1));
  };

  const canGoPrevious = activeIndex > 0;
  const canGoNext = activeIndex < testimonials.length - 1;

  // Calculate responsive card width and gap for accurate centering
  const getCardWidth = () => {
    if (windowWidth >= 768) return 384; // md:w-96
    if (windowWidth >= 640) return 320; // sm:w-80
    return 288; // w-72
  };

  const getGap = () => {
    return windowWidth >= 768 ? 24 : 16; // md:gap-6 : gap-4
  };

  return (
    <section id="stories" aria-labelledby="testimonials-heading" className="space-y-8">
      <div className="text-center space-y-2">
        <h2 id="testimonials-heading" className="text-2xl md:text-3xl font-extrabold tracking-tight">
          What our users are saying
        </h2>
        <p className="text-sm md:text-base text-muted-foreground">
          Real stories from the Pocket Party community.
        </p>
      </div>

      {/* Carousel Container */}
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="relative">
          {/* Viewport */}
          <div className="overflow-hidden">
            {/* Rail */}
            <div 
              className="flex gap-4 md:gap-6 items-stretch transition-transform duration-300 ease-in-out"
              style={{
                transform: `translateX(calc(50% - ${activeIndex * (getCardWidth() + getGap()) + getCardWidth() / 2}px))`,
              }}
            >
              {testimonials.map((testimonial, index) => (
                <TestimonialCard
                  key={index}
                  testimonial={testimonial}
                  index={index}
                  activeIndex={activeIndex}
                  totalCards={testimonials.length}
                />
              ))}
            </div>
          </div>

          {/* Edge Gradient Masks */}
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-background to-transparent pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-background to-transparent pointer-events-none" />

          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            disabled={!canGoPrevious}
            aria-controls="testimonials-rail"
            aria-disabled={!canGoPrevious}
            className={`
              absolute top-1/2 -translate-y-1/2 left-2 z-10
              p-3 rounded-full bg-background/90 border shadow-sm
              transition-all duration-200
              focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2
              ${canGoPrevious 
                ? 'hover:bg-background hover:shadow-md opacity-100' 
                : 'opacity-40 cursor-not-allowed'
              }
            `}
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <button
            onClick={goToNext}
            disabled={!canGoNext}
            aria-controls="testimonials-rail"
            aria-disabled={!canGoNext}
            className={`
              absolute top-1/2 -translate-y-1/2 right-2 z-10
              p-3 rounded-full bg-background/90 border shadow-sm
              transition-all duration-200
              focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2
              ${canGoNext 
                ? 'hover:bg-background hover:shadow-md opacity-100' 
                : 'opacity-40 cursor-not-allowed'
              }
            `}
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center space-x-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`
                h-2 w-2 rounded-full transition-colors duration-200
                focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2
                ${index === activeIndex ? 'bg-[#FFF845]' : 'bg-muted hover:bg-muted-foreground/30'}
              `}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;