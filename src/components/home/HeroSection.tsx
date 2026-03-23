'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/design-system';
import { luxuryEase } from '@/lib/animations';

const banners = [
  {
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1400&h=600&fit=crop&crop=center',
    alt: 'Maxx Salon — Premium Hair Styling',
    headline: 'Transform Your Look',
    subline: 'Premium Hair Care by Expert Stylists',
    cta: { label: 'Book Now', href: '/book' },
  },
  {
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=1400&h=600&fit=crop&crop=center',
    alt: 'Maxx Salon — Luxury Skin Treatments',
    headline: 'Glow From Within',
    subline: 'Advanced Facials & Skin Treatments',
    cta: { label: 'Explore Services', href: '/services' },
  },
  {
    image: 'https://images.unsplash.com/photo-1457972729786-0411a3b2b626?w=1400&h=600&fit=crop&crop=center',
    alt: 'Maxx Salon — Bridal Transformation',
    headline: 'Your Perfect Bridal Look',
    subline: 'Maxx Bridal Transformation Packages',
    cta: { label: 'View Bridal Packages', href: '/services' },
  },
  {
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=1400&h=600&fit=crop&crop=center',
    alt: 'Maxx Salon — Spa & Body Treatments',
    headline: 'Unwind & Rejuvenate',
    subline: 'Full Body Spa & Aromatherapy',
    cta: { label: 'Book a Spa Session', href: '/book' },
  },
];

export function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % banners.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, [isPaused, next]);

  const banner = banners[current];

  return (
    <section
      className="relative w-full pt-16 md:pt-20 bg-pearl"
      id="hero"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Banner Container — mobile: tall, desktop: ultra-wide (Lakme style) */}
        <div className="relative w-full aspect-[4/5] sm:aspect-[16/9] lg:aspect-[2.5/1] xl:aspect-[3/1] bg-charcoal overflow-hidden group">
          {/* Image with crossfade */}
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              className="absolute inset-0"
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: luxuryEase }}
            >
              <Image
                src={banner.image}
                alt={banner.alt}
                fill
                className="object-cover"
                priority={current === 0}
                sizes="100vw"
              />
            </motion.div>
          </AnimatePresence>

          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/70 via-charcoal/30 to-transparent z-10" />

          {/* Text overlay — left aligned */}
          <div className="absolute inset-0 z-20 flex items-center">
            <div className="section-container">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.6, ease: luxuryEase }}
                  className="max-w-lg"
                >
                  <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-7xl text-pearl leading-[1.05] drop-shadow-lg tracking-tight">
                    {banner.headline}
                  </h1>
                  <p className="font-accent italic font-light text-sm md:text-lg text-pearl/80 mt-2 md:mt-3 drop-shadow-md">
                    {banner.subline}
                  </p>
                  <div className="mt-4 md:mt-6">
                    <Link href={banner.cta.href}>
                      <Button variant="primary" size="lg" className="text-sm md:text-base">
                        {banner.cta.label}
                      </Button>
                    </Link>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Dots deliberately removed from inside the image overlay */}

          {/* Arrow Navigation — hidden by default, visible on hover */}
          <button
            onClick={() =>
              setCurrent((prev) => (prev - 1 + banners.length) % banners.length)
            }
            className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-20 w-10 h-10 lg:w-12 lg:h-12 rounded-full border border-pearl/20 flex items-center justify-center text-pearl hover:bg-white hover:text-charcoal transition-all opacity-0 group-hover:opacity-100 hidden sm:flex"
            aria-label="Previous banner"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
          </button>
          <button
            onClick={next}
            className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-20 w-10 h-10 lg:w-12 lg:h-12 rounded-full border border-pearl/20 flex items-center justify-center text-pearl hover:bg-white hover:text-charcoal transition-all opacity-0 group-hover:opacity-100 hidden sm:flex"
            aria-label="Next banner"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
          </button>
        </div>

      {/* Lakme-style Dots Navigation (Below the image) */}
      <div className="w-full flex justify-center items-center py-6 md:py-10 bg-pearl">
        <div className="flex gap-2">
          {banners.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-[3px] transition-colors duration-300 ${
                i === current
                  ? 'bg-charcoal w-12 sm:w-16'
                  : 'bg-charcoal/20 w-12 sm:w-16 hover:bg-charcoal/40'
              }`}
              aria-label={`Go to banner ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
