import { useState } from "react";
import { motion } from "framer-motion";
import { z } from "zod";
import { Section } from "./Section";
import { Mail, Linkedin, Github, Send, CheckCircle2 } from "lucide-react";

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(80),
  email: z.string().trim().email("Invalid email").max(160),
  message: z.string().trim().min(5, "Please write a longer message").max(1000),
});

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = schema.safeParse(form);
    if (!result.success) {
      const errs: Record<string, string> = {};
      result.error.issues.forEach((i) => (errs[i.path[0] as string] = i.message));
      setErrors(errs);
      return;
    }
    setErrors({});
    setSent(true);
  };

  return (
    <Section id="contact" eyebrow="Contact" title="Let's Connect.">
      <div className="grid lg:grid-cols-5 gap-10">
        <div className="lg:col-span-2 space-y-6">
          <p className="text-lg text-muted-foreground leading-relaxed">
            Feel free to reach out for collaborations, opportunities, or just to connect.
            I'd love to hear from you!
          </p>

          <div className="space-y-3">
            <a
              href="mailto:shroffniveditha2006@gmail.com"
              className="flex items-center gap-4 rounded-xl border border-border bg-card p-4 hover:bg-muted transition-colors group cursor-pointer"
            >
              <div className="h-10 w-10 rounded-lg bg-accent/10 grid place-items-center">
                <Mail className="h-4 w-4 text-accent" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground font-mono">Email</div>
                <div className="text-sm font-medium group-hover:text-accent transition-colors">
                  shroffniveditha2006@gmail.com
                </div>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/s-niveditha-krishna-29b1ab383"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 rounded-xl border border-border bg-card p-4 hover:bg-muted transition-colors group cursor-pointer"
            >
              <div className="h-10 w-10 rounded-lg bg-accent/10 grid place-items-center">
                <Linkedin className="h-4 w-4 text-accent" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground font-mono">
                  LinkedIn
                </div>
                <div className="text-sm font-medium group-hover:text-accent transition-colors">
                  S Niveditha Krishna
                </div>
              </div>
            </a>

            <a
              href="https://github.com/shroffniveditha2006-pixel"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 rounded-xl border border-border bg-card p-4 hover:bg-muted transition-colors group cursor-pointer"
            >
              <div className="h-10 w-10 rounded-lg bg-accent/10 grid place-items-center">
                <Github className="h-4 w-4 text-accent" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground font-mono">
                  GitHub
                </div>
                <div className="text-sm font-medium group-hover:text-accent transition-colors">
                  @shroffniveditha2006-pixel
                </div>
              </div>
            </a>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-3 rounded-3xl border border-border bg-card p-7 md:p-10 shadow-elevated"
        >
          {sent ? (
            <div className="flex flex-col items-center justify-center text-center py-14">
              <div className="h-14 w-14 rounded-full bg-accent/15 grid place-items-center mb-4">
                <CheckCircle2 className="h-7 w-7 text-accent" />
              </div>
              <h3 className="font-display text-2xl font-semibold">
                Message sent!
              </h3>
              <p className="text-muted-foreground mt-2 max-w-sm">
                Thanks for reaching out. I'll get back to you as soon as I can.
              </p>
              <button
                onClick={() => {
                  setSent(false);
                  setForm({ name: "", email: "", message: "" });
                }}
                className="mt-6 text-sm text-accent hover:underline"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="space-y-5">
              <div>
                <label className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                  Name
                </label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) =>
                    setForm({ ...form, name: e.target.value })
                  }
                  maxLength={80}
                  className="mt-2 w-full rounded-lg border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring transition-all"
                  placeholder="Your name"
                />
                {errors.name && (
                  <p className="text-xs text-destructive mt-1">
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <label className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                  Email
                </label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) =>
                    setForm({ ...form, email: e.target.value })
                  }
                  maxLength={160}
                  className="mt-2 w-full rounded-lg border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring transition-all"
                  placeholder="you@example.com"
                />
                {errors.email && (
                  <p className="text-xs text-destructive mt-1">
                    {errors.email}
                  </p>
                )}
              </div>

              <div>
                <label className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                  Message
                </label>
                <textarea
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  maxLength={1000}
                  rows={5}
                  className="mt-2 w-full rounded-lg border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring transition-all resize-none"
                  placeholder="What's on your mind?"
                />
                {errors.message && (
                  <p className="text-xs text-destructive mt-1">
                    {errors.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="group inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm font-medium shadow-elevated hover:shadow-glow transition-all hover:-translate-y-0.5"
              >
                Send Message
                <Send className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </Section>
  );
}