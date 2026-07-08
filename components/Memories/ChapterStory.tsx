type Props = {
  children: React.ReactNode;
};

export default function ChapterStory({
  children,
}: Props) {
  return (

    <div className="mx-auto max-w-3xl">

      <p className="text-xl leading-10 text-white/80">

        {children}

      </p>

    </div>

  );
}