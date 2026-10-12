import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import type { MenuCategory } from "../../data/menu";

type Props = { categories: MenuCategory[]; active: string; onSelect: (id: string) => void };

export default function CategoryNav({ categories, active, onSelect }: Props) {
  const navRef = useRef<HTMLElement>(null);

  // Tiene la categoria attiva visibile nella barra su schermi stretti.
  useEffect(() => {
    const nav = navRef.current;
    const btn = nav?.querySelector<HTMLElement>(`[data-id="${active}"]`);
    if (!nav || !btn) return;
    nav.scrollTo({ left: btn.offsetLeft - nav.clientWidth / 2 + btn.clientWidth / 2, behavior: "smooth" });
  }, [active]);

  return (
    <div
      className="sticky z-30 px-5 transition-[top] duration-300 ease-out-strong sm:px-8"
      style={{ top: "calc(var(--header-h, 80px) + 0.75rem)" }}
    >
      <div className="mx-auto max-w-7xl">
        <motion.nav
          ref={navRef}
          layoutScroll
          aria-label="Categorie del menu"
          className="flex gap-1 overflow-x-auto rounded-full border border-cream/10 bg-coal/85 p-1.5 shadow-xl shadow-black/30 backdrop-blur-xl [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {categories.map((c) => {
            const isActive = c.id === active;
            return (
              <button
                key={c.id}
                type="button"
                data-id={c.id}
                aria-current={isActive ? "true" : undefined}
                onClick={() => onSelect(c.id)}
                className={`relative flex shrink-0 items-center gap-2 rounded-full px-4 py-2.5 text-sm font-medium transition-colors duration-200 ${
                  isActive ? "text-ink" : "text-cream/70 hover:text-cream"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="menu-active-pill"
                    className="absolute inset-0 rounded-full bg-cream"
                    transition={{ type: "spring", duration: 0.45, bounce: 0.15 }}
                  />
                )}
                <i className={`${c.icon} relative`} aria-hidden />
                <span className="relative">{c.label}</span>
              </button>
            );
          })}
        </motion.nav>
      </div>
    </div>
  );
}
