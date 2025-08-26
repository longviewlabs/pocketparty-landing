"use client";

import { useState, useEffect, useRef } from "react";
import StoreBadges from "./StoreBadges";

interface HeroRevolutionProps {
  className?: string;
  disableAnimation?: boolean;
  confetti?: boolean;
  children?: React.ReactNode;
}

// Timeline (in seconds):
// 0.0-1.6s: FeedLayer auto-scrolls upward, 30% opacity vignette
// 1.6-1.9s: signal noise lines, chromatic aberration, small skew
// 1.9-2.2s: 3 rapid glitch cuts revealing HeroLayer
// 2.2-2.6s: FeedLayer pixelates and dissolves, scale 1.02→1.0
// 2.6-3.1s: HeroLayer fades in with gradient sweep
// 3.1-3.4s: badges spring animation

export function HeroRevolution({ 
  className = "", 
  disableAnimation = false, 
  confetti = false,
  children 
}: HeroRevolutionProps) {
  const [animationState, setAnimationState] = useState<'idle' | 'scrolling' | 'glitching' | 'dissolving' | 'revealing' | 'complete'>('idle');
  const [hasAnimated, setHasAnimated] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollOffset = useRef(0);
  const animationFrame = useRef<number>(0);

  // Check for reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);
    
    const handleChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Intersection Observer for viewport detection
  useEffect(() => {
    if (disableAnimation || reducedMotion || hasAnimated) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.4) {
          setHasAnimated(true);
          startAnimation();
        }
      },
      { threshold: 0.4 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [disableAnimation, reducedMotion, hasAnimated]);

  const startAnimation = () => {
    setAnimationState('scrolling');
    
    // Start scroll animation
    const startTime = Date.now();
    const scrollSpeed = 14; // px/s
    
    const animate = () => {
      const elapsed = (Date.now() - startTime) / 1000;
      scrollOffset.current = elapsed * scrollSpeed;
      
      if (elapsed >= 1.6) {
        setAnimationState('glitching');
        setTimeout(() => setAnimationState('dissolving'), 300);
        setTimeout(() => setAnimationState('revealing'), 700);
        setTimeout(() => setAnimationState('complete'), 1200);
        return;
      }
      
      animationFrame.current = requestAnimationFrame(animate);
    };
    
    animate();
  };

  // Cleanup animation frame
  useEffect(() => {
    return () => {
      if (animationFrame.current) {
        cancelAnimationFrame(animationFrame.current);
      }
    };
  }, []);

  // Render hero directly if animation disabled or reduced motion
  if (disableAnimation || reducedMotion) {
    return (
      <div className={`relative min-h-[60vh] flex items-center justify-center ${className}`}>
        <HeroLayer isVisible={true} animationState="complete" confetti={false}>
          {children}
        </HeroLayer>
      </div>
    );
  }

  return (
    <div 
      ref={containerRef}
      className={`relative min-h-[60vh] overflow-hidden ${className}`}
      style={{ backgroundColor: '#9F32E5' }}
    >
      {/* Feed Layer */}
      <FeedLayer 
        isVisible={animationState !== 'complete'}
        animationState={animationState}
        scrollOffset={scrollOffset.current}
      />
      
      {/* Hero Layer */}
      <HeroLayer 
        isVisible={animationState === 'revealing' || animationState === 'complete'}
        animationState={animationState}
        confetti={confetti && animationState === 'complete'}
      >
        {children}
      </HeroLayer>
    </div>
  );
}

interface LayerProps {
  isVisible: boolean;
  animationState: string;
  scrollOffset?: number;
  confetti?: boolean;
  children?: React.ReactNode;
}

function FeedLayer({ isVisible, animationState, scrollOffset = 0 }: LayerProps) {
  if (!isVisible) return null;

  const feedCards = [
    { height: 120, hasImage: true },
    { height: 80, hasImage: false },
    { height: 140, hasImage: true },
    { height: 100, hasImage: false },
    { height: 160, hasImage: true },
    { height: 90, hasImage: false },
    { height: 130, hasImage: true },
    { height: 110, hasImage: false },
  ];

  const getGlitchStyles = () => {
    if (animationState !== 'glitching') return {};
    
    return {
      filter: `contrast(1.2) brightness(1.1) blur(0.5px)`,
      transform: `skewX(-0.5deg) scale(1.01)`,
      clipPath: Math.random() > 0.5 ? 'polygon(0 20%, 100% 25%, 100% 80%, 0 75%)' : 'none',
    };
  };

  const getDissolveStyles = () => {
    if (animationState !== 'dissolving') return {};
    
    return {
      opacity: 0,
      transform: 'scale(1.02)',
      filter: 'blur(2px)',
      transition: 'all 400ms ease-out',
    };
  };

  return (
    <div 
      className="absolute inset-0 z-10"
      aria-hidden="true"
      style={{
        opacity: animationState === 'scrolling' ? 0.3 : 0.4,
        willChange: 'transform, opacity, filter',
        ...getGlitchStyles(),
        ...getDissolveStyles(),
      }}
    >
      {/* Top gradient mask */}
      <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-[#9F32E5] to-transparent z-20" />
      
      {/* Feed content */}
      <div 
        className="p-4 space-y-4"
        style={{
          transform: `translateY(-${scrollOffset}px)`,
          filter: 'blur(0.3px) saturate(0.7)',
        }}
      >
        {/* Repeat cards to ensure continuous scroll */}
        {[...feedCards, ...feedCards].map((card, index) => (
          <div 
            key={index}
            className="bg-white/10 rounded-lg p-4 backdrop-blur-sm"
            style={{ height: card.height }}
          >
            {/* Avatar + text header */}
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex-shrink-0" />
              <div className="flex-1 space-y-2">
                <div className="h-3 bg-white/20 rounded w-24" />
                <div className="h-2 bg-white/15 rounded w-16" />
              </div>
            </div>
            
            {/* Text content */}
            <div className="space-y-2 mb-3">
              <div className="h-2 bg-white/15 rounded w-full" />
              <div className="h-2 bg-white/15 rounded w-3/4" />
            </div>
            
            {/* Image placeholder */}
            {card.hasImage && (
              <div className="h-16 bg-white/10 rounded" />
            )}
          </div>
        ))}
      </div>
      
      {/* Bottom gradient mask */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#9F32E5] to-transparent z-20" />
      
      {/* Glitch scan lines */}
      {animationState === 'glitching' && (
        <>
          <div 
            className="absolute left-0 right-0 h-0.5 bg-white/20 z-30"
            style={{ 
              top: '30%',
              animation: 'scanline 150ms ease-in-out'
            }}
          />
          <div 
            className="absolute left-0 right-0 h-0.5 bg-white/20 z-30"
            style={{ 
              top: '70%',
              animation: 'scanline 150ms ease-in-out 75ms'
            }}
          />
        </>
      )}
    </div>
  );
}

function HeroLayer({ isVisible, animationState, confetti = false, children }: LayerProps) {
  if (!isVisible) return null;

  const showSweep = animationState === 'revealing';
  const showSpring = animationState === 'complete';

  return (
    <div 
      className="absolute inset-0 z-20 flex items-center justify-center px-4"
      style={{
        opacity: isVisible ? 1 : 0,
        transition: isVisible ? 'opacity 500ms ease-out' : 'none',
        willChange: 'opacity',
      }}
    >
      <div className="max-w-4xl w-full text-center space-y-8">
        {/* Headline with sweep effect */}
        <div className="relative">
          <h1 
            className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight"
            style={{
              willChange: showSweep ? 'mask' : 'auto',
            }}
          >
            Join the Offline Revolution
          </h1>
          
          {/* Sweep effect overlay */}
          {showSweep && (
            <div 
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
              style={{
                maskImage: 'linear-gradient(90deg, transparent 0%, white 50%, transparent 100%)',
                animation: 'sweep 900ms ease-out',
              }}
            />
          )}
          
          {/* Confetti effect */}
          {confetti && (
            <div 
              className="absolute inset-0 pointer-events-none"
              style={{
                background: `radial-gradient(circle at 50% 50%, 
                  rgba(255, 248, 69, 0.1) 0%, 
                  rgba(255, 248, 69, 0.05) 30%, 
                  transparent 50%)`,
                animation: 'confetti 500ms ease-out',
              }}
            />
          )}
        </div>
        
        {/* Subtext */}
        <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
          The best moments aren&apos;t on a feed — they&apos;re around you.
          <br />
          Millions have already made the switch. It&apos;s your turn.
        </p>
        
        {/* CTA Badges with spring animation */}
        <div 
          className="flex justify-center"
          style={{
            transform: showSpring ? 'translateY(0)' : 'translateY(6px)',
            transition: showSpring ? 'transform 300ms cubic-bezier(0.34, 1.56, 0.64, 1)' : 'none',
            willChange: showSpring ? 'transform' : 'auto',
          }}
        >
          <StoreBadges />
        </div>
        
        {/* Custom children */}
        {children}
      </div>
    </div>
  );
}

// CSS animations are defined in globals.css:
// - @keyframes scanline: glitch scan line effect
// - @keyframes sweep: headline gradient sweep
// - @keyframes confetti: optional confetti burst effect

export default HeroRevolution;
