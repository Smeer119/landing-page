'use client';

import Image from 'next/image';

export function AboutSection() {
  return (
    <section className="w-full px-4 md:px-8 py-20 md:py-28 bg-[#F0EAE0]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
        {/* Image Column */}
        <div className="relative h-[350px] md:h-[450px] rounded-lg overflow-hidden md:order-first">
          <Image
            src="/marie-hero.jpg"
            alt="Marie Forleo"
            fill
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>

        {/* Text Column */}
        <div className="flex flex-col gap-6 md:order-last">
          {/* Label */}
          <div className="text-sm font-semibold tracking-widest uppercase text-[#C45C3A]">
            Your Coach
          </div>

          {/* Name */}
          <h2 className="font-serif text-5xl md:text-6xl font-bold text-[#1C1C1A]">
            Marie Forleo
          </h2>

          {/* Decorative line with diamond */}
          <div className="flex items-center gap-4">
            <div className="flex-grow h-px bg-[#E5DFD7]"></div>
            <span className="text-[#C45C3A] text-xl">◆</span>
            <div className="flex-grow h-px bg-[#E5DFD7]"></div>
          </div>

          {/* Bio */}
          <div className="space-y-4">
            <p className="text-base md:text-lg leading-relaxed text-[#1C1C1A]">
              Marie Forleo is a world-renowned entrepreneur, author, and life coach who has helped thousands of people build thriving businesses. Her warm yet direct approach to business and personal growth has earned her a devoted following.
            </p>

            <p className="text-base md:text-lg leading-relaxed text-[#1C1C1A]">
              Featured in Oprah, Forbes, Inc., and Fast Company, Marie brings real-world experience and genuine care to every student. She believes that building a successful business should feel good—and that's exactly what B-School teaches.
            </p>

            <p className="text-base md:text-lg leading-relaxed text-[#1C1C1A]">
              When you join B-School, you're not just getting training. You're getting mentorship from someone who genuinely wants to see you succeed.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
