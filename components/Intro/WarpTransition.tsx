"use client";

import { motion } from "framer-motion";

export default function WarpTransition() {
  return (
    <motion.div
      className="fixed inset-0 bg-black flex items-center justify-center overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      {Array.from({ length: 120 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute bg-white rounded-full"
          style={{
            width: 2,
            height: 40,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          initial={{
  x: 0,
  y: 0,
  scaleY: 0.2,
  opacity: 0,
}}
          animate={{
  x: (Math.random() - 0.5) * 2200,
  y: (Math.random() - 0.5) * 2200,
  scaleY: 6,
  opacity: [0,1,0],
}}
          transition={{
            duration: 1.2,
            delay: Math.random() * 0.2,
          }}
        />
      ))}

      <motion.div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle, rgba(120,90,255,.35), transparent 70%)",
        }}
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 2, opacity: [0, 1, 0] }}
        transition={{ duration: 1 }}
      />
    </motion.div>
  );
}