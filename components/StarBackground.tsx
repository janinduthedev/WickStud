"use client";
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const StarBackground = () => {
  const [mounted, setMounted] = useState(false);
  const [stars, setStars] = useState<{ id: number; x: number; y: number; size: number; duration: number }[]>([]);

  useEffect(() => {
    setMounted(true); // Component එක Load වුණාම විතරක් තරු හදන්න
    const generatedStars = Array.from({ length: 100 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1, // ටිකක් ලොකු කළා පේන්න
      duration: Math.random() * 4 + 2,
    }));
    setStars(generatedStars);
  }, []);

  // Hydration errors මගහරවා ගන්න මේක වැදගත්
  if (!mounted) return null;

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-black">
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute bg-white rounded-full"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: star.size,
            height: star.size,
            boxShadow: "0 0 10px rgba(255, 255, 255, 0.8)", // තරුවට පොඩි එළියක් (glow) එකතු කළා
          }}
          animate={{
            opacity: [0.1, 0.8, 0.1], 
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default StarBackground;