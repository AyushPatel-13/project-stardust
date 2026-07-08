"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Star from "./Star";

type Star = {
  id: number;
  left: number;
  top: number;
  size: number;
  duration: number;
  delay: number;

  type: number;
  rotate: number;
};

export default function Starfield({
  count = 280,
}: {
  count?: number;
}) {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    const generated = Array.from({ length: count }, (_, i) => ({
      id: i,

      left: Math.random() * 100,

      top: Math.random() * 100,

      size: Math.random() * 2.5 + 0.4,

      type: Math.random(),

      duration: Math.random() * 6 + 4,

      delay: Math.random() * 4,

      rotate: Math.random() * 360,
    }));

    setStars(generated);
  }, [count]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {stars.map((star) => (
  <Star
    key={star.id}
    left={star.left}
    top={star.top}
    size={star.size}
    duration={star.duration}
    delay={star.delay}
  />
))}
    </div>
  );
}