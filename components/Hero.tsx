"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center px-6 pt-24 max-w-content mx-auto"
    >
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="path-label mb-4"
      >
        home
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="font-display font-700 text-5xl sm:text-7xl leading-[1.05] tracking-tight"
      >
        {/* TODO: your name */}
        Your Name
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-5 font-mono text-lg sm:text-xl text-accent2 cursor-blink"
      >
        {/* TODO: your title, e.g. "Full Stack Developer" */}
        Your Title Goes Here
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-6 max-w-xl text-muted text-lg"
      >
        {/* TODO: 1-2 sentence pitch. Be specific about what you build and for whom. */}
        A short, sharp description of what you build, who it's for, and the
        outcome it drives. Keep it to two sentences.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-9 flex flex-wrap items-center gap-4"
      >
        <a
          href="/resume.pdf"
          className="px-5 py-3 bg-accent text-base font-mono text-sm rounded hover:opacity-90 transition-opacity"
        >
          Download resume
        </a>
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noreferrer"
          className="p-3 border border-line rounded hover:border-accent hover:text-accent transition-colors"
          aria-label="GitHub profile"
        >
          <Github size={20} />
        </a>
        <a
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          rel="noreferrer"
          className="p-3 border border-line rounded hover:border-accent hover:text-accent transition-colors"
          aria-label="LinkedIn profile"
        >
          <Linkedin size={20} />
        </a>
      </motion.div>

      <a
        href="#about"
        aria-label="Scroll to about section"
        className="mt-16 text-muted hover:text-accent transition-colors animate-bounce w-fit"
      >
        <ArrowDown size={20} />
      </a>
    </section>
  );
}
