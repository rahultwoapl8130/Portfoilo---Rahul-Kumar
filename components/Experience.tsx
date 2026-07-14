// TODO: replace with your real experience, most recent first
const experience = [
  {
    period: "2024 — Present",
    role: "Your Role",
    org: "Company / Client",
    points: [
      "One concrete accomplishment with a number or outcome attached.",
      "A second bullet describing scope or a technical decision you made.",
    ],
  },
  {
    period: "2023 — 2024",
    role: "Previous Role",
    org: "Company / Client",
    points: [
      "One concrete accomplishment with a number or outcome attached.",
      "A second bullet describing scope or a technical decision you made.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="hairline px-6 py-24 max-w-content mx-auto">
      <p className="path-label mb-4">experience</p>
      <h2 className="font-display font-600 text-3xl sm:text-4xl mb-12">
        Where I've worked.
      </h2>

      <div className="space-y-10">
        {experience.map((job) => (
          <div key={job.role + job.period} className="grid sm:grid-cols-[200px_1fr] gap-4">
            <p className="font-mono text-sm text-muted">{job.period}</p>
            <div>
              <h3 className="font-display font-600 text-lg">
                {job.role} <span className="text-muted font-body">· {job.org}</span>
              </h3>
              <ul className="mt-3 space-y-2 text-muted">
                {job.points.map((point, i) => (
                  <li key={i} className="pl-4 relative">
                    <span className="absolute left-0 text-accent">›</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
