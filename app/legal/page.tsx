import type { Metadata } from "next";

import { ContactSection } from "@/components/home/contact-section";
import { LegalIndex } from "@/components/legal/legal-index";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/ui/page-hero";
import { legalEntries } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Legal centre",
  description:
    "Privacy policies and terms of use for every Rovitatech app, in one place and published in full.",
  alternates: { canonical: "/legal" },
};

export default function LegalPage() {
  return (
    <main>
      <PageHero eyebrow="Legal centre" title="Every policy, in one place.">
        Each app has its own privacy policy, because each app handles data differently. Find the
        one you need below.
      </PageHero>

      <section className="py-14 sm:py-20">
        <Container width="narrow">
          <LegalIndex entries={legalEntries} />
        </Container>
      </section>

      <ContactSection title="Something unclear in a policy?">
        Tell us which app and which section. We will explain it, and fix the wording if it needs
        fixing.
      </ContactSection>
    </main>
  );
}
