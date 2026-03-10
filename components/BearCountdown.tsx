'use client';

import { useState, useEffect } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function BearCountdown() {
  // Bears in PA typically emerge from hibernation mid-March to mid-April
  // Set target to April 1 of the current year (or next year if past that date)
  const getTargetDate = () => {
    const now = new Date();
    const year = now.getFullYear();
    let target = new Date(year, 3, 1); // April 1
    if (now > target) {
      target = new Date(year + 1, 3, 1);
    }
    return target;
  };

  const calculateTimeLeft = (): TimeLeft | null => {
    const now = new Date();
    const target = getTargetDate();
    const diff = target.getTime() - now.getTime();

    if (diff <= 0) return null;

    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!mounted || !timeLeft) return null;

  const blocks = [
    { value: timeLeft.days, label: 'Days' },
    { value: timeLeft.hours, label: 'Hours' },
    { value: timeLeft.minutes, label: 'Minutes' },
    { value: timeLeft.seconds, label: 'Seconds' },
  ];

  return (
    <section className="bg-forest-950 py-10 md:py-14 border-t border-white/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-xs tracking-[0.2em] uppercase text-brand-red font-semibold mb-3">
          Bear season is coming
        </p>
        <h3 className="text-xl md:text-2xl font-bold text-white mb-6">
          Bears emerge from hibernation in
        </h3>

        <div className="flex items-center justify-center gap-3 md:gap-5 mb-6">
          {blocks.map((block) => (
            <div key={block.label} className="flex flex-col items-center">
              <div className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-lg w-16 h-16 md:w-20 md:h-20 flex items-center justify-center">
                <span className="text-2xl md:text-3xl font-bold text-white tabular-nums">
                  {String(block.value).padStart(2, '0')}
                </span>
              </div>
              <span className="text-[10px] md:text-xs text-white/50 uppercase tracking-wider mt-2">
                {block.label}
              </span>
            </div>
          ))}
        </div>

        <p className="text-sm text-white/40">
          Secure your property before bears start foraging. Don&apos;t wait for the first incident.
        </p>
      </div>
    </section>
  );
}
