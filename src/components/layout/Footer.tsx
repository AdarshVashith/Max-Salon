'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Logo } from './Logo';
import { Button, Input } from '@/components/design-system';

const serviceLinks = [
  { label: 'Hair Care', href: '/services/hair' },
  { label: 'Skin & Facial', href: '/services/skin' },
  { label: 'Bridal Maxx', href: '/services/bridal' },
  { label: 'Nail Art', href: '/services/nails' },
  { label: 'Body Spa', href: '/services/body' },
];

const cityLinks = [
  { label: 'Delhi', href: '/delhi' },
  { label: 'Mumbai', href: '/mumbai' },
  { label: 'Bangalore', href: '/bangalore' },
  { label: 'Hyderabad', href: '/hyderabad' },
  { label: 'Pune', href: '/pune' },
  { label: 'Chennai', href: '/chennai' },
];

const socialLinks = [
  {
    label: 'Instagram',
    href: 'https://instagram.com/maxxsalon',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    label: 'Facebook',
    href: 'https://facebook.com/maxxsalon',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    label: 'YouTube',
    href: 'https://youtube.com/@maxxsalon',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    label: 'Pinterest',
    href: 'https://pinterest.com/maxxsalon',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
      </svg>
    ),
  },
];

export function Footer() {
  const [email, setEmail] = useState('');

  return (
    <footer className="bg-charcoal text-pearl border-t border-gold/30 relative">
      {/* Gold glow line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent" />

      <div className="section-container py-16 lg:py-20">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Col 1: Brand */}
          <div className="space-y-6">
            <Logo variant="light" />
            <p className="font-accent italic text-pearl/60 text-sm leading-relaxed">
              Where Beauty Meets Artistry
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full border border-pearl/15 flex items-center justify-center text-pearl/50 hover:text-gold hover:border-gold/50 transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Col 2: Services */}
          <div>
            <h4 className="font-display text-lg font-bold mb-5">Services</h4>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-pearl/60 hover:text-gold transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Cities */}
          <div>
            <h4 className="font-display text-lg font-bold mb-5">Our Cities</h4>
            <ul className="space-y-3">
              {cityLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-pearl/60 hover:text-gold transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div>
            <h4 className="font-display text-lg font-bold mb-5">Contact</h4>
            <div className="space-y-3 text-sm text-pearl/60">
              <p className="flex items-center gap-2">
                <span>📞</span>
                <a href="tel:+919999999999" className="hover:text-gold transition-colors">
                  +91 99999 99999
                </a>
              </p>
              <p className="flex items-center gap-2">
                <span>✉️</span>
                <a href="mailto:hello@maxxsalon.in" className="hover:text-gold transition-colors">
                  hello@maxxsalon.in
                </a>
              </p>
              <a
                href="https://wa.me/919999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/10 transition-all text-xs font-medium mt-2"
              >
                💬 Chat on WhatsApp
              </a>
              <div className="pt-2">
                <p className="text-xs text-pearl/40">Hours</p>
                <p className="text-pearl/60">Mon–Sat: 10 AM – 9 PM</p>
                <p className="text-pearl/60">Sun: 11 AM – 8 PM</p>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Row */}
        <div className="mt-16 pt-8 border-t border-pearl/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h5 className="font-display text-xl font-bold">
                Get exclusive Maxx offers
              </h5>
              <p className="text-sm text-pearl/50 mt-1">
                Join the Maxx Club for members-only deals and beauty tips.
              </p>
            </div>
            <form
              className="flex gap-3 w-full md:w-auto"
              onSubmit={(e) => {
                e.preventDefault();
                setEmail('');
              }}
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="bg-pearl/5 border border-pearl/15 rounded-full px-5 py-3 text-sm text-pearl placeholder:text-pearl/30 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 w-full md:w-72"
                aria-label="Email address for newsletter"
              />
              <Button variant="primary" size="md" type="submit">
                Join the Maxx Club
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-6 border-t border-pearl/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-pearl/40">
            © 2025 Maxx Salon. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs text-pearl/40">
            <Link href="/privacy" className="hover:text-gold transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-gold transition-colors">
              Terms
            </Link>
            <span>Made in India 🇮🇳</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
