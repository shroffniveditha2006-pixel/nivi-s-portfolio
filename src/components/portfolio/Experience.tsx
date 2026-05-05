import { motion } from "framer-motion";
import { Section } from "./Section";
import { Briefcase, Users } from "lucide-react";

export function Experience() {
  return (
    <Section id="experience" eyebrow="Experience" title="Where I've been learning by doing.">
      <div className="grid md:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl border border-border bg-card p-7 shadow-soft hover:shadow-elevated transition-shadow"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="h-10 w-10 rounded-xl bg-accent/10 grid place-items-center">
              <Briefcase className="h-5 w-5 text-accent" />
            </div>
            <span className="font-mono text-xs text-muted-foreground uppercase tracking-wider">Internship</span>
          </div>
          <h3 className="font-display text-xl font-semibold">AI Intern</h3>
          <p className="text-accent font-mono text-sm mt-1">Launched Global · Remote</p>
          <ul className="mt-5 space-y-2 text-muted-foreground">
            <li className="flex gap-3"><span className="text-accent">→</span> Worked on Python-based AI applications</li>
            <li className="flex gap-3"><span className="text-accent">→</span> Assisted in data preprocessing and model testing</li>
            <li className="flex gap-3"><span className="text-accent">→</span> Implemented basic recommendation logic</li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="rounded-2xl border border-border bg-card p-7 shadow-soft hover:shadow-elevated transition-shadow"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="h-10 w-10 rounded-xl bg-accent/10 grid place-items-center">
              <Users className="h-5 w-5 text-accent" />
            </div>
            <span className="font-mono text-xs text-muted-foreground uppercase tracking-wider">Position of Responsibility</span>
          </div>
          <h3 className="font-display text-xl font-semibold">Core Member</h3>
          <p className="text-accent font-mono text-sm mt-1">IEEE SMC Club</p>
          <ul className="mt-5 space-y-2 text-muted-foreground">
            <li className="flex gap-3"><span className="text-accent">→</span> Organized technical events and workshops</li>
            <li className="flex gap-3"><span className="text-accent">→</span> Assisted in coordination across teams</li>
            <li className="flex gap-3"><span className="text-accent">→</span> Helped grow community engagement</li>
          </ul>
        </motion.div>
      </div>
    </Section>
  );
}
