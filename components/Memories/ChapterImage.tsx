import Image from "next/image";

type Props = {
  src: string;
};

export default function ChapterImage({
  src,
}: Props) {
  return (

    <div className="mb-14 overflow-hidden rounded-3xl">

      <Image
        src={src}
        alt=""
        width={1200}
        height={700}
        className="w-full object-cover"
      />

    </div>

  );
}