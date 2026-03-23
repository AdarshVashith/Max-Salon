'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button, Badge } from '@/components/design-system';
import { staggerContainer, fadeUpItem, luxuryEase } from '@/lib/animations';

const offers = [
  {
    id: 'glow-combo',
    name: 'Maxx Glow Combo',
    description: 'Facial + Hair Spa + Manicure — the ultimate pampering trio for a radiant you.',
    originalPrice: 2500,
    salePrice: 1499,
    savingsPercent: 40,
    validity: 'Valid till 31st March 2026',
    slotsLeft: 4,
    category: 'Combo',
  },
  {
    id: 'bridal-preview',
    name: 'Bridal Preview Package',
    description: 'Trial makeup + Hair styling — see your bridal look before the big day.',
    originalPrice: 5000,
    salePrice: 2999,
    savingsPercent: 40,
    validity: 'Valid till 15th April 2026',
    slotsLeft: 2,
    category: 'Bridal',
  },
  {
    id: 'weekend-refresh',
    name: 'Weekend Refresh',
    description: 'Haircut + Blow-dry + Head massage — walk in stressed, walk out stunning.',
    originalPrice: 1800,
    salePrice: 999,
    savingsPercent: 44,
    validity: 'Valid every weekend',
    slotsLeft: 7,
    category: 'Weekend Special',
  },
  {
    id: 'first-visit',
    name: 'First Visit Offer',
    description: 'Get 20% off on any service on your first visit to any Maxx Salon location.',
    originalPrice: 1000,
    salePrice: 800,
    savingsPercent: 20,
    validity: 'For new customers only',
    slotsLeft: 15,
    category: 'New Customers',
  },
  {
    id: 'color-festival',
    name: 'Color Festival',
    description: 'Global hair color + highlights + hair spa — a complete color transformation.',
    originalPrice: 4500,
    salePrice: 2799,
    savingsPercent: 38,
    validity: 'Valid till 30th April 2026',
    slotsLeft: 5,
    category: 'Hair Special',
  },
  {
    id: 'couple-spa',
    name: 'Couple Spa Day',
    description: 'Full body massage + facial + head massage for two — the perfect date experience.',
    originalPrice: 6000,
    salePrice: 3999,
    savingsPercent: 33,
    validity: 'Valid on weekdays only',
    slotsLeft: 3,
    category: 'Couple',
  },
];

export default function OffersPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-charcoal pt-28 pb-16">
        <div className="section-container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: luxuryEase }}
          >
            <Badge variant="limited" className="mb-4">LIMITED TIME</Badge>
            <h1 className="font-display font-black text-4xl md:text-5xl lg:text-6xl text-pearl">
              Exclusive Offers
            </h1>
            <p className="font-body text-base text-pearl/60 mt-4 max-w-lg mx-auto">
              Grab the best deals on premium salon services. Don&apos;t miss out — these offers won&apos;t last forever.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Offers Grid */}
      <section className="py-12 lg:py-16 bg-pearl">
        <div className="section-container">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {offers.map((offer) => (
              <motion.div key={offer.id} variants={fadeUpItem}>
                <div className="bg-ivory border border-smoke rounded-[20px] p-6 relative overflow-hidden group hover:shadow-lg transition-all duration-300">
                  {/* Top gold accent */}
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-gold via-gold-light to-gold-muted" />

                  <Badge variant="gold" className="mb-3">{offer.category}</Badge>

                  <h3 className="font-display font-bold text-xl text-charcoal mt-2">
                    {offer.name}
                  </h3>
                  <p className="font-body text-sm text-ash mt-2 leading-relaxed">
                    {offer.description}
                  </p>

                  {/* Price */}
                  <div className="flex items-center gap-3 mt-5">
                    <span className="font-body text-base text-ash line-through">
                      ₹{offer.originalPrice.toLocaleString('en-IN')}
                    </span>
                    <span className="font-body font-bold text-2xl text-charcoal">
                      ₹{offer.salePrice.toLocaleString('en-IN')}
                    </span>
                    <Badge variant="save">SAVE {offer.savingsPercent}%</Badge>
                  </div>

                  <p className="text-xs text-ash mt-3">{offer.validity}</p>
                  <p className="text-xs text-ash mt-1">⚡ Only {offer.slotsLeft} slots left today</p>

                  <Link href="/book" className="block mt-5">
                    <Button variant="primary" fullWidth>
                      Claim This Offer
                    </Button>
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
