'use client';

import React from 'react';
import { LeadForm } from '@/features/lead-conversion/ui/LeadForm';
import { useTranslations } from 'next-intl';
import { Clock, ShieldCheck, FileCheck, CheckCircle2, Phone, Mail, MapPin } from 'lucide-react';

export function LeadConversionSection() {
  const t = useTranslations('LeadConversion');

  return (
    <section id="contact" className="max-w-7xl mx-auto px-6 sm:px-8 py-20 md:py-32 w-full scroll-mt-20">
      {/* Section Header */}
      <div className="mb-12 md:mb-16">
        <div className="flex items-center gap-2 mb-3">
          <span className="h-[2px] w-8 bg-[var(--color-crimson)]"></span>
          <span className="text-[10px] tracking-[0.25em] font-black text-[var(--color-crimson)] uppercase">
            {t('subtitle')}
          </span>
        </div>
        <h2 className="text-3xl sm:text-5xl md:text-7xl font-black tracking-tighter uppercase leading-none max-w-4xl text-[var(--color-surface-white)]">
          {t('title')} <span className="text-[var(--color-crimson)]">{t('title_highlight')}</span> {t('title_suffix')}
        </h2>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
        {/* Left Side: Editorial, SLA & Execution Metrics */}
        <div className="lg:col-span-5 space-y-8">
          <div className="inline-block px-3.5 py-1.5 bg-[var(--color-surface-container)] text-[var(--color-surface-white)] font-black text-[10px] uppercase tracking-[0.2em] rounded-md border border-[var(--border-subtle)]">
            {t('editorial')}
          </div>

          <p className="text-[var(--color-cool-gray)] text-base md:text-lg max-w-md leading-relaxed font-normal">
            {t('description')}
          </p>
          
          {/* SLA Commitments List */}
          <div className="bg-[var(--color-surface-container-lowest)] p-6 sm:p-7 rounded-xl border border-[var(--border-subtle)] space-y-4 shadow-sm">
            <h3 className="text-xs font-black uppercase tracking-wider text-[var(--color-surface-white)]">
              {t('sla_title')}
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-xs sm:text-sm font-medium text-[var(--color-surface-white)]/90">
                <Phone className="w-4 h-4 text-[var(--color-crimson)] shrink-0 mt-0.5" />
                <a href="tel:0911636666" className="hover:text-[var(--color-crimson)] transition-colors underline-offset-4 hover:underline">
                  {t('sla_1')}
                </a>
              </li>
              <li className="flex items-start gap-3 text-xs sm:text-sm font-medium text-[var(--color-surface-white)]/90">
                <Mail className="w-4 h-4 text-[var(--color-crimson)] shrink-0 mt-0.5" />
                <a href="mailto:tho.tv@baolammarketing.com" className="hover:text-[var(--color-crimson)] transition-colors underline-offset-4 hover:underline">
                  {t('sla_2')}
                </a>
              </li>
              <li className="flex items-start gap-3 text-xs sm:text-sm font-medium text-[var(--color-surface-white)]/90">
                <MapPin className="w-4 h-4 text-[var(--color-crimson)] shrink-0 mt-0.5" />
                <span>{t('sla_3')}</span>
              </li>
            </ul>
          </div>

          {/* Metric Box */}
          <div className="bg-[var(--color-surface-container-lowest)] p-6 md:p-8 rounded-xl relative overflow-hidden group border-l-4 border-[var(--color-crimson)] border border-[var(--border-subtle)] shadow-executive">
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-crimson)]/5 via-transparent to-transparent pointer-events-none"></div>
            <div className="relative z-10">
              <div className="text-4xl md:text-5xl font-black text-[var(--color-crimson)] tracking-tighter mb-2 font-mono">{t('rate')}</div>
              <div className="text-xs font-bold uppercase tracking-wider text-[var(--color-cool-gray)]">{t('rate_label')}</div>
            </div>
          </div>
        </div>
        
        {/* Right Side: Lead Form Box */}
        <div className="lg:col-span-7">
          <div className="bg-[var(--color-surface-container-lowest)] p-6 sm:p-10 md:p-12 rounded-xl shadow-executive relative border border-[var(--border-subtle)]">
            <LeadForm />
          </div>
        </div>
      </div>
    </section>
  );
}

