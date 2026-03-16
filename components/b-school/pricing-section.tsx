'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

export function PricingSection() {
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

  return (
    <section ref={sectionRef} className="w-full px-4 md:px-8 py-20 md:py-28 bg-[#FAF7F2]">
      <div className="max-w-2xl mx-auto">
        {/* Pricing Card */}
        <div
          className={`bg-[#1C1C1A] rounded-lg p-8 md:p-12 transition-all duration-500 ${
            isInView
              ? 'opacity-100 scale-100'
              : 'opacity-0 scale-95'
          }`}
          style={{
            transitionDelay: isInView ? '0ms' : '0ms',
          }}
        >
          {/* Label */}
          <div className="text-sm font-semibold tracking-widest uppercase text-[#C49A3C] mb-6">
            Join B-School
          </div>

          {/* Price */}
          <div className="mb-8">
            <h3 className="text-5xl md:text-6xl font-serif font-bold text-white mb-2">
              $1,999
            </h3>
            <p className="text-base md:text-lg text-[#C49A3C]">
              or 4 payments of $549
            </p>
          </div>

          {/* What's Included */}
          <ul className="space-y-3 mb-10 text-base text-white">
            <li className="flex items-start gap-3">
              <span className="text-[#C49A3C] mt-1">✓</span>
              <span>8 weeks of training modules with lifetime access</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#C49A3C] mt-1">✓</span>
              <span>Monthly live Q&A calls with Marie and her team</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#C49A3C] mt-1">✓</span>
              <span>Private community of 80,000+ entrepreneurs</span>
            </li>
          </ul>

          {/* Primary CTA */}
          <div className="mb-4">
            <Link
              href="#apply"
              className="block w-full text-center px-8 py-4 bg-[#C45C3A] text-white font-semibold rounded-[6px] hover:bg-[#A84830] transition-colors duration-200"
            >
              Enroll Now →
            </Link>
          </div>

          {/* Secondary Link */}
          <div className="text-center">
            <a
              href="#faq"
              className="text-white underline hover:text-[#C49A3C] transition-colors text-sm"
            >
              Have questions? Read the FAQ
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
