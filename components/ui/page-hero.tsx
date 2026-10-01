import type { ReactNode } from "react";

import { Container } from "@/components/ui/container";

/** Standard opening block for inner pages. */
export function PageHero({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  children?: ReactNode;
}) {
  return (
    <header className="bg-mist">
      <Container className="pt-20 pb-16 sm:pt-28 sm:pb-20">
        <p className="eyebrow text-link">{eyebrow}</p>
        <h1 className="display-lg mt-4 max-w-[18ch] text-ink">{title}</h1>
        {children ? <p className="lede mt-6 max-w-[52ch] text-mute">{children}</p> : null}
      </Container>
    </header>
  );
}
