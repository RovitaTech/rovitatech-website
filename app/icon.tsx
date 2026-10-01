import { ImageResponse } from "next/og";

import { IconImage } from "@/components/brand/icon-image";

export const size = { width: 96, height: 96 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(<IconImage size={96} />, size);
}
