"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ProjectCard from "../ProjectCard";

// Project grid with animated category filters (cards re-flow with layout animations).
export default function ProjectsShowcase({ projects, showFilters = false }) {
  const categories = ["All", ...new Set(projects.map((p) => p.category))];
  const [active, setActive] = useState("All");
  const visible = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <div>
      {showFilters && (
        <div className="mb-10 flex flex-wrap gap-2" role="tablist" aria-label="Filter projects">
          {categories.map((c) => (
            <button
              key={c}
              role="tab"
              aria-selected={active === c}
              onClick={() => setActive(c)}
              className={`relative rounded-full px-5 py-2.5 text-sm font-medium transition-colors ${
                active === c ? "text-white" : "text-ink-600 hover:text-ink"
              }`}
            >
              {active === c && (
                <motion.span
                  layoutId="filter-pill"
                  className="absolute inset-0 rounded-full bg-ink"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative">{c}</span>
            </button>
          ))}
        </div>
      )}

      <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {visible.map((project, i) => (
            <motion.div
              key={project.slug}
              layout
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
