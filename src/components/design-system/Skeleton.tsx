'use client';

import React from 'react';
import { cn } from '@/lib/utils';

export function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn('skeleton', className)}
      aria-hidden="true"
      {...props}
    />
  );
}

export function ServiceCardSkeleton() {
  return (
    <div className="rounded-[20px] overflow-hidden bg-ivory border border-smoke">
      <Skeleton className="w-full h-48" />
      <div className="p-5 space-y-3">
        <Skeleton className="h-4 w-3/4" />
        <Skeleton className="h-3 w-1/2" />
        <Skeleton className="h-8 w-28 rounded-full" />
      </div>
    </div>
  );
}

export function TestimonialSkeleton() {
  return (
    <div className="flex flex-col items-center space-y-4 p-8">
      <Skeleton className="w-[72px] h-[72px] rounded-full" />
      <Skeleton className="h-4 w-[80%] max-w-md" />
      <Skeleton className="h-4 w-[60%] max-w-sm" />
      <Skeleton className="h-3 w-32" />
    </div>
  );
}
