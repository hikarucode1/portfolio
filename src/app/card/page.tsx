import type { Metadata } from "next";
import Link from "next/link";
import QRCode from "qrcode";
import { ArrowRight, Download, Mail } from "lucide-react";
import { GitHubIcon, XIcon, ZennIcon } from "@/components/icons";
import { Container } from "@/components/container";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Digital Card",
  description: `${siteConfig.name}（@${siteConfig.handle}）の電子名刺。連絡先の保存・SNS・ポートフォリオへ。`,
};

const socials = [
  { label: "GitHub", href: siteConfig.links.github, Icon: GitHubIcon },
  { label: "Zenn", href: siteConfig.links.zenn, Icon: ZennIcon },
  { label: "X", href: siteConfig.links.x, Icon: XIcon },
  { label: "Email", href: `mailto:${siteConfig.links.email}`, Icon: Mail },
];

export default async function CardPage() {
  const cardUrl = `${siteConfig.url}/card`;
  const qrSvg = await QRCode.toString(cardUrl, {
    type: "svg",
    margin: 1,
    width: 168,
    color: { dark: "#0a0a0a", light: "#ffffff" },
  });

  return (
    <Container className="flex min-h-[calc(100dvh-4rem)] flex-col items-center justify-center py-12">
      <div className="w-full max-w-sm rounded-2xl border border-border bg-surface p-8 text-center">
        <p className="font-mono text-sm text-accent">
          {"// "}
          {siteConfig.role}
        </p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight">
          {siteConfig.name}
        </h1>
        <p className="mt-1.5 font-mono text-sm text-muted">
          @{siteConfig.handle}
        </p>
        <p className="mt-4 text-sm leading-relaxed text-muted">
          {siteConfig.tagline}
        </p>

        <a href="/api/vcard" download className="btn-primary mt-8 w-full">
          <Download className="size-4" />
          連絡先を保存
        </a>

        <div className="mt-5 flex items-center justify-center gap-2">
          {socials.map(({ label, href, Icon }) => {
            const external = href.startsWith("http");
            return (
              <a
                key={label}
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                aria-label={label}
                className="inline-flex size-11 items-center justify-center rounded-full border border-border text-muted transition-colors hover:bg-elevated hover:text-foreground"
              >
                <Icon className="size-5" />
              </a>
            );
          })}
        </div>

        <Link href="/" className="btn-secondary mt-5 w-full">
          ポートフォリオを見る
          <ArrowRight className="size-4" />
        </Link>

        <div className="mt-8 border-t border-border pt-6">
          <div
            className="mx-auto w-fit rounded-xl bg-white p-3"
            // QRコードは qrcode ライブラリが生成した安全な静的SVG
            dangerouslySetInnerHTML={{ __html: qrSvg }}
          />
          <p className="mt-3 text-xs text-muted">
            カードをかざすか、QRコードで開けます
          </p>
        </div>
      </div>
    </Container>
  );
}
