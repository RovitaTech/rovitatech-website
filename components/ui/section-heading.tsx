import type { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  children,
  tone = "light",
  align = "center",
}: {
  eyebrow?: string;
  title: ReactNode;
  children?: ReactNode;
  tone?: "light" | "dark";
  align?: "center" | "left";
}) {
  const dark = tone === "dark";
  return (
    <div className={`reveal ${align === "center" ? "mx-auto text-center" : ""} max-w-[760px]`}>
      {eyebrow ? (
        <p className={`eyebrow mb-4 ${dark ? "text-brand-bright" : "text-link"}`}>{eyebrow}</p>
      ) : null}
      <h2 className={`display-lg ${dark ? "text-white" : "text-ink"}`}>{title}</h2>
      {children ? (
        <p className={`lede mt-5 ${dark ? "text-white/70" : "text-mute"}`}>{children}</p>
      ) : null}
    </div>
  );
}
