'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { luxuryEase, fadeUpItem } from '@/lib/animations';

const galleryImages = [
  'https://images.unsplash.com/photo-1518144591331-17a5dd71c477?w=600&h=800&fit=crop', // Model 1
  'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=600&h=800&fit=crop', // Model 2
  'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&h=800&fit=crop', // Model 3
  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&h=800&fit=crop', // Model 4
  'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600&h=800&fit=crop', // Model 5
  'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&h=800&fit=crop', // Model 6
  'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=600&h=800&fit=crop', // Model 7
];

export function Gallery() {
  return (
    <section className="py-12 lg:py-16 bg-[#FDFCFB]" id="gallery">
      {/* Header */}
      <motion.div 
        className="text-center mb-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: luxuryEase }}
      >
        <h2 className="font-display text-[22px] md:text-[26px] tracking-[0.15em] text-[#333] uppercase">
          #MAXXGALLERY
        </h2>
      </motion.div>

      {/* Edge-to-Edge Image Scroller */}
      <div className="w-full overflow-hidden">
        <motion.div 
          className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide w-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {galleryImages.map((src, idx) => (
            <motion.div
              key={idx}
              variants={fadeUpItem}
              className="relative shrink-0 snap-center mx-1 sm:mx-1.5"
              style={{ width: 'var(--gallery-card-w, 75vw)', maxWidth: '280px' }}
            >
              <div className="relative w-full aspect-[4/5] bg-smoke">
                <Image
                  src={src}
                  alt={`Maxx Salon Gallery ${idx + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 75vw, 280px"
                />
              </div>
            </motion.div>
          ))}
          
          {/* Force custom desktop widths via CSS class hacks without breaking tailwind */}
          <style jsx>{`
            @media (min-width: 640px) {
              .shrink-0 { --gallery-card-w: 40vw; }
            }
            @media (min-width: 1024px) {
              .shrink-0 { --gallery-card-w: 20vw; max-width: 320px; }
            }
          `}</style>
        </motion.div>
      </div>

      {/* Button */}
      <motion.div 
        className="flex justify-center mt-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
      >
        <Link href="/gallery" className="group">
          <button className="bg-[#2A2522] hover:bg-[#1f1b19] text-white px-8 py-3.5 text-[11px] font-body tracking-[0.2em] uppercase transition-colors flex items-center gap-3">
            VIEW MORE
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </button>
        </Link>
      </motion.div>
    </section>
  );
}
