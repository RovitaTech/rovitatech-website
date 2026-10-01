import Image from "next/image";
import {
  CalendarClock,
  CarFront,
  Download,
  Eraser,
  FileText,
  HardDrive,
  Image as ImageIcon,
  Laugh,
  MessageSquareQuote,
  PiggyBank,
  ReceiptText,
  Route,
  SquareParking,
  Video,
  type LucideIcon,
} from "lucide-react";

import type { AppGlyph } from "@/lib/apps";

const glyphs: Record<AppGlyph, LucideIcon> = {
  car: CarFront,
  document: FileText,
  disk: HardDrive,
  calendar: CalendarClock,
  piggy: PiggyBank,
  receipt: ReceiptText,
  laugh: Laugh,
  eraser: Eraser,
  image: ImageIcon,
  video: Video,
  post: MessageSquareQuote,
  download: Download,
  parking: SquareParking,
  route: Route,
};

type IconSource = {
  name: string;
  glyph: AppGlyph;
  tint: readonly [string, string];
  icon?: string;
};

/**
 * App icon tile. Uses the real icon when `app.icon` is set, otherwise a
 * gradient tile with a glyph. Decorative: the app name always sits next to it.
 */
export function AppIcon({ app, size = 64 }: { app: IconSource; size?: number }) {
  const radius = Math.round(size * 0.225);

  if (app.icon) {
    return (
      <Image
        src={app.icon}
        alt=""
        width={size}
        height={size}
        style={{ borderRadius: radius }}
        className="shrink-0 shadow-[0_0_0_1px_rgba(0,0,0,0.06),0_1px_2px_rgba(0,0,0,0.12),0_8px_24px_-8px_rgba(0,0,0,0.3)]"
      />
    );
  }

  const Glyph = glyphs[app.glyph];
  return (
    <span
      aria-hidden="true"
      style={{
        width: size,
        height: size,
        borderRadius: radius,
        backgroundImage: `linear-gradient(150deg, ${app.tint[0]}, ${app.tint[1]})`,
      }}
      className="relative inline-grid shrink-0 place-items-center text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.35),0_1px_2px_rgba(0,0,0,0.12),0_10px_24px_-10px_rgba(0,0,0,0.45)]"
    >
      <Glyph size={Math.round(size * 0.5)} strokeWidth={1.6} />
    </span>
  );
}
