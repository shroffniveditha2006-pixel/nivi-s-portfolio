import { motion } from "framer-motion";
import { Section } from "./Section";

const milestones = [
  "Strong academic base — 98% (X) and 98.6% (XII)",
  "Started with programming fundamentals",
  "Transitioned into web development & AI",
  "Built real-world impactful projects",
  "Contributed to a Smart India Hackathon winning solution",
  "Now exploring advanced AI and full-stack engineering",
];

export function Journey() {
  return (
    <Section id="journey" eyebrow="Learning Journey" title="One step, then the next.">
      <div className="relative">
        <div className="hidden md:block absolute left-1/2 top-2 bottom-2 w-px bg-border -translate-x-1/2" />
        <div className="space-y-6 md:space-y-0">
          {milestones.map((m, i) => (
            <motion.div
              key={m}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className={`md:grid md:grid-cols-2 md:gap-12 md:py-4 ${
                i % 2 === 0 ? "" : "md:[&>div:first-child]:col-start-2"
              }`}
            >
              <div className={`relative ${i % 2 === 0 ? "md:text-right md:pr-10" : "md:pl-10"}`}>
                <div className="rounded-2xl border border-border bg-card p-5 shadow-soft inline-block">
                  <span className="font-mono text-xs text-accent">{String(i + 1).padStart(2, "0")}</span>
                  <p className="mt-1 text-foreground">{m}</p>
                </div>
                <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-3 w-3 rounded-full bg-accent ring-4 ring-background"
                  style={{ left: i % 2 === 0 ? 'calc(100% + 1.25rem)' : '-1.25rem' }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
