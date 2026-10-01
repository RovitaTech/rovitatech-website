import type { MetadataRoute } from "next";

import { apps } from "@/lib/apps";
import { legalEntries } from "@/lib/legal";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/apps", "/about", "/legal", "/support"].map((path) => ({
    url: `${site.url}${path}`,
    priority: path === "" ? 1 : 0.8,
  }));
  const appPages = apps.map((app) => ({ url: `${site.url}/apps/${app.slug}`, priority: 0.7 }));
  const legalPages = legalEntries.map((doc) => ({ url: `${site.url}${doc.href}`, priority: 0.5 }));

  return [...pages, ...appPages, ...legalPages];
}
