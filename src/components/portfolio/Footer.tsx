export function Footer() {
  return (
    <footer className="border-t border-border py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-4 text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} S Niveditha Krishna. Built with care.</p>
        <p className="font-mono text-xs">Designed & developed in Next.js + Tailwind</p>
      </div>
    </footer>
  );
}
