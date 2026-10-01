import type { Metadata } from "next";

import { ContactSection } from "@/components/home/contact-section";
import { ServiceList } from "@/components/services/service-list";
import { StackSheet } from "@/components/services/stack-sheet";
import { ArrowLink, ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/ui/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { appStats } from "@/lib/apps";
import { processSteps } from "@/lib/services";
import { mailto } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "App development for clients: iPhone and Android apps with Flutter, web apps with Next.js and React, backends with NestJS, FastAPI and PostgreSQL, and everything needed to launch.",
  alternates: { canonical: "/services" },
};

const startProject = mailto("New project");

export default function ServicesPage() {
  return (
    <main>
      <PageHero eyebrow="Services" title="Your product, built by people who ship.">
        We have taken {appStats.total} of our own apps from idea to the stores. We bring the same
        team, tools and standards to client work.
      </PageHero>
      <div className="bg-mist pb-16 sm:pb-20">
        <Container className="flex flex-wrap items-center gap-x-7 gap-y-2">
          <ButtonLink href={startProject}>Start a project</ButtonLink>
          <ArrowLink href="/apps">See our work</ArrowLink>
        </Container>
      </div>

      <section className="py-24 sm:py-32">
        <Container>
          <SectionHeading align="left" eyebrow="What we do" title="One team, the whole product." />
        </Container>
        <Container width="wide" className="mt-12 px-3 sm:px-4">
          <ServiceList detailed />
        </Container>
      </section>

      <section className="bg-ink py-24 text-white sm:py-32">
        <Container>
          <SectionHeading align="left" tone="dark" eyebrow="Technology" title="Languages, frameworks and tools.">
            The stack we use every day on our own products.
          </SectionHeading>
          <div className="mt-14">
            <StackSheet tone="dark" />
          </div>
        </Container>
      </section>

      <section className="py-24 sm:py-32">
        <Container>
          <SectionHeading align="left" eyebrow="How a project runs" title="Four steps, no surprises." />
          <ol className="mt-14 grid gap-px overflow-hidden rounded-[28px] bg-line sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, index) => (
              <li key={step.title} className="reveal bg-paper p-8">
                <span className="text-[0.8125rem] font-semibold text-link tabular-nums">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-10 text-2xl font-semibold tracking-[-0.03em] text-ink">{step.title}</h3>
                <p className="mt-3 text-[1.0625rem] leading-relaxed text-mute">{step.description}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <ContactSection title="Have something to build?" href={startProject} secondary={{ label: "See our work", href: "/apps" }}>
        Tell us what you have in mind: the idea, who it is for, and when you need it. We will
        reply with next steps.
      </ContactSection>
    </main>
  );
}
