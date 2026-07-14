const skillGroups = [
  {
    label: "Languages",
    // TODO: replace with your real skills
    items: ["JavaScript", "TypeScript", "Python", "SQL"],
  },
  {
    label: "Frontend",
    items: ["React", "Next.js", "Tailwind CSS"],
  },
  {
    label: "Backend",
    items: ["Node.js", "Express", "PostgreSQL", "MongoDB"],
  },
  {
    label: "Tools & Cloud",
    items: ["Git", "Docker", "Vercel", "AWS"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="hairline px-6 py-24 max-w-content mx-auto">
      <p className="path-label mb-4">skills</p>
      <h2 className="font-display font-600 text-3xl sm:text-4xl mb-12">
        Tools I reach for.
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {skillGroups.map((group) => (
          <div key={group.label}>
            <h3 className="font-mono text-sm text-accent2 mb-4">{group.label}</h3>
            <ul className="space-y-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="text-ink border-b border-line pb-2 last:border-0"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
