"use client";
import { DirectionAwareHover } from "./direction-aware-hover";

export function SmartImage({ url }: { url: string }) {
//   const imageUrl = "https://images.unsplash.com/photo-1663765970236-f2acfde22237?q=80&w=3542&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  return (
    <div className="h-[40rem] relative  flex items-center justify-center">
      <DirectionAwareHover imageUrl={url} />
    </div>
  );
}
