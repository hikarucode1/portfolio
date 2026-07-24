// =====================================================================
// サイト全体の設定。
// =====================================================================

export const siteConfig = {
  /** 表示名（Heroなどに大きく出ます） */
  name: "Hikaru",
  /** ハンドルネーム */
  handle: "hikarucode1",
  /** 肩書き */
  role: "Student Engineer",
  /** SEO用の説明文 */
  description:
    "情報系の学生エンジニア Hikaru のポートフォリオ。IoT（LoRaWAN / SCHC）と AI（マルチエージェント）を中心に、制作物・ブログをまとめています。",
  /** 公開URL（OGPやsitemapに使用） */
  url: "https://hikarucode1.vercel.app",
  /** 拠点 */
  location: "Japan",

  // SNS / 連絡先 ----------------------------------------------------
  links: {
    email: "hikaruken0126@gmail.com",
    github: "https://github.com/hikarucode1",
    zenn: "https://zenn.dev/kenya0126",
    x: "https://x.com/hikacode",
  },

  // ヘッダーナビ -----------------------------------------------------
  nav: [
    { label: "About", href: "/#about" },
    { label: "Projects", href: "/#projects" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/#contact" },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
