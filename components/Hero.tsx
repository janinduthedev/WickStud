"use client";
import React from "react";
import { motion } from "framer-motion";
import Container from "../components/container";

// Slider එකට ඕන කරන නම් ටික
const techs = [
  "Adobe Photoshop",
  "Figma",
  "Adobe Illustrator",
  "After Effects",
  "Next.js",
  "React",
  "Node.js",
  "Tailwind CSS",
  "MongoDB",
  "Framer Motion",
];

const Hero = () => {
  return (
    <section id="home" className="relative pt-32 pb-0 overflow-hidden">
      <Container>
        {/* --- Scroll Reveal Wrapper --- */}
        <motion.div
          initial={{ opacity: 0, y: 60 }} // මුලින් opacity 0 සහ පොඩ්ඩක් පහළින් තියෙන්නේ
          whileInView={{ opacity: 1, y: 0 }} // පේනකොට ලස්සනට උඩට එනවා
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center"
        >
          {/* Left Side */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <span className="text-green-500 font-mono text-sm tracking-widest uppercase mb-4 block">
              Founder @ WickStud
            </span>
            <h1 className="text-5xl md:text-5xl font-bold tracking-tighter leading-none font-logo ">
              Janindu <br />
              <span className="text-zinc-500 font-medium text-3xl md:text-4xl block mt-2 ">
                Software Engineer
              </span>
              <span className="text-zinc-600 font-medium text-2xl md:text-3xl block mt-1">
                Graphic Designer
              </span>
            </h1>
          </div>

          {/* Center: Photo & Status Card & Button */}
          <div className="order-1 lg:order-2 flex flex-col items-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 mb-6">
              <motion.div
                animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute inset-0 bg-green-500/20 blur-[60px] rounded-full"
              />
              <div className="relative w-full h-full rounded-2xl border border-white/10 overflow-hidden bg-zinc-900 shadow-2xl">
                <img
                  src="/my-photo.jpeg"
                  alt="Janindu"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </div>

            {/* Status Card */}
            <div className="w-full max-w-[280px] bg-white/5 border border-white/10 backdrop-blur-md p-4 rounded-2xl flex items-center gap-4 mb-8">
              <div className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </div>
              <p className="text-sm text-gray-300 font-medium tracking-wide">
                Crafting digital solutions with a{" "}
                <span className="text-green-500">design-first</span> approach.
              </p>
            </div>

            {/* Let's Talk Button */}
            <a href="mailto:janindu.the.dev@gmail.com?subject=Inquiry%20from%20Portfolio">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-neutral-800 text-white font-bold px-10 py-4 rounded-full flex items-center gap-2 hover:bg-green-500 hover:text-black transition-all group"
              >
                Let's Talk
                <span className="group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </motion.button>
            </a>
          </div>

          {/* Right Side */}
          <div className="order-3 text-center lg:text-right">
            <p className="text-gray-400 text-lg md:text-xl leading-relaxed">
              Specializing in the{" "}
              <span className="text-white font-medium">MERN stack</span> and{" "}
              <span className="text-white font-medium">Next.js</span>. I blend
              technical architecture with{" "}
              <span className="text-green-500">creative design</span> to build
              high-performance digital products at{" "}
              <span className="text-white font-semibold">WickStud</span>.
            </p>
          </div>
        </motion.div>
      </Container>

      {/* --- Infinite Tech Slider --- */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="w-full py-10 mt-10 border-t border-white/5 bg-zinc-900/10 overflow-hidden"
      >
        <motion.div
          className="flex whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
        >
          {[...techs, ...techs].map((tech, index) => (
            <div key={index} className="flex items-center gap-6 mx-12">
              <span className="text-white font-logo text- md:text-xl uppercase tracking-tighter hover:text-green-500 transition-colors cursor-default">
                {tech}
              </span>
              <div className="w-2 h-2 bg-green-500 rounded-full shadow-[0_0_8px_rgba(34,197,94,0.4)]"></div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
