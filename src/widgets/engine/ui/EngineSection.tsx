'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Settings, Zap, ShieldCheck, MapPin, ClipboardCheck, Smartphone } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { AnimatedCounter } from '@/shared/ui/AnimatedCounter';

export function EngineSection() {
  const t = useTranslations('Engine');

  return (
    <section id="services" className="bg-[var(--color-surface-container)] py-20 md:py-32 relative overflow-hidden text-[var(--color-surface-white)] border-y border-[var(--border-subtle)] scroll-mt-20">
      {/* Decorative Matrix Grid */}
      <div 
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.06] pointer-events-none" 
        style={{ backgroundImage: 'radial-gradient(var(--color-surface-white) 1px, transparent 1px)', backgroundSize: '32px 32px' }}
      />
           
      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="mb-14 md:mb-20 md:text-center max-w-3xl mx-auto">
          <div className="flex items-center md:justify-center gap-2 mb-3">
            <span className="h-[2px] w-8 bg-[var(--color-crimson)]"></span>
            <span className="text-[10px] tracking-[0.25em] font-black text-[var(--color-crimson)] uppercase">
              {t('subtitle')}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-black tracking-tighter uppercase leading-tight">
            {t('title_engine')} <br className="md:hidden"/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-crimson)] via-[#e63946] to-[#ff6b6b]">{t('title_highlight')}</span>
          </h2>
          <p className="text-[var(--color-cool-gray)] mt-4 text-base md:text-lg leading-relaxed font-normal">
            {t('description')}
          </p>
        </div>

        {/* 3 Core Services */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 md:mb-24">
          <motion.div 
            whileHover={{ y: -4 }}
            className="bg-[var(--color-surface-container-lowest)] p-8 border border-[var(--border-subtle)] rounded-xl hover:border-[var(--color-crimson)]/50 transition-all duration-300 group shadow-executive relative overflow-hidden flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-lg bg-[var(--color-crimson)]/10 flex items-center justify-center text-[var(--color-crimson)] mb-6 group-hover:bg-[var(--color-crimson)] group-hover:text-white transition-colors duration-300">
                <Activity className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-black uppercase tracking-tight mb-3 group-hover:text-[var(--color-crimson)] transition-colors">{t('services.activation_title')}</h3>
              <p className="text-[var(--color-cool-gray)] text-sm leading-relaxed mb-6">
                {t('services.activation_desc')}
              </p>
            </div>
            <ul className="space-y-2.5 text-xs font-bold uppercase tracking-wider text-[var(--color-surface-white)]/90 pt-4 border-t border-[var(--border-subtle)]">
              <li className="flex items-center"><span className="text-[var(--color-crimson)] mr-2 font-black">/</span> {t('services.activation_kpi1')}</li>
              <li className="flex items-center"><span className="text-[var(--color-crimson)] mr-2 font-black">/</span> {t('services.activation_kpi2')}</li>
            </ul>
          </motion.div>

          <motion.div 
            whileHover={{ y: -4 }}
            className="bg-[var(--color-surface-container-lowest)] p-8 border border-[var(--border-subtle)] rounded-xl hover:border-[var(--color-crimson)]/50 transition-all duration-300 group shadow-executive relative overflow-hidden flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-lg bg-[var(--color-crimson)]/10 flex items-center justify-center text-[var(--color-crimson)] mb-6 group-hover:bg-[var(--color-crimson)] group-hover:text-white transition-colors duration-300">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-black uppercase tracking-tight mb-3 group-hover:text-[var(--color-crimson)] transition-colors">{t('services.event_title')}</h3>
              <p className="text-[var(--color-cool-gray)] text-sm leading-relaxed mb-6">
                {t('services.event_desc')}
              </p>
            </div>
            <ul className="space-y-2.5 text-xs font-bold uppercase tracking-wider text-[var(--color-surface-white)]/90 pt-4 border-t border-[var(--border-subtle)]">
              <li className="flex items-center"><span className="text-[var(--color-crimson)] mr-2 font-black">/</span> {t('services.event_kpi1')}</li>
              <li className="flex items-center"><span className="text-[var(--color-crimson)] mr-2 font-black">/</span> {t('services.event_kpi2')}</li>
            </ul>
          </motion.div>

          <motion.div 
            whileHover={{ y: -4 }}
            className="bg-[var(--color-surface-container-lowest)] p-8 border border-[var(--border-subtle)] rounded-xl hover:border-[var(--color-crimson)]/50 transition-all duration-300 group shadow-executive relative overflow-hidden flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-lg bg-[var(--color-crimson)]/10 flex items-center justify-center text-[var(--color-crimson)] mb-6 group-hover:bg-[var(--color-crimson)] group-hover:text-white transition-colors duration-300">
                <Settings className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-black uppercase tracking-tight mb-3 group-hover:text-[var(--color-crimson)] transition-colors">{t('services.production_title')}</h3>
              <p className="text-[var(--color-cool-gray)] text-sm leading-relaxed mb-6">
                {t('services.production_desc')}
              </p>
            </div>
            <ul className="space-y-2.5 text-xs font-bold uppercase tracking-wider text-[var(--color-surface-white)]/90 pt-4 border-t border-[var(--border-subtle)]">
              <li className="flex items-center"><span className="text-[var(--color-crimson)] mr-2 font-black">/</span> {t('services.production_kpi1')}</li>
              <li className="flex items-center"><span className="text-[var(--color-crimson)] mr-2 font-black">/</span> {t('services.production_kpi2')}</li>
            </ul>
          </motion.div>
        </div>

        {/* Operational Excellence: QC Tri-Layer Engine */}
        <div className="bg-[var(--color-surface-container-lowest)] p-8 md:p-12 rounded-xl border border-[var(--border-subtle)] shadow-executive mb-16 md:mb-24 relative overflow-hidden">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 pb-6 border-b border-[var(--border-subtle)]">
            <div>
              <span className="text-[10px] font-black uppercase tracking-[0.25em] text-[var(--color-crimson)] block mb-2">{t('qc.badge')}</span>
              <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-[var(--color-surface-white)]">{t('qc.title')}</h3>
            </div>
            <p className="text-[var(--color-cool-gray)] text-sm max-w-md">{t('qc.desc')}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Step 1: Creative & Account (Gold Accent) */}
            <div className="relative flex flex-col">
              <div className="w-10 h-10 rounded-lg bg-[#F8CF0B]/15 flex items-center justify-center text-[#d4af00] dark:text-[#F8CF0B] font-black text-sm mb-4 border border-[#F8CF0B]/30">
                <ClipboardCheck className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold text-[var(--color-surface-white)] uppercase mb-2 tracking-tight">{t('qc.step1_title')}</h4>
              <p className="text-[var(--color-cool-gray)] text-sm leading-relaxed">{t('qc.step1_desc')}</p>
            </div>

            {/* Step 2: Operation & Field Force (Crimson Red) */}
            <div className="relative flex flex-col">
              <div className="w-10 h-10 rounded-lg bg-[#E3232B]/15 flex items-center justify-center text-[#E3232B] font-black text-sm mb-4 border border-[#E3232B]/30">
                <Smartphone className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold text-[var(--color-surface-white)] uppercase mb-2 tracking-tight">{t('qc.step2_title')}</h4>
              <p className="text-[var(--color-cool-gray)] text-sm leading-relaxed">{t('qc.step2_desc')}</p>
            </div>

            {/* Step 3: Quality Control (Emerald Green) */}
            <div className="relative flex flex-col">
              <div className="w-10 h-10 rounded-lg bg-[#18934C]/15 flex items-center justify-center text-[#18934C] font-black text-sm mb-4 border border-[#18934C]/30">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold text-[var(--color-surface-white)] uppercase mb-2 tracking-tight">{t('qc.step3_title')}</h4>
              <p className="text-[var(--color-cool-gray)] text-sm leading-relaxed">{t('qc.step3_desc')}</p>
            </div>
          </div>
        </div>

        {/* Bottom Half: The Living Local Network */}
        <div className="relative bg-[var(--color-surface-container-lowest)] overflow-hidden rounded-xl border border-[var(--border-subtle)] shadow-executive">
          {/* Subtle Ambient Accent */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[radial-gradient(circle,rgba(223,42,48,0.08)_0%,transparent_70%)] pointer-events-none" />

          <div className="relative z-10 p-8 md:p-14 border-l-4 border-[var(--color-crimson)]">
            <div className="mb-10">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-crimson)] mb-2 block">{t('living_network.subtitle')}</span>
              <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-[var(--color-surface-white)]">{t('living_network.title')}</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-14">
              {/* Metric 1 */}
              <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex flex-col">
                <div className="text-[clamp(3rem,6vw,4.5rem)] font-black leading-none text-[var(--color-crimson)] mb-3 tracking-tighter font-mono">
                  <AnimatedCounter to={26} suffix="+" />
                </div>
                <div className="h-[2px] w-12 bg-[var(--color-crimson)]/40 mb-4"></div>
                <p className="text-xs font-bold uppercase tracking-wider text-[var(--color-surface-white)] leading-snug">
                  {t('living_network.metric1_title')} <br />
                  <span className="text-[var(--color-cool-gray)] font-normal text-xs normal-case">{t('living_network.metric1_desc')}</span>
                </p>
              </motion.div>
              
              {/* Metric 2 */}
              <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }} className="flex flex-col">
                <div className="text-[clamp(3rem,6vw,4.5rem)] font-black leading-none text-[var(--color-crimson)] mb-3 tracking-tighter font-mono">
                  <AnimatedCounter to={3000} duration={2.5} suffix="+" />
                </div>
                <div className="h-[2px] w-12 bg-[var(--color-crimson)]/40 mb-4"></div>
                <p className="text-xs font-bold uppercase tracking-wider text-[var(--color-surface-white)] leading-snug">
                  {t('living_network.metric2_title')} <br />
                  <span className="text-[var(--color-cool-gray)] font-normal text-xs normal-case">{t('living_network.metric2_desc')}</span>
                </p>
              </motion.div>

              {/* Metric 3 */}
              <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="flex flex-col">
                <div className="text-[clamp(3rem,6vw,4.5rem)] font-black leading-none text-[var(--color-crimson)] mb-3 tracking-tighter font-mono">
                  <AnimatedCounter to={80} suffix="%" />
                </div>
                <div className="h-[2px] w-12 bg-[var(--color-crimson)]/40 mb-4"></div>
                <p className="text-xs font-bold uppercase tracking-wider text-[var(--color-surface-white)] leading-snug">
                  {t('living_network.metric3_title')} <br />
                  <span className="text-[var(--color-cool-gray)] font-normal text-xs normal-case">{t('living_network.metric3_desc')}</span>
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

