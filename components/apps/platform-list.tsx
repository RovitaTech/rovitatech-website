import { platformLabel, platformOrder, type Platform } from "@/lib/apps";

/** "iPhone · Android · Web" */
export function PlatformList({
  platforms,
  className = "",
}: {
  platforms: readonly Platform[];
  className?: string;
}) {
  const ordered = platformOrder.filter((platform) => platforms.includes(platform));
  return (
    <span className={className}>{ordered.map((platform) => platformLabel[platform]).join(" · ")}</span>
  );
}
