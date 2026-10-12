import { Link } from "react-router";
import { openingHours, site } from "../../config/site";
import { useOpenStatus } from "../../hooks/useOpenStatus";
import { formatMinutes } from "../../lib/hours";
import { Eyebrow, LineReveal, Reveal } from "../ui/Reveal";

// Settimana da lunedì, come la leggono i clienti.
const weekOrder = [1, 2, 3, 4, 5, 6, 0];

export default function Visit() {
  const status = useOpenStatus();

  return (
    <section id="visita" className="bg-ink py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
        <div>
          <Eyebrow>Dove siamo</Eyebrow>
          <LineReveal
            className="mt-6 font-display text-[clamp(2.6rem,6vw,4.75rem)] font-light leading-[0.98] tracking-[-0.015em]"
            lines={["Passa a", <em key="m" className="italic text-brass">trovarci.</em>]}
          />

          <Reveal className="mt-10 grid gap-4 sm:grid-cols-2" delay={0.1}>
            {site.locations.map((loc) => (
              <a
                key={loc.id}
                href={loc.directions}
                target="_blank"
                rel="noreferrer"
                className="group rounded-[1.5rem] border border-cream/12 bg-coal p-6 transition-[border-color,transform] duration-200 hover:border-brass/50 active:scale-[0.98]"
              >
                <span className="text-xs font-semibold uppercase tracking-[0.22em] text-brass">{loc.title}</span>
                <span className="mt-3 block font-display text-2xl text-cream">{loc.address}</span>
                <span className="block text-sm text-cream/60">{loc.city}</span>
                <span className="mt-4 block text-sm text-cream/70">{loc.note}</span>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-cream">
                  <i className="ri-route-line" aria-hidden /> Indicazioni
                  <i
                    className="ri-arrow-right-up-line transition-transform duration-300 ease-out-strong group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    aria-hidden
                  />
                </span>
              </a>
            ))}
          </Reveal>

          <Reveal className="mt-10" delay={0.15}>
            <div className="flex items-center justify-between gap-4 border-b border-cream/12 pb-4">
              <h3 className="flex items-center gap-2 font-display text-2xl text-cream">
                <i className="ri-time-line text-brass" aria-hidden /> Orari
              </h3>
              <span className="flex items-center gap-2 text-sm text-cream/75">
                <span className={`size-2 rounded-full ${status.open ? "bg-emerald-400" : "bg-stone"}`} />
                {status.label}
              </span>
            </div>
            <dl className="divide-y divide-cream/8">
              {weekOrder.map((d) => {
                const { day, slots } = openingHours[d];
                const today = d === status.today;
                return (
                  <div
                    key={day}
                    className={`flex justify-between py-3 text-[0.95rem] ${today ? "text-cream" : "text-cream/60"}`}
                  >
                    <dt className="flex items-center gap-2">
                      {day}
                      {today && (
                        <span className="rounded-full bg-ember px-2 py-0.5 text-[0.65rem] font-semibold uppercase tracking-wider text-cream">
                          Oggi
                        </span>
                      )}
                    </dt>
                    <dd className="tabular-nums">
                      {slots.length
                        ? slots.map(([a, b]) => `${formatMinutes(a)}–${formatMinutes(b)}`).join("  ·  ")
                        : "Chiuso"}
                    </dd>
                  </div>
                );
              })}
            </dl>
          </Reveal>

          <Reveal className="mt-10 flex flex-wrap gap-3" delay={0.2}>
            <a
              href={site.phone.href}
              className="inline-flex items-center gap-2 rounded-full bg-ember px-6 py-3.5 font-semibold text-cream transition-[transform,background-color] duration-150 hover:bg-ember-deep active:scale-[0.97]"
            >
              <i className="ri-phone-line" aria-hidden /> {site.phone.label}
            </a>
            <Link
              to="/menu"
              className="inline-flex items-center gap-2 rounded-full border border-cream/25 px-6 py-3.5 font-medium text-cream transition-[transform,background-color] duration-150 hover:bg-cream/10 active:scale-[0.97]"
            >
              Guarda il menu <i className="ri-arrow-right-up-line" aria-hidden />
            </Link>
            <div className="flex gap-2">
              {site.socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="grid size-[3.25rem] place-items-center rounded-full border border-cream/20 text-xl text-cream transition-[transform,background-color] duration-150 hover:bg-cream/10 active:scale-[0.95]"
                >
                  <i className={s.icon} aria-hidden />
                </a>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal className="relative min-h-[26rem] overflow-hidden rounded-[2rem] border border-cream/10 bg-coal lg:min-h-full" delay={0.1}>
          <iframe
            title="Mappa: Iallonardi, Via Pietro Patriarca 26, Isernia"
            src={site.mapEmbed}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0 size-full border-0 [filter:grayscale(1)_invert(0.92)_contrast(0.9)_sepia(0.25)]"
          />
          <div className="pointer-events-none absolute left-5 top-5 rounded-full bg-ink/85 px-4 py-2 text-sm text-cream backdrop-blur">
            <i className="ri-map-pin-2-line mr-1.5 text-ember" aria-hidden />
            Via Pietro Patriarca 26
          </div>
        </Reveal>
      </div>
    </section>
  );
}
