import React from 'react';
import { LeadForm } from '@/features/lead-conversion/ui/LeadForm';
import { useTranslations } from 'next-intl';

export function LeadConversionSection() {
  const t = useTranslations('LeadConversion');

  return (
    <section id="contact" className="max-w-7xl mx-auto px-8 py-24 w-full">
      <div className="mb-16">
        <span className="text-[10px] tracking-[0.2em] font-bold text-[var(--color-crimson)] uppercase block mb-4">{t('subtitle')}</span>
        <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-none max-w-4xl">
          {t('title')} <span className="text-[var(--color-crimson)]">{t('title_highlight')}</span> {t('title_suffix')}
        </h2>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
        {/* Left Side: Editorial & Execution Metrics */}
        <div className="lg:col-span-5 space-y-8">
          <div className="inline-block px-3 py-1 bg-[var(--color-surface-container-highest)] text-[var(--color-surface-white)] font-bold text-[10px] uppercase tracking-[0.2em]">
            {t('editorial')}
          </div>
          <p className="text-[var(--color-cool-gray)] text-base md:text-lg max-w-md leading-relaxed">
            {t('description')}
          </p>
          
          <div className="bg-[var(--color-surface-container-low)] p-6 rounded-sm relative overflow-hidden group border-l-2 border-[var(--color-crimson)]">
            <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-crimson)]/5 to-transparent"></div>
            <div className="relative z-10">
              <div className="text-4xl font-black text-[var(--color-crimson)] tracking-tighter mb-1">{t('rate')}</div>
              <div className="text-[10px] font-bold uppercase tracking-widest text-[var(--color-cool-gray)]">{t('rate_label')}</div>
            </div>
          </div>
        </div>
        
        {/* Right Side: Lead Form Box */}
        <div className="lg:col-span-7">
          <div className="bg-[var(--color-surface-container-highest)] p-8 md:p-12 rounded-lg shadow-executive relative border border-[var(--border-subtle)]">
            <LeadForm />
          </div>
        </div>
      </div>
    </section>
  );
}
