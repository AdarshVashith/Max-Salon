'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface BadgeProps {
  variant?: 'gold' | 'new' | 'trending' | 'signature' | 'limited' | 'save';
  children: React.ReactNode;
  className?: string;
}

const badgeStyles = {
  gold: 'bg-gold/15 text-gold border-gold/30',
  new: 'bg-emerald-50 text-emerald-700 border-emerald-200',
  trending: 'bg-orange-50 text-orange-700 border-orange-200',
  signature: 'bg-gold text-charcoal border-gold',
  limited: 'bg-error/10 text-error border-error/30',
  save: 'bg-gold text-charcoal border-gold font-bold',
};

export function Badge({ variant = 'gold', children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1 px-3 py-1 rounded-full text-[10px] font-semibold font-body uppercase tracking-wider border',
        badgeStyles[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
