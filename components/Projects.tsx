import { Github, ExternalLink } from "lucide-react";

// TODO: replace with your real projects. Delete the placeholder ones.
// Every link should go somewhere real — don't leave "#" placeholders live.
const projects = [
  {
    title: "Project One",
    description:
      "One or two sentences on the real problem this solves and the approach you took.",
    stack: ["React", "Node.js", "PostgreSQL"],
    github: "https://github.com/yourusername/project-one",
    live: "https://project-one.vercel.app",
  },
  {
    title: "Project Two",
    description:
      "One or two sentences on the real problem this solves and the approach you took.",
    stack: ["Next.js", "Tailwind", "MongoDB"],
    github: "https://github.com/yourusername/project-two",
    live: "https://project-two.vercel.app",
  },
  {
    title: "Project Three",
    description:
      "One or two sentences on the real problem this solves and the approach you took.",
    stack: ["TypeScript", "Express", "Redis"],
    github: "https://github.com/yourusername/project-three",
    live: "https://project-three.vercel.app",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="hairline px-6 py-24 max-w-content mx-auto">
      <p className="path-label mb-4">projects</p>
      <h2 className="font-display font-600 text-3xl sm:text-4xl mb-12">
        Things I've shipped.
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <article
            key={project.title}
            className="bg-surface border border-line rounded-lg p-6 flex flex-col hover:border-accent2/60 transition-colors"
          >
            <h3 className="font-display font-600 text-xl mb-2">{project.title}</h3>
            <p className="text-muted mb-4 flex-1">{project.description}</p>

            <ul className="flex flex-wrap gap-2 mb-5">
              {project.stack.map((tech) => (
                <li
                  key={tech}
                  className="font-mono text-xs text-accent2 bg-accent2/10 px-2 py-1 rounded"
                >
                  {tech}
                </li>
              ))}
            </ul>

            <div className="flex gap-4 font-mono text-sm">
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 text-muted hover:text-accent transition-colors"
              >
                <Github size={16} /> code
              </a>
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 text-muted hover:text-accent transition-colors"
              >
                <ExternalLink size={16} /> live demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
