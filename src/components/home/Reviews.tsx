import { site } from "../../config/site";
import { reviews } from "../../data/home";
import Marquee from "../ui/Marquee";
import { Eyebrow, LineReveal, Reveal } from "../ui/Reveal";
import Stars from "../ui/Stars";

type Review = (typeof reviews)[number];

function ReviewCard({ review }: { review: Review }) {
  return (
    <figure className="mr-5 flex w-[19rem] shrink-0 flex-col justify-between gap-6 rounded-[1.5rem] bg-cream p-7 shadow-sm shadow-ink/5 sm:w-[23rem]">
      <blockquote className="font-display text-xl font-light leading-snug text-ink">“{review.quote}”</blockquote>
      <figcaption className="flex items-center justify-between text-sm">
        <span className="font-semibold text-ink">{review.author}</span>
        <span className="flex items-center gap-1.5 text-umber">
          <i className={review.source === "Google" ? "ri-google-fill" : "ri-star-fill"} aria-hidden />
          {review.source}
        </span>
      </figcaption>
    </figure>
  );
}

const subScores = ["Cibo", "Servizio", "Qualità/prezzo", "Atmosfera"];

export default function Reviews() {
  const half = Math.ceil(reviews.length / 2);
  return (
    <section id="recensioni" className="overflow-hidden bg-paper py-24 text-ink sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <Eyebrow tone="dark">Dicono di noi</Eyebrow>
          <LineReveal
            className="mt-6 font-display text-[clamp(2.6rem,6vw,4.75rem)] font-light leading-[0.98] tracking-[-0.015em]"
            lines={["Il passaparola", <em key="m" className="italic text-ember-deep">fa il resto.</em>]}
          />
        </div>
        <Reveal className="grid grid-cols-2 gap-4 self-end lg:col-span-6" delay={0.1}>
          <div className="rounded-[1.5rem] border border-ink/10 p-6">
            <p className="font-display text-6xl font-light">{site.ratings.google.score}</p>
            <Stars className="mt-2 text-ember" />
            <p className="mt-3 text-sm text-umber">{site.ratings.google.count} recensioni su Google</p>
          </div>
          <div className="rounded-[1.5rem] border border-ink/10 p-6">
            <p className="font-display text-6xl font-light">{site.ratings.tripadvisor.score}</p>
            <Stars className="mt-2 text-ember" />
            <p className="mt-3 text-sm text-umber">{site.ratings.tripadvisor.rank} su Tripadvisor</p>
          </div>
          <p className="col-span-2 flex flex-wrap gap-x-5 gap-y-1 text-sm text-umber">
            {subScores.map((s) => (
              <span key={s}>
                {s} <strong className="font-semibold text-ink">5,0</strong>
              </span>
            ))}
            <span className="text-umber/80">· punteggi Tripadvisor</span>
          </p>
        </Reveal>
      </div>

      <div className="mt-16 space-y-5 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <Marquee>
          {reviews.slice(0, half).map((r) => (
            <ReviewCard key={r.author + r.quote} review={r} />
          ))}
        </Marquee>
        <Marquee reverse>
          {reviews.slice(half).map((r) => (
            <ReviewCard key={r.author + r.quote} review={r} />
          ))}
        </Marquee>
      </div>
    </section>
  );
}
