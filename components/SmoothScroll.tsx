"use client";
import { ReactLenis } from 'lenis/react';
import { ReactNode } from 'react';

export default function SmoothScroll({ children }: { children: ReactNode }) {
  return (
    <ReactLenis 
      root 
      options={{ 
        lerp: 0.05,        // Apple-style liquid smoothness
        duration: 1.5, 
        smoothWheel: true,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Apple curve
        syncTouch: true,   // පරණ scroll position එක මතක තබා ගැනීමට
        autoRaf: true,
      }}
    >
      {children}
    </ReactLenis>
  );
}