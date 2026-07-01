"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const petals = Array.from({ length: 35 }, (_, i) => ({
  id: i,
  left: Math.random() * 100,
  duration: 12 + Math.random() * 8,
  delay: Math.random() * 8,
  size: 40 + Math.random() * 30,
}));

export default function RosePetals() {
  return (
    <>
      {petals.map((petal) => (
        <motion.div
          key={petal.id}
          className="absolute top-[-10%] z-30 pointer-events-none"
          style={{
            left: `${petal.left}%`,
          }}
          animate={{
            y: ["0vh", "120vh"],
            x: [0, 40, -20, 35, -15],
            rotate: [-20, 15, -15, 10],
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: petal.duration,
            repeat: Infinity,
            delay: petal.delay,
            ease: "linear",
          }}
        >
          <Image
  src="/images/petals/petal.png"
  alt=""
  width={40 + Math.random() * 25}
  height={40 + Math.random() * 25}
  className="drop-shadow-[0_0_8px_rgba(255,120,120,0.7)]"
/>
        </motion.div>
      ))}
    </>
  );
}