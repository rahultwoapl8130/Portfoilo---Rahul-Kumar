"use client";

import { motion } from "framer-motion";
import { Linkedin, Send } from "lucide-react";
import { portfolioData } from "../app/data";

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 md:scroll-mt-32 pb-16 md:pb-24">
      <h2 className="text-2xl md:text-3xl font-bold text-ink mb-6 md:mb-8 flex items-center gap-4">
        <span className="text-accent2">07.</span> Get In Touch
        <div className="h-px bg-white/10 flex-grow"></div>
      </h2>
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-3xl font-extrabold text-ink mb-4">Let's build something <br/><span className="text-accent2">extraordinary.</span></h3>
          <p className="text-muted text-base leading-relaxed mb-8">
            Whether you're looking for a Data Scientist, Machine Learning Engineer, or just want to say hi, my inbox is always open. I'll try my best to get back to you!
          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-4 text-muted hover:text-ink transition-colors">
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10"><Send size={16} className="text-accent2" /></div>
              <a href="mailto:rahultwoapl8130@gmail.com">rahultwoapl8130@gmail.com</a>
            </div>
            <div className="flex items-center gap-4 text-muted hover:text-ink transition-colors">
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10"><Linkedin size={16} className="text-accent2" /></div>
              <a href={portfolioData.hero.socials.linkedin} target="_blank" rel="noreferrer">LinkedIn Profile</a>
            </div>
          </div>
        </motion.div>
        
        <motion.form 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 shadow-2xl flex flex-col gap-4"
          onSubmit={(e) => { e.preventDefault(); alert("Form submission handled by your backend later!"); }}
        >
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold tracking-wider text-muted uppercase">Name</label>
              <input type="text" required placeholder="John Doe" className="bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-accent2 transition-colors text-ink" />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold tracking-wider text-muted uppercase">Email</label>
              <input type="email" required placeholder="john@example.com" className="bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-accent2 transition-colors text-ink" />
            </div>
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold tracking-wider text-muted uppercase">Subject</label>
            <input type="text" required placeholder="Job Opportunity" className="bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-accent2 transition-colors text-ink" />
          </div>
          <div className="flex flex-col gap-1.5 mb-2">
            <label className="text-xs font-semibold tracking-wider text-muted uppercase">Message</label>
            <textarea required rows={4} placeholder="Hi Rahul, I'd like to talk about..." className="bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-accent2 transition-colors text-ink resize-none"></textarea>
          </div>
          <button type="submit" className="w-full py-3 bg-gradient-to-r from-accent to-accent2 text-white font-bold rounded-lg hover:shadow-[0_0_20px_rgba(139,92,246,0.4)] hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2">
            <Send size={18} /> Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
}
