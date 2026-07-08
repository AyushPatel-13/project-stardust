"use client";

import { motion } from "framer-motion";

type Props = {
  duration?: number;
};

export default function ProgressBar({
  duration = 2200,
}: Props) {
  return (
    <div className="w-[420px] max-w-[80vw]">

      <motion.div
        className="mb-5 text-white/70 text-sm tracking-[0.3em] uppercase"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        Searching...
      </motion.div>

      <div className="relative h-[4px] rounded-full overflow-hidden bg-white/10">

        <motion.div
          className="absolute left-0 top-0 h-full rounded-full"
          style={{
            background:
              "linear-gradient(90deg,#6d5dfc,#7c8cff,#b9c4ff,#ffffff)",
            boxShadow:
              "0 0 12px rgba(124,140,255,.8)",
          }}
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{
            duration: duration / 1000,
            ease: "easeInOut",
          }}
        />

      </div>

    </div>
  );
}