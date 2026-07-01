"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const TARGET_DATE = new Date("2026-07-08T00:00:00");

export default function Countdown() {
    const router = useRouter();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date();
      const difference = TARGET_DATE.getTime() - now.getTime();

      if (difference <= 0) {

  setTimeLeft({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  router.push("/birthday");

  return;
}

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      });
    };

    updateCountdown();

    const timer = setInterval(updateCountdown, 1000);

    return () => clearInterval(timer);
  }, []);

 return (
  <div className="flex flex-col items-center">

    {/* Days */}
    <div className="text-center">

      <h2 className="text-[110px]
md:text-[130px]
font-extralight leading-none font-light text-white drop-shadow-[0_0_35px_rgba(255,255,255,0.5)]">
        {String(timeLeft.days).padStart(2, "0")}
      </h2>

      <p className="mt-2 tracking-[0.6em] uppercase text-yellow-200 text-lg">
        DAYS LEFT
      </p>

    </div>

    {/* Timer */}
    <div className="mt-14 flex gap-28">

      <div>
        <h3 className="text-6xl font-light text-white">
          {String(timeLeft.hours).padStart(2, "0")}
        </h3>

        <p className="mt-3 tracking-[0.35em] text-yellow-200 uppercase text-sm">
          Hours
        </p>
      </div>

      <div>
        <h3 className="text-6xl font-light text-white">
          {String(timeLeft.minutes).padStart(2, "0")}
        </h3>

        <p className="mt-3 tracking-[0.35em] text-yellow-200 uppercase text-sm">
          Minutes
        </p>
      </div>

      <div>
        <h3 className="text-6xl font-light text-white">
          {String(timeLeft.seconds).padStart(2, "0")}
        </h3>

        <p className="mt-3 tracking-[0.35em] text-yellow-200 uppercase text-sm">
          Seconds
        </p>
      </div>

    </div>

    {/* Divider */}

    <div className="mt-16 flex items-center gap-5">

      <div className="h-px w-40 bg-gradient-to-r from-transparent via-yellow-200 to-yellow-200"/>

      <div className="text-rose-300 text-xl">
  ♥
</div>

      <div className="h-px w-40 bg-gradient-to-l from-transparent via-yellow-200 to-yellow-200"/>

    </div>

    <p className="mt-8 text-xl text-white/70">
      ✨ The stars are preparing something beautiful just for you ✨
    </p>

  </div>
);
}