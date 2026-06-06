import { ImageResponse } from "next/og";
import { siteConfig } from "@/config/site";

export const alt = `${siteConfig.name} — Portfolio`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// 日本語フォントを埋め込まないため、OG画像はASCII要素のみで構成する。
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          position: "relative",
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#09090b",
          color: "#fafafa",
        }}
      >
        <div style={{ display: "flex", fontSize: 30, color: "#34d399" }}>
          {"// "}
          {siteConfig.role}
        </div>
        <div style={{ display: "flex", fontSize: 132, fontWeight: 700, marginTop: 16 }}>
          {siteConfig.name}
        </div>
        <div style={{ display: "flex", fontSize: 36, color: "#a1a1aa", marginTop: 24 }}>
          @{siteConfig.handle}
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 80,
            right: 88,
            width: 28,
            height: 28,
            borderRadius: 9999,
            background: "#34d399",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
