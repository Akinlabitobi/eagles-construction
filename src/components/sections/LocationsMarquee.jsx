import { locations } from "@/lib/data";

// Infinite scrolling strip of locations we build in (pure CSS animation).
export default function LocationsMarquee() {
  const items = [...locations, ...locations];
  return (
    <div className="overflow-hidden border-y border-white/10 bg-brand-600 py-5 text-white">
      <div className="flex w-max animate-marquee motion-reduce:animate-none">
        {items.map((place, i) => (
          <span key={i} className="flex items-center gap-8 px-8 font-display text-lg font-semibold uppercase tracking-widest">
            {place}
            <span className="h-2 w-2 rotate-45 bg-white/60" aria-hidden="true" />
          </span>
        ))}
      </div>
    </div>
  );
}
