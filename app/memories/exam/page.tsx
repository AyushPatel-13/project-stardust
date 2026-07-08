"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import SpaceBackground from "@/components/shared/SpaceBackground";

export default function ExamPage() {
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
            CHAPTER ONE / 8
          </p>

          <h1 className="mt-6 text-6xl font-bold md:text-7xl">
            The Exam Guardian 🛡️
          </h1>

          <div className="mx-auto mt-8 h-px w-64 bg-purple-500/40" />

          <div className="-mt-3 text-2xl text-purple-400">
            ✦
          </div>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          whileHover={{ scale: 1.01 }}
          className="mt-14 w-full max-w-5xl"
        >
          <div className="overflow-hidden rounded-[32px] border border-purple-500/30 shadow-[0_0_80px_rgba(140,90,255,.35)]">

            <Image
              src="/memories/exam/exam1.jpg"
              alt="Exam Memory"
              width={1400}
              height={900}
              priority
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
            Every exam had three kinds of students.
          </p>

          <div className="my-10 text-2xl text-purple-400">✦</div>

          <p className="text-2xl leading-loose text-white/80">
            The ones who studied.
            <br />
            The ones who didn't.
          </p>

          <div className="my-10 text-2xl text-purple-400">✦</div>

          <p className="text-2xl leading-loose text-white/80">
            And then there was me...
            <br />
            Hoping destiny would sit me beside a genius.
          </p>

          <div className="my-10 text-2xl text-purple-400">✦</div>

          <p className="text-2xl leading-loose text-white/80">
            Sadly...
          </p>

          <p className="mt-8 text-2xl leading-loose text-white/80">
            Destiny had other plans.
          </p>

          <div className="my-10 text-2xl text-purple-400">✦</div>

          <p className="text-2xl leading-loose text-white/80">
            It placed me beside the one person who believed exams should always be honest.
          </p>

          <blockquote className="my-16 text-4xl italic text-purple-300">
            “Don't even think about it.”
          </blockquote>

          <div className="my-10 text-2xl text-purple-400">✦</div>

          <p className="text-2xl leading-loose text-white/80">
            Every time I looked in your direction,
            you somehow knew exactly what I was planning.
          </p>

          <p className="mt-8 text-2xl leading-loose text-white/80">
            You never helped me cheat...
            but you definitely helped create one of my favourite school memories.
          </p>

          <div className="my-10 text-2xl text-purple-400">✦</div>

          <p className="text-2xl leading-loose text-white/80">
            Looking back now...
            those little classroom moments became worth far more than any exam marks.
          </p>

          <p className="mt-16 italic text-white/40">
            Some memories become beautiful only after years.
          </p>

        </motion.div>

        {/* Navigation */}
        <div className="mt-24 flex w-full max-w-5xl items-center justify-between">

          <Link
            href="/birthday"
            className="rounded-full border border-purple-500/40 px-8 py-4 transition hover:bg-purple-500/20"
          >
            ← Universe
          </Link>

          <Link
            href="/memories/loved-ones"
            className="rounded-full border border-purple-500/40 px-8 py-4 transition hover:bg-purple-500/20"
          >
            Chapter Two →
          </Link>

        </div>

      </div>

    </main>
  );
}