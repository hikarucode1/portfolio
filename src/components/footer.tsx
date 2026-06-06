import { Container } from "@/components/container";
import { SocialLinks } from "@/components/social-links";
import { siteConfig } from "@/config/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <Container className="flex flex-col items-center justify-between gap-6 py-10 sm:flex-row">
        <div className="text-center sm:text-left">
          <p className="font-mono text-sm font-semibold">
            {siteConfig.handle}
            <span className="text-accent">.</span>
          </p>
          <p className="mt-1 text-sm text-muted">
            © {year} {siteConfig.name}. Built with Next.js.
          </p>
        </div>
        <SocialLinks />
      </Container>
    </footer>
  );
}
