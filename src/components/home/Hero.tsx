import { motion, useMotionValue, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router";
import { EASE_OUT } from "../../config/motion";
import { site } from "../../config/site";
import { useOpenStatus } from "../../hooks/useOpenStatus";
import { useEntryDelay } from "../../lib/entryDelay";
import { LineReveal } from "../ui/Reveal";
import Stars from "../ui/Stars";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const status = useOpenStatus();
  const d = useEntryDelay();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "-18%"]);
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  // Inclinazione decorativa della card, solo con puntatore fine.
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const rotateY = useSpring(useTransform(px, [-0.5, 0.5], [-9, 9]), { stiffness: 120, damping: 18 });
  const rotateX = useSpring(useTransform(py, [-0.5, 0.5], [7, -7]), { stiffness: 120, damping: 18 });

  const onPointerMove = (e: React.PointerEvent) => {
    if (e.pointerType !== "mouse") return;
    const r = e.currentTarget.getBoundingClientRect();
    px.set((e.clientX - r.left) / r.width - 0.5);
    py.set((e.clientY - r.top) / r.height - 0.5);
  };

  return (
    <section
      ref={ref}
      onPointerMove={onPointerMove}
      onPointerLeave={() => {
        px.set(0);
        py.set(0);
      }}
      className="relative isolate flex min-h-svh overflow-hidden bg-ink"
    >
      <motion.div className="absolute inset-0 -z-10" style={{ y: imageY }}>
        <motion.img
          src="/images/hero-bistecca.webp"
          alt="Bistecca alla griglia tagliata, cottura al sangue"
          className="size-full object-cover opacity-70"
          initial={{ transform: "scale(1.18)", opacity: 0 }}
          animate={{ transform: "scale(1.04)", opacity: 0.7 }}
          transition={{ duration: 2.2, delay: d, ease: EASE_OUT }}
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/75 to-ink/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/60" />
      </motion.div>

      <motion.div
        style={{ y: contentY, opacity: fade }}
        className="mx-auto flex w-full max-w-7xl flex-col justify-end px-5 pb-10 pt-32 sm:px-8 lg:pb-14"
      >
        <motion.p
          className="mb-8 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-brass"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: d + 0.2 }}
        >
          <span className="h-px w-10 bg-brass/60" />
          Macelleria · Salumi · Cucina · Isernia
        </motion.p>

        <LineReveal
          as="h1"
          trigger="mount"
          delay={d + 0.25}
          className="max-w-5xl font-display text-[clamp(3.4rem,11vw,9.5rem)] font-light leading-[0.92] tracking-[-0.02em] text-cream"
          lines={[
            "La carne",
            <>
              di chi la <em className="font-normal italic text-ember">conosce</em>.
            </>,
          ]}
        />

        <motion.div
          className="mt-8 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between"
          initial={{ opacity: 0, transform: "translateY(20px)" }}
          animate={{ opacity: 1, transform: "translateY(0px)" }}
          transition={{ duration: 1, delay: d + 0.75, ease: EASE_OUT }}
        >
          <p className="max-w-xl text-lg leading-relaxed text-cream/80 sm:text-xl">
            Tre generazioni di norcini, dal 1965. Al banco i salumi che stagioniamo noi, in cucina burger di
            scottona locale, bistecche alla griglia e una friggitoria fatta in casa.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/menu"
              className="group inline-flex items-center gap-3 rounded-full bg-ember py-2 pl-6 pr-2 text-base font-semibold text-cream transition-[transform,background-color] duration-150 hover:bg-ember-deep active:scale-[0.97]"
            >
              Scopri il menu
              <span className="grid size-10 place-items-center rounded-full bg-cream text-ink transition-transform duration-300 ease-out-strong group-hover:rotate-45">
                <i className="ri-arrow-right-up-line text-lg" aria-hidden />
              </span>
            </Link>
            <a
              href={site.phone.href}
              className="inline-flex items-center gap-2 rounded-full border border-cream/25 px-6 py-3.5 text-base font-medium text-cream backdrop-blur-sm transition-[transform,background-color] duration-150 hover:bg-cream/10 active:scale-[0.97]"
            >
              <i className="ri-phone-line" aria-hidden /> Prenota · {site.phone.label}
            </a>
          </div>
        </motion.div>

        <motion.dl
          className="mt-12 grid gap-5 border-t border-cream/15 pt-6 text-sm sm:grid-cols-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: d + 1.05 }}
        >
          <div className="flex items-center gap-3">
            <dt className="font-display text-3xl text-cream">{site.ratings.google.score}</dt>
            <dd className="text-cream/70">
              <Stars />
              <span>{site.ratings.google.count} recensioni Google</span>
            </dd>
          </div>
          <div className="flex items-center gap-3">
            <dt className="font-display text-3xl text-cream">{site.ratings.tripadvisor.score}</dt>
            <dd className="text-cream/70">
              <Stars />
              <span>Tripadvisor · {site.ratings.tripadvisor.rank}</span>
            </dd>
          </div>
          <div className="flex items-center gap-3 sm:justify-end">
            <span className={`relative flex size-2.5 rounded-full ${status.open ? "bg-emerald-400" : "bg-stone"}`}>
              {status.open && <span className="absolute inset-0 animate-ping rounded-full bg-emerald-400/70 motion-reduce:hidden" />}
            </span>
            <span className="text-cream/80">{status.label}</span>
          </div>
        </motion.dl>
      </motion.div>

      {/* Card decorativa del burger firma */}
      <motion.figure
        className="absolute right-8 top-32 hidden w-64 [perspective:900px] xl:block 2xl:right-[max(2rem,calc((100vw-80rem)/2))]"
        initial={{ opacity: 0, transform: "translateY(40px)" }}
        animate={{ opacity: 1, transform: "translateY(0px)" }}
        transition={{ duration: 1.2, delay: d + 0.9, ease: EASE_OUT }}
      >
        <motion.div style={{ rotateX, rotateY }} className="overflow-hidden rounded-3xl border border-cream/15 bg-coal shadow-2xl shadow-black/60">
          <img src="/images/burger-marios.webp" alt="Il burger Mario's" className="aspect-[4/5] w-full object-cover" />
          <figcaption className="flex items-center justify-between gap-3 p-4">
            <span>
              <span className="block font-display text-xl text-cream">Mario's</span>
              <span className="text-xs text-stone">Il burger firma dello chef</span>
            </span>
            <i className="ri-fire-line text-xl text-ember" aria-hidden />
          </figcaption>
        </motion.div>
      </motion.figure>
    </section>
  );
}
