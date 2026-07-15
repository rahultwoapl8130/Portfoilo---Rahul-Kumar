"use client";

import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { portfolioData } from "../app/data";

const navLinks = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Services", id: "services" },
  { name: "Experience", id: "education" },
  { name: "Skills", id: "skills" },
  { name: "Projects", id: "projects" },
  { name: "Certifications", id: "certifications" },
  { name: "Contact", id: "contact" }
];

export default function Navbar({ activeSection }: { activeSection: string }) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <nav className="fixed top-4 md:top-6 left-0 w-full z-50 px-4 md:px-8">
      <div className="flex items-center justify-between max-w-7xl mx-auto gap-4">
        {/* Brand/Name Pill */}
        <div className="hidden lg:flex items-center gap-3 px-4 py-2 backdrop-blur-md bg-[#111111]/80 border border-white/10 rounded-full shadow-lg font-bold tracking-tight text-white whitespace-nowrap">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-accent to-accent2 flex items-center justify-center text-white text-xs shadow-inner overflow-hidden">
            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=256&auto=format&fit=crop" alt="Profile" className="w-full h-full object-cover" />
          </div>
          Rahul Kumar
        </div>
        
        {/* Links Pill */}
        <div className="flex-1 lg:flex-none flex justify-center">
          <div className="flex items-center gap-1 md:gap-2 px-3 py-2 backdrop-blur-md bg-[#111111]/80 border border-white/10 rounded-full shadow-lg overflow-x-auto no-scrollbar w-full md:w-auto">
            <ul className="flex items-center gap-1 md:gap-2 text-[10px] md:text-sm font-medium text-muted relative min-w-max mx-auto">
              {navLinks.map((link, idx) => (
                <li key={`${link.id}-${idx}`} className="relative z-10">
                  <a 
                    href={`#${link.id}`} 
                    className={`transition-colors px-2 py-1.5 md:px-4 md:py-2 block rounded-full ${activeSection === link.id ? 'text-white' : 'hover:text-white'}`}
                  >
                    {link.name}
                    {activeSection === link.id && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute inset-0 bg-white/10 rounded-full -z-10"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Theme Toggle Pill */}
        <div className="hidden sm:flex items-center justify-center px-2 py-2 backdrop-blur-md bg-[#111111]/80 border border-white/10 rounded-full shadow-lg">
          {mounted && (
            <button 
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="text-muted hover:text-white transition-colors p-2 rounded-full hover:bg-white/10"
              aria-label="Toggle Dark Mode"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}
