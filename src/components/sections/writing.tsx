import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Section } from "@/components/section";
import { Reveal } from "@/components/reveal";
import { formatZennDate, getZennArticles } from "@/lib/zenn";

/** トップに出す記事の件数（続きは /blog へ） */
const PREVIEW_COUNT = 4;

export async function Writing() {
  const articles = (await getZennArticles()).slice(0, PREVIEW_COUNT);

  // Zennの取得に失敗したときはセクションごと出さない
  if (articles.length === 0) return null;

  return (
    <Section
      id="writing"
      eyebrow="// Writing"
      title="執筆"
      description="学んだことは Zenn で技術記事や本にまとめています。"
    >
      <ul className="border-t border-border">
        {articles.map((article, i) => (
          <li key={article.id} className="border-b border-border">
            <Reveal delay={i * 50}>
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 py-4"
              >
                <span className="text-xl" aria-hidden>
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

      <Reveal className="mt-8">
        <Link href="/blog" className="btn-secondary">
          記事と本をすべて見る
        </Link>
      </Reveal>
    </Section>
  );
}
