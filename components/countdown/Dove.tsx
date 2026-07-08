"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Dove() {
  return (
    <motion.div
      className="absolute z-20 pointer-events-none"
      initial={{
        x: 930,
        y: 90,
        opacity: 0,
      }}
      animate={{
        x: [930, 980, 950, 930],
        y: [90, 55, 75, 90],
        rotate: [-5, 8, -5],
        opacity: [0, 1, 1, 1],
      }}
      transition={{
        duration: 15,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <Image
        src="/images/dove/dove.png"
        alt="Dove"
        width={120}
        height={120}
      />
    </motion.div>
  );
}