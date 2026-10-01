import { CreditCard, Globe, Laptop, Rocket, Server, Smartphone, type LucideIcon } from "lucide-react";

import { services, type ServiceGlyph } from "@/lib/services";

const glyphs: Record<ServiceGlyph, LucideIcon> = {
  phone: Smartphone,
  web: Globe,
  server: Server,
  mac: Laptop,
  card: CreditCard,
  rocket: Rocket,
};

/** Service tiles. `detailed` adds the "includes" list under each one. */
export function ServiceList({ detailed = false, surface = "mist" }: { detailed?: boolean; surface?: "mist" | "white" }) {
  return (
    <ul className="grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
      {services.map((service) => {
        const Glyph = glyphs[service.glyph];
        return (
          <li
            key={service.title}
            className={`reveal flex flex-col rounded-[28px] p-7 sm:p-8 ${surface === "white" ? "bg-white" : "bg-mist"}`}
          >
            <Glyph aria-hidden="true" className="size-8 text-link" strokeWidth={1.5} />
            <h3 className="mt-8 text-2xl font-semibold tracking-[-0.03em] text-ink">{service.title}</h3>
            <p className="mt-2 text-[1.0625rem] leading-relaxed text-mute">{service.description}</p>
            {detailed ? (
              <ul className="mt-6 grid gap-2 border-t border-line pt-5 text-[0.9375rem] text-graphite">
                {service.includes.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ) : null}
          </li>
        );
      })}
    </ul>
  );
}
