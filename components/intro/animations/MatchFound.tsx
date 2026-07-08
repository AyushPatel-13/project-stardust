"use client";

import { motion } from "framer-motion";

export default function MatchFound() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.8,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
      className="flex flex-col items-center"
    >
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.7, 1, 0.7],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        className="text-5xl mb-4"
      >
        ✨
      </motion.div>

      <h1
        className="
          text-5xl
          md:text-7xl
          font-bold
          text-white
          tracking-[0.25em]
          drop-shadow-[0_0_25px_rgba(255,255,255,0.6)]
        "
      >
        MATCH FOUND
      </h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
        transition={{ delay: 0.8 }}
        className="mt-6 text-white/60 tracking-[0.35em] uppercase text-sm"
      >
        Identity Confirmed
      </motion.p>
    </motion.div>
  );
}