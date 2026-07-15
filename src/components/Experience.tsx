"use client";

import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";
import { portfolioData } from "../data";

export default function Experience() {
  return (
    <section id="education" className="scroll-mt-24 md:scroll-mt-32">
      <h2 className="text-2xl md:text-3xl font-bold text-ink mb-6 md:mb-8 flex items-center gap-4">
        <span className="text-accent2">05.</span> Experience & Education
        <div className="h-px bg-white/10 flex-grow"></div>
      </h2>
      <div className="space-y-4 md:space-y-6">
        {portfolioData.experience.map((exp, idx) => (
          <motion.div 
            key={idx} 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-[0_0_30px_rgba(255,255,255,0.05)] hover:border-accent2/30 transition-all duration-300 flex flex-col md:flex-row gap-2 md:gap-6"
          >
            <div className="md:w-1/4 text-xs md:text-sm font-semibold text-accent2 font-mono md:mt-1 mb-2 md:mb-0">
              {exp.date}
            </div>
            <div className="md:w-3/4">
              <h3 className="text-lg md:text-xl font-bold text-ink mb-1 flex items-center gap-2">
                <BookOpen size={18} className="text-accent2" /> {exp.role}
              </h3>
              <h4 className="text-base md:text-lg text-muted mb-3">{exp.company}</h4>
              <p className="text-muted text-sm md:text-base leading-relaxed">{exp.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
