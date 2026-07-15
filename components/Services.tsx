"use client";

import { motion } from "framer-motion";
import { BrainCircuit, LineChart, PieChart, Star } from "lucide-react";
import { portfolioData } from "../app/data";

// Helper to get Lucide icons dynamically
const getIcon = (iconName: string) => {
  switch (iconName) {
    case "BrainCircuit": return <BrainCircuit size={32} />;
    case "LineChart": return <LineChart size={32} />;
    case "PieChart": return <PieChart size={32} />;
    default: return <Star size={32} />;
  }
};

export default function Services() {
  return (
    <section id="services" className="scroll-mt-24 md:scroll-mt-32">
      <h2 className="text-2xl md:text-3xl font-bold text-ink mb-6 md:mb-8 flex items-center gap-4">
        <span className="text-accent2">02.</span> What I Offer
        <div className="h-px bg-white/10 flex-grow"></div>
      </h2>
      <div className="grid md:grid-cols-3 gap-6">
        {portfolioData.services?.map((service, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 shadow-lg hover:border-accent2/30 hover:-translate-y-2 transition-all duration-300 group flex flex-col items-center text-center"
          >
            <div className="w-16 h-16 rounded-full bg-accent2/10 flex items-center justify-center text-accent2 mb-6 group-hover:scale-110 group-hover:bg-accent2 group-hover:text-white transition-all duration-300">
              {getIcon(service.icon)}
            </div>
            <h3 className="text-lg md:text-xl font-bold text-ink mb-3 group-hover:text-accent2 transition-colors">{service.title}</h3>
            <p className="text-muted text-sm leading-relaxed">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
