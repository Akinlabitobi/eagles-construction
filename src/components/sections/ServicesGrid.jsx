"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { services } from "@/lib/data";
import Icon from "../Icon";
import { StaggerGroup, StaggerItem } from "../motion/Reveal";
import SectionHeading from "../SectionHeading";

export default function ServicesGrid() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="container">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="What we do"
            title="Building, drawing, interior and general work."
          />
          <Link href="/services" className="group inline-flex shrink-0 items-center gap-2 font-semibold text-brand-600">
            All services
            <Icon name="arrow" className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <StaggerGroup className="mt-14 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {services.map((s, i) => (
            <StaggerItem key={s.slug}>
              <motion.article
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group relative h-full overflow-hidden rounded-3xl border border-ink/10 bg-sand p-8"
              >
                {/* Colour wipe on hover */}
                <span className="absolute inset-0 origin-bottom scale-y-0 bg-ink transition-transform duration-500 ease-out group-hover:scale-y-100" />
                <div className="relative">
                  <div className="flex items-start justify-between">
                    <span className="grid h-14 w-14 place-items-center rounded-2xl bg-brand-500 text-white transition-transform duration-500 group-hover:rotate-[-8deg] group-hover:scale-110">
                      <Icon name={s.icon} className="h-7 w-7" />
                    </span>
                    <span className="font-display text-4xl font-bold text-ink/10 transition-colors group-hover:text-white/10">
                      0{i + 1}
                    </span>
                  </div>
                  <h3 className="mt-8 font-display text-xl font-semibold text-ink transition-colors group-hover:text-white">
                    {s.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-ink-600 transition-colors group-hover:text-white/70">{s.summary}</p>
                </div>
              </motion.article>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
