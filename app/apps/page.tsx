import type { Metadata } from "next";

import { AppCard } from "@/components/apps/app-card";
import { ContactSection } from "@/components/home/contact-section";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/ui/page-hero";
import { apps, appStats, type AppCategory } from "@/lib/apps";
import { numberWord } from "@/lib/format";

export const metadata: Metadata = {
  title: "Apps",
  description:
    "Every app made by Rovitatech: marketplaces, productivity tools, photo and video utilities and more for iPhone, Android and Mac.",
  alternates: { canonical: "/apps" },
};

// Categories in the order they first appear in the catalogue.
const categories = apps.reduce<AppCategory[]>(
  (list, app) => (list.includes(app.category) ? list : [...list, app.category]),
  [],
);

export default function AppsPage() {
  return (
    <main>
      <PageHero eyebrow="Apps" title={`${numberWord(appStats.total)} apps, made with care.`}>
        Everything we have shipped, grouped by what it helps you do. Each app has its own page
        with a plain-language privacy summary.
      </PageHero>

      <div className="bg-mist pb-24 sm:pb-32">
        <Container width="wide" className="grid gap-16 px-3 sm:px-4">
          {categories.map((category) => (
            <section key={category} aria-labelledby={`category-${category}`}>
              <h2
                id={`category-${category}`}
                className="mx-auto max-w-[1056px] px-2 text-2xl font-semibold tracking-[-0.03em] text-ink sm:px-4"
              >
                {category}
              </h2>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
                {apps
                  .filter((app) => app.category === category)
                  .map((app) => (
                    <li key={app.slug}>
                      <AppCard app={app} />
                    </li>
                  ))}
              </ul>
            </section>
          ))}
        </Container>
      </div>

      <ContactSection />
    </main>
  );
}
