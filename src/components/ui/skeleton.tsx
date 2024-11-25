'use client';
import { cn } from '../../lib/utilis';

function Skeleton({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-[#B4B4B4]/[0.20]", className)}
      {...props}
    />
  );
}

export { Skeleton };
