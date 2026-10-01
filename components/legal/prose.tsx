import type { ReactNode } from "react";

import { mailto, site } from "@/lib/site";

/**
 * Building blocks for policy pages. They render plain semantic HTML; the
 * typography comes from `.legal-prose` in app/globals.css.
 */

export function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section>
      <h2>{title}</h2>
      {children}
    </section>
  );
}

export function SubSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <>
      <h3>{title}</h3>
      {children}
    </>
  );
}

export function P({ children }: { children: ReactNode }) {
  return <p>{children}</p>;
}

export function List({ children }: { children: ReactNode }) {
  return <ul>{children}</ul>;
}

export function Item({ label, children }: { label?: string; children: ReactNode }) {
  return (
    <li>
      {label ? <strong>{label} </strong> : null}
      {children}
    </li>
  );
}

export function EmailLink() {
  return <a href={mailto()}>{site.email}</a>;
}
