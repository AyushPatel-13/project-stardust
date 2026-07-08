"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export default function ParallaxScene({
  children,
}: {
  children: React.ReactNode;
}) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const x = useSpring(mouseX, {
    stiffness: 40,
    damping: 20,
  });

  const y = useSpring(mouseY, {
    stiffness: 40,
    damping: 20,
  });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouseX.set((e.clientX - window.innerWidth / 2) * 0.005);
mouseY.set((e.clientY - window.innerHeight / 2) * 0.005);
    };

    window.addEventListener("mousemove", move);

    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <motion.div
      style={{
        x,
        y,
      }}
      className="absolute inset-0"
    >
      {children}
    </motion.div>
  );
}