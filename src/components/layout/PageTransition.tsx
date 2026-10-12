import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { EASE_IN_OUT, EASE_OUT } from "../../config/motion";
import { EntryDelayContext } from "../../lib/entryDelay";

type Props = { label: string; animateIn: boolean; children: ReactNode };

/**
 * Sipario tra le pagine: in uscita un pannello sale dal basso e copre la pagina,
 * in entrata mostra il nome della nuova pagina e prosegue verso l'alto scoprendola.
 */
export default function PageTransition({ label, animateIn, children }: Props) {
  const reduce = useReducedMotion();

  if (reduce) {
    return (
      <motion.div
        initial={animateIn ? { opacity: 0 } : false}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
      >
        <EntryDelayContext value={0}>{children}</EntryDelayContext>
      </motion.div>
    );
  }

  return (
    <>
      <motion.div
        initial={animateIn ? { transform: "translateY(64px)" } : false}
        animate={{
          transform: "translateY(0px)",
          // "none" evita che il transform resti come containing block per sticky/fixed
          transitionEnd: { transform: "none" },
          transition: { duration: 0.9, delay: 0.45, ease: EASE_OUT },
        }}
        exit={{ transform: "translateY(-48px)", opacity: 0.4, transition: { duration: 0.55, ease: EASE_IN_OUT } }}
      >
        <EntryDelayContext value={animateIn ? 0.75 : 0}>{children}</EntryDelayContext>
      </motion.div>

      {/* Copertura in uscita: il pannello sale dal basso */}
      <motion.div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-[70] bg-paper"
        initial={{ transform: "translateY(100%)" }}
        animate={{ transform: "translateY(100%)" }}
        exit={{ transform: "translateY(0%)" }}
        transition={{ duration: 0.55, ease: EASE_IN_OUT }}
      />

      {/* Apertura in entrata: lo stesso pannello continua a salire e porta via il titolo */}
      {animateIn && (
        <motion.div
          aria-hidden
          className="pointer-events-none fixed inset-0 z-[70] flex items-center justify-center bg-paper"
          initial={{ transform: "translateY(0%)" }}
          animate={{ transform: "translateY(-100%)" }}
          transition={{ duration: 0.75, delay: 0.5, ease: EASE_IN_OUT }}
        >
          <motion.div
            className="flex flex-col items-center gap-4"
            initial={{ opacity: 0, transform: "translateY(18px)" }}
            animate={{ opacity: 1, transform: "translateY(0px)" }}
            transition={{ duration: 0.45, ease: EASE_OUT }}
          >
            <img src="/images/logo.png" alt="" className="h-16 w-auto" />
            <span className="font-display text-4xl font-light italic text-ink sm:text-5xl">{label}</span>
          </motion.div>
        </motion.div>
      )}
    </>
  );
}
