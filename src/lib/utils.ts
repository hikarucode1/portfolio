export type ClassValue = string | number | boolean | null | undefined;

/** 条件付きクラス名を結合する軽量ヘルパー */
export function cn(...inputs: ClassValue[]): string {
  return inputs.filter(Boolean).join(" ");
}

/** ISO日付文字列を "2026.06.06" 形式に整形する */
export function formatDate(iso: string): string {
  const d = new Date(iso);
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}.${m}.${day}`;
}
