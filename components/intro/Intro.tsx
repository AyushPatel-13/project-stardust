"use client";

import { useEffect, useState } from "react";
import SceneRenderer from "./SceneRenderer";
import { timeline } from "./SceneTimeline";
import Background from "./Background";
import UniverseLanding from "@/components/universe/UniverseLanding";

export default function Intro() {
  const [currentScene, setCurrentScene] = useState(0);

  const [introFinished, setIntroFinished] = useState(false);

  useEffect(() => {
  if (currentScene >= timeline.length - 1) {
    const timer = setTimeout(() => {
      setIntroFinished(true);
    }, timeline[currentScene].duration);

    return () => clearTimeout(timer);
  }

  const timer = setTimeout(() => {
    setCurrentScene((prev) => prev + 1);
  }, timeline[currentScene].duration);

  return () => clearTimeout(timer);
}, [currentScene]);

if (introFinished) {
  return <UniverseLanding />;
}

  return (
  <main className="relative min-h-screen overflow-hidden flex items-center justify-center">
    <Background />

    <div className="relative z-10">
      <SceneRenderer scene={timeline[currentScene]} />
    </div>
  </main>
);
}