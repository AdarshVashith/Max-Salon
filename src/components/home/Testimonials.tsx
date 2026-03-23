'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { luxuryEase } from '@/lib/animations';

const testimonials = [
  {
    name: 'Priya Sharma',
    location: 'Delhi · Maxx Connaught Place',
    quote:
      'The bridal makeup was absolutely flawless. My photos came out stunning and the team made me feel so special on my big day. Truly a luxury experience!',
    rating: 5,
    source: 'Google Review ✓',
    avatar: 'PS',
  },
  {
    name: 'Ananya Reddy',
    location: 'Mumbai · Maxx Bandra',
    quote:
      'I tried the Keratin treatment here and the results lasted for months. The stylists at Maxx are genuine experts — they actually listen to what you want.',
    rating: 5,
    source: 'Google Review ✓',
    avatar: 'AR',
  },
  {
    name: 'Riya Kapoor',
    location: 'Bangalore · Maxx Indiranagar',
    quote:
      'The Hydra Facial Glow left my skin absolutely radiant. The ambiance is truly premium and every visit feels like a mini vacation. My go-to salon!',
    rating: 5,
    source: 'Instagram ✓',
    avatar: 'RK',
  },
  {
    name: 'Mehul Patel',
    location: 'Pune · Maxx Koregaon Park',
    quote:
      'Best grooming experience in Pune, hands down. The attention to detail and premium products make Maxx Salon stand apart from the competition.',
    rating: 5,
    source: 'Google Review ✓',
    avatar: 'MP',
  },
];

export function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, [isPaused, next]);

  const t = testimonials[current];

  return (
    <section
      className="py-20 lg:py-28 bg-pearl-warm"
      id="testimonials"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="section-container">
        {/* Heading */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: luxuryEase }}
        >
          <h2 className="font-display font-bold text-3xl md:text-[40px] text-charcoal">
            What Our Clients Say
          </h2>
          <p className="font-accent italic font-light text-lg text-ash mt-3">
            Real experiences. Real transformations.
          </p>
        </motion.div>

        {/* Testimonial Card */}
        <div className="max-w-2xl mx-auto text-center relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, ease: luxuryEase }}
              className="flex flex-col items-center"
            >
              {/* Avatar */}
              <div className="w-[72px] h-[72px] rounded-full border-2 border-gold flex items-center justify-center bg-charcoal text-gold font-display font-bold text-xl mb-6">
                {t.avatar}
              </div>

              {/* Quote */}
              <div className="relative">
                <span className="absolute -top-8 -left-4 text-gold/20 font-display text-[80px] leading-none select-none">
                  &ldquo;
                </span>
                <p className="font-accent italic text-lg md:text-xl text-charcoal/90 leading-relaxed max-w-[560px]">
                  {t.quote}
                </p>
              </div>

              {/* Stars */}
              <div className="flex gap-1 mt-5">
                {[...Array(t.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-4 h-4 text-gold"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Name & Location */}
              <p className="font-body font-semibold text-[15px] text-charcoal mt-4">
                {t.name}
              </p>
              <p className="font-body text-[13px] text-ash mt-1">
                {t.location}
              </p>

              {/* Source Badge */}
              <span className="inline-block mt-3 px-3 py-1 rounded-full bg-pearl text-xs text-ash font-medium">
                {t.source}
              </span>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-4 mt-10">
          <button
            onClick={prev}
            className="w-10 h-10 rounded-full border border-smoke hover:border-gold flex items-center justify-center text-ash hover:text-gold transition-all"
            aria-label="Previous testimonial"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Dots */}
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i === current
                    ? 'bg-gold w-6'
                    : 'bg-smoke hover:bg-ash'
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="w-10 h-10 rounded-full border border-smoke hover:border-gold flex items-center justify-center text-ash hover:text-gold transition-all"
            aria-label="Next testimonial"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
