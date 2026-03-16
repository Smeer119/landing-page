'use client';

import { useEffect, useRef, useState } from 'react';

interface Stat {
  value: number;
  label: string;
  suffix?: string;
}

function CountUpNumber({ value, suffix = '' }: { value: number; suffix?: string }) {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let currentValue = 0;
          const increment = Math.ceil(value / 30);
          
          const interval = setInterval(() => {
            currentValue += increment;
            if (currentValue >= value) {
              setDisplayValue(value);
              clearInterval(interval);
            } else {
              setDisplayValue(currentValue);
            }
          }, 40);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [value]);

  return (
    <span ref={ref}>
      {displayValue.toLocaleString()}
      {suffix}
    </span>
  );
}

export function StatsBar() {
  const stats: Stat[] = [
    { value: 80000, label: 'Students' },
    { value: 150, label: 'Countries', suffix: '+' },
    { value: 5, label: 'Rating', suffix: '★' },
  ];

  return (
    <section className="w-full bg-[#F0EAE0] border-y border-[#E5DFD7]">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {/* First stat with different styling */}
          <div className="flex flex-col gap-1">
            <div className="text-3xl md:text-4xl font-bold text-[#1C1C1A] font-serif">
              <CountUpNumber value={80000} suffix="+" />
            </div>
            <p className="text-sm md:text-base text-[#7A7470]">Students worldwide</p>
          </div>

          {/* Second stat */}
          <div className="flex flex-col gap-1 border-l border-[#E5DFD7] pl-8 md:pl-12">
            <div className="text-3xl md:text-4xl font-bold text-[#1C1C1A] font-serif">
              <CountUpNumber value={150} suffix="+" />
            </div>
            <p className="text-sm md:text-base text-[#7A7470]">Countries</p>
          </div>

          {/* Third stat - Featured In */}
          <div className="col-span-2 md:col-span-1 border-l border-[#E5DFD7] pl-8 md:pl-12">
            <p className="text-xs uppercase tracking-widest text-[#7A7470] mb-2">Featured in</p>
            <p className="text-sm font-medium text-[#1C1C1A]">Oprah, Forbes, Inc.</p>
          </div>

          {/* Fourth stat - Rating */}
          <div className="md:flex flex-col gap-1 border-l border-[#E5DFD7] pl-8 md:pl-12 hidden">
            <div className="text-xl text-[#C49A3C]">★★★★★</div>
            <p className="text-sm md:text-base text-[#7A7470]">Highly rated</p>
          </div>
        </div>
      </div>
    </section>
  );
}
