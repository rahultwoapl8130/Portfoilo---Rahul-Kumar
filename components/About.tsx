"use client";

import { motion } from "framer-motion";
import { portfolioData } from "../app/data";

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 md:scroll-mt-32">
      <h2 className="text-2xl md:text-3xl font-bold text-ink mb-6 md:mb-8 flex items-center gap-4">
        <span className="text-accent2">01.</span> About Me
        <div className="h-px bg-white/10 flex-grow"></div>
      </h2>
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-muted leading-relaxed text-base md:text-lg backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-[0_0_30px_rgba(255,255,255,0.05)] transition-shadow lg:w-2/3"
        >
          <p>{portfolioData.about}</p>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="lg:w-1/3 w-full"
        >
          <img 
            src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=600&auto=format&fit=crop" 
            alt="Workspace" 
            className="rounded-2xl border border-white/10 shadow-lg w-full object-cover h-64 lg:h-full"
          />
        </motion.div>
      </div>
    </section>
  );
}
