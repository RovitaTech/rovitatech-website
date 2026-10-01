/** Company-wide constants. Change a value here and it updates everywhere. */

function resolveSiteUrl(): string {
  if (process.env.NEXT_PUBLIC_SITE_URL) return process.env.NEXT_PUBLIC_SITE_URL;
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  }
  return "http://localhost:3000";
}

export const site = {
  name: "Rovitatech",
  legalName: "RovitaTech",
  tagline: "Independent software studio",
  description:
    "Rovitatech is an independent software studio building apps for iPhone, Android and Mac, with privacy treated as the default rather than a setting.",
  email: "rovitatech@gmail.com",
  url: resolveSiteUrl(),
} as const;

export const mainNav = [
  { label: "Apps", href: "/apps" },
  { label: "Studio", href: "/about" },
  { label: "Privacy", href: "/legal" },
  { label: "Support", href: "/support" },
] as const;

export function mailto(subject?: string): string {
  return subject
    ? `mailto:${site.email}?subject=${encodeURIComponent(subject)}`
    : `mailto:${site.email}`;
}
