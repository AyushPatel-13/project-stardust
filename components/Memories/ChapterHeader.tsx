type Props = {
  chapter: string;
  title: string;
};

export default function ChapterHeader({
  chapter,
  title,
}: Props) {
  return (

    <div className="mb-16 text-center">

      <p className="uppercase tracking-[0.45em] text-white/50">
        {chapter}
      </p>

      <h1 className="mt-4 text-6xl font-bold">
        {title}
      </h1>

    </div>

  );
}