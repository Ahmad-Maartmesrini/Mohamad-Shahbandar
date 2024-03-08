"use client";
import { DirectionAwareHover } from "./direction-aware-hover";

export function SmartImage({ url }: { url: string }) {
  return (
    <div className="relative flex items-center justify-center">
      <DirectionAwareHover imageUrl={url} children={undefined} />
    </div>
  );
}
