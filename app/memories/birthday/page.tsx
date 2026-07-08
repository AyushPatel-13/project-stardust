"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import SpaceBackground from "@/components/shared/SpaceBackground";

export default function BirthdayPage() {
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
                        CHAPTER SIX / 8
                    </p>

                    <h1 className="mt-6 text-6xl font-bold md:text-7xl">
                        HAPPY
                        <br />
                        BIRTHDAY
                        <br />
                        MAHI ❤️
                    </h1>

                    <p className="mt-10 text-2xl leading-loose text-white/80">
                        Today isn't about the years you've lived.
                    </p>

                    <p className="mt-4 text-2xl leading-loose text-white/80">
                        It's about the beautiful person you've become.
                    </p>

                    <div className="mx-auto mt-8 h-px w-64 bg-purple-500/40" />

                    <div className="-mt-3 text-2xl text-purple-400">
                        ✦
                    </div>
                </motion.div>

                {/* Brother Photo 1 */}

                <div className="mt-14 w-full max-w-5xl">

                    <div className="overflow-hidden rounded-[32px] border border-purple-500/30 shadow-[0_0_80px_rgba(140,90,255,.35)]">

                        <Image
                            src="/memories/birthday/2023.jpg"
                            alt="2023"
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
                        2023
                    </p>

                    <p className="mt-8 text-2xl leading-loose text-white/80">
                        A brand new chapter.
                    </p>

                    <p className="text-2xl leading-loose text-white/80">
                        A younger version of you...
                    </p>

                    <p className="mt-8 text-2xl leading-loose text-white/80">
                        full of dreams,
                        hope,
                        and endless possibilities.
                    </p>

                    <p className="mt-8 text-2xl leading-loose text-white/80">
                        You probably didn't know it then...
                    </p>

                    <p className="mt-8 text-2xl leading-loose text-white/80">
                        but this year would quietly begin changing you.
                    </p>

                </motion.div>

                {/* Brother Photo 2 */}

                <div className="mt-24 w-full max-w-5xl">

                    <div className="overflow-hidden rounded-[32px] border border-purple-500/30 shadow-[0_0_80px_rgba(140,90,255,.35)]">

                        <Image
                            src="/memories/birthday/2024.jpg"
                            alt="2024"
                            width={1400}
                            height={900}
                            className="w-full h-auto object-cover"
                        />

                    </div>

                </div>

                <div className="mx-auto mt-10 max-w-3xl text-center">

                    <p className="text-2xl leading-loose text-white/80">
                        2024
                    </p>

                    <p className="mt-8 text-2xl leading-loose text-white/80">
                        Another birthday.
                    </p>

                    <p className="text-2xl leading-loose text-white/80">
                        Another candle.
                    </p>

                    <p className="text-2xl leading-loose text-white/80">
                        Another wish.
                    </p>

                    <p className="mt-8 text-2xl leading-loose text-white/80">
                        Life wasn't always easy.
                    </p>

                    <p className="text-2xl leading-loose text-white/80">
                        But somehow...
                    </p>

                    <p className="text-2xl leading-loose text-white/80">
                        you kept moving forward.
                    </p>

                    <p className="text-2xl leading-loose text-white/80">
                        Without realizing...
                    </p>

                    <p className="text-2xl leading-loose text-white/80">
                        how much stronger
                        you were becoming.
                    </p>

                </div>

                {/* Brother Photo 3 */}

                <div className="mt-24 w-full max-w-5xl">

                    <div className="overflow-hidden rounded-[32px] border border-purple-500/30 shadow-[0_0_80px_rgba(140,90,255,.35)]">

                        <Image
                            src="/memories/birthday/2025.jpg"
                            alt="2025"
                            width={1400}
                            height={900}
                            className="w-full h-auto object-cover"
                        />

                    </div>

                </div>

                <div className="mx-auto mt-10 max-w-3xl text-center">

                    <p className="text-2xl leading-loose text-white/80">
                        2025
                    </p>

                    <p className="mt-8 text-2xl leading-loose text-white/80">
                        Look at you now.
                    </p>

                    <p className="text-2xl leading-loose text-white/80">
                        Still smiling.
                    </p>

                    <p className="text-2xl leading-loose text-white/80">
                        Still dreaming.
                    </p>

                    <p className="text-2xl leading-loose text-white/80">
                        Still believing.
                    </p>

                    <p className="mt-8 text-2xl leading-loose text-white/80">
                        There are things you've overcome
                        that your younger self
                        would have been proud of.
                    </p>

                    <p className="mt-8 text-2xl leading-loose text-white/80">
                        And somehow...
                    </p>

                    <p className="text-2xl leading-loose text-white/80">
                        you've become even more beautiful.
                    </p>

                    <p className="text-2xl leading-loose text-white/80">
                        Not just in appearance...
                    </p>

                    <p className="text-2xl leading-loose text-white/80">
                        but in the person you've become.
                    </p>

                </div>

                <div className="mx-auto mt-24 max-w-3xl text-center">

                    <p className="text-2xl leading-loose text-white/80">
                        Every birthday
                        is more than growing older.
                    </p>

                    <p className="mt-8 text-2xl leading-loose text-white/80">
                        It's proof
                        that you survived another year.
                    </p>

                    <p className="mt-8 text-2xl leading-loose text-white/80">
                        Another hundred lessons.
                    </p>

                    <p className="text-2xl leading-loose text-white/80">
                        Another thousand memories.
                    </p>

                    <p className="mt-8 text-2xl leading-loose text-white/80">
                        Every version of yourself
                        helped create
                        the amazing person
                        standing here today.
                    </p>

                </div>

                <div className="mt-24 text-center">

                    <p className="text-2xl leading-loose text-white/80">
                        This year...
                    </p>

                    <p className="mt-8 text-2xl leading-loose text-white/80">
                        I hope you laugh louder.
                    </p>

                    <p className="text-2xl leading-loose text-white/80">
                        Dream bigger.
                    </p>

                    <p className="text-2xl leading-loose text-white/80">
                        Travel further.
                    </p>

                    <p className="text-2xl leading-loose text-white/80">
                        Smile brighter.
                    </p>

                    <p className="text-2xl leading-loose text-white/80">
                        Find peace.
                    </p>

                    <p className="mt-8 text-2xl leading-loose text-white/80">
                        And never stop believing...
                    </p>

                    <p className="text-2xl leading-loose text-white/80">
                        that beautiful things
                        are waiting for you.
                    </p>

                    <div className="mt-24 w-full max-w-5xl">

                        <div className="overflow-hidden rounded-[32px] border border-purple-500/30 shadow-[0_0_80px_rgba(140,90,255,.35)]">

                            <Image
                                src="/memories/birthday/cake.png"
                                alt="cake"
                                width={1400}
                                height={900}
                                className="w-full h-auto object-cover"
                            />

                        </div>

                    </div>

                    <div className="mx-auto mt-10 max-w-3xl text-center">

                        <p className="text-2xl leading-loose text-white/80">
                            Close your eyes...

                            Take a deep breath.

                            Make a wish.

                            Don't tell anyone.

                            Some dreams

                            are meant to be whispered

                            to the universe.
                        </p>

                        <p className="text-2xl leading-loose text-white/80">
                            Today...

                            we're not celebrating

                            another birthday.

                            We're celebrating

                            your smile.

                            your kindness.

                            your courage.

                            your dreams.

                            your heart.

                            Because those are the things

                            that truly deserve celebrating.
                        </p>

                    </div>

                    <h2 className="mt-20 text-center text-7xl font-bold">
                        HAPPY
                        <br />
                        BIRTHDAY
                        <br />
                        MAHI ❤️
                    </h2>

                    <p className="mt-10 text-3xl italic text-purple-300">
                        May this year become
                        your favourite chapter yet.

                        ✨
                    </p>

                </div>

                {/* Navigation */}
                <div className="mt-24 flex w-full max-w-5xl items-center justify-between">

                    <Link
                        href="/memories/girl"
                        className="rounded-full border border-purple-500/40 px-8 py-4 transition hover:bg-purple-500/20"
                    >
                        ← Chapter Five
                    </Link>

                    <Link
                        href="/memories/dhoni"
                        className="rounded-full border border-purple-500/40 px-8 py-4 transition hover:bg-purple-500/20"
                    >
                        Chapter Seven →
                    </Link>

                </div>

            </div>

        </main>
    );
}