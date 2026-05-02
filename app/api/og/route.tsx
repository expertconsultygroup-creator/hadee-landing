import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  try {
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
              "linear-gradient(135deg, rgba(36,143,134,0.15) 0%, #FAFAF7 50%, rgba(36,143,134,0.08) 100%)",
            fontFamily: "sans-serif",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "24px",
            }}
          >
            <div
              style={{
                width: "80px",
                height: "80px",
                borderRadius: "16px",
                background: "#248F86",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                fontSize: "36px",
                fontWeight: "bold",
              }}
            >
              H
            </div>
            <div
              style={{
                fontSize: "48px",
                fontWeight: 600,
                color: "#1A1A1A",
                textAlign: "center",
                maxWidth: "800px",
              }}
            >
              Hadi — Your quiet companion for better days
            </div>
            <div
              style={{
                fontSize: "22px",
                color: "rgba(26,26,26,0.6)",
                textAlign: "center",
              }}
            >
              One app. One minute. A calmer, healthier you.
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch {
    return new Response("Failed to generate OG image", { status: 500 });
  }
}
