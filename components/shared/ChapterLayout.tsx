import Image from "next/image";
import Link from "next/link";

type Props = {
  chapter: string;
  title: string;
  image: string;
  previous: string;
  next: string;
  children: React.ReactNode;
};

export default function ChapterLayout({
  chapter,
  title,
  image,
  previous,
  next,
  children,
}: Props) {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* Background */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_center,#24104b_0%,#090915_45%,#000000_100%)]" />

      <div className="relative z-10 mx-auto max-w-5xl px-8 py-20">

        {/* Back */}
        <Link
          href="/birthday"
          className="text-white/60 hover:text-white"
        >
          ← Back to Universe
        </Link>

        {/* Header */}
        <div className="mt-12 text-center">

          <p className="uppercase tracking-[0.4em] text-white/50">
            {chapter}
          </p>

          <h1 className="mt-5 text-6xl font-bold">
            {title}
          </h1>

        </div>

        {/* Image */}
        <div className="mt-16 overflow-hidden rounded-3xl border border-purple-500/20 shadow-[0_0_40px_rgba(120,80,255,0.25)]">

          <Image
            src={image}
            alt={title}
            width={1200}
            height={800}
            className="w-full object-cover"
          />

        </div>

        {/* Story */}
        <div className="mx-auto mt-14 max-w-3xl space-y-8 text-xl leading-10 text-white/85">

          {children}

        </div>

        {/* Navigation */}
        <div className="mt-24 flex justify-between">

          <Link
            href={previous}
            className="rounded-full border border-white/20 px-6 py-3 hover:bg-white hover:text-black transition"
          >
            ← Previous
          </Link>

          <Link
            href={next}
            className="rounded-full border border-white/20 px-6 py-3 hover:bg-white hover:text-black transition"
          >
            Next →
          </Link>

        </div>

      </div>

    </main>
  );
}