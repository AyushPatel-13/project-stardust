"use client";

import { motion } from "framer-motion";

const letters = ["M", "A", "H", "I"];

export default function StardustReveal() {
  return (
    <div className="relative flex items-center justify-center gap-6">
      {letters.map((letter, index) => (
        <motion.div
          key={letter}
          className="relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: index * 0.8,
          }}
        >
          {/* Glow behind each letter */}
          <motion.div
            className="absolute inset-0 rounded-full"
            initial={{
              scale: 0,
              opacity: 0,
            }}
            animate={{
              scale: [0, 2.5, 1.2],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              delay: index * 0.8,
              duration: 0.8,
            }}
            style={{
              background:
                "radial-gradient(circle, rgba(255,255,255,0.8), transparent 70%)",
              filter: "blur(12px)",
            }}
          />

          <motion.span
            initial={{
              scale: 0,
              opacity: 0,
              y: 30,
            }}
            animate={{
              scale: [0, 1.2, 1],
              opacity: 1,
              y: [30, -8, 0],
            }}
            transition={{
              delay: index * 0.8,
              duration: 0.7,
              ease: "easeOut",
            }}
            className="relative text-7xl md:text-9xl font-bold text-white drop-shadow-[0_0_25px_white]"
          >
            {letter}
          </motion.span>
        </motion.div>
      ))}
    </div>
  );
}