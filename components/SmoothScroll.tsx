"use client";
import { ReactLenis, useLenis } from 'lenis/react';
import { ReactNode, useEffect } from 'react';

export default function SmoothScroll({ children }: { children: ReactNode }) {
  const lenis = useLenis();

  useEffect(() => {
    // Refresh කළාම සයිට් එක උඩටම (0 position) ගෙනියනවා
    window.scrollTo(0, 0);
    lenis?.scrollTo(0, { immediate: true });
  }, [lenis]);

  return (
    <ReactLenis 
      root 
      options={{ 
        // Will Paterson look & feel settings
        lerp: 0.05,           
        duration: 1.5,        
        smoothWheel: true,
        wheelMultiplier: 1.1, 
        touchMultiplier: 1.5,
        infinite: false,
        // Mobile gestures හරියට වැඩ කරන්න මේක වැදගත්
        syncTouch: true, 
        touchInertiaMultiplier: 35,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      }}
    >
      {children}
    </ReactLenis>
  );
}