import { useId } from "react";

/** The Rovitatech "R" mark, drawn as SVG so it stays crisp at any size. */
export function LogoMark({ size = 28 }: { size?: number }) {
  const id = useId();
  const leg = `${id}-leg`;
  const bar = `${id}-bar`;

  return (
    <svg
      width={size}
      height={size}
      viewBox="-15 0 130 130"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={leg} x1="55" y1="58" x2="80" y2="120" gradientUnits="userSpaceOnUse">
          <stop stopColor="#2525CC" />
          <stop offset="1" stopColor="#08083A" />
        </linearGradient>
        <linearGradient id={bar} x1="25" y1="54" x2="3" y2="68" gradientUnits="userSpaceOnUse">
          <stop stopColor="#14147A" />
          <stop offset="1" stopColor="#060628" />
        </linearGradient>
      </defs>
      <polygon points="3,54 25,52 25,67 8,68" fill={`url(#${bar})`} />
      <polygon points="48,58 66,58 86,118 68,118" fill={`url(#${leg})`} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M25 6H63Q90 6 90 37Q90 60 69 65L82 95H65L52 65H42V95H25ZM42 20V52H61Q75 52 75 37Q75 20 61 20Z"
        fill="#2828CC"
      />
    </svg>
  );
}

/** Mark on a white tile plus the wordmark. Works on light and dark surfaces. */
export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <span className="grid size-7 place-items-center rounded-[8px] bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.06)]">
        <LogoMark size={20} />
      </span>
      <span className="text-[1.0625rem] font-semibold tracking-[-0.02em]">Rovitatech</span>
    </span>
  );
}
