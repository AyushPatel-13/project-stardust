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
                        CHAPTER THREE / 8
                    </p>

                    <h1 className="mt-6 text-6xl font-bold md:text-7xl">
                        Where Your Heart Wants To Wake Up 🌸
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
                            src="/memories/vrindavan/gate.jpg"
                            alt="Gate"
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
                        One day...
                    </p>

                    <p className="mt-8 text-2xl leading-loose text-white/80">
                        I asked you something simple.
                    </p>

                    <div className="my-10 text-purple-400 text-2xl">
                        ✦
                    </div>

                    <blockquote className="my-16 text-4xl italic text-purple-300">
                        "If you could wake up anywhere tomorrow..."
                    </blockquote>

                    <p className="mt-8 text-2xl leading-loose text-white/80">
                        You didn't choose Paris.
                    </p>

                    <p className="mt-8 text-2xl leading-loose text-white/80">
                        You didn't choose Switzerland.
                    </p>

                    <p className="mt-8 text-2xl leading-loose text-white/80">
                        You didn't choose a beach.
                    </p>

                    <p className="mt-8 text-2xl leading-loose text-white/80">
                        You chose...
                    </p>

                    <blockquote className="my-16 text-4xl italic text-purple-300">
                        Radha Raman Mandir.
                        Vrindavan.
                    </blockquote>

                </motion.div>

                {/* Brother Photo 2 */}

                <div className="mt-24 w-full max-w-5xl">

                    <div className="overflow-hidden rounded-[32px] border border-purple-500/30 shadow-[0_0_80px_rgba(140,90,255,.35)]">

                        <Image
                            src="/memories/vrindavan/temple.jpg"
                            alt="Temple"
                            width={1400}
                            height={900}
                            className="w-full h-auto object-cover"
                        />

                    </div>

                </div>

                <div className="mx-auto mt-10 max-w-3xl text-center">

                    <p className="text-2xl leading-loose text-white/80">
                        That answer stayed with me.
                    </p>

                    <div className="my-10 text-purple-400 text-2xl">
                        ✦
                    </div>

                    <p className="text-2xl leading-loose text-white/80">
                        Because it quietly told me something about you.
                    </p>

                    <p className="mt-8 text-2xl leading-loose text-white/80">
                        Your heart doesn't chase noise.
                    </p>

                    <p className="mt-8 text-2xl leading-loose text-white/80">
                        It searches for peace.
                    </p>

                    <p className="mt-8 text-2xl leading-loose text-white/80">
                        For devotion.
                    </p>

                    <p className="mt-8 text-2xl leading-loose text-white/80">
                        For a place that simply feels...
                        like home.
                    </p>

                </div>

                {/* Brother Photo 3 */}

                <div className="mt-24 w-full max-w-5xl">

                    <div className="overflow-hidden rounded-[32px] border border-purple-500/30 shadow-[0_0_80px_rgba(140,90,255,.35)]">

                        <Image
                            src="/memories/vrindavan/radharaman.jpg"
                            alt="Radharaman"
                            width={1400}
                            height={900}
                            className="w-full h-auto object-cover"
                        />

                    </div>

                </div>

                <div className="mx-auto mt-10 max-w-3xl text-center">

                    <p className="text-2xl leading-loose text-white/80">
                        I truly hope...
                    </p>

                    <p className="mt-8 text-2xl leading-loose text-white/80">
                        One day you wake up exactly where your heart wants to be.
                    </p>

                    <p className="mt-8 text-2xl leading-loose text-white/80">
                        Walking through those peaceful streets.
                    </p>

                    <p className="mt-8 text-2xl leading-loose text-white/80">
                        Listening to the temple bells.
                    </p>

                    <p className="mt-8 text-2xl leading-loose text-white/80">
                        With nothing to worry about...
                        except enjoying the moment.
                    </p>

                    <div className="my-10 text-purple-400 text-2xl">
                        ✦
                    </div>

                    <p className="text-2xl leading-loose text-white/80">
                        Some dreams aren't measured by how far away they are.
                    </p>

                    <p className="mt-8 text-2xl leading-loose text-white/80">
                        They're measured by how deeply they live inside our hearts.
                    </p>

                </div>

                <div className="mt-24 text-center">

                    <p className="text-4xl italic text-purple-300">
                        "May your heart always find its way...
                        to the place it calls home."
                    </p>

                    <p className="mt-8 text-3xl">
                        🌸
                    </p>

                </div>

                {/* Navigation */}
                <div className="mt-24 flex w-full max-w-5xl items-center justify-between">

                    <Link
                        href="/memories/loved-ones"
                        className="rounded-full border border-purple-500/40 px-8 py-4 transition hover:bg-purple-500/20"
                    >
                        ← Chapter Two
                    </Link>

                    <Link
                        href="/memories/future"
                        className="rounded-full border border-purple-500/40 px-8 py-4 transition hover:bg-purple-500/20"
                    >
                        Chapter Four →
                    </Link>

                </div>

            </div>

        </main>
    );
}