"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ease } from "./motion/Reveal";

// Inner-page banner: dark photo background, animated title and breadcrumb.
export default function PageHeader({ title, intro, image, crumb }) {
  return (
    <section className="relative flex min-h-[60vh] items-end overflow-hidden bg-ink pb-16 pt-32 text-white">
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.8, ease }}
      >
        <Image src={image} alt="" fill priority sizes="100vw" className="object-cover" />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/30" />

      <div className="container relative">
        <motion.nav
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mb-4 text-sm text-white/60"
          aria-label="Breadcrumb"
        >
          <Link href="/" className="hover:text-white">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span className="text-brand-400">{crumb ?? title}</span>
        </motion.nav>
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ delay: 0.4, duration: 1, ease }}
            className="font-display text-4xl font-bold sm:text-5xl lg:text-6xl"
          >
            {title}
          </motion.h1>
        </div>
        {intro && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="mt-5 max-w-2xl text-lg text-white/75"
          >
            {intro}
          </motion.p>
        )}
      </div>
    </section>
  );
}
