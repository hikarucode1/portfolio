import Link from "next/link";
import { Container } from "@/components/container";
import { SocialLinks } from "@/components/social-links";
import { siteConfig } from "@/config/site";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden border-b border-border">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-dot-grid opacity-70 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_35%,#000,transparent)]"
      />
      <Container className="flex min-h-[calc(100dvh-4rem)] flex-col justify-center py-20">
        <p className="mb-5 font-mono text-sm text-accent">
          {"// "}
          {siteConfig.role}
        </p>

        <h1 className="max-w-4xl text-balance text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
          {siteConfig.name}
        </h1>

        <p className="mt-6 max-w-2xl text-balance text-lg leading-relaxed text-muted sm:text-xl">
          {siteConfig.tagline}
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <Link href="/#projects" className="btn-primary">
            制作物を見る
          </Link>
          <Link href="/#contact" className="btn-secondary">
            連絡する
          </Link>
        </div>

        <div className="mt-12">
          <SocialLinks className="-ml-2" />
        </div>
      </Container>
    </section>
  );
}
