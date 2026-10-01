import type { ReactNode } from "react";

const widths = {
  default: "max-w-[1120px]",
  narrow: "max-w-[820px]",
  wide: "max-w-[1320px]",
} as const;

export function Container({
  children,
  width = "default",
  className = "",
}: {
  children: ReactNode;
  width?: keyof typeof widths;
  className?: string;
}) {
  return <div className={`mx-auto w-full px-5 sm:px-8 ${widths[width]} ${className}`}>{children}</div>;
}
