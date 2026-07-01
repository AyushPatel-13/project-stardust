"use client";

import { useEffect, useState } from "react";

type Props = {
  children: React.ReactNode;
};

export default function ParallaxScene({ children }: Props) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    function handleMouseMove(e: MouseEvent) {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;

      setPosition({ x, y });
    }

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className="absolute inset-0"
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
        transition: "transform 0.15s linear",
      }}
    >
      {children}
    </div>
  );
}