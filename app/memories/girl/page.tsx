"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import SpaceBackground from "@/components/shared/SpaceBackground";

export default function GirlPage() {
    return (
        <main className="relative min-h-screen overflow-x-hidden text-white">

            {/* Base Background */}

            <SpaceBackground />

            <div className="mx-auto flex max-w-7xl flex-col items-center px-8 py-16 translate-x-30">

                {/* Back */}
                <div className="w-full">
                    <Link
                        href="/birthday"
            className="text-white/60 transition hover:text-white"
          >
            ← Back to Universe
                    </Link>
                </div>

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mt-10 text-center"
                >
                    <p className="uppercase tracking-[0.55em] text-white/40">
                        CHAPTER FIVE / 8
                    </p>

                    <h1 className="mt-6 text-6xl font-bold md:text-7xl">
                        The Girl Who Keeps Moving Forward 🦋
                    </h1>

                    <div className="mx-auto mt-8 h-px w-64 bg-purple-500/40" />

                    <div className="-mt-3 text-2xl text-purple-400">
                        ✦
                    </div>
                </motion.div>

                {/* Brother Photo 1 */}

                <motion.div
                    className="mt-24 w-full max-w-5xl"
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.9 }}
                >

                    <div className="overflow-hidden rounded-[32px] border border-purple-500/30 shadow-[0_0_80px_rgba(140,90,255,.35)]">

                        <Image
                            src="/memories/girl/girl1.jpg"
                            alt="Girl"
                            width={1400}
                            height={900}
                            className="w-full h-auto object-cover"
                        />

                    </div>

                </motion.div>
                {/* Story */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="mt-20 max-w-3xl text-center"
                >

                    <p className="text-2xl leading-loose text-white/80">
                        Sometimes...
                    </p>

                    <p className="mt-8 text-2xl leading-loose text-white/80">
                        Life becomes heavier than anyone else can see.
                    </p>

                    <div className="my-10 text-purple-400 text-2xl">
                        ✦
                    </div>

                    <p className="text-2xl leading-loose text-white/80">
                        The strongest people
                        don't always look strong.
                    </p>

                    <p className="mt-8 text-2xl leading-loose text-white/80">
                        Sometimes...
                        they're simply the ones
                        who keep choosing tomorrow.
                    </p>

                    <div className="my-10 text-purple-400 text-2xl">
                        ✦
                    </div>

                    <p className="text-2xl leading-loose text-white/80">
                        But even on those days...
                    </p>

                    <p className="mt-8 text-2xl leading-loose text-white/80">
                        you still kept moving.
                    </p>

                </motion.div>

                {/* Brother Photo 2 */}

                <motion.div
                    className="mt-24 w-full max-w-5xl"
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.9 }}
                >

                    <div className="overflow-hidden rounded-[32px] border border-purple-500/30 shadow-[0_0_80px_rgba(140,90,255,.35)]">

                        <Image
                            src="/memories/girl/girl2.jpg"
                            alt="Girl"
                            width={1400}
                            height={900}
                            className="w-full h-auto object-cover"
                        />

                    </div>

                </motion.div>

                <div className="mx-auto mt-10 max-w-3xl text-center">

                    <p className="text-2xl leading-loose text-white/80">
                        One day...
                    </p>

                    <p className="mt-8 text-2xl leading-loose text-white/80">
                        you told me about someone.
                    </p>

                    <p className="mt-8 text-2xl leading-loose text-white/80">
                        A future version of yourself.
                    </p>

                    <div className="my-10 text-purple-400 text-2xl">
                        ✦
                    </div>

                    <p className="text-2xl leading-loose text-white/80">
                        Confident.

                        Brave.

                        Beautiful.

                        Independent.

                        Fearless.
                    </p>

                </div>

                {/* Brother Photo 3 */}

                <motion.div
                    className="mt-24 w-full max-w-5xl"
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.9 }}
                >

                    <div className="overflow-hidden rounded-[32px] border border-purple-500/30 shadow-[0_0_80px_rgba(140,90,255,.35)]">

                        <Image
                            src="/memories/girl/girl3.jpg"
                            alt="Girl"
                            width={1400}
                            height={900}
                            className="w-full h-auto object-cover"
                        />

                    </div>

                </motion.div>

                <div className="mx-auto mt-10 max-w-3xl text-center">

                    <p className="text-2xl leading-loose text-white/80">
                        At first...
                    </p>

                    <p className="mt-8 text-2xl leading-loose text-white/80">
                        I thought she was waiting somewhere in the future.
                    </p>

                    <p className="mt-8 text-2xl leading-loose text-white/80">
                        But I don't think that anymore.
                    </p>

                    <div className="my-10 text-purple-400 text-2xl">
                        ✦
                    </div>

                    <p className="text-2xl leading-loose text-white/80">
                        I think...
                    </p>

                    <p className="mt-8 text-2xl leading-loose text-white/80">
                        she has always been inside you.
                    </p>
                </div>

                {/* Brother Photo 4 */}

                <motion.div
                    className="mt-24 w-full max-w-5xl"
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.9 }}
                >

                    <div className="overflow-hidden rounded-[32px] border border-purple-500/30 shadow-[0_0_80px_rgba(140,90,255,.35)]">

                        <Image
                            src="/memories/girl/girl4.jpg"
                            alt="Girl"
                            width={1400}
                            height={900}
                            className="w-full h-auto object-cover"
                        />

                    </div>

                </motion.div>

                <div className="mx-auto mt-10 max-w-3xl text-center">

                    <p className="text-2xl leading-loose text-white/80">
                        Every challenge.

                        Every smile.

                        Every lesson.

                        Every scar.
                    </p>

                    <div className="my-10 text-purple-400 text-2xl">
                        ✦
                    </div>

                    <p className="text-2xl leading-loose text-white/80">
                        They aren't changing you.
                    </p>

                    <p className="mt-8 text-2xl leading-loose text-white/80">
                        They're introducing you...
                    </p>

                    <p className="mt-8 text-2xl leading-loose text-white/80">
                        to the woman you were always meant to become.
                    </p>
                </div>

                <motion.div
                    className="mt-24 w-full max-w-5xl"
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.9 }}
                >

                    <div className="overflow-hidden rounded-[32px] border border-purple-500/30 shadow-[0_0_80px_rgba(140,90,255,.35)]">

                        <Image
                            src="/memories/girl/girl5.jpg"
                            alt="Mahi"
                            width={1400}
                            height={900}
                            className="w-full h-auto object-cover"
                        />

                    </div>

                    <div className="mx-auto mt-12 max-w-3xl text-center">

                        <p className="text-4xl italic text-purple-300">
                            I hope...
                        </p>

                        <p className="mt-10 text-2xl leading-loose text-white/80">
                            One day,
                            you'll look back at this version of yourself...
                        </p>

                        <p className="mt-8 text-2xl leading-loose text-white/80">
                            and smile,
                            because you'll finally realize
                            how incredibly strong you've always been.
                        </p>

                        <div className="my-12 text-5xl text-purple-400">
                            🦋
                        </div>

                        <p className="text-3xl italic text-white/90">
                            Keep becoming her.
                        </p>

                        <p className="text-5xl italic text-purple-300">
                            She isn't waiting
                            at the finish line.
                        </p>

                        <div className="my-12 text-5xl text-purple-400">
                            🦋
                        </div>

                        <p className="text-3xl italic text-white/90">
                            She's walking beside you...
                            one step at a time.
                        </p>

                    </div>

                </motion.div>

                {/* Navigation */}
                <div className="mt-24 flex w-full max-w-5xl items-center justify-between">

                    <Link
                        href="/memories/future"
                        className="rounded-full border border-purple-500/40 px-8 py-4 transition hover:bg-purple-500/20"
                    >
                        ← Chapter Four
                    </Link>

                    <Link
                        href="/memories/birthday"
                        className="rounded-full border border-purple-500/40 px-8 py-4 transition hover:bg-purple-500/20"
                    >
                        Chapter Six →
                    </Link>

                </div>

            </div>

        </main>
    );
}