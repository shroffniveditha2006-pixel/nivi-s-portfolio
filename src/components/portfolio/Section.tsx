import { motion } from "framer-motion";
import { ReactNode } from "react";

export function Section({
  id,
  eyebrow,
  title,
  children,
  className = "",
}: {
  id?: string;
  eyebrow?: string;
  title?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`py-24 px-6 ${className}`}>
      <div className="max-w-6xl mx-auto">
        {(eyebrow || title) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="mb-14"
          >
            {eyebrow && (
              <div className="flex items-center gap-3 mb-3">
                <span className="h-px w-8 bg-accent" />
                <span className="font-mono text-xs uppercase tracking-widest text-accent">{eyebrow}</span>
              </div>
            )}
            {title && (
              <h2 className="font-display text-4xl md:text-5xl font-semibold text-balance max-w-2xl">
                {title}
              </h2>
            )}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
}
