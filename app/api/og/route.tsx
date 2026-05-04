import { ImageResponse } from "next/og";

export const dynamic = "force-dynamic";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background:
            "linear-gradient(135deg, #EBF4FF 0%, #FAFAF7 50%, #E8F0FE 100%)",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {/* Logo circle */}
        <div
          style={{
            width: 80,
            height: 80,
            borderRadius: 20,
            backgroundColor: "#2563A0",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 32,
          }}
        >
          <span style={{ color: "white", fontSize: 36, fontWeight: "bold" }}>
            H
          </span>
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: 52,
            fontWeight: 700,
            color: "#1A1A1A",
            letterSpacing: "-0.02em",
            marginBottom: 16,
            textAlign: "center",
          }}
        >
          Hadi — هادي
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: 24,
            color: "#4A4A4A",
            textAlign: "center",
            maxWidth: 600,
            lineHeight: 1.5,
          }}
        >
          Your calm companion for better days
        </div>

        {/* Arabic subtitle */}
        <div
          style={{
            fontSize: 22,
            color: "#7A7A7A",
            textAlign: "center",
            marginTop: 8,
          }}
        >
          رفيقك الهادئ نحو أيام أفضل
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
