"use client";
import { motion } from "framer-motion";
import { LampContainer } from "./lamp";

export function LampDemo() {
  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-10 bg-gradient-to-b from-white/20 to-white/80 py-4 bg-clip-text text-center font-bold
        text-transparent drop-shadow-2xl text-5xl md:text-7xl lg:text-9xl"
      >
        Crafting Brands<br />the Right Way
      </motion.h1>
    </LampContainer>
  );
}
