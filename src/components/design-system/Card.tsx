'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface CardProps {
  variant?: 'default' | 'warm' | 'dark' | 'glass';
  hover?: boolean;
  padding?: 'sm' | 'md' | 'lg';
  className?: string;
  children: React.ReactNode;
}

export function Card({
  variant = 'default',
  hover = false,
  padding = 'md',
  className,
  children,
}: CardProps) {
  const variants = {
    default: 'bg-ivory border border-smoke',
    warm: 'bg-pearl-warm border border-smoke',
    dark: 'bg-charcoal text-pearl border border-pearl/10',
    glass: 'glass',
  };

  const paddings = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  };

  return (
    <div
      className={cn(
        'rounded-[20px] transition-all duration-350 ease-luxury',
        variants[variant],
        paddings[padding],
        hover &&
          'hover:-translate-y-1 hover:shadow-lg cursor-pointer',
        className
      )}
    >
      {children}
    </div>
  );
}
