"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Container from "../components/container";

const Contact = () => {
  const email = "janindu.the.dev@gmail.com";
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="contact"
      className="py-24 bg-black border-t border-white/5 relative overflow-hidden"
    >
      {/* Subtle Glow Background */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-green-500/5 blur-[120px] rounded-full" />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Branding & Message with Slide-in Reveal */}
          <motion.div
            initial={{ opacity: 0, x: -50 }} // වම් පැත්තෙන් එළියට තියෙන්නේ
            whileInView={{ opacity: 1, x: 0 }} // පේනකොට මැදට එනවා
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <h2 className="text-4xl md:text-6xl font-logo font-bold uppercase tracking-tighter leading-none mb-6">
              Ready to start <br />
              <span className="text-green-500 ">the next project?</span>
            </h2>
            <p className="text-zinc-500 text-lg max-w-md font-light leading-relaxed">
              Currently available for freelance work and collaborations. Let's
              turn your ideas into a high-performance digital reality.
            </p>

            {/* Social Links */}
            <div className="flex gap-6 mt-10">
              {[
                { name: "GitHub", url: "https://github.com/janinduthedev" },
                {
                  name: "LinkedIn",
                  url: "https://www.linkedin.com/in/janinduthedev/",
                },
                { name: "Behance", url: "https://behance.net/ඔයාගේ-username" },
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank" // අලුත් tab එකක open වෙන්න
                  rel="noopener noreferrer" // Security එකට අනිවාර්යයි
                  className="text-zinc-500 hover:text-green-500 transition-all duration-300 text-[10px] font-bold tracking-[0.2em] uppercase"
                >
                  <motion.span
                    whileHover={{ y: -2 }} // Hover කරද්දී පොඩ්ඩක් උඩට යනවා
                    className="inline-block"
                  >
                    {social.name}
                  </motion.span>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right: Contact Card with Zoom-in Reveal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 30 }} // දකුණු පැත්තෙන් ලාවට zoom වෙවී එන්නේ
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 1,
              delay: 0.2, // පොඩි delay එකක් දුන්නා flow එක ලස්සන වෙන්න
              ease: [0.22, 1, 0.36, 1],
            }}
            className="bg-zinc-900/40 border border-white/10 p-8 md:p-12 rounded-[2.5rem] backdrop-blur-xl relative"
          >
            <p className="text-zinc-500 text-[10px] uppercase tracking-[0.3em] mb-4 font-bold">
              Direct Communication
            </p>
            <h3 className="text-xl md:text-2xl font-medium text-white mb-10 break-all font-mono">
              {email}
            </h3>

            <div className="flex flex-wrap gap-4">
              <motion.button
                onClick={copyToClipboard}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-white text-black px-8 py-4 rounded-2xl font-bold uppercase text-[10px] tracking-widest flex items-center gap-2 transition-all hover:bg-green-500"
              >
                {copied ? "Copied!" : "Copy Email"}
              </motion.button>

              <a href={`mailto:${email}`}>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-zinc-800 text-white px-8 py-4 rounded-2xl font-bold uppercase text-[10px] tracking-widest flex items-center gap-2 border border-white/5 hover:bg-zinc-700 transition-all"
                >
                  Send Mail ↗
                </motion.button>
              </a>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
