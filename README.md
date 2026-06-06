# hikarucode1 — Portfolio

情報系の学生エンジニア Hikaru のポートフォリオ兼ブログ。

## 技術スタック

- **Next.js 16** (App Router) / **React 19** / **TypeScript**
- **Tailwind CSS v4**（CSS-firstのデザイントークン）
- **MDX**（`next-mdx-remote`）によるブログ
- **next-themes**（ダーク / ライトモード）
- 動的OGP画像（`next/og`）、sitemap、robots
- **Vercel** ホスティング

## 開発

前提: Node.js 20+ / pnpm

```bash
pnpm install
pnpm dev      # http://localhost:3000
pnpm build    # 本番ビルド
pnpm lint     # ESLint
```

## カスタマイズ（ここを編集）

| 内容 | ファイル |
| --- | --- |
| 名前・肩書き・SNS・公開URL | `src/config/site.ts` |
| 自己紹介・スキル | `src/data/profile.ts` |
| プロジェクト（制作物） | `src/data/projects.ts` |
| ブログ記事 | `content/posts/*.mdx` |
| 配色・フォント | `src/app/globals.css` |

### ブログ記事の追加

`content/posts/` に `.mdx` ファイルを作成し、先頭にフロントマターを記述します。

```mdx
---
title: "記事タイトル"
description: "記事の概要"
date: "2026-06-06"
tags: ["タグ1", "タグ2"]
---

ここから本文（Markdown / MDX）。
```

ファイルを置くだけで一覧（`/blog`）と個別ページ（`/blog/<ファイル名>`）が自動生成されます。

## ⚠️ 公開前に要確認

以下はドラフト値です。ソース内を **`★要確認`** で検索し、ご自身の情報に置き換えてください。

- 表示名（`src/config/site.ts` の `name` = `"Hikaru"`）
- 公開URL（`src/config/site.ts` の `url`）
- SNSリンク（GitHub / Zenn / X のURL）
- スキル一覧（`src/data/profile.ts` — 推測ベース）
- 各プロジェクトのリンク（リポジトリ / デモ / 記事URL）

## Vercel へのデプロイ

1. GitHub にリポジトリを作成して push
2. [vercel.com](https://vercel.com) で **New Project** → リポジトリを import
3. フレームワークは **Next.js** として自動検出されるので、そのまま **Deploy**
4. 発行されたドメインを `src/config/site.ts` の `url` に反映して再デプロイ（OGP・sitemapが正しいURLになります）

---

Built with Next.js. © 2026 Hikaru.
