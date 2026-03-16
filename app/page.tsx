import { Hero } from '@/components/b-school/hero';
import { StatsBar } from '@/components/b-school/stats-bar';
import { ProblemSection } from '@/components/b-school/problem-section';
import { FeaturesSection } from '@/components/b-school/features-section';
import { Testimonials } from '@/components/b-school/testimonials';
import { AboutSection } from '@/components/b-school/about-section';
import { PricingSection } from '@/components/b-school/pricing-section';
import { FAQSection } from '@/components/b-school/faq-section';
import { Footer } from '@/components/b-school/footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FAF7F2] overflow-hidden">
      <Hero />
      <StatsBar />
      <ProblemSection />
      <FeaturesSection />
      <Testimonials />
      <AboutSection />
      <PricingSection />
      <FAQSection />
      <Footer />
    </main>
  );
}
