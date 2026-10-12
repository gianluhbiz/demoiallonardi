import { motion } from "framer-motion";
import { useRef } from "react";
import { EASE_OUT, VIEWPORT } from "../../config/motion";
import { site } from "../../config/site";
import { products } from "../../data/home";
import { Eyebrow, LineReveal, Reveal } from "../ui/Reveal";

export default function Bottega() {
  const track = useRef<HTMLUListElement>(null);

  const scrollBy = (dir: 1 | -1) => {
    const el = track.current;
    if (!el) return;
    const card = el.querySelector("li");
    el.scrollBy({ left: dir * ((card?.clientWidth ?? 320) + 20), behavior: "smooth" });
  };

  return (
    <section id="bottega" className="overflow-hidden bg-coal py-24 sm:py-32">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 sm:px-8 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-3xl">
          <Eyebrow>La bottega</Eyebrow>
          <LineReveal
            className="mt-6 font-display text-[clamp(2.6rem,6vw,4.75rem)] font-light leading-[0.98] tracking-[-0.015em]"
            lines={["Salumi stagionati", <em key="m" className="italic text-brass">da noi, per te.</em>]}
          />
          <Reveal className="mt-6 max-w-xl text-lg leading-relaxed text-cream/70" delay={0.1}>
            Li trovi al banco e nel punto vendita di Via Belvedere. Affettati al momento, interi o sottovuoto per
            portarli a casa.
          </Reveal>
        </div>
        <div className="flex gap-3">
          {([-1, 1] as const).map((dir) => (
            <button
              key={dir}
              type="button"
              onClick={() => scrollBy(dir)}
              aria-label={dir === 1 ? "Prodotti successivi" : "Prodotti precedenti"}
              className="grid size-12 place-items-center rounded-full border border-cream/20 text-xl text-cream transition-[transform,background-color] duration-150 hover:bg-cream/10 active:scale-[0.95]"
            >
              <i className={dir === 1 ? "ri-arrow-right-line" : "ri-arrow-left-line"} aria-hidden />
            </button>
          ))}
        </div>
      </div>

      <ul
        ref={track}
        className="mt-14 flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth px-5 pb-4 [scrollbar-width:none] sm:px-8 xl:px-[max(2rem,calc((100vw-80rem)/2+2rem))] [&::-webkit-scrollbar]:hidden"
      >
        {products.map((p, i) => (
          <motion.li
            key={p.name}
            className="group w-[78vw] shrink-0 snap-start sm:w-[21rem]"
            initial={{ opacity: 0, transform: "translateY(40px)" }}
            whileInView={{ opacity: 1, transform: "translateY(0px)" }}
            viewport={VIEWPORT}
            transition={{ duration: 0.9, delay: Math.min(i, 4) * 0.07, ease: EASE_OUT }}
          >
            <div className="relative overflow-hidden rounded-[1.5rem] bg-char">
              <img
                src={p.image}
                alt={p.name}
                loading="lazy"
                className="aspect-[4/5] w-full object-cover transition-transform duration-700 ease-out-strong [@media(hover:hover)]:group-hover:scale-[1.05]"
              />
              <span className="absolute left-4 top-4 rounded-full bg-ink/70 px-3 py-1.5 text-xs font-semibold text-cream backdrop-blur-md">
                {p.aging}
              </span>
            </div>
            <h3 className="mt-5 font-display text-2xl text-cream">{p.name}</h3>
            <p className="mt-2 text-[0.95rem] leading-relaxed text-cream/65">{p.text}</p>
          </motion.li>
        ))}
      </ul>

      <div className="mx-auto mt-20 max-w-7xl px-5 sm:px-8">
        <Reveal className="grid overflow-hidden rounded-[2rem] bg-char lg:grid-cols-2">
          <div className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[30rem]">
            <img
              src="/images/banco.webp"
              alt="Il banco della macelleria con i preparati del giorno"
              loading="lazy"
              className="absolute inset-0 size-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-center gap-6 p-8 sm:p-12">
            <span className="text-xs font-semibold uppercase tracking-[0.28em] text-brass">Al banco della macelleria</span>
            <p className="font-display text-3xl font-light leading-tight text-cream sm:text-4xl">
              Tagli locali, italiani ed esteri, e preparati pronti da cuocere a casa.
            </p>
            <p className="text-cream/70">
              Ti diciamo noi quale pezzo prendere e come cuocerlo. Se preferisci mangiarlo subito, lo cuociamo noi in cucina.
            </p>
            <a
              href={site.phone.href}
              className="inline-flex w-fit items-center gap-2 rounded-full border border-cream/25 px-6 py-3 font-medium text-cream transition-[transform,background-color] duration-150 hover:bg-cream/10 active:scale-[0.97]"
            >
              <i className="ri-phone-line" aria-hidden /> Ordina al {site.phone.label}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
