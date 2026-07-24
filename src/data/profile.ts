// =====================================================================
// プロフィール（About / Skills セクションの中身）。
// =====================================================================

/** About セクションの自己紹介（段落ごとに配列で） */
export const bio: string[] = [
  "情報系の学生エンジニアです。IoTの省電力通信から生成AIのマルチエージェントシステムまで、「軽くて賢い」仕組みづくりに関心があります。",
  "卒業研究では LoRaWAN の通信を SCHC（RFC 8724）で軽量化する仕組みを、実機で段階的に検証しています。個人開発では、3体のAIが議論して肌を診る「トリアージュ」（Zenn Fes Spring 2026 受賞）、塾のシフト管理 Web アプリ、サブスク管理 iOS アプリなどを制作しています。低レイヤのネットワークから Web・モバイル・AI まで、レイヤを横断して手を動かすのが好きです。",
  "学んだことは Zenn で技術書や記事として公開しています。日々の学びは Obsidian に蓄積し、Claude Code を相棒に開発を進めています。",
];

export type SkillGroup = {
  category: string;
  items: string[];
};

/** スキル一覧。GitHubの使用言語・プロジェクトから反映。必要に応じて調整してください。 */
export const skills: SkillGroup[] = [
  {
    category: "Languages",
    items: ["TypeScript", "Swift", "Python", "Dart", "C / C++"],
  },
  {
    category: "Frontend",
    items: ["Next.js", "React", "Tailwind CSS", "SwiftUI"],
  },
  {
    category: "Backend / DB",
    items: ["Supabase", "Drizzle ORM", "PostgreSQL", "SwiftData"],
  },
  {
    category: "AI / LLM",
    items: [
      "マルチエージェント設計",
      "Claude API",
      "Claude Code",
      "YouCam API",
    ],
  },
  {
    category: "IoT / Network",
    items: ["LoRaWAN", "SCHC (RFC 8724)", "Raspberry Pi", "MQTT"],
  },
  {
    category: "Tools",
    items: ["Git / GitHub", "Vercel", "Firebase", "Vitest", "Obsidian"],
  },
];

/** Hero に出す「いま取り組んでいること」（3件程度まで） */
export const nowItems: string[] = [
  "卒業研究 — SCHC 実装の実機評価と中間発表の準備",
  "サブミル — App Store リリースに向けた配信準備",
  "shift-manager — 塾での運用に向けた機能追加",
];
