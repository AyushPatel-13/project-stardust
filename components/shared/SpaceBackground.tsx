"use client";

import { motion } from "framer-motion";
import StarField from "./StarField";

export default function SpaceBackground() {
  return (
    <>
      {/* Deep Space */}
      <div className="fixed inset-0 -z-50 bg-[#02030b]" />

      {/* Purple Gradient */}
      <div
        className="fixed inset-0 -z-40"
        style={{
          background:
            "radial-gradient(circle at center, rgba(95,60,255,.35) 0%, rgba(30,18,65,.55) 35%, rgba(8,8,20,.92) 70%, #000 100%)",
        }}
      />

      {/* Left Nebula */}
      <motion.div
        className="fixed -left-60 top-0 -z-30 h-[900px] w-[900px] rounded-full bg-purple-500/20 blur-[220px]"
        animate={{
          x: [0, 60, 0],
          y: [0, 40, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Right Nebula */}
      <motion.div
        className="fixed -right-60 bottom-0 -z-30 h-[800px] w-[800px] rounded-full bg-indigo-500/15 blur-[200px]"
        animate={{
          x: [0, -50, 0],
          y: [0, -30, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Galaxy Core */}
      <motion.div
        className="fixed left-1/2 top-1/2 -z-20 h-[650px] w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-fuchsia-500/10 blur-[180px]"
        animate={{
          scale: [1, 1.12, 1],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Stars */}
      <StarField />
    </>
  );
}