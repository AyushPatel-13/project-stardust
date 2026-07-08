"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import StarField from "@/components/countdown/StarField";

type IntroSceneProps = {
  onComplete: () => void;
};

export default function IntroScene({
  onComplete,
}: IntroSceneProps) {
  const [showStars, setShowStars] = useState(false);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
  const starTimer = setTimeout(() => {
    setShowStars(true);
  }, 1800);

  const textTimer = setTimeout(() => {
    setShowText(true);
  }, 4200);

  return () => {
    clearTimeout(starTimer);
    clearTimeout(textTimer);
  };
}, []);

useEffect(() => {
  const timer = setTimeout(() => {
    onComplete();
  }, 7000);

  return () => clearTimeout(timer);
}, [onComplete]);

  return (
    <main className="relative h-screen overflow-hidden bg-black">

      {/* Purple Nebula */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: showStars ? 1 : 0 }}
        transition={{ duration: 3 }}
        className="
          absolute
          left-1/2
          top-1/2
          h-[900px]
          w-[900px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-purple-700/20
          blur-[200px]
        "
      />

      {/* Star Field */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: showStars ? 1 : 0 }}
        transition={{ duration: 3 }}
      >
        <StarField />
      </motion.div>

      {/* First Star */}
      <motion.div
        initial={{
          scale: 0,
          opacity: 0,
        }}
        animate={{
          scale: [0, 1.3, 1],
          opacity: 1,
        }}
        transition={{
          duration: 2,
          ease: "easeOut",
        }}
        className="
          absolute
          left-1/2
          top-1/2
          h-2
          w-2
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-white
          shadow-[0_0_45px_white]
        "
      />

      {/* Text */}
      {showText && (
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
          }}
          className="
            absolute
            left-1/2
            top-[65%]
            -translate-x-1/2
            text-center
          "
        >
          <p className="text-2xl text-white tracking-[0.35em]">
            THE UNIVERSE AWAKENS...
          </p>
        </motion.div>
      )}

    </main>
  );
}