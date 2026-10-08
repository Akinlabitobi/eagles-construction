import Image from "next/image";
import { company, images, values } from "@/lib/data";
import Icon from "@/components/Icon";
import PageHeader from "@/components/PageHeader";
import SectionHeading from "@/components/SectionHeading";
import Reveal, { ClipReveal, StaggerGroup, StaggerItem } from "@/components/motion/Reveal";
import Stats from "@/components/sections/Stats";
import Process from "@/components/sections/Process";
import CTASection from "@/components/sections/CTASection";

export const metadata = {
  title: "About Us",
  description: `Learn about ${company.name} — experts in building work, drawing, interior and general work in Nigeria.`,
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title={`About ${company.name}`}
        crumb="About"
        intro="We started with a simple promise: build every project as if our own family were moving in."
        image={images.siteTeam}
      />

      <section className="bg-white py-24 lg:py-32">
        <div className="container grid items-center gap-16 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Our story" title="Building work Nigerians can trust." />
            <Reveal delay={0.1} className="mt-6 space-y-5 text-lg leading-relaxed text-ink-600">
              <p>
                {company.name} began as a team of engineers and builders who were tired of hearing the same
                stories — abandoned sites, inflated costs and poor workmanship.
              </p>
              <p>
                Today we are experts in building work, architectural and structural drawings, interior finishing and
                general work. Every project gets close supervision on site, honest costing and regular progress
                updates.
              </p>
              <p>
                Our engineers and site supervisors are qualified professionals, and we only work with tested materials
                from trusted suppliers.
              </p>
            </Reveal>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <ClipReveal className="relative mt-12 aspect-[3/4] overflow-hidden rounded-3xl">
              <Image src={images.plans} alt="Reviewing architectural plans" fill sizes="(min-width: 1024px) 25vw, 50vw" className="object-cover" />
            </ClipReveal>
            <ClipReveal className="relative aspect-[3/4] overflow-hidden rounded-3xl">
              <Image src={images.concrete} alt="Supervising concrete casting on site" fill sizes="(min-width: 1024px) 25vw, 50vw" className="object-cover" />
            </ClipReveal>
          </div>
        </div>
      </section>

      <Stats />

      <section className="bg-sand py-24 lg:py-32">
        <div className="container">
          <SectionHeading align="center" eyebrow="What we stand for" title="Our values" />
          <StaggerGroup className="mt-14 grid gap-6 md:grid-cols-3">
            {values.map((v) => (
              <StaggerItem key={v.title} className="rounded-3xl bg-white p-8 shadow-sm">
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-brand-500 text-white">
                  <Icon name={v.icon} className="h-7 w-7" />
                </span>
                <h3 className="mt-6 font-display text-xl font-semibold">{v.title}</h3>
                <p className="mt-3 leading-relaxed text-ink-600">{v.text}</p>
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
