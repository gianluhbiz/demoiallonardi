import type { ReactNode } from "react";

type Props = { children: ReactNode; reverse?: boolean; className?: string };

/** Nastro infinito in CSS: gira fuori dal main thread e si ferma al passaggio del mouse. */
export default function Marquee({ children, reverse, className }: Props) {
  return (
    <div className={`group flex overflow-hidden motion-reduce:overflow-x-auto ${className ?? ""}`}>
      <div
        className={`flex w-max shrink-0 group-hover:[animation-play-state:paused] motion-reduce:animate-none ${
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        }`}
      >
        <div className="flex shrink-0">{children}</div>
        <div className="flex shrink-0 motion-reduce:hidden" aria-hidden>
          {children}
        </div>
      </div>
    </div>
  );
}
