"use client";

import { motion } from "framer-motion";
import UniverseLanding from "@/components/universe/UniverseLanding";

type Props = {
  onComplete: () => void;
};

export default function UniverseScene({}: Props) {
  return (
    <motion.div
      className="absolute inset-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <UniverseLanding />
    </motion.div>
  );
}