import { AppArt } from "@/components/apps/app-art";
import { AppIcon } from "@/components/apps/app-icon";
import { PlatformList } from "@/components/apps/platform-list";
import { ArrowLink, ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { featuredApps, type AppEntry } from "@/lib/apps";

type TileProps = {
  app: AppEntry;
  tone: "light" | "dark";
  /** `wide` spans the grid with copy beside the artwork; `tall` stacks them. */
  layout: "wide" | "tall";
  flip?: boolean;
};

const privacyHref = (app: AppEntry) =>
  app.legal.find((doc) => doc.kind === "privacy")?.href ?? "/legal";

function FeatureTile({ app, tone, layout, flip = false }: TileProps) {
  const dark = tone === "dark";
  const wide = layout === "wide";

  return (
    <article
      className={`reveal overflow-hidden rounded-[32px] ${dark ? "bg-ink text-white" : "bg-white text-ink"} ${
        wide ? "md:col-span-2" : ""
      }`}
    >
      <div
        className={`flex h-full flex-col gap-12 px-7 py-12 sm:px-12 sm:py-16 ${
          wide ? `md:items-center md:gap-16 lg:px-20 ${flip ? "md:flex-row-reverse" : "md:flex-row"}` : "items-center text-center"
        }`}
      >
        <div className={wide ? "md:w-1/2" : "max-w-[440px]"}>
          <div className={`flex items-center gap-3 ${wide ? "" : "justify-center"}`}>
            <AppIcon app={app} size={44} />
            <p className={`text-[0.8125rem] font-medium ${dark ? "text-white/60" : "text-mute"}`}>
              {app.category} · <PlatformList platforms={app.platforms} />
            </p>
          </div>
          <h3 className="display-md mt-6">{app.name}</h3>
          <p className={`lede mt-3 ${dark ? "text-white/75" : "text-mute"}`}>{app.tagline}</p>
          <div className={`mt-7 flex flex-wrap items-center gap-x-6 gap-y-1 ${wide ? "" : "justify-center"}`}>
            <ButtonLink href={`/apps/${app.slug}`} variant={dark ? "inverse" : "primary"}>
              Learn more
              <span className="sr-only"> about {app.name}</span>
            </ButtonLink>
            <ArrowLink href={privacyHref(app)} tone={tone}>
              Privacy
              <span className="sr-only"> policy for {app.name}</span>
            </ArrowLink>
          </div>
        </div>

        <div className={wide ? "w-full md:w-1/2" : "mt-auto w-full"}>
          <AppArt app={app} tone={tone} />
        </div>
      </div>
    </article>
  );
}

// Tile treatment by position: a wide dark opener, two tall tiles, a wide closer.
const layouts: readonly Omit<TileProps, "app">[] = [
  { tone: "dark", layout: "wide" },
  { tone: "light", layout: "tall" },
  { tone: "dark", layout: "tall" },
  { tone: "light", layout: "wide", flip: true },
];

export function FeaturedApps() {
  return (
    <section className="bg-mist pt-24 pb-3 sm:pt-32">
      <Container>
        <SectionHeading eyebrow="Latest from the studio" title="New, and worth a look.">
          From a car marketplace to a Mac cleaner that never goes online.
        </SectionHeading>
      </Container>

      <Container width="wide" className="mt-14 px-3 sm:mt-20 sm:px-4">
        <div className="grid gap-3 md:grid-cols-2 sm:gap-4">
          {featuredApps.map((app, index) => (
            <FeatureTile key={app.slug} app={app} {...layouts[index % layouts.length]} />
          ))}
        </div>
      </Container>
    </section>
  );
}
