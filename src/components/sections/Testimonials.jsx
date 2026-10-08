"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { testimonials } from "@/lib/data";
import SectionHeading from "../SectionHeading";

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % testimonials.length), 6000);
    return () => clearInterval(id);
  }, [paused]);

  const t = testimonials[index];

  return (
    <section
      className="bg-sand py-24 lg:py-32"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="container">
        <SectionHeading align="center" eyebrow="Client stories" title="Homeowners who built with us." />

        <div className="relative mx-auto mt-14 max-w-3xl text-center">
          <span className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 font-display text-[10rem] leading-none text-brand-500/15" aria-hidden="true">
            &ldquo;
          </span>
          <div className="relative min-h-[16rem] sm:min-h-[13rem]">
            <AnimatePresence mode="wait">
              <motion.figure
                key={index}
                initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -30, filter: "blur(6px)" }}
                transition={{ duration: 0.6 }}
              >
                <blockquote className="font-display text-xl leading-relaxed text-ink sm:text-2xl">{t.quote}</blockquote>
                <figcaption className="mt-8">
                  <p className="font-semibold text-ink">{t.name}</p>
                  <p className="text-sm text-ink-600">{t.role}</p>
                </figcaption>
              </motion.figure>
            </AnimatePresence>
          </div>

          <div className="mt-10 flex justify-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Show testimonial ${i + 1}`}
                className="relative h-2 w-10 overflow-hidden rounded-full bg-ink/10"
              >
                {i === index && (
                  <motion.span
                    key={`${index}-${paused}`}
                    className="absolute inset-y-0 left-0 bg-brand-500"
                    initial={{ width: paused ? "100%" : "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: paused ? 0 : 6, ease: "linear" }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
