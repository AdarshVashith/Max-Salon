'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { staggerContainer, fadeUpItem, luxuryEase } from '@/lib/animations';

const instagramPosts = [
  { gradient: 'from-[#2a1a18] to-[#38282a]', isNew: true },
  { gradient: 'from-[#1a1e2a] to-[#2a2838]', isNew: false },
  { gradient: 'from-[#1a2a1e] to-[#283a2e]', isNew: false },
  { gradient: 'from-[#2a2518] to-[#383228]', isNew: true },
  { gradient: 'from-[#201a2a] to-[#302838]', isNew: false },
  { gradient: 'from-[#1a2825] to-[#283835]', isNew: true },
];

export function InstagramFeed() {
  return (
    <section className="py-20 lg:py-24 bg-pearl-warm" id="instagram-feed">
      <div className="section-container">
        {/* Heading */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: luxuryEase }}
        >
          <h2 className="font-accent italic text-2xl md:text-[32px] text-gold">
            @MaxxSalon
          </h2>
        </motion.div>

        {/* Grid */}
        <motion.div
          className="grid grid-cols-3 md:grid-cols-6 gap-2 md:gap-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {instagramPosts.map((post, i) => (
            <motion.div key={i} variants={fadeUpItem}>
              <a
                href="https://instagram.com/maxxsalon"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative aspect-[3/5] rounded-lg md:rounded-xl overflow-hidden block"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${post.gradient}`}
                />
                {/* Ambient glow */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-gold/10 blur-[30px]" />
                </div>
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <svg className="w-8 h-8 text-pearl" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </div>
                {/* New badge */}
                {post.isNew && (
                  <span className="absolute top-2 left-2 px-2 py-0.5 rounded-full bg-gold/90 text-charcoal text-[9px] font-bold font-body">
                    ✨ NEW
                  </span>
                )}
              </a>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <a
            href="https://instagram.com/maxxsalon"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gold text-charcoal font-body font-semibold text-sm rounded-full px-6 py-3 hover:bg-gold-light transition-colors duration-300"
          >
            Follow Maxx Salon on Instagram
          </a>
        </motion.div>
      </div>
    </section>
  );
}
