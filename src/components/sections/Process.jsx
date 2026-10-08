"use client";

import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import { process } from "@/lib/data";
import Reveal from "../motion/Reveal";
import SectionHeading from "../SectionHeading";

// Timeline whose line "draws" itself as you scroll through the steps.
export default function Process() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 75%", "end 60%"] });

  return (
    <section className="relative overflow-hidden bg-ink py-24 text-white lg:py-32">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
        aria-hidden="true"
      />
      <div className="container relative grid gap-16 lg:grid-cols-[1fr_1.3fr]">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <SectionHeading
            dark
            eyebrow="How we work"
            title="From bare land to keys in hand."
            intro="A clear five-step process, so you always know what's happening on your site — even if you're watching from abroad."
          />
        </div>

        <div ref={ref} className="relative pl-12 sm:pl-16">
          <div className="absolute bottom-0 left-[19px] top-0 w-0.5 bg-white/10 sm:left-[23px]" />
          <motion.div
            style={{ scaleY: scrollYProgress }}
            className="absolute bottom-0 left-[19px] top-0 w-0.5 origin-top bg-brand-500 sm:left-[23px]"
          />
          <ol className="space-y-14">
            {process.map((step, i) => (
              <li key={step.title} className="relative">
                <Reveal x={40} y={0}>
                  <span className="absolute -left-12 top-0 grid h-10 w-10 place-items-center rounded-full border-2 border-brand-500 bg-ink font-display text-sm font-bold text-brand-400 sm:-left-16 sm:h-12 sm:w-12">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display text-2xl font-semibold">{step.title}</h3>
                  <p className="mt-3 max-w-lg leading-relaxed text-white/65">{step.text}</p>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
