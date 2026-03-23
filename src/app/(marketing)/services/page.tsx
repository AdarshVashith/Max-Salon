'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { Button, Badge } from '@/components/design-system';
import { staggerContainer, fadeUpItem, luxuryEase } from '@/lib/animations';

const categories = [
  { id: 'all', label: 'All Services' },
  { id: 'hair', label: 'Hair Care' },
  { id: 'skin', label: 'Skin & Facial' },
  { id: 'bridal', label: 'Bridal Maxx' },
  { id: 'nails', label: 'Nail Art' },
  { id: 'body', label: 'Body Treatments' },
  { id: 'packages', label: 'Packages' },
];

const services = [
  {
    id: 'premium-haircut',
    name: 'Premium Haircut & Styling',
    category: 'hair',
    price: 799,
    duration: 45,
    description: 'Expert cut & style with wash, blow-dry, and finishing by senior stylists using premium products.',
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=400&h=300&fit=crop',
    isPopular: true,
  },
  {
    id: 'keratin-treatment',
    name: 'Keratin Smoothing Treatment',
    category: 'hair',
    price: 2999,
    duration: 180,
    description: 'Advanced keratin infusion for silky smooth, frizz-free hair that lasts 4–6 months.',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400&h=300&fit=crop',
    isNew: true,
  },
  {
    id: 'hair-color',
    name: 'Global Hair Color',
    category: 'hair',
    price: 1299,
    duration: 120,
    description: 'Full coverage color with premium international brands. Includes consultation and aftercare tips.',
    image: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=400&h=300&fit=crop',
    isPopular: true,
  },
  {
    id: 'hair-spa',
    name: 'Deep Conditioning Hair Spa',
    category: 'hair',
    price: 999,
    duration: 60,
    description: 'Intensive nourishment treatment to repair damage, add shine, and strengthen hair roots.',
    image: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=400&h=300&fit=crop',
  },
  {
    id: 'hydra-facial',
    name: 'Hydra Facial Glow',
    category: 'skin',
    price: 1799,
    duration: 60,
    description: 'Multi-step hydradermabrasion facial for deep cleansing, hydration, and instant radiance.',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400&h=300&fit=crop',
    isPopular: true,
  },
  {
    id: 'gold-facial',
    name: 'Maxx Gold Facial',
    category: 'skin',
    price: 1499,
    duration: 75,
    description: '24K gold-infused luxury facial that firms, brightens, and rejuvenates your skin.',
    image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=400&h=300&fit=crop',
  },
  {
    id: 'anti-aging',
    name: 'Anti-Aging Collagen Facial',
    category: 'skin',
    price: 2499,
    duration: 90,
    description: 'Advanced collagen-boosting treatment to reduce fine lines and restore youthful elasticity.',
    image: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=400&h=300&fit=crop',
    isNew: true,
  },
  {
    id: 'bridal-complete',
    name: 'Maxx Bridal Transformation',
    category: 'bridal',
    price: 4999,
    duration: 240,
    description: 'Complete bridal package: HD makeup, hairstyling, draping assistance, and touch-up kit.',
    image: 'https://images.unsplash.com/photo-1457972729786-0411a3b2b626?w=400&h=300&fit=crop',
    isPopular: true,
  },
  {
    id: 'bridal-trial',
    name: 'Bridal Trial Makeup',
    category: 'bridal',
    price: 1999,
    duration: 120,
    description: 'Preview your bridal look with a full trial session. Includes photo test under different lighting.',
    image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=400&h=300&fit=crop',
  },
  {
    id: 'nail-art',
    name: 'Premium Gel Nail Art',
    category: 'nails',
    price: 999,
    duration: 60,
    description: 'Designer nail art with gel polish — over 200 designs to choose from. Lasts 3+ weeks.',
    image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=400&h=300&fit=crop',
    isNew: true,
  },
  {
    id: 'manicure-pedicure',
    name: 'Luxury Manicure & Pedicure',
    category: 'nails',
    price: 1299,
    duration: 75,
    description: 'Spa-grade mani-pedi with exfoliation, mask, massage, and premium polish application.',
    image: 'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?w=400&h=300&fit=crop',
  },
  {
    id: 'body-massage',
    name: 'Aromatherapy Full Body Massage',
    category: 'body',
    price: 1999,
    duration: 90,
    description: 'Relaxing full-body massage with essential oils. Relieves stress, tension, and muscle fatigue.',
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=400&h=300&fit=crop',
    isPopular: true,
  },
  {
    id: 'body-scrub',
    name: 'Full Body Scrub & Polish',
    category: 'body',
    price: 1499,
    duration: 60,
    description: 'Exfoliating body treatment to reveal soft, glowing skin. Includes moisturizing body wrap.',
    image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=400&h=300&fit=crop',
  },
  {
    id: 'glow-combo',
    name: 'Maxx Glow Combo',
    category: 'packages',
    price: 1499,
    duration: 120,
    description: 'Facial + Hair Spa + Manicure — the ultimate pampering trio at a special combo price.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop',
    isPopular: true,
  },
  {
    id: 'weekend-refresh',
    name: 'Weekend Refresh Package',
    category: 'packages',
    price: 999,
    duration: 90,
    description: 'Haircut + Blow-dry + Head massage — walk in stressed, walk out stunning.',
    image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=400&h=300&fit=crop',
  },
];

export default function ServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const filtered = selectedCategory === 'all'
    ? services
    : services.filter((s) => s.category === selectedCategory);

  return (
    <>
      {/* Hero Banner */}
      <section className="bg-charcoal pt-28 pb-16">
        <div className="section-container text-center">
          <motion.p
            className="font-accent italic text-sm text-gold tracking-[0.3em] uppercase mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: luxuryEase }}
          >
            Expert Treatments
          </motion.p>
          <motion.h1
            className="font-display font-black text-4xl md:text-5xl lg:text-6xl text-pearl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: luxuryEase }}
          >
            Our Services
          </motion.h1>
          <motion.p
            className="font-body text-base text-pearl/60 mt-4 max-w-lg mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Premium beauty and wellness treatments crafted by experts, designed for results you&apos;ll love.
          </motion.p>
        </div>
      </section>

      {/* Filters + Grid */}
      <section className="py-12 lg:py-16 bg-pearl">
        <div className="section-container">
          {/* Category Filter Pills */}
          <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-6 mb-8 justify-start lg:justify-center">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-5 py-2.5 rounded-full text-sm font-body font-medium whitespace-nowrap transition-all duration-300 ${
                  selectedCategory === cat.id
                    ? 'bg-gold text-charcoal shadow-md'
                    : 'bg-ivory border border-smoke text-ash hover:border-gold hover:text-gold'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Results Count */}
          <p className="text-sm text-ash font-body mb-6">
            Showing {filtered.length} services
          </p>

          {/* Service Cards Grid */}
          <motion.div
            ref={ref}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            {filtered.map((service) => (
              <motion.div key={service.id} variants={fadeUpItem}>
                <Link href={`/services/${service.id}`}>
                  <div className="group bg-ivory border border-smoke rounded-[20px] overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.name}
                        fill
                        className="object-cover transition-transform duration-500 ease-luxury group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      <div className="absolute top-3 left-3 flex gap-2">
                        {service.isPopular && <Badge variant="trending">Popular</Badge>}
                        {service.isNew && <Badge variant="new">New</Badge>}
                      </div>
                    </div>
                    {/* Content */}
                    <div className="p-5">
                      <h3 className="font-display font-bold text-lg text-charcoal group-hover:text-gold transition-colors">
                        {service.name}
                      </h3>
                      <p className="text-xs text-ash mt-1 flex items-center gap-3">
                        <span>⏱ {service.duration} min</span>
                        <span>·</span>
                        <span className="capitalize">{service.category}</span>
                      </p>
                      <p className="text-sm text-ash mt-2 line-clamp-2 leading-relaxed">
                        {service.description}
                      </p>
                      <div className="flex items-center justify-between mt-4">
                        <span className="font-accent italic text-xl text-gold">
                          ₹{service.price.toLocaleString('en-IN')}
                        </span>
                        <span className="text-xs text-gold font-semibold font-body opacity-0 group-hover:opacity-100 transition-opacity">
                          Book Now →
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
