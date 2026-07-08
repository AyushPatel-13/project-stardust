import Link from "next/link";

type Props = {
  previous?: string;
  next?: string;
};

export default function ChapterNavigation({
  previous,
  next,
}: Props) {
  return (

    <div className="mt-24 flex items-center justify-between">

      {previous ? (
        <Link href={previous}>
          ← Previous
        </Link>
      ) : (
        <div />
      )}

      <Link href="/birthday">
        ✨ Universe
      </Link>

      {next ? (
        <Link href={next}>
          Next →
        </Link>
      ) : (
        <div />
      )}

    </div>

  );
}