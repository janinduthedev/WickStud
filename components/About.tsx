"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Container from '../components/container';

const skills = {
  development: ["React", "Next.js", "Node.js", "MongoDB", "TypeScript", "Tailwind CSS"],
  design: ["Photoshop", "Illustrator", "After Effects", "Figma", "UI/UX", "Branding"]
};

const About = () => {
  return (
    <section id="about" className="py-5 bg-black relative overflow-hidden border-t border-white/5">
      {/* Background Decor Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-green-500/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
      
      <Container>
        {/* Main Wrapper with Scroll Reveal Settings */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ 
            duration: 1, 
            ease: [0.22, 1, 0.36, 1] 
          }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start"
        >
          
          {/* Left Side: Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-logo font-bold uppercase tracking-tighter mb-8 leading-none">
              The Hybrid <br /> <span className="text-green-500 ">Architect.</span>
            </h2>
            
            <div className="space-y-6 text-zinc-400 text-lg leading-relaxed font-light max-w-xl">
              <p>
                I am <span className="text-white font-medium">Janindu</span>, a creative professional operating at the intersection of Software Engineering and Graphic Design. I believe that a great digital product isn't just about clean code—it's about the emotional experience it provides to the user.
              </p>
              <p>
                Through <span className="text-white font-medium">WickStud</span>, I bridge the gap between technical architecture and creative vision to build high-performance products that stand out in the digital landscape.
              </p>
            </div>

            {/* Simple Stats */}
            <div className="grid grid-cols-2 gap-8 mt-12 border-t border-white/5 pt-12">
              <div>
                <h4 className="text-4xl font-logo font-bold text-white tracking-tighter">02+</h4>
                <p className="text-zinc-500 text-[10px] uppercase tracking-[0.2em] mt-2 font-bold">Years Experience</p>
              </div>
              <div>
                <h4 className="text-4xl font-logo font-bold text-white tracking-tighter">15+</h4>
                <p className="text-zinc-500 text-[10px] uppercase tracking-[0.2em] mt-2 font-bold">Projects Completed</p>
              </div>
            </div>
          </div>

          {/* Right Side: Skills Grid with a slight delay for better flow */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {/* Dev Skills Card */}
            <div className="bg-zinc-900/40 border border-white/10 p-8 rounded-[2rem] backdrop-blur-md group hover:border-green-500/30 transition-colors">
              <div className="w-12 h-12 bg-green-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="text-green-500 text-xl font-bold">{"</>"}</span>
              </div>
              <h3 className="text-lg font-logo font-bold mb-6 uppercase tracking-widest text-white">Dev Stack</h3>
              <div className="flex flex-wrap gap-2">
                {skills.development.map(skill => (
                  <span key={skill} className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-xl text-[10px] text-zinc-400 font-bold uppercase tracking-wider hover:bg-green-500 hover:text-black transition-all cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Design Skills Card */}
            <div className="bg-zinc-900/40 border border-white/10 p-8 rounded-[2rem] backdrop-blur-md md:translate-y-12 group hover:border-green-500/30 transition-colors">
              <div className="w-12 h-12 bg-green-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="text-green-500 text-xl font-bold italic">✎</span>
              </div>
              <h3 className="text-lg font-logo font-bold mb-6 uppercase tracking-widest text-white">Creative</h3>
              <div className="flex flex-wrap gap-2">
                {skills.design.map(skill => (
                  <span key={skill} className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-xl text-[10px] text-zinc-400 font-bold uppercase tracking-wider hover:bg-green-500 hover:text-black transition-all cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

export default About;