"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "../components/container"; 
import { useLenis } from "lenis/react";
import Swal from 'sweetalert2';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const lenis = useLenis();

  // --- Smooth Scroll Function ---
  const handleScroll = (e: React.MouseEvent, targetId: string) => {
    e.preventDefault();
    const target = targetId.startsWith('#') ? targetId : `#${targetId}`;
    
    lenis?.scrollTo(target, {
      lerp: 0.05,
      duration: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    setIsOpen(false);
  };

  // --- Resume Download Logic ---
  const handleDownload = (e: React.MouseEvent) => {
    e.preventDefault();
    Swal.fire({
      title: 'Download Resume?',
      text: "Do you want to download my resume?",
      icon: 'question',
      backdrop: true,
      heightAuto: false,
      scrollbarPadding: false,
      showCancelButton: true,
      confirmButtonColor: '#22c55e',
      cancelButtonColor: '#1a1a1a',
      confirmButtonText: 'YES',
      cancelButtonText: 'NO',
      background: '#121212',
      color: '#fff',
      customClass: { popup: 'rounded-[2rem] border border-white/10 backdrop-blur-md' }
    }).then((result) => {
      if (result.isConfirmed) {
        const link = document.createElement('a');
        link.href = '/Janindu_Resume.pdf';
        link.download = 'Janindu_Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    });
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/60 backdrop-blur-xl"
    >
      <Container>
        <div className="flex justify-between items-center h-20">
          
          {/* Logo - Click to Top */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-xl font-bold tracking-[0.2em] uppercase cursor-pointer font-logo"
            onClick={(e) => handleScroll(e, "home")}
          >
            WickStud<span className="text-green-500">.</span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10 text-sm font-medium text-gray-400">
            {["Home", "Projects", "About", "Contact"].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={(e) => handleScroll(e, item.toLowerCase())}
                whileHover={{ textShadow: "0px 0px 8px rgb(34, 197, 94)", color: "#ffffff" }}
                className="hover:text-green-500 transition-colors font-sans cursor-pointer uppercase tracking-widest text-[10px] font-bold"
              >
                {item}
              </motion.a>
            ))}

            <motion.button
              type="button"
              onClick={handleDownload}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-green-500 px-6 py-3 rounded-full text-black font-bold font-logo text-[12px] leading-none uppercase tracking-wider"
            >
              Resume
            </motion.button>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-white p-2" onClick={() => setIsOpen(!isOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Sidebar Dropdown */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-black/95 border-t border-white/5 overflow-hidden"
            >
              <div className="flex flex-col py-8 gap-6 px-8">
                {["Home", "Projects", "About", "Contact"].map((item) => (
                  <a 
                    key={item} 
                    href={`#${item.toLowerCase()}`} 
                    className="text-lg text-gray-300 font-logo uppercase tracking-tighter" 
                    onClick={(e) => handleScroll(e, item.toLowerCase())}
                  >
                    {item}
                  </a>
                ))}
                
                {/* Mobile Resume Button */}
                <div className="pt-4 border-t border-white/5">
                  <motion.button
                    type="button"
                    onClick={handleDownload}
                    whileTap={{ scale: 0.95 }}
                    className="bg-green-500 w-full py-4 rounded-2xl text-black font-bold font-logo text-[14px] uppercase tracking-widest"
                  >
                    Download Resume
                  </motion.button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </motion.nav>
  );
};

export default Navbar;