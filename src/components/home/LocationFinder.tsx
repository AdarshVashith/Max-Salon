'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/design-system';
import { luxuryEase } from '@/lib/animations';

const cities = [
  'Delhi',
  'Mumbai',
  'Bangalore',
  'Hyderabad',
  'Pune',
  'Chennai',
  'Kolkata',
  'Ahmedabad',
  'Jaipur',
  'Lucknow',
  'Chandigarh',
  'Indore',
];

const salonLocations: Record<string, Array<{
  name: string;
  area: string;
  rating: number;
  reviews: number;
  address: string;
}>> = {
  Delhi: [
    { name: 'Maxx Connaught Place', area: 'Connaught Place', rating: 4.9, reviews: 324, address: 'Block A, CP, New Delhi 110001' },
    { name: 'Maxx Saket', area: 'Saket', rating: 4.8, reviews: 218, address: 'Select Citywalk, Saket, New Delhi 110017' },
    { name: 'Maxx Dwarka', area: 'Dwarka', rating: 4.7, reviews: 156, address: 'Sector 12 Market, Dwarka, New Delhi 110075' },
  ],
  Mumbai: [
    { name: 'Maxx Bandra', area: 'Bandra West', rating: 4.9, reviews: 412, address: 'Linking Road, Bandra West, Mumbai 400050' },
    { name: 'Maxx Andheri', area: 'Andheri', rating: 4.8, reviews: 287, address: 'Lokhandwala Complex, Andheri West, Mumbai 400053' },
  ],
  Bangalore: [
    { name: 'Maxx Indiranagar', area: 'Indiranagar', rating: 4.9, reviews: 356, address: '100 Feet Road, Indiranagar, Bangalore 560038' },
    { name: 'Maxx Koramangala', area: 'Koramangala', rating: 4.8, reviews: 234, address: '80 Feet Road, Koramangala, Bangalore 560034' },
  ],
};

// Fill remaining cities with sample data
cities.forEach((city) => {
  if (!salonLocations[city]) {
    salonLocations[city] = [
      {
        name: `Maxx ${city} Central`,
        area: 'City Center',
        rating: 4.8,
        reviews: Math.floor(100 + Math.random() * 300),
        address: `Main Road, ${city}`,
      },
    ];
  }
});

export function LocationFinder() {
  const [selectedCity, setSelectedCity] = useState('Delhi');

  return (
    <section className="py-20 lg:py-28 bg-pearl" id="location-finder">
      <div className="section-container">
        {/* Heading */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: luxuryEase }}
        >
          <h2 className="font-display font-bold text-3xl md:text-[40px] text-charcoal">
            Find Maxx Salon Near You
          </h2>
          <p className="font-accent italic font-light text-lg text-ash mt-3">
            12 cities. 500+ locations. Always nearby.
          </p>
        </motion.div>

        {/* City Pill Selector */}
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

        {/* Map + Locations */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* Map Placeholder */}
          <div className="lg:col-span-3 rounded-[20px] overflow-hidden bg-charcoal relative h-[360px] md:h-[440px]">
            {/* Dark styled map placeholder */}
            <div className="absolute inset-0 bg-[#1a1a1a]">
              {/* Grid lines */}
              <svg className="w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="map-grid" width="60" height="60" patternUnits="userSpaceOnUse">
                    <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#D4AF37" strokeWidth="0.5" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#map-grid)" />
              </svg>
              {/* Sample pins */}
              {salonLocations[selectedCity]?.map((loc, i) => (
                <motion.div
                  key={loc.name}
                  className="absolute"
                  style={{
                    top: `${30 + i * 20}%`,
                    left: `${25 + i * 25}%`,
                  }}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: i * 0.1, type: 'spring' }}
                >
                  <div className="relative group cursor-pointer">
                    <div className="w-8 h-8 bg-gold rounded-full flex items-center justify-center shadow-lg animate-pulse">
                      <span className="text-charcoal text-[10px] font-bold">M</span>
                    </div>
                    {/* Tooltip */}
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                      <div className="bg-pearl rounded-lg shadow-lg p-3 whitespace-nowrap">
                        <p className="font-body font-semibold text-xs text-charcoal">{loc.name}</p>
                        <p className="font-body text-[10px] text-ash">⭐ {loc.rating}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            {/* Overlay text */}
            <div className="absolute bottom-4 left-4 z-10">
              <p className="font-body text-xs text-pearl/50">
                Interactive map powered by Google Maps
              </p>
            </div>
          </div>

          {/* Locations List */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="font-display font-bold text-xl text-charcoal">
              {selectedCity}
            </h3>
            {salonLocations[selectedCity]?.map((loc) => (
              <motion.div
                key={loc.name}
                className="bg-ivory border border-smoke rounded-xl p-4 hover:border-gold/30 hover:shadow-md transition-all duration-300"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
              >
                <h4 className="font-display font-semibold text-base text-charcoal">
                  {loc.name}
                </h4>
                <p className="font-body text-xs text-ash mt-1">
                  {loc.address}
                </p>
                <div className="flex items-center gap-3 mt-2">
                  <span className="font-body text-xs text-gold flex items-center gap-1">
                    ⭐ {loc.rating}
                    <span className="text-ash">
                      ({loc.reviews} reviews)
                    </span>
                  </span>
                </div>
                <div className="flex gap-2 mt-3">
                  <Button variant="primary" size="sm">
                    Book This Salon
                  </Button>
                  <Button variant="ghost" size="sm" className="text-ash">
                    Get Directions
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
