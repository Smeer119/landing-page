'use client';

import { useEffect, useRef, useState } from 'react';

interface Feature {
  icon: string;
  title: string;
  description: string;
}

export function FeaturesSection() {
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

  const features: Feature[] = [
    {
      icon: '🎯',
      title: '8 Core Modules',
      description: 'Step-by-step video training on marketing, sales, money, and mindset.',
    },
    {
      icon: '💬',
      title: 'Live Q&A Calls',
      description: 'Monthly access to Marie and her team.',
    },
    {
      icon: '👥',
      title: 'Private Community',
      description: 'A global network of driven, generous entrepreneurs.',
    },
    {
      icon: '📋',
      title: 'Worksheets & Toolkits',
      description: 'Plug-and-play templates so you\'re never starting from scratch.',
    },
    {
      icon: '🔁',
      title: 'Lifetime Access',
      description: 'Return whenever you need a refresh.',
    },
    {
      icon: '🌍',
      title: 'Alumni Network',
      description: '80,000+ graduates ready to collaborate.',
    },
  ];

  return (
    <section ref={sectionRef} className="w-full px-4 md:px-8 py-20 md:py-28 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[#1C1C1A] text-balance-custom">
            What You Get
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`bg-[#F0EAE0] border-t-2 border-[#C45C3A] p-8 rounded-none transition-all duration-500 ${
                isInView
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{
                transitionDelay: isInView ? `${index * 80}ms` : '0ms',
              }}
            >
              <div className="mb-4 text-3xl">{feature.icon}</div>
              <h3 className="text-lg md:text-xl font-serif font-bold text-[#1C1C1A] mb-3">
                {feature.title}
              </h3>
              <p className="text-base leading-relaxed text-[#7A7470]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
