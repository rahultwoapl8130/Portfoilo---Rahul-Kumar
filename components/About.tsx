export default function About() {
  return (
    <section id="about" className="hairline px-6 py-24 max-w-content mx-auto">
      <p className="path-label mb-4">about</p>
      <div className="grid md:grid-cols-[1fr_1.4fr] gap-10">
        <h2 className="font-display font-600 text-3xl sm:text-4xl leading-tight">
          A little about how I work.
        </h2>
        <div className="space-y-4 text-muted text-lg leading-relaxed">
          {/* TODO: replace with your real background, 2-3 short paragraphs */}
          <p>
            Paragraph one — who you are, your core focus, and the kind of
            problems you like solving. Keep it concrete: name the stack or
            domain, not just adjectives.
          </p>
          <p>
            Paragraph two — how you got here (education, prior roles, a
            turning point) and what it taught you that shows up in your work
            today.
          </p>
          <p>
            Paragraph three — what you're focused on right now and what
            you're looking for next.
          </p>
        </div>
      </div>
    </section>
  );
}
