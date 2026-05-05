import { motion } from "framer-motion";
import { Section } from "./Section";
import { Brain, Code2, Target } from "lucide-react";

const items = [
  { icon: Brain, title: "AI & Machine Learning", text: "Exploring NLP, deep learning, and applied AI through hands-on projects." },
  { icon: Code2, title: "Full-Stack Development", text: "Comfortable across the stack — Next.js, TypeScript, Firebase, and Python backends." },
  { icon: Target, title: "Real-World Impact", text: "Drawn to problems where technology makes everyday life measurably better." },
];

export function About() {
  return (
    <Section id="about" eyebrow="About" title="A student-builder shipping ideas into the real world.">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div className="space-y-5 text-muted-foreground leading-relaxed text-lg">
          <p>
            I'm a third-year Computer Science student specializing in Artificial Intelligence
            and Machine Learning at Kalasalingam Academy of Research and Education.
          </p>
          <p>
            My curiosity lives at the intersection of intelligent systems and useful products.
            Whether it's career guidance powered by AI or a smart election assistant, I love
            turning ideas into things people can actually use.
          </p>
          <p>
            Currently sharpening my skills in advanced AI, deep learning, and modern
            full-stack engineering — one project at a time.
          </p>
        </div>

        <div className="grid gap-4">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="rounded-2xl border border-border bg-card p-5 shadow-soft hover:shadow-elevated transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-xl bg-accent/10 text-accent grid place-items-center shrink-0">
                  <it.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-display font-semibold mb-1">{it.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{it.text}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
