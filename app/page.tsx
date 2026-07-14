"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, ExternalLink, Moon, Sun, Download, Award, BookOpen, Star, GitCommit } from "lucide-react";
import { portfolioData } from "./data";
import ParticlesBackground from "../components/ParticlesBackground";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Home() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <div className="bg-base min-h-screen text-ink font-body selection:bg-accent2 selection:text-base relative transition-colors duration-300 overflow-x-hidden">
      
      <ParticlesBackground />

      {/* Floating Centered Navbar - Mobile Optimized */}
      <nav className="fixed top-4 md:top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] md:w-auto max-w-2xl">
        <div className="flex items-center justify-between md:justify-center gap-2 md:gap-8 px-4 md:px-6 py-3 backdrop-blur-md bg-white/5 border border-white/10 rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.1)]">
          {/* Brand/Name */}
          <div className="hidden md:flex items-center mr-4 font-bold tracking-tight text-ink whitespace-nowrap">
            {portfolioData.hero.name.split(" ")[0]}
          </div>
          
          <ul className="flex items-center justify-center gap-3 md:gap-6 text-xs md:text-sm font-medium text-muted overflow-x-auto no-scrollbar">
            <li><a href="#home" className="hover:text-ink transition-colors">Home</a></li>
            <li><a href="#about" className="hover:text-ink transition-colors">About</a></li>
            <li><a href="#projects" className="hover:text-ink transition-colors">Projects</a></li>
            <li><a href="#contact" className="hover:text-ink transition-colors">Contact</a></li>
          </ul>

          {mounted && (
            <button 
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="ml-2 flex-shrink-0 text-muted hover:text-ink transition-colors p-1.5 rounded-full hover:bg-white/5"
              aria-label="Toggle Dark Mode"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          )}
        </div>
      </nav>

      <main className="relative z-10 pt-28 md:pt-32 pb-24 max-w-screen-xl mx-auto px-4 md:px-12">
        
        {/* HERO SECTION */}
        <section id="home" className="min-h-[85vh] flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8 pt-8 pb-16 md:pb-24">
          
          {/* Left Column (Text & Buttons) */}
          <div className="w-full lg:w-1/2 flex flex-col items-start text-left mt-8 md:mt-0">
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
              className="text-lg md:text-2xl lg:text-3xl font-semibold mb-6 h-8 md:h-10"
            >
              <div className="typing-container text-accent2 text-sm md:text-xl lg:text-2xl">Machine Learning | Data</div>
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
              <a href="/Rahul_Kumar_Resume.pdf" target="_blank" className="w-full sm:w-auto justify-center px-8 py-3.5 bg-transparent border border-white/20 text-ink font-semibold rounded-lg hover:bg-white/5 transition-all duration-300 flex items-center gap-2">
                <Download size={18} /> Resume
              </a>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-10 md:mt-12 flex gap-4"
            >
              <a href={portfolioData.hero.socials.github} target="_blank" rel="noreferrer" className="p-3 bg-white/5 border border-white/10 rounded-full text-muted hover:text-ink hover:border-accent2 transition">
                <Github size={20} />
              </a>
              <a href={portfolioData.hero.socials.linkedin} target="_blank" rel="noreferrer" className="p-3 bg-white/5 border border-white/10 rounded-full text-muted hover:text-ink hover:border-accent2 transition">
                <Linkedin size={20} />
              </a>
            </motion.div>
          </div>

          {/* Right Column (IDE Mockup) - Hidden on very small screens, visible on md and up */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="w-full lg:w-1/2 relative mt-12 lg:mt-0 hidden sm:block"
          >
            {/* Floating Tech Badges */}
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

        {/* MARQUEE SECTION */}
        <section className="mb-16 md:mb-24 overflow-hidden relative py-4 md:py-8 -mx-4 md:mx-0">
          <div className="absolute inset-y-0 left-0 w-12 md:w-24 bg-gradient-to-r from-base to-transparent z-10"></div>
          <div className="absolute inset-y-0 right-0 w-12 md:w-24 bg-gradient-to-l from-base to-transparent z-10"></div>
          <div className="flex w-max animate-scroll hover-pause space-x-4 md:space-x-6 items-center">
            {[...portfolioData.skills, ...portfolioData.skills, ...portfolioData.skills].map((skill, idx) => (
              <div key={idx} className="flex items-center justify-center px-4 md:px-6 py-2 md:py-3 backdrop-blur-md bg-white/5 border border-white/10 rounded-full text-xs md:text-sm font-semibold text-ink shadow-lg whitespace-nowrap">
                {skill}
              </div>
            ))}
          </div>
        </section>

        {/* VERTICAL LAYOUT FOR REMAINING SECTIONS */}
        <div className="max-w-4xl mx-auto space-y-24 md:space-y-32">
          
          {/* About Section */}
          <section id="about" className="scroll-mt-24 md:scroll-mt-32">
            <h2 className="text-2xl md:text-3xl font-bold text-ink mb-6 md:mb-8 flex items-center gap-4">
              <span className="text-accent2">01.</span> About Me
              <div className="h-px bg-white/10 flex-grow"></div>
            </h2>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-muted leading-relaxed text-base md:text-lg backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 shadow-lg"
            >
              <p>{portfolioData.about}</p>
            </motion.div>
          </section>

          {/* Education & Experience Section */}
          <section id="education" className="scroll-mt-24 md:scroll-mt-32">
            <h2 className="text-2xl md:text-3xl font-bold text-ink mb-6 md:mb-8 flex items-center gap-4">
              <span className="text-accent2">02.</span> Education
              <div className="h-px bg-white/10 flex-grow"></div>
            </h2>
            <div className="space-y-4 md:space-y-6">
              {portfolioData.experience.map((exp, idx) => (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 shadow-lg hover:border-accent2/30 transition-all duration-300 flex flex-col md:flex-row gap-2 md:gap-6"
                >
                  <div className="md:w-1/4 text-xs md:text-sm font-semibold text-accent2 font-mono md:mt-1 mb-2 md:mb-0">
                    {exp.date}
                  </div>
                  <div className="md:w-3/4">
                    <h3 className="text-lg md:text-xl font-bold text-ink mb-1 flex items-center gap-2">
                      <BookOpen size={18} className="text-accent2" /> {exp.role}
                    </h3>
                    <h4 className="text-base md:text-lg text-muted mb-3">{exp.company}</h4>
                    <p className="text-muted text-sm md:text-base leading-relaxed">{exp.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="scroll-mt-24 md:scroll-mt-32">
            <h2 className="text-2xl md:text-3xl font-bold text-ink mb-6 md:mb-8 flex items-center gap-4">
              <span className="text-accent2">03.</span> Featured Projects
              <div className="h-px bg-white/10 flex-grow"></div>
            </h2>
            <div className="grid md:grid-cols-2 gap-4 md:gap-6">
              {portfolioData.projects.map((project, idx) => (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 shadow-lg hover:border-accent2/30 hover:-translate-y-1 md:hover:-translate-y-2 transition-all duration-300 flex flex-col h-full group"
                >
                  <div className="flex justify-between items-start mb-4 md:mb-6">
                    <a href={project.link} target="_blank" rel="noreferrer" className="p-2 md:p-3 bg-accent2/10 text-accent2 rounded-lg hover:bg-accent2/20 transition-colors">
                      <ExternalLink size={20} className="md:w-6 md:h-6" />
                    </a>
                    {project.github && project.github !== "#" && (
                      <a href={project.github} target="_blank" rel="noreferrer" className="text-muted hover:text-accent2 transition-colors p-2">
                        <Github size={20} className="md:w-6 md:h-6" />
                      </a>
                    )}
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-ink mb-2 md:mb-3 group-hover:text-accent2 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted text-sm md:text-base leading-relaxed flex-grow mb-4 md:mb-6">
                    {project.description}
                  </p>
                  <ul className="flex flex-wrap gap-1.5 md:gap-2 mt-auto">
                    {project.tags.map((tag, tIdx) => (
                      <li key={tIdx} className="text-[10px] md:text-xs font-mono text-accent2 px-2 md:px-3 py-1 bg-white/5 rounded-full border border-white/5">
                        {tag}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Certifications Section */}
          <section id="certifications" className="scroll-mt-24 md:scroll-mt-32">
            <h2 className="text-2xl md:text-3xl font-bold text-ink mb-6 md:mb-8 flex items-center gap-4">
              <span className="text-accent2">04.</span> Certifications
              <div className="h-px bg-white/10 flex-grow"></div>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {portfolioData.certifications.map((cert, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="flex items-center gap-4 backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-4 md:p-5 shadow-sm hover:shadow-md hover:border-accent2/30 transition-all group"
                >
                  <div className="p-3 bg-accent2/10 rounded-full text-accent2 group-hover:scale-110 transition-transform">
                    <Award size={24} />
                  </div>
                  <div>
                    <h3 className="text-sm md:text-base font-bold text-ink line-clamp-1">{cert.title}</h3>
                    <p className="text-xs md:text-sm text-muted">{cert.issuer}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* GitHub Stats Section */}
          <section id="github" className="scroll-mt-24 md:scroll-mt-32">
            <h2 className="text-2xl md:text-3xl font-bold text-ink mb-6 md:mb-8 flex items-center gap-4">
              <span className="text-accent2">05.</span> Open Source
              <div className="h-px bg-white/10 flex-grow"></div>
            </h2>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="backdrop-blur-md bg-[#0d1117] border border-white/10 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 overflow-hidden"
            >
              <div className="text-center md:text-left flex-1">
                <h3 className="text-xl md:text-2xl font-bold text-ink mb-2 flex items-center justify-center md:justify-start gap-2">
                  <Github className="text-accent2" /> GitHub Stats
                </h3>
                <p className="text-muted text-sm md:text-base">Passionate about writing clean code and contributing to open-source projects.</p>
              </div>
              <div className="flex gap-4 flex-wrap justify-center flex-1">
                <a href={portfolioData.hero.socials.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm hover:border-accent2 transition-colors">
                  <GitCommit size={16} className="text-green-400" /> Commits
                </a>
                <a href={portfolioData.hero.socials.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm hover:border-accent2 transition-colors">
                  <Star size={16} className="text-yellow-400" /> Stars
                </a>
              </div>
            </motion.div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="scroll-mt-24 md:scroll-mt-32 pb-16 md:pb-24">
            <h2 className="text-2xl md:text-3xl font-bold text-ink mb-6 md:mb-8 flex items-center gap-4">
              <span className="text-accent2">06.</span> Get In Touch
              <div className="h-px bg-white/10 flex-grow"></div>
            </h2>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="backdrop-blur-md bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-8 md:p-12 shadow-2xl text-center max-w-2xl mx-auto"
            >
              <h3 className="text-3xl md:text-4xl font-extrabold text-ink mb-4 drop-shadow-sm">Let's Connect</h3>
              <p className="text-muted mb-6 md:mb-8 text-base md:text-lg">Currently open to new opportunities. Whether you have a question or just want to say hi, my inbox is always open!</p>
              
              <a href={`mailto:rahultwoapl8130@gmail.com`} className="inline-block w-full sm:w-auto px-8 md:px-10 py-3.5 md:py-4 bg-accent2 text-white text-sm md:text-base font-bold rounded-lg hover:bg-accent hover:shadow-[0_0_30px_rgba(139,92,246,0.5)] transition-all duration-300 transform hover:-translate-y-1">
                Say Hello &rarr;
              </a>
            </motion.div>
          </section>

        </div>
      </main>
    </div>
  );
}
