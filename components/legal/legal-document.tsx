import type { ReactNode } from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

import { AppIcon } from "@/components/apps/app-icon";
import { LegalToc } from "@/components/legal/legal-toc";
import { ArrowLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { getApp, type LegalDoc, type LegalKind } from "@/lib/apps";
import { languageLabel, legalKindLabel } from "@/lib/legal";
import { mailto, site } from "@/lib/site";

const BODY_ID = "legal-body";

const copy = {
  en: {
    toc: "On this page",
    questions: "Questions about this document?",
    legal: "Legal",
    also: "Also available in",
    about: "About",
    all: "All legal documents",
  },
  "es-MX": {
    toc: "En esta página",
    questions: "¿Dudas sobre este documento?",
    legal: "Legal",
    also: "También disponible en",
    about: "Acerca de",
    all: "Todos los documentos legales",
  },
} as const;

/**
 * Page chrome shared by every privacy policy and terms page: breadcrumb,
 * title block, table of contents and the typeset body. The policy text is
 * passed as children and rendered untouched.
 */
export function LegalDocument({
  app: appSlug,
  kind,
  title,
  subtitle,
  dates,
  lang = "en",
  children,
}: {
  /** Slug of the app in lib/apps.ts. */
  app: string;
  kind: LegalKind;
  title: string;
  /** The product name exactly as the document states it. */
  subtitle: string;
  /** "Last Updated: …" / "Effective Date: …" lines, verbatim. */
  dates: readonly string[];
  lang?: LegalDoc["lang"];
  children: ReactNode;
}) {
  const app = getApp(appSlug);
  const t = copy[lang];
  const translations = app?.legal.filter((doc) => doc.kind === kind && doc.lang !== lang) ?? [];
  const siblings = app?.legal.filter((doc) => doc.kind !== kind && doc.lang === "en") ?? [];

  return (
    <main lang={lang}>
      <div className="bg-mist">
        <Container className="pt-8 pb-12 sm:pt-10 sm:pb-16">
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-1 text-[0.8125rem] text-mute">
              <li>
                <Link href="/legal" className="hover:text-ink">
                  {t.legal}
                </Link>
              </li>
              {app ? (
                <li className="flex items-center gap-1">
                  <ChevronRight aria-hidden="true" className="size-3.5 text-faint" />
                  <Link href={`/apps/${app.slug}`} className="hover:text-ink">
                    {app.name}
                  </Link>
                </li>
              ) : null}
              <li className="flex items-center gap-1 text-ink" aria-current="page">
                <ChevronRight aria-hidden="true" className="size-3.5 text-faint" />
                {title}
              </li>
            </ol>
          </nav>

          <div className="mt-10 flex flex-col gap-6 sm:flex-row sm:items-center sm:gap-7">
            {app ? <AppIcon app={app} size={84} /> : null}
            <div>
              <h1 className="display-md text-ink">{title}</h1>
              <p className="mt-2 text-xl tracking-[-0.015em] text-mute">{subtitle}</p>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-x-8 gap-y-2 text-[0.9375rem] text-mute sm:flex-row sm:flex-wrap sm:items-center">
            {dates.map((date) => (
              <p key={date}>{date}</p>
            ))}
            {translations.map((doc) => (
              <p key={doc.href}>
                {t.also}{" "}
                <Link href={doc.href} hrefLang={doc.lang} className="font-medium text-link hover:underline">
                  {languageLabel[doc.lang]}
                </Link>
              </p>
            ))}
          </div>
        </Container>
      </div>

      <Container className="py-12 sm:py-16">
        <div className="grid gap-12 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-20">
          <aside className="hidden lg:block">
            <div className="sticky top-20 max-h-[calc(100vh-7rem)] overflow-y-auto pr-2">
              <LegalToc targetId={BODY_ID} label={t.toc} />
            </div>
          </aside>

          <div className="max-w-[720px]">
            <article id={BODY_ID} className="legal-prose">
              {children}
            </article>

            <div className="mt-16 rounded-[24px] bg-mist p-7 sm:p-8">
              <p className="text-xl font-semibold tracking-[-0.02em] text-ink">{t.questions}</p>
              <p className="mt-1 text-[1.0625rem] text-mute">
                <a href={mailto(`${subtitle}: ${title}`)} className="text-link hover:underline">
                  {site.email}
                </a>
              </p>
              <div className="mt-4 flex flex-wrap gap-x-6">
                {app ? <ArrowLink href={`/apps/${app.slug}`}>{t.about} {app.name}</ArrowLink> : null}
                {siblings.map((doc) => (
                  <ArrowLink key={doc.href} href={doc.href}>
                    {legalKindLabel[doc.kind]}
                  </ArrowLink>
                ))}
                <ArrowLink href="/legal">{t.all}</ArrowLink>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}
