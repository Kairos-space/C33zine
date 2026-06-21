import { ImageResponse } from "next/og";
import { getCurrentIssue } from "@/lib/issues";

export const runtime = "nodejs";
export const alt = "C33 — 解码品味与生活方式的中法季刊";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const issue = getCurrentIssue();
  return new ImageResponse(
    (
      <div
        style={{
          background: "#000",
          color: "#fff",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          fontFamily: "serif",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 18,
            letterSpacing: 6,
            textTransform: "uppercase",
          }}
        >
          <span>France · Chine</span>
          <span>Vol. 01 — N° {issue.number}</span>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <div
            style={{
              fontSize: 280,
              fontWeight: 600,
              lineHeight: 1,
              letterSpacing: -8,
            }}
          >
            C33
          </div>
          <div
            style={{
              fontSize: 26,
              fontStyle: "italic",
              marginTop: 32,
              maxWidth: 900,
              lineHeight: 1.3,
            }}
          >
            {issue.tagline}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 18,
            letterSpacing: 6,
            textTransform: "uppercase",
          }}
        >
          <span>{issue.season} {issue.year}</span>
          <span>c33zine.com</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
