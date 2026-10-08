import Link from "next/link";
import { projects } from "@/lib/data";
import Icon from "@/components/Icon";
import SectionHeading from "@/components/SectionHeading";
import Hero from "@/components/sections/Hero";
import LocationsMarquee from "@/components/sections/LocationsMarquee";
import Stats from "@/components/sections/Stats";
import AboutIntro from "@/components/sections/AboutIntro";
import ServicesGrid from "@/components/sections/ServicesGrid";
import Process from "@/components/sections/Process";
import ProjectsShowcase from "@/components/sections/ProjectsShowcase";
import SiteGallery from "@/components/sections/SiteGallery";
import Testimonials from "@/components/sections/Testimonials";
import CTASection from "@/components/sections/CTASection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <LocationsMarquee />
      <AboutIntro />
      <Stats />
      <ServicesGrid />
      <Process />
      <SiteGallery limit={6} />

      <section className="bg-white py-24 lg:py-32">
        <div className="container">
          <div className="mb-14 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <SectionHeading
              eyebrow="Featured projects"
              title="Projects we're proud of."
              intro="Current and recent work from Lagos and beyond."
            />
            <Link href="/projects" className="group inline-flex shrink-0 items-center gap-2 font-semibold text-brand-600">
              View all projects
              <Icon name="arrow" className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
          <ProjectsShowcase projects={projects.slice(0, 3)} />
        </div>
      </section>

      <Testimonials />
      <CTASection />
    </>
  );
}
