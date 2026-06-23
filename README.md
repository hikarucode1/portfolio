# hikarucode1 — Portfolio

情報系の学生エンジニア Hikaru（渡邊光 / Hikaru Watanabe）のポートフォリオ兼ブログ。

🔗 **公開中**: https://hikarucode1.vercel.app

## 技術スタック

- **Next.js 16** (App Router) / **React 19** / **TypeScript**
- **Tailwind CSS v4**（CSS-firstのデザイントークン）+ `@tailwindcss/typography`
- **next-themes**（ダーク / ライトモード）
- **lucide-react**（アイコン）
- ブログは **Zenn 連携**（Zennの公開記事・本を API から自動取得）
- 電子名刺の **QRコード生成（`qrcode`）** と **vCard 配信**
- 動的OGP画像（`next/og`）、sitemap、robots
- **Vercel** ホスティング

## 主なページ

| ルート | 内容 |
| --- | --- |
| `/` | トップ（Hero / About / Projects / Contact） |
| `/blog` | Zennの記事・本の一覧（1時間ごとに再取得） |
| `/card` | 電子名刺。連絡先（`.vcf`）ダウンロードとQRコード |
| `/api/vcard` | vCard 3.0（連絡先）を配信 |

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
| 名前・ハンドル・肩書き・SNS・公開URL | `src/config/site.ts` |
| 自己紹介・スキル | `src/data/profile.ts` |
| プロジェクト（制作物） | `src/data/projects.ts` |
| 配色・フォント | `src/app/globals.css` |

### ブログ記事の追加

ブログは `src/config/site.ts` の `links.zenn` で指定した **Zenn アカウント**から記事・本を取得して表示します（`src/lib/zenn.ts`）。**Zenn に記事を書けば、再デプロイなしで約1時間以内に `/blog` へ反映**されます。リポジトリ側で Markdown を追加する必要はありません。

別のアカウントに切り替えるときは `links.zenn` を変更してください。

## Vercel へのデプロイ

本サイトは Vercel で公開済みです。フォークして自分用に立てる場合:

1. GitHub にリポジトリを作成して push
2. [vercel.com](https://vercel.com) で **New Project** → リポジトリを import
3. フレームワークは **Next.js** として自動検出されるので、そのまま **Deploy**
4. 発行されたドメインを `src/config/site.ts` の `url` に反映して再デプロイ（OGP・sitemapが正しいURLになります）

---

Built with Next.js. © 2026 Hikaru.
