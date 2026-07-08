"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

type Props = {
    text: string;
    speed?: number;
};

export default function Typewriter({
    text,
    speed = 40,
}: Props) {
    const [displayedText, setDisplayedText] = useState("");

    useEffect(() => {
        setDisplayedText("");

        let i = 0;

setDisplayedText("");

        const interval = setInterval(() => {
  setDisplayedText(text.slice(0, i + 1));

  i++;

  if (i >= text.length) {
    clearInterval(interval);
  }
}, speed);

        return () => clearInterval(interval);
    }, [text, speed]);

    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center px-8"
        >
            <h1
                className="
        text-white
        text-3xl
        md:text-5xl
        font-light
        tracking-wide
        drop-shadow-[0_0_10px_rgba(255,255,255,0.25)]
      "
            >
                {displayedText}

                <motion.span
                    animate={{
                        opacity: [1, 0, 1],
                    }}
                    transition={{
                        duration: 0.9,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                >
                    |
                </motion.span>
            </h1>
        </motion.div>
    );
}