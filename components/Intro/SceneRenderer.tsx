"use client";

import Typewriter from "./Typewriter";
import { Scene } from "./Timeline";
import ProgressBar from "./ProgressBar";
import MatchFound from "./MatchFound";
import MahiReveal from "./MahiReveal";
import StardustReveal from "./StardustReveal";
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

    case "match":
  return <MatchFound />;

    default:
      return null;
  }
}