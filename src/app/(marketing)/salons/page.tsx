'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button, Badge } from '@/components/design-system';
import { staggerContainer, fadeUpItem, luxuryEase } from '@/lib/animations';

const cities = [
  'Delhi', 'Mumbai', 'Bangalore', 'Hyderabad', 'Pune', 'Chennai',
  'Kolkata', 'Ahmedabad', 'Jaipur', 'Lucknow', 'Chandigarh', 'Indore',
];

const allSalons: Record<string, Array<{
  name: string;
  area: string;
  address: string;
  rating: number;
  reviews: number;
  phone: string;
  slug: string;
}>> = {
  Delhi: [
    { name: 'Maxx Connaught Place', area: 'connaught-place', address: 'Block A, Inner Circle, CP, New Delhi 110001', rating: 4.9, reviews: 324, phone: '+91-11-40001234', slug: 'delhi/connaught-place' },
    { name: 'Maxx Saket', area: 'saket', address: 'Select Citywalk, Saket, New Delhi 110017', rating: 4.8, reviews: 218, phone: '+91-11-40005678', slug: 'delhi/saket' },
    { name: 'Maxx Dwarka', area: 'dwarka', address: 'Sector 12 Market, Dwarka, New Delhi 110075', rating: 4.7, reviews: 156, phone: '+91-11-40009012', slug: 'delhi/dwarka' },
    { name: 'Maxx Lajpat Nagar', area: 'lajpat-nagar', address: 'Central Market, Lajpat Nagar II, New Delhi 110024', rating: 4.8, reviews: 189, phone: '+91-11-40003456', slug: 'delhi/lajpat-nagar' },
  ],
  Mumbai: [
    { name: 'Maxx Bandra', area: 'bandra', address: 'Linking Road, Bandra West, Mumbai 400050', rating: 4.9, reviews: 412, phone: '+91-22-40001234', slug: 'mumbai/bandra' },
    { name: 'Maxx Andheri', area: 'andheri', address: 'Lokhandwala Complex, Andheri West, Mumbai 400053', rating: 4.8, reviews: 287, phone: '+91-22-40005678', slug: 'mumbai/andheri' },
    { name: 'Maxx Juhu', area: 'juhu', address: 'Juhu Tara Road, Juhu, Mumbai 400049', rating: 4.7, reviews: 203, phone: '+91-22-40009012', slug: 'mumbai/juhu' },
  ],
  Bangalore: [
    { name: 'Maxx Indiranagar', area: 'indiranagar', address: '100 Feet Road, Indiranagar, Bangalore 560038', rating: 4.9, reviews: 356, phone: '+91-80-40001234', slug: 'bangalore/indiranagar' },
    { name: 'Maxx Koramangala', area: 'koramangala', address: '80 Feet Road, Koramangala, Bangalore 560034', rating: 4.8, reviews: 234, phone: '+91-80-40005678', slug: 'bangalore/koramangala' },
  ],
};

// Fill remaining cities
cities.forEach((city) => {
  if (!allSalons[city]) {
    allSalons[city] = [
      { name: `Maxx ${city} Central`, area: 'central', address: `City Center, ${city}`, rating: 4.8, reviews: Math.floor(100 + Math.random() * 250), phone: '+91-9999999999', slug: `${city.toLowerCase()}/central` },
      { name: `Maxx ${city} Mall`, area: 'mall-road', address: `Main Mall Road, ${city}`, rating: 4.7, reviews: Math.floor(80 + Math.random() * 200), phone: '+91-9999999999', slug: `${city.toLowerCase()}/mall-road` },
    ];
  }
});

export default function LocationsPage() {
  const [selectedCity, setSelectedCity] = useState('Delhi');

  const salons = allSalons[selectedCity] || [];

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
            <h1 className="font-display font-black text-4xl md:text-5xl lg:text-6xl text-pearl">
              Our Locations
            </h1>
            <p className="font-body text-base text-pearl/60 mt-4 max-w-lg mx-auto">
              500+ salons across 12 cities. Find the nearest Maxx Salon and book your appointment today.
            </p>
          </motion.div>
        </div>
      </section>

      {/* City Selector + Salons */}
      <section className="py-12 lg:py-16 bg-pearl">
        <div className="section-container">
          {/* City Pills */}
          <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-4 justify-start lg:justify-center mb-10">
            {cities.map((city) => (
              <button
                key={city}
                onClick={() => setSelectedCity(city)}
                className={`px-5 py-2.5 rounded-full text-sm font-body font-medium whitespace-nowrap transition-all duration-300 ${
                  selectedCity === city
                    ? 'bg-gold text-charcoal shadow-md'
                    : 'bg-ivory border border-smoke text-ash hover:border-gold hover:text-gold'
                }`}
              >
                {city}
              </button>
            ))}
          </div>

          {/* Salons Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-5"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            key={selectedCity}
          >
            {salons.map((salon) => (
              <motion.div key={salon.name} variants={fadeUpItem}>
                <div className="bg-ivory border border-smoke rounded-[20px] p-6 hover:shadow-lg hover:border-gold/20 transition-all duration-300">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-display font-bold text-lg text-charcoal">
                        {salon.name}
                      </h3>
                      <p className="font-body text-sm text-ash mt-1">
                        {salon.address}
                      </p>
                    </div>
                    <div className="text-right shrink-0 ml-4">
                      <span className="font-body text-sm text-gold flex items-center gap-1">
                        ⭐ {salon.rating}
                      </span>
                      <span className="text-xs text-ash">
                        {salon.reviews} reviews
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 mt-3 text-xs text-ash font-body">
                    <span>📞 {salon.phone}</span>
                    <span>·</span>
                    <span>🕐 10 AM – 9 PM</span>
                  </div>

                  <div className="flex gap-3 mt-4">
                    <Link href="/book">
                      <Button variant="primary" size="sm">
                        Book This Salon
                      </Button>
                    </Link>
                    <Link href={`/${salon.slug}`}>
                      <Button variant="ghost" size="sm" className="text-ash border border-smoke hover:border-gold">
                        View Details
                      </Button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
