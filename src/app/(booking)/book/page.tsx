'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button, Badge, Input } from '@/components/design-system';
import { Logo } from '@/components/layout/Logo';
import { luxuryEase } from '@/lib/animations';

const serviceCategories = [
  { id: 'all', label: 'All' },
  { id: 'hair', label: 'Hair' },
  { id: 'skin', label: 'Skin' },
  { id: 'bridal', label: 'Bridal' },
  { id: 'nails', label: 'Nails' },
  { id: 'body', label: 'Body' },
];

const allServices = [
  {
    id: 'haircut-premium',
    name: 'Premium Haircut & Styling',
    category: 'hair',
    duration: 45,
    price: 799,
    description: 'Expert cut & style with wash and blow-dry',
    isPopular: true,
    addOns: [{ name: 'Add Hair Spa', price: 499 }],
  },
  {
    id: 'keratin-treatment',
    name: 'Keratin Smoothing Treatment',
    category: 'hair',
    duration: 180,
    price: 2999,
    description: 'Silky smooth hair that lasts 4–6 months',
    isPopular: false,
    isNew: true,
    addOns: [],
  },
  {
    id: 'hair-color-global',
    name: 'Global Hair Color',
    category: 'hair',
    duration: 120,
    price: 1299,
    description: 'Full coverage color with premium products',
    isPopular: true,
    addOns: [{ name: 'Add Highlights', price: 999 }],
  },
  {
    id: 'hydra-facial',
    name: 'Hydra Facial Glow',
    category: 'skin',
    duration: 60,
    price: 1799,
    description: 'Deep hydration facial for radiant skin',
    isPopular: true,
    addOns: [{ name: 'Add LED Therapy', price: 399 }],
  },
  {
    id: 'gold-facial',
    name: 'Maxx Gold Facial',
    category: 'skin',
    duration: 75,
    price: 1499,
    description: '24K gold infused luxury facial treatment',
    isPopular: false,
    addOns: [],
  },
  {
    id: 'bridal-complete',
    name: 'Maxx Bridal Transformation',
    category: 'bridal',
    duration: 240,
    price: 4999,
    description: 'Complete bridal makeup and hair styling',
    isPopular: true,
    addOns: [{ name: 'Add Draping', price: 999 }],
  },
  {
    id: 'nail-art-premium',
    name: 'Premium Nail Art',
    category: 'nails',
    duration: 60,
    price: 999,
    description: 'Designer nail art with gel polish',
    isPopular: false,
    isNew: true,
    addOns: [],
  },
  {
    id: 'body-massage',
    name: 'Aromatherapy Full Body Massage',
    category: 'body',
    duration: 90,
    price: 1999,
    description: 'Relaxing full-body massage with essential oils',
    isPopular: true,
    addOns: [{ name: 'Add Hot Stones', price: 499 }],
  },
];

interface SelectedService {
  id: string;
  name: string;
  price: number;
  duration: number;
}

export default function BookingStep1() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedServices, setSelectedServices] = useState<SelectedService[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredServices = allServices.filter((s) => {
    const matchesCategory =
      selectedCategory === 'all' || s.category === selectedCategory;
    const matchesSearch = s.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const totalPrice = selectedServices.reduce((sum, s) => sum + s.price, 0);
  const totalDuration = selectedServices.reduce((sum, s) => sum + s.duration, 0);

  const toggleService = (service: typeof allServices[0]) => {
    const exists = selectedServices.find((s) => s.id === service.id);
    if (exists) {
      setSelectedServices(selectedServices.filter((s) => s.id !== service.id));
    } else {
      setSelectedServices([
        ...selectedServices,
        {
          id: service.id,
          name: service.name,
          price: service.price,
          duration: service.duration,
        },
      ]);
    }
  };

  const isSelected = (id: string) =>
    selectedServices.some((s) => s.id === id);

  return (
    <div className="min-h-screen bg-pearl">
      {/* Header */}
      <div className="bg-charcoal">
        <div className="section-container py-4 flex items-center justify-between">
          <Link href="/">
            <Logo variant="light" />
          </Link>
          <div className="text-pearl/60 text-sm font-body">
            Step 1 of 3 — <span className="text-gold">Choose Services</span>
          </div>
        </div>
        {/* Progress Bar */}
        <div className="h-1 bg-charcoal-80">
          <div className="h-full w-1/3 bg-gold rounded-r-full transition-all duration-500" />
        </div>
      </div>

      <div className="section-container py-8 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Left: Summary */}
          <div className="lg:col-span-2 order-2 lg:order-1">
            <div className="lg:sticky lg:top-24 bg-ivory border border-smoke rounded-[20px] p-6">
              <h3 className="font-display font-bold text-xl text-charcoal mb-4">
                Your Booking
              </h3>

              <div className="space-y-2 text-sm text-ash mb-4">
                <p className="flex items-center gap-2">
                  📍 <span>Maxx Salon, Delhi NCR</span>
                </p>
              </div>

              {selectedServices.length === 0 ? (
                <p className="text-sm text-ash/60 py-8 text-center">
                  Select services to get started
                </p>
              ) : (
                <div className="space-y-3 mb-6">
                  {selectedServices.map((s) => (
                    <div
                      key={s.id}
                      className="flex items-center justify-between bg-pearl-warm rounded-lg p-3"
                    >
                      <div>
                        <p className="font-body font-medium text-sm text-charcoal">
                          {s.name}
                        </p>
                        <p className="text-xs text-ash">
                          {s.duration} min
                        </p>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="font-body font-semibold text-sm">
                          ₹{s.price.toLocaleString('en-IN')}
                        </span>
                        <button
                          onClick={() =>
                            setSelectedServices(
                              selectedServices.filter((sel) => sel.id !== s.id)
                            )
                          }
                          className="text-ash hover:text-error text-lg leading-none"
                          aria-label={`Remove ${s.name}`}
                        >
                          ×
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {selectedServices.length > 0 && (
                <>
                  <div className="border-t border-smoke pt-4 flex items-center justify-between mb-6">
                    <div>
                      <p className="text-xs text-ash">Total</p>
                      <p className="font-display font-bold text-2xl text-gold">
                        ₹{totalPrice.toLocaleString('en-IN')}
                      </p>
                    </div>
                    <p className="text-xs text-ash">
                      ~{totalDuration} min
                    </p>
                  </div>
                  <Link href="/book/slot">
                    <Button variant="primary" fullWidth size="lg">
                      Continue →
                    </Button>
                  </Link>
                </>
              )}

              <button className="w-full text-center text-xs text-gold mt-4 font-body hover:underline">
                Need help choosing? Ask our AI
              </button>
            </div>
          </div>

          {/* Right: Services */}
          <div className="lg:col-span-3 order-1 lg:order-2">
            {/* Search */}
            <div className="mb-6">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search services... (⌘K)"
                className="w-full bg-ivory border border-smoke rounded-xl px-5 py-3.5 text-sm font-body text-charcoal placeholder:text-ash/50 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20"
              />
            </div>

            {/* Filter Pills */}
            <div className="flex gap-2 overflow-x-auto scrollbar-hide mb-8">
              {serviceCategories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 rounded-full text-sm font-body font-medium whitespace-nowrap transition-all duration-300 ${
                    selectedCategory === cat.id
                      ? 'bg-gold text-charcoal'
                      : 'bg-ivory border border-smoke text-ash hover:border-gold hover:text-gold'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Service Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredServices.map((service, i) => (
                <motion.div
                  key={service.id}
                  className={`bg-ivory border rounded-[16px] p-5 transition-all duration-300 ${
                    isSelected(service.id)
                      ? 'border-gold shadow-gold'
                      : 'border-smoke hover:border-ash/30'
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.4 }}
                >
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <div className="flex items-start gap-2 mb-1">
                        <h4 className="font-display font-semibold text-base text-charcoal">
                          {service.name}
                        </h4>
                        {service.isPopular && <Badge variant="trending">Popular</Badge>}
                        {service.isNew && <Badge variant="new">New</Badge>}
                      </div>
                      <p className="text-xs text-ash flex items-center gap-1">
                        ⏱ {service.duration} min
                      </p>
                      <p className="text-xs text-ash mt-1">
                        {service.description}
                      </p>
                    </div>
                    <p className="font-body font-bold text-lg text-charcoal shrink-0 ml-3">
                      ₹{service.price.toLocaleString('en-IN')}
                    </p>
                  </div>

                  {/* Add-ons */}
                  {service.addOns.length > 0 && (
                    <div className="flex gap-2 mt-3">
                      {service.addOns.map((addon) => (
                        <span
                          key={addon.name}
                          className="text-[11px] px-2.5 py-1 rounded-full bg-pearl-warm border border-smoke text-ash font-body"
                        >
                          {addon.name} +₹{addon.price}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Add/Remove Button */}
                  <button
                    onClick={() => toggleService(service)}
                    className={`mt-4 w-full py-2.5 rounded-lg font-body font-semibold text-sm transition-all duration-300 ${
                      isSelected(service.id)
                        ? 'bg-gold text-charcoal'
                        : 'border-2 border-gold/30 text-gold hover:bg-gold hover:text-charcoal'
                    }`}
                  >
                    {isSelected(service.id) ? '✓ Added' : '+ Add'}
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
