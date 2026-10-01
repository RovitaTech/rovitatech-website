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
    "Rovitatech is an independent software studio. We build our own apps for iPhone, Android and Mac, and design and develop mobile, web and backend products for clients.",
  email: "rovitatech@gmail.com",
  url: resolveSiteUrl(),
} as const;

export const mainNav = [
  { label: "Apps", href: "/apps" },
  { label: "Services", href: "/services" },
  { label: "Studio", href: "/about" },
  { label: "Privacy", href: "/legal" },
  { label: "Support", href: "/support" },
] as const;

export function mailto(subject?: string): string {
  return subject
    ? `mailto:${site.email}?subject=${encodeURIComponent(subject)}`
    : `mailto:${site.email}`;
}
