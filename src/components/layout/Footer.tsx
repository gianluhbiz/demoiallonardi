import { Link } from "react-router";
import { navLinks, site } from "../../config/site";

export default function Footer() {
  return (
    <footer className="border-t border-cream/10 bg-ink pb-10 pt-16 text-sm text-cream/65">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 md:grid-cols-2 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <img
            src="/images/logo-light.png"
            alt="Iallonardi Sapori Autentici"
            className="h-16 w-auto"
            loading="lazy"
          />
          <p className="mt-5 max-w-xs leading-relaxed">
            Macelleria, salumificio e cucina a Isernia. Tre generazioni di
            norcini dal {site.founded}.
          </p>
        </div>

        <div className="lg:col-span-3">
          <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-brass">
            Dove
          </h3>
          <ul className="space-y-3">
            {site.locations.map((l) => (
              <li key={l.id}>
                <span className="block text-cream">{l.title}</span>
                {l.address}, {l.city}
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-2">
          <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-brass">
            Contatti
          </h3>
          <ul className="space-y-2">
            <li>
              <a
                className="transition-colors hover:text-cream"
                href={site.phone.href}
              >
                Cucina {site.phone.label}
              </a>
            </li>
            <li>
              <a
                className="transition-colors hover:text-cream"
                href={site.phoneLab.href}
              >
                Salumificio {site.phoneLab.label}
              </a>
            </li>
            <li>
              <a
                className="transition-colors hover:text-cream"
                href={site.mobile.href}
              >
                Cellulare {site.mobile.label}
              </a>
            </li>
          </ul>
        </div>

        <div className="lg:col-span-3">
          <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-brass">
            Esplora
          </h3>
          <ul className="grid grid-cols-2 gap-2">
            {navLinks.map((l) => (
              <li key={l.hash}>
                <Link
                  className="transition-colors hover:text-cream"
                  to={{ pathname: "/", hash: `#${l.hash}` }}
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <Link className="transition-colors hover:text-cream" to="/menu">
                Menu
              </Link>
            </li>
          </ul>
          <div className="mt-6 flex gap-4 text-xl">
            {site.socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="transition-colors hover:text-cream"
              >
                <i className={s.icon} aria-hidden />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto mt-14 flex max-w-7xl flex-col gap-2 border-t border-cream/10 px-5 pt-6 text-xs text-cream/45 sm:flex-row sm:justify-between sm:px-8">
        <p>
          © {new Date().getFullYear()} {site.legalName} · P.IVA {site.vat}
        </p>
        <p>
          <a href="https://gianluh.dev/" target="_blank" rel="noreferrer">
            Developed and Designed by Gianluca De Maio <i className="ri-external-link-line"></i>
          </a>
        </p>
        <p>Foto: archivio Iallonardi e clienti su Tripadvisor</p>
      </div>
    </footer>
  );
}
