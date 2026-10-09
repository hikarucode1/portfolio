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
      "河川の水位見守りを想定し、緊急通知の優先度を Rule ID から引くことでデータ本体に追加バイトなしで優先送信",
      "2026年9月に中間発表を実施。現在は卒業論文に向けて比較測定と複数台シミュレーションを進行中",
    ],
    links: [
      // 卒業論文の提出（2026-12）以降に、スライド / 論文 / リポジトリのURLを追加予定
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
      { label: "Live Demo", href: "https://eisai-manager-5x1o.vercel.app" },
      { label: "GitHub", href: "https://github.com/hikarucode1/shift-manager" },
    ],
    featured: true,
  },
  {
    slug: "mirror-council",
    title: "トリアージュ",
    tagline: "3賢者AIが肌を診断し、ケアの優先順位を導く",
    description:
      "カメラに映った顔をAIが解析し、西洋・内科・東洋それぞれの視点を持つ3人の専門家エージェントが議論。統合エージェントが優先度付きのアクションプランにまとめます。Zenn Fes Spring 2026（YouCam APIコンテスト）でビューティテック賞をいただきました。",
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
    awards: ["Zenn Fes Spring 2026 ビューティテック賞"],
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
      "手入力でサブスクを棚卸しし、不要なものを発見、解約・乗り換え（学割）をサポートする大学生向けiOSアプリ。SwiftUI + SwiftData で開発し、2026年8月に App Store で v1.0 を公開しました。",
    period: "2026",
    status: "done",
    category: "personal",
    tags: ["Swift", "SwiftUI", "SwiftData", "WidgetKit", "iOS"],
    highlights: [
      "サブスク一覧と月額 / 年額合計の可視化",
      "「これ要る?」評価フローで不要なサブスクを発見",
      "解約ガイドと学割プランの提案（コンテンツは配信サーバから取得しキャッシュ）",
      "ホーム画面ウィジェットと、年間節約額のOGP画像シェア機能",
    ],
    links: [
      {
        label: "App Store",
        href: "https://apps.apple.com/jp/app/id6795426837",
      },
      { label: "GitHub", href: "https://github.com/hikarucode1/submil" },
    ],
    featured: false,
  },
  {
    slug: "zenn-books",
    title: "Zenn 技術書の執筆",
    tagline: "これから学ぶ人のための入門書を4冊公開",
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
      "『0から手を動かして学べるネットワーク（基礎編）』— Linux の network namespace で手元に小さなネットワークを組みながら学ぶ全14章",
    ],
    links: [
      {
        label: "Zenn",
        href: "https://zenn.dev/kenya0126/books/engineer-basics",
      },
      {
        label: "ネットワーク基礎編",
        href: "https://zenn.dev/kenya0126/books/network-hands-on-basics",
      },
      {
        label: "GitHub",
        href: "https://github.com/hikarucode1/zenn-engineer-basics",
      },
    ],
    featured: false,
  },
  {
    slug: "koma-terminal",
    title: "koma — タイル型ターミナルエミュレータ",
    tagline: "1つのウィンドウを分割して複数のシェルを並べる",
    description:
      "Rust で書いたタイル型のターミナルエミュレータ。ウィンドウをペインに分割し、それぞれが独立した疑似端末（pty）と画面を持ちます。描画は wgpu による自前の GPU レンダラで、macOS（Metal）と Linux（Vulkan）の両方で同じソースから動きます。",
    period: "2026 – 現在",
    status: "ongoing",
    category: "personal",
    tags: ["Rust", "wgpu", "winit", "ターミナル", "macOS", "Linux"],
    highlights: [
      "ペインの分割・移動・リサイズ、スクロールバック、選択とコピー / 貼り付け",
      "全角文字を含む行の選択・コピーに対応",
      "vim などが強制終了して画面状態を残したままでも、カーネルに前面プロセスを問い合わせて端末を自動で復帰",
      "入力待ちになったペインをデスクトップ通知で知らせる（BEL を拾って通知）",
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/hikarucode1/koma-terminal",
      },
    ],
    featured: false,
  },
  {
    slug: "it-glossary",
    title: "IT用語ノート",
    tagline: "iPhone と PC で同じデータを使う自分専用の用語集",
    description:
      "IT の学習で出会った用語を記録する自分専用の PWA。iPhone はホーム画面から、PC はブラウザから同じデータを読み書きできます。ホーム画面から起動した PWA でもログインできるよう、マジックリンクではなく6桁のワンタイムコードで認証しています。",
    period: "2026 – 現在",
    status: "ongoing",
    category: "personal",
    tags: ["Next.js", "TypeScript", "Supabase", "PWA", "Tailwind CSS"],
    highlights: [
      "Supabase の行レベルセキュリティ（RLS）で自分のデータだけを読み書き",
      "新規登録を閉じた自分専用構成（メールの6桁コードでログイン）",
      "ITニュースまとめの「今日の用語」から、そのまま登録画面を開ける",
    ],
    // 自分専用のため、リポジトリ・アプリとも非公開
    featured: false,
  },
  {
    slug: "it-news",
    title: "ITニュースまとめ",
    tagline: "毎朝5時に技術ニュースを集めて1ページにまとめる",
    description:
      "Hacker News・Reddit・はてなブックマークから技術ニュースを毎朝自動で集め、1ページにまとめる自分用のサイト。自宅サーバの cron で動かし、Tailscale 経由でスマホからも読んでいます。Claude API で「今日のトピック」の3行要約と、見出しから拾った用語の候補も出します。",
    period: "2026 – 現在",
    status: "ongoing",
    category: "personal",
    tags: ["Python", "Claude API", "cron", "Tailscale"],
    highlights: [
      "Python 標準ライブラリのみで収集・HTML 生成",
      "Reddit は API 制限を避けるため RSS をまとめて1回だけ取得",
      "Claude API の構造化出力で要約を受け取り、パース崩れを防止（月200円以下で運用）",
    ],
    // 自分用のため、リポジトリ・サイトとも非公開
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
