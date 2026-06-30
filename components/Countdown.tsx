"use client";

import { useEffect, useState } from "react";

export default function Countdown() {
  const targetDate = new Date("2026-07-30T00:00:00").getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (distance % (1000 * 60 * 60 * 24)) /
            (1000 * 60 * 60)
        ),
        minutes: Math.floor(
          (distance % (1000 * 60 * 60)) /
            (1000 * 60)
        ),
        seconds: Math.floor(
          (distance % (1000 * 60)) / 1000
        ),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className="flex gap-4 mt-8 flex-wrap justify-center">
      {Object.entries(timeLeft).map(([label, value]) => (
        <div
          key={label}
          className="bg-white/10 border border-white/10 rounded-2xl px-6 py-5 text-center min-w-[100px]"
        >
          <h2 className="text-4xl font-black text-white">
            {value}
          </h2>
          <p className="text-gray-300 uppercase text-xs tracking-widest mt-2">
            {label}
          </p>
        </div>
      ))}
    </div>
  );
}