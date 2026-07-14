export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="hairline">
      <div className="max-w-content mx-auto px-6 py-6 flex flex-col sm:flex-row justify-between items-center gap-2 text-muted text-sm font-mono">
        <p>© {year} Your Name — built with Next.js & Tailwind</p>
        <p>Made in India</p>
      </div>

      {/* Status bar signature element, styled after a code editor's bottom bar */}
      <div className="bg-surface2 border-t border-line px-6 py-1.5">
        <div className="max-w-content mx-auto flex justify-between items-center font-mono text-xs text-muted">
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-accent inline-block" />
            open to work
          </span>
          <span>UTF-8 · main branch</span>
        </div>
      </div>
    </footer>
  );
}
