'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'golden';
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
    'inline-flex items-center justify-center gap-2 font-body font-semibold transition-all duration-300 ease-luxury active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed tracking-widest uppercase';

  const variants = {
    primary:
      'bg-gradient-to-r from-[#8B6914] via-[#C9A227] to-[#E8D48B] text-[#1a1000] shadow-sm hover:shadow-md hover:brightness-110',
    golden:
      'bg-gradient-to-r from-[#8B6914] via-[#C9A227] to-[#E8D48B] text-[#1a1000] shadow-sm hover:shadow-md hover:brightness-110',
    secondary:
      'bg-charcoal text-pearl hover:bg-charcoal/90 active:bg-charcoal shadow-sm hover:shadow-md',
    outline:
      'border border-[#C9A227] text-[#C9A227] hover:bg-[#C9A227]/10 bg-transparent',
    ghost:
      'text-charcoal hover:text-gold hover:bg-gold/5 bg-transparent',
  };

  const sizes = {
    sm: 'text-[10px] px-5 py-2',
    md: 'text-[11px] px-7 py-3',
    lg: 'text-[12px] px-9 py-4',
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
