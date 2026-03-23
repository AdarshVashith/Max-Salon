'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { staggerContainer, fadeUpItem, luxuryEase } from '@/lib/animations';

const offers = [
  {
    id: 'glow-combo',
    name: 'Maxx Glow Combo',
    description: 'Facial + Hair Spa + Manicure — the ultimate pampering trio.',
    originalPrice: 2500,
    salePrice: 1499,
    savingsPercent: 40,
    slotsLeft: 4,
    expiresIn: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000 + 14 * 60 * 60 * 1000),
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&q=80',
  },
  {
    id: 'bridal-preview',
    name: 'Bridal Preview Package',
    description: 'Trial makeup + Hair styling — see your bridal look before the big day.',
    originalPrice: 5000,
    salePrice: 2999,
    savingsPercent: 40,
    slotsLeft: 2,
    expiresIn: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000 + 8 * 60 * 60 * 1000),
    image: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=800&q=80',
  },
  {
    id: 'weekend-refresh',
    name: 'Weekend Refresh',
    description: 'Haircut + Blow-dry + Head massage — walk in stressed, walk out stunning.',
    originalPrice: 1800,
    salePrice: 999,
    savingsPercent: 44,
    slotsLeft: 7,
    expiresIn: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000 + 20 * 60 * 60 * 1000),
    image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=800&q=80',
  },
];

export function OffersSection() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section className="py-10 lg:py-16 bg-pearl" id="offers">
      <div className="section-container">
        {/* Heading Lakme Style */}
        <motion.div
          className="mb-8 lg:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: luxuryEase }}
        >
          <span className="inline-block bg-gold/20 text-charcoal font-display font-semibold text-[10px] tracking-widest px-3 py-1 mb-3">
            LIMITED TIME
          </span>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <h2 className="font-display font-light text-3xl md:text-4xl text-charcoal tracking-wide uppercase">
              Maxx Exclusive Offers
            </h2>
            <Link href="/offers">
              <span className="font-body text-xs font-semibold text-charcoal tracking-widest uppercase border-b border-charcoal pb-1 hover:text-gold hover:border-gold transition-colors">
                VIEW ALL OFFERS
              </span>
            </Link>
          </div>
        </motion.div>

        {/* Offer Cards Grid - Strict Lakme Premium Theme */}
        <motion.div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-14"
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {offers.map((offer) => (
            <motion.div key={offer.id} variants={fadeUpItem} className="flex flex-col group cursor-pointer">
              {/* Ultra-clean Square Image Frame */}
              <div className="relative w-full aspect-square bg-[#f8f8f8] overflow-hidden mb-6">
                <Image
                  src={offer.image}
                  alt=""
                  fill
                  className="object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                
                {/* Lakme style stark black/white badge */}
                <div className="absolute top-3 left-3 bg-charcoal px-3 py-1 z-10">
                  <span className="font-display font-medium text-[9px] text-white tracking-[0.15em] uppercase">
                    SAVE {offer.savingsPercent}%
                  </span>
                </div>
              </div>

              {/* Minimalist Typography Layout */}
              <div className="flex flex-col flex-1 px-1">
                <h3 className="font-display text-[16px] lg:text-[18px] text-charcoal tracking-wide uppercase group-hover:text-ash transition-colors duration-300">
                  {offer.name}
                </h3>
                
                <p className="font-body text-[12px] text-ash/80 mt-2 mb-4 leading-relaxed line-clamp-2">
                  {offer.description}
                </p>

                {/* Price Matrix */}
                <div className="flex items-end gap-3 mt-auto mb-4">
                  <span className="font-display font-medium text-lg text-charcoal">
                    ₹{offer.salePrice.toLocaleString('en-IN')}
                  </span>
                  <span className="font-body text-[13px] text-ash line-through mb-[2px]">
                    ₹{offer.originalPrice.toLocaleString('en-IN')}
                  </span>
                </div>
                  
                {/* Premium Edge-to-Edge CTA */}
                <Link href="/book" className="mt-5 w-full">
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
  );
}
