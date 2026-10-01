/**
 * What Rovitatech offers to clients: services, the technology behind them,
 * and how a project runs. Shared by the home page, /services and /about.
 */

export const services = [
  {
    glyph: "phone",
    title: "Mobile apps",
    description:
      "iPhone and Android apps from a single codebase, from the first screen to the store listing.",
    includes: ["Flutter", "App Store & Google Play release", "Push, chat, camera, maps"],
  },
  {
    glyph: "web",
    title: "Web apps and websites",
    description:
      "Fast, responsive sites and dashboards: marketing pages, admin portals and full web products.",
    includes: ["Next.js & React", "Admin and staff portals", "SEO and performance"],
  },
  {
    glyph: "server",
    title: "Backends and APIs",
    description:
      "The server side of your product: accounts, data, file processing and the API your apps talk to.",
    includes: ["NestJS & FastAPI", "PostgreSQL", "Auth, roles and permissions"],
  },
  {
    glyph: "mac",
    title: "Mac apps",
    description:
      "Desktop utilities that feel at home on macOS and work on your files locally.",
    includes: ["On-device processing", "Mac App Store release"],
  },
  {
    glyph: "card",
    title: "Subscriptions and payments",
    description:
      "In-app purchases and subscriptions that stay in sync across devices, billed through the stores.",
    includes: ["RevenueCat", "App Store & Google Play billing", "Free and Pro tiers"],
  },
  {
    glyph: "rocket",
    title: "Launch and care",
    description:
      "Store review, privacy policies, hosting and the updates that keep an app healthy after day one.",
    includes: ["Store submission", "Privacy policy and terms", "Monitoring and updates"],
  },
] as const;

export type ServiceGlyph = (typeof services)[number]["glyph"];

/** The stack, grouped the way a spec sheet would list it. */
export const stack = [
  { group: "Languages", items: ["TypeScript", "JavaScript", "Dart", "Python", "SQL"] },
  { group: "Mobile", items: ["Flutter", "iOS", "Android"] },
  { group: "Web", items: ["Next.js", "React", "Tailwind CSS"] },
  { group: "Backend", items: ["Node.js", "NestJS", "FastAPI", "PostgreSQL", "REST APIs"] },
  {
    group: "Cloud and services",
    items: ["Supabase", "Firebase", "Railway", "Vercel", "Docker", "RevenueCat", "Cloudinary", "Google Maps Platform"],
  },
] as const;

export const processSteps = [
  {
    title: "Understand",
    description:
      "We start with the problem, the people who have it, and what a first version must do. You get a clear scope before any code is written.",
  },
  {
    title: "Design",
    description:
      "Key screens and flows, designed so every one has a purpose. You see the product before it is built.",
  },
  {
    title: "Build",
    description:
      "Short cycles with working builds you can install and try, so feedback arrives while it is still cheap to act on.",
  },
  {
    title: "Launch and look after",
    description:
      "Store submission, hosting and monitoring, then the fixes and improvements that follow real use.",
  },
] as const;
