"use client";

import Countdown from "./Countdown";
import StarField from "./StarField";
import Dove from "./Dove";
import ShootingStars from "./ShootingStars";
import { motion } from "framer-motion";
import Image from "next/image";
import RosePetals from "./RosePetals";
import HeroSection from "./HeroSection";

export default function BirthdayCountdown() {
  return (
    <main className="relative min-h-screen overflow-hidden">

      {/* Night Sky */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#020617] via-[#081126] to-black" />

      {/* Purple Glow */}
      <div
        className="
          absolute
          left-1/2
          top-1/2
          h-[900px]
          w-[900px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-purple-700/20
          blur-[180px]
        "
      />

      <StarField />

      <div className="absolute inset-0 opacity-20 pointer-events-none">
  <Image
    src="/images/galaxy/galaxy.png"
    alt="Galaxy"
    fill
    className="object-cover"
  />
</div>

      <ShootingStars />

      <RosePetals />

      {/* Moon */}
<motion.div
  className="absolute top-14 left-1/2 -translate-x-1/2 z-10"
  animate={{
    y: [0, -8, 0],
    scale: [1, 1.015, 1],
  }}
  transition={{
    duration: 8,
    repeat: Infinity,
    ease: "easeInOut",
  }}
>
  <Image
    src="/images/moon/moon.png"
    alt="Moon"
    width={180}
    height={180}
    priority
    className="drop-shadow-[0_0_140px_rgba(255,255,255,0.75)]"
  />
</motion.div>

<Image
  src="/images/clouds/cloud-left.png"
  alt=""
  width={600}
  height={400}
  className="absolute bottom-[-40px] left-0 w-[700px] h-auto opacity-70 pointer-events-none"
/>

<Image
  src="/images/clouds/cloud-right.png"
  alt=""
  width={500}
  height={500}
  className="absolute bottom-[-40px] right-0 w-[650px] h-auto opacity-70 pointer-events-none"
/>

<Dove />

<HeroSection />

    </main>
  );
}