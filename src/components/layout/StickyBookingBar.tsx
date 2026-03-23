'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence, useScroll } from 'framer-motion';
import { stickyBarVariants } from '@/lib/animations';
import { Button } from '@/components/design-system';

export function StickyBookingBar() {
  const [visible, setVisible] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    const unsubscribe = scrollY.on('change', (latest) => {
      setVisible(latest > window.innerHeight);
    });
    return () => unsubscribe();
  }, [scrollY]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed bottom-0 left-0 right-0 z-40 lg:hidden"
          variants={stickyBarVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <div className="bg-charcoal/95 backdrop-blur-md border-t border-gold/20 px-4 py-3 flex items-center justify-between">
            <div>
              <p className="text-pearl text-xs font-medium">
                Maxx Salon
              </p>
              <p className="text-gold text-[11px]">
                Premium Salon & Spa
              </p>
            </div>
            <Link href="/book">
              <Button variant="primary" size="sm" className="cta-pulse">
                Book Appointment →
              </Button>
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
