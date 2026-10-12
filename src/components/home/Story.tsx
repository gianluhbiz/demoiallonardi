import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { stats } from "../../data/home";
import CountUp from "../ui/CountUp";
import Marquee from "../ui/Marquee";
import { Eyebrow, LineReveal, Reveal } from "../ui/Reveal";
import { marqueeItems } from "../../data/home";

export function MarqueeBand() {
  return (
    <div className="border-y border-ember-deep bg-ember py-5 text-cream">
      <Marquee>
        {marqueeItems.map((item) => (
          <span key={item} className="flex items-center gap-8 pr-8 font-display text-2xl italic sm:text-3xl">
            {item}
            <i className="ri-fire-line text-lg not-italic text-cream/60" aria-hidden />
          </span>
        ))}
      </Marquee>
    </div>
  );
}

export default function Story() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const bigY = useTransform(scrollYProgress, [0, 1], ["8%", "-8%"]);
  const smallY = useTransform(scrollYProgress, [0, 1], ["30%", "-30%"]);
  const rotate = useTransform(scrollYProgress, [0, 1], [-40, 140]);

  return (
    <section id="storia" className="relative overflow-x-clip bg-paper py-24 text-ink sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-16 px-5 sm:px-8 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-5 lg:pt-10">
          <Eyebrow tone="dark">La storia</Eyebrow>
          <LineReveal
            className="mt-6 font-display text-[clamp(2.6rem,6vw,4.75rem)] font-light leading-[0.98] tracking-[-0.015em]"
            lines={["Tutto parte", "da un paese", <em key="m" className="italic text-ember-deep">di montagna.</em>]}
          />
          <Reveal className="mt-10 space-y-5 text-lg leading-relaxed text-umber" delay={0.1}>
            <p>
              Nel 1965 la famiglia Iallonardi apre una norcineria a Cerro al Volturno, nell'Alta Valle del Volturno.
              Il microclima di quella valle è ancora oggi il primo ingrediente dei nostri salumi.
            </p>
            <p>
              Il laboratorio adesso è a Isernia e le attrezzature sono moderne. Le ricette sono rimaste quelle,
              ognuna con il suo segreto, passate di generazione in generazione.
            </p>
            <p className="text-ink">
              Accanto al banco della macelleria è nata poi la cucina: Mario griglia, frigge e prepara i burger con la
              stessa carne che vendiamo.
            </p>
          </Reveal>
        </div>

        <div ref={ref} className="relative lg:col-span-7">
          <motion.div style={{ y: bigY }} className="overflow-hidden rounded-[2rem]">
            <img
              src="/images/salumi-tavola.webp"
              alt="Salumi Iallonardi su tagliere con pomodorini e peperoncino"
              className="aspect-[4/5] w-full object-cover sm:aspect-[5/4]"
              loading="lazy"
            />
          </motion.div>
          <motion.div
            style={{ y: smallY }}
            className="absolute -bottom-10 -left-4 w-[46%] overflow-hidden rounded-[1.5rem] border-[6px] border-paper shadow-2xl shadow-ink/30 sm:-left-10"
          >
            <img
              src="/images/interni-lavagna.webp"
              alt="Il locale di Via Patriarca con la lavagna delle birre"
              className="aspect-[3/4] w-full object-cover"
              loading="lazy"
            />
          </motion.div>
          <motion.div
            style={{ rotate }}
            className="absolute -right-3 -top-10 grid size-32 place-items-center rounded-full bg-ember text-cream shadow-xl sm:-right-8 sm:size-40"
            aria-hidden
          >
            <svg viewBox="0 0 100 100" className="absolute inset-0 size-full">
              <defs>
                <path id="seal" d="M50,50 m-37,0 a37,37 0 1,1 74,0 a37,37 0 1,1 -74,0" />
              </defs>
              <text className="fill-cream text-[9.5px] font-semibold uppercase tracking-[0.32em]">
                <textPath href="#seal">Sapori autentici · Dal 1965 ·</textPath>
              </text>
            </svg>
            <span className="font-display text-3xl italic sm:text-4xl">65</span>
          </motion.div>
        </div>
      </div>

      <div className="mx-auto mt-28 max-w-7xl px-5 sm:px-8">
        <dl className="grid grid-cols-2 border-t border-ink/15 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal
              key={s.label}
              delay={i * 0.08}
              className={`border-ink/15 py-8 pr-6 ${i % 2 === 1 ? "border-l pl-6" : ""} lg:pl-6 ${i > 0 ? "lg:border-l" : "lg:pl-0"}`}
            >
              <dt className="font-display text-5xl font-light text-ink sm:text-6xl">
                <CountUp value={s.value} from={s.format === "year" ? 1900 : 0} />
              </dt>
              <dd className="mt-3 max-w-[16rem] text-sm leading-snug text-umber">{s.label}</dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
