import { motion } from "framer-motion";
import { Section } from "./Section";
import { GraduationCap } from "lucide-react";

const edu = [
  {
    school: "Kalasalingam Academy of Research and Education",
    degree: "B.Tech — Computer Science (AIML)",
    period: "2023 — 2027",
    score: "CGPA: 8.95",
  },
  {
    school: "SR Educational Academy, Anantapur",
    degree: "Class XII — Higher Secondary",
    period: "2022 — 2023",
    score: "Score: 98.6%",
  },
  {
    school: "AP Model High School, Rayadurg",
    degree: "Class X — Secondary",
    period: "2020 — 2021",
    score: "Score: 98%",
  },
];

export function Education() {
  return (
    <Section id="education" eyebrow="Education" title="A consistent academic journey.">
      <div className="relative pl-8 md:pl-12">
        <div className="absolute left-3 md:left-5 top-2 bottom-2 w-px bg-border" />
        <div className="space-y-10">
          {edu.map((e, i) => (
            <motion.div
              key={e.school}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative"
            >
              <div className="absolute -left-8 md:-left-12 top-1 h-7 w-7 rounded-full bg-surface-elevated border border-border grid place-items-center shadow-soft">
                <GraduationCap className="h-3.5 w-3.5 text-accent" />
              </div>
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-display text-xl font-semibold">{e.degree}</h3>
                <span className="font-mono text-xs text-muted-foreground">{e.period}</span>
              </div>
              <p className="text-muted-foreground mt-1">{e.school}</p>
              <p className="text-sm text-accent font-mono mt-2">{e.score}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
