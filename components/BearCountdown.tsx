'use client';

import { useState, useEffect } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

// Shared hook for countdown logic
function useBearCountdown() {
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

  return { timeLeft, mounted };
}

// Hero inline countdown — sits below the subheadline
export function HeroCountdown() {
  const { timeLeft, mounted } = useBearCountdown();

  if (!mounted || !timeLeft) return null;

  const blocks = [
    { value: timeLeft.days, label: 'Days' },
    { value: timeLeft.hours, label: 'Hrs' },
    { value: timeLeft.minutes, label: 'Min' },
    { value: timeLeft.seconds, label: 'Sec' },
  ];

  return (
    <div className="mb-8">
      <p className="text-xs tracking-[0.15em] uppercase text-amber-400 font-semibold mb-3">
        Bears emerge from hibernation in
      </p>
      <div className="flex items-center gap-2.5">
        {blocks.map((block, i) => (
          <div key={block.label} className="flex items-center gap-2.5">
            <div className="flex flex-col items-center">
              <div className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-md w-14 h-14 md:w-16 md:h-16 flex items-center justify-center">
                <span className="text-xl md:text-2xl font-bold text-white tabular-nums">
                  {String(block.value).padStart(2, '0')}
                </span>
              </div>
              <span className="text-[9px] md:text-[10px] text-white/45 uppercase tracking-wider mt-1.5">
                {block.label}
              </span>
            </div>
            {i < blocks.length - 1 && (
              <span className="text-white/30 text-lg font-bold mb-4">:</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

// Sticky top banner — thin bar that appears after scrolling past the hero
export function StickyCountdownBanner() {
  const { timeLeft, mounted } = useBearCountdown();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past ~60% of viewport height (past hero)
      setVisible(window.scrollY > window.innerHeight * 0.6);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!mounted || !timeLeft || !visible) return null;

  return (
    <div className="fixed top-16 lg:top-20 left-0 right-0 z-40 bg-forest-950/95 backdrop-blur-sm border-b border-white/5 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-center gap-2 text-sm">
        <span className="text-amber-400 font-semibold text-xs tracking-wide uppercase hidden sm:inline">
          Bear season is coming
        </span>
        <span className="text-white/30 hidden sm:inline">|</span>
        <span className="text-white/70 text-xs">
          Bears emerge in{' '}
          <span className="text-white font-bold tabular-nums">
            {timeLeft.days}d {String(timeLeft.hours).padStart(2, '0')}h{' '}
            {String(timeLeft.minutes).padStart(2, '0')}m{' '}
            {String(timeLeft.seconds).padStart(2, '0')}s
          </span>
        </span>
        <span className="text-white/30">|</span>
        <span className="text-white/50 text-xs">
          Secure your property now
        </span>
      </div>
    </div>
  );
}

// Default export kept for backwards compat (no longer used on page)
export default function BearCountdown() {
  return null;
}
