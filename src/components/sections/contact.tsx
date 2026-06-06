import { Mail } from "lucide-react";
import { Section } from "@/components/section";
import { Reveal } from "@/components/reveal";
import { SocialLinks } from "@/components/social-links";
import { siteConfig } from "@/config/site";

export function Contact() {
  return (
    <Section id="contact" eyebrow="// Contact" title="お問い合わせ">
      <Reveal>
        <div className="rounded-2xl border border-border bg-surface px-6 py-12 text-center sm:px-12 sm:py-16">
          <h3 className="text-2xl font-semibold tracking-tight">
            気軽にご連絡ください
          </h3>
          <p className="mx-auto mt-3 max-w-md leading-relaxed text-muted">
            制作のご相談、インターンや共同開発のお誘いなど、お待ちしています。
          </p>
          <div className="mt-8 flex justify-center">
            <a href={`mailto:${siteConfig.links.email}`} className="btn-primary">
              <Mail className="size-4" />
              メールを送る
            </a>
          </div>
          <div className="mt-8 flex justify-center">
            <SocialLinks />
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
