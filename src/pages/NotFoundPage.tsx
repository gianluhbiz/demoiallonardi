import { Link } from "react-router";

export default function NotFoundPage() {
  return (
    <section className="grid min-h-svh place-items-center bg-ink px-5 text-center">
      <div>
        <p className="font-display text-8xl font-light italic text-ember">404</p>
        <h1 className="mt-4 font-display text-4xl font-light text-cream">Questo taglio non è al banco.</h1>
        <p className="mt-3 text-cream/65">La pagina che cerchi non esiste o è stata spostata.</p>
        <div className="mt-8 flex justify-center gap-3">
          <Link to="/" className="rounded-full bg-ember px-6 py-3 font-semibold text-cream transition-transform duration-150 active:scale-[0.97]">
            Torna alla home
          </Link>
          <Link to="/menu" className="rounded-full border border-cream/25 px-6 py-3 text-cream transition-transform duration-150 active:scale-[0.97]">
            Vai al menu
          </Link>
        </div>
      </div>
    </section>
  );
}
