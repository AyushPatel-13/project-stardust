"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import Starfield from "@/components/intro/Starfield";
import MemoryConstellation from "@/components/Memories/MemoryConstellation";

export default function UniverseLanding() {

  const [showTitle, setShowTitle] = useState(false);
  const [enteredUniverse, setEnteredUniverse] = useState(false);

  useEffect(() => {

    const title = setTimeout(() => {
      setShowTitle(true);
    }, 2200);

    return () => {
      clearTimeout(title);
    };
  }, []);

  return (
    <main className="relative min-h-screen overflow-hidden bg-black">

      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#23104b_0%,#090915_45%,#000000_100%)]" />
      <>
        <Starfield count={320} />

        {enteredUniverse && (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
    className="absolute inset-0 z-20"
  >

<div className="absolute inset-0 z-30 flex flex-col items-center justify-center pointer-events-none">
  <h1 className="text-7xl md:text-9xl font-bold text-white">
    MAHI'S UNIVERSE
  </h1>

  <p className="mt-6 text-xl text-white/70">
    Every star tells a story.
  </p>

  <p className="mt-10 text-white/40 tracking-[0.3em] uppercase text-sm">
    Click any glowing star to begin
  </p>
</div>

    <MemoryConstellation />
  </motion.div>
)}
      </>

      {/* Title */}
      {!enteredUniverse && (
        <div className="relative z-[100] flex min-h-screen items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={
              showTitle
                ? {
                  opacity: 1,
                  scale: 1,
                }
                : {
                  opacity: 0,
                  scale: 0.96,
                }
            }
            transition={{
              duration: 0.8,
            }}
            className="text-center"
          >

            <h1 className="
text-7xl
md:text-9xl
font-bold
tracking-wide
text-white
drop-shadow-[0_0_12px_rgba(255,255,255,0.25)]
">
              MAHI'S UNIVERSE
            </h1>

            <p className="mt-6 text-white/70 text-xl">
              Every star tells a story.
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                setEnteredUniverse(true);
                setShowTitle(false);
              }}
              className="
    mt-10
    rounded-full
    border
    border-white/20
    bg-white/5
    px-8
    py-4
    text-lg
    font-semibold
    text-white
    backdrop-blur-sm
    transition
    hover:bg-white
    hover:text-black
  "
            >
              Enter the Universe ✨
            </motion.button>

          </motion.div>
        </div>
      )}

    </main>
  );
}