import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Check, ChevronRight, FileText, ShieldCheck } from "lucide-react";

import { AppArt } from "@/components/apps/app-art";
import { AppCard } from "@/components/apps/app-card";
import { AppIcon } from "@/components/apps/app-icon";
import { PlatformList } from "@/components/apps/platform-list";
import { ContactSection } from "@/components/home/contact-section";
import { ArrowLink, ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { apps, getApp, type StoreLinks } from "@/lib/apps";
import { languageLabel, legalKindLabel } from "@/lib/legal";
import { mailto } from "@/lib/site";

type Params = { slug: string };

export const dynamicParams = false;

export function generateStaticParams(): Params[] {
  return apps.map((app) => ({ slug: app.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const app = getApp(slug);
  if (!app) return {};
  return {
    title: app.name,
    description: `${app.tagline} ${app.summary}`,
    alternates: { canonical: `/apps/${app.slug}` },
    openGraph: { title: app.name, description: app.tagline, url: `/apps/${app.slug}` },
  };
}

const storeLabels: Record<keyof StoreLinks, string> = {
  appStore: "Download on the App Store",
  googlePlay: "Get it on Google Play",
  macAppStore: "Download on the Mac App Store",
  website: "Open the website",
};

export default async function AppPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const app = getApp(slug);
  if (!app) notFound();

  const privacy = app.legal.find((doc) => doc.kind === "privacy");
  const stores = (Object.keys(storeLabels) as (keyof StoreLinks)[]).flatMap((key) => {
    const href = app.links?.[key];
    return href ? [{ key, href }] : [];
  });
  const more = [
    ...apps.filter((other) => other.slug !== app.slug && other.category === app.category),
    ...apps.filter((other) => other.slug !== app.slug && other.category !== app.category),
  ].slice(0, 3);

  return (
    <main>
      <header className="bg-mist">
        <Container className="pt-8 pb-16 sm:pt-10 sm:pb-24">
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center gap-1 text-[0.8125rem] text-mute">
              <li>
                <Link href="/apps" className="hover:text-ink">
                  Apps
                </Link>
              </li>
              <li className="flex items-center gap-1 text-ink" aria-current="page">
                <ChevronRight aria-hidden="true" className="size-3.5 text-faint" />
                {app.name}
              </li>
            </ol>
          </nav>

          <div className="mt-12 grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
            <div>
              <AppIcon app={app} size={96} />
              <p className="mt-8 text-[0.9375rem] font-medium text-mute">
                {app.category} · <PlatformList platforms={app.platforms} />
              </p>
              <h1 className="display-lg mt-2 text-ink">{app.name}</h1>
              <p className="lede mt-4 max-w-[34ch] text-graphite">{app.tagline}</p>
              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2">
                {stores.map((store, index) => (
                  <ButtonLink key={store.key} href={store.href} external variant={index === 0 ? "primary" : "outline"}>
                    {storeLabels[store.key]}
                  </ButtonLink>
                ))}
                {stores.length === 0 && privacy ? (
                  <ButtonLink href={privacy.href}>Privacy Policy</ButtonLink>
                ) : null}
                <ArrowLink href={mailto(`${app.name} support`)}>Get support</ArrowLink>
              </div>
            </div>

            <AppArt app={app} tone="light" />
          </div>
        </Container>
      </header>

      <section className="py-20 sm:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-20">
            <div>
              <h2 className="display-md text-ink">What it does</h2>
              <p className="lede mt-5 text-mute">{app.summary}</p>
            </div>
            <ul className="border-t border-line">
              {app.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-4 border-b border-line py-5 text-[1.1875rem] leading-snug tracking-[-0.015em] text-ink"
                >
                  <Check aria-hidden="true" className="mt-1 size-5 shrink-0 text-link" strokeWidth={2.2} />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section className="bg-ink py-20 text-white sm:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-20">
            <div>
              <ShieldCheck aria-hidden="true" className="size-9 text-brand-bright" strokeWidth={1.5} />
              <h2 className="display-md mt-6">Privacy at a glance</h2>
              <p className="lede mt-5 text-white/70">
                A short summary of how {app.name} treats your data. The privacy policy is the full
                and authoritative version.
              </p>
            </div>
            <ul className="grid gap-px overflow-hidden rounded-[24px] bg-white/10">
              {app.privacy.map((point) => (
                <li
                  key={point}
                  className="bg-[#111114] px-6 py-5 text-[1.0625rem] leading-snug tracking-[-0.01em] text-white/90 sm:px-8"
                >
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container>
          <h2 className="display-md text-ink">Documents</h2>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
            {app.legal.map((doc) => (
              <li key={doc.href}>
                <Link
                  href={doc.href}
                  hrefLang={doc.lang}
                  className="group flex h-full items-start gap-4 rounded-[24px] bg-mist p-6 transition-colors duration-200 hover:bg-hairline"
                >
                  <FileText aria-hidden="true" className="mt-0.5 size-6 shrink-0 text-link" strokeWidth={1.6} />
                  <span>
                    <span className="block text-[1.0625rem] font-semibold tracking-[-0.015em] text-ink">
                      {legalKindLabel[doc.kind]}
                      {doc.lang !== "en" ? ` (${languageLabel[doc.lang]})` : ""}
                    </span>
                    <span className="mt-1 block text-[0.9375rem] text-mute">Updated {doc.updatedLabel}</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="bg-mist py-20 sm:py-28">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="display-md text-ink">More from Rovitatech</h2>
            <ArrowLink href="/apps">All apps</ArrowLink>
          </div>
        </Container>
        <Container width="wide" className="mt-8 px-3 sm:px-4">
          <ul className="grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
            {more.map((other) => (
              <li key={other.slug}>
                <AppCard app={other} />
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <ContactSection title={`Need help with ${app.name}?`} />
    </main>
  );
}
