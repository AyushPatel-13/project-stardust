"use client";

import { useEffect, useState } from "react";

export default function Countdown() {
  const target = new Date("2026-07-08T00:00:00");

  const [timeLeft, setTimeLeft] = useState(getTime());

  function getTime() {
    const now = new Date();

    const diff = target.getTime() - now.getTime();

    const days = Math.max(0, Math.floor(diff / (1000 * 60 * 60 * 24)));

    const hours = Math.max(
      0,
      Math.floor((diff / (1000 * 60 * 60)) % 24)
    );

    const minutes = Math.max(
      0,
      Math.floor((diff / (1000 * 60)) % 60)
    );

    const seconds = Math.max(
      0,
      Math.floor((diff / 1000) % 60)
    );

    return {
      days,
      hours,
      minutes,
      seconds,
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTime());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="text-center text-white">

      <p className="text-xl tracking-[0.4em] mb-6">
        8 JULY
      </p>

      <div className="flex justify-center gap-8 text-5xl font-bold">

        <TimeBox
          value={timeLeft.days}
          label="Days"
        />

        <TimeBox
          value={timeLeft.hours}
          label="Hours"
        />

        <TimeBox
          value={timeLeft.minutes}
          label="Minutes"
        />

        <TimeBox
          value={timeLeft.seconds}
          label="Seconds"
        />

      </div>

      <p className="mt-10 text-white/70 text-lg">
        Until the universe celebrates you ✨
      </p>

    </div>
  );
}

function TimeBox({
  value,
  label,
}: {
  value: number;
  label: string;
}) {
  return (
    <div className="flex flex-col items-center">

      <span className="text-6xl">
        {String(value).padStart(2, "0")}
      </span>

      <span className="text-sm uppercase tracking-[0.3em] text-white/60 mt-2">
        {label}
      </span>

    </div>
  );
}