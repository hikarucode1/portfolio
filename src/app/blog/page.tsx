import type { Metadata } from "next";
import { ArrowUpRight, BookOpen } from "lucide-react";
import { Container } from "@/components/container";
import { Reveal } from "@/components/reveal";
import { getZennArticles, getZennBooks } from "@/lib/zenn";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Blog",
  description: "Zennで技術記事や本を執筆しています。",
};

// Zenn API を1時間ごとに再取得（lib/zenn.ts の revalidate に追従）
export const revalidate = 3600;

function formatZennDate(iso: string): string {
  // published_at は "2026-05-21T..." 形式。先頭の日付部分だけ使う（TZ非依存）
  return iso.slice(0, 10).replace(/-/g, ".");
}

export default async function BlogPage() {
  const [articles, books] = await Promise.all([
    getZennArticles(),
    getZennBooks(),
  ]);

  return (
    <Container className="py-20 sm:py-28">
      <header className="mb-12 max-w-2xl">
        <p className="mb-3 font-mono text-sm text-accent">{"// Blog"}</p>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">ブログ</h1>
        <p className="mt-4 leading-relaxed text-muted">
          <a
            href={siteConfig.links.zenn}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline"
          >
            Zenn
          </a>
          {" "}で技術記事や本を執筆しています。
        </p>
      </header>

      {/* Books */}
      {books.length > 0 && (
        <section className="mb-16">
          <h2 className="mb-5 font-mono text-sm text-accent">{"// Books"}</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {books.map((book, i) => (
              <Reveal key={book.id} delay={i * 60} className="h-full">
                <a
                  href={book.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-full gap-4 rounded-xl border border-border bg-surface p-5 transition-colors hover:border-accent/50"
                >
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    <BookOpen className="size-6" />
                  </div>
                  <div className="flex min-w-0 flex-1 flex-col">
                    <h3 className="font-medium leading-snug tracking-tight transition-colors group-hover:text-accent">
                      {book.title}
                    </h3>
                    <div className="mt-2 flex items-center gap-2.5 font-mono text-xs text-muted">
                      <span>{formatZennDate(book.publishedAt)}</span>
                      {book.likedCount > 0 && <span>♥ {book.likedCount}</span>}
                      <span className="rounded-full border border-border px-2 py-0.5">
                        BOOK
                      </span>
                    </div>
                  </div>
                  <ArrowUpRight className="size-4 shrink-0 text-muted transition-colors group-hover:text-accent" />
                </a>
              </Reveal>
            ))}
          </div>
        </section>
      )}

      {/* Articles */}
      <section>
        {books.length > 0 && (
          <h2 className="mb-5 font-mono text-sm text-accent">{"// Articles"}</h2>
        )}
        {articles.length === 0 ? (
          <p className="text-muted">
            記事を読み込めませんでした。
            <a
              href={siteConfig.links.zenn}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-1 text-accent hover:underline"
            >
              Zennで見る
            </a>
          </p>
        ) : (
          <ul className="border-t border-border">
            {articles.map((article, i) => (
              <li key={article.id} className="border-b border-border">
                <Reveal delay={i * 50}>
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 py-5"
                  >
                    <span className="text-2xl" aria-hidden>
                      {article.emoji}
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1">
                        <time
                          dateTime={article.publishedAt}
                          className="font-mono text-xs text-muted"
                        >
                          {formatZennDate(article.publishedAt)}
                        </time>
                        <span className="rounded-full border border-border px-2 py-0.5 font-mono text-[10px] uppercase text-muted">
                          {article.articleType}
                        </span>
                        {article.likedCount > 0 && (
                          <span className="font-mono text-xs text-muted">
                            ♥ {article.likedCount}
                          </span>
                        )}
                      </div>
                      <h3 className="mt-1 font-medium tracking-tight transition-colors group-hover:text-accent">
                        {article.title}
                      </h3>
                    </div>
                    <ArrowUpRight className="size-4 shrink-0 text-muted transition-colors group-hover:text-accent" />
                  </a>
                </Reveal>
              </li>
            ))}
          </ul>
        )}
      </section>

      <p className="mt-10 text-sm text-muted">
        記事・本はすべて{" "}
        <a
          href={siteConfig.links.zenn}
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent hover:underline"
        >
          Zenn
        </a>
        {" "}で公開しています。
      </p>
    </Container>
  );
}
