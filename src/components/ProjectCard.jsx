import Image from "next/image";
import Link from "next/link";
import Icon from "./Icon";

export default function ProjectCard({ project, priority = false }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group relative block aspect-[4/5] overflow-hidden rounded-3xl bg-ink"
    >
      <Image
        src={project.image}
        alt={project.title}
        fill
        priority={priority}
        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent opacity-90 transition-opacity group-hover:opacity-100" />

      <div className="absolute left-5 top-5 flex gap-2">
        <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-medium text-white backdrop-blur">
          {project.category}
        </span>
        <span
          className={`rounded-full px-3 py-1 text-xs font-medium backdrop-blur ${
            project.status === "Ongoing" ? "bg-brand-500/90 text-white" : "bg-white/90 text-ink"
          }`}
        >
          {project.status}
        </span>
      </div>

      <div className="absolute inset-x-0 bottom-0 p-6 text-white">
        <p className="flex items-center gap-1.5 text-sm text-white/70">
          <Icon name="pin" className="h-4 w-4" />
          {project.location}
        </p>
        <h3 className="mt-1 font-display text-2xl font-semibold">{project.title}</h3>
        <div className="grid grid-rows-[0fr] transition-all duration-500 group-hover:grid-rows-[1fr]">
          <div className="overflow-hidden">
            <p className="pt-3 text-sm text-white/75">
              {[project.bedrooms && `${project.bedrooms} bedrooms`, project.size, project.year].filter(Boolean).join(" · ")}
            </p>
            <span className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-brand-300">
              View project <Icon name="arrow" className="h-4 w-4" />
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
