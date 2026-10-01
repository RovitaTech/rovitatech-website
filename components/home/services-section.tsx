import { ServiceList } from "@/components/services/service-list";
import { ArrowLink, ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { stack } from "@/lib/services";

const allTech = stack.flatMap((row) => row.items);

export function ServicesSection() {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <SectionHeading eyebrow="For clients" title="We build yours the way we build ours.">
          The team behind these apps is available for your product: design, mobile, web and
          backend, taken from idea to launch.
        </SectionHeading>
      </Container>

      <Container width="wide" className="mt-14 px-3 sm:mt-20 sm:px-4">
        <ServiceList />
      </Container>

      <Container className="mt-16 text-center sm:mt-20">
        <p className="eyebrow text-mute">What we work with</p>
        <ul className="mx-auto mt-5 flex max-w-[860px] flex-wrap justify-center gap-2">
          {allTech.map((item) => (
            <li
              key={item}
              className="rounded-full px-4 py-2 text-[0.9375rem] font-medium text-graphite shadow-[inset_0_0_0_1px_var(--color-line)]"
            >
              {item}
            </li>
          ))}
        </ul>
        <div className="mt-10 flex flex-col items-center justify-center gap-x-7 gap-y-2 sm:flex-row">
          <ButtonLink href="/services">See our services</ButtonLink>
          <ArrowLink href="/apps">See our work</ArrowLink>
        </div>
      </Container>
    </section>
  );
}
