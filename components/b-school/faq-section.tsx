'use client';

import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: 'How long is B-School?',
      answer: 'B-School is an 8-week live program with ongoing lifetime access. You can work through the modules at your own pace, and the live group calls happen weekly.',
    },
    {
      question: 'Do I need prior business experience?',
      answer: 'No! B-School is designed for complete beginners all the way to experienced entrepreneurs. Whether you\'re starting from scratch or scaling up, Marie and the community have you covered.',
    },
    {
      question: 'What if I don\'t have a business idea yet?',
      answer: 'That\'s what B-School helps you figure out. Module 1 is all about validating your idea and making sure you\'re building something people want.',
    },
    {
      question: 'Do I get lifetime access?',
      answer: 'Yes! Once you enroll, you have lifetime access to all the training videos, materials, and the private community. You can return whenever you need a refresh.',
    },
    {
      question: 'Is there a refund policy?',
      answer: 'Yes, we offer a 30-day money-back guarantee. If B-School isn\'t right for you, just let us know within 30 days for a full refund—no questions asked.',
    },
    {
      question: 'Can I really turn this into income?',
      answer: 'B-School teaches proven strategies used by successful entrepreneurs. Your income depends on your effort and execution, but we give you all the tools and community support you need.',
    },
  ];

  return (
    <section id="faq" className="w-full px-4 md:px-8 py-20 md:py-28 bg-[#FAF7F2]">
      <div className="max-w-2xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#1C1C1A] text-balance-custom">
            Frequently Asked Questions
          </h2>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-0 border-t border-[#E5DFD7]">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-[#E5DFD7]">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between py-6 px-0 text-left hover:bg-[#F0EAE0] transition-colors rounded-none"
              >
                <h3 className="text-base md:text-lg font-serif font-semibold text-[#1C1C1A] flex-1">
                  {faq.question}
                </h3>
                <span
                  className="text-2xl text-[#C45C3A] flex-shrink-0 ml-4 transition-transform duration-300"
                  style={{
                    transform: openIndex === index ? 'rotate(45deg)' : 'rotate(0deg)',
                  }}
                >
                  +
                </span>
              </button>

              {/* Answer */}
              <div
                className="overflow-hidden transition-all duration-300 ease-in-out"
                style={{
                  maxHeight: openIndex === index ? '500px' : '0px',
                }}
              >
                <p className="pb-6 text-base leading-relaxed text-[#7A7470]">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
