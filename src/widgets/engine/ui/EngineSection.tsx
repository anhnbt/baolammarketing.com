'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Settings, Zap } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { AnimatedCounter } from '@/shared/ui/AnimatedCounter';

export function EngineSection() {
  const t = useTranslations('Engine');

  return (
    <section id="services" className="force-dark bg-[var(--color-surface-container-high)] py-16 md:py-24 relative overflow-hidden text-[var(--color-surface-white)] scroll-mt-20">
      {/* Decorative Matrix Grid */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(var(--color-cool-gray) 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
           
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="mb-12 md:mb-20 md:text-center">
          <span className="text-[10px] tracking-[0.2em] font-bold text-[var(--color-crimson)] uppercase block mb-4">{t('subtitle')}</span>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase leading-tight">
            {t('title_engine')} <br className="md:hidden"/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-crimson)] to-[#ff7b72]">{t('title_highlight')}</span>
          </h2>
          <p className="text-[var(--color-cool-gray)] mt-6 max-w-2xl mx-auto text-sm md:text-base">
            {t('description')}
          </p>
        </div>

        {/* Top: The Arms (Services) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-[var(--color-surface-container-highest)] p-8 border border-white/5 rounded-sm hover:border-[var(--color-crimson)]/50 hover:bg-white/5 hover:backdrop-blur-xl transition-all duration-300 group shadow-lg"
          >
            <Activity className="w-8 h-8 text-[var(--color-crimson)] mb-6" />
            <h3 className="text-xl font-black uppercase tracking-tighter mb-4 group-hover:text-[var(--color-crimson)] transition-colors">{t('services.activation_title')}</h3>
            <p className="text-[var(--color-cool-gray)] text-sm leading-relaxed mb-6">
              {t('services.activation_desc')}
            </p>
            <ul className="space-y-2 text-xs font-bold uppercase tracking-widest text-[var(--color-surface-white)]/60">
              <li><span className="text-[var(--color-crimson)] mr-2">/</span> {t('services.activation_kpi1')}</li>
              <li><span className="text-[var(--color-crimson)] mr-2">/</span> {t('services.activation_kpi2')}</li>
            </ul>
          </motion.div>

          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-[var(--color-surface-container-highest)] p-8 border border-white/5 rounded-sm hover:border-[var(--color-crimson)]/50 hover:bg-white/5 hover:backdrop-blur-xl transition-all duration-300 group shadow-lg"
          >
            <Zap className="w-8 h-8 text-[var(--color-crimson)] mb-6" />
            <h3 className="text-xl font-black uppercase tracking-tighter mb-4 group-hover:text-[var(--color-crimson)] transition-colors">{t('services.event_title')}</h3>
            <p className="text-[var(--color-cool-gray)] text-sm leading-relaxed mb-6">
              {t('services.event_desc')}
            </p>
            <ul className="space-y-2 text-xs font-bold uppercase tracking-widest text-[var(--color-surface-white)]/60">
              <li><span className="text-[var(--color-crimson)] mr-2">/</span> {t('services.event_kpi1')}</li>
              <li><span className="text-[var(--color-crimson)] mr-2">/</span> {t('services.event_kpi2')}</li>
            </ul>
          </motion.div>

          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-[var(--color-surface-container-highest)] p-8 border border-white/5 rounded-sm hover:border-[var(--color-crimson)]/50 hover:bg-white/5 hover:backdrop-blur-xl transition-all duration-300 group shadow-lg"
          >
            <Settings className="w-8 h-8 text-[var(--color-crimson)] mb-6" />
            <h3 className="text-xl font-black uppercase tracking-tighter mb-4 group-hover:text-[var(--color-crimson)] transition-colors">{t('services.production_title')}</h3>
            <p className="text-[var(--color-cool-gray)] text-sm leading-relaxed mb-6">
              {t('services.production_desc')}
            </p>
            <ul className="space-y-2 text-xs font-bold uppercase tracking-widest text-[var(--color-surface-white)]/60">
              <li><span className="text-[var(--color-crimson)] mr-2">/</span> {t('services.production_kpi1')}</li>
              <li><span className="text-[var(--color-crimson)] mr-2">/</span> {t('services.production_kpi2')}</li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Half: The Living Network */}
        <div className="relative bg-[var(--color-surface-container-lowest)] overflow-hidden mt-8 md:mt-12 rounded-sm border border-[var(--color-crimson)]/20 shadow-2xl">
          {/* Light Map Background */}
          <div className="absolute inset-0 z-0">
            <img 
              className="w-full h-full object-cover opacity-10 mix-blend-screen scale-110" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC2qiU2I1kNvdmph9RUTPJ-sn3TzNk0r_TO_zFFqXBcrRbVR8i5BIt-sUlHtabplH0jeKXlHL-e14-4vpCMQE-tmxYlF3G0YczzByhWFVzqU4p9oeg-wBkIwr9S2hRXYYHMsJRXscO37vR8Ii-d3SBR8zqJHsSjO3V6g6w3weewR_cFPXZiv2DFZ4Kr6h6WIHyq2r4aroPq6us3CcNq5-4k0GYqHxTIvzh81cOqIKAch1ZR6NaLWGyH7pA4ym9nro3_ighXKNKk8QQ"
              alt="Bao Lam Network Light Map"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-surface-container-lowest)] to-transparent"></div>
          </div>

          <div className="relative z-10 p-8 md:p-16 border-l-4 border-[var(--color-crimson)]">
            <div className="mb-12">
              <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-crimson)] mb-2">{t('living_network.subtitle')}</h2>
              <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tight">{t('living_network.title')}</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
              {/* Metric 1 */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex flex-col">
                <div className="text-[clamp(3.5rem,8vw,5.5rem)] font-black leading-none text-[var(--color-crimson)] mb-4 tracking-tighter">
                  <AnimatedCounter to={26} suffix="+" />
                </div>
                <div className="h-px w-12 bg-[var(--color-crimson)]/40 mb-6"></div>
                <p className="text-[11px] font-bold uppercase tracking-[0.1em] text-[var(--color-surface-white)] leading-snug">
                  {t('living_network.metric1_title')} <br />
                  <span className="text-[var(--color-cool-gray)] font-normal">{t('living_network.metric1_desc')}</span>
                </p>
              </motion.div>
              
              {/* Metric 2 */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="flex flex-col">
                <div className="text-[clamp(3.5rem,8vw,5.5rem)] font-black leading-none text-[var(--color-crimson)] mb-4 tracking-tighter">
                  <AnimatedCounter to={3000} duration={2.5} suffix="+" />
                </div>
                <div className="h-px w-12 bg-[var(--color-crimson)]/40 mb-6"></div>
                <p className="text-[11px] font-bold uppercase tracking-[0.1em] text-[var(--color-surface-white)] leading-snug">
                  {t('living_network.metric2_title')} <br />
                  <span className="text-[var(--color-cool-gray)] font-normal">{t('living_network.metric2_desc')}</span>
                </p>
              </motion.div>

              {/* Metric 3 */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }} className="flex flex-col">
                <div className="text-[clamp(3.5rem,8vw,5.5rem)] font-black leading-none text-[var(--color-crimson)] mb-4 tracking-tighter">
                  <AnimatedCounter to={80} suffix="%" />
                </div>
                <div className="h-px w-12 bg-[var(--color-crimson)]/40 mb-6"></div>
                <p className="text-[11px] font-bold uppercase tracking-[0.1em] text-[var(--color-surface-white)] leading-snug">
                  {t('living_network.metric3_title')} <br />
                  <span className="text-[var(--color-cool-gray)] font-normal">{t('living_network.metric3_desc')}</span>
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
