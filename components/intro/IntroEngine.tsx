"use client";

import { useState } from "react";

import IntroScene from "./scenes/IntroScene";
import UniverseScene from "./scenes/UniverseScene";
import TimelineScene from "./scenes/TimelineScene";
import LetterScene from "./scenes/LetterScene";
import GalleryScene from "./scenes/GalleryScene";
import EndingScene from "./scenes/EndingScene";

export default function IntroEngine() {

  const [scene, setScene] = useState(0);

  switch (scene) {

    case 0:
      return (
        <IntroScene
          onComplete={() => setScene(1)}
        />
      );

    case 1:
      return (
        <UniverseScene
          onComplete={() => setScene(2)}
        />
      );

    case 2:
      return (
        <TimelineScene
          onComplete={() => setScene(3)}
        />
      );

    case 3:
      return (
        <LetterScene
          onComplete={() => setScene(4)}
        />
      );

    case 4:
      return (
        <GalleryScene
          onComplete={() => setScene(5)}
        />
      );

    default:
      return (
        <EndingScene />
      );
  }

}