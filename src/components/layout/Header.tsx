import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router";
import { EASE_OUT } from "../../config/motion";
import { navLinks, site } from "../../config/site";
import { useOpenStatus } from "../../hooks/useOpenStatus";

export default function Header() {
  const { pathname } = useLocation();
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const status = useOpenStatus();
  const ref = useRef<HTMLElement>(null);
  const onMenu = pathname === "/menu";

  useMotionValueEvent(scrollY, "change", (y) => {
    const prev = scrollY.getPrevious() ?? 0;
    setScrolled(y > 40);
    setHidden(y > prev && y > 480);
  });

  // Altezza visibile dell'header, usata dalla barra categorie del menu per restare sotto.
  useEffect(() => {
    const h = hidden || !ref.current ? 0 : ref.current.offsetHeight;
    document.documentElement.style.setProperty("--header-h", `${h}px`);
  }, [hidden]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  // Chiude il menu mobile a ogni navigazione.
  const [lastPath, setLastPath] = useState(pathname);
  if (lastPath !== pathname) {
    setLastPath(pathname);
    setOpen(false);
  }

  const linkTo = (hash: string) => ({ pathname: "/", hash: `#${hash}` });

  return (
    <>
      <motion.header
        ref={ref}
        className="fixed inset-x-0 top-0 z-50"
        animate={{ transform: hidden && !open ? "translateY(-100%)" : "translateY(0%)" }}
        transition={{ duration: 0.35, ease: EASE_OUT }}
      >
        <div
          className={`transition-[background-color,border-color,backdrop-filter] duration-300 ${
            scrolled || open
              ? "border-b border-cream/10 bg-ink/80 backdrop-blur-xl"
              : "border-b border-transparent bg-transparent"
          }`}
        >
          <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-6 px-5 sm:px-8">
            <Link
              to="/"
              onClick={() => pathname === "/" && window.scrollTo({ top: 0, behavior: "smooth" })}
              className="shrink-0"
              aria-label="Iallonardi, torna alla home"
            >
              <img src="/images/logo-light.png" alt="Iallonardi Sapori Autentici" className="h-11 w-auto" />
            </Link>

            <nav className="hidden items-center gap-7 lg:flex" aria-label="Sezioni">
              {navLinks.map((l) => (
                <Link
                  key={l.hash}
                  to={linkTo(l.hash)}
                  className="group relative py-2 text-[0.8rem] font-medium uppercase tracking-[0.16em] text-cream/75 transition-colors duration-200 hover:text-cream"
                >
                  {l.label}
                  <span className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-brass transition-transform duration-300 ease-out-strong group-hover:scale-x-100" />
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <span className="hidden items-center gap-2 text-xs text-cream/70 xl:flex">
                <span className={`relative flex size-2 rounded-full ${status.open ? "bg-emerald-400" : "bg-stone"}`}>
                  {status.open && <span className="absolute inset-0 animate-ping rounded-full bg-emerald-400/70 motion-reduce:hidden" />}
                </span>
                {status.label}
              </span>

              {onMenu ? (
                <a
                  href={site.phone.href}
                  className="hidden items-center gap-2 rounded-full bg-ember px-5 py-2.5 text-sm font-semibold text-cream transition-[transform,background-color] duration-150 hover:bg-ember-deep active:scale-[0.97] sm:inline-flex"
                >
                  <i className="ri-phone-line" aria-hidden /> Chiama
                </a>
              ) : (
                <Link
                  to="/menu"
                  className="hidden items-center gap-2 rounded-full bg-ember px-5 py-2.5 text-sm font-semibold text-cream transition-[transform,background-color] duration-150 hover:bg-ember-deep active:scale-[0.97] sm:inline-flex"
                >
                  Il menu <i className="ri-arrow-right-up-line" aria-hidden />
                </Link>
              )}

              <button
                type="button"
                onClick={() => setOpen((v) => !v)}
                className="grid size-11 place-items-center rounded-full border border-cream/20 text-xl text-cream transition-transform duration-150 active:scale-[0.95] lg:hidden"
                aria-expanded={open}
                aria-controls="mobile-menu"
                aria-label={open ? "Chiudi menu" : "Apri menu"}
              >
                <i className={open ? "ri-close-line" : "ri-menu-line"} aria-hidden />
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            className="fixed inset-0 z-40 flex flex-col bg-ink px-5 pb-10 pt-28 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
            transition={{ duration: 0.3, ease: EASE_OUT }}
          >
            <nav className="flex flex-col" aria-label="Menu mobile">
              {[...navLinks.map((l) => ({ label: l.label, to: linkTo(l.hash) })), { label: "Il menu", to: { pathname: "/menu" } }].map(
                (l, i) => (
                  <motion.div
                    key={l.label}
                    initial={{ opacity: 0, transform: "translateY(24px)" }}
                    animate={{ opacity: 1, transform: "translateY(0px)" }}
                    transition={{ duration: 0.5, delay: 0.05 + i * 0.05, ease: EASE_OUT }}
                  >
                    <Link
                      to={l.to}
                      onClick={() => setOpen(false)}
                      className="block border-b border-cream/10 py-4 font-display text-4xl font-light text-cream"
                    >
                      {l.label}
                    </Link>
                  </motion.div>
                ),
              )}
            </nav>
            <motion.div
              className="mt-auto space-y-3 text-sm text-cream/70"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <p className="flex items-center gap-2">
                <span className={`size-2 rounded-full ${status.open ? "bg-emerald-400" : "bg-stone"}`} />
                {status.label}
              </p>
              <a href={site.phone.href} className="flex items-center gap-2 text-lg text-cream">
                <i className="ri-phone-line" aria-hidden /> {site.phone.label}
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
