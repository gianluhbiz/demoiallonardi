import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { EASE_OUT, VIEWPORT } from "../../config/motion";

type RevealProps = { children: ReactNode; className?: string; delay?: number; distance?: number };

/** Dissolvenza dal basso quando l'elemento entra nel viewport. */
export function Reveal({ children, className, delay = 0, distance = 28 }: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, transform: `translateY(${distance}px)` }}
      whileInView={{ opacity: 1, transform: "translateY(0px)" }}
      viewport={VIEWPORT}
      transition={{ duration: 0.9, delay, ease: EASE_OUT }}
    >
      {children}
    </motion.div>
  );
}

type LinesProps = {
  lines: ReactNode[];
  className?: string;
  as?: "h1" | "h2" | "p";
  delay?: number;
  /** "mount" per l'hero, "view" per le sezioni */
  trigger?: "mount" | "view";
};

/** Titolo che sale riga per riga da dietro una maschera. */
export function LineReveal({ lines, className, as = "h2", delay = 0, trigger = "view" }: LinesProps) {
  const Tag = motion[as];
  const target = { transform: "translateY(0%)" };
  return (
    <Tag
      className={className}
      initial="hidden"
      {...(trigger === "mount" ? { animate: "shown" } : { whileInView: "shown", viewport: VIEWPORT })}
    >
      {lines.map((line, i) => (
        <span key={i} className="block overflow-hidden pb-[0.08em] -mb-[0.08em]">
          <motion.span
            className="block"
            variants={{ hidden: { transform: "translateY(105%)" }, shown: target }}
            transition={{ duration: 1, delay: delay + i * 0.09, ease: EASE_OUT }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}

export function Eyebrow({ children, tone = "light" }: { children: ReactNode; tone?: "light" | "dark" }) {
  return (
    <p
      className={`flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] ${
        tone === "light" ? "text-brass" : "text-ember-deep"
      }`}
    >
      <span className={`h-px w-10 ${tone === "light" ? "bg-brass/60" : "bg-ember-deep/50"}`} />
      {children}
    </p>
  );
}
