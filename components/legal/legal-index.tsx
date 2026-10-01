"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ChevronRight, Search } from "lucide-react";

import { AppIcon } from "@/components/apps/app-icon";
import { languageLabel, legalKindLabel, type LegalEntry } from "@/lib/legal";

/** Searchable list of every published policy and terms document. */
export function LegalIndex({ entries }: { entries: readonly LegalEntry[] }) {
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    const needle = query.trim().toLowerCase();
    if (!needle) return entries;
    return entries.filter((entry) =>
      `${entry.appName} ${legalKindLabel[entry.kind]} ${languageLabel[entry.lang]}`
        .toLowerCase()
        .includes(needle),
    );
  }, [entries, query]);

  return (
    <div>
      <label className="relative block">
        <span className="sr-only">Search documents by app name</span>
        <Search
          aria-hidden="true"
          className="pointer-events-none absolute top-1/2 left-5 size-5 -translate-y-1/2 text-faint"
        />
        <input
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search by app name"
          className="h-14 w-full rounded-full bg-mist pr-6 pl-13 text-[1.0625rem] text-ink placeholder:text-mute focus-visible:outline-offset-0"
        />
      </label>

      <p className="mt-6 text-[0.8125rem] text-mute" aria-live="polite">
        {results.length} {results.length === 1 ? "document" : "documents"}
      </p>

      {results.length > 0 ? (
        <ul className="mt-2 border-t border-hairline">
          {results.map((entry) => (
            <li key={entry.href} className="border-b border-hairline">
              <Link
                href={entry.href}
                hrefLang={entry.lang}
                className="group flex items-center gap-4 py-4 sm:gap-5"
              >
                <AppIcon app={{ ...entry, name: entry.appName }} size={44} />
                <span className="min-w-0 flex-1">
                  <span className="block text-[1.0625rem] font-semibold tracking-[-0.015em] text-ink group-hover:text-link">
                    {entry.appName}
                  </span>
                  <span className="block text-[0.9375rem] text-mute">
                    {legalKindLabel[entry.kind]}
                    {entry.lang !== "en" ? ` · ${languageLabel[entry.lang]}` : ""}
                    <span className="sm:hidden"> · {entry.updatedLabel}</span>
                  </span>
                </span>
                <span className="hidden text-[0.9375rem] text-mute sm:block">{entry.updatedLabel}</span>
                <ChevronRight
                  aria-hidden="true"
                  className="size-5 shrink-0 text-faint transition-transform duration-200 ease-soft group-hover:translate-x-0.5 group-hover:text-link"
                />
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p className="mt-10 text-[1.0625rem] text-mute">
          No documents match “{query}”. Try the name of the app.
        </p>
      )}
    </div>
  );
}
