import { Container } from "@/components/container";
import { Reveal } from "@/components/reveal";
import { cn } from "@/lib/utils";

type SectionProps = {
  id?: string;
  /** 見出しの上に出る小さなラベル（mono体・accent色） */
  eyebrow?: string;
  title?: string;
  description?: string;
  className?: string;
  children: React.ReactNode;
};

export function Section({
  id,
  eyebrow,
  title,
  description,
  className,
  children,
}: SectionProps) {
  return (
    <section id={id} className={cn("scroll-mt-20 py-20 sm:py-28", className)}>
      <Container>
        {(eyebrow || title || description) && (
          <Reveal className="mb-12 max-w-2xl">
            {eyebrow && (
              <p className="mb-3 font-mono text-sm text-accent">{eyebrow}</p>
            )}
            {title && (
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                {title}
              </h2>
            )}
            {description && (
              <p className="mt-4 leading-relaxed text-muted">{description}</p>
            )}
          </Reveal>
        )}
        {children}
      </Container>
    </section>
  );
}
