import Image from "next/image";
import Link from "next/link";
import { images, values } from "@/lib/data";
import Icon from "../Icon";
import Reveal, { ClipReveal } from "../motion/Reveal";
import SectionHeading from "../SectionHeading";

export default function AboutIntro() {
  return (
    <section className="overflow-hidden bg-sand py-24 lg:py-32">
      <div className="container grid items-center gap-16 lg:grid-cols-2">
        <div className="relative">
          <ClipReveal className="relative aspect-[4/5] overflow-hidden rounded-3xl">
            <Image src={images.siteTeam} alt="Eagles Construction team reviewing drawings on site" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
          </ClipReveal>
          <Reveal
            delay={0.5}
            x={-40}
            y={0}
            className="absolute -bottom-8 right-4 w-56 rounded-2xl bg-brand-500 p-6 text-white shadow-2xl sm:-right-8"
          >
            <p className="font-display text-5xl font-bold">12+</p>
            <p className="mt-1 text-sm text-white/85">years building family homes in Nigeria</p>
          </Reveal>
        </div>

        <div>
          <SectionHeading
            eyebrow="Who we are"
            title="Experts in building, drawing, interior and general work."
            intro="Building in Nigeria shouldn't come with stories, delays or surprise bills. Eagles Construction Company gives you one team for drawings, construction, interiors and general work — and complete visibility from the first block to the last tile."
          />
          <div className="mt-10 space-y-6">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={0.1 * i} className="flex gap-5">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-white text-brand-600 shadow-sm">
                  <Icon name={v.icon} />
                </span>
                <div>
                  <h3 className="font-display text-lg font-semibold text-ink">{v.title}</h3>
                  <p className="mt-1 text-ink-600">{v.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.3}>
            <Link href="/about" className="group mt-10 inline-flex items-center gap-2 font-semibold text-brand-600">
              More about us
              <Icon name="arrow" className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
