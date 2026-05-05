import { motion } from "framer-motion";
import { Section } from "./Section";

const groups = [
  { label: "Strong", items: ["Python", "HTML", "CSS", "JavaScript"] },
  { label: "Working Knowledge", items: ["Next.js", "Firebase", "REST APIs"] },
  { label: "Currently Learning", items: ["PyTorch", "OpenCV", "NLP", "Node.js"] },
  { label: "Tools", items: ["Git", "GitHub", "VS Code"] },
];

export function Skills() {
  return (
    <Section id="skills" eyebrow="Skills" title="A growing toolkit.">
      <div className="grid sm:grid-cols-2 gap-5">
        {groups.map((g, i) => (
          <motion.div
            key={g.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="rounded-2xl border border-border bg-card p-6 shadow-soft"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              <h3 className="font-display font-semibold">{g.label}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {g.items.map((s) => (
                <span
                  key={s}
                  className="rounded-lg bg-muted px-3 py-1.5 text-sm font-mono text-foreground/80 hover:bg-accent/10 hover:text-accent transition-colors"
                >
                  {s}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
