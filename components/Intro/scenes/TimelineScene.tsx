"use client";

type Props = {
  onComplete: () => void;
};

export default function TimelineScene({
  onComplete,
}: Props) {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center text-white">
      Timeline Scene
    </div>
  );
}