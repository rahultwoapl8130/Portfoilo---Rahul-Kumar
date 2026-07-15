"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { portfolioData } from "../app/data";

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 md:scroll-mt-32">
      <h2 className="text-2xl md:text-3xl font-bold text-ink mb-6 md:mb-8 flex items-center gap-4">
        <span className="text-accent2">04.</span> Case Studies
        <div className="h-px bg-white/10 flex-grow"></div>
      </h2>
      <div className="space-y-12">
        {portfolioData.projects.map((project, idx) => (
          <motion.div 
            key={idx} 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl overflow-hidden shadow-lg hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] hover:border-accent2/40 hover:-translate-y-2 transition-all duration-300 flex flex-col group"
          >
            {/* Image Placeholder */}
            <div className="w-full h-48 md:h-64 bg-base relative flex items-center justify-center border-b border-white/5 overflow-hidden">
              <img 
                src={project.image || "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop"} 
                alt={project.title} 
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d1117] via-transparent to-transparent"></div>
            </div>

            <div className="p-6 md:p-8">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-ink mb-2 group-hover:text-accent2 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <ul className="flex flex-wrap gap-1.5 md:gap-2 mb-4">
                    {project.tags.map((tag, tIdx) => (
                      <li key={tIdx} className="text-[10px] md:text-xs font-mono text-accent2 px-2 md:px-3 py-1 bg-white/5 rounded-full border border-white/5 hover:bg-white/10 transition-colors">
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex gap-2">
                  <a href={project.link} target="_blank" rel="noreferrer" className="p-2 bg-accent2/10 text-accent2 rounded-lg hover:bg-accent2 hover:text-white transition-colors duration-300">
                    <ExternalLink size={20} />
                  </a>
                  {project.github && project.github !== "#" && (
                    <a href={project.github} target="_blank" rel="noreferrer" className="text-muted hover:text-ink transition-colors p-2 bg-white/5 rounded-lg border border-white/10 hover:border-white/30">
                      <Github size={20} />
                    </a>
                  )}
                </div>
              </div>

              <p className="text-muted text-base leading-relaxed mb-8">
                {project.description}
              </p>

              <div className="grid md:grid-cols-3 gap-6 bg-base/50 p-6 rounded-xl border border-white/5 group-hover:bg-white/5 transition-colors duration-300">
                {project.businessProblem && (
                  <div>
                    <h4 className="text-xs font-bold text-ink uppercase tracking-wider mb-2 border-b border-white/5 pb-1">Business Problem</h4>
                    <p className="text-sm text-muted leading-relaxed">{project.businessProblem}</p>
                  </div>
                )}
                {project.architecture && (
                  <div>
                    <h4 className="text-xs font-bold text-ink uppercase tracking-wider mb-2 border-b border-white/5 pb-1">Architecture</h4>
                    <p className="text-sm text-muted leading-relaxed">{project.architecture}</p>
                  </div>
                )}
                {project.businessImpact && (
                  <div>
                    <h4 className="text-xs font-bold text-ink uppercase tracking-wider mb-2 border-b border-white/5 pb-1">Business Impact</h4>
                    <p className="text-sm text-muted leading-relaxed">{project.businessImpact}</p>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
