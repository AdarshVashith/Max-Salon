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
  {
    name: 'Hair Care',
    count: 14,
    href: '/services/hair',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><line x1="20" y1="4" x2="8.12" y2="15.88"/><line x1="14.47" y1="14.48" x2="20" y2="20"/><line x1="8.12" y1="8.12" x2="12" y2="12"/></svg>
    )
  },
  {
    name: 'Skin & Facial',
    count: 12,
    href: '/services/skin',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 3h12l4 6-10 13L2 9Z"/><path d="M11 3 8 9l4 13 4-13-3-6"/><path d="M2 9h20"/></svg>
    )
  },
  {
    name: 'Bridal Maxx',
    count: 8,
    href: '/services/bridal',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m2 4 3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14"/></svg>
    )
  },
  {
    name: 'Nail Art',
    count: 10,
    href: '/services/nails',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/><path d="M20 3v4"/><path d="M22 5h-4"/><path d="M4 17v2"/><path d="M5 18H3"/></svg>
    )
  },
  {
    name: 'Body Treatments',
    count: 9,
    href: '/services/body',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 7.5a4.5 4.5 0 1 1 3.182-7.682A4.5 4.5 0 1 1 12 7.5Z"/><path d="M12 7.5a4.5 4.5 0 1 0-3.182-7.682A4.5 4.5 0 1 0 12 7.5Z"/><path d="M12 7.5a4.5 4.5 0 1 1 7.682 3.182A4.5 4.5 0 1 1 12 7.5Z"/><path d="M12 7.5a4.5 4.5 0 1 0-7.682 3.182A4.5 4.5 0 1 0 12 7.5Z"/><path d="M12 7.5a4.5 4.5 0 1 1 3.182 7.682A4.5 4.5 0 1 1 12 7.5Z"/><path d="M12 7.5a4.5 4.5 0 1 0-3.182 7.682A4.5 4.5 0 1 0 12 7.5Z"/><circle cx="12" cy="12" r="3"/></svg>
    )
  },
  {
    name: 'Packages & Combos',
    count: 6,
    href: '/services/packages',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="8" width="18" height="4" rx="1"/><path d="M12 8v13"/><path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"/><path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5"/></svg>
    )
  },
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
            <div className="hidden lg:flex items-center gap-5">
              <span className="text-[11px] font-body tracking-widest text-charcoal/70 uppercase">
                Delhi NCR
              </span>
              <Link href="/book">
                <Button variant="golden" size="sm">
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
                  <Button variant="golden" size="lg">
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
