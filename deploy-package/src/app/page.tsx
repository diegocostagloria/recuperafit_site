import HeroSection, {
  BenefitsSection,
  HowItWorksSection,
  PlansSection,
  TestimonialsSection,
  CTASection,
  PartnersSection
} from '@/components/HomeComponents';

export default function Home() {
  return (
    <>
      <HeroSection />
      <BenefitsSection />
      <HowItWorksSection />
      <PlansSection />
      <TestimonialsSection />
      <PartnersSection />
      <CTASection />
    </>
  );
}
