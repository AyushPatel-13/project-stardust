"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type Props = {
    src: string;
    alt: string;
};

export default function StoryImage({ src, alt }: Props) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="
                mx-auto
                mt-16
                w-full
                max-w-4xl
                overflow-hidden
                rounded-3xl
                border
                border-purple-500/20
                shadow-[0_0_60px_rgba(120,80,255,.25)]
            "
        >
            <Image
                src={src}
                alt={alt}
                width={1400}
                height={900}
                priority
                className="
                    w-full
                    h-auto
                    object-cover
                "
            />
        </motion.div>
    );
}