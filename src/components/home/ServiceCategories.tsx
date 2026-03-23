'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { staggerContainer, fadeUpItem } from '@/lib/animations';

const categories = [
  {
    name: 'Hair Care',
    count: 14,
    href: '/services/hair',
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=400&h=400&fit=crop&crop=center',
  },
  {
    name: 'Skin & Facial',
    count: 12,
    href: '/services/skin',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400&h=400&fit=crop&crop=center',
  },
  {
    name: 'Bridal Maxx',
    count: 8,
    href: '/services/bridal',
    image: 'https://images.unsplash.com/photo-1457972729786-0411a3b2b626?w=400&h=400&fit=crop&crop=center',
  },
  {
    name: 'Nail Art',
    count: 10,
    href: '/services/nails',
    image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=400&h=400&fit=crop&crop=center',
  },
  {
    name: 'Body Treatments',
    count: 9,
    href: '/services/body',
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=400&h=400&fit=crop&crop=center',
  },
  {
    name: 'Packages',
    count: 6,
    href: '/services/packages',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400&h=400&fit=crop&crop=center',
  },
];

export function ServiceCategories() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="py-20 lg:py-28 bg-pearl" id="service-categories">
      <div className="section-container">
        {/* Heading */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="font-display font-bold text-3xl md:text-4xl text-charcoal">
            Our Expertise
          </h2>
          <p className="font-accent italic font-light text-lg md:text-xl text-ash mt-3">
            Everything you need, crafted to perfection
          </p>
        </motion.div>

        {/* Circular Cards Grid */}
        <motion.div
          ref={ref}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8"
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {categories.map((cat) => (
            <motion.div key={cat.name} variants={fadeUpItem}>
              <Link href={cat.href} className="group flex flex-col items-center text-center gap-4">
                {/* Circular Image */}
                <div className="relative w-28 h-28 md:w-36 md:h-36 lg:w-40 lg:h-40 rounded-full overflow-hidden border-[3px] border-smoke transition-all duration-[400ms] ease-luxury group-hover:border-gold group-hover:shadow-xl group-hover:shadow-gold/15 group-hover:scale-105">
                  {/* Gold ring on hover */}
                  <div className="absolute inset-0 rounded-full border-[3px] border-transparent group-hover:border-gold/60 z-20 transition-all duration-[400ms] scale-110 opacity-0 group-hover:opacity-100 group-hover:scale-100" />
                  
                  {/* Image */}
                  <Image
                    src={cat.image}
                    alt={cat.name}
                    fill
                    className="object-cover transition-transform duration-[500ms] ease-luxury group-hover:scale-110"
                    sizes="(max-width: 768px) 112px, (max-width: 1024px) 144px, 160px"
                  />

                  {/* Dark overlay on hover */}
                  <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/25 transition-all duration-[400ms] z-10" />

                  {/* Gold shimmer ring */}
                  <div className="absolute inset-[-2px] rounded-full bg-gradient-to-br from-gold/0 via-gold/0 to-gold/0 group-hover:from-gold/30 group-hover:via-transparent group-hover:to-gold/30 transition-all duration-[500ms] z-0" />
                </div>

                {/* Text */}
                <div>
                  <p className="font-display font-semibold text-[15px] md:text-[17px] text-charcoal group-hover:text-gold transition-colors duration-300">
                    {cat.name}
                  </p>
                  <p className="font-body text-xs text-ash mt-0.5">
                    {cat.count} services
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
