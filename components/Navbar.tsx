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
    <nav className="fixed top-4 md:top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] md:w-auto max-w-4xl">
      <div className="flex items-center justify-between md:justify-center gap-2 md:gap-8 px-4 md:px-6 py-3 backdrop-blur-md bg-[#111111]/80 border border-white/10 rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
        {/* Brand/Name */}
        <div className="hidden xl:flex items-center gap-2 mr-4 font-bold tracking-tight text-white whitespace-nowrap">
          <div className="w-8 h-8 rounded-full bg-accent2/20 border border-accent2/50 flex items-center justify-center text-accent2 text-xs">
            RK
          </div>
          Rahul Kumar
        </div>
        
        <ul className="flex items-center justify-center gap-1 md:gap-2 text-xs md:text-sm font-medium text-muted overflow-x-auto no-scrollbar relative">
          {navLinks.map((link, idx) => (
            <li key={`${link.id}-${idx}`} className="relative z-10">
              <a 
                href={`#${link.id}`} 
                className={`transition-colors px-3 py-1.5 md:px-4 md:py-2 block rounded-full ${activeSection === link.id ? 'text-white' : 'hover:text-ink'}`}
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

        {mounted && (
          <button 
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="ml-2 flex-shrink-0 text-muted hover:text-white transition-colors p-1.5 rounded-full hover:bg-white/10"
            aria-label="Toggle Dark Mode"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        )}
      </div>
    </nav>
  );
}
