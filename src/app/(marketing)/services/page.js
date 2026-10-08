import Image from "next/image";
import Link from "next/link";
import { images, packages, services } from "@/lib/data";
import Icon from "@/components/Icon";
import PageHeader from "@/components/PageHeader";
import SectionHeading from "@/components/SectionHeading";
import Reveal, { ClipReveal, StaggerGroup, StaggerItem } from "@/components/motion/Reveal";
import Process from "@/components/sections/Process";
import CTASection from "@/components/sections/CTASection";

export const metadata = {
  title: "Services",
  description:
    "Architectural design, building approvals, new home construction, renovation and interior finishing across Nigeria.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        title="Our Services"
        crumb="Services"
        intro="One team for design, approvals, construction and finishing — so nothing falls through the cracks."
        image={images.onSite}
      />

      <section className="bg-white py-24 lg:py-32">
        <div className="container space-y-24 lg:space-y-32">
          {services.map((s, i) => (
            <article key={s.slug} id={s.slug} className="grid scroll-mt-24 items-center gap-10 lg:grid-cols-2 lg:gap-16">
              <ClipReveal className={`relative aspect-[4/3] overflow-hidden rounded-3xl ${i % 2 ? "lg:order-2" : ""}`}>
                <Image src={s.image} alt={s.title} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
              </ClipReveal>
              <Reveal x={i % 2 ? -40 : 40} y={0}>
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-brand-500 text-white">
                  <Icon name={s.icon} className="h-7 w-7" />
                </span>
                <p className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-brand-500">Service 0{i + 1}</p>
                <h2 className="mt-2 font-display text-3xl font-bold sm:text-4xl">{s.title}</h2>
                <p className="mt-4 text-lg leading-relaxed text-ink-600">{s.summary}</p>
                <ul className="mt-6 space-y-3">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-center gap-3">
                      <span className="grid h-6 w-6 place-items-center rounded-full bg-brand-100 text-brand-600">
                        <Icon name="check" className="h-4 w-4" strokeWidth={2.5} />
                      </span>
                      {p}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-sand py-24 lg:py-32">
        <div className="container">
          <SectionHeading
            align="center"
            eyebrow="Build packages"
            title="Transparent starting prices"
            intro="Indicative starting prices for a standard plot. Your final quote depends on your design, location and finishes."
          />
          <StaggerGroup className="mt-14 grid gap-6 lg:grid-cols-3">
            {packages.map((p) => (
              <StaggerItem
                key={p.name}
                className={`relative flex flex-col rounded-3xl p-8 ${
                  p.featured ? "bg-ink text-white shadow-2xl lg:-translate-y-4" : "bg-white"
                }`}
              >
                {p.featured && (
                  <span className="absolute -top-3 left-8 rounded-full bg-brand-500 px-3 py-1 text-xs font-semibold text-white">
                    Most popular
                  </span>
                )}
                <h3 className="font-display text-xl font-semibold">{p.name}</h3>
                <p className={`text-sm ${p.featured ? "text-white/60" : "text-ink-600"}`}>{p.detail}</p>
                <p className="mt-6 font-display text-4xl font-bold">
                  <span className={`text-base font-normal ${p.featured ? "text-white/60" : "text-ink-600"}`}>from </span>
                  {p.from}
                </p>
                <ul className="mt-8 flex-1 space-y-3">
                  {p.features.map((f) => (
                    <li key={f} className="flex gap-3 text-sm">
                      <Icon name="check" className="h-5 w-5 shrink-0 text-brand-500" strokeWidth={2.5} />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={`mt-8 rounded-full py-3.5 text-center font-semibold transition ${
                    p.featured ? "bg-brand-500 hover:bg-brand-400" : "bg-ink text-white hover:bg-brand-600"
                  }`}
                >
                  Get a quote
                </Link>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <Process />
      <CTASection />
    </>
  );
}
