"use client";

import { motion } from "framer-motion";

const stars = Array.from({ length: count }, (_, i) => ({
  id: i,
  left: Math.random() * 100,
  top: Math.random() * 100,
  size: Math.random() * 10 + 4,
  type: Math.random(),
  duration: Math.random() * 4 + 3,
  delay: Math.random() * 5,
}));

export default function ShootingStars() {
  return (
    <>
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute pointer-events-none z-10"
          style={{
            top: star.top,
            left: star.left,
          }}
          initial={{
            x: 0,
            y: 0,
            opacity: 0,
          }}
          animate={{
            x: [0, 260],
            y: [0, 260],
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: 0.9,
            delay: star.delay,
            repeat: Infinity,
            repeatDelay: 4,
            ease: "easeOut",
          }}
        >
          <div className="relative rotate-45">

  <div
    className="
      h-[2px]
      w-44
      rounded-full
      bg-gradient-to-r
      from-white
      via-white
      to-transparent
    "
  />

  <div
    className="
      absolute
      right-0
      top-1/2
      h-2
      w-2
      -translate-y-1/2
      rounded-full
      bg-white
      shadow-[0_0_18px_white]
    "
  />

</div>
        </motion.div>
      ))}
    </>
  );
}