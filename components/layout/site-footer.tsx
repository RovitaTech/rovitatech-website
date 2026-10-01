import Link from "next/link";

import { Logo } from "@/components/brand/logo";
import { Container } from "@/components/ui/container";
import { apps } from "@/lib/apps";
import { mailto, site } from "@/lib/site";

const companyLinks = [
  { label: "All apps", href: "/apps" },
  { label: "Studio", href: "/about" },
  { label: "Support", href: "/support" },
  { label: "Legal centre", href: "/legal" },
] as const;

const linkClass = "text-[0.8125rem] text-mute transition-colors duration-200 hover:text-ink";

export function SiteFooter() {
  return (
    <footer className="bg-mist">
      <Container className="py-14">
        <div className="grid gap-12 md:grid-cols-[1.1fr_2fr_1fr]">
          <div>
            <Link href="/" aria-label="Rovitatech home" className="text-ink">
              <Logo />
            </Link>
            <p className="mt-4 max-w-[30ch] text-[0.8125rem] leading-relaxed text-mute">
              An independent software studio building apps for iPhone, Android and Mac.
            </p>
          </div>

          <nav aria-label="Apps">
            <h2 className="text-[0.8125rem] font-semibold text-ink">Apps</h2>
            <ul className="mt-3 grid grid-cols-2 gap-x-6 gap-y-2.5 sm:grid-cols-3">
              {apps.map((app) => (
                <li key={app.slug}>
                  <Link href={`/apps/${app.slug}`} className={linkClass}>
                    {app.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Company">
            <h2 className="text-[0.8125rem] font-semibold text-ink">Company</h2>
            <ul className="mt-3 grid gap-y-2.5">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={linkClass}>
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <a href={mailto()} className={linkClass}>
                  {site.email}
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-line pt-5 text-xs text-mute sm:flex-row sm:items-center sm:justify-between">
          <p>
            Copyright © {new Date().getFullYear()} {site.legalName}. All rights reserved.
          </p>
          <p>
            <Link href="/legal" className="hover:text-ink">
              Privacy policies & terms
            </Link>
          </p>
        </div>
      </Container>
    </footer>
  );
}
