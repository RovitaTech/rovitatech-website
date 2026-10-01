import { ImageResponse } from "next/og";

import { appStats } from "@/lib/apps";
import { numberWord } from "@/lib/format";
import { site } from "@/lib/site";

export const alt = `${site.name}: ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          color: "#fff",
          backgroundColor: "#08080a",
          backgroundImage: "linear-gradient(180deg, rgba(74,60,255,0.55), rgba(8,8,10,0) 65%)",
        }}
      >
        <div style={{ display: "flex", fontSize: 34, fontWeight: 600, letterSpacing: -1 }}>
          {site.name}
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 112, fontWeight: 600, letterSpacing: -5, lineHeight: 1 }}>
            {numberWord(appStats.total)} apps.
          </div>
          <div style={{ display: "flex", fontSize: 112, fontWeight: 600, letterSpacing: -5, lineHeight: 1.05 }}>
            One standard.
          </div>
          <div style={{ display: "flex", marginTop: 28, fontSize: 32, color: "rgba(255,255,255,0.7)" }}>
            Apps for iPhone, Android and Mac
          </div>
        </div>
      </div>
    ),
    size,
  );
}
