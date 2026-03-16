'use client';

import { useEffect, useRef, useState } from 'react';

export function ProblemSection() {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const painPoints = [
    'You have the idea but have no clue where to start.',
    'You\'ve watched 100 YouTube videos and feel more confused.',
    'You\'re ready to be your own boss — but the money part terrifies you.',
  ];

  return (
    <section ref={sectionRef} className="w-full px-4 md:px-8 py-20 md:py-28 bg-[#FAF7F2]">
      <div className="max-w-2xl mx-auto flex flex-col gap-12">
        {/* Section Label */}
        <div className="text-center">
          <p className="text-lg md:text-xl font-serif italic text-[#C49A3C] mb-2">Sound familiar?</p>
        </div>

        {/* Pain Points */}
        <div className="flex flex-col gap-8">
          {painPoints.map((point, index) => (
            <div
              key={index}
              className={`flex gap-4 transition-all duration-500 ${
                isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-5'
              }`}
              style={{
                transitionDelay: isInView ? `${index * 100}ms` : '0ms',
              }}
            >
              <span className="text-2xl text-[#C45C3A] flex-shrink-0">—</span>
              <p className="text-lg md:text-xl leading-relaxed text-[#1C1C1A] italic">
                {point}
              </p>
            </div>
          ))}
        </div>

        {/* Transition Line */}
        <div className="text-center pt-8 border-t border-[#E5DFD7]">
          <p className="text-xl md:text-2xl font-serif text-[#1C1C1A] font-semibold text-balance-custom">
            B-School was built for exactly this moment.
          </p>
        </div>
      </div>
    </section>
  );
}
