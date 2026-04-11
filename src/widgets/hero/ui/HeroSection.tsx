'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { AnimatedCounter } from '@/shared/ui/AnimatedCounter';

export function HeroSection() {
  const t = useTranslations('Hero');

  return (
    <section className="relative min-h-[795px] flex flex-col justify-center overflow-hidden">
      {/* Background Image / Glowing Map */}
      <div className="absolute inset-0 z-0">
        <motion.img 
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 0.4, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="w-full h-full object-cover mix-blend-screen" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuC2qiU2I1kNvdmph9RUTPJ-sn3TzNk0r_TO_zFFqXBcrRbVR8i5BIt-sUlHtabplH0jeKXlHL-e14-4vpCMQE-tmxYlF3G0YczzByhWFVzqU4p9oeg-wBkIwr9S2hRXYYHMsJRXscO37vR8Ii-d3SBR8zqJHsSjO3V6g6w3weewR_cFPXZiv2DFZ4Kr6h6WIHyq2r4aroPq6us3CcNq5-4k0GYqHxTIvzh81cOqIKAch1ZR6NaLWGyH7pA4ym9nro3_ighXKNKk8QQ"
          alt="Bao Lam Coverage Map"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-surface)] via-transparent to-[var(--color-surface)]/80"></div>
      </div>

      {/* Content Canvas */}
      <div className="relative z-10 px-8 pt-12 pb-24 max-w-7xl mx-auto w-full">
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
          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="flex items-center gap-4">
            <div className="h-[1px] w-12 bg-[var(--color-crimson)]"></div>
            <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[var(--color-cool-gray)]">{t('title')}</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1 variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="text-[2.5rem] md:text-[3.5rem] leading-[1.1] font-black tracking-[-0.04em] text-white max-w-3xl">
            {t('headline')}
          </motion.h1>

          {/* Power Metric Grid */}
          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div className="bg-[var(--color-surface-container-low)] p-6 rounded-lg border-l-4 border-[var(--color-crimson)] relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[var(--color-crimson)]/5 to-transparent"></div>
              <div className="relative z-10">
                <div className="text-[2.5rem] font-black text-[var(--color-crimson)] leading-none mb-2">
                  <AnimatedCounter from={0} to={3000} duration={2} />+
                </div>
                <div className="text-[10px] uppercase tracking-widest font-bold text-[var(--color-cool-gray)]">{t('collaborators')}</div>
              </div>
            </div>
            
            <div className="bg-[var(--color-surface-container-low)] p-6 rounded-lg border-l-4 border-[var(--color-crimson)] relative overflow-hidden group">
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
      <div className="absolute bottom-0 w-full bg-[var(--color-surface-container-lowest)]/80 backdrop-blur-xl py-6 md:py-8 border-t border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto fade-edges">
          <div className="animate-scroll-logo items-center gap-16 md:gap-24 pl-16 md:pl-24">
            {/* Set 1 */}
            {[
              "https://lh3.googleusercontent.com/aida-public/AB6AXuDO3ZFZkwYwIOE3etCBarI5lNEd-_9jh7uaTOTyeyN7hEM3ZX3FCleTjKu5LNQvLegKNIZbBHDlF3tB0SsPCeae2zVLbW2c2jUOaEagzswFjpnRxglB20G-OyRMZyJMz1xfyhIbbBOZiNOSb9dxNhgPm7XWLTTX8zFKLGaMwMnx1O2yYU9CRyuVctYqonA5pBkR99mG2TKqoG3Q-_vTQqgrPjWQw60QpPu9Meh6-1q8Xhc-CtnIhafIt2VmcSus_pyl3dgao0H6CP4",
              "https://lh3.googleusercontent.com/aida-public/AB6AXuB2LUWKjA922Ebpar1DiqagRtsvQcgEp-OjA9IpCOwI-aPyKu9rMSYFTRP6iBtgl62p2xLFNCYloP_wIezX50zWgPNPcxabJJs8O_n7tzN0RhW-i60ZIpPXE3v6-N9s3bM1xQGT095rY_abnYw6AnCoQf-x0WVLZOYKB_ff-lbl9qBq737H-uDYpmTuJffEIBEAB10-IrkgoHltcUAMsZsdGkIwCPw-zI36R5D-vF_qZn5bsJfmTskWhvAiPXw7FsFsSRcXWFRbtlM",
              "https://lh3.googleusercontent.com/aida-public/AB6AXuDfE73iKHfBqmAyHWtcmA81njuCUsgWTikP1Ggc1Tzql7sBuSaktAipbwD9phahFmoIpGsXLu9oBm2vjZpozPe5RatKVeQ239jXkZTn2OEDhcADzOQu5-bkdKHSDJ2NZFz7ijhUZ93cMFoIIxh1x58sybuU_TDdrhRbXGJoI2MshrLS2l7rKzt5NMK4ZOBx7ztaCWHBhNXBYk5JBWBMlhBQI8ja7TSAR1PGNo4zroAUl4B0RVUMjITuaYPZQ45OJYZfNWksV99Gvm8",
              "https://lh3.googleusercontent.com/aida-public/AB6AXuBg1ee9lvGmsGeX6jatVr97cEhjMtWdtaNjqsuBu0x1jTM36nvranpvA6rIxBoE58zJcdh3vUG4WgkZW8ugAJvqNs2qynqCy5qxyJAdGWtv1Ht7CEInKFDyfUvVhuV5CJ01EG2ilAKqYwfCPcyQD2ZUNr1YXt-2LII84OaJwnSyFryybZ3UZa8vJkeD-Aq4Dsq5Spat3NWIEb-WOp22BB9nGdeSHERJk6bZG4igw0U4J095Abknag0pUrM_wcKrtCuqcocdvxghABk",
              "https://lh3.googleusercontent.com/aida-public/AB6AXuAkkjTs09AZ_8L6lw0Ig5v_sHBZ4mcNWOJUfmsCLZTu8B_PPHA9Bsy0cZSY-eS9TpryKh1Z8hIQw37ouUlL7dWizFEUEP-WFN7I_zpif3MYE1j2GOyQ6dYG4tIzZACfjM9wUhd-P9wamlWFa33IRSVW0tHK9RVLaiu6D2_ljGW51hKRpvaQap4oQsibq1T98B6XHd5zN3n3bAzhZDDi47EFF9LXLQHoFRU2YE54tAgN24a9V4Z2AUSzU0f2G9Qy8rRkSadfP0B23iU"
            ].map((src, idx) => (
              <img key={`logo-1-${idx}`} src={src} alt="Client Logo" className="h-10 md:h-14 w-auto grayscale opacity-70 hover:opacity-100 hover:grayscale-0 contrast-150 brightness-110 mix-blend-screen transition-all duration-300" />
            ))}
            
            {/* Set 2 (Duplicate for infinite matching) */}
            {[
              "https://lh3.googleusercontent.com/aida-public/AB6AXuDO3ZFZkwYwIOE3etCBarI5lNEd-_9jh7uaTOTyeyN7hEM3ZX3FCleTjKu5LNQvLegKNIZbBHDlF3tB0SsPCeae2zVLbW2c2jUOaEagzswFjpnRxglB20G-OyRMZyJMz1xfyhIbbBOZiNOSb9dxNhgPm7XWLTTX8zFKLGaMwMnx1O2yYU9CRyuVctYqonA5pBkR99mG2TKqoG3Q-_vTQqgrPjWQw60QpPu9Meh6-1q8Xhc-CtnIhafIt2VmcSus_pyl3dgao0H6CP4",
              "https://lh3.googleusercontent.com/aida-public/AB6AXuB2LUWKjA922Ebpar1DiqagRtsvQcgEp-OjA9IpCOwI-aPyKu9rMSYFTRP6iBtgl62p2xLFNCYloP_wIezX50zWgPNPcxabJJs8O_n7tzN0RhW-i60ZIpPXE3v6-N9s3bM1xQGT095rY_abnYw6AnCoQf-x0WVLZOYKB_ff-lbl9qBq737H-uDYpmTuJffEIBEAB10-IrkgoHltcUAMsZsdGkIwCPw-zI36R5D-vF_qZn5bsJfmTskWhvAiPXw7FsFsSRcXWFRbtlM",
              "https://lh3.googleusercontent.com/aida-public/AB6AXuDfE73iKHfBqmAyHWtcmA81njuCUsgWTikP1Ggc1Tzql7sBuSaktAipbwD9phahFmoIpGsXLu9oBm2vjZpozPe5RatKVeQ239jXkZTn2OEDhcADzOQu5-bkdKHSDJ2NZFz7ijhUZ93cMFoIIxh1x58sybuU_TDdrhRbXGJoI2MshrLS2l7rKzt5NMK4ZOBx7ztaCWHBhNXBYk5JBWBMlhBQI8ja7TSAR1PGNo4zroAUl4B0RVUMjITuaYPZQ45OJYZfNWksV99Gvm8",
              "https://lh3.googleusercontent.com/aida-public/AB6AXuBg1ee9lvGmsGeX6jatVr97cEhjMtWdtaNjqsuBu0x1jTM36nvranpvA6rIxBoE58zJcdh3vUG4WgkZW8ugAJvqNs2qynqCy5qxyJAdGWtv1Ht7CEInKFDyfUvVhuV5CJ01EG2ilAKqYwfCPcyQD2ZUNr1YXt-2LII84OaJwnSyFryybZ3UZa8vJkeD-Aq4Dsq5Spat3NWIEb-WOp22BB9nGdeSHERJk6bZG4igw0U4J095Abknag0pUrM_wcKrtCuqcocdvxghABk",
              "https://lh3.googleusercontent.com/aida-public/AB6AXuAkkjTs09AZ_8L6lw0Ig5v_sHBZ4mcNWOJUfmsCLZTu8B_PPHA9Bsy0cZSY-eS9TpryKh1Z8hIQw37ouUlL7dWizFEUEP-WFN7I_zpif3MYE1j2GOyQ6dYG4tIzZACfjM9wUhd-P9wamlWFa33IRSVW0tHK9RVLaiu6D2_ljGW51hKRpvaQap4oQsibq1T98B6XHd5zN3n3bAzhZDDi47EFF9LXLQHoFRU2YE54tAgN24a9V4Z2AUSzU0f2G9Qy8rRkSadfP0B23iU"
            ].map((src, idx) => (
              <img key={`logo-2-${idx}`} src={src} alt="Client Logo" className="h-10 md:h-14 w-auto grayscale opacity-70 hover:opacity-100 hover:grayscale-0 contrast-150 brightness-110 mix-blend-screen transition-all duration-300" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
