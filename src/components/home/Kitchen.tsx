import { motion } from "framer-motion";
import { Link } from "react-router";
import { EASE_OUT, VIEWPORT } from "../../config/motion";
import { kitchenTiles } from "../../data/home";
import { Eyebrow, LineReveal, Reveal } from "../ui/Reveal";

export default function Kitchen() {
  return (
    <section id="cucina" className="bg-ink py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Eyebrow>La cucina</Eyebrow>
            <LineReveal
              className="mt-6 font-display text-[clamp(2.6rem,6vw,4.75rem)] font-light leading-[0.98] tracking-[-0.015em]"
              lines={["Il burger nasce", <em key="m" className="italic text-ember">al banco accanto.</em>]}
            />
          </div>
          <Reveal className="self-end text-lg leading-relaxed text-cream/70 lg:col-span-5" delay={0.15}>
            La scottona la maciniamo noi, bacon e wurstel li facciamo in casa, il pane è artigianale. Quello che mangi a
            tavola lo puoi comprare al banco, a pochi passi.
          </Reveal>
        </div>

        <div className="mt-14 grid auto-rows-[20rem] gap-4 sm:grid-cols-2 lg:auto-rows-[17rem] lg:grid-cols-4">
          {kitchenTiles.map((tile, i) => (
            <motion.figure
              key={tile.title}
              className={`group relative overflow-hidden rounded-[1.75rem] bg-coal ${tile.span}`}
              initial={{ clipPath: "inset(12% 12% 12% 12% round 1.75rem)", opacity: 0 }}
              whileInView={{ clipPath: "inset(0% 0% 0% 0% round 1.75rem)", opacity: 1 }}
              viewport={VIEWPORT}
              transition={{ duration: 1.1, delay: (i % 4) * 0.08, ease: EASE_OUT }}
            >
              <img
                src={tile.image}
                alt={tile.title}
                loading="lazy"
                className="absolute inset-0 size-full object-cover transition-transform duration-700 ease-out-strong [@media(hover:hover)]:group-hover:scale-[1.05]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent" />
              <figcaption className="absolute inset-x-0 bottom-0 p-6">
                <h3 className="font-display text-2xl text-cream sm:text-3xl">{tile.title}</h3>
                <p className="mt-1 max-w-sm text-sm leading-relaxed text-cream/75">{tile.text}</p>
              </figcaption>
            </motion.figure>
          ))}
        </div>

        <Reveal className="mt-4">
          <Link
            to="/menu"
            className="group relative flex items-center justify-between gap-6 overflow-hidden rounded-[1.75rem] border border-cream/15 px-6 py-8 sm:px-10 sm:py-10"
          >
            <span
              aria-hidden
              className="absolute inset-0 bg-ember transition-[clip-path] duration-500 ease-out-strong [clip-path:inset(0_100%_0_0)] group-hover:[clip-path:inset(0_0_0_0)] group-focus-visible:[clip-path:inset(0_0_0_0)]"
            />
            <span className="relative">
              <span className="block text-xs font-semibold uppercase tracking-[0.28em] text-brass transition-colors duration-300 group-hover:text-cream/80">
                Burger, griglia, crudi, taglieri, fritti
              </span>
              <span className="mt-2 block font-display text-4xl font-light text-cream sm:text-6xl">
                Sfoglia il menu <em className="italic">completo</em>
              </span>
            </span>
            <span className="relative grid size-14 shrink-0 place-items-center rounded-full bg-cream text-2xl text-ink transition-transform duration-500 ease-out-strong group-hover:rotate-45 sm:size-20 sm:text-3xl">
              <i className="ri-arrow-right-up-line" aria-hidden />
            </span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
