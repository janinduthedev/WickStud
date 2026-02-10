"use client";
import React from 'react';
import Container from '../components/container';
import { useLenis } from "lenis/react";

const Footer = () => {
 
    const lenis = useLenis(); // Lenis instance එක ගන්න

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault(); // Default link behavior එක නතර කරනවා

    // සයිට් එකේ උඩටම (0 position) smooth විදිහට අරන් යනවා
    lenis?.scrollTo(0, {
      lerp: 0.05,
      duration: 1.5,
    });
  };

  return (
    <footer className="w-full py-12 bg-black border-t border-white/5 relative z-20">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Logo Brand */}
          <div className="text-xl font-bold tracking-[0.2em] uppercase font-logo text-white cursor-pointer" onClick={handleLogoClick}>
            WickStud<span className="text-green-500">.</span>
          </div>

          {/* Copyright */}
          <p className="text-zinc-500 text-[10px] uppercase tracking-widest font-bold">
            © {new Date().getFullYear()} All Rights Reserved — Built by Janindu
          </p>

          {/* Internal Links */}
          <div className="flex gap-8">
            {["Projects", "About", "Contact"].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className="text-zinc-500 hover:text-white text-[10px] uppercase tracking-widest font-bold transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;