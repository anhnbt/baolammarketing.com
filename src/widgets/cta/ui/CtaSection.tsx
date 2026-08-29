'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { ArrowRight, PhoneCall } from 'lucide-react';

export function CtaSection() {
  const t = useTranslations('Cta');

  return (
    <section className="py-20 md:py-32 bg-[var(--color-surface-container)] relative overflow-hidden mb-16 md:mb-24 w-full text-[var(--color-surface-white)] border-y border-[var(--border-subtle)]">
      {/* Dynamic Background */}
      <div 
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none" 
        style={{ backgroundImage: 'radial-gradient(var(--color-surface-white) 1px, transparent 1px)', backgroundSize: '32px 32px' }}
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[radial-gradient(ellipse,rgba(223,42,48,0.14)_0%,transparent_70%)] blur-3xl pointer-events-none" />

      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <div className="inline-flex items-center gap-2 mb-4">
          <span className="h-[2px] w-6 bg-[var(--color-crimson)]"></span>
          <span className="text-[10px] font-black text-[var(--color-crimson)] tracking-[0.3em] uppercase">
            {t('subtitle')}
          </span>
          <span className="h-[2px] w-6 bg-[var(--color-crimson)]"></span>
        </div>

        <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-[var(--color-surface-white)] uppercase mb-6 tracking-tighter leading-tight max-w-3xl mx-auto">
          {t('title')}
        </h2>

        <p className="text-[var(--color-cool-gray)] text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
          {t('description')}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
          <a 
            href="#contact" 
            className="w-full sm:w-auto bg-[var(--color-crimson)] text-white px-9 py-4.5 rounded-lg font-black tracking-widest text-xs uppercase hover:brightness-110 transition-all duration-200 active:scale-98 shadow-glow flex items-center justify-center gap-2 group"
          >
            <span>{t('btn_start')}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a 
            href="tel:0911636666" 
            className="w-full sm:w-auto border border-[var(--border-subtle)] text-[var(--color-surface-white)] bg-[var(--color-surface-container-lowest)] px-8 py-4.5 rounded-lg font-black tracking-widest text-xs uppercase hover:bg-[var(--color-surface-container-high)] hover:border-[var(--color-crimson)]/40 transition-all duration-200 shadow-sm inline-flex items-center justify-center gap-2"
          >
            <PhoneCall className="w-4 h-4 text-[var(--color-crimson)]" />
            <span>{t('btn_methodology')}</span>
          </a>
        </div>
      </div>
    </section>
  );
}

