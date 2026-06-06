import { siteConfig } from "@/config/site";

// ビルド時に静的生成（固定の .vcf を配信）
export const dynamic = "force-static";

// 連絡先(vCard 3.0)を返す。電話番号は含めない（Web公開のため）。
export function GET() {
  const c = siteConfig;
  const vcard = [
    "BEGIN:VCARD",
    "VERSION:3.0",
    `N:;${c.name};;;`,
    `FN:${c.name}`,
    `TITLE:${c.role}`,
    `EMAIL;TYPE=INTERNET:${c.links.email}`,
    `URL:${c.url}`,
    `URL:${c.links.github}`,
    `URL:${c.links.zenn}`,
    `URL:${c.links.x}`,
    `NOTE:GitHub ${c.links.github} / Zenn ${c.links.zenn} / X ${c.links.x}`,
    "END:VCARD",
  ].join("\r\n");

  return new Response(vcard, {
    headers: {
      "Content-Type": "text/vcard; charset=utf-8",
      "Content-Disposition": `attachment; filename="${c.handle}.vcf"`,
    },
  });
}
