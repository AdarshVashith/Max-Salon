'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  icon?: React.ReactNode;
}

export function Input({
  label,
  error,
  icon,
  className,
  id,
  ...props
}: InputProps) {
  const inputId = id || label.toLowerCase().replace(/\s+/g, '-');

  return (
    <div className="space-y-1.5">
      <label
        htmlFor={inputId}
        className="block text-sm font-medium text-charcoal font-body"
      >
        {label}
      </label>
      <div className="relative">
        {icon && (
          <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-ash">
            {icon}
          </span>
        )}
        <input
          id={inputId}
          className={cn(
            'w-full bg-ivory border border-smoke rounded-lg px-4 py-3 text-sm font-body text-charcoal placeholder:text-ash/60',
            'transition-all duration-200 ease-smooth',
            'focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20',
            'hover:border-ash/50',
            icon && 'pl-10',
            error && 'border-error focus:border-error focus:ring-error/20',
            className
          )}
          {...props}
        />
      </div>
      {error && (
        <p className="text-xs text-error font-body mt-1">{error}</p>
      )}
    </div>
  );
}
