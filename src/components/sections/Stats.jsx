"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView } from "framer-motion";
import { stats } from "@/lib/data";
import { StaggerGroup, StaggerItem } from "../motion/Reveal";

function Counter({ value, suffix }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 2.2,
      ease: "easeOut",
      onUpdate: (v) => setN(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, value]);

  return (
    <span ref={ref}>
      {n}
      {suffix}
    </span>
  );
}

export default function Stats({ dark = true }) {
  return (
    <section className={dark ? "bg-ink text-white" : "bg-sand text-ink"}>
      <StaggerGroup className="container grid grid-cols-2 gap-y-10 py-16 lg:grid-cols-4">
        {stats.map((s) => (
          <StaggerItem key={s.label} className="border-l-2 border-brand-500 pl-5">
            <p className="font-display text-4xl font-bold sm:text-5xl">
              <Counter value={s.value} suffix={s.suffix} />
            </p>
            <p className={`mt-2 text-sm ${dark ? "text-white/60" : "text-ink-600"}`}>{s.label}</p>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </section>
  );
}
