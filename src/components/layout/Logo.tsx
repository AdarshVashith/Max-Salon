'use client';

import React from 'react';

interface LogoProps {
  variant?: 'light' | 'dark';
  className?: string;
}

export function Logo({ variant = 'dark', className = '' }: LogoProps) {
  const maxxColor = variant === 'light' ? '#F9F9F9' : '#1A1A1A';
  const salonColor = variant === 'light' ? '#D4AF37' : '#B8972E';

  return (
    <div className={`flex flex-col items-start ${className}`}>
      <svg
        width="120"
        height="40"
        viewBox="0 0 120 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Maxx Salon"
      >
        {/* MAXX wordmark */}
        <text
          x="0"
          y="28"
          fontFamily="var(--font-playfair), 'Playfair Display', serif"
          fontWeight="900"
          fontSize="32"
          fill={maxxColor}
          letterSpacing="2"
        >
          MA
        </text>
        {/* Double X with gold ligature effect */}
        <text
          x="56"
          y="28"
          fontFamily="var(--font-playfair), 'Playfair Display', serif"
          fontWeight="900"
          fontSize="32"
          fill={maxxColor}
          letterSpacing="-1"
        >
          X
        </text>
        <text
          x="76"
          y="28"
          fontFamily="var(--font-playfair), 'Playfair Display', serif"
          fontWeight="900"
          fontSize="32"
          fill="#D4AF37"
          letterSpacing="-1"
        >
          X
        </text>
        {/* SALON subtext */}
        <text
          x="1"
          y="38"
          fontFamily="var(--font-poppins), 'Poppins', sans-serif"
          fontWeight="300"
          fontSize="8"
          fill={salonColor}
          letterSpacing="5"
        >
          SALON
        </text>
      </svg>
    </div>
  );
}
