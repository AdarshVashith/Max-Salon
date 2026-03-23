'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button, Badge } from '@/components/design-system';
import { staggerContainer, fadeUpItem, luxuryEase } from '@/lib/animations';

const values = [
  {
    title: 'Precision',
    description: 'Every cut, color, and treatment is executed with meticulous attention to detail.',
    icon: '✦',
  },
  {
    title: 'Premium Products',
    description: 'We exclusively use international brands to ensure the best results for your hair and skin.',
    icon: '◆',
  },
  {
    title: 'Expert Team',
    description: 'Our stylists are academy-trained professionals with years of premium salon experience.',
    icon: '★',
  },
  {
    title: 'Hygiene First',
    description: 'ISO-compliant sanitization protocols. Every tool is sterilized. Every surface is spotless.',
    icon: '◇',
  },
];

const team = [
  { name: 'Meera Kapoor', role: 'Creative Director', specialty: 'Bridal & Color', experience: '12 years', initials: 'MK' },
  { name: 'Raj Malhotra', role: 'Senior Stylist', specialty: 'Hair Architecture', experience: '10 years', initials: 'RM' },
  { name: 'Anita Singh', role: 'Skin Expert', specialty: 'Advanced Facials', experience: '8 years', initials: 'AS' },
  { name: 'Vikram Patel', role: 'Style Director', specialty: 'Men\'s Grooming', experience: '9 years', initials: 'VP' },
  { name: 'Priya Nair', role: 'Nail Artist', specialty: 'Nail Art & Extensions', experience: '6 years', initials: 'PN' },
  { name: 'Dr. Sneha Mehta', role: 'Trichologist', specialty: 'Scalp & Hair Health', experience: '15 years', initials: 'SM' },
];

const milestones = [
  { year: '2010', event: 'Maxx Salon founded in Delhi with a single outlet' },
  { year: '2013', event: 'Expanded to 10 locations across Delhi NCR' },
  { year: '2016', event: 'Launched in Mumbai, Bangalore, and Hyderabad' },
  { year: '2019', event: 'Reached 200 salons. Launched Bridal Maxx division' },
  { year: '2022', event: 'Crossed 1 million clients. Entered 10 cities' },
  { year: '2025', event: '500+ locations across 12 cities. 2M+ happy clients' },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-charcoal pt-28 pb-20">
        <div className="section-container">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: luxuryEase }}
          >
            <p className="font-accent italic text-sm text-gold tracking-[0.3em] uppercase mb-4">
              Our Story
            </p>
            <h1 className="font-display font-black text-4xl md:text-5xl lg:text-6xl text-pearl leading-tight">
              Where Beauty
              <br />
              Meets <span className="italic text-gold">Artistry</span>
            </h1>
            <p className="font-body font-light text-base text-pearl/60 mt-6 leading-relaxed max-w-xl mx-auto">
              Since 2010, Maxx Salon has been redefining the salon experience in India. What started as a single outlet in Delhi has grown into the country&apos;s most trusted premium salon chain.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 lg:py-24 bg-pearl">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: luxuryEase }}
            >
              <h2 className="font-display font-bold text-3xl md:text-4xl text-charcoal">
                Our Mission
              </h2>
              <p className="font-body text-base text-ash mt-4 leading-relaxed">
                To make world-class beauty services accessible to every Indian. We believe that everyone deserves to feel confident, beautiful, and pampered — not just on special occasions, but as part of their everyday self-care routine.
              </p>
              <p className="font-body text-base text-ash mt-4 leading-relaxed">
                At Maxx Salon, we combine international techniques with deep understanding of Indian beauty, creating experiences that are aspirational yet approachable, luxurious yet familiar.
              </p>
              <div className="flex gap-8 mt-8">
                <div>
                  <p className="font-display font-black text-3xl text-gold">500+</p>
                  <p className="text-xs text-ash mt-1 uppercase tracking-wider">Locations</p>
                </div>
                <div>
                  <p className="font-display font-black text-3xl text-gold">2M+</p>
                  <p className="text-xs text-ash mt-1 uppercase tracking-wider">Happy Clients</p>
                </div>
                <div>
                  <p className="font-display font-black text-3xl text-gold">15</p>
                  <p className="text-xs text-ash mt-1 uppercase tracking-wider">Years</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="relative h-[400px] rounded-[24px] overflow-hidden"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15, ease: luxuryEase }}
            >
              <Image
                src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&h=500&fit=crop"
                alt="Maxx Salon interior"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 lg:py-24 bg-pearl-warm">
        <div className="section-container">
          <motion.h2
            className="font-display font-bold text-3xl md:text-4xl text-charcoal text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: luxuryEase }}
          >
            What Drives Us
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {values.map((value) => (
              <motion.div key={value.title} variants={fadeUpItem}>
                <div className="bg-pearl border border-smoke rounded-[20px] p-6 text-center hover:shadow-md transition-all duration-300">
                  <span className="text-gold text-3xl">{value.icon}</span>
                  <h3 className="font-display font-bold text-lg text-charcoal mt-4">
                    {value.title}
                  </h3>
                  <p className="font-body text-sm text-ash mt-2 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 lg:py-24 bg-pearl">
        <div className="section-container">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display font-bold text-3xl md:text-4xl text-charcoal">
              Meet Our Experts
            </h2>
            <p className="font-accent italic text-lg text-ash mt-3">
              The talented people behind your Maxx experience
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {team.map((member) => (
              <motion.div
                key={member.name}
                variants={fadeUpItem}
                className="text-center"
              >
                <div className="w-20 h-20 md:w-24 md:h-24 mx-auto rounded-full bg-charcoal text-gold flex items-center justify-center font-display font-bold text-xl md:text-2xl border-2 border-gold/20">
                  {member.initials}
                </div>
                <h4 className="font-body font-semibold text-sm text-charcoal mt-3">
                  {member.name}
                </h4>
                <p className="text-[11px] text-gold font-medium mt-0.5">{member.role}</p>
                <p className="text-[10px] text-ash mt-0.5">{member.specialty}</p>
                <p className="text-[10px] text-ash">{member.experience}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 lg:py-24 bg-charcoal">
        <div className="section-container">
          <motion.h2
            className="font-display font-bold text-3xl md:text-4xl text-pearl text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Our Journey
          </motion.h2>

          <div className="max-w-2xl mx-auto space-y-0">
            {milestones.map((milestone, i) => (
              <motion.div
                key={milestone.year}
                className="flex gap-6 pb-8 relative"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5, ease: luxuryEase }}
              >
                {/* Line */}
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 rounded-full bg-gold shrink-0 mt-1" />
                  {i < milestones.length - 1 && (
                    <div className="w-[1px] flex-1 bg-pearl/10 mt-2" />
                  )}
                </div>
                {/* Content */}
                <div>
                  <p className="font-display font-bold text-xl text-gold">
                    {milestone.year}
                  </p>
                  <p className="font-body text-sm text-pearl/70 mt-1">
                    {milestone.event}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gold">
        <div className="section-container text-center">
          <h2 className="font-display font-black text-3xl md:text-4xl text-charcoal">
            Join the Maxx Family
          </h2>
          <p className="font-body text-base text-charcoal/70 mt-3 max-w-md mx-auto">
            Experience the difference that 15 years of excellence makes. Book your first appointment today.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mt-8">
            <Link href="/book">
              <Button variant="secondary" size="lg">
                Book Appointment
              </Button>
            </Link>
            <Link href="/salons">
              <Button variant="ghost" size="lg" className="border-2 border-charcoal/30 text-charcoal">
                Find a Salon
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
