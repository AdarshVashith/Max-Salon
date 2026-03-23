'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { staggerContainer, fadeUpItem, luxuryEase } from '@/lib/animations';

const instagramReels = [
  {
    type: 'video',
    src: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
    isNew: true,
  },
  {
    type: 'video',
    src: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
    isNew: false,
  },
  {
    type: 'video',
    src: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4',
    isNew: false,
  },
  {
    type: 'video',
    src: 'https://storage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4',
    isNew: true,
  },
  {
    type: 'video',
    src: 'https://storage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4',
    isNew: false,
  },
  {
    type: 'video',
    src: 'https://storage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
    isNew: true,
  },
];

export function InstagramFeed() {
  return (
    <section className="py-10 lg:py-16 bg-pearl" id="instagram-feed">
      <div className="section-container">
        {/* Header - Lakme Minimalist Style */}
        <motion.div
          className="flex flex-col items-center justify-center text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: luxuryEase }}
        >
          <span className="inline-block text-charcoal font-display font-semibold text-[10px] tracking-widest px-3 py-1 mb-3">
            SOCIALS
          </span>
          <h2 className="font-display font-light text-2xl md:text-3xl text-charcoal tracking-[0.15em] uppercase">
            @MAXXSALON
          </h2>
        </motion.div>

        {/* Cinematic Square Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-[2px] md:gap-1"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {instagramReels.map((post, i) => (
            <motion.div key={i} variants={fadeUpItem} className="relative group">
              <a
                href="https://instagram.com/maxxsalon"
                target="_blank"
                rel="noopener noreferrer"
                className="relative block w-full aspect-[4/5] overflow-hidden bg-smoke"
              >
                {/* Playing Video Backing */}
                <video
                  src={post.src}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover transition-transform duration-700 ease-luxury group-hover:scale-105"
                />

                {/* Minimal Dark Hover Mode */}
                <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/40 flex items-center justify-center transition-all duration-300">
                  <svg 
                    className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </div>

                {/* Minimal Badge */}
                {post.isNew && (
                  <span className="absolute top-0 right-0 px-2.5 py-1 bg-charcoal text-white text-[9px] font-bold tracking-widest uppercase shadow-sm">
                    NEW
                  </span>
                )}
              </a>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <a
            href="https://instagram.com/maxxsalon"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 border border-charcoal/30 px-6 py-2.5 text-[11px] font-body tracking-[0.2em] text-charcoal uppercase hover:bg-charcoal hover:text-white transition-colors duration-300"
          >
            FOLLOW MAXX SALON
          </a>
        </motion.div>
      </div>
    </section>
  );
}
