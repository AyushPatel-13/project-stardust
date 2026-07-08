"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

type Star = {
  id: number;
  left: string;
  top: string;
};

type Props = {
  count?: number;
};

export default function Starfield({ count = 20 }: Props) {
  const [mounted, setMounted] = useState(false);
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    setMounted(true);

    const generated = Array.from({ length: count }, (_, index) => ({
      id: index,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
    }));

    setStars(generated);
  }, [count]);

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 pointer-events-none">
      {stars.map((star) => (
        <motion.div
  key={star.id}
  className="absolute rounded-full bg-white"
  style={{
    left: star.left,
    top: star.top,
    width: "3px",
    height: "3px",
    boxShadow: "0 0 8px white",
  }}
  animate={{
    opacity: [0.3, 1, 0.3],
    scale: [1, 1.4, 1],
    y: [0, -4, 0],
  }}
  transition={{
    duration: 3 + Math.random() * 4,
    repeat: Infinity,
    ease: "easeInOut",
    delay: Math.random() * 2,
  }}
/>
      ))}
    </div>
  );
}