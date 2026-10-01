/**
 * The Rovitatech app catalogue: the single source of truth for the home
 * page, /apps, each app page, the legal centre, the footer and the sitemap.
 *
 * To add an app: add an entry here, then add its policy page under
 * app/privacy-policy/<slug>/page.tsx. Nothing else needs to change.
 *
 * Everything under `privacy` is a plain-language summary of that app's
 * published policy. Keep the two in sync when a policy changes.
 */

export type Platform = "iPhone" | "Android" | "Mac" | "Web" | "Mobile";

export type AppCategory =
  | "Marketplace"
  | "Productivity"
  | "Business"
  | "Family"
  | "Finance"
  | "Photo & video"
  | "Creativity"
  | "Navigation"
  | "Utilities";

export type AppGlyph =
  | "car"
  | "document"
  | "disk"
  | "calendar"
  | "piggy"
  | "receipt"
  | "laugh"
  | "eraser"
  | "image"
  | "video"
  | "post"
  | "download"
  | "parking"
  | "route";

export type LegalKind = "privacy" | "terms";

export type LegalDoc = {
  kind: LegalKind;
  href: string;
  /** BCP 47 language tag of the document. */
  lang: "en" | "es-MX";
  /** ISO date (or year-month) of the latest revision, used for sorting. */
  updated: string;
  /** Human-readable form of `updated`. */
  updatedLabel: string;
};

export type StoreLinks = {
  appStore?: string;
  googlePlay?: string;
  macAppStore?: string;
  website?: string;
};

export type AppEntry = {
  slug: string;
  name: string;
  category: AppCategory;
  platforms: readonly Platform[];
  tagline: string;
  summary: string;
  features: readonly string[];
  privacy: readonly string[];
  /** Processes everything on the device and collects nothing. */
  onDevice: boolean;
  /** Core features work without creating an account. */
  noAccount: boolean;
  glyph: AppGlyph;
  /** Gradient stops for the app's icon tile and accents. */
  tint: readonly [string, string];
  /** Optional real icon in /public (e.g. "/apps/carmexio.png"). */
  icon?: string;
  links?: StoreLinks;
  featured?: boolean;
  legal: readonly LegalDoc[];
};

export const apps: readonly AppEntry[] = [
  {
    slug: "carmexio",
    name: "Carmexio",
    category: "Marketplace",
    platforms: ["iPhone", "Android", "Web"],
    tagline: "Inspected pre-owned cars, bought and sold with confidence.",
    summary:
      "Carmexio is a pre-owned car dealer in Mexico. Every car is inspected and sold through a Carmexio showroom, so buyers deal with Carmexio rather than a stranger.",
    features: [
      "Browse, search and read inspection reports without an account",
      "Inspection reports with an overall score, checklist and body condition",
      "List your own car with guided photos, one per required angle",
      "Chat with a Carmexio showroom inside the app",
      "Save favourites and keep track of your listings",
    ],
    privacy: [
      "No advertising and no third-party analytics or ad SDKs",
      "You can browse without creating an account",
      "Camera and photo library are used only when you take or choose a photo",
      "No access to contacts, microphone or precise location",
    ],
    onDevice: false,
    noAccount: true,
    glyph: "car",
    tint: ["#12b76a", "#04603a"],
    featured: true,
    legal: [
      {
        kind: "privacy",
        href: "/privacy-policy/carmexio",
        lang: "en",
        updated: "2026-10-01",
        updatedLabel: "October 1, 2026",
      },
      {
        kind: "privacy",
        href: "/privacy-policy/carmexio/es",
        lang: "es-MX",
        updated: "2026-10-01",
        updatedLabel: "1 de octubre de 2026",
      },
    ],
  },
  {
    slug: "pdf4you",
    name: "PDF4you",
    category: "Productivity",
    platforms: ["iPhone", "Android"],
    tagline: "Convert, edit and protect PDFs in a few taps.",
    summary:
      "PDF4you is a PDF conversion and editing app. Pick a file, pick a tool, and get the result back, with or without an account.",
    features: [
      "Convert and edit documents",
      "Protect a PDF with a password, or unlock one",
      "Add a watermark or a signature you draw",
      "Choose page ranges and image quality",
      "PDF4you Pro for higher limits",
    ],
    privacy: [
      "No ads, and your data is never sold",
      "Files are not used for advertising or to train any product",
      "Files travel over an encrypted connection and are used only to produce your result",
      "An account is optional; you need one only to buy Pro",
    ],
    onDevice: false,
    noAccount: true,
    glyph: "document",
    tint: ["#ff5a4d", "#b3121f"],
    featured: true,
    legal: [
      {
        kind: "privacy",
        href: "/privacy-policy/pdf4you",
        lang: "en",
        updated: "2026-09-21",
        updatedLabel: "September 21, 2026",
      },
    ],
  },
  {
    slug: "rovidiskclean",
    name: "Rovi Disk Clean",
    category: "Utilities",
    platforms: ["Mac"],
    tagline: "The Mac cleaner that never leaves your Mac.",
    summary:
      "Rovi Disk Clean finds the files you can safely remove, from app caches to data left behind by apps you uninstalled long ago, and does all of it on your device.",
    features: [
      "Find app caches and see which app each one belongs to",
      "Detect data left behind by apps that are no longer installed",
      "Spot large files by size alone",
      "Developer cleanup for unused Android NDK versions",
      "See total and free space on your startup disk",
    ],
    privacy: [
      "Runs entirely on your Mac",
      "No accounts, no analytics, no advertising and no tracking",
      "Never opens or analyses the contents of your documents, photos or messages",
      "Scan results live in memory and are discarded when you quit",
    ],
    onDevice: true,
    noAccount: true,
    glyph: "disk",
    tint: ["#5b8cff", "#1b00b3"],
    featured: true,
    legal: [
      {
        kind: "privacy",
        href: "/privacy-policy/rovidiskclean",
        lang: "en",
        updated: "2026-09-30",
        updatedLabel: "September 30, 2026",
      },
    ],
  },
  {
    slug: "crewzeitplan",
    name: "CrewZeitplan",
    category: "Business",
    platforms: ["Mobile"],
    tagline: "Scheduling, attendance and payroll for cleaning crews.",
    summary:
      "CrewZeitplan lets an owner plan who works where, record attendance and turn the hours into pay, while each worker sees their own schedule and earnings.",
    features: [
      "Build schedules across workers and locations",
      "Record attendance: present, absent, holiday or leave",
      "Payroll calculated from hours and hourly wages",
      "Monthly pay statements generated as PDFs on the device",
      "Separate sign-in for owners and workers",
    ],
    privacy: [
      "No advertising and no third-party analytics or ad SDKs",
      "Information is used only to run the app's core features",
      "Pay statement PDFs are created on your device and not stored on our servers",
      "Personal information is never sold",
    ],
    onDevice: false,
    noAccount: false,
    glyph: "calendar",
    tint: ["#ffb340", "#d9480f"],
    featured: true,
    legal: [
      {
        kind: "privacy",
        href: "/privacy-policy/crewzeitplan",
        lang: "en",
        updated: "2026-09-22",
        updatedLabel: "September 22, 2026",
      },
    ],
  },
  {
    slug: "bilybucks",
    name: "BilyBucks",
    category: "Family",
    platforms: ["iPhone", "Android"],
    tagline: "Chores, responsibilities and rewards for the whole family.",
    summary:
      "BilyBucks is a family reward system: parents set responsibilities, children complete them, and rewards follow.",
    features: [
      "Manage family reward systems and responsibilities",
      "Parents stay in control of their children's data",
      "Optional subscription that unlocks premium features",
      "Subscription status kept in sync across devices",
    ],
    privacy: [
      "Your email address is collected only to save your data",
      "Purchases are processed by the App Store and Google Play, not by us",
      "We do not store your full card or bank details",
      "Children's data is limited to what parents enter",
    ],
    onDevice: false,
    noAccount: false,
    glyph: "piggy",
    tint: ["#a78bfa", "#6d28d9"],
    legal: [
      {
        kind: "privacy",
        href: "/privacy-policy/bilybucks",
        lang: "en",
        updated: "2026-05-05",
        updatedLabel: "May 5, 2026",
      },
      {
        kind: "terms",
        href: "/terms-of-use/bilybucks",
        lang: "en",
        updated: "2026-05-05",
        updatedLabel: "May 5, 2026",
      },
    ],
  },
  {
    slug: "owebuddy",
    name: "OweBuddy",
    category: "Finance",
    platforms: ["Mobile"],
    tagline: "Split bills, settle up, stay friends.",
    summary:
      "OweBuddy tracks shared expenses in groups, works out who owes whom, and keeps a record when a balance is settled.",
    features: [
      "Split bills and track expenses in groups",
      "Balances calculated between group members",
      "Settlement requests with payment proof",
      "Receipt photos attached to expenses",
      "PDF expense reports",
    ],
    privacy: [
      "Personal information is never sold to third parties",
      "No bank account numbers, card details or payment credentials are collected",
      "Data is not shared with advertisers",
      "You can delete your data at any time",
    ],
    onDevice: false,
    noAccount: false,
    glyph: "receipt",
    tint: ["#34d399", "#0f766e"],
    legal: [
      {
        kind: "privacy",
        href: "/privacy-policy/owebuddy",
        lang: "en",
        updated: "2026-01-15",
        updatedLabel: "January 15, 2026",
      },
    ],
  },
  {
    slug: "memeforge",
    name: "MemeForge",
    category: "Creativity",
    platforms: ["iPhone", "Android"],
    tagline: "Turn your photos and videos into memes.",
    summary:
      "MemeForge is a meme maker that works with the photos and videos already on your phone, or ones you capture on the spot.",
    features: [
      "Create memes from photos and videos",
      "Pick from your gallery or capture with the camera",
      "Online templates to start from",
      "Premium subscription removes ads",
    ],
    privacy: [
      "No account required",
      "Your media is processed on your device and not uploaded to our servers",
      "Memes you create are stored on your device only",
      "The free version shows ads through Google AdMob; Premium does not",
    ],
    onDevice: false,
    noAccount: true,
    glyph: "laugh",
    tint: ["#ff7ac6", "#c026d3"],
    legal: [
      {
        kind: "privacy",
        href: "/privacy-policy/memeforge",
        lang: "en",
        updated: "2026-01-15",
        updatedLabel: "January 15, 2026",
      },
    ],
  },
  {
    slug: "rovierase",
    name: "RoviErase",
    category: "Photo & video",
    platforms: ["Mobile"],
    tagline: "Remove the background from any photo.",
    summary:
      "RoviErase cuts the subject out of your photo and removes the background for you.",
    features: [
      "AI-powered background removal",
      "Credits with optional premium plans",
      "An account is optional",
    ],
    privacy: [
      "Images are stored only temporarily during processing, then deleted automatically",
      "Images are used only to provide background removal",
      "The app displays ads through Google AdMob",
      "You can request access to, or deletion of, your information",
    ],
    onDevice: false,
    noAccount: true,
    glyph: "eraser",
    tint: ["#38bdf8", "#4f46e5"],
    legal: [
      {
        kind: "privacy",
        href: "/privacy-policy/rovierase",
        lang: "en",
        updated: "2026-01-15",
        updatedLabel: "January 15, 2026",
      },
    ],
  },
  {
    slug: "imgpres",
    name: "ImgPres",
    category: "Photo & video",
    platforms: ["Mobile"],
    tagline: "Compress, resize, crop and convert images.",
    summary:
      "ImgPres is an image processing studio that does all of its work on your device. Your images never leave it.",
    features: [
      "Compress images",
      "Resize and crop",
      "Convert between formats",
      "Core features work without an internet connection",
    ],
    privacy: [
      "All processing happens on your device",
      "Images are never uploaded to any server",
      "No personal information, analytics or crash reports are collected",
      "No device identifiers or advertising IDs",
    ],
    onDevice: true,
    noAccount: true,
    glyph: "image",
    tint: ["#2dd4bf", "#0e7490"],
    legal: [
      {
        kind: "privacy",
        href: "/privacy-policy/imgpres",
        lang: "en",
        updated: "2026-01-15",
        updatedLabel: "January 15, 2026",
      },
    ],
  },
  {
    slug: "vidcompres",
    name: "VidCompres",
    category: "Photo & video",
    platforms: ["Mobile"],
    tagline: "Shrink and convert video, right on your device.",
    summary:
      "VidCompres compresses, converts and edits video locally. Nothing is uploaded, and there is no account to create.",
    features: [
      "Compress video",
      "Convert between formats",
      "Edit clips",
      "Optionally record video inside the app",
    ],
    privacy: [
      "All video processing happens on your device",
      "Videos are never uploaded to our servers",
      "No account, email address or personal details required",
      "Permissions are used only for the app's core features",
    ],
    onDevice: true,
    noAccount: true,
    glyph: "video",
    tint: ["#fb7185", "#be123c"],
    legal: [
      {
        kind: "privacy",
        href: "/privacy-policy/vidcompres",
        lang: "en",
        updated: "2025-01-15",
        updatedLabel: "January 15, 2025",
      },
    ],
  },
  {
    slug: "chirpfake",
    name: "ChirpFake",
    category: "Creativity",
    platforms: ["Mobile"],
    tagline: "Mock up social posts and save them as screenshots.",
    summary:
      "ChirpFake is a content creation app for composing mock posts, with text, images and a profile, and exporting them as screenshots.",
    features: [
      "Write post text and add images",
      "Set up the profile shown on the post",
      "Generate screenshots and save them to your gallery",
    ],
    privacy: [
      "Works locally on your device",
      "Nothing you create is sent to us or to third parties",
      "No analytics and no usage tracking",
      "Permissions are used only to pick images and save screenshots",
    ],
    onDevice: true,
    noAccount: true,
    glyph: "post",
    tint: ["#60a5fa", "#1d4ed8"],
    legal: [
      {
        kind: "privacy",
        href: "/privacy-policy/chirpfake",
        lang: "en",
        updated: "2025-11-21",
        updatedLabel: "November 21, 2025",
      },
    ],
  },
  {
    slug: "statussaver",
    name: "Status Saver",
    category: "Utilities",
    platforms: ["Mobile"],
    tagline: "Keep the status photos and videos you want to keep.",
    summary:
      "Status Saver – Clip Archiver saves status photos and videos from your device's storage, entirely on your device.",
    features: [
      "Save status photos and videos",
      "Everything stays in your device's storage",
      "No sign-up",
    ],
    privacy: [
      "Operates entirely on your device",
      "Does not collect, store or transmit any personal information",
      "No third-party services, analytics tools or advertising networks",
      "Nothing is uploaded to any server",
    ],
    onDevice: true,
    noAccount: true,
    glyph: "download",
    tint: ["#4ade80", "#15803d"],
    legal: [
      {
        kind: "privacy",
        href: "/privacy-policy/statussaver",
        lang: "en",
        updated: "2025-11-21",
        updatedLabel: "November 21, 2025",
      },
    ],
  },
  {
    slug: "parkglide",
    name: "Park Glide",
    category: "Navigation",
    platforms: ["Mobile"],
    tagline: "Find parking near you.",
    summary:
      "Park Glide is a parking finder: it shows parking spaces around you, with distance, reviews and ratings, and hands off to your navigation app to get there.",
    features: [
      "Search for parking near your location",
      "Distances, reviews and ratings for each place",
      "Save favourite parking spots",
      "Get directions in your navigation app",
    ],
    privacy: [
      "Location is used only while the app is in use",
      "Location is not stored on our servers",
      "Saved spots are stored locally on your device",
      "Personal information is never sold, traded or rented",
    ],
    onDevice: false,
    noAccount: true,
    glyph: "parking",
    tint: ["#818cf8", "#3730a3"],
    legal: [
      {
        kind: "privacy",
        href: "/privacy-policy/parkglide",
        lang: "en",
        updated: "2024-11-21",
        updatedLabel: "November 21, 2024",
      },
    ],
  },
  {
    slug: "roviway",
    name: "RoviWay",
    category: "Navigation",
    platforms: ["Mobile"],
    tagline: "Transit directions and places worth the trip.",
    summary:
      "RoviWay is a navigation app for public transport, with real-time transit data, nearby attractions and the routes you save.",
    features: [
      "Transit directions and routes",
      "Real-time public transport data",
      "Nearby attractions and destinations",
      "Save routes and places for quick access",
    ],
    privacy: [
      "No name, email address or phone number required",
      "No location tracking when the app is closed",
      "No access to contacts, photos, microphone or camera",
      "Data is never sold to third parties",
    ],
    onDevice: false,
    noAccount: true,
    glyph: "route",
    tint: ["#fbbf24", "#ea580c"],
    legal: [
      {
        kind: "privacy",
        href: "/privacy-policy/roviway",
        lang: "en",
        updated: "2025-01",
        updatedLabel: "January 2025",
      },
    ],
  },
];

export const featuredApps = apps.filter((app) => app.featured);
export const otherApps = apps.filter((app) => !app.featured);

export function getApp(slug: string): AppEntry | undefined {
  return apps.find((app) => app.slug === slug);
}

export const appStats = {
  total: apps.length,
  onDevice: apps.filter((app) => app.onDevice).length,
  noAccount: apps.filter((app) => app.noAccount).length,
} as const;

/** Display order for platform labels across the catalogue. */
export const platformOrder: readonly Platform[] = ["iPhone", "Android", "Mac", "Web", "Mobile"];

export const platformLabel: Record<Platform, string> = {
  iPhone: "iPhone",
  Android: "Android",
  Mac: "Mac",
  Web: "Web",
  Mobile: "Mobile",
};
