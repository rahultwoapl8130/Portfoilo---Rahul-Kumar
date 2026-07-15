"use client";

import { motion } from "framer-motion";
import { Download, Github, Linkedin } from "lucide-react";
import Typewriter from "typewriter-effect";
import { portfolioData } from "../data";

export default function Hero() {
  return (
    <section id="home" className="min-h-[85vh] flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8 pt-8 pb-16 md:pb-24 scroll-mt-32">
      <div className="w-full lg:w-1/2 flex flex-col items-start text-left mt-8 md:mt-0">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-6 md:mb-8 relative"
        >
          <div className="absolute inset-0 bg-accent2/20 blur-2xl rounded-full"></div>
          <img 
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=256&auto=format&fit=crop" 
            alt="Profile" 
            className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover border-2 border-white/10 shadow-[0_0_30px_rgba(139,92,246,0.3)] relative z-10"
          />
        </motion.div>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-muted text-base md:text-lg mb-4 font-medium"
        >
          Hi, I'm <span className="text-ink font-bold">{portfolioData.hero.name}</span>
        </motion.p>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-ink mb-4 md:mb-6 leading-tight"
        >
          AI Solutions <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent2">
            Builder
          </span>
        </motion.h1>

        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-2xl lg:text-3xl font-semibold mb-6 h-8 md:h-10 flex text-accent2"
        >
          <span className="mr-2 text-ink">&gt;</span>
          <Typewriter
            options={{
              strings: [
                "Machine Learning Engineer",
                "Data Scientist",
                "AI Solutions Builder",
                "Business Analyst"
              ],
              autoStart: true,
              loop: true,
              deleteSpeed: 50,
              delay: 80,
              wrapperClassName: "text-accent2 font-mono",
              cursorClassName: "text-accent2 animate-pulse"
            }}
          />
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-muted w-full max-w-lg text-base md:text-lg leading-relaxed mb-8 md:mb-10"
        >
          {portfolioData.hero.description}
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row flex-wrap gap-4 w-full sm:w-auto"
        >
          <a href="#contact" className="w-full sm:w-auto text-center px-8 py-3.5 bg-gradient-to-r from-accent2 to-purple-500 text-white font-semibold rounded-lg hover:shadow-[0_0_20px_rgba(139,92,246,0.5)] transition-all duration-300 transform hover:-translate-y-1">
            Let's Talk &rarr;
          </a>
          <a href="/Rahul_Kumar_Resume.pdf" target="_blank" className="w-full sm:w-auto justify-center px-8 py-3.5 bg-transparent border border-white/20 text-ink font-semibold rounded-lg hover:bg-white/5 transition-all duration-300 flex items-center gap-2 group">
            <Download size={18} className="group-hover:-translate-y-1 transition-transform" /> Resume
          </a>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-10 md:mt-12 flex gap-4"
        >
          <a href={portfolioData.hero.socials.github} target="_blank" rel="noreferrer" className="p-3 bg-white/5 border border-white/10 rounded-full text-muted hover:text-ink hover:border-accent2 transition hover:scale-110">
            <Github size={20} />
          </a>
          <a href={portfolioData.hero.socials.linkedin} target="_blank" rel="noreferrer" className="p-3 bg-white/5 border border-white/10 rounded-full text-muted hover:text-ink hover:border-accent2 transition hover:scale-110">
            <Linkedin size={20} />
          </a>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="w-full lg:w-1/2 relative mt-12 lg:mt-0 hidden sm:block"
      >
        <div className="absolute -top-4 -left-4 md:-top-6 md:-left-6 z-20 px-3 md:px-4 py-1.5 md:py-2 backdrop-blur-md bg-base/80 border border-white/10 rounded-full text-xs md:text-sm font-semibold text-accent2 shadow-lg animate-bounce" style={{animationDuration: '3s'}}>
          🐍 Python
        </div>
        <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 z-20 px-3 md:px-4 py-1.5 md:py-2 backdrop-blur-md bg-base/80 border border-white/10 rounded-full text-xs md:text-sm font-semibold text-accent shadow-lg animate-bounce" style={{animationDuration: '4s', animationDelay: '1s'}}>
          ☁️ Cloud Data
        </div>

        <div className="relative rounded-xl overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.3)] bg-[#0d1117] transform transition hover:scale-[1.02] duration-300 w-full max-w-[500px] ml-auto">
          <div className="flex items-center px-4 py-3 bg-[#161b22] border-b border-white/5">
            <div className="flex gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
            </div>
            <div className="mx-auto text-xs text-muted font-mono">developer.py</div>
          </div>
          <div className="p-4 md:p-6 font-mono text-xs md:text-sm leading-relaxed md:leading-loose overflow-x-auto whitespace-pre">
            <p><span className="text-purple-400">class</span> <span className="text-accent">Developer</span>:</p>
            <p className="ml-4"><span className="text-purple-400">def</span> <span className="text-blue-400">__init__</span>(<span className="text-orange-400">self</span>):</p>
            <p className="ml-8"><span className="text-orange-400">self</span>.name = <span className="text-green-400">"{portfolioData.hero.name}"</span></p>
            <p className="ml-8"><span className="text-orange-400">self</span>.role = <span className="text-green-400">"Data Scientist & AI Engineer"</span></p>
            <p className="ml-8"><span className="text-orange-400">self</span>.skills = [</p>
            <p className="ml-12 text-green-400">"Python", "Machine Learning",</p>
            <p className="ml-12 text-green-400">"Power BI", "Snowflake"</p>
            <p className="ml-8">]</p>
            <p className="ml-8"><span className="text-orange-400">self</span>.status = <span className="text-green-400">"Open to new opportunities"</span></p>
            <br/>
            <p className="text-muted italic"># Let's build something amazing together.</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
