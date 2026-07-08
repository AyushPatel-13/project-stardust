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
                        CHAPTER SEVEN / 8
                    </p>

                    <h1 className="mt-6 text-6xl font-bold md:text-7xl">
                        THE MAN
                        <br />
                        WHO
                        <br />
                        INSPIRED YOU
                    </h1>

                    <p className="mt-10 text-2xl leading-loose text-white/80">
                        Some heroes never meet us.
                    </p>

                    <p className="mt-4 text-2xl leading-loose text-white/80">
                        Yet somehow...
                    </p>

                    <p className="mt-4 text-2xl leading-loose text-white/80">
                        they change our lives forever.
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
                            src="/memories/dhoni/young.jpg"
                            alt="Young Dhoni"
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
                        Some people become our heroes...
                    </p>

                    <p className="mt-8 text-2xl leading-loose text-white/80">
                        without ever knowing our names.
                    </p>

                    <p className="text-2xl leading-loose text-white/80">
                        ✦
                    </p>

                    <p className="mt-8 text-2xl leading-loose text-white/80">
                        You never met him.
                    </p>

                    <p className="mt-8 text-2xl leading-loose text-white/80">
                        Yet somehow...
                    </p>

                    <p className="mt-8 text-2xl leading-loose text-white/80">
                        he still became
                    </p>

                    <p className="mt-8 text-2xl leading-loose text-white/80">
                        one of the people
                    </p>

                    <p className="mt-8 text-2xl leading-loose text-white/80">
                        you admired the most.
                    </p>

                </motion.div>

                {/* Brother Photo 2 */}

                <div className="mt-24 w-full max-w-5xl">

                    <div className="overflow-hidden rounded-[32px] border border-purple-500/30 shadow-[0_0_80px_rgba(140,90,255,.35)]">

                        <Image
                            src="/memories/dhoni/captain.jpg"
                            alt="Captain Dhoni"
                            width={1400}
                            height={900}
                            className="w-full h-auto object-cover"
                        />

                    </div>

                </div>

                <div className="mx-auto mt-10 max-w-3xl text-center">

                    <p className="text-2xl leading-loose text-white/80">
                        He taught something
                    </p>

                    <p className="mt-8 text-2xl leading-loose text-white/80">
                        the world rarely teaches.
                    </p>

                    <p className="text-2xl leading-loose text-white/80">
                        Stay calm.
                    </p>

                    <p className="text-2xl leading-loose text-white/80">
                        Even when everything around you
                    </p>

                    <p className="mt-8 text-2xl leading-loose text-white/80">
                        isn't.
                    </p>

                </div>

                {/* Brother Photo 3 */}

                <div className="mt-24 w-full max-w-5xl">

                    <div className="overflow-hidden rounded-[32px] border border-purple-500/30 shadow-[0_0_80px_rgba(140,90,255,.35)]">

                        <Image
                            src="/memories/dhoni/helicopter.jpg"
                            alt="Helicopter"
                            width={1400}
                            height={900}
                            className="w-full h-auto object-cover"
                        />

                    </div>

                </div>

                <div className="mx-auto mt-10 max-w-3xl text-center">

                    <p className="text-2xl leading-loose text-white/80">
                        Pressure.
                    </p>
                    <p className="mt-8 text-2xl leading-loose text-white/80">
                        Expectations.
                    </p>

                    <p className="text-2xl leading-loose text-white/80">
                        Yet...
                    </p>

                    <p className="text-2xl leading-loose text-white/80">
                        he always looked
                    </p>

                    <p className="text-2xl leading-loose text-white/80">
                        like he belonged there.
                    </p>

                    <p className="mt-8 text-2xl leading-loose text-white/80">
                        That kind of confidence
                    </p>

                    <p className="mt-8 text-2xl leading-loose text-white/80">
                        can't be learned overnight.
                    </p>

                </div>

                {/* Brother Photo 4 */}

                <div className="mt-24 w-full max-w-5xl">

                    <div className="overflow-hidden rounded-[32px] border border-purple-500/30 shadow-[0_0_80px_rgba(140,90,255,.35)]">

                        <Image
                            src="/memories/dhoni/smile.jpg"
                            alt="Smile"
                            width={1400}
                            height={900}
                            className="w-full h-auto object-cover"
                        />

                    </div>

                </div>

                <div className="mx-auto mt-10 max-w-3xl text-center">

                    <p className="text-2xl leading-loose text-white/80">
                        He reminded people
                    </p>
                    <p className="mt-8 text-2xl leading-loose text-white/80">
                        that greatness
                    </p>

                    <p className="text-2xl leading-loose text-white/80">
                        doesn't need noise.
                    </p>

                    <p className="text-2xl leading-loose text-white/80">
                        Sometimes...
                    </p>

                    <p className="text-2xl leading-loose text-white/80">
                        the strongest people
                    </p>

                    <p className="mt-8 text-2xl leading-loose text-white/80">
                        are the quietest ones.
                    </p>

                </div>

                {/* Brother Photo 5 */}

                <div className="mt-24 w-full max-w-5xl">

                    <div className="overflow-hidden rounded-[32px] border border-purple-500/30 shadow-[0_0_80px_rgba(140,90,255,.35)]">

                        <Image
                            src="/memories/dhoni/jersey.jpg"
                            alt="Jersey"
                            width={1400}
                            height={900}
                            className="w-full h-auto object-cover"
                        />

                    </div>

                </div>

                <div className="mx-auto mt-10 max-w-3xl text-center">

                    <p className="text-2xl leading-loose text-white/80">
                        Maybe that's why
                    </p>
                    <p className="mt-8 text-2xl leading-loose text-white/80">
                        every time
                    </p>

                    <p className="text-2xl leading-loose text-white/80">
                        someone says
                    </p>

                    <p className="text-2xl leading-loose text-white/80">
                        "Mahi"
                    </p>

                    <p className="text-2xl leading-loose text-white/80">
                        your face
                    </p>

                    <p className="mt-8 text-2xl leading-loose text-white/80">
                        lights up.
                    </p>

                </div>

                {/* Final Message */}

                <div className="mx-auto mt-24 max-w-4xl text-center">

                    <div className="my-12 text-4xl text-yellow-400">
                        ✦
                    </div>

                    <p className="text-2xl leading-loose text-white/80">
                        Heroes don't always change the world.
                    </p>

                    <p className="mt-8 text-2xl leading-loose text-white/80">
                        Sometimes...
                    </p>

                    <p className="mt-8 text-2xl leading-loose text-white/80">
                        they simply inspire someone
                    </p>

                    <p className="text-2xl leading-loose text-white/80">
                        to believe
                    </p>

                    <p className="text-2xl leading-loose text-white/80">
                        a little more.
                    </p>

                    <div className="my-12 text-4xl text-yellow-400">
                        ✦
                    </div>

                    <p className="text-2xl leading-loose text-white/80">
                        Maybe that's why...
                    </p>

                    <p className="mt-8 text-2xl leading-loose text-white/80">
                        your favourite player
                    </p>

                    <p className="text-2xl leading-loose text-white/80">
                        was never just a cricketer.
                    </p>

                    <p className="mt-8 text-2xl leading-loose text-white/80">
                        He became
                    </p>

                    <p className="text-2xl leading-loose text-white/80">
                        an inspiration.
                    </p>

                    <p className="mt-12 text-3xl italic text-white/80">
                        Some legends win trophies.
                        <br />
                        The greatest ones inspire lives.
                    </p>

                </div>

                <div className="mt-28 text-center">

                    <h2 className="text-7xl font-bold tracking-wider text-yellow-400">
                        THALA.
                        <br />
                        FOREVER.
                    </h2>

                    <div className="mt-10 text-6xl">
                        🦁
                    </div>

                </div>

                {/* Navigation */}
                <div className="mt-24 flex w-full max-w-5xl items-center justify-between">

                    <Link
                        href="/memories/birthday"
                        className="rounded-full border border-purple-500/40 px-8 py-4 transition hover:bg-purple-500/20"
                    >
                        ← Chapter Six
                    </Link>

                    <Link
                        href="/memories/last"
                        className="rounded-full border border-purple-500/40 px-8 py-4 transition hover:bg-purple-500/20"
                    >
                        Chapter Eight →
                    </Link>

                </div>

            </div>

        </main>
    );
}