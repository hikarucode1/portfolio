"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Container } from "@/components/container";
import { ThemeToggle } from "@/components/theme-toggle";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

function Logo() {
  return (
    <Link
      href="/"
      className="font-mono text-base font-semibold tracking-tight"
      aria-label={`${siteConfig.handle} home`}
    >
      {siteConfig.handle}
      <span className="text-accent">.</span>
    </Link>
  );
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-colors duration-300",
        scrolled
          ? "border-border bg-background/80 backdrop-blur-md"
          : "border-transparent"
      )}
    >
      <Container className="flex h-16 items-center justify-between">
        <Logo />

        {/* デスクトップナビ */}
        <nav className="hidden items-center gap-1 sm:flex">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm text-muted transition-colors hover:bg-surface hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
          <span className="ml-2">
            <ThemeToggle />
          </span>
        </nav>

        {/* モバイル */}
        <div className="flex items-center gap-1 sm:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="メニューを開閉"
            aria-expanded={open}
            className="inline-flex size-9 items-center justify-center rounded-md border border-border text-muted transition-colors hover:bg-surface hover:text-foreground"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </Container>

      {/* モバイルメニュー */}
      {open && (
        <div className="border-t border-border bg-background sm:hidden">
          <Container className="flex flex-col py-2">
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-sm text-muted transition-colors hover:bg-surface hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </Container>
        </div>
      )}
    </header>
  );
}
