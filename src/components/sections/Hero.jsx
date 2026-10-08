"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { company, images, whatsappLink } from "@/lib/data";
import Icon from "../Icon";
import { ease } from "../motion/Reveal";

const lines = ["Expert building,", "drawing & interior", "work, done right."];

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  // Parallax: background drifts slower than the page; content fades as you scroll away.
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section ref={ref} className="relative flex min-h-[100svh] items-center overflow-hidden bg-ink text-white">
      <motion.div style={{ y: bgY }} className="absolute inset-0">
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.25 }}
          animate={{ scale: 1.05 }}
          transition={{ duration: 2.4, ease }}
        >
          <Image
            src={images.hero}
            alt="Building under construction by Eagles Construction Company"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </motion.div>
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/75 to-ink/20" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink to-transparent" />

      <motion.div style={{ y: contentY, opacity: fade }} className="container relative pb-24 pt-32">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm backdrop-blur"
        >
          <span className="h-2 w-2 rounded-full bg-brand-400" />
          {company.name}
        </motion.p>

        <h1 className="font-display text-[2.6rem] font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl xl:text-8xl">
          {lines.map((line, i) => (
            <span key={line} className="block overflow-hidden pb-1">
              <motion.span
                className={`block ${i === 1 ? "text-brand-400" : ""}`}
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ delay: 0.7 + i * 0.15, duration: 1, ease }}
              >
                {line}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.8, ease }}
          className="mt-8 max-w-xl text-lg leading-relaxed text-white/75"
        >
          Experts in building work, architectural and structural drawings, interior finishing and general work —
          delivered on time, on budget and built to last.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8, ease }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 rounded-full bg-brand-500 px-7 py-4 font-semibold shadow-xl shadow-brand-500/30 transition hover:bg-brand-400"
          >
            Start your build
            <Icon name="arrow" className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/30 px-7 py-4 font-semibold backdrop-blur transition hover:bg-white hover:text-ink"
          >
            <Icon name="chat" className="h-5 w-5" />
            WhatsApp us
          </a>
        </motion.div>
      </motion.div>

      {/* Floating "live" card */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.9, duration: 1, ease }}
        className="absolute bottom-10 right-8 hidden w-72 rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur-md lg:block"
      >
        <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}>
          <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-brand-300">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-400" />
            </span>
            Call us today
          </p>
          {company.phones.map((p) => (
            <a key={p.href} href={p.href} className="mt-2 block font-display text-2xl font-bold hover:text-brand-300">
              {p.display}
            </a>
          ))}
          <p className="mt-1 text-sm text-white/70">Free consultation &amp; site visit</p>
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 sm:block"
      >
        <div className="flex h-11 w-7 justify-center rounded-full border-2 border-white/40 pt-2">
          <motion.span
            className="h-2 w-1 rounded-full bg-white"
            animate={{ y: [0, 14, 0], opacity: [1, 0.2, 1] }}
            transition={{ duration: 1.8, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}
