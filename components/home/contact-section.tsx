import type { ReactNode } from "react";

import { ArrowLink, ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { mailto, site } from "@/lib/site";

/** Closing call to action, reused at the foot of most pages. */
export function ContactSection({
  title = "Questions about one of our apps?",
  children = "Write to us. A person reads every message, and we answer as quickly as we can.",
  href = mailto(),
  secondary = { label: "Support", href: "/support" },
}: {
  title?: string;
  children?: ReactNode;
  /** Where the email button points; pass a mailto with a subject to pre-fill it. */
  href?: string;
  secondary?: { label: string; href: string };
}) {
  return (
    <section className="bg-mist px-3 py-3 sm:px-4 sm:py-4">
      <div className="reveal mx-auto max-w-[1288px] rounded-[32px] bg-white py-20 sm:py-28">
        <Container width="narrow" className="text-center">
          <h2 className="display-lg text-ink">{title}</h2>
          <p className="lede mx-auto mt-5 max-w-[44ch] text-mute">{children}</p>
          <div className="mt-9 flex flex-col items-center justify-center gap-x-7 gap-y-2 sm:flex-row">
            <ButtonLink href={href}>{site.email}</ButtonLink>
            <ArrowLink href={secondary.href}>{secondary.label}</ArrowLink>
          </div>
        </Container>
      </div>
    </section>
  );
}
