import React from 'react';
import { useTranslations } from 'next-intl';

export function CtaSection() {
  const t = useTranslations('Cta');

  return (
    <section className="py-20 bg-[var(--color-surface-container-lowest)] relative overflow-hidden mb-24 w-full">
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(var(--color-crimson) 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <h3 className="text-sm font-black text-[var(--color-crimson)] tracking-[0.4em] uppercase mb-8">{t('subtitle')}</h3>
        <h2 className="text-5xl md:text-7xl font-black text-[var(--color-surface-white)] uppercase mb-12 tracking-tighter leading-none">{t('title')}</h2>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <button className="bg-[var(--color-crimson)] text-white px-12 py-5 rounded-sm font-black tracking-widest text-sm hover:scale-105 transition-transform active:scale-95 shadow-[0px_24px_48px_rgba(223,42,48,0.2)]">
            {t('btn_start')}
          </button>
          <button className="border border-white/30 text-[var(--color-surface-white)] px-12 py-5 rounded-sm font-black tracking-widest text-sm hover:bg-[var(--color-surface-container-highest)] transition-colors">
            {t('btn_methodology')}
          </button>
        </div>
      </div>
    </section>
  );
}
