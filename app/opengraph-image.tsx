import { ImageResponse } from "next/og";

export const alt = "EMS enterprise IT consulting, development and support";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background: "linear-gradient(135deg, #07141a 0%, #102c34 68%, #88c700 145%)",
          color: "white",
          display: "flex",
          height: "100%",
          justifyContent: "center",
          padding: "72px 88px",
          width: "100%",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
          <div
            style={{
              color: "#88c700",
              display: "flex",
              fontSize: 58,
              fontWeight: 800,
              letterSpacing: "0.02em",
              marginBottom: 38,
            }}
          >
            EMS
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 64,
              fontWeight: 700,
              letterSpacing: "-0.035em",
              lineHeight: 1.08,
              maxWidth: 970,
            }}
          >
            Enterprise IT solutions built for reliability.
          </div>
          <div
            style={{
              color: "#d5e2e5",
              display: "flex",
              fontSize: 27,
              marginTop: 42,
            }}
          >
            Amman · Riyadh · Cairo
          </div>
        </div>
      </div>
    ),
    size,
  );
}
