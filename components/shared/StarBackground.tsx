"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

type Star = {
  id: number;
  left: number;
  top: number;
  size: number;
  opacity: number;
  duration: number;
  delay: number;
};

export default function StarBackground() {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    const generated = Array.from({ length: 260 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      size:
        Math.random() < 0.75
          ? Math.random() * 2 + 1
          : Math.random() * 4 + 2,
      opacity: Math.random() * 0.5 + 0.3,
      duration: Math.random() * 5 + 4,
      delay: Math.random() * 5,
    }));

    setStars(generated);
  }, []);

  if (stars.length === 0) return null;

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute rounded-full bg-white"
          style={{
            left: `${star.left}%`,
            top: `${star.top}%`,
            width: star.size,
            height: star.size,
            boxShadow:
              star.size > 3
                ? "0 0 10px white,0 0 22px rgba(180,120,255,.8)"
                : "0 0 6px rgba(255,255,255,.8)",
          }}
          animate={{
            opacity: [star.opacity, 1, star.opacity],
            scale: [1, 1.6, 1],
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