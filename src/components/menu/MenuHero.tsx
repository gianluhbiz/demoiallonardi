import { motion } from "framer-motion";
import { Link } from "react-router";
import { EASE_OUT } from "../../config/motion";
import { useEntryDelay } from "../../lib/entryDelay";
import { LineReveal } from "../ui/Reveal";

const fan = [
  { src: "/images/tagliere.webp", alt: "Tagliere di salumi e formaggi", rest: "-rotate-[9deg] -translate-x-[42%]", spread: "group-hover:-translate-x-[58%] group-hover:-rotate-[13deg]" },
  { src: "/images/bistecca-servita.webp", alt: "Bistecca servita sulla pietra", rest: "rotate-[8deg] translate-x-[42%]", spread: "group-hover:translate-x-[58%] group-hover:rotate-[12deg]" },
  { src: "/images/burger-don-raffae.webp", alt: "Burger Don Raffaè con bufala e basilico", rest: "rotate-0", spread: "group-hover:-translate-y-3" },
];

const chips = ["Scottona locale", "Bacon e wurstel fatti da noi", "Birra molisana alla spina"];

export default function MenuHero() {
  const d = useEntryDelay();

  return (
    <section className="relative overflow-hidden bg-ink pb-20 pt-32 sm:pt-40">
      <div className="pointer-events-none absolute -right-40 top-10 size-[36rem] rounded-full bg-ember/15 blur-3xl" aria-hidden />
      <div className="mx-auto grid max-w-7xl items-end gap-16 px-5 sm:px-8 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: d + 0.1 }}
          >
            <Link
              to="/"
              className="group mb-10 inline-flex items-center gap-2 text-sm text-cream/60 transition-colors hover:text-cream"
            >
              <i className="ri-arrow-left-line transition-transform duration-300 ease-out-strong group-hover:-translate-x-1" aria-hidden />
              Torna alla home
            </Link>
          </motion.div>

          <LineReveal
            as="h1"
            trigger="mount"
            delay={d + 0.15}
            className="font-display text-[clamp(3.6rem,12vw,10rem)] font-light leading-[0.9] tracking-[-0.02em] text-cream"
            lines={["Il nostro", <em key="m" className="italic text-ember">menu.</em>]}
          />

          <motion.div
            initial={{ opacity: 0, transform: "translateY(16px)" }}
            animate={{ opacity: 1, transform: "translateY(0px)" }}
            transition={{ duration: 0.9, delay: d + 0.55, ease: EASE_OUT }}
          >
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-cream/75">
              Burger di scottona, griglia, crudi, taglieri e friggitoria. La carne arriva dalla nostra macelleria, i
              salumi dal nostro laboratorio.
            </p>
            <ul className="mt-8 flex flex-wrap gap-2">
              {chips.map((c) => (
                <li key={c} className="rounded-full border border-cream/15 px-4 py-2 text-sm text-cream/80">
                  {c}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <div className="group relative mx-auto h-[22rem] w-full max-w-sm sm:h-[26rem] lg:col-span-5">
          {fan.map((img, i) => (
            <motion.div
              key={img.src}
              className="absolute inset-x-[14%] bottom-0 top-0"
              initial={{ opacity: 0, transform: "translateY(80px)" }}
              animate={{ opacity: 1, transform: "translateY(0px)" }}
              transition={{ type: "spring", duration: 1.1, bounce: 0.2, delay: d + 0.35 + i * 0.12 }}
            >
              <img
                src={img.src}
                alt={img.alt}
                className={`size-full rounded-[1.75rem] border border-cream/10 object-cover shadow-2xl shadow-black/50 transition-[translate,rotate] duration-500 ease-out-strong ${img.rest} ${img.spread}`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
