// =====================================================================
// プロジェクト（制作物）一覧。
// GitHubリポジトリ（github.com/hikarucode1）の情報を反映しています。
// ▼ 新しいプロジェクトはこの配列に追記するだけでカードが増えます。
//   category で「研究 / 個人開発」のグループに振り分けられます。
// =====================================================================

export type ProjectLink = {
  label: string;
  href: string;
};

export type Project = {
  /** URLやkeyに使う一意のスラッグ */
  slug: string;
  title: string;
  /** カードに出す一言 */
  tagline: string;
  /** 数文の説明 */
  description: string;
  /** 期間（例: "2025 – 現在"） */
  period: string;
  /** 進行状況 */
  status: "ongoing" | "wip" | "done";
  /** 区分: 研究 or 個人開発 */
  category: "research" | "personal";
  /** 技術タグ */
  tags: string[];
  /** 箇条書きのハイライト */
  highlights?: string[];
  /** 外部リンク（リポジトリ・デモ・記事など） */
  links?: ProjectLink[];
  /** グループ内で大きく扱うか */
  featured?: boolean;
};

export const projects: Project[] = [
  // ── 研究 ───────────────────────────────────────────
  {
    slug: "schc-lorawan",
    title: "SCHC × LoRaWAN 軽量化・優先制御",
    tagline: "RFC 8724 で LoRaWAN 通信をもっと軽く、賢く",
    description:
      "SCHC（RFC 8724）をベースに LoRaWAN の通信を圧縮・軽量化し、さらに優先度制御を加えて限られた帯域を有効活用する卒業研究。UDP通信に限定し、IM920 モジュールの実機で評価しています。",
    period: "2025 – 現在",
    status: "ongoing",
    category: "research",
    tags: ["LoRaWAN", "SCHC", "IoT", "組み込み", "ネットワーク"],
    highlights: [
      "RFC 8724 (SCHC) によるヘッダ圧縮で通信量を削減",
      "優先度制御で重要なパケットを優先的に送信",
      "IM920 実機 + UDP による実証評価",
    ],
    links: [
      // TODO: 論文 / スライド / リポジトリのURLがあれば追加
    ],
    featured: true,
  },

  // ── 個人開発 ─────────────────────────────────────────
  {
    slug: "shift-manager",
    title: "shift-manager — 塾シフト管理システム",
    tagline: "講師と教室長のためのシフト登録・確定Webアプリ",
    description:
      "個別指導塾向けのシフト管理システム。講師は固定シフトや講習期間の希望提出・交代申請ができ、教室長は希望の俯瞰や確定シフトCSVの公開・申請承認を行えます。スマホ / PC 両対応。",
    period: "2026",
    status: "ongoing",
    category: "personal",
    tags: ["Next.js", "TypeScript", "Supabase", "Drizzle ORM", "Tailwind CSS"],
    highlights: [
      "講師・教室長の2ロールに対応した希望提出〜確定フロー",
      "確定シフトのCSV取り込み（文字コード変換対応）と公開",
      "Supabase（Auth / Storage / Postgres）+ Drizzle ORM",
    ],
    links: [
      { label: "Live Demo", href: "https://shift-manager.vercel.app" },
      { label: "GitHub", href: "https://github.com/hikarucode1/shift-manager" },
    ],
    featured: true,
  },
  {
    slug: "mirror-council",
    title: "トリアージュ",
    tagline: "3賢者AIが肌を診断し、ケアの優先順位を導く",
    description:
      "カメラに映った顔をAIが解析し、西洋・内科・東洋それぞれの視点を持つ3人の専門家エージェントが議論。統合エージェントが優先度付きのアクションプランにまとめます。Zenn Fes Spring 2026 / YouCam APIコンテスト応募作品。",
    period: "2026",
    status: "wip",
    category: "personal",
    tags: ["マルチエージェント", "Next.js", "TypeScript", "YouCam API", "AWS S3"],
    highlights: [
      "Dr. Western / Dr. Internal / Master Toyo の3エージェントが異なる視点で議論",
      "YouCam Skin Analysis HD で肌を解析し、SSEでリアルタイムな会議UIを実現",
      "Zenn Fes Spring 2026 — 最優秀賞・ビューティテック賞のダブル受賞を狙う",
    ],
    links: [
      {
        label: "Zenn Fes 応募ページ",
        href: "https://zenn.dev/contests/zennfes-spring-2026-perfect",
      },
      // リポジトリは現在 private。公開時に GitHub リンクを追加してください。
    ],
    featured: true,
  },
  {
    slug: "submil",
    title: "サブミル (submil)",
    tagline: "大学生のためのサブスク見直しiOSアプリ",
    description:
      "手入力でサブスクを棚卸しし、不要なものを発見、解約・乗り換え（学割）をサポートする大学生向けiOSアプリ。SwiftUI + SwiftData で開発しています。",
    period: "2026",
    status: "wip",
    category: "personal",
    tags: ["Swift", "SwiftUI", "SwiftData", "iOS"],
    highlights: [
      "サブスク一覧と月額 / 年額合計の可視化",
      "「これ要る?」評価フローで不要なサブスクを発見",
      "年間節約額のOGP画像シェア機能",
    ],
    links: [{ label: "GitHub", href: "https://github.com/hikarucode1/submil" }],
    featured: false,
  },
  {
    slug: "raspi-grove",
    title: "raspi_grove — IoTセンサー計測",
    tagline: "Raspberry Pi × Grove でセンサー値を取得",
    description:
      "Raspberry Pi と Grove Beginner Kit for Arduino を使い、温度・湿度・気圧などのセンサー値を取得・保存するプロジェクト。Python（pyserial）でシリアル通信し、ローカル保存やクラウド送信に利用します。",
    period: "2025",
    status: "done",
    category: "personal",
    tags: ["Python", "Raspberry Pi", "IoT", "センサー"],
    highlights: [
      "Grove Beginner Kit から温度・湿度・気圧を計測",
      "Python（pyserial）でシリアル通信・CSV保存",
    ],
    links: [
      { label: "GitHub", href: "https://github.com/hikarucode1/raspi_grove" },
    ],
    featured: false,
  },
  {
    slug: "portfolio",
    title: "ポートフォリオサイト",
    tagline: "Next.js 16 で構築した自分の拠点",
    description:
      "Next.js（App Router）+ TypeScript + Tailwind CSS で構築した本サイト。Zenn連携のブログ、ダーク/ライトモード対応。Vercel でホスティングしています。",
    period: "2026",
    status: "done",
    category: "personal",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    links: [
      { label: "GitHub", href: "https://github.com/hikarucode1/portfolio" }, // ★要確認: push後に確定
    ],
    featured: false,
  },
];
