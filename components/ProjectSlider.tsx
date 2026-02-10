"use client";
import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Car Rental System",
    category: "dev",
    desc: "Full-stack MERN system with real-time booking and dashboard.",
    tech: ["MongoDB", "Express", "React", "Node"],
    image: "/car-project.png",
    link: "https://mern-car-rental-system-1.onrender.com/", 
  },
  {
    id: 2,
    title: "Portfolio Website",
    category: "dev",
    desc: "Modern animated portfolio with Next.js and Tailwind CSS.",
    tech: ["Next.js", "Framer Motion", "Tailwind"],
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&q=80&w=1169",
    link: "https://wickstud.com", 
  },
  {
    id: 3,
    title: "WickStud Branding",
    category: "design",
    desc: "Visual identity, color palette and logo design for WickStud.",
    tech: ["Photoshop", "Illustrator"],
    image: "https://images.unsplash.com/photo-1633533452148-a9657d2c9a5f?auto=format&fit=crop&q=80&w=1331",
    link: "https://behance.net/yourprofile",
  },
  {
    id: 4,
    title: "Social Media Kit",
    category: "design",
    desc: "Custom social media assets and overlays for streaming.",
    tech: ["After Effects", "Figma"],
    image: "https://images.unsplash.com/photo-1724862936518-ae7fcfc052c1?auto=format&fit=crop&q=80&w=687",
    link: "#",
  },
];

const ProjectSlider = () => {
  const [activeTab, setActiveTab] = useState("dev");
  const filteredProjects = projects.filter(p => p.category === activeTab);
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section id="projects" className="py-20 bg-black overflow-hidden border-t border-white/5">
      
      {/* Header Section */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="px-6 md:px-10 mb-12 flex flex-col items-center text-center gap-6"
      >
        <div className="space-y-2">
          <h2 className="text-3xl md:text-5xl font-logo font-bold tracking-tighter uppercase text-white">
            Featured Work<span className="text-green-500">.</span>
          </h2>
          <p className="text-zinc-500 text-sm md:text-lg font-light font-logo uppercase tracking-widest">Digital Archive</p>
        </div>

        {/* Tab Switcher */}
        <div className="flex bg-zinc-900/50 p-1 rounded-2xl border border-white/10 w-fit backdrop-blur-md">
          {["dev", "design"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 md:px-10 py-2.5 rounded-xl text-[10px] uppercase tracking-[0.2em] font-bold transition-all duration-500 ${
                activeTab === tab ? "bg-green-500 text-black shadow-lg shadow-green-500/20" : "text-zinc-500"
              }`}
            >
              {tab === "dev" ? "Dev" : "Design"}
            </button>
          ))}
        </div>
      </motion.div>

      {/* Projects Container */}
      <div className="relative">
        <motion.div 
          ref={scrollRef}
          className="flex overflow-x-auto overflow-y-hidden snap-x snap-mandatory no-scrollbar px-6 md:px-[10%] gap-6 pb-10"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <motion.div 
                key={`${activeTab}-${project.id}`}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ delay: index * 0.1 }}
                className="min-w-[85vw] md:min-w-[420px] h-[500px] snap-center relative rounded-[2.5rem] overflow-hidden border border-white/10 bg-zinc-900 group"
              >
                {/* Background Image */}
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0 opacity-60 group-hover:opacity-100" 
                />
                
                {/* Overlay Content */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent flex flex-col justify-end p-8">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((t) => (
                      <span key={t} className="text-[7px] font-bold uppercase tracking-widest bg-black/50 backdrop-blur-md text-green-500 border border-green-500/20 px-3 py-1 rounded-full">{t}</span>
                    ))}
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-2 font-logo uppercase tracking-tighter text-white">{project.title}</h3>
                  <p className="text-zinc-400 text-[11px] mb-6 leading-relaxed line-clamp-2 font-light">{project.desc}</p>
                  
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <motion.button 
                      whileTap={{ scale: 0.95 }} 
                      className="bg-white text-black font-extrabold py-3 px-8 rounded-full w-full md:w-fit text-[10px] uppercase tracking-[0.2em] hover:bg-green-500 transition-colors duration-300"
                    >
                      View Project
                    </motion.button>
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
        {/* Mobile Indicator - Optional */}
        <div className="md:hidden flex justify-center gap-2 mt-4">
           {filteredProjects.map((_, i) => (
             <div key={i} className="w-1.5 h-1.5 rounded-full bg-zinc-800" />
           ))}
        </div>
      </div>

      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
};

export default ProjectSlider;