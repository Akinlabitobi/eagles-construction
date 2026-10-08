import { images, projects } from "@/lib/data";
import PageHeader from "@/components/PageHeader";
import ProjectsShowcase from "@/components/sections/ProjectsShowcase";
import SiteGallery from "@/components/sections/SiteGallery";
import CTASection from "@/components/sections/CTASection";

export const metadata = {
  title: "Projects",
  description: "Bungalows, duplexes, terraces, estates and luxury villas we've built across Nigeria.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        title="Our Projects"
        crumb="Projects"
        intro="Every home here was designed, approved and built by our team. Filter by type to explore."
        image={images.rooftop}
      />
      <section className="bg-white py-20 lg:py-28">
        <div className="container">
          <ProjectsShowcase projects={projects} showFilters />
        </div>
      </section>
      <SiteGallery />
      <CTASection />
    </>
  );
}
