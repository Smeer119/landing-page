'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="w-full px-4 md:px-8 py-16 md:py-28 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
        {/* Text Column */}
        <div className="flex flex-col gap-6 md:order-first order-last">
          {/* Label */}
          <div
            className={`text-sm font-semibold tracking-widest uppercase text-[#C45C3A] ${
              isLoaded ? 'animate-fade-up' : 'opacity-0'
            }`}
            style={{ animationDelay: '0s' }}
          >
            Applications now open
          </div>

          {/* Headline */}
          <h1
            className={`font-serif text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-[#1C1C1A] text-balance-custom ${
              isLoaded ? 'animate-fade-up' : 'opacity-0'
            }`}
            style={{ animationDelay: '0.1s' }}
          >
            Build a Business You're Proud Of
          </h1>

          {/* Subheadline */}
          <p
            className={`text-lg md:text-xl leading-relaxed text-[#1C1C1A] max-w-md ${
              isLoaded ? 'animate-fade-up' : 'opacity-0'
            }`}
            style={{ animationDelay: '0.2s' }}
          >
            B-School gives you the strategy, tools, and community to turn your idea into real income.
          </p>

          {/* CTA Button */}
          <div
            className={`${isLoaded ? 'animate-fade-up' : 'opacity-0'}`}
            style={{ animationDelay: '0.3s' }}
          >
            <Link
              href="#enroll"
              className="inline-block px-8 py-4 bg-[#C45C3A] text-white font-semibold rounded-[6px] hover:bg-[#A84830] transition-colors duration-200"
            >
              Apply Now →
            </Link>
          </div>

          {/* Trust Line */}
          <p
            className={`text-sm text-[#7A7470] mt-4 ${
              isLoaded ? 'animate-fade-up' : 'opacity-0'
            }`}
            style={{ animationDelay: '0.4s' }}
          >
            Trusted by 80,000+ students in 150+ countries
          </p>
        </div>

        {/* Image Column */}
        <div className="relative h-[400px] md:h-[500px] lg:h-[600px] rounded-lg overflow-hidden md:order-last order-first">
          <Image
            src="/marie-hero.jpg"
            alt="Marie Forleo"
            fill
            priority
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </div>
    </section>
  );
}
