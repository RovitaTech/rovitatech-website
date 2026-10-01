import { ArrowLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { appStats } from "@/lib/apps";
import { legalEntries } from "@/lib/legal";

const stats = [
  {
    value: appStats.onDevice,
    label: "apps that run entirely on your device and collect nothing at all.",
  },
  {
    value: appStats.noAccount,
    label: "apps you can use without creating an account.",
  },
  {
    value: legalEntries.length,
    label: "policies and terms, published in full and written to be read.",
  },
] as const;

export function PrivacySection() {
  return (
    <section className="relative isolate overflow-hidden bg-ink py-24 text-white sm:py-36">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(50%_60%_at_50%_110%,rgba(74,60,255,0.4),transparent_70%)]"
      />
      <Container>
        <SectionHeading tone="dark" eyebrow="Privacy" title="Private by design. Not by fine print.">
          If an app can do its work on your device, it does. If it needs a server, we say exactly
          what is sent, why, and who handles it.
        </SectionHeading>

        <dl className="mt-16 grid gap-px overflow-hidden rounded-[28px] bg-white/10 sm:mt-20 md:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.label} className="reveal flex flex-col-reverse justify-end gap-3 bg-ink p-8 sm:p-10">
              <dt className="max-w-[26ch] text-[1.0625rem] leading-snug text-white/70">{stat.label}</dt>
              <dd className="display-xl bg-[linear-gradient(180deg,#fff,#a7a2ff)] bg-clip-text text-transparent tabular-nums">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>

        <div className="mt-10 text-center">
          <ArrowLink href="/legal" tone="dark">
            Read every policy in the legal centre
          </ArrowLink>
        </div>
      </Container>
    </section>
  );
}
