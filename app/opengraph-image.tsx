import { ImageResponse } from "next/og";

export const runtime = "nodejs";
export const alt = "C33 — 中法时尚与品牌叙事季刊";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
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
          <span>Vol. 01 — N° 01</span>
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
            La fabrique des récits — derrière la mode, le métier qui les tient.
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
          <span>Printemps 2026</span>
          <span>c33zine.com</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
