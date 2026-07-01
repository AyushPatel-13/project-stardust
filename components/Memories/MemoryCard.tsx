"use client";

import { motion } from "framer-motion";

type Props = {
  title: string;
  description: string;
  date: string;
  onClose: () => void;
};

export default function MemoryCard({
  title,
  description,
  date,
  onClose,
}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.8,
        y: 40,
      }}
      animate={{
        opacity: 1,
        scale: 1,
        y: 0,
      }}
      exit={{
        opacity: 0,
        scale: 0.8,
      }}
      transition={{
        duration: 0.4,
      }}
      className="
      fixed
      inset-0
      z-50
      flex
      items-center
      justify-center
      bg-black/80
      backdrop-blur-sm
      "
    >
      <div
  className="
    relative
    w-[92%]
    max-w-2xl
    rounded-[32px]
    border
    border-white/10
    bg-white/5
    backdrop-blur-xl
    p-8
    shadow-[0_0_60px_rgba(255,255,255,0.08)]
  "
>

  <button
    onClick={onClose}
    className="
      absolute
      right-6
      top-6
      text-2xl
      text-white/60
      hover:text-white
      transition
    "
  >
    ✕
  </button>

  <p className="text-sm uppercase tracking-[0.3em] text-white/40">
    {date}
  </p>

  <h2 className="mt-3 text-5xl font-bold text-white">
    {title}
  </h2>

  {/* Image Placeholder */}
  <div
    className="
      mt-8
      h-64
      rounded-2xl
      border
      border-white/10
      bg-white/5
      flex
      items-center
      justify-center
      text-white/40
    "
  >
    📸 Memory Photo
  </div>

  <p
    className="
      mt-8
      text-lg
      leading-9
      text-white/80
    "
  >
    {description}
  </p>

</div>
    </motion.div>
  );
}