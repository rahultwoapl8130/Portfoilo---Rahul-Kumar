"use client";

import { motion } from "framer-motion";
import { portfolioData } from "../app/data";

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 md:scroll-mt-32">
      <h2 className="text-2xl md:text-3xl font-bold text-ink mb-6 md:mb-8 flex items-center gap-4">
        <span className="text-accent2">03.</span> Core Competencies
        <div className="h-px bg-white/10 flex-grow"></div>
      </h2>
      <div className="grid md:grid-cols-2 gap-8 md:gap-12">
        {Object.entries(
          portfolioData.skills.reduce((acc, skill: any) => {
            if (!acc[skill.category]) acc[skill.category] = [];
            acc[skill.category].push(skill);
            return acc;
          }, {} as Record<string, any[]>)
        ).map(([category, skills], idx) => (
          <div key={idx} className="space-y-4">
            <h3 className="text-sm font-bold text-ink uppercase tracking-wider mb-4 border-b border-white/10 pb-2">{category}</h3>
            <div className="space-y-4">
              {skills.map((skill, sIdx) => (
                <div key={sIdx}>
                  <div className="flex justify-between text-xs font-mono text-muted mb-1.5">
                    <span>{skill.name}</span>
                    <span>{skill.percentage}%</span>
                  </div>
                  <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden border border-white/5">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.percentage}%` }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 1, delay: sIdx * 0.1, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-accent to-accent2 rounded-full relative"
                    >
                      <div className="absolute inset-0 bg-white/20 w-full h-full animate-[shimmer_2s_infinite] -translate-x-full" style={{backgroundImage: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)'}}></div>
                    </motion.div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
