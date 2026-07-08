"use client";

import { motion } from "framer-motion";
import Starfield from "./Starfield";

export default function Background() {
  return (
    <div className="absolute inset-0 overflow-hidden z-0">

      {/* Background Gradient */}

      {/* <div className="absolute inset-0 bg-black" /> */}

      <motion.div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at center, rgba(88,80,236,0.18), transparent 70%)",
        }}
        animate={{
  scale: [1, 1.15, 1],
  opacity: [0.25, 0.45, 0.25],
}}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <Starfield count={100} />

    </div>
  );
}