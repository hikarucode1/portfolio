// =====================================================================
// プロジェクト（制作物）一覧。
// GitHubリポジトリ（github.com/hikarucode1）の情報を反映しています。
// ▼ 新しいプロジェクトはこの配列に追記するだけでカードが増えます。
//   category で「研究 / 個人開発」のグループに振り分けられます。
//   featured: true のものは一覧で大きく表示されます。
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
  /** 受賞歴（カード上部にバッジで出ます） */
  awards?: string[];
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
    tags: ["LoRaWAN", "SCHC", "IoT", "組み込み", "ネットワーク", "Python"],
    highlights: [
      "RFC 8724 (SCHC) によるヘッダ圧縮で通信量を削減",
      "優先度制御で重要なパケットを優先的に送信",
      "通常UDPの観測 → モジュール特性の測定 → SCHC実装の評価、と段階を踏んで実機検証",
      "最小構成・本実装・動的コンテキスト管理の3系統を IM920 実機で動作実証",
    ],
    links: [
      // 中間発表（2026-09-15）以降に、スライド / 論文 / リポジトリのURLを追加予定
    ],
    featured: true,
  },

  // ── 個人開発 ─────────────────────────────────────────
  {
    slug: "shift-manager",
    title: "shift-manager — 塾シフト管理システム",
    tagline: "講師と教室長のためのシフト登録・確定Webアプリ",
    description:
      "個別指導塾向けのシフト管理システム。講師は固定シフトや講習期間の希望提出・交代申請ができ、教室長は希望の俯瞰や確定シフトCSVの公開・申請承認を行えます。講師UIはスマホファースト、管理者UIはPC前提で作り分けています。",
    period: "2026 – 現在",
    status: "ongoing",
    category: "personal",
    tags: [
      "Next.js",
      "TypeScript",
      "Supabase",
      "Drizzle ORM",
      "Tailwind CSS",
      "Vitest",
    ],
    highlights: [
      "講師・教室長の2ロールに対応した希望提出〜承認〜確定フロー",
      "確定シフトのCSV取り込み（文字コード変換対応）と公開",
      "申請結果や確定シフトの公開をアプリ内通知でお知らせ",
      "新しい期の希望提出では前期のパターンをプリフィルして入力を省力化",
      "Supabase（Auth / Postgres）+ Drizzle ORM、RLSポリシーは自動テストで検査",
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
      "カメラに映った顔をAIが解析し、西洋・内科・東洋それぞれの視点を持つ3人の専門家エージェントが議論。統合エージェントが優先度付きのアクションプランにまとめます。Zenn Fes Spring 2026 / YouCam APIコンテストの受賞作品です。",
    period: "2026",
    status: "done",
    category: "personal",
    tags: [
      "マルチエージェント",
      "Next.js",
      "TypeScript",
      "YouCam API",
      "AWS S3",
    ],
    // ★ 賞名が確定したら「Zenn Fes Spring 2026 最優秀賞」のように具体名へ更新してください
    awards: ["Zenn Fes Spring 2026 受賞"],
    highlights: [
      "Dr. Western / Dr. Internal / Master Toyo の3エージェントが異なる視点で議論",
      "YouCam Skin Analysis HD で肌を解析し、SSEでリアルタイムな会議UIを実現",
      "議論の設計と実装の勘所を解説記事にまとめて公開",
    ],
    links: [
      {
        label: "解説記事",
        href: "https://zenn.dev/kenya0126/articles/triage-multiagent-mirror",
      },
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
      "手入力でサブスクを棚卸しし、不要なものを発見、解約・乗り換え（学割）をサポートする大学生向けiOSアプリ。SwiftUI + SwiftData で開発しており、現在は App Store リリースに向けて配信の準備を進めています。",
    period: "2026 – 現在",
    status: "wip",
    category: "personal",
    tags: ["Swift", "SwiftUI", "SwiftData", "WidgetKit", "iOS"],
    highlights: [
      "サブスク一覧と月額 / 年額合計の可視化",
      "「これ要る?」評価フローで不要なサブスクを発見",
      "解約ガイドと学割プランの提案（コンテンツは配信サーバから取得しキャッシュ）",
      "ホーム画面ウィジェットと、年間節約額のOGP画像シェア機能",
    ],
    links: [{ label: "GitHub", href: "https://github.com/hikarucode1/submil" }],
    featured: false,
  },
  {
    slug: "zenn-books",
    title: "Zenn 技術書の執筆",
    tagline: "これから学ぶ人のための入門書を3冊公開",
    description:
      "インフラ・セキュリティ・エンジニアリング全般の入門書を Zenn で執筆・公開しています。自分がつまずいたところを起点に、前提知識を飛ばさず順番に積み上げる構成を意識しています。",
    period: "2026 – 現在",
    status: "ongoing",
    category: "personal",
    tags: ["技術書", "Zenn", "インフラ", "セキュリティ"],
    highlights: [
      "『新人エンジニアのための「本当に全部」入門』— コンピュータの土台からAI時代の開発まで全24章",
      "『駆け出しインフラエンジニアの教科書』",
      "『駆け出しセキュリティエンジニアの教科書』",
    ],
    links: [
      {
        label: "Zenn",
        href: "https://zenn.dev/kenya0126/books/engineer-basics",
      },
      {
        label: "GitHub",
        href: "https://github.com/hikarucode1/zenn-engineer-basics",
      },
    ],
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
      "Next.js（App Router）+ TypeScript + Tailwind CSS で構築した本サイト。Zenn連携のブログ、電子名刺（vCard / QRコード）、ダーク / ライトモードに対応しています。Vercel でホスティング。",
    period: "2026",
    status: "done",
    category: "personal",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    links: [
      { label: "GitHub", href: "https://github.com/hikarucode1/portfolio" },
    ],
    featured: false,
  },
];
