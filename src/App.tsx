import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ParticlesBackground from "./components/ParticlesBackground";
import LoadingScreen from "./components/LoadingScreen";

// Import components
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import GithubStats from "./components/GithubStats";
import Contact from "./components/Contact";
import SocialSidebar from "./components/SocialSidebar";

function App() {
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "services", "skills", "projects", "education", "certifications", "contact"];
      const scrollPosition = window.scrollY + 200;

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

  return (
    <div className="bg-base min-h-screen text-ink font-body selection:bg-accent2 selection:text-base relative transition-colors duration-300 overflow-x-hidden">
      
      <ParticlesBackground />
      <Navbar activeSection={activeSection} />
      <SocialSidebar />

      <main className="relative z-10 pt-28 md:pt-32 pb-24 max-w-screen-xl mx-auto px-4 md:px-12">
        <Hero />

        {/* VERTICAL LAYOUT FOR REMAINING SECTIONS */}
        <div className="max-w-4xl mx-auto space-y-24 md:space-y-32">
          <About />
          <Services />
          <Skills />
          <Projects />
          <Experience />
          <GithubStats />
          <Contact />
        </div>
      </main>

      {/* Back to Top Button */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: activeSection !== 'home' ? 1 : 0 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-6 right-6 z-40 p-3 bg-white/5 border border-white/10 rounded-full text-muted hover:text-accent2 hover:border-accent2 transition-all duration-300 shadow-lg backdrop-blur-md"
        aria-label="Back to top"
      >
        <div className="transform -rotate-90 text-xl font-bold leading-none">&gt;</div>
      </motion.button>
    </div>
  );
}

export default App;
