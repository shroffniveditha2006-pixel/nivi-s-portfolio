import { motion } from "framer-motion";
import { Section } from "./Section";
import { Trophy, Medal, Lightbulb, Award } from "lucide-react";

const achievements = [
  { icon: Trophy, title: "Winner — Smart India Hackathon 2025", level: "National Level", color: "from-amber-500/20 to-amber-500/5" },
  { icon: Medal, title: "Gold Medal — Best Performer of the Year", level: "College Level", color: "from-yellow-500/20 to-yellow-500/5" },
  { icon: Lightbulb, title: "Best Idea Presentation", level: "National Symposium", color: "from-sky-500/20 to-sky-500/5" },
  { icon: Award, title: "4th Place — College Hackathon", level: "Institutional", color: "from-rose-500/20 to-rose-500/5" },
];

export function Achievements() {
  return (
    <Section id="achievements" eyebrow="Achievements" title="Recognition along the way.">
      <div className="grid sm:grid-cols-2 gap-4">
        {achievements.map((a, i) => (
          <motion.div
            key={a.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
            className={`group relative overflow-hidden rounded-2xl border border-border bg-gradient-to-br ${a.color} p-6 hover:shadow-elevated transition-all hover:-translate-y-1`}
          >
            <div className="relative z-10 flex items-start gap-4">
              <div className="h-12 w-12 rounded-xl bg-surface-elevated grid place-items-center shadow-soft">
                <a.icon className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h3 className="font-display font-semibold text-lg leading-snug">{a.title}</h3>
                <p className="text-sm text-muted-foreground mt-1 font-mono">{a.level}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
