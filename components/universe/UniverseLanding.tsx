"use client";

import { motion } from "framer-motion";
import Starfield from "@/components/Intro/Starfield";
import MemoryConstellation from "@/components/Memories/MemoryConstellation";
import ParallaxScene from "./ParallaxScene";

export default function UniverseLanding() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black">

      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#23104b_0%,#090915_45%,#000000_100%)]" />

      <ParallaxScene>
  <Starfield count={180} />
  <MemoryConstellation />
</ParallaxScene>

      {/* Title */}
      <div className="relative z-20 flex min-h-screen items-center justify-center pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <h1 className="text-6xl md:text-8xl font-bold text-white">
            MAHI'S UNIVERSE
          </h1>

          <p className="mt-6 text-white/70 text-xl">
            Every star holds a memory.
          </p>

          <button
  className="pointer-events-auto mt-10 rounded-full border border-white/20 px-10 py-4 text-white hover:bg-white hover:text-black transition"
>
  Begin Journey ✨
</button>
        </motion.div>
      </div>

    </main>
  );
}