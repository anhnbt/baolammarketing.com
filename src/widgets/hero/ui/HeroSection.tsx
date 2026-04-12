'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { useTheme } from 'next-themes';
import { AnimatedCounter } from '@/shared/ui/AnimatedCounter';

export function HeroSection() {
  const t = useTranslations('Hero');
  const { resolvedTheme } = useTheme();

  return (
    <section className="relative min-h-[750px] md:min-h-[1000px] flex flex-col justify-center overflow-hidden">
      {/* Background Image / Glowing Map */}
      <div className="absolute inset-0 z-0">
        <motion.img 
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 0.4, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="w-full h-full object-cover dark:mix-blend-screen mix-blend-multiply dark:grayscale-0 grayscale dark:invert-0 invert-0 dark:opacity-100 opacity-60" 
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=2832&q=80"
          alt="Bao Lam Coverage Map"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-surface)] via-transparent to-[var(--color-surface)]/80"></div>
      </div>

      {/* Content Canvas */}
      <div className="relative z-10 px-8 pt-24 pb-36 md:pt-32 md:pb-64 max-w-7xl mx-auto w-full">
        <motion.div 
          className="flex flex-col gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.2 } }
          }}
        >
          {/* Editorial Metadata */}
          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="flex items-center gap-3">
            <span className="h-[2px] w-12 bg-[var(--color-crimson)]"></span>
            <span className="uppercase tracking-[0.3em] text-xs font-black text-[var(--color-crimson)]">{t('title')}</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1 variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-[var(--color-surface-white)] uppercase leading-tight md:leading-none mt-4 break-words">
            {t('headline_top')}<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-crimson)] to-[#ffb3ad]">
              {t('headline_highlight')}
            </span>
          </motion.h1>
          
          <motion.p 
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} 
            className="text-[var(--color-cool-gray)] mt-8 max-w-2xl text-base md:text-lg leading-relaxed font-medium"
          >
            {t('description')}
          </motion.p>

          {/* Power Metric Grid */}
          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-12">
            <div className="bg-[var(--color-surface-container-low)] p-6 rounded-lg border-l-4 border-[var(--color-crimson)] relative overflow-hidden group shadow-executive border border-[var(--border-subtle)]">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[var(--color-crimson)]/5 to-transparent"></div>
              <div className="relative z-10">
                <div className="text-[2.5rem] font-black text-[var(--color-crimson)] leading-none mb-2">
                  <AnimatedCounter from={0} to={3000} duration={2} />+
                </div>
                <div className="text-[10px] uppercase tracking-widest font-bold text-[var(--color-cool-gray)]">{t('collaborators')}</div>
              </div>
            </div>
            
            <div className="bg-[var(--color-surface-container-low)] p-6 rounded-lg border-l-4 border-[var(--color-crimson)] relative overflow-hidden group shadow-executive border border-[var(--border-subtle)]">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[var(--color-crimson)]/5 to-transparent"></div>
              <div className="relative z-10">
                <div className="text-[2.5rem] font-black text-[var(--color-crimson)] leading-none mb-2">
                  <AnimatedCounter from={0} to={2500000} duration={2.5} />+
                </div>
                <div className="text-[10px] uppercase tracking-widest font-bold text-[var(--color-cool-gray)]">{t('samples_per_year')}</div>
              </div>
            </div>
          </motion.div>

        </motion.div>
      </div>

      {/* Monochrome Logo Bar */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes scroll-logos {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll-logo {
          animation: scroll-logos 30s linear infinite;
          display: flex;
          width: max-content;
        }
        /* Gradient mask for smooth fade in/out at edges */
        .fade-edges {
          mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
        }
      `}} />
      <div className="absolute bottom-0 w-full bg-[var(--color-surface-container-lowest)]/80 backdrop-blur-xl py-6 md:py-8 border-t border-[var(--border-subtle)] overflow-hidden">
        <div className="max-w-7xl mx-auto fade-edges">
          <div className="animate-scroll-logo items-center gap-16 md:gap-24 pl-16 md:pl-24">
            {/* Set 1 */}
            {[
              "/assets/logos/pepsico.svg",
              "/assets/logos/unilever.svg",
              "/assets/logos/nestle.png",
              "/assets/logos/saint-gobain.svg",
              "/assets/logos/masan.png",
              "/assets/logos/panasonic.png",
              "/assets/logos/total.png"
            ].map((src, idx) => (
              <img key={`logo-1-${idx}`} src={src} alt="Client Logo" className="h-10 md:h-14 w-auto grayscale opacity-70 hover:opacity-100 hover:grayscale-0 contrast-150 brightness-110 dark:mix-blend-screen mix-blend-multiply transition-all duration-300" />
            ))}
            
            {/* Set 2 (Duplicate for infinite matching) */}
            {[
              "/assets/logos/pepsico.svg",
              "/assets/logos/unilever.svg",
              "/assets/logos/nestle.png",
              "/assets/logos/saint-gobain.svg",
              "/assets/logos/masan.png",
              "/assets/logos/panasonic.png",
              "/assets/logos/total.png"
            ].map((src, idx) => (
              <img key={`logo-2-${idx}`} src={src} alt="Client Logo" className="h-10 md:h-14 w-auto grayscale opacity-70 hover:opacity-100 hover:grayscale-0 contrast-150 brightness-110 dark:mix-blend-screen mix-blend-multiply transition-all duration-300" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
