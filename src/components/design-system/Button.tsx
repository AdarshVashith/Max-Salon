'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  children: React.ReactNode;
}

export function Button({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  className,
  children,
  ...props
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center gap-2 font-body font-semibold rounded-full transition-all duration-300 ease-luxury active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

  const variants = {
    primary:
      'bg-gold text-charcoal hover:bg-gold-light active:bg-gold-muted shadow-sm hover:shadow-md',
    secondary:
      'bg-charcoal text-pearl hover:bg-charcoal/90 active:bg-charcoal shadow-sm hover:shadow-md',
    outline:
      'border-[1.5px] border-pearl/60 text-pearl hover:border-gold hover:text-gold bg-transparent',
    ghost:
      'text-charcoal hover:text-gold hover:bg-gold/5 bg-transparent',
  };

  const sizes = {
    sm: 'text-xs px-5 py-2 tracking-wide',
    md: 'text-sm px-7 py-3 tracking-wide',
    lg: 'text-[15px] px-9 py-4',
  };

  return (
    <button
      className={cn(
        baseStyles,
        variants[variant],
        sizes[size],
        fullWidth && 'w-full',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
