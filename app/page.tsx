"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, ExternalLink } from "lucide-react";
import { portfolioData } from "./data";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-base min-h-screen text-ink font-body selection:bg-accent2 selection:text-base">
      
      {/* Mouse Glow effect */}
      <div className="pointer-events-none fixed inset-0 z-30 transition duration-300 hidden lg:block"
           style={{ background: 'radial-gradient(600px at var(--x, 50%) var(--y, 50%), rgba(139, 92, 246, 0.15), transparent 80%)' }} 
      />

      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">
          
          {/* Left Panel - Sticky */}
          <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-ink sm:text-5xl">
                {portfolioData.hero.name}
              </h1>
              <h2 className="mt-3 text-lg font-medium tracking-tight text-ink sm:text-xl">
                {portfolioData.hero.headline}
              </h2>
              <p className="mt-4 max-w-xs leading-normal text-muted">
                {portfolioData.hero.description}
              </p>
              
              <nav className="nav hidden lg:block mt-16">
                <ul className="mt-8 w-max">
                  <li>
                    <a className="group flex items-center py-3 active" href="#about">
                      <span className="nav-indicator mr-4 h-px w-8 bg-muted transition-all group-hover:w-16 group-hover:bg-ink group-focus-visible:w-16 group-focus-visible:bg-ink motion-reduce:transition-none"></span>
                      <span className="nav-text text-xs font-bold uppercase tracking-widest text-muted group-hover:text-ink group-focus-visible:text-ink">About</span>
                    </a>
                  </li>
                  <li>
                    <a className="group flex items-center py-3" href="#experience">
                      <span className="nav-indicator mr-4 h-px w-8 bg-muted transition-all group-hover:w-16 group-hover:bg-ink group-focus-visible:w-16 group-focus-visible:bg-ink motion-reduce:transition-none"></span>
                      <span className="nav-text text-xs font-bold uppercase tracking-widest text-muted group-hover:text-ink group-focus-visible:text-ink">Experience</span>
                    </a>
                  </li>
                  <li>
                    <a className="group flex items-center py-3" href="#projects">
                      <span className="nav-indicator mr-4 h-px w-8 bg-muted transition-all group-hover:w-16 group-hover:bg-ink group-focus-visible:w-16 group-focus-visible:bg-ink motion-reduce:transition-none"></span>
                      <span className="nav-text text-xs font-bold uppercase tracking-widest text-muted group-hover:text-ink group-focus-visible:text-ink">Projects</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>

            <ul className="mt-8 flex items-center gap-5" aria-label="Social media">
              <li>
                <a href={portfolioData.hero.socials.github} target="_blank" rel="noreferrer" className="text-muted hover:text-ink transition">
                  <span className="sr-only">GitHub</span>
                  <Github size={24} />
                </a>
              </li>
              <li>
                <a href={portfolioData.hero.socials.linkedin} target="_blank" rel="noreferrer" className="text-muted hover:text-ink transition">
                  <span className="sr-only">LinkedIn</span>
                  <Linkedin size={24} />
                </a>
              </li>
            </ul>
          </header>

          {/* Right Panel - Scrollable Content */}
          <main className="pt-24 lg:w-1/2 lg:py-24">
            
            {/* About Section */}
            <section id="about" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-base/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-ink lg:sr-only">About</h2>
              </div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-muted leading-relaxed"
              >
                <p className="mb-4">{portfolioData.about}</p>
              </motion.div>
            </section>

            {/* Experience Section */}
            <section id="experience" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-base/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-ink lg:sr-only">Experience</h2>
              </div>
              <div>
                <ol className="group/list">
                  {portfolioData.experience.map((exp, idx) => (
                    <motion.li 
                      key={idx} 
                      className="mb-12"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                    >
                      <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                        <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-surface2/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                        <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-muted sm:col-span-2">{exp.date}</header>
                        <div className="z-10 sm:col-span-6">
                          <h3 className="font-medium leading-snug text-ink">
                            <div>
                              <span className="inline-flex items-center text-lg">{exp.role} · {exp.company}</span>
                            </div>
                          </h3>
                          <p className="mt-2 text-sm leading-normal text-muted">{exp.description}</p>
                        </div>
                      </div>
                    </motion.li>
                  ))}
                </ol>
              </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-base/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-ink lg:sr-only">Projects</h2>
              </div>
              <div>
                <ul className="group/list">
                  {portfolioData.projects.map((project, idx) => (
                    <motion.li 
                      key={idx} 
                      className="mb-12"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                    >
                      <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                        <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-surface2/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                        <div className="z-10 sm:col-span-8">
                          <h3 className="font-medium leading-snug text-ink flex items-center group-hover:text-accent2 transition">
                            <a className="inline-flex items-baseline focus-visible:text-accent2" href={project.link} target="_blank" rel="noreferrer">
                              <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                              <span>{project.title}</span>
                              <ExternalLink size={14} className="ml-2 inline-block shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                            </a>
                          </h3>
                          <p className="mt-2 text-sm leading-normal text-muted">{project.description}</p>
                          <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                            {project.tags.map((tag, tIdx) => (
                              <li key={tIdx} className="mr-1.5 mt-2">
                                <div className="flex items-center rounded-full bg-accent2/10 px-3 py-1 text-xs font-medium leading-5 text-accent2">
                                  {tag}
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-base/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-ink lg:sr-only">Contact</h2>
              </div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-surface/50 border border-line rounded-lg p-6 md:p-8"
              >
                <h3 className="text-xl font-bold text-ink mb-2">Get In Touch</h3>
                <p className="text-muted mb-6">Currently open to new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!</p>
                <form className="flex flex-col gap-4">
                  <div className="flex flex-col md:flex-row gap-4">
                    <input type="text" placeholder="Name" className="w-full bg-base border border-line rounded px-4 py-2 text-ink focus:outline-none focus:border-accent2 transition-colors" required />
                    <input type="email" placeholder="Email" className="w-full bg-base border border-line rounded px-4 py-2 text-ink focus:outline-none focus:border-accent2 transition-colors" required />
                  </div>
                  <textarea placeholder="Message" rows={4} className="w-full bg-base border border-line rounded px-4 py-2 text-ink focus:outline-none focus:border-accent2 transition-colors resize-none" required></textarea>
                  <button type="submit" className="self-start mt-2 px-6 py-2 bg-accent2/10 text-accent2 border border-accent2/20 rounded hover:bg-accent2 hover:text-base transition-colors font-medium">Send Message</button>
                </form>
              </motion.div>
            </section>
          </main>

        </div>
      </div>
    </div>
  );
}
