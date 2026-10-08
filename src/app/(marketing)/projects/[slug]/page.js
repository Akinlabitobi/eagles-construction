import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/lib/data";
import Icon from "@/components/Icon";
import PageHeader from "@/components/PageHeader";
import ProjectCard from "@/components/ProjectCard";
import Reveal, { ClipReveal, StaggerGroup, StaggerItem } from "@/components/motion/Reveal";
import CTASection from "@/components/sections/CTASection";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return { title: project.title, description: project.summary };
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const facts = [
    { label: "Location", value: project.location },
    { label: "Type", value: project.category },
    { label: "Bedrooms", value: project.bedrooms },
    { label: "Size", value: project.size },
    { label: "Duration", value: project.duration },
    { label: "Status", value: `${project.status} · ${project.year}` },
  ].filter((f) => f.value);
  const related = projects.filter((p) => p.slug !== project.slug).slice(0, 3);

  return (
    <>
      <PageHeader title={project.title} crumb="Projects" intro={project.location} image={project.image} />

      <section className="bg-white py-20 lg:py-28">
        <div className="container grid gap-14 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <Reveal>
              <h2 className="font-display text-3xl font-bold">About this project</h2>
              <p className="mt-5 text-lg leading-relaxed text-ink-600">{project.summary}</p>
            </Reveal>
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {project.gallery.map((src, i) => (
                <ClipReveal key={src} className="relative aspect-[4/3] overflow-hidden rounded-3xl">
                  <Image src={src} alt={`${project.title} — photo ${i + 1}`} fill sizes="(min-width: 1024px) 30vw, 100vw" className="object-cover" />
                </ClipReveal>
              ))}
            </div>
          </div>

          <Reveal delay={0.2} className="lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-3xl bg-sand p-8">
              <h3 className="font-display text-xl font-semibold">Project details</h3>
              <dl className="mt-6 divide-y divide-ink/10">
                {facts.map((f) => (
                  <div key={f.label} className="flex justify-between gap-4 py-3.5 text-sm">
                    <dt className="text-ink-600">{f.label}</dt>
                    <dd className="text-right font-semibold">{f.value}</dd>
                  </div>
                ))}
              </dl>
              <Link
                href="/contact"
                className="group mt-8 flex items-center justify-center gap-2 rounded-full bg-brand-500 py-3.5 font-semibold text-white transition hover:bg-brand-600"
              >
                Build something similar
                <Icon name="arrow" className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-sand py-20 lg:py-28">
        <div className="container">
          <h2 className="font-display text-3xl font-bold">More projects</h2>
          <StaggerGroup className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p) => (
              <StaggerItem key={p.slug}>
                <ProjectCard project={p} />
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <CTASection />
    </>
  );
}
