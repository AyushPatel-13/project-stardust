"use client";

type Props = {
  onComplete: () => void;
};

export default function LetterScene({
  onComplete,
}: Props) {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center text-white">
      Letter Scene
    </div>
  );
}