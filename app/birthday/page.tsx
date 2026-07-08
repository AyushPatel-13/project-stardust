import { redirect } from "next/navigation";
import Link from "next/link";

export default function BirthdayPage() {
  const now = new Date();

  const unlockDate = new Date("2026-07-08T00:00:00");

  if (now < unlockDate) {
    redirect("/");
  }

  return (
  <main className="relative min-h-screen overflow-hidden bg-black text-white">

    {/* Background */}
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#23104b_0%,#090915_45%,#000000_100%)]" />

    <div className="relative z-10 flex min-h-screen items-center justify-center px-8">

      <div className="max-w-4xl text-center">

        <p className="uppercase tracking-[0.55em] text-white/40">
          8 JULY 2026
        </p>

        <h1 className="mt-8 text-6xl md:text-8xl font-bold leading-tight">
          Happy Birthday
          <br />
          Mahi ❤️
        </h1>

        <div className="mx-auto mt-10 h-px w-64 bg-purple-500/40" />

        <div className="-mt-3 text-2xl text-purple-400">
          ✦
        </div>

        <p className="mt-12 text-2xl leading-loose text-white/80">
          Every birthday deserves a gift.
        </p>

        <p className="mt-8 text-2xl leading-loose text-white/80">
          Some people give flowers.
        </p>

        <p className="mt-4 text-2xl leading-loose text-white/80">
          Some people give chocolates.
        </p>

        <p className="mt-12 text-2xl leading-loose text-white/80">
          I wanted to give you something...
        </p>

        <p className="mt-8 text-3xl italic text-purple-300">
          that you could revisit,
          <br />
          even years from now.
        </p>

        <div className="my-14 text-purple-400 text-3xl">
          ✦
        </div>

        <p className="text-xl text-white/60 leading-9">
          So...
        </p>

        <p className="mt-4 text-xl text-white/60 leading-9">
          I gathered memories.
        </p>

        <p className="mt-2 text-xl text-white/60 leading-9">
          Dreams.
        </p>

        <p className="mt-2 text-xl text-white/60 leading-9">
          Conversations.
        </p>

        <p className="mt-2 text-xl text-white/60 leading-9">
          And little pieces of your story...
        </p>

        <p className="mt-10 text-2xl italic text-purple-300">
          ...and turned them into a universe.
        </p>

        <Link
          href="/universe"
          className="
            mt-20
            inline-flex
            items-center
            rounded-full
            border
            border-purple-500/40
            px-10
            py-4
            text-lg
            transition
            hover:bg-purple-500/20
            hover:scale-105
          "
        >
          Begin Journey ✨
        </Link>

      </div>

    </div>

  </main>
);
}