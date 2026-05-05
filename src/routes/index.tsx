import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Achievements } from "@/components/portfolio/Achievements";
import { Education } from "@/components/portfolio/Education";
import { Projects } from "@/components/portfolio/Projects";
import { Experience } from "@/components/portfolio/Experience";
import { Skills } from "@/components/portfolio/Skills";
import { Journey } from "@/components/portfolio/Journey";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "S Niveditha Krishna — CSE (AIML) Student & SIH 2025 Winner" },
      {
        name: "description",
        content:
          "Portfolio of S Niveditha Krishna — CSE (AIML) student, Smart India Hackathon 2025 winner, building AI-powered applications and full-stack products.",
      },
      { property: "og:title", content: "S Niveditha Krishna — Developer Portfolio" },
      {
        property: "og:description",
        content: "Building AI-powered applications and solving real-world problems.",
      },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <About />
        <Achievements />
        <Education />
        <Projects />
        <Experience />
        <Skills />
        <Journey />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
