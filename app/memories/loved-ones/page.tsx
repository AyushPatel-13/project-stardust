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
                        CHAPTER TWO / 8
                    </p>

                    <h1 className="mt-6 text-6xl font-bold md:text-7xl">
                        Those Who Call You Home ❤️
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
                            src="/memories/loved-ones/bro1.jpg"
                            alt="Brother"
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
                        Before this journey continues...
                    </p>

                    <div className="my-10 text-purple-400 text-2xl">✦</div>

                    <p className="text-2xl leading-loose text-white/80">
                        There's something about you that always stood out to me.
                    </p>

                    <p className="mt-8 text-2xl leading-loose text-white/80">
                        No matter where life takes you...
                    </p>

                    <p className="mt-8 text-2xl leading-loose text-white/80">
                        your heart always finds its way back home.
                    </p>

                    <p className="mt-8 text-2xl leading-loose text-white/80">
                        And when I think about your happiest moments...
                    </p>

                    <p className="mt-8 text-2xl leading-loose text-white/80">
                        I don't just think about you.
                    </p>

                    <p className="mt-8 text-2xl leading-loose text-white/80">
                        I think about the little people who make you smile the most.
                    </p>

                </motion.div>

                {/* Brother Photo 2 */}

                <div className="mt-24 w-full max-w-5xl">

                    <div className="overflow-hidden rounded-[32px] border border-purple-500/30 shadow-[0_0_80px_rgba(140,90,255,.35)]">

                        <Image
                            src="/memories/loved-ones/bro2.jpg"
                            alt="Brother"
                            width={1400}
                            height={900}
                            className="w-full h-auto object-cover"
                        />

                    </div>

                </div>

                <div className="mx-auto mt-10 max-w-3xl text-center">

                    <p className="text-2xl leading-loose text-white/80">
                        Sometimes being an elder sister means becoming someone's first best friend.
                    </p>

                    <p className="mt-8 text-2xl leading-loose text-white/80">
                        The first person they look up to.
                    </p>

                    <p className="mt-8 text-2xl leading-loose text-white/80">
                        The first person they annoy.
                    </p>

                    <p className="mt-8 text-2xl leading-loose text-white/80">
                        And secretly...
                    </p>

                    <p className="mt-8 text-2xl leading-loose text-white/80">
                        the first person they always feel safe with.
                    </p>

                </div>

                {/* Brother Photo 3 */}

                <div className="mt-24 w-full max-w-5xl">

                    <div className="overflow-hidden rounded-[32px] border border-purple-500/30 shadow-[0_0_80px_rgba(140,90,255,.35)]">

                        <Image
                            src="/memories/loved-ones/bro3.jpg"
                            alt="Brother"
                            width={1400}
                            height={900}
                            className="w-full h-auto object-cover"
                        />

                    </div>

                </div>

                <div className="mx-auto mt-10 max-w-3xl text-center">

                    <p className="text-2xl leading-loose text-white/80">
                        Right now...
                    </p>

                    <p className="mt-8 text-2xl leading-loose text-white/80">
                        he's still the little brother who probably drives you crazy sometimes.
                    </p>

                    <p className="mt-8 text-2xl leading-loose text-white/80">
                        One day he'll become taller.
                    </p>

                    <p className="mt-8 text-2xl leading-loose text-white/80">
                        Older.
                    </p>

                    <p className="mt-8 text-2xl leading-loose text-white/80">
                        Stronger.
                    </p>

                    <p className="mt-8 text-2xl leading-loose text-white/80">
                        But to him...
                    </p>

                    <p className="mt-8 text-2xl leading-loose text-white/80">
                        you'll always be the amazing elder sister who was there from the very beginning.
                    </p>

                </div>

                <div className="my-24 text-center text-4xl text-purple-400">
                    ✦
                </div>

                <div className="w-full max-w-5xl">

                    <div className="overflow-hidden rounded-[32px] border border-purple-500/30 shadow-[0_0_80px_rgba(140,90,255,.35)]">

                        <Image
                            src="/memories/loved-ones/dog.jpg"
                            alt="Dog"
                            width={1400}
                            height={900}
                            className="w-full h-auto object-cover"
                        />

                    </div>

                </div>

                <div className="mx-auto mt-10 max-w-3xl text-center">

                    <p className="text-2xl leading-loose text-white/80">
                        And then...
                    </p>

                    <div className="my-10 text-purple-400 text-2xl">
                        ✦
                    </div>

                    <p className="text-2xl leading-loose text-white/80">
                        there's the smallest member of the family.
                    </p>

                    <p className="mt-8 text-2xl leading-loose text-white/80">
                        The one who doesn't care how your day went.
                    </p>

                    <p className="mt-8 text-2xl leading-loose text-white/80">
                        Doesn't care about your mood.
                    </p>

                    <p className="mt-8 text-2xl leading-loose text-white/80">
                        Doesn't care how tired you are.
                    </p>

                    <p className="mt-8 text-2xl leading-loose text-white/80">
                        The only thing that matters...
                    </p>

                    <p className="mt-8 text-2xl leading-loose text-white/80">
                        is that you came home.
                    </p>

                    <div className="my-10 text-purple-400 text-2xl">
                        ✦
                    </div>

                    <p className="text-2xl leading-loose text-white/80">
                        Some hearts don't speak.
                    </p>

                    <p className="mt-8 text-2xl leading-loose text-white/80">
                        Some simply wag their tails.
                    </p>

                    <p className="mt-8 text-2xl leading-loose text-white/80">
                        And somehow...
                    </p>

                    <blockquote className="my-16 text-4xl italic text-purple-300">
                        "I missed you."
                    </blockquote>

                    <p className="mt-10 italic text-white/40">
                        Home isn't only where people wait for you.
                        <br />
                        Sometimes...
                        <br />
                        it has four tiny paws.
                    </p>

                </div>

                {/* Navigation */}
                <div className="mt-24 flex w-full max-w-5xl items-center justify-between">

                    <Link
                        href="/memories/exam"
                        className="rounded-full border border-purple-500/40 px-8 py-4 transition hover:bg-purple-500/20"
                    >
                        ← Chapter One
                    </Link>

                    <Link
                        href="/memories/vrindavan"
                        className="rounded-full border border-purple-500/40 px-8 py-4 transition hover:bg-purple-500/20"
                    >
                        Chapter Three →
                    </Link>

                </div>

            </div>

        </main>
    );
}