import { siteConfig } from "@/config/site";

// Zenn の zenn.dev/<username> URL からユーザー名を取り出す
const ZENN_USERNAME =
  siteConfig.links.zenn.split("/").filter(Boolean).pop() ?? "";

export type ZennArticle = {
  id: number;
  title: string;
  slug: string;
  emoji: string;
  articleType: "tech" | "idea";
  likedCount: number;
  /** ISO 8601 文字列 */
  publishedAt: string;
  /** Zenn 記事の絶対URL */
  url: string;
};

export type ZennBook = {
  id: number;
  title: string;
  likedCount: number;
  /** ISO 8601 文字列 */
  publishedAt: string;
  coverImageUrl: string | null;
  /** Zenn 本の絶対URL */
  url: string;
};

type ZennApiArticle = {
  id: number;
  title: string;
  slug: string;
  emoji: string;
  article_type: "tech" | "idea";
  liked_count: number;
  published_at: string;
  path: string;
};

type ZennApiBook = {
  id: number;
  title: string;
  liked_count: number;
  published_at: string;
  cover_image_url: string | null;
  path: string;
};

/**
 * Zenn の非公式 API から公開記事を新しい順で取得する。
 * 1時間ごとに再検証（Zennで書けば再デプロイなしで反映される）。
 * 取得失敗時は空配列を返す。
 */
export async function getZennArticles(): Promise<ZennArticle[]> {
  if (!ZENN_USERNAME) return [];

  try {
    const res = await fetch(
      `https://zenn.dev/api/articles?username=${ZENN_USERNAME}&order=latest`,
      { next: { revalidate: 3600 } }
    );
    if (!res.ok) return [];

    const data = (await res.json()) as { articles: ZennApiArticle[] };
    return data.articles.map((a) => ({
      id: a.id,
      title: a.title,
      slug: a.slug,
      emoji: a.emoji,
      articleType: a.article_type,
      likedCount: a.liked_count,
      publishedAt: a.published_at,
      url: `https://zenn.dev${a.path}`,
    }));
  } catch {
    return [];
  }
}

/**
 * Zenn の非公式 API から公開している本を新しい順で取得する。
 * 1時間ごとに再検証。取得失敗時は空配列を返す。
 */
export async function getZennBooks(): Promise<ZennBook[]> {
  if (!ZENN_USERNAME) return [];

  try {
    const res = await fetch(
      `https://zenn.dev/api/books?username=${ZENN_USERNAME}&order=latest`,
      { next: { revalidate: 3600 } }
    );
    if (!res.ok) return [];

    const data = (await res.json()) as { books: ZennApiBook[] };
    return data.books.map((b) => ({
      id: b.id,
      title: b.title,
      likedCount: b.liked_count,
      publishedAt: b.published_at,
      coverImageUrl: b.cover_image_url,
      url: `https://zenn.dev${b.path}`,
    }));
  } catch {
    return [];
  }
}
