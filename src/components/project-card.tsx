import { ArrowUpRight, Award } from "lucide-react";
import type { Project } from "@/data/projects";
import { cn } from "@/lib/utils";

const statusLabel: Record<Project["status"], string> = {
  ongoing: "進行中",
  wip: "開発中",
  done: "完成",
};

/** 進行中のものは accent、完成したものは控えめに */
const statusTone: Record<Project["status"], string> = {
  ongoing: "text-accent",
  wip: "text-accent",
  done: "text-muted",
};

type ProjectCardProps = {
  project: Project;
  /** featured は大きく詳しく、compact は一覧向けに簡潔に */
  variant?: "featured" | "compact";
};

export function ProjectCard({
  project,
  variant = "compact",
}: ProjectCardProps) {
  const isFeatured = variant === "featured";

  return (
    <article
      className={cn(
        "group flex h-full flex-col rounded-xl border border-border bg-elevated transition-colors hover:border-accent/50",
        isFeatured ? "p-6 sm:p-8" : "p-6"
      )}
    >
      <div className="mb-4 flex flex-wrap items-center gap-x-3 gap-y-2">
        <span
          className={cn(
            "inline-flex items-center gap-1.5 font-mono text-xs",
            statusTone[project.status]
          )}
        >
          <span className="size-1.5 rounded-full bg-current" />
          {statusLabel[project.status]}
        </span>
        <span className="font-mono text-xs text-muted">{project.period}</span>

        {project.awards?.map((award) => (
          <span
            key={award}
            className="inline-flex items-center gap-1.5 rounded-full border border-accent/40 bg-accent/10 px-2.5 py-0.5 text-xs font-medium text-accent"
          >
            <Award className="size-3.5" />
            {award}
          </span>
        ))}
      </div>

      <h3
        className={cn(
          "font-semibold tracking-tight",
          isFeatured ? "text-xl sm:text-2xl" : "text-lg"
        )}
      >
        {project.title}
      </h3>
      <p className="mt-1 text-sm text-muted">{project.tagline}</p>
      <p className="mt-4 text-sm leading-relaxed text-foreground/80">
        {project.description}
      </p>

      {/* ハイライトは featured のみ。一覧が縦に伸びすぎないようにする */}
      {isFeatured && project.highlights && project.highlights.length > 0 && (
        <ul className="mt-5 space-y-1.5">
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
