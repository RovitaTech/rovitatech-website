import { useId } from "react";

/** The Rovitatech "R" mark, drawn as SVG so it stays crisp at any size. */
export function LogoMark({ size = 28 }: { size?: number }) {
  const id = useId();
  const body = `${id}-body`;
  const leg = `${id}-leg`;

  return (
    <svg
      width={size}
      height={size}
      viewBox="245 150 1500 1500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={body} x1="0" y1="222" x2="0" y2="1322" gradientUnits="userSpaceOnUse">
          <stop stopColor="#0A2870" />
          <stop offset="1" stopColor="#4B74D3" />
        </linearGradient>
        <linearGradient id={leg} x1="0" y1="918" x2="0" y2="1578" gradientUnits="userSpaceOnUse">
          <stop stopColor="#5079DA" />
          <stop offset="1" stopColor="#001F66" />
        </linearGradient>
      </defs>
      <polygon points="857,918 1010,918 1120,905 1344,1578 1063,1578 857,955" fill={`url(#${leg})`} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M605 222H1010C1250 222 1385 350 1385 565C1385 790 1240 918 1010 918H857V1322H605ZM857 423V717H925C1050 717 1120 670 1120 570C1120 470 1050 423 925 423Z"
        fill={`url(#${body})`}
      />
    </svg>
  );
}

/** Mark on a white tile plus the wordmark. Works on light and dark surfaces. */
export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <span className="grid size-7 place-items-center rounded-[8px] bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.06)]">
        <LogoMark size={24} />
      </span>
      <span className="text-[1.0625rem] font-semibold tracking-[-0.02em]">Rovitatech</span>
    </span>
  );
}
