import type { Metadata } from "next";

import { ContactSection } from "@/components/home/contact-section";
import { CapabilityList } from "@/components/home/studio-section";
import { ArrowLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/ui/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { appStats } from "@/lib/apps";
import { principles } from "@/lib/studio";

export const metadata: Metadata = {
  title: "Studio",
  description:
    "Rovitatech is an independent software studio. We design, build and run our own apps for iPhone, Android and Mac.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <main>
      <PageHero eyebrow="The studio" title="We make software we would want to use.">
        Rovitatech is an independent software studio. We design, build and run our own apps:{" "}
        {appStats.total} so far, across iPhone, Android and Mac.
      </PageHero>

      <section className="py-24 sm:py-32">
        <Container>
          <SectionHeading align="left" eyebrow="How we work" title="Three rules we keep." />
          <ol className="mt-14 grid gap-px overflow-hidden rounded-[28px] bg-line md:grid-cols-3">
            {principles.map((principle, index) => (
              <li key={principle.title} className="reveal bg-paper p-8 sm:p-10">
                <span className="text-[0.8125rem] font-semibold text-link tabular-nums">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-10 text-2xl font-semibold tracking-[-0.03em] text-ink">
                  {principle.title}
                </h3>
                <p className="mt-3 text-[1.0625rem] leading-relaxed text-mute">{principle.description}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="bg-mist py-24 sm:py-32">
        <Container>
          <SectionHeading align="left" eyebrow="What we build" title="From first sketch to store listing." />
          <div className="mt-14">
            <CapabilityList />
          </div>
          <div className="mt-12">
            <ArrowLink href="/apps">See the apps</ArrowLink>
          </div>
        </Container>
      </section>

      <ContactSection title="Want to talk?">
        Feedback on an app, a question about your data, or an idea worth building. We read all of
        it.
      </ContactSection>
    </main>
  );
}
