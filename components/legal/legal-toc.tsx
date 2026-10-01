"use client";

import { useEffect, useState } from "react";

type Heading = { id: string; text: string };

function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/**
 * "On this page" navigation, built from the h2 headings inside the element
 * with id `targetId`, so policy pages never have to maintain it by hand.
 */
export function LegalToc({ targetId, label }: { targetId: string; label: string }) {
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const root = document.getElementById(targetId);
    if (!root) return;

    const used = new Set<string>();
    const nodes = Array.from(root.querySelectorAll("h2"));
    const found = nodes.map((node, index) => {
      let id = node.id || slugify(node.textContent ?? "") || `section-${index + 1}`;
      while (used.has(id)) id = `${id}-${index + 1}`;
      used.add(id);
      node.id = id;
      return { id, text: (node.textContent ?? "").trim() };
    });
    // Headings come from the DOM, so they are published after paint.
    const frame = requestAnimationFrame(() => setHeadings(found));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-15% 0px -70% 0px" },
    );
    nodes.forEach((node) => observer.observe(node));
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
    };
  }, [targetId]);

  if (headings.length < 3) return null;

  return (
    <nav aria-label={label} className="text-[0.8125rem]">
      <p className="mb-3 font-semibold text-ink">{label}</p>
      <ul className="grid gap-0.5 border-l border-hairline">
        {headings.map((heading) => (
          <li key={heading.id}>
            <a
              href={`#${heading.id}`}
              aria-current={active === heading.id ? "location" : undefined}
              className="-ml-px block border-l border-transparent py-1.5 pl-4 leading-snug text-mute transition-colors duration-200 hover:text-ink aria-[current=location]:border-link aria-[current=location]:text-ink"
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
