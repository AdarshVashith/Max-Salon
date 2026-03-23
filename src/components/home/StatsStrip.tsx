'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';

const stats = [
  { value: 500, suffix: '+', label: 'Salons Nationwide' },
  { value: 2, suffix: 'M+', label: 'Happy Clients' },
  { value: 50, suffix: '+', label: 'Expert Services' },
  { value: 15, suffix: '', label: 'Years of Excellence' },
];

function AnimatedCounter({
  target,
  suffix,
  inView,
}: {
  target: number;
  suffix: string;
  inView: boolean;
}) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => {
    if (target >= 100) return Math.round(latest).toLocaleString('en-IN');
    return Math.round(latest).toString();
  });
  const [displayValue, setDisplayValue] = useState('0');

  useEffect(() => {
    if (inView) {
      const controls = animate(count, target, {
        duration: 2,
        ease: 'easeOut',
      });
      
      const unsubscribe = rounded.on('change', (v) => setDisplayValue(v));
      
      return () => {
        controls.stop();
        unsubscribe();
      };
    }
  }, [inView, target, count, rounded]);

  return (
    <span>
      {displayValue}
      {suffix}
    </span>
  );
}

export function StatsStrip() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <section
      ref={ref}
      className="bg-gradient-to-r from-gold to-gold-muted py-14 md:py-16"
      id="stats-strip"
    >
      <div className="section-container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className={`text-center ${
                i < stats.length - 1 ? 'md:border-r md:border-charcoal/10' : ''
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                delay: i * 0.15,
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <p className="font-display font-black text-4xl md:text-5xl lg:text-[56px] text-charcoal">
                <AnimatedCounter
                  target={stat.value}
                  suffix={stat.suffix}
                  inView={isInView}
                />
              </p>
              <p className="font-body font-medium text-xs md:text-[13px] text-charcoal/70 tracking-wider uppercase mt-2">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
