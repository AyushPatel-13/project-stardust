"use client";

import { motion } from "framer-motion";
import { memories } from "./memories";
import { useState } from "react";
import MemoryCard from "./MemoryCard";

export default function MemoryConstellation() {

  const [selectedMemory, setSelectedMemory] = useState<
    (typeof memories)[number] | null
  >(null);

  return (
    <div className="absolute inset-0 z-20">

      {/* Constellation Lines */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
      >
        {memories.flatMap((memory) =>
          memory.connectTo.map((id) => {
            const target = memories.find((m) => m.id === id);

            if (!target) return null;

            return (
              <motion.line
                key={`${memory.id}-${target.id}`}
                x1={`${memory.x}%`}
                y1={`${memory.y}%`}
                x2={`${target.x}%`}
                y2={`${target.y}%`}
                stroke="rgba(255,255,255,0.18)"
                strokeWidth="1"

                initial={{
                  pathLength: 0,
                  opacity: 0,
                }}

                animate={{
                  pathLength: 1,
                  opacity: 1,
                }}

                transition={{
                  duration: 2,
                  delay: 0.6,
                  ease: "easeInOut",
                }}
              />
            );
          })
        )}
      </svg>

      {/* Stars */}
      {memories.map((memory, index) => (
        <motion.button
          key={memory.id}

          initial={{
            opacity: 0,
            scale: 0,
          }}

          animate={{
            opacity: 1,
            scale: [1, 1.25, 1],
          }}

          transition={{
            opacity: {
              duration: 0.7,
              delay: index * 0.35,
            },

            scale: {
              repeat: Infinity,
              duration: 3,
              delay: index * 0.35,
            },
          }}

          onClick={() => {
  setSelectedMemory(memory);
}}
          className="absolute z-50 cursor-pointer pointer-events-auto"

          style={{
            left: `${memory.x}%`,
            top: `${memory.y}%`,
          }}

          whileHover={{
            scale: 2,
          }}
        >
          <div
            className="
  w-6
  h-6
  rounded-full
  bg-white
  shadow-[0_0_18px_white]
"
          />
        </motion.button>
      ))}
      {selectedMemory && (
        <MemoryCard
          title={selectedMemory.title}
          description={selectedMemory.description}
          date={selectedMemory.date}
          path={selectedMemory.path}
          image={selectedMemory.image}
          onClose={() => setSelectedMemory(null)}
        />
      )}

    </div>
  );
}