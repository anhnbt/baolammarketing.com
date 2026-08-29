'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { AnimatedCounter } from '@/shared/ui/AnimatedCounter';

export function HeroSection() {
  const t = useTranslations('Hero');

  return (
    <section className="relative min-h-[880px] md:min-h-[1050px] flex flex-col justify-center overflow-hidden bg-[var(--color-surface)]">
      {/* Dynamic Background: Ambient Crimson Glow + Tech Execution Matrix */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Ambient Top & Bottom Radial Glows matching Logo Tri-Color Palette */}
        <div className="absolute -top-[15%] right-[-5%] w-[650px] md:w-[950px] h-[650px] md:h-[950px] rounded-full bg-[radial-gradient(circle,rgba(227,35,43,0.14)_0%,transparent_70%)] dark:bg-[radial-gradient(circle,rgba(232,69,74,0.18)_0%,transparent_70%)] blur-3xl" />
        <div className="absolute top-[35%] -left-[10%] w-[500px] md:w-[750px] h-[500px] md:h-[750px] rounded-full bg-[radial-gradient(circle,rgba(24,147,76,0.07)_0%,transparent_70%)] dark:bg-[radial-gradient(circle,rgba(34,163,82,0.08)_0%,transparent_70%)] blur-2xl" />

        {/* Execution Dot & Line Grid */}
        <div 
          className="absolute inset-0 opacity-[0.04] dark:opacity-[0.08]"
          style={{
            backgroundImage: 'radial-gradient(var(--color-surface-white) 1.5px, transparent 1.5px)',
            backgroundSize: '40px 40px'
          }}
        />

        {/* Abstract Execution Network Map (SVG Nationwide Nodes) */}
        <svg 
          className="absolute right-0 top-1/2 -translate-y-1/2 w-full max-w-[850px] h-[650px] opacity-20 dark:opacity-25 translate-x-[15%] md:translate-x-[5%]" 
          viewBox="0 0 800 600" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <g stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" className="text-[var(--color-crimson)]">
            <path d="M 200,120 Q 350,180 480,140 T 680,260" opacity="0.6" />
            <path d="M 180,320 Q 320,280 520,380 T 720,440" opacity="0.5" />
            <path d="M 300,80 Q 420,300 560,480" opacity="0.4" />
          </g>
          {/* Pulsing Nodes */}
          <circle cx="200" cy="120" r="5" className="fill-[var(--color-crimson)]" />
          <circle cx="480" cy="140" r="4" className="fill-[var(--color-crimson)] opacity-80" />
          <circle cx="680" cy="260" r="6" className="fill-[var(--color-crimson)]" />
          <circle cx="180" cy="320" r="4" className="fill-[var(--color-crimson)] opacity-70" />
          <circle cx="520" cy="380" r="5" className="fill-[var(--color-crimson)]" />
          <circle cx="720" cy="440" r="7" className="fill-[var(--color-crimson)]" />
          <circle cx="300" cy="80" r="4" className="fill-[var(--color-crimson)] opacity-60" />
          <circle cx="560" cy="480" r="6" className="fill-[var(--color-crimson)]" />
        </svg>

        {/* Subtle Bottom Edge Fade */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[var(--color-surface)]" />
      </div>

      {/* Content Canvas */}
      <div className="relative z-10 px-6 sm:px-8 pt-28 pb-44 md:pt-36 md:pb-72 max-w-7xl mx-auto w-full">
        <motion.div
          className="flex flex-col gap-6 md:gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.12 } }
          }}
        >
          {/* Editorial Metadata Badge */}
          <motion.div variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0 } }} className="flex items-center gap-3">
            <span className="h-[2px] w-10 bg-[var(--color-crimson)]"></span>
            <span className="uppercase tracking-[0.25em] text-xs font-black text-[var(--color-crimson)]">{t('badge')}</span>
          </motion.div>

          {/* Main Headline */}
          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter text-[var(--color-surface-white)] uppercase leading-[1.05] md:leading-none break-words">
              {t('headline_top')}<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E3232B] via-[#ea3840] to-[#F8CF0B]">
                {t('headline_highlight')}
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl font-bold uppercase tracking-tight text-[var(--color-surface-white)]/90 mt-4 max-w-3xl">
              {t('tagline')}
            </p>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="text-[var(--color-cool-gray)] max-w-2xl text-base md:text-lg leading-relaxed font-normal"
          >
            {t('description')}
          </motion.p>

          {/* Dual Action Strategic CTAs */}
          <motion.div 
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mt-2 max-w-xl"
          >
            <a 
              href="#contact"
              className="inline-flex items-center justify-center gap-3 bg-[var(--color-crimson)] text-white px-8 py-4 rounded-lg font-black text-xs uppercase tracking-widest hover:brightness-110 shadow-glow active:scale-[0.98] transition-all group"
            >
              <span>{t('cta_primary')}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#portfolio"
              className="inline-flex items-center justify-center gap-2 bg-[var(--color-surface-container-lowest)] text-[var(--color-surface-white)] border border-[var(--border-subtle)] hover:border-[var(--color-crimson)]/50 px-7 py-4 rounded-lg font-bold text-xs uppercase tracking-wider hover:bg-[var(--color-surface-container)] active:scale-[0.98] transition-all"
            >
              <span>{t('cta_secondary')}</span>
              <ChevronRight className="w-4 h-4 text-[var(--color-cool-gray)]" />
            </a>
          </motion.div>

          {/* Power Metric Grid */}
          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-6 max-w-3xl">
            <div className="bg-[var(--color-surface-container-lowest)] p-6 md:p-8 rounded-lg border-l-4 border-[var(--color-crimson)] relative overflow-hidden group shadow-executive border border-[var(--border-subtle)] hover:shadow-lg transition-all duration-300">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[var(--color-crimson)]/5 via-transparent to-transparent pointer-events-none"></div>
              <div className="relative z-10">
                <div className="text-[2.75rem] md:text-[3.25rem] font-black text-[var(--color-crimson)] leading-none mb-2 tracking-tight">
                  <AnimatedCounter from={0} to={3000} duration={2} />+
                </div>
                <div className="text-xs uppercase tracking-widest font-black text-[var(--color-surface-white)]">{t('collaborators')}</div>
                <div className="text-[11px] text-[var(--color-cool-gray)] mt-1 font-medium">{t('collaborators_sub')}</div>
              </div>
            </div>

            <div className="bg-[var(--color-surface-container-lowest)] p-6 md:p-8 rounded-lg border-l-4 border-[var(--color-crimson)] relative overflow-hidden group shadow-executive border border-[var(--border-subtle)] hover:shadow-lg transition-all duration-300">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[var(--color-crimson)]/5 via-transparent to-transparent pointer-events-none"></div>
              <div className="relative z-10">
                <div className="text-[2.75rem] md:text-[3.25rem] font-black text-[var(--color-crimson)] leading-none mb-2 tracking-tight">
                  <AnimatedCounter from={0} to={2500000} duration={2.5} />+
                </div>
                <div className="text-xs uppercase tracking-widest font-black text-[var(--color-surface-white)]">{t('samples_per_year')}</div>
                <div className="text-[11px] text-[var(--color-cool-gray)] mt-1 font-medium">{t('samples_sub')}</div>
              </div>
            </div>
          </motion.div>

        </motion.div>
      </div>

      {/* Infinite Client Logo Bar */}
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes scroll-logos {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll-logo {
          animation: scroll-logos 30s linear infinite;
          display: flex;
          width: max-content;
        }
        .animate-scroll-logo:hover {
          animation-play-state: paused;
        }
      `}} />
      <div className="absolute bottom-0 z-40 w-full py-10 md:py-14 overflow-x-clip overflow-y-visible pointer-events-auto">
        {/* Visual Background Bar */}
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[80px] md:h-[100px] bg-[var(--color-surface-container-lowest)]/85 backdrop-blur-xl border-y border-[var(--border-subtle)] z-0" />

        {/* Logos container with edge mask */}
        <div
          className="relative z-10 overflow-visible"
          style={{
            maskImage: 'linear-gradient(to right, transparent, black 150px, black calc(100% - 150px), transparent)',
            WebkitMaskImage: 'linear-gradient(to right, transparent, black 150px, black calc(100% - 150px), transparent)'
          }}
        >
          <div className="max-w-7xl mx-auto relative overflow-visible">
            <div className="animate-scroll-logo items-center gap-16 md:gap-24 pl-16 md:pl-24 overflow-visible">
              {/* Set 1 */}
              {[
                "/assets/logos/pepsico.svg",
                "/assets/logos/unilever.svg",
                "/assets/logos/nestle.svg",
                "/assets/logos/saint-gobain.svg",
                "/assets/logos/masan.png",
                "/assets/logos/panasonic.svg"
              ].map((src, idx) => (
                <img 
                  key={`logo-1-${idx}`} 
                  src={src} 
                  alt="Client Logo" 
                  className="h-9 md:h-12 w-auto object-contain opacity-70 hover:opacity-100 hover:scale-105 contrast-125 dark:brightness-110 dark:mix-blend-screen mix-blend-multiply hover:mix-blend-normal transition-all duration-300 cursor-pointer relative z-50" 
                />
              ))}

              {/* Set 2 (Duplicate for infinite loop) */}
              {[
                "/assets/logos/pepsico.svg",
                "/assets/logos/unilever.svg",
                "/assets/logos/nestle.svg",
                "/assets/logos/saint-gobain.svg",
                "/assets/logos/masan.png",
                "/assets/logos/panasonic.svg"
              ].map((src, idx) => (
                <img 
                  key={`logo-2-${idx}`} 
                  src={src} 
                  alt="Client Logo" 
                  className="h-9 md:h-12 w-auto object-contain opacity-70 hover:opacity-100 hover:scale-105 contrast-125 dark:brightness-110 dark:mix-blend-screen mix-blend-multiply hover:mix-blend-normal transition-all duration-300 cursor-pointer relative z-50" 
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
