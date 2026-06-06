import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";

const statusLabel: Record<Project["status"], string> = {
  ongoing: "進行中",
  wip: "開発中",
  done: "完成",
};

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group flex h-full flex-col rounded-xl border border-border bg-elevated p-6 transition-colors hover:border-accent/50 sm:p-7">
      <div className="mb-4 flex items-center gap-3">
        <span className="inline-flex items-center gap-1.5 font-mono text-xs text-accent">
          <span className="size-1.5 rounded-full bg-accent" />
          {statusLabel[project.status]}
        </span>
        <span className="font-mono text-xs text-muted">{project.period}</span>
      </div>

      <h3 className="text-xl font-semibold tracking-tight">{project.title}</h3>
      <p className="mt-1 text-sm text-muted">{project.tagline}</p>
      <p className="mt-4 text-sm leading-relaxed text-foreground/80">
        {project.description}
      </p>

      {project.highlights && project.highlights.length > 0 && (
        <ul className="mt-4 space-y-1.5">
          {project.highlights.map((h) => (
            <li key={h} className="flex gap-2.5 text-sm text-muted">
              <span className="mt-[7px] size-1 shrink-0 rounded-full bg-accent" />
              <span className="leading-relaxed">{h}</span>
            </li>
          ))}
        </ul>
      )}

      <div className="mt-5 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-border px-2.5 py-0.5 font-mono text-xs text-muted"
          >
            {tag}
          </span>
        ))}
      </div>

      {project.links && project.links.length > 0 && (
        <div className="mt-auto flex flex-wrap gap-4 border-t border-border pt-4">
          {project.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm font-medium text-foreground transition-colors hover:text-accent"
            >
              {link.label}
              <ArrowUpRight className="size-3.5" />
            </a>
          ))}
        </div>
      )}
    </article>
  );
}
