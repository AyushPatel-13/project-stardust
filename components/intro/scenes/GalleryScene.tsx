"use client";

type Props = {
  onComplete: () => void;
};

export default function GalleryScene({
  onComplete,
}: Props) {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center text-white">
      Gallery Scene
    </div>
  );
}