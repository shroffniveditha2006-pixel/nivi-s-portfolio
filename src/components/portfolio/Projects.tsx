import { motion } from "framer-motion";
import { Section } from "./Section";
import { ExternalLink, Github, Sparkles } from "lucide-react";

const projects = [
  {
    name: "EduPath Navigator",
    tagline: "AI Career Guidance Platform · SIH 2025 Winning Project",
    description:
      "An AI-powered platform that helps students make confident career decisions through personalized recommendations, career mapping, and rich dashboards.",
    features: ["AI recommendations", "Career mapping", "Student & mentor dashboards"],
    tech: ["Next.js", "TypeScript", "Firebase", "Google Genkit AI"],
    role: "Frontend development & backend integration",
    live: "https://sih-final-imps.vercel.app/en",
    github: "https://github.com/shroffniveditha2006-pixel/EdupathNavigator",
    featured: true,
  },
  {
    name: "VoteGuide",
    tagline: "Smart Election Assistant",
    description:
      "An AI-based platform that simplifies the voting process — eligibility checks, step-by-step guidance, and an accessibility-first UI.",
    features: ["Eligibility checker", "Step-by-step guide", "Accessibility-first UI"],
    tech: ["React", "TypeScript", "Tailwind CSS", "Firebase"],
    live: "https://voteguide-two.vercel.app",
    github: "https://github.com/shroffniveditha2006-pixel/Voteguide",
  },
  {
    name: "AI Resume Analyzer",
    tagline: "NLP-based resume analysis · In Development",
    description:
      "A resume analyzer that uses NLP to score resumes, surface insights, and suggest improvements tailored to job descriptions.",
    features: ["NLP-driven scoring", "Insight extraction", "JD matching"],
    tech: ["Python", "Streamlit", "spaCy"],
    ongoing: true,
  },
];

export function Projects() {
  return (
    <Section id="projects" eyebrow="Projects" title="Things I've built — and things I'm building.">
      <div className="grid gap-6">
        {projects.map((p, i) => (
          <motion.article
            key={p.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="group relative overflow-hidden rounded-3xl border border-border bg-card p-7 md:p-9 shadow-soft hover:shadow-elevated transition-all hover:-translate-y-1"
          >
            {p.featured && (
              <div className="absolute top-7 right-7 inline-flex items-center gap-1.5 rounded-full bg-accent/10 text-accent px-3 py-1 text-xs font-mono">
                <Sparkles className="h-3 w-3" />
                Featured
              </div>
            )}

            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <h3 className="font-display text-2xl md:text-3xl font-semibold">{p.name}</h3>
                <p className="text-sm text-accent font-mono mt-1">{p.tagline}</p>
                <p className="text-muted-foreground mt-4 leading-relaxed">{p.description}</p>

                <ul className="mt-5 grid sm:grid-cols-2 gap-x-6 gap-y-2">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm">
                      <span className="h-1 w-1 rounded-full bg-accent" />
                      <span className="text-muted-foreground">{f}</span>
                    </li>
                  ))}
                </ul>

                {p.role && (
                  <p className="mt-5 text-sm text-muted-foreground">
                    <span className="font-medium text-foreground">Contribution: </span>
                    {p.role}
                  </p>
                )}
              </div>

              <div className="flex flex-col gap-4 md:items-end">
                <div className="flex flex-wrap gap-2 md:justify-end">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-muted text-muted-foreground px-3 py-1 text-xs font-mono"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-2 md:mt-auto">
                  {p.live && (
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full bg-primary text-primary-foreground px-4 py-2 text-sm font-medium hover:opacity-90 transition-opacity"
                    >
                      Live <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  )}
                  {p.github && (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full border border-border px-4 py-2 text-sm font-medium hover:bg-muted transition-colors"
                    >
                      <Github className="h-3.5 w-3.5" /> Code
                    </a>
                  )}
                  {p.ongoing && (
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-dashed border-border px-4 py-2 text-sm text-muted-foreground">
                      In Development
                    </span>
                  )}
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
