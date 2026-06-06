import { Mail } from "lucide-react";
import { GitHubIcon, XIcon, ZennIcon } from "@/components/icons";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

type IconType = React.ComponentType<{ className?: string }>;

const socials: { label: string; href: string; icon: IconType }[] = [
  { label: "GitHub", href: siteConfig.links.github, icon: GitHubIcon },
  { label: "Zenn", href: siteConfig.links.zenn, icon: ZennIcon },
  { label: "X", href: siteConfig.links.x, icon: XIcon },
  { label: "Email", href: `mailto:${siteConfig.links.email}`, icon: Mail },
];

export function SocialLinks({
  className,
  iconClassName,
}: {
  className?: string;
  iconClassName?: string;
}) {
  return (
    <div className={cn("flex items-center gap-1", className)}>
      {socials.map(({ label, href, icon: Icon }) => {
        const external = href.startsWith("http");
        return (
          <a
            key={label}
            href={href}
            target={external ? "_blank" : undefined}
            rel={external ? "noopener noreferrer" : undefined}
            aria-label={label}
            className="inline-flex size-9 items-center justify-center rounded-md text-muted transition-colors hover:bg-surface hover:text-foreground"
          >
            <Icon className={cn("size-[18px]", iconClassName)} />
          </a>
        );
      })}
    </div>
  );
}
