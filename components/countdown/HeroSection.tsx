"use client";

import { motion } from "framer-motion";
import Countdown from "./Countdown";

export default function HeroSection() {
  return (
    <div
      className="
        absolute
        top-[270px]
        left-1/2
        -translate-x-1/2
        z-30
        w-full
        max-w-5xl
        px-6
        text-center
      "
    >
      {/* Subtitle */}

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="
          text-yellow-200
          uppercase
          tracking-[0.7em]
          text-sm
        "
      >
        THE UNIVERSE IS WAITING
      </motion.p>

      {/* Name */}

      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="
          mt-8
          text-[90px]
          md:text-[130px]
          font-light
          italic
          leading-none
          text-white
          drop-shadow-[0_0_40px_rgba(255,255,255,.35)]
        "
      >
        Mahi
      </motion.h1>

      {/* Description */}

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="
          mt-8
          text-xl
          text-white/70
        "
      >
        Every second brings us closer to your special day ❤️
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
        className="mt-24"
      >
        <Countdown />
      </motion.div>
    </div>
  );
}