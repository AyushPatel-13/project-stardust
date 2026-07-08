import Link from "next/link";

type Props = {
  previous: string;
  next: string;
};

export default function NavigationButtons({
  previous,
  next,
}: Props) {
  return (
    <div className="mt-24 flex justify-between">

      <Link
        href={previous}
        className="rounded-full border border-purple-500/30 px-8 py-4 transition hover:bg-purple-600"
      >
        ← Previous
      </Link>

      <Link
        href={next}
        className="rounded-full border border-purple-500/30 px-8 py-4 transition hover:bg-purple-600"
      >
        Next →
      </Link>

    </div>
  );
}