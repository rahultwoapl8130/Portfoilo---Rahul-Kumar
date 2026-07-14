"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#about", label: "about" },
  { href: "#skills", label: "skills" },
  { href: "#projects", label: "projects" },
  { href: "#experience", label: "experience" },
  { href: "#contact", label: "contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors ${
        scrolled ? "bg-base/90 backdrop-blur border-b border-line" : "bg-transparent"
      }`}
    >
      <nav className="max-w-content mx-auto flex items-center justify-between px-6 py-4">
        <a href="#home" className="font-mono text-ink text-sm">
          {/* TODO: replace with your initials or a small logo */}
          <span className="text-accent">$</span> whoami
        </a>

        <ul className="hidden md:flex items-center gap-8 font-mono text-sm text-muted">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="hover:text-accent transition-colors">
                ~/{link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden md:inline-block font-mono text-sm px-4 py-2 border border-accent text-accent rounded hover:bg-accent hover:text-base transition-colors"
        >
          hire_me()
        </a>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          className="md:hidden text-ink"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <ul className="md:hidden flex flex-col gap-1 px-6 pb-4 font-mono text-sm text-muted bg-base border-b border-line">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="block py-2 hover:text-accent transition-colors"
                onClick={() => setOpen(false)}
              >
                ~/{link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
