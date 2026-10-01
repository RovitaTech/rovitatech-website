import { CreditCard, Laptop, Server, Smartphone, type LucideIcon } from "lucide-react";

import { ArrowLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { capabilities, type CapabilityGlyph } from "@/lib/studio";

const glyphs: Record<CapabilityGlyph, LucideIcon> = {
  phone: Smartphone,
  mac: Laptop,
  server: Server,
  card: CreditCard,
};

export function CapabilityList() {
  return (
    <ul className="grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
      {capabilities.map((item) => {
        const Glyph = glyphs[item.glyph];
        return (
          <li key={item.title} className="reveal border-t border-line pt-6">
            <Glyph aria-hidden="true" className="size-7 text-link" strokeWidth={1.6} />
            <h3 className="mt-5 text-xl font-semibold tracking-[-0.022em] text-ink">{item.title}</h3>
            <p className="mt-2 text-[1.0625rem] leading-relaxed text-mute">{item.description}</p>
          </li>
        );
      })}
    </ul>
  );
}

export function StudioSection() {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <SectionHeading eyebrow="The studio" title="Designed, built and run in-house.">
          We take each app from the first sketch to the store listing, and keep it running
          afterwards.
        </SectionHeading>
        <div className="mt-16 sm:mt-20">
          <CapabilityList />
        </div>
        <div className="mt-12 text-center">
          <ArrowLink href="/about">More about the studio</ArrowLink>
        </div>
      </Container>
    </section>
  );
}
