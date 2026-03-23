'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { staggerContainer, fadeUpItem, luxuryEase } from '@/lib/animations';

const offers = [
  {
    id: 'glow-combo',
    name: 'Maxx Glow Combo',
    description: 'Facial + Hair Spa + Manicure — the ultimate pampering trio for a radiant you.',
    originalPrice: 2500,
    salePrice: 1499,
    savingsPercent: 40,
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&q=80',
  },
  {
    id: 'bridal-preview',
    name: 'Bridal Preview Package',
    description: 'Trial makeup + Hair styling — see your bridal look before the big day.',
    originalPrice: 5000,
    salePrice: 2999,
    savingsPercent: 40,
    image: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=800&q=80',
  },
  {
    id: 'weekend-refresh',
    name: 'Weekend Refresh',
    description: 'Haircut + Blow-dry + Head massage — walk in stressed, walk out stunning.',
    originalPrice: 1800,
    salePrice: 999,
    savingsPercent: 44,
    image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=800&q=80',
  },
  {
    id: 'first-visit',
    name: 'First Visit Offer',
    description: 'Get 20% off on any service on your first visit to any Maxx Salon location.',
    originalPrice: 1000,
    salePrice: 800,
    savingsPercent: 20,
    image: 'https://images.unsplash.com/photo-1493106819501-66d381c466f1?w=800&q=80',
  },
  {
    id: 'color-festival',
    name: 'Color Festival',
    description: 'Global hair color + highlights + hair spa — a complete color transformation.',
    originalPrice: 4500,
    salePrice: 2799,
    savingsPercent: 38,
    image: 'https://images.unsplash.com/photo-1620331311520-246422fd82f9?w=800&q=80',
  },
  {
    id: 'couple-spa',
    name: 'Couple Spa Day',
    description: 'Full body massage + facial + head massage for two — the perfect date experience.',
    originalPrice: 6000,
    salePrice: 3999,
    savingsPercent: 33,
    image: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=800&q=80',
  },
];

export default function OffersPage() {
  return (
    <>
      {/* Editorial Hero */}
      <section className="bg-charcoal pt-[160px] pb-[80px]">
        <div className="section-container text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: luxuryEase }}
            className="max-w-3xl mx-auto"
          >
            <span className="inline-block bg-gold/20 text-gold font-display font-medium text-[10px] tracking-[0.2em] px-3 py-1 mb-6">
              LIMITED TIME
            </span>
            <h1 className="font-display font-light text-4xl md:text-5xl lg:text-6xl tracking-wide text-pearl uppercase mb-6">
              Exclusive Offers
            </h1>
            <p className="font-body text-sm md:text-base text-pearl/70 max-w-lg mx-auto leading-relaxed">
              Unlock exceptional value with our meticulously curated packages. These seasonal deals won't last forever.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Grid Architecture */}
      <section className="py-16 lg:py-24 bg-pearl">
        <div className="section-container">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-14"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {offers.map((offer) => (
              <motion.div key={offer.id} variants={fadeUpItem} className="flex flex-col group cursor-pointer">
                {/* Clean Square Frame */}
                <div className="relative w-full aspect-square bg-[#f8f8f8] overflow-hidden mb-6">
                  <Image
                    src={offer.image}
                    alt=""
                    fill
                    className="object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  
                  {/* Stark Badge */}
                  <div className="absolute top-3 left-3 bg-charcoal px-3 py-1 z-10">
                    <span className="font-display font-medium text-[9px] text-white tracking-[0.15em] uppercase">
                      SAVE {offer.savingsPercent}%
                    </span>
                  </div>
                </div>

                {/* Minimalist Details block */}
                <div className="flex flex-col flex-1 px-1">
                  <h3 className="font-display text-[16px] lg:text-[18px] text-charcoal tracking-wide uppercase group-hover:text-ash transition-colors duration-300">
                    {offer.name}
                  </h3>
                  
                  <p className="font-body text-[12px] text-ash/80 mt-2 mb-4 leading-relaxed line-clamp-2">
                    {offer.description}
                  </p>

                  <div className="flex items-end gap-3 mt-auto mb-4">
                    <span className="font-display font-medium text-lg text-charcoal">
                      ₹{offer.salePrice.toLocaleString('en-IN')}
                    </span>
                    <span className="font-body text-[13px] text-ash line-through mb-[2px]">
                      ₹{offer.originalPrice.toLocaleString('en-IN')}
                    </span>
                  </div>

                  <Link href="/book" className="mt-2 w-full">
                    <span className="flex items-center justify-center w-full bg-charcoal text-white py-3.5 text-[11px] font-body tracking-[0.2em] font-medium uppercase group-hover:bg-[#111] transition-colors duration-300">
                      CLAIM OFFER
                    </span>
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
