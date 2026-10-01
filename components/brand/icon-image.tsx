/**
 * The logo as a square app-style tile, for next/og image routes (favicon and
 * Apple touch icon). Kept free of hooks so it can render inside ImageResponse.
 */
export function IconImage({ size }: { size: number }) {
  return (
    <div
      style={{
        width: size,
        height: size,
        display: "flex",
        background: "#fff",
        borderRadius: size * 0.22,
      }}
    >
      <svg width={size} height={size} viewBox="245 150 1500 1500" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="body" x1="0" y1="222" x2="0" y2="1322" gradientUnits="userSpaceOnUse">
            <stop stopColor="#0A2870" />
            <stop offset="1" stopColor="#4B74D3" />
          </linearGradient>
          <linearGradient id="leg" x1="0" y1="918" x2="0" y2="1578" gradientUnits="userSpaceOnUse">
            <stop stopColor="#5079DA" />
            <stop offset="1" stopColor="#001F66" />
          </linearGradient>
        </defs>
        <polygon points="857,918 1010,918 1120,905 1344,1578 1063,1578 857,955" fill="url(#leg)" />
        <path
          fillRule="evenodd"
          d="M605 222H1010C1250 222 1385 350 1385 565C1385 790 1240 918 1010 918H857V1322H605ZM857 423V717H925C1050 717 1120 670 1120 570C1120 470 1050 423 925 423Z"
          fill="url(#body)"
        />
      </svg>
    </div>
  );
}
