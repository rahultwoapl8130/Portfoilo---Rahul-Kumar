"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { portfolioData } from "../app/data";

export default function SocialSidebar() {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 1 }}
      className="fixed bottom-0 left-6 z-40 hidden lg:flex flex-col items-center gap-6"
    >
      <a 
        href={portfolioData.hero.socials.github} 
        target="_blank" 
        rel="noreferrer" 
        className="p-3 bg-white/5 border border-white/10 rounded-xl text-muted hover:text-accent2 hover:border-accent2 transition-all duration-300 hover:-translate-y-1 backdrop-blur-md"
      >
        <Github size={20} />
      </a>
      <a 
        href={portfolioData.hero.socials.linkedin} 
        target="_blank" 
        rel="noreferrer" 
        className="p-3 bg-white/5 border border-white/10 rounded-xl text-muted hover:text-accent2 hover:border-accent2 transition-all duration-300 hover:-translate-y-1 backdrop-blur-md"
      >
        <Linkedin size={20} />
      </a>
      <a 
        href="#" 
        target="_blank" 
        rel="noreferrer" 
        className="p-3 bg-white/5 border border-white/10 rounded-xl text-muted hover:text-accent2 hover:border-accent2 transition-all duration-300 hover:-translate-y-1 backdrop-blur-md"
      >
        <Twitter size={20} />
      </a>
      <a 
        href="mailto:rahultwoapl8130@gmail.com" 
        className="p-3 bg-white/5 border border-white/10 rounded-xl text-muted hover:text-accent2 hover:border-accent2 transition-all duration-300 hover:-translate-y-1 backdrop-blur-md"
      >
        <Mail size={20} />
      </a>
      
      {/* Vertical line connecting to bottom */}
      <div className="w-[1px] h-24 bg-gradient-to-b from-white/20 to-transparent mt-2"></div>
    </motion.div>
  );
}
