import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router";
import { site } from "../../config/site";
import { LineReveal, Reveal } from "../ui/Reveal";

export default function FinalCta() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <section ref={ref} className="relative isolate overflow-hidden bg-ember-deep py-28 text-cream sm:py-40">
      <motion.img
        src="/images/salumi-rotoli.webp"
        alt=""
        aria-hidden
        loading="lazy"
        style={{ y }}
        className="absolute inset-0 -z-10 size-full scale-125 object-cover opacity-25 mix-blend-multiply"
      />
      <div className="mx-auto max-w-7xl px-5 text-center sm:px-8">
        <LineReveal
          className="font-display text-[clamp(3rem,10vw,8.5rem)] font-light leading-[0.92] tracking-[-0.02em]"
          lines={["Ci vediamo", <em key="m" className="italic">a tavola.</em>]}
        />
        <Reveal className="mx-auto mt-8 max-w-xl text-lg text-cream/85" delay={0.15}>
          Pranzo dal martedì al sabato, cena tutte le sere tranne il lunedì. Per un tavolo o un ordine da asporto basta
          una telefonata.
        </Reveal>
        <Reveal className="mt-10 flex flex-wrap justify-center gap-3" delay={0.25}>
          <a
            href={site.phone.href}
            className="inline-flex items-center gap-2 rounded-full bg-cream px-7 py-4 text-base font-semibold text-ink transition-[transform,background-color] duration-150 hover:bg-paper active:scale-[0.97]"
          >
            <i className="ri-phone-line" aria-hidden /> Chiama {site.phone.label}
          </a>
          <Link
            to="/menu"
            className="inline-flex items-center gap-2 rounded-full border border-cream/40 px-7 py-4 text-base font-medium text-cream transition-[transform,background-color] duration-150 hover:bg-cream/10 active:scale-[0.97]"
          >
            Il menu <i className="ri-arrow-right-up-line" aria-hidden />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
