'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Logo } from './Logo';
import { Button } from '@/components/design-system';
import { mobileMenuOverlay, mobileMenuLink, megaMenuVariants } from '@/lib/animations';
import { cn } from '@/lib/utils';

const navLinks = [
  { label: 'Services', href: '/services', hasMega: true },
  { label: 'Offers', href: '/offers' },
  { label: 'Locations', href: '/salons' },
  { label: 'Blog', href: '/blog' },
  { label: 'About', href: '/about' },
];

const serviceCategories = [
  { name: 'Hair Care', icon: '✂️', count: 14, href: '/services/hair' },
  { name: 'Skin & Facial', icon: '💎', count: 12, href: '/services/skin' },
  { name: 'Bridal Maxx', icon: '👑', count: 8, href: '/services/bridal' },
  { name: 'Nail Art', icon: '✨', count: 10, href: '/services/nails' },
  { name: 'Body Treatments', icon: '🌸', count: 9, href: '/services/body' },
  { name: 'Packages & Combos', icon: '🎀', count: 6, href: '/services/packages' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  return (
    <>
      <motion.nav
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-luxury',
          scrolled
            ? 'bg-pearl/[0.96] backdrop-blur-md shadow-sm'
            : isHome
            ? 'bg-transparent'
            : 'bg-pearl border-b border-charcoal/5 shadow-sm'
        )}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="section-container">
          <div
            className={cn(
              'flex items-center justify-between transition-all duration-500 ease-luxury',
              scrolled ? 'h-16' : 'h-20'
            )}
          >
            {/* Logo */}
            <Link href="/" aria-label="Maxx Salon Home">
              <Logo variant="dark" />
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => link.hasMega && setMegaOpen(true)}
                  onMouseLeave={() => link.hasMega && setMegaOpen(false)}
                >
                  <Link
                    href={link.href}
                    className="gold-underline font-body font-medium text-[13px] tracking-[0.04em] transition-colors duration-200 text-charcoal hover:text-gold"
                  >
                    {link.label}
                  </Link>

                  {/* Mega Menu */}
                  {link.hasMega && (
                    <AnimatePresence>
                      {megaOpen && (
                        <motion.div
                          className="absolute top-full left-1/2 -translate-x-1/2 pt-4"
                          variants={megaMenuVariants}
                          initial="hidden"
                          animate="visible"
                          exit="exit"
                        >
                          <div className="bg-white rounded-xl shadow-xl border border-smoke/50 p-6 w-[520px] grid grid-cols-2 gap-4">
                            <div className="space-y-1">
                              {serviceCategories.map((cat) => (
                                <Link
                                  key={cat.name}
                                  href={cat.href}
                                  className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-pearl-warm transition-colors group"
                                >
                                  <span className="text-lg">{cat.icon}</span>
                                  <div>
                                    <p className="text-sm font-medium text-charcoal group-hover:text-gold transition-colors">
                                      {cat.name}
                                    </p>
                                    <p className="text-xs text-ash">
                                      {cat.count} services
                                    </p>
                                  </div>
                                </Link>
                              ))}
                            </div>

                            {/* Featured Service */}
                            <div className="bg-charcoal rounded-lg p-4 flex flex-col justify-end relative overflow-hidden">
                              <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/80 to-transparent z-10" />
                              <div className="relative z-20">
                                <span className="text-[10px] uppercase tracking-widest text-gold font-semibold">
                                  Signature
                                </span>
                                <h4 className="font-display text-lg font-bold text-pearl mt-1">
                                  Maxx Bridal Transformation
                                </h4>
                                <p className="text-xs text-pearl/60 mt-1">
                                  Complete bridal beauty package
                                </p>
                                <span className="text-gold text-sm font-semibold mt-2 inline-block">
                                  Explore →
                                </span>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              ))}
            </div>

            {/* Right Side */}
            <div className="hidden lg:flex items-center gap-4">
              <span
                className="text-xs font-medium flex items-center gap-1.5 px-3 py-1.5 rounded-full text-charcoal bg-pearl-warm"
              >
                📍 Delhi NCR
              </span>
              <Link href="/book">
                <Button variant="primary" size="sm">
                  Book Now
                </Button>
              </Link>
            </div>

            {/* Mobile Hamburger */}
            <button
              className="lg:hidden relative w-8 h-8 flex flex-col justify-center items-center gap-1.5"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
            >
              <motion.span
                className="block w-6 h-[1.5px] transition-colors bg-charcoal"
                animate={{
                  rotate: mobileOpen ? 45 : 0,
                  y: mobileOpen ? 5 : 0,
                }}
              />
              <motion.span
                className={cn(
                  'block w-6 h-[1.5px] transition-colors',
                  scrolled ? 'bg-charcoal' : 'bg-pearl'
                )}
                animate={{ opacity: mobileOpen ? 0 : 1 }}
              />
              <motion.span
                className={cn(
                  'block w-6 h-[1.5px] transition-colors',
                  scrolled ? 'bg-charcoal' : 'bg-pearl'
                )}
                animate={{
                  rotate: mobileOpen ? -45 : 0,
                  y: mobileOpen ? -5 : 0,
                }}
              />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-charcoal flex flex-col justify-center items-center"
            variants={mobileMenuOverlay}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* Gold geometric pattern bg */}
            <div className="absolute inset-0 opacity-5">
              <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern
                    id="gold-pattern"
                    x="0"
                    y="0"
                    width="60"
                    height="60"
                    patternUnits="userSpaceOnUse"
                  >
                    <path
                      d="M30 0L60 30L30 60L0 30Z"
                      fill="none"
                      stroke="#D4AF37"
                      strokeWidth="0.5"
                    />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#gold-pattern)" />
              </svg>
            </div>

            <nav className="relative z-10 flex flex-col items-center gap-6">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.label}
                  custom={i}
                  variants={mobileMenuLink}
                  initial="hidden"
                  animate="visible"
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="font-display text-3xl font-bold text-pearl hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                custom={navLinks.length}
                variants={mobileMenuLink}
                initial="hidden"
                animate="visible"
                className="mt-6"
              >
                <Link href="/book" onClick={() => setMobileOpen(false)}>
                  <Button variant="primary" size="lg">
                    Book Appointment
                  </Button>
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
