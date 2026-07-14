import { Mail, Github, Linkedin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="hairline px-6 py-24 max-w-content mx-auto">
      <p className="path-label mb-4">contact</p>
      <h2 className="font-display font-600 text-3xl sm:text-4xl mb-4">
        Let's build something.
      </h2>
      <p className="text-muted text-lg max-w-lg mb-10">
        {/* TODO: your own line here */}
        Open to new roles and freelance projects. The fastest way to reach me
        is email.
      </p>

      <div className="flex flex-wrap gap-4 font-mono text-sm">
        <a
          href="mailto:you@example.com"
          className="flex items-center gap-2 px-5 py-3 bg-accent text-base rounded hover:opacity-90 transition-opacity"
        >
          <Mail size={18} /> you@example.com
        </a>
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 px-5 py-3 border border-line rounded hover:border-accent hover:text-accent transition-colors"
        >
          <Github size={18} /> GitHub
        </a>
        <a
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 px-5 py-3 border border-line rounded hover:border-accent hover:text-accent transition-colors"
        >
          <Linkedin size={18} /> LinkedIn
        </a>
      </div>
    </section>
  );
}
