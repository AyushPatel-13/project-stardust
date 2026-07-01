"use client";

import { motion } from "framer-motion";

const stars = Array.from({ length: 280 }, (_, i) => ({
  id: i,
  left: Math.random() * 100,
  top: Math.random() * 100,
  size: Math.random() * 2.8 + 0.6,
  duration: Math.random() * 6 + 4,
  delay: Math.random() * 4,
}));

export default function StarField() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">

      {stars.map((star) => (
        <motion.div
  key={star.id}
  className="absolute rounded-full"
  style={{
    left: `${star.left}%`,
    top: `${star.top}%`,
    width: star.size,
    height: star.size,
    background: "white",
    boxShadow: `0 0 ${star.size * 8}px rgba(255,255,255,0.8)`,
  }}
  animate={{
    opacity: [0.15, 1, 0.35, 0.9, 0.15],
    scale: [1, 1.8, 1, 1.4, 1],
  }}
  transition={{
    duration: star.duration,
    repeat: Infinity,
    delay: star.delay,
    ease: "easeInOut",
  }}
/>
      ))}

    </div>
  );
}