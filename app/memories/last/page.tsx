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
                        CHAPTER EIGHT / 8
                    </p>

                    <h1 className="mt-6 text-6xl font-bold md:text-7xl">
                        One Last Thing...
                    </h1>

                    <p className="mt-10 text-2xl leading-loose text-white/80">
                        If you've made it this far...
                    </p>

                    <p className="mt-4 text-2xl leading-loose text-white/80">
                        thank you.
                    </p>

                    <p className="mt-4 text-2xl leading-loose text-white/80">
                        For staying until the end.
                    </p>

                    <div className="mx-auto mt-8 h-px w-64 bg-purple-500/40" />

                    <div className="-mt-3 text-2xl text-purple-400">
                        ✨
                    </div>
                </motion.div>

                <div className="mx-auto mt-20 max-w-3xl text-center">

                    <p className="text-2xl leading-loose text-white/80">
                        If someone had told me...
                    </p>

                    <p className="mt-8 text-2xl leading-loose text-white/80">
                        that one day
                        I'd spend hours
                        turning memories
                        into an entire universe...

                        for someone.

                        I would've laughed.
                    </p>

                    <p className="mt-8 text-2xl leading-loose text-white/80">
                        I probably wouldn't have believed them.
                    </p>

                    <div className="my-12 text-purple-400 text-3xl">
                        ✦
                    </div>

                    <p className="text-2xl leading-loose text-white/80">
                        But here we are.
                    </p>

                    <div className="my-16 text-purple-400 text-3xl">
                        ✦
                    </div>

                    <p className="text-2xl leading-loose text-white/80">
                        Thank you...
                    </p>

                    <p className="mt-8 text-2xl leading-loose text-white/80">
                        For every conversation.
                    </p>

                    <p className="text-2xl leading-loose text-white/80">
                        For every random topic
                        that somehow became
                        a meaningful one.
                    </p>

                    <p className="text-2xl leading-loose text-white/80">
                        For every laugh.
                    </p>

                    <p className="text-2xl leading-loose text-white/80">
                        For every memory.
                    </p>

                    <p className="text-2xl leading-loose text-white/80">
                        For simply being yourself.
                    </p>

                    <p className="text-2xl leading-loose text-white/80">
                        For trusting me
                        with pieces of your life.
                    </p>

                    <div className="my-16 text-purple-400 text-3xl">
                        ✦
                    </div>

                    <p className="text-2xl leading-loose text-white/80">
                        Thank you
                        for trusting me
                        with your world.
                    </p>

                    <p className="mt-8 text-2xl leading-loose text-white/80">
                        The little brother
                        you love so much.
                    </p>

                    <p className="text-2xl leading-loose text-white/80">
                        The dog
                        waiting for you.
                    </p>

                    <p className="text-2xl leading-loose text-white/80">
                        The peace
                        you search for
                        in Vrindavan.
                    </p>

                    <p className="text-2xl leading-loose text-white/80">
                        The captain
                        who inspired you.
                    </p>

                    <p className="text-2xl leading-loose text-white/80">
                        The future
                        you dream about.
                    </p>

                    <p className="text-2xl leading-loose text-white/80">
                        And every tiny story
                        that became
                        a part of this universe.
                    </p>

                    <p className="text-2xl leading-loose text-white/80">
                        And all the little things
                        that make you...
                        you.
                    </p>

                    <div className="my-16 text-purple-400 text-3xl">
                        ✦
                    </div>

                    <p className="text-2xl leading-loose text-white/80">
                        I hope...
                    </p>

                    <p className="mt-8 text-2xl leading-loose text-white/80">
                        you visit Vrindavan.
                    </p>

                    <p className="text-2xl leading-loose text-white/80">
                        Build the home
                        you dream about.
                    </p>

                    <p className="text-2xl leading-loose text-white/80">
                        Become the fearless woman
                        you once described.
                    </p>

                    <p className="text-2xl leading-loose text-white/80">
                        And receive
                        all the happiness
                        you truly deserve.
                    </p>

                    <div className="my-16 text-purple-400 text-3xl">
                        ✦
                    </div>

                    <p className="text-2xl leading-loose text-white/80">
                        If years from now...
                    </p>

                    <p className="mt-8 text-2xl leading-loose text-white/80">
                        you somehow remember
                        this little website...
                    </p>

                    <p className="mt-8 text-2xl leading-loose text-white/80">
                        I hope it reminds you
                        that your story
                        deserved
                        to be remembered.
                    </p>

                    <p className="mt-8 text-2xl leading-loose text-white/80">
                        So...
                    </p>

                    <p className="mt-8 text-2xl leading-loose text-white/80">
                        I turned it
                        into
                        a little universe.
                    </p>

                    <div className="my-20 text-purple-400 text-4xl">
                        ✨
                    </div>

                    <h2 className="text-6xl font-bold">
                        Happy Birthday,
                        <br />
                        Mahi ❤️
                        <br />
                        Thank you
                        <br />
                        for being
                        <br />
                        one of the brightest stars
                        <br />
                        in this universe.
                    </h2>

                    <p className="mt-10 text-3xl italic text-purple-300">
                        Keep smiling.
                        <br />
                        Keep dreaming.
                        <br />
                        Keep becoming.
                    </p>

                    <div className="my-16 text-purple-400 text-4xl">
                        ✨
                    </div>

                    <p className="text-2xl leading-loose text-white/80">
                        This wasn't just a website.
                    </p>

                    <p className="mt-6 text-2xl leading-loose text-white/80">
                        It was my way of saying...
                    </p>

                    <h3 className="mt-10 text-5xl font-bold text-white">
                        You Matter ❤️
                    </h3>

                    <p className="mt-16 text-xl italic text-white/60">
                        Thank you for taking this journey.
                    </p>

                </div>


                {/* Navigation */}
                <div className="mt-24 flex w-full max-w-5xl items-center justify-between">

                    <Link
                        href="/memories/dhoni"
                        className="rounded-full border border-purple-500/40 px-8 py-4 transition hover:bg-purple-500/20"
                    >
                        ← Chapter Seven
                    </Link>

                    <Link
                        href="/birthday"
                        className="rounded-full border border-purple-500/40 px-8 py-4 transition hover:bg-purple-500/20"
                    >
                        Return To The Stars ✨
                    </Link>

                </div>

            </div>

        </main>
    );
}