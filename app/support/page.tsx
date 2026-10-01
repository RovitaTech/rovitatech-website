import type { Metadata } from "next";
import Link from "next/link";
import { ChevronDown, Mail } from "lucide-react";

import { AppIcon } from "@/components/apps/app-icon";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/ui/page-hero";
import { apps } from "@/lib/apps";
import { mailto, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Support",
  description:
    "Get help with any Rovitatech app. Contact support, ask about your data, or request account deletion.",
  alternates: { canonical: "/support" },
};

const faqs = [
  {
    question: "How do I delete my account or my data?",
    answer: (
      <>
        Email us from the address linked to your account and tell us which app it is for. Each
        app&apos;s privacy policy explains what is stored and how deletion works; you can find
        them all in the <Link href="/legal">legal centre</Link>.
      </>
    ),
  },
  {
    question: "How do I cancel a subscription?",
    answer: (
      <>
        Subscriptions are billed by the App Store or Google Play, not by us, so they are managed
        in your Apple or Google account settings under Subscriptions. Deleting the app does not
        cancel a subscription.
      </>
    ),
  },
  {
    question: "Where is the privacy policy for my app?",
    answer: (
      <>
        Every policy and terms document is listed in the <Link href="/legal">legal centre</Link>,
        and linked from the app&apos;s own page.
      </>
    ),
  },
  {
    question: "I found a bug. What should I send?",
    answer: (
      <>
        The app name, your device and operating system version, and what you did just before it
        went wrong. A screenshot helps a great deal.
      </>
    ),
  },
] as const;

export default function SupportPage() {
  return (
    <main>
      <PageHero eyebrow="Support" title="How can we help?">
        Pick your app to start an email with the right subject, or write to us directly at{" "}
        {site.email}.
      </PageHero>

      <section className="py-16 sm:py-24">
        <Container>
          <h2 className="display-md text-ink">Choose your app</h2>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
            {apps.map((app) => (
              <li key={app.slug}>
                <a
                  href={mailto(`${app.name} support`)}
                  className="group flex items-center gap-4 rounded-[20px] bg-mist p-4 transition-colors duration-200 hover:bg-hairline"
                >
                  <AppIcon app={app} size={48} />
                  <span className="min-w-0 flex-1">
                    <span className="block truncate text-[1.0625rem] font-semibold tracking-[-0.015em] text-ink">
                      {app.name}
                    </span>
                    <span className="block text-[0.8125rem] text-mute">Email support</span>
                  </span>
                  <Mail aria-hidden="true" className="mr-2 size-5 shrink-0 text-faint group-hover:text-link" />
                </a>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="bg-mist py-16 sm:py-24">
        <Container width="narrow">
          <h2 className="display-md text-ink">Common questions</h2>
          <div className="mt-8 border-t border-line">
            {faqs.map((faq) => (
              <details key={faq.question} className="group border-b border-line">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-[1.1875rem] font-semibold tracking-[-0.02em] text-ink [&::-webkit-details-marker]:hidden">
                  {faq.question}
                  <ChevronDown
                    aria-hidden="true"
                    className="size-5 shrink-0 text-mute transition-transform duration-200 group-open:rotate-180"
                  />
                </summary>
                <p className="max-w-[60ch] pb-6 text-[1.0625rem] leading-relaxed text-mute [&_a]:text-link [&_a]:underline [&_a]:underline-offset-4">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
          <div className="mt-10">
            <ButtonLink href={mailto("Support request")}>Email support</ButtonLink>
          </div>
        </Container>
      </section>
    </main>
  );
}
