"use client";

import Typewriter from "./animations/Typewriter";
import { Scene } from "./SceneTimeline";
import ProgressBar from "./ProgressBar";
import MatchFound from "./animations/MatchFound";
import MahiReveal from "./animations/MahiReveal";
import StardustReveal from "./animations/StardustReveal";
import Countdown from "./Countdown";

type Props = {
  scene: Scene;
};

export default function SceneRenderer({ scene }: Props) {
  switch (scene.type) {
    case "type":
      return (
        <Typewriter
          text={scene.text}
          speed={40}
        />
      );

    case "progress":
  return <ProgressBar duration={scene.duration} />;

    case "stars":
      return (
        <div className="text-white text-2xl">
          Star Animation
        </div>
      );

      case "mahi":
  return <StardustReveal />;

  case "countdown":
  return <Countdown />;

    case "match":
  return <MatchFound />;

    default:
      return null;
  }
}