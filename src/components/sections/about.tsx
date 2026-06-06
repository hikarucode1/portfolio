import { Section } from "@/components/section";
import { Reveal } from "@/components/reveal";
import { bio, skills } from "@/data/profile";

export function About() {
  return (
    <Section id="about" eyebrow="// About" title="自己紹介">
      <div className="grid gap-12 md:grid-cols-5">
        <Reveal className="space-y-4 md:col-span-3">
          {bio.map((paragraph, i) => (
            <p key={i} className="leading-relaxed text-foreground/90">
              {paragraph}
            </p>
          ))}
        </Reveal>

        <Reveal className="space-y-6 md:col-span-2" delay={120}>
          {skills.map((group) => (
            <div key={group.category}>
              <h3 className="mb-2.5 font-mono text-sm text-accent">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-md border border-border bg-surface px-2.5 py-1 text-sm text-muted"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </Section>
  );
}
