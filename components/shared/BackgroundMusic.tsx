"use client";

import { useEffect, useRef } from "react";

export default function BackgroundMusic() {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    console.log("BackgroundMusic Mounted");

    const audio = audioRef.current;

    if (!audio) return;

    audio.volume = 0.3;

    audio.play().then(() => {
      console.log("Music Started");
    }).catch((err) => {
      console.log("Play Failed", err);
    });
  }, []);

  return (
    <audio
      ref={audioRef}
      src="/music/background.mp3"
      controls
      autoPlay
      loop
      style={{
        position: "fixed",
        bottom: 20,
        right: 20,
        zIndex: 99999,
      }}
    />
  );
}