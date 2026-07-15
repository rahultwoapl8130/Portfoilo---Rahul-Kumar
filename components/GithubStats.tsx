"use client";

import { motion } from "framer-motion";
import { GitCommit, Github, Star } from "lucide-react";
import { portfolioData } from "../app/data";

export default function GithubStats() {
  return (
    <section id="github" className="scroll-mt-24 md:scroll-mt-32">
      <h2 className="text-2xl md:text-3xl font-bold text-ink mb-6 md:mb-8 flex items-center gap-4">
        <span className="text-accent2">06.</span> Open Source
        <div className="h-px bg-white/10 flex-grow"></div>
      </h2>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="backdrop-blur-md bg-[#0d1117] border border-white/10 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 overflow-hidden relative group hover:border-white/20 transition-colors"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-accent2/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="text-center md:text-left flex-1 relative z-10">
          <h3 className="text-xl md:text-2xl font-bold text-ink mb-2 flex items-center justify-center md:justify-start gap-2">
            <Github className="text-accent2" /> GitHub Stats
          </h3>
          <p className="text-muted text-sm md:text-base">Passionate about writing clean code and contributing to open-source projects.</p>
        </div>
        <div className="flex gap-4 flex-wrap justify-center flex-1 relative z-10">
          <a href={portfolioData.hero.socials.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm hover:border-accent2 hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1">
            <GitCommit size={16} className="text-green-400" /> Commits
          </a>
          <a href={portfolioData.hero.socials.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm hover:border-accent2 hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1">
            <Star size={16} className="text-yellow-400" /> Stars
          </a>
        </div>
      </motion.div>
    </section>
  );
}
