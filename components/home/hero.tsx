import { AppIcon } from "@/components/apps/app-icon";
import { ArrowLink, ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { apps, appStats } from "@/lib/apps";
import { numberWord } from "@/lib/format";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-ink text-white">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(70%_55%_at_50%_0%,rgba(60,105,225,0.5),transparent_70%),radial-gradient(40%_30%_at_85%_10%,rgba(10,40,112,0.55),transparent_70%)]"
      />

      <Container className="pt-24 pb-16 text-center sm:pt-32 sm:pb-20">
        <p className="eyebrow text-white/70">Rovitatech · Independent software studio</p>
        <h1 className="display-xl mx-auto mt-6 max-w-[12ch]">
          {numberWord(appStats.total)} apps. One standard.
        </h1>
        <p className="lede mx-auto mt-7 max-w-[40ch] text-white/75">
          We design, build and ship apps for iPhone, Android and Mac. Each one does its job well and
          asks for as little of your data as it can.
        </p>
        <div className="mt-9 flex flex-col items-center justify-center gap-x-7 gap-y-2 sm:flex-row">
          <ButtonLink href="/apps" variant="inverse">
            Explore the apps
          </ButtonLink>
          <ArrowLink href="/legal" tone="dark">
            Privacy policies
          </ArrowLink>
        </div>
      </Container>

      {/* Decorative icon strip. The same apps are listed, as links, below. */}
      <div
        aria-hidden="true"
        className="overflow-hidden pb-20 [mask-image:linear-gradient(90deg,transparent,black_18%,black_82%,transparent)] sm:pb-24"
      >
        <ul className="animate-marquee flex w-max gap-8 pl-8 sm:gap-11 sm:pl-11">
          {[...apps, ...apps].map((app, index) => (
            <li key={`${app.slug}-${index}`} className="grid w-[76px] justify-items-center gap-3 sm:w-[88px]">
              <AppIcon app={app} size={72} />
              <span className="w-full truncate text-center text-xs text-white/60">{app.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
