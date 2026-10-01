import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { AppCard } from "@/components/apps/app-card";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { appStats, otherApps } from "@/lib/apps";

export function AppGrid() {
  return (
    <section className="bg-mist py-24 sm:py-32">
      <Container>
        <SectionHeading eyebrow="The rest of the lineup" title="Small tools. Sharp edges.">
          Utilities for photos, video, money, family and getting around.
        </SectionHeading>
      </Container>

      <Container width="wide" className="mt-14 px-3 sm:mt-20 sm:px-4">
        <ul className="grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
          {otherApps.map((app) => (
            <li key={app.slug} className="reveal">
              <AppCard app={app} />
            </li>
          ))}
          <li className="reveal sm:col-span-2">
            <Link
              href="/apps"
              className="group flex h-full min-h-56 flex-col justify-between rounded-[28px] bg-ink p-7 text-white sm:p-9"
            >
              <ArrowUpRight
                aria-hidden="true"
                className="size-8 self-end text-white/60 transition-transform duration-300 ease-soft group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-white"
              />
              <span>
                <span className="display-md block">All {appStats.total} apps</span>
                <span className="lede mt-2 block text-white/70">
                  Browse the full catalogue by category.
                </span>
              </span>
            </Link>
          </li>
        </ul>
      </Container>
    </section>
  );
}
