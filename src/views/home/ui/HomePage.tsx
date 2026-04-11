import React from 'react';
import { HeroSection } from '@/widgets/hero/ui/HeroSection';
import { EngineSection } from '@/widgets/engine/ui/EngineSection';
import { PortfolioSection } from '@/widgets/portfolio/ui/PortfolioSection';
import { LeadConversionSection } from '@/widgets/lead-conversion/ui/LeadConversionSection';
import { NicheMasterySection } from '@/widgets/niche-mastery/ui/NicheMasterySection';
import { CtaSection } from '@/widgets/cta/ui/CtaSection';

export function HomePage() {
  return (
    <main className="w-full relative z-0">
      <HeroSection />
      <NicheMasterySection />
      <EngineSection />
      <PortfolioSection />
      <LeadConversionSection />
      <CtaSection />
    </main>
  );
}
