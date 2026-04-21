import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Duma Technology — Automação & Software";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#000000",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        {/* accent bar */}
        <div
          style={{
            width: 80,
            height: 6,
            background: "#FF9800",
            marginBottom: 40,
            borderRadius: 3,
          }}
        />
        <div
          style={{
            color: "#FF9800",
            fontSize: 28,
            fontWeight: 700,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            marginBottom: 24,
          }}
        >
          Duma Technology
        </div>
        <div
          style={{
            color: "#ffffff",
            fontSize: 64,
            fontWeight: 800,
            lineHeight: 1.1,
            marginBottom: 32,
            maxWidth: 900,
          }}
        >
          Automação e sites que trazem resultado
        </div>
        <div
          style={{
            color: "rgba(255,255,255,0.55)",
            fontSize: 28,
            maxWidth: 750,
          }}
        >
          RPA · WhatsApp · Integrações · Desenvolvimento sob medida
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 60,
            right: 80,
            color: "rgba(255,255,255,0.3)",
            fontSize: 22,
          }}
        >
          dumatechnology.com
        </div>
      </div>
    ),
    { ...size }
  );
}
