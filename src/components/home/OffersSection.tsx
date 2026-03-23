'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { Badge, Button } from '@/components/design-system';
import { staggerContainer, fadeUpItem, luxuryEase } from '@/lib/animations';

const offers = [
  {
    id: 'glow-combo',
    name: 'Maxx Glow Combo',
    description: 'Facial + Hair Spa + Manicure — the ultimate pampering trio for a radiant you.',
    originalPrice: 2500,
    salePrice: 1499,
    savingsPercent: 40,
    slotsLeft: 4,
    expiresIn: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000 + 14 * 60 * 60 * 1000),
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
  },
];

function CountdownTimer({ target }: { target: Date }) {
  const [timeLeft, setTimeLeft] = useState('');

  useEffect(() => {
    const update = () => {
      const diff = target.getTime() - Date.now();
      if (diff <= 0) {
        setTimeLeft('Expired');
        return;
      }
      const d = Math.floor(diff / (1000 * 60 * 60 * 24));
      const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      setTimeLeft(`Expires in ${d}d ${h}h ${m}m`);
    };
    update();
    const interval = setInterval(update, 60000);
    return () => clearInterval(interval);
  }, [target]);

  return (
    <span className="font-body font-semibold text-[13px] text-error">
      {timeLeft}
    </span>
  );
}

export function OffersSection() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section className="py-20 lg:py-28 bg-pearl" id="offers">
      <div className="section-container">
        {/* Heading */}
        <motion.div
          className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: luxuryEase }}
        >
          <div>
            <Badge variant="limited" className="mb-3">
              LIMITED TIME
            </Badge>
            <h2 className="font-display font-bold text-3xl md:text-[40px] text-charcoal">
              Maxx Exclusive Offers
            </h2>
          </div>
          <Link href="/offers">
            <span className="font-body text-sm text-gold hover:text-gold-muted transition-colors">
              View all offers →
            </span>
          </Link>
        </motion.div>

        {/* Offer Cards Grid */}
        <motion.div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-3 gap-5"
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {offers.map((offer) => (
            <motion.div key={offer.id} variants={fadeUpItem}>
              <div className="bg-ivory border border-smoke rounded-[20px] p-6 md:p-7 relative overflow-hidden group hover:shadow-lg transition-all duration-300">
                {/* Top gold accent line */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-gold via-gold-light to-gold-muted" />

                {/* Offer Name */}
                <h3 className="font-display font-bold text-xl text-charcoal mt-2">
                  {offer.name}
                </h3>

                {/* Description */}
                <p className="font-body text-sm text-ash mt-2 leading-relaxed">
                  {offer.description}
                </p>

                {/* Price Row */}
                <div className="flex items-center gap-3 mt-5">
                  <span className="font-body text-base text-ash line-through">
                    ₹{offer.originalPrice.toLocaleString('en-IN')}
                  </span>
                  <span className="font-body font-bold text-2xl text-charcoal">
                    ₹{offer.salePrice.toLocaleString('en-IN')}
                  </span>
                  <Badge variant="save">
                    SAVE {offer.savingsPercent}%
                  </Badge>
                </div>

                {/* Countdown */}
                <div className="mt-4">
                  <CountdownTimer target={offer.expiresIn} />
                </div>

                {/* Slots FOMO */}
                <p className="font-body text-xs text-ash mt-2">
                  ⚡ Only {offer.slotsLeft} slots left today
                </p>

                {/* CTA */}
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
  );
}
