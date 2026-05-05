import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useTheme } from "@/lib/theme";

const links = [
  { href: "#about", label: "About" },
  { href: "#achievements", label: "Achievements" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const { theme, toggle } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-lg border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#top" className="font-display font-bold text-lg tracking-tight">
          niveditha<span className="text-accent">.</span>
        </a>

        <div className="flex items-center gap-2">
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className="h-9 w-9 grid place-items-center rounded-full hover:bg-muted transition-colors"
          >
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>

          <div ref={menuRef} className="relative">
            <button
              onClick={() => setOpen((o) => !o)}
              aria-expanded={open}
              aria-label="Menu"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface-elevated px-4 h-9 text-sm font-medium hover:bg-muted transition-colors shadow-soft"
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
              <span>Menu</span>
            </button>

            <AnimatePresence>
              {open && (
                <motion.div
                  initial={{ opacity: 0, y: -8, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -8, scale: 0.98 }}
                  transition={{ duration: 0.18, ease: "easeOut" }}
                  className="absolute right-0 mt-2 w-60 rounded-2xl border border-border bg-background/95 backdrop-blur-xl shadow-elevated overflow-hidden"
                >
                  <div className="px-4 pt-3 pb-2 text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
                    Navigate
                  </div>
                  <nav className="flex flex-col p-2">
                    {links.map((l, i) => (
                      <a
                        key={l.href}
                        href={l.href}
                        onClick={() => setOpen(false)}
                        className="group flex items-center justify-between px-3 py-2 rounded-lg text-sm text-foreground/80 hover:text-foreground hover:bg-muted transition-colors"
                      >
                        <span className="flex items-center gap-3">
                          <span className="font-mono text-[10px] text-muted-foreground w-5">
                            0{i + 1}
                          </span>
                          {l.label}
                        </span>
                        <span className="opacity-0 group-hover:opacity-100 text-accent transition-opacity">
                          →
                        </span>
                      </a>
                    ))}
                  </nav>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </header>
  );
}
