import Reveal from "./motion/Reveal";

export default function SectionHeading({ eyebrow, title, intro, align = "left", dark = false }) {
  const centered = align === "center";
  return (
    <Reveal className={`max-w-2xl ${centered ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <p className={`mb-3 flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-brand-500 ${centered ? "justify-center" : ""}`}>
          <span className="h-px w-8 bg-brand-500" />
          {eyebrow}
        </p>
      )}
      <h2 className={`font-display text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl ${dark ? "text-white" : "text-ink"}`}>
        {title}
      </h2>
      {intro && <p className={`mt-5 text-lg leading-relaxed ${dark ? "text-white/70" : "text-ink-600"}`}>{intro}</p>}
    </Reveal>
  );
}
