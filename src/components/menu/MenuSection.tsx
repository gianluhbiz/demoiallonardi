import { motion } from "framer-motion";
import { EASE_OUT, VIEWPORT } from "../../config/motion";
import type { MenuCategory } from "../../data/menu";

type Props = { category: MenuCategory };

export default function MenuSection({ category }: Props) {
  return (
    <section id={category.id} aria-labelledby={`${category.id}-title`} className="scroll-mt-12 border-t border-cream/10 py-16 sm:py-24">
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-48">
            <span className="font-display text-sm italic text-brass">{category.label}</span>
            <h2 id={`${category.id}-title`} className="mt-2 font-display text-4xl font-light leading-tight text-cream sm:text-5xl">
              {category.title}
            </h2>
            <p className="mt-4 max-w-md text-cream/65">{category.intro}</p>
            <motion.div
              className="mt-8 overflow-hidden rounded-[1.75rem] bg-coal"
              initial={{ clipPath: "inset(0% 0% 100% 0% round 1.75rem)" }}
              whileInView={{ clipPath: "inset(0% 0% 0% 0% round 1.75rem)" }}
              viewport={VIEWPORT}
              transition={{ duration: 1.1, ease: EASE_OUT }}
            >
              <motion.img
                src={category.cover}
                alt={category.coverAlt}
                loading="lazy"
                className="aspect-[4/3] w-full object-cover"
                initial={{ transform: "scale(1.15)" }}
                whileInView={{ transform: "scale(1)" }}
                viewport={VIEWPORT}
                transition={{ duration: 1.4, ease: EASE_OUT }}
              />
            </motion.div>
          </div>
        </div>

        <ul className="divide-y divide-cream/10 lg:col-span-7">
          {category.items.map((item, i) => (
            <motion.li
              key={item.name}
              className="flex gap-5 py-7 first:pt-0 sm:gap-6"
              initial={{ opacity: 0, transform: "translateY(24px)" }}
              whileInView={{ opacity: 1, transform: "translateY(0px)" }}
              viewport={VIEWPORT}
              transition={{ duration: 0.8, delay: Math.min(i, 5) * 0.06, ease: EASE_OUT }}
            >
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                  <h3 className="font-display text-2xl text-cream sm:text-[1.7rem]">{item.name}</h3>
                  {item.tags?.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-brass/40 px-2.5 py-0.5 text-[0.7rem] font-semibold uppercase tracking-wider text-brass"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <p className="mt-2 leading-relaxed text-cream/65">{item.description}</p>
              </div>
              {item.image && (
                <img
                  src={item.image}
                  alt=""
                  loading="lazy"
                  className="size-20 shrink-0 rounded-2xl object-cover sm:size-24"
                />
              )}
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
