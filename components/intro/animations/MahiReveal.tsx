"use client";

import { motion } from "framer-motion";

const letters = ["M", "A", "H", "I"];

export default function MahiReveal() {
  return (
    <div className="flex items-center justify-center gap-5">
      {letters.map((letter, index) => (
        <motion.span
          key={letter}
          initial={{
            opacity: 0,
            y: 20,
            scale: 0.7,
          }}
          animate={{
  opacity: 1,
  y: [20, -6, 0],
  scale: [0.5, 1.25, 1],
}}
          transition={{
  delay: index * 0.7,
  duration: 0.8,
  ease: "easeOut",
}}
          className="
text-white
text-6xl
md:text-8xl
font-bold
tracking-[0.25em]
drop-shadow-[0_0_30px_rgba(255,255,255,.9)]
"
        >
          {letter}
        </motion.span>
      ))}
    </div>
  );
}