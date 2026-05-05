import { motion } from "framer-motion";
import { ArrowRight, Eye, Mail, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section id="top" className="relative pt-32 pb-24 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-hero-gradient pointer-events-none" />
      <div className="absolute inset-0 [background-image:radial-gradient(oklch(0.7_0.02_250/0.15)_1px,transparent_1px)] [background-size:32px_32px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_70%)] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full border border-border bg-surface-elevated px-3 py-1 text-xs font-mono shadow-soft"
        >
          <Sparkles className="h-3 w-3 text-accent" />
          <span className="text-muted-foreground">Available for internships · 2026</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-6 font-display text-5xl sm:text-6xl md:text-7xl font-semibold tracking-tight text-balance"
        >
          S Niveditha Krishna
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 text-lg md:text-xl text-muted-foreground max-w-2xl"
        >
          CSE (AIML) Student · Smart India Hackathon 2025 Winner
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 text-2xl md:text-3xl font-display font-medium text-balance max-w-3xl leading-tight"
        >
          Building <span className="text-accent">AI-powered applications</span> and solving
          real-world problems.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-6 text-base text-muted-foreground max-w-xl leading-relaxed"
        >
          Third-year engineering student passionate about machine learning, full-stack
          development, and shipping products that make a difference.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-10 flex flex-wrap gap-3"
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-5 py-3 text-sm font-medium shadow-elevated hover:shadow-glow transition-all hover:-translate-y-0.5"
          >
            View Projects
            <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-surface-elevated px-5 py-3 text-sm font-medium hover:bg-muted transition-colors"
          >
            <Eye className="h-4 w-4" />
            View Resume
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium hover:bg-muted transition-colors"
          >
            <Mail className="h-4 w-4" />
            Contact
          </a>
        </motion.div>
      </div>
    </section>
  );
}
