"use client";

import { motion } from "framer-motion";
import { memories } from "./memoryData";
import { useState } from "react";
import MemoryCard from "./MemoryCard";

export default function MemoryConstellation() {

    const [selectedMemory, setSelectedMemory] = useState<
  (typeof memories)[number] | null
>(null);

  return (
    <div className="absolute inset-0 z-40">

      {/* Constellation Lines */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
      >
        {memories.flatMap((memory) =>
          memory.connectTo.map((id) => {
            const target = memories.find((m) => m.id === id);

            if (!target) return null;

            return (
              <line
                key={`${memory.id}-${target.id}`}
                x1={`${memory.x}%`}
                y1={`${memory.y}%`}
                x2={`${target.x}%`}
                y2={`${target.y}%`}
                stroke="rgba(255,255,255,0.18)"
                strokeWidth="1"
              />
            );
          })
        )}
      </svg>

      {/* Stars */}
      {memories.map((memory) => (
        <motion.button
          key={memory.id}
          onClick={() => {
  console.log(memory.title);
  setSelectedMemory(memory);
}}
          className="absolute z-50 cursor-pointer"
          style={{
            left: `${memory.x}%`,
            top: `${memory.y}%`,
          }}
          whileHover={{
            scale: 1.8,
          }}
        >
          <div className="w-2 h-2 rounded-full bg-white shadow-[0_0_10px_white]" />
        </motion.button>
      ))}
      {selectedMemory && (
  <MemoryCard
    title={selectedMemory.title}
    description={selectedMemory.description}
    date={selectedMemory.date}
    onClose={() => setSelectedMemory(null)}
  />
)}

    </div>
  );
}