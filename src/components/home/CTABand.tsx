'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/design-system';
import { luxuryEase } from '@/lib/animations';

export function CTABand() {
  return (
    <section className="bg-gold py-16 md:py-20" id="cta-band">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left Text */}
          <motion.h2
            className="font-display font-black text-3xl md:text-4xl lg:text-[48px] text-charcoal text-center md:text-left leading-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: luxuryEase }}
          >
            Ready for Your
            <br />
            Maxx Moment?
          </motion.h2>

          {/* Right CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15, ease: luxuryEase }}
          >
            <Link href="/book">
              <Button
                variant="secondary"
                size="lg"
                className="text-base px-10 py-4"
              >
                Book Appointment
              </Button>
            </Link>
            <a
              href="https://wa.me/919999999999"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="ghost"
                size="lg"
                className="border-2 border-charcoal/30 text-charcoal hover:bg-charcoal/10 hover:text-charcoal text-base px-10 py-4"
              >
                💬 Chat with Us
              </Button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
