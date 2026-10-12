import { useCallback, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";
import CategoryNav from "../components/menu/CategoryNav";
import MenuHero from "../components/menu/MenuHero";
import MenuSection from "../components/menu/MenuSection";
import { Reveal } from "../components/ui/Reveal";
import { site } from "../config/site";
import { menu } from "../data/menu";
import { useHashScroll } from "../hooks/useHashScroll";

const notes = [
  { icon: "ri-price-tag-3-line", title: "Prezzi", text: "Li trovi in sede o al telefono. Le bistecche si pagano al peso." },
  { icon: "ri-alert-line", title: "Allergie e intolleranze", text: "Dillo prima di ordinare: ti indichiamo cosa puoi mangiare." },
  { icon: "ri-store-2-line", title: "Il banco cambia", text: "Tagli e fritti del giorno dipendono da cosa arriva in macelleria." },
];

export default function MenuPage() {
  useHashScroll();
  const navigate = useNavigate();
  const [active, setActive] = useState(menu[0].id);

  // Evidenzia la categoria che occupa il centro dello schermo.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((e) => e.isIntersecting);
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    menu.forEach((c) => {
      const el = document.getElementById(c.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const select = useCallback(
    (id: string) => {
      setActive(id);
      navigate({ hash: `#${id}` }, { replace: true, preventScrollReset: true });
    },
    [navigate],
  );

  return (
    <>
      <MenuHero />
      <CategoryNav categories={menu} active={active} onSelect={select} />

      <div className="mx-auto max-w-7xl px-5 pt-10 sm:px-8">
        {menu.map((c) => (
          <MenuSection key={c.id} category={c} />
        ))}
      </div>

      <section className="mx-auto max-w-7xl px-5 pb-24 sm:px-8">
        <div className="grid gap-4 border-t border-cream/10 pt-16 md:grid-cols-3">
          {notes.map((n, i) => (
            <Reveal key={n.title} delay={i * 0.08} className="rounded-[1.5rem] bg-coal p-7">
              <i className={`${n.icon} text-2xl text-brass`} aria-hidden />
              <h3 className="mt-4 font-display text-2xl text-cream">{n.title}</h3>
              <p className="mt-2 text-cream/65">{n.text}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className="relative mt-4 overflow-hidden rounded-[2rem] bg-ember-deep px-6 py-14 text-center sm:px-12 sm:py-20">
          <img
            src="/images/salumi-tavola.webp"
            alt=""
            aria-hidden
            loading="lazy"
            className="absolute inset-0 size-full object-cover opacity-20 mix-blend-multiply"
          />
          <div className="relative">
            <p className="font-display text-[clamp(2.4rem,6vw,4.5rem)] font-light leading-none text-cream">
              Hai già scelto? <em className="italic">Chiamaci.</em>
            </p>
            <p className="mx-auto mt-5 max-w-lg text-cream/85">
              Prenota un tavolo o ordina da asporto. Via Pietro Patriarca 26, Isernia.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <a
                href={site.phone.href}
                className="inline-flex items-center gap-2 rounded-full bg-cream px-7 py-4 font-semibold text-ink transition-[transform,background-color] duration-150 hover:bg-paper active:scale-[0.97]"
              >
                <i className="ri-phone-line" aria-hidden /> {site.phone.label}
              </a>
              <Link
                to={{ pathname: "/", hash: "#visita" }}
                className="inline-flex items-center gap-2 rounded-full border border-cream/40 px-7 py-4 font-medium text-cream transition-[transform,background-color] duration-150 hover:bg-cream/10 active:scale-[0.97]"
              >
                <i className="ri-map-pin-2-line" aria-hidden /> Orari e indicazioni
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
