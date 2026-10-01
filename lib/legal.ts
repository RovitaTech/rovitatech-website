import { apps, type AppGlyph, type LegalDoc, type LegalKind } from "@/lib/apps";

export const legalKindLabel: Record<LegalKind, string> = {
  privacy: "Privacy Policy",
  terms: "Terms of Use",
};

export const languageLabel: Record<LegalDoc["lang"], string> = {
  en: "English",
  "es-MX": "Español",
};

/** One row in the legal centre: a document plus the app it belongs to. */
export type LegalEntry = LegalDoc & {
  appSlug: string;
  appName: string;
  glyph: AppGlyph;
  tint: readonly [string, string];
  icon?: string;
};

export const legalEntries: readonly LegalEntry[] = apps.flatMap((app) =>
  app.legal.map((doc) => ({
    ...doc,
    appSlug: app.slug,
    appName: app.name,
    glyph: app.glyph,
    tint: app.tint,
    icon: app.icon,
  })),
);
