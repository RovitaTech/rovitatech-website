import type { ReactNode } from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

const variants = {
  /** Solid pill for light surfaces. */
  primary: "bg-link text-white hover:bg-brand",
  /** Solid pill for dark surfaces. */
  inverse: "bg-white text-ink hover:bg-white/85",
  /** Quiet outlined pill for light surfaces. */
  outline: "text-ink shadow-[inset_0_0_0_1px_var(--color-line)] hover:bg-mist",
} as const;

type LinkTarget = { href: string; external?: boolean };

function Anchor({
  href,
  external,
  className,
  children,
}: LinkTarget & { className: string; children: ReactNode }) {
  if (external || href.startsWith("mailto:")) {
    return (
      <a
        href={href}
        className={className}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}

export function ButtonLink({
  children,
  variant = "primary",
  className = "",
  ...target
}: LinkTarget & { children: ReactNode; variant?: keyof typeof variants; className?: string }) {
  return (
    <Anchor
      {...target}
      className={`inline-flex min-h-11 items-center justify-center rounded-full px-6 text-[1.0625rem] font-medium tracking-[-0.01em] transition-colors duration-200 ${variants[variant]} ${className}`}
    >
      {children}
    </Anchor>
  );
}

/** Inline "Learn more ›" link, the secondary action next to a button. */
export function ArrowLink({
  children,
  tone = "light",
  className = "",
  ...target
}: LinkTarget & { children: ReactNode; tone?: "light" | "dark"; className?: string }) {
  const color = tone === "dark" ? "text-brand-bright" : "text-link";
  return (
    <Anchor
      {...target}
      className={`group inline-flex min-h-11 items-center gap-0.5 text-[1.0625rem] font-medium tracking-[-0.01em] ${color} ${className}`}
    >
      <span className="underline-offset-4 group-hover:underline">{children}</span>
      <ChevronRight
        aria-hidden="true"
        className="size-[1.1em] transition-transform duration-200 ease-soft group-hover:translate-x-0.5"
      />
    </Anchor>
  );
}
