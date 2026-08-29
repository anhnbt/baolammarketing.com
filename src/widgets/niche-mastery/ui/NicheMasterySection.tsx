'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { Landmark, Truck, GraduationCap, MapPin, CheckCircle2, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

export function NicheMasterySection() {
  const t = useTranslations('NicheMastery');

  return (
    <section id="niche" className="mb-20 md:mb-36 max-w-7xl mx-auto px-6 sm:px-8 w-full mt-12 md:mt-24 scroll-mt-20">
      {/* Section Header */}
      <div className="mb-10 md:mb-14">
        <div className="flex items-center gap-3 mb-3">
          <span className="h-[2px] w-8 bg-[var(--color-crimson)]"></span>
          <span className="text-[10px] tracking-[0.25em] font-black text-[var(--color-crimson)] uppercase">
            {t('subtitle')}
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter text-[var(--color-surface-white)] uppercase mb-4 max-w-3xl leading-tight">
          {t('title')}
        </h2>
        <p className="text-[var(--color-cool-gray)] max-w-3xl border-l-4 border-[var(--color-crimson)] pl-6 py-1.5 text-base md:text-lg leading-relaxed">
          {t('description')}
        </p>
      </div>
      
      {/* Bento Grid Asymmetric Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Card 1: Chùa / Lễ hội (Span 7 cols) */}
        <motion.div 
          whileHover={{ y: -4 }}
          transition={{ duration: 0.3 }}
          className="lg:col-span-7 group bg-[var(--color-surface-container-lowest)] p-8 md:p-10 rounded-xl relative overflow-hidden border border-[var(--border-subtle)] hover:border-[var(--color-crimson)]/50 shadow-executive flex flex-col justify-between"
        >
          {/* Subtle Ambient Background Gradient */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[radial-gradient(circle,rgba(223,42,48,0.08)_0%,transparent_70%)] pointer-events-none" />
          <div className="absolute top-0 left-0 w-1.5 h-0 bg-[var(--color-crimson)] group-hover:h-full transition-all duration-500"></div>

          <div>
            <div className="flex items-center justify-between gap-4 mb-6">
              <div className="w-12 h-12 rounded-lg bg-[var(--color-crimson)]/10 flex items-center justify-center text-[var(--color-crimson)] group-hover:bg-[var(--color-crimson)] group-hover:text-white transition-all duration-300">
                <Landmark className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-black uppercase tracking-wider text-[var(--color-crimson)] bg-[var(--color-crimson)]/10 px-3 py-1.5 rounded-full border border-[var(--color-crimson)]/20">
                {t('cards.temple.badge')}
              </span>
            </div>

            <h3 className="text-2xl md:text-3xl font-black text-[var(--color-surface-white)] mb-2 uppercase tracking-tight">
              {t('cards.temple.title')}
            </h3>
            <p className="text-[var(--color-crimson)] font-bold text-sm tracking-wide mb-4 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 shrink-0" />
              {t('cards.temple.highlight')}
            </p>
            <p className="text-[var(--color-cool-gray)] text-sm md:text-base leading-relaxed mb-6">
              {t('cards.temple.desc')}
            </p>
          </div>

          {/* Key Hotspots Tags */}
          <div className="pt-6 border-t border-[var(--border-subtle)] flex flex-wrap gap-2">
            {['Phủ Tây Hồ', 'Chùa Hương', 'Chùa Bái Đính', 'Đền Hùng'].map((venue, idx) => (
              <span key={idx} className="inline-flex items-center gap-1 text-xs font-semibold text-[var(--color-surface-white)]/80 bg-[var(--color-surface-container)] px-3 py-1 rounded-md border border-[var(--border-subtle)]">
                <MapPin className="w-3 h-3 text-[var(--color-crimson)]" />
                {venue}
              </span>
            ))}
          </div>
        </motion.div>
        
        {/* Right Stack: Card 2 & Card 3 (Span 5 cols) */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          {/* Card 2: KCN & Trường học */}
          <motion.div 
            whileHover={{ y: -4 }}
            transition={{ duration: 0.3 }}
            className="group bg-[var(--color-surface-container-lowest)] p-7 md:p-8 rounded-xl relative overflow-hidden border border-[var(--border-subtle)] hover:border-[var(--color-crimson)]/50 shadow-executive flex-1"
          >
            <div className="absolute top-0 left-0 w-1.5 h-0 bg-[var(--color-crimson)] group-hover:h-full transition-all duration-500"></div>
            
            <div className="flex items-center justify-between gap-4 mb-4">
              <div className="w-11 h-11 rounded-lg bg-[var(--color-crimson)]/10 flex items-center justify-center text-[var(--color-crimson)] group-hover:bg-[var(--color-crimson)] group-hover:text-white transition-all duration-300">
                <GraduationCap className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-black uppercase tracking-wider text-[var(--color-crimson)] bg-[var(--color-crimson)]/10 px-3 py-1.5 rounded-full border border-[var(--color-crimson)]/20">
                {t('cards.industrial.badge')}
              </span>
            </div>

            <h3 className="text-xl font-bold text-[var(--color-surface-white)] mb-2 uppercase tracking-tight">
              {t('cards.industrial.title')}
            </h3>
            <p className="text-[var(--color-crimson)] font-bold text-xs tracking-wide mb-3 flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
              {t('cards.industrial.highlight')}
            </p>
            <p className="text-[var(--color-cool-gray)] text-sm leading-relaxed">
              {t('cards.industrial.desc')}
            </p>
          </motion.div>

          {/* Card 3: Vùng sâu & Nông thôn */}
          <motion.div 
            whileHover={{ y: -4 }}
            transition={{ duration: 0.3 }}
            className="group bg-[var(--color-surface-container-lowest)] p-7 md:p-8 rounded-xl relative overflow-hidden border border-[var(--border-subtle)] hover:border-[var(--color-crimson)]/50 shadow-executive flex-1"
          >
            <div className="absolute top-0 left-0 w-1.5 h-0 bg-[var(--color-crimson)] group-hover:h-full transition-all duration-500"></div>
            
            <div className="flex items-center justify-between gap-4 mb-4">
              <div className="w-11 h-11 rounded-lg bg-[var(--color-crimson)]/10 flex items-center justify-center text-[var(--color-crimson)] group-hover:bg-[var(--color-crimson)] group-hover:text-white transition-all duration-300">
                <Truck className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-black uppercase tracking-wider text-[var(--color-crimson)] bg-[var(--color-crimson)]/10 px-3 py-1.5 rounded-full border border-[var(--color-crimson)]/20">
                {t('cards.rural.badge')}
              </span>
            </div>

            <h3 className="text-xl font-bold text-[var(--color-surface-white)] mb-2 uppercase tracking-tight">
              {t('cards.rural.title')}
            </h3>
            <p className="text-[var(--color-crimson)] font-bold text-xs tracking-wide mb-3 flex items-center gap-2">
              <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
              {t('cards.rural.highlight')}
            </p>
            <p className="text-[var(--color-cool-gray)] text-sm leading-relaxed">
              {t('cards.rural.desc')}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

