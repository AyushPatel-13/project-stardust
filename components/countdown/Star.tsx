"use client";

import { motion } from "framer-motion";

type Props = {
  left: number;
  top: number;
  size: number;
  duration: number;
  delay: number;
};

export default function Star({
  left,
  top,
  size,
  duration,
  delay,
}: Props) {
  return (
    <motion.div
      className="absolute"
      style={{
        left: `${left}%`,
        top: `${top}%`,
        width: size * 10,
        height: size * 10,
      }}
      animate={{
        opacity: [0.3, 1, 0.4],
        scale: [1, 1.3, 1],
      }}
      transition={{
        duration,
        repeat: Infinity,
        delay,
        ease: "easeInOut",
      }}
    >
      {/* Vertical ray */}
      <div
        className="absolute bg-white rounded-full"
        style={{
          width: 2,
          height: size * 8,
          left: "50%",
          top: "50%",
          transform: "translate(-50%,-50%)",
          boxShadow: "0 0 8px white",
        }}
      />

      {/* Horizontal ray */}
      <div
        className="absolute bg-white rounded-full"
        style={{
          width: size * 8,
          height: 2,
          left: "50%",
          top: "50%",
          transform: "translate(-50%,-50%)",
          boxShadow: "0 0 8px white",
        }}
      />

      {/* Center glow */}
      <div
        className="absolute rounded-full bg-white"
        style={{
          width: size * 2,
          height: size * 2,
          left: "50%",
          top: "50%",
          transform: "translate(-50%,-50%)",
          boxShadow: "0 0 15px white",
        }}
      />
    </motion.div>
  );
}