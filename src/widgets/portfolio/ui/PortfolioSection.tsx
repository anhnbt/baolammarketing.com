import React from 'react';
import { useTranslations } from 'next-intl';

export function PortfolioSection() {
  const t = useTranslations('Portfolio');

  const projects = [
    {
      client: t('projects.lays.client'),
      title: t('projects.lays.title'),
      scale: t('projects.lays.scale'),
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD_11ruIUbPLnRmy6575Wwo5igu3WTOLEl0y1USlasM61XRTXyXF5nhhZXTI1Gg3nUxxuYQsufFoW27HV-UYr2Zhowf-7QuMys6NziLPg3jutsd8CIIzRlL0cn1uGAkfj-az95-R7NaX7burn2wJv70RTEgggkAt1yo1dCyAqsec5vsFFqdoc5qkCm1osZYo1zaxHx9IuGPGu_iLcsV5iEsdvBbykfaYbIxPEQ4LxohGyg5imCDmQWhpVfwpH130YbLy3nlPXNnciU',
      height: 'h-64'
    },
    {
      client: t('projects.panasonic.client'),
      title: t('projects.panasonic.title'),
      scale: t('projects.panasonic.scale'),
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80',
      height: 'h-96'
    },
    {
      client: t('projects.vinhtuong.client'),
      title: t('projects.vinhtuong.title'),
      scale: t('projects.vinhtuong.scale'),
      image: 'https://images.unsplash.com/photo-1572044162444-ad60f128bdea?auto=format&fit=crop&q=80',
      height: 'h-80'
    },
    {
      client: t('projects.vim.client'),
      title: t('projects.vim.title'),
      scale: t('projects.vim.scale'),
      image: 'https://images.unsplash.com/photo-1584697964190-7f858bed298c?auto=format&fit=crop&q=80',
      height: 'h-64'
    }
  ];

  return (
    <section id="portfolio" className="max-w-7xl mx-auto px-8 py-24">
      <div className="mb-16">
        <span className="text-[10px] tracking-[0.2em] font-bold text-[var(--color-crimson)] uppercase block mb-4">{t('subtitle')}</span>
        <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase leading-none max-w-2xl">
          {t('title')} <span className="text-[var(--color-crimson)]">{t('title_highlight')}</span>
        </h2>
      </div>

      <div className="columns-1 md:columns-2 gap-6 space-y-6">
        {projects.map((project, idx) => (
          <div key={idx} className={`relative overflow-hidden group rounded-sm ${project.height} break-inside-avoid bg-[var(--color-surface-container-low)]`}>
            {/* Image Placeholder with real API fetch simulated via URL */}
            <div className="absolute inset-0 bg-[var(--color-surface-container)]">
               <img src={project.image} alt={project.title} className="w-full h-full object-cover opacity-50 group-hover:opacity-70 transition-opacity duration-500 mix-blend-luminosity" />
            </div>
            
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-surface-container-lowest)] via-transparent to-transparent opacity-90"></div>
            
            <div className="absolute bottom-0 left-0 p-8 w-full flex flex-col items-start gap-4 transform translate-y-4 group-hover:translate-y-0 transition-transform">
              <div className="flex items-center justify-between w-full">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#df2a30] bg-[#131b2e] px-3 py-1 border border-[#df2a30]/30 backdrop-blur-sm">
                  {project.client}
                </span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#a7b6cc]">
                  {project.scale}
                </span>
              </div>
              <h3 className="text-xl md:text-2xl font-black uppercase tracking-tighter text-[#fffbff] leading-tight">
                {project.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
