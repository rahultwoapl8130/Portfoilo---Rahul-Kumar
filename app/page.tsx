"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, ExternalLink, Moon, Sun, Download, Award, BookOpen, Star, GitCommit } from "lucide-react";
import { portfolioData } from "./data";
import ParticlesBackground from "../components/ParticlesBackground";
import LoadingScreen from "../components/LoadingScreen";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Typewriter from "typewriter-effect";

export default function Home() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "education", "certifications", "github", "contact"];
      const scrollPosition = window.scrollY + 200; // offset

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && 
            element.offsetTop <= scrollPosition && 
            (element.offsetTop + element.offsetHeight) > scrollPosition) {
          setActiveSection(section);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (loading) {
    return <LoadingScreen onComplete={() => setLoading(false)} />;
  }

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Services", id: "services" },
    { name: "Experience", id: "education" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Education", id: "education" },
    { name: "Contact", id: "contact" }
  ];

  return (
    <div className="bg-base min-h-screen text-ink font-body selection:bg-accent2 selection:text-base relative transition-colors duration-300 overflow-x-hidden">
      
      <ParticlesBackground />

      {/* Floating Centered Navbar with Scroll Spy */}
      <nav className="fixed top-4 md:top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] md:w-auto max-w-2xl">
        <div className="flex items-center justify-between md:justify-center gap-2 md:gap-8 px-4 md:px-6 py-3 backdrop-blur-md bg-[#111111]/80 border border-white/10 rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
          {/* Brand/Name */}
          <div className="hidden xl:flex items-center gap-2 mr-4 font-bold tracking-tight text-white whitespace-nowrap">
            <div className="w-8 h-8 rounded-full bg-accent2/20 border border-accent2/50 flex items-center justify-center text-accent2 text-xs">
              RK
            </div>
            Rahul Kumar
          </div>
          
          <ul className="flex items-center justify-center gap-1 md:gap-2 text-xs md:text-sm font-medium text-muted overflow-x-auto no-scrollbar relative">
            {navLinks.map((link) => (
              <li key={link.id} className="relative z-10">
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
        <section id="home" className="min-h-[85vh] flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8 pt-8 pb-16 md:pb-24 scroll-mt-32">
          
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
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="text-muted leading-relaxed text-base md:text-lg backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-[0_0_30px_rgba(255,255,255,0.05)] transition-shadow"
            >
              <p>{portfolioData.about}</p>
            </motion.div>
          </section>

          {/* Skills Dashboard Section */}
          <section id="skills" className="scroll-mt-24 md:scroll-mt-32">
            <h2 className="text-2xl md:text-3xl font-bold text-ink mb-6 md:mb-8 flex items-center gap-4">
              <span className="text-accent2">02.</span> Core Competencies
              <div className="h-px bg-white/10 flex-grow"></div>
            </h2>
            <div className="grid md:grid-cols-2 gap-8 md:gap-12">
              {Object.entries(
                portfolioData.skills.reduce((acc, skill: any) => {
                  if (!acc[skill.category]) acc[skill.category] = [];
                  acc[skill.category].push(skill);
                  return acc;
                }, {} as Record<string, any[]>)
              ).map(([category, skills], idx) => (
                <div key={idx} className="space-y-4">
                  <h3 className="text-sm font-bold text-ink uppercase tracking-wider mb-4 border-b border-white/10 pb-2">{category}</h3>
                  <div className="space-y-4">
                    {skills.map((skill, sIdx) => (
                      <div key={sIdx}>
                        <div className="flex justify-between text-xs font-mono text-muted mb-1.5">
                          <span>{skill.name}</span>
                          <span>{skill.percentage}%</span>
                        </div>
                        <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden border border-white/5">
                          <motion.div 
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.percentage}%` }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 1, delay: sIdx * 0.1, ease: "easeOut" }}
                            className="h-full bg-gradient-to-r from-accent to-accent2 rounded-full relative"
                          >
                            <div className="absolute inset-0 bg-white/20 w-full h-full animate-[shimmer_2s_infinite] -translate-x-full" style={{backgroundImage: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)'}}></div>
                          </motion.div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="scroll-mt-24 md:scroll-mt-32">
            <h2 className="text-2xl md:text-3xl font-bold text-ink mb-6 md:mb-8 flex items-center gap-4">
              <span className="text-accent2">03.</span> Case Studies
              <div className="h-px bg-white/10 flex-grow"></div>
            </h2>
            <div className="space-y-12">
              {portfolioData.projects.map((project, idx) => (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] hover:border-accent2/40 hover:-translate-y-2 transition-all duration-300 flex flex-col group"
                >
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-ink mb-2 group-hover:text-accent2 transition-colors duration-300">
                        {project.title}
                      </h3>
                      <ul className="flex flex-wrap gap-1.5 md:gap-2 mb-4">
                        {project.tags.map((tag, tIdx) => (
                          <li key={tIdx} className="text-[10px] md:text-xs font-mono text-accent2 px-2 md:px-3 py-1 bg-white/5 rounded-full border border-white/5 hover:bg-white/10 transition-colors">
                            {tag}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex gap-2">
                      <a href={project.link} target="_blank" rel="noreferrer" className="p-2 bg-accent2/10 text-accent2 rounded-lg hover:bg-accent2 hover:text-white transition-colors duration-300">
                        <ExternalLink size={20} />
                      </a>
                      {project.github && project.github !== "#" && (
                        <a href={project.github} target="_blank" rel="noreferrer" className="text-muted hover:text-ink transition-colors p-2 bg-white/5 rounded-lg border border-white/10 hover:border-white/30">
                          <Github size={20} />
                        </a>
                      )}
                    </div>
                  </div>

                  <p className="text-muted text-base leading-relaxed mb-8">
                    {project.description}
                  </p>

                  <div className="grid md:grid-cols-3 gap-6 bg-base/50 p-6 rounded-xl border border-white/5 group-hover:bg-white/5 transition-colors duration-300">
                    {project.businessProblem && (
                      <div>
                        <h4 className="text-xs font-bold text-ink uppercase tracking-wider mb-2 border-b border-white/5 pb-1">Business Problem</h4>
                        <p className="text-sm text-muted leading-relaxed">{project.businessProblem}</p>
                      </div>
                    )}
                    {project.architecture && (
                      <div>
                        <h4 className="text-xs font-bold text-ink uppercase tracking-wider mb-2 border-b border-white/5 pb-1">Architecture</h4>
                        <p className="text-sm text-muted leading-relaxed">{project.architecture}</p>
                      </div>
                    )}
                    {project.businessImpact && (
                      <div>
                        <h4 className="text-xs font-bold text-ink uppercase tracking-wider mb-2 border-b border-white/5 pb-1">Business Impact</h4>
                        <p className="text-sm text-muted leading-relaxed">{project.businessImpact}</p>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Education & Experience Section */}
          <section id="education" className="scroll-mt-24 md:scroll-mt-32">
            <h2 className="text-2xl md:text-3xl font-bold text-ink mb-6 md:mb-8 flex items-center gap-4">
              <span className="text-accent2">04.</span> Education
              <div className="h-px bg-white/10 flex-grow"></div>
            </h2>
            <div className="space-y-4 md:space-y-6">
              {portfolioData.experience.map((exp, idx) => (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-[0_0_30px_rgba(255,255,255,0.05)] hover:border-accent2/30 transition-all duration-300 flex flex-col md:flex-row gap-2 md:gap-6"
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

          {/* Certifications Section */}
          <section id="certifications" className="scroll-mt-24 md:scroll-mt-32">
            <h2 className="text-2xl md:text-3xl font-bold text-ink mb-6 md:mb-8 flex items-center gap-4">
              <span className="text-accent2">05.</span> Certifications
              <div className="h-px bg-white/10 flex-grow"></div>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {portfolioData.certifications.map((cert, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="flex items-center gap-4 backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-4 md:p-5 shadow-sm hover:shadow-[0_10px_20px_rgba(0,0,0,0.2)] hover:border-accent2/30 hover:-translate-y-1 transition-all duration-300 group"
                >
                  <div className="p-3 bg-accent2/10 rounded-full text-accent2 group-hover:scale-110 group-hover:bg-accent2 group-hover:text-white transition-all duration-300">
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
              <span className="text-accent2">06.</span> Open Source
              <div className="h-px bg-white/10 flex-grow"></div>
            </h2>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="backdrop-blur-md bg-[#0d1117] border border-white/10 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 overflow-hidden relative group hover:border-white/20 transition-colors"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-accent2/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="text-center md:text-left flex-1 relative z-10">
                <h3 className="text-xl md:text-2xl font-bold text-ink mb-2 flex items-center justify-center md:justify-start gap-2">
                  <Github className="text-accent2" /> GitHub Stats
                </h3>
                <p className="text-muted text-sm md:text-base">Passionate about writing clean code and contributing to open-source projects.</p>
              </div>
              <div className="flex gap-4 flex-wrap justify-center flex-1 relative z-10">
                <a href={portfolioData.hero.socials.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm hover:border-accent2 hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1">
                  <GitCommit size={16} className="text-green-400" /> Commits
                </a>
                <a href={portfolioData.hero.socials.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm hover:border-accent2 hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1">
                  <Star size={16} className="text-yellow-400" /> Stars
                </a>
              </div>
            </motion.div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="scroll-mt-24 md:scroll-mt-32 pb-16 md:pb-24">
            <h2 className="text-2xl md:text-3xl font-bold text-ink mb-6 md:mb-8 flex items-center gap-4">
              <span className="text-accent2">07.</span> Get In Touch
              <div className="h-px bg-white/10 flex-grow"></div>
            </h2>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="backdrop-blur-md bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-8 md:p-12 shadow-2xl text-center max-w-2xl mx-auto hover:shadow-[0_0_40px_rgba(139,92,246,0.15)] hover:border-accent2/30 transition-all duration-500"
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

      {/* Back to Top Button */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: activeSection !== 'home' ? 1 : 0 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-6 left-6 z-40 p-3 bg-white/5 border border-white/10 rounded-full text-muted hover:text-accent2 hover:border-accent2 transition-all duration-300 shadow-lg backdrop-blur-md"
        aria-label="Back to top"
      >
        <div className="transform -rotate-90 text-xl font-bold leading-none">&gt;</div>
      </motion.button>
    </div>
  );
}
