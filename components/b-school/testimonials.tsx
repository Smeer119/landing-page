'use client';

import { useEffect, useRef, useState } from 'react';

interface Testimonial {
  quote: string;
  author: string;
  location: string;
  rating: number;
}

export function Testimonials() {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const testimonials: Testimonial[] = [
    {
      quote: 'B-School gave me the clarity and courage to launch my business. It\'s not just training—it\'s a transformation.',
      author: 'Sarah M.',
      location: 'New York, USA',
      rating: 5,
    },
    {
      quote: 'I went from scattered ideas to a profitable business in 8 weeks. The community support alone is worth it.',
      author: 'Emma L.',
      location: 'London, UK',
      rating: 5,
    },
    {
      quote: 'Marie\'s real talk and practical strategies helped me overcome my fears and build something I\'m proud of.',
      author: 'Jessica R.',
      location: 'Toronto, Canada',
      rating: 5,
    },
  ];

  return (
    <section ref={sectionRef} className="w-full px-4 md:px-8 py-20 md:py-28 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[#1C1C1A] text-balance-custom">
            Trusted by Entrepreneurs Worldwide
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`bg-white rounded-lg p-8 shadow-md transition-all duration-500 ${
                isInView ? 'opacity-100' : 'opacity-0'
              }`}
              style={{
                boxShadow: '0 4px 20px rgba(28, 28, 26, 0.07)',
              }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <span key={i} className="text-[#C49A3C] text-lg">
                    ★
                  </span>
                ))}
              </div>

              {/* Quote */}
              <p className="text-lg md:text-xl font-serif italic text-[#1C1C1A] mb-6 leading-relaxed">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div>
                <p className="font-semibold text-[#1C1C1A] text-base">
                  {testimonial.author}
                </p>
                <p className="text-sm text-[#7A7470]">
                  {testimonial.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
