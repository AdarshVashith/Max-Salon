'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { staggerContainer, fadeUpItem } from '@/lib/animations';

const services = [
  {
    id: 'bridal-transformation',
    name: 'Maxx Bridal Transformation',
    originalPrice: '₹6,999',
    price: '₹4,999',
    tag: 'SIGNATURE',
    optionsText: '3 Packages Available',
    swatches: ['#D4AF37', '#E8C84A', '#F9F9F9'],
    image: 'https://images.unsplash.com/photo-1457972729786-0411a3b2b626?w=600&h=600&fit=crop',
  },
  {
    id: 'keratin-smoothing',
    name: 'Keratin Smoothing Treatment',
    originalPrice: '₹4,999',
    price: '₹2,999',
    tag: 'TRENDING',
    optionsText: '2 Variants Available',
    swatches: ['#3E2723', '#4E342E', '#5D4037'],
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&h=600&fit=crop',
  },
  {
    id: 'hydra-facial',
    name: 'Hydra Facial Glow',
    originalPrice: '₹2,499',
    price: '₹1,799',
    tag: 'NEW',
    optionsText: '4 Customizations Available',
    swatches: ['#F5F5DC', '#FDF5E6', '#FFF8DC'],
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&h=600&fit=crop',
  },
  {
    id: 'premium-hair-color',
    name: 'Premium Hair Color',
    originalPrice: '₹1,999',
    price: '₹1,299',
    tag: 'LIMITED',
    optionsText: '10 Shades Available',
    swatches: ['#800000', '#8B4513', '#D2691E'],
    image: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=600&h=600&fit=crop',
  },
];

export function BentoGrid() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section className="py-20 lg:py-28 bg-pearl" id="signature-services">
      <div className="section-container">
        {/* Heading */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="font-body font-medium text-[11px] text-gold tracking-[0.4em] uppercase block mb-3">
            MOST LOVED
          </span>
          <h2 className="font-display font-bold text-3xl md:text-[42px] text-charcoal leading-tight">
            Signature Services
          </h2>
        </motion.div>

        {/* E-commerce Style Grid */}
        <motion.div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {services.map((service) => (
            <motion.div key={service.id} variants={fadeUpItem}>
              <Link href={`/services/${service.id}`} className="block h-full">
                <div className="group flex flex-col h-full rounded-none transition-all duration-300">
                  
                  {/* Image Area - Square with subtle border like in reference */}
                  <div className="relative aspect-square mb-5 border border-smoke/60 bg-white p-2">
                    {/* Tag badge (Top Left) */}
                    <div className="absolute top-0 left-0 z-20">
                      <span className="bg-[#EADDB5] text-charcoal text-[10px] font-bold tracking-widest px-2 py-1 uppercase shadow-sm">
                        {service.tag}
                      </span>
                    </div>

                    {/* Actual Image */}
                    <div className="relative w-full h-full overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.name}
                        fill
                        className="object-cover transition-transform duration-700 ease-luxury group-hover:scale-[1.03]"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      />
                    </div>
                  </div>

                  {/* Content Area */}
                  <div className="flex flex-col flex-grow px-1">
                    <h3 className="font-display font-bold text-[15px] sm:text-[16px] text-charcoal leading-snug line-clamp-2">
                      {service.name}
                    </h3>

                    {/* Pricing */}
                    <div className="flex items-center gap-2 mt-4 mb-3">
                      <span className="text-[#888888] line-through text-[13px] font-body">
                        {service.originalPrice}
                      </span>
                      <span className="font-bold text-charcoal text-[18px] font-body tracking-tight">
                        {service.price}
                      </span>
                    </div>

                    {/* Options */}
                    <div className="flex items-center mb-6">
                      <p className="text-[11px] text-[#A0A0A0] font-body">
                        {service.optionsText}
                      </p>
                      <svg
                        className="w-3 h-3 text-[#A0A0A0] ml-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </div>

                    {/* Buy Now / Book Now Footer */}
                    <div className="mt-auto pt-4 flex items-center justify-between group-hover:opacity-80 transition-opacity">
                      <span className="text-[12px] font-bold text-charcoal uppercase tracking-[0.15em]">
                        Book Now
                      </span>
                      <svg
                        className="w-4 h-4 text-charcoal transition-transform duration-300 group-hover:translate-x-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>

                  {/* Bottom line indicator on hover (matches reference) */}
                  <div className="w-0 h-[2px] bg-charcoal mt-4 mx-auto transition-all duration-500 ease-out group-hover:w-16" />
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
