/** What the studio builds. Shared by the home page and /about. */
export const capabilities = [
  {
    glyph: "phone",
    title: "iPhone and Android apps",
    description:
      "Consumer and business apps, from quick utilities to full marketplaces with accounts, chat and listings.",
  },
  {
    glyph: "mac",
    title: "Mac apps",
    description:
      "Native-feeling desktop tools that work on your files locally, without sending them anywhere.",
  },
  {
    glyph: "server",
    title: "Backends and APIs",
    description:
      "Sign-in, sync, file processing and storage, built on providers we name in every privacy policy.",
  },
  {
    glyph: "card",
    title: "Subscriptions and purchases",
    description:
      "In-app purchases handled through the App Store and Google Play, so we never see your card.",
  },
] as const;

export type CapabilityGlyph = (typeof capabilities)[number]["glyph"];

export const principles = [
  {
    title: "Do one job well",
    description:
      "Every app starts from a single task: split a bill, shrink a video, clear a disk. Features that do not serve it stay out.",
  },
  {
    title: "Collect less",
    description:
      "The safest data is data we never had. When work can happen on the device, that is where it happens.",
  },
  {
    title: "Say it plainly",
    description:
      "Each app has its own policy that names what is collected, why, and which providers are involved.",
  },
] as const;
