"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import SpaceBackground from "@/components/shared/SpaceBackground";

export default function LovedOnesPage() {
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
                        CHAPTER FOUR / 8
                    </p>

                    <h1 className="mt-6 text-6xl font-bold md:text-7xl">
                        The Future I Hope You Build ✨
                    </h1>

                    <div className="mx-auto mt-8 h-px w-64 bg-purple-500/40" />

                    <div className="-mt-3 text-2xl text-purple-400">
                        ✦
                    </div>
                </motion.div>

                {/* Brother Photo 1 */}

                <div className="mt-14 w-full max-w-5xl">

                    <div className="overflow-hidden rounded-[32px] border border-purple-500/30 shadow-[0_0_80px_rgba(140,90,255,.35)]">

                        <Image
                            src="/memories/future/house.jpg"
                            alt="House"
                            width={1400}
                            height={900}
                            className="w-full h-auto object-cover"
                        />

                    </div>

                </div>
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
                        I wonder what your life will look like ten years from now.
                    </p>

                    <div className="my-10 text-purple-400 text-2xl">
                        ✦
                    </div>

                    <p className="text-2xl leading-loose text-white/80">
                        A home filled with peace.
                    </p>

                    <p className="mt-8 text-2xl leading-loose text-white/80">
                        A place where every corner carries your memories.
                    </p>

                    <p className="mt-8 text-2xl leading-loose text-white/80">
                        Not just a house...
                    </p>

                    <p className="mt-8 text-2xl leading-loose text-white/80">
                        but a place that finally feels like yours.
                    </p>

                </motion.div>

                {/* Brother Photo 2 */}

                <div className="mt-24 w-full max-w-5xl">

                    <div className="overflow-hidden rounded-[32px] border border-purple-500/30 shadow-[0_0_80px_rgba(140,90,255,.35)]">

                        <Image
                            src="/memories/future/car.jpg"
                            alt="Car"
                            width={1400}
                            height={900}
                            className="w-full h-auto object-cover"
                        />

                    </div>

                </div>

                <div className="mx-auto mt-10 max-w-3xl text-center">

                    <p className="text-2xl leading-loose text-white/80">
                        Freedom isn't measured by money.
                    </p>

                    <p className="mt-8 text-2xl leading-loose text-white/80">
                        Sometimes...
                    </p>

                    <p className="mt-8 text-2xl leading-loose text-white/80">
                        it's simply the ability to go wherever your heart wants.
                    </p>

                    <div className="my-10 text-purple-400 text-2xl">
                        ✦
                    </div>

                    <p className="text-2xl leading-loose text-white/80">
                        Late-night drives.

                        Random road trips.

                        No destination.

                        Just happiness.
                    </p>

                </div>

                {/* Brother Photo 3 */}

                <div className="mt-24 w-full max-w-5xl">

                    <div className="overflow-hidden rounded-[32px] border border-purple-500/30 shadow-[0_0_80px_rgba(140,90,255,.35)]">

                        <Image
                            src="/memories/future/morning.jpg"
                            alt="Morning"
                            width={1400}
                            height={900}
                            className="w-full h-auto object-cover"
                        />

                    </div>

                </div>

                <div className="mx-auto mt-10 max-w-3xl text-center">

                    <p className="text-2xl leading-loose text-white/80">
                        I don't wish you a busy life.
                    </p>

                    <p className="mt-8 text-2xl leading-loose text-white/80">
                        I wish you peaceful mornings.
                    </p>

                    <p className="mt-8 text-2xl leading-loose text-white/80">
                        Coffee in your hands.
                    </p>

                    <p className="mt-8 text-2xl leading-loose text-white/80">
                        A quiet sunrise.
                    </p>

                    <p className="mt-8 text-2xl leading-loose text-white/80">
                        And absolutely nothing to rush for.
                    </p>
                </div>

                {/* Brother Photo 4 */}

                <div className="mt-24 w-full max-w-5xl">

                    <div className="overflow-hidden rounded-[32px] border border-purple-500/30 shadow-[0_0_80px_rgba(140,90,255,.35)]">

                        <Image
                            src="/memories/future/future.jpg"
                            alt="Future"
                            width={1400}
                            height={900}
                            className="w-full h-auto object-cover"
                        />

                    </div>

                </div>

                <div className="mx-auto mt-10 max-w-3xl text-center">

                    <p className="text-2xl leading-loose text-white/80">
                        You once told me...
                    </p>

                    <p className="mt-8 text-2xl leading-loose text-white/80">
                        You wanted your own life.
                    </p>

                    <p className="mt-8 text-2xl leading-loose text-white/80">
                        Your own house.
                    </p>

                    <p className="mt-8 text-2xl leading-loose text-white/80">
                        Your own car.
                    </p>

                    <p className="mt-8 text-2xl leading-loose text-white/80">
                        Your own decisions.
                    </p>

                    <div className="my-10 text-purple-400 text-2xl">
                        ✦
                    </div>

                    <p className="text-2xl leading-loose text-white/80">
                        I truly hope...
                    </p>

                    <p className="mt-8 text-2xl leading-loose text-white/80">
                        one day you wake up and realize
                        you built exactly the life you dreamed of.
                    </p>

                    <p className="mt-8 text-2xl leading-loose text-white/80">
                        A life where your happiness
                        is never decided by someone else.
                    </p>
                </div>

                <div className="mt-24 text-center">

                    <p className="text-5xl italic text-purple-300">
                        "May the life you dream about today...
                        become the life you wake up to tomorrow."
                    </p>

                    <p className="mt-10 text-4xl">
                        ✨
                    </p>

                </div>

                {/* Navigation */}
                <div className="mt-24 flex w-full max-w-5xl items-center justify-between">

                    <Link
                        href="/memories/vrindavan"
                        className="rounded-full border border-purple-500/40 px-8 py-4 transition hover:bg-purple-500/20"
                    >
                        ← Chapter Three
                    </Link>

                    <Link
                        href="/memories/girl"
                        className="rounded-full border border-purple-500/40 px-8 py-4 transition hover:bg-purple-500/20"
                    >
                        Chapter Five →
                    </Link>

                </div>

            </div>

        </main>
    );
}