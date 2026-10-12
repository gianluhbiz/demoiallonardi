import { animate, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef } from "react";
import { EASE_OUT } from "../../config/motion";

type Props = { value: number; from?: number; className?: string };

/** Numero che conta fino al valore quando entra nel viewport. Scrive nel DOM senza re-render. */
export default function CountUp({ value, from = 0, className }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -10% 0px" });
  const reduce = useReducedMotion();

  useEffect(() => {
    const node = ref.current;
    if (!node || !inView || reduce) return;
    const controls = animate(from, value, {
      duration: 1.8,
      ease: EASE_OUT,
      onUpdate: (v) => {
        node.textContent = String(Math.round(v));
      },
    });
    return () => controls.stop();
  }, [inView, reduce, from, value]);

  return (
    <span ref={ref} className={`tabular-nums ${className ?? ""}`}>
      {reduce ? value : from}
    </span>
  );
}
