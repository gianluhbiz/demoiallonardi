import { AnimatePresence, motion, useInView, useScroll } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { EASE_OUT } from "../../config/motion";
import { processSteps } from "../../data/home";
import { Eyebrow, LineReveal, Reveal } from "../ui/Reveal";

type Step = (typeof processSteps)[number];

function StepBlock({ step, index, onActive }: { step: Step; index: number; onActive: (i: number) => void }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { margin: "-45% 0px -45% 0px" });

  useEffect(() => {
    if (inView) onActive(index);
  }, [inView, index, onActive]);

  return (
    <div ref={ref} className="flex flex-col justify-center py-10 lg:min-h-[62vh] lg:py-0">
      <div
        className={`transition-opacity duration-500 ${inView ? "lg:opacity-100" : "lg:opacity-35"}`}
      >
        <h3 className="font-display text-4xl font-light text-cream sm:text-5xl">{step.title}</h3>
        <p className="mt-4 max-w-md text-lg leading-relaxed text-cream/70">{step.text}</p>
      </div>
      <img
        src={step.image}
        alt={step.alt}
        loading="lazy"
        className="mt-6 aspect-[4/3] w-full rounded-2xl object-cover lg:hidden"
      />
    </div>
  );
}

export default function Process() {
  const [active, setActive] = useState(0);
  const listRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: listRef, offset: ["start 60%", "end 60%"] });
  const step = processSteps[active];

  return (
    <section id="laboratorio" className="relative bg-ink py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Eyebrow>Il laboratorio</Eyebrow>
            <LineReveal
              className="mt-6 font-display text-[clamp(2.6rem,6vw,4.75rem)] font-light leading-[0.98] tracking-[-0.015em]"
              lines={["Cinque passaggi,", <em key="m" className="italic text-brass">quasi tutti a mano.</em>]}
            />
          </div>
          <Reveal className="self-end text-lg leading-relaxed text-cream/70 lg:col-span-5" delay={0.15}>
            Produciamo ogni settimana, tutto in casa, con maiali dei macelli della zona. Le macchine servono per
            macinare e insaccare. Disossatura, mondatura e taglio restano lavoro di coltello.
          </Reveal>
        </div>

        <div className="mt-16 grid gap-12 lg:mt-8 lg:grid-cols-2 lg:gap-20">
          <div ref={listRef} className="relative lg:pl-10">
            <div className="absolute bottom-0 left-0 top-0 hidden w-px bg-cream/10 lg:block">
              <motion.div className="h-full origin-top bg-brass" style={{ scaleY: scrollYProgress }} />
            </div>
            {processSteps.map((s, i) => (
              <StepBlock key={s.id} step={s} index={i} onActive={setActive} />
            ))}
          </div>

          <div className="hidden lg:block">
            <div className="sticky top-28 h-[calc(100svh-10rem)] overflow-hidden rounded-[2rem] bg-coal">
              <AnimatePresence initial={false}>
                <motion.img
                  key={step.id}
                  src={step.image}
                  alt={step.alt}
                  className="absolute inset-0 size-full object-cover"
                  initial={{ opacity: 0, transform: "scale(1.08)" }}
                  animate={{ opacity: 1, transform: "scale(1)" }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.9, ease: EASE_OUT }}
                />
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-8">
                <AnimatePresence mode="wait" initial={false}>
                  <motion.p
                    key={step.id}
                    className="font-display text-3xl italic text-cream"
                    initial={{ opacity: 0, transform: "translateY(12px)" }}
                    animate={{ opacity: 1, transform: "translateY(0px)" }}
                    exit={{ opacity: 0, transform: "translateY(-8px)" }}
                    transition={{ duration: 0.35, ease: EASE_OUT }}
                  >
                    {step.title}
                  </motion.p>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
