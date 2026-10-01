import Link from "next/link";
import { ChevronRight } from "lucide-react";

import { AppIcon } from "@/components/apps/app-icon";
import { PlatformList } from "@/components/apps/platform-list";
import type { AppEntry } from "@/lib/apps";

/** Compact catalogue tile. The whole tile is one link. */
export function AppCard({ app, surface = "white" }: { app: AppEntry; surface?: "white" | "mist" }) {
  return (
    <Link
      href={`/apps/${app.slug}`}
      className={`group flex h-full flex-col rounded-[28px] p-7 transition-[transform,box-shadow] duration-300 ease-soft hover:-translate-y-1 hover:shadow-[0_24px_48px_-24px_rgba(0,0,0,0.25)] ${
        surface === "white" ? "bg-white" : "bg-mist"
      }`}
    >
      <AppIcon app={app} size={60} />
      <p className="mt-6 text-[0.8125rem] font-medium text-mute">
        {app.category} · <PlatformList platforms={app.platforms} />
      </p>
      <h3 className="mt-1.5 text-2xl font-semibold tracking-[-0.03em] text-ink">{app.name}</h3>
      <p className="mt-2 text-[1.0625rem] leading-snug tracking-[-0.01em] text-mute">{app.tagline}</p>
      <span className="mt-auto inline-flex items-center gap-0.5 pt-6 text-[0.9375rem] font-medium text-link">
        Learn more
        <ChevronRight
          aria-hidden="true"
          className="size-4 transition-transform duration-200 ease-soft group-hover:translate-x-0.5"
        />
      </span>
    </Link>
  );
}
