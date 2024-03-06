"use client";
import { TextRevealCard } from "./text-reveal-card";

export function Trc() {
  return (
    <div className="flex items-center justify-center rounded-2xl h-full w-full">
      <TextRevealCard
        text="Mohamad Shahbandar"
        revealText="Graphic Designer"
      ></TextRevealCard>
    </div>
  );
}
