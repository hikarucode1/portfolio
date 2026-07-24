import type { Project } from "@/data/projects";
import { Section } from "@/components/section";
import { Reveal } from "@/components/reveal";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/data/projects";
import { cn } from "@/lib/utils";

const research = projects.filter((p) => p.category === "research");
const personal = projects.filter((p) => p.category === "personal");

function GroupHeading({ ja, en }: { ja: string; en: string }) {
  return (
    <h3 className="mb-6 flex items-baseline gap-2.5 text-lg font-semibold tracking-tight">
      {ja}
      <span className="font-mono text-sm font-normal text-muted">/ {en}</span>
    </h3>
  );
}

/**
 * featured は詳しく（1件のときは横幅いっぱい）、それ以外は密なグリッドで簡潔に。
 */
function ProjectGroup({ items }: { items: Project[] }) {
  const featured = items.filter((p) => p.featured);
  const rest = items.filter((p) => !p.featured);

  return (
    <>
      {featured.length > 0 && (
        <div className="grid gap-6 sm:grid-cols-2">
          {featured.map((project, i) => (
            <Reveal
              key={project.slug}
              delay={i * 80}
              className={cn("h-full", featured.length === 1 && "sm:col-span-2")}
            >
              <ProjectCard project={project} variant="featured" />
            </Reveal>
          ))}
        </div>
      )}

      {rest.length > 0 && (
        <div
          className={cn(
            "grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
            featured.length > 0 && "mt-6"
          )}
        >
          {rest.map((project, i) => (
            <Reveal key={project.slug} delay={i * 80} className="h-full">
              <ProjectCard project={project} variant="compact" />
            </Reveal>
          ))}
        </div>
      )}
    </>
  );
}

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="// Projects"
      title="制作物"
      description="研究から個人開発まで、低レイヤの通信から AI 体験までを横断して形にしています。"
      className="border-y border-border bg-surface/40"
    >
      {research.length > 0 && (
        <div className="mb-14">
          <GroupHeading ja="研究" en="Research" />
          <ProjectGroup items={research} />
        </div>
      )}
      {personal.length > 0 && (
        <div>
          <GroupHeading ja="個人開発" en="Personal" />
          <ProjectGroup items={personal} />
        </div>
      )}
    </Section>
  );
}
