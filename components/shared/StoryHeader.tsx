"use client";

import { motion } from "framer-motion";

type Props = {
  chapter: string;
  title: string;
  total?: number;
};

export default function StoryHeader({
  chapter,
  title,
  total = 8,
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-center"
    >
      <p className="uppercase tracking-[0.55em] text-white/40">
        {chapter} / {total}
      </p>

      <h1 className="mt-6 text-6xl font-bold md:text-7xl">
        {title}
      </h1>
    </motion.div>
  );
}