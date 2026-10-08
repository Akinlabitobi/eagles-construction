import Image from "next/image";
import { gallery, siteVideo } from "@/lib/data";
import { StaggerGroup, StaggerItem } from "../motion/Reveal";
import SectionHeading from "../SectionHeading";

// Real photos and video from our sites. The video tile spans two rows so the grid always fills evenly.
export default function SiteGallery({ limit = gallery.length }) {
  const photos = gallery.slice(0, limit);

  return (
    <section className="bg-sand py-24 lg:py-32">
      <div className="container">
        <SectionHeading
          eyebrow="On site"
          title="Real work from our sites."
          intro="Reinforcement, formwork, concrete casting and drawings — no stock photos, just our team at work."
        />

        <StaggerGroup className="mt-14 grid grid-flow-dense grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          <StaggerItem className="relative row-span-2 overflow-hidden rounded-3xl bg-ink">
            <video
              src={siteVideo}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              aria-label="Video of our team working on site"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <span className="absolute left-4 top-4 flex items-center gap-2 rounded-full bg-ink/60 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-red-500" />
              From site
            </span>
          </StaggerItem>

          {photos.map((photo) => (
            <StaggerItem key={photo.src} className="group relative aspect-[3/4] overflow-hidden rounded-3xl bg-ink">
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
                className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/90 to-transparent p-4 pt-12 text-sm text-white opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                {photo.alt}
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
