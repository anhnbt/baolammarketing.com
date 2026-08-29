'use client';

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Target, Lightbulb, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function PortfolioSection() {
  const t = useTranslations('Portfolio');
  const [activeFilter, setActiveFilter] = useState<'all' | 'fmcg' | 'tech' | 'csr'>('all');

  const projects = [
    {
      id: 'nescafe',
      client: t('projects.nescafe.client'),
      title: t('projects.nescafe.title'),
      category: t('projects.nescafe.category'),
      categoryKey: 'fmcg',
      scale: t('projects.nescafe.scale'),
      challenge: t('projects.nescafe.challenge'),
      solution: t('projects.nescafe.solution'),
      result: t('projects.nescafe.result'),
      image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=1200&q=80',
    },
    {
      id: 'olong',
      client: t('projects.olong.client'),
      title: t('projects.olong.title'),
      category: t('projects.olong.category'),
      categoryKey: 'fmcg',
      scale: t('projects.olong.scale'),
      challenge: t('projects.olong.challenge'),
      solution: t('projects.olong.solution'),
      result: t('projects.olong.result'),
      image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=1200&q=80',
    },
    {
      id: 'a2',
      client: t('projects.a2.client'),
      title: t('projects.a2.title'),
      category: t('projects.a2.category'),
      categoryKey: 'fmcg',
      scale: t('projects.a2.scale'),
      challenge: t('projects.a2.challenge'),
      solution: t('projects.a2.solution'),
      result: t('projects.a2.result'),
      image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80',
    },
    {
      id: 'lays',
      client: t('projects.lays.client'),
      title: t('projects.lays.title'),
      category: t('projects.lays.category'),
      categoryKey: 'fmcg',
      scale: t('projects.lays.scale'),
      challenge: t('projects.lays.challenge'),
      solution: t('projects.lays.solution'),
      result: t('projects.lays.result'),
      image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=1200&q=80',
    },
    {
      id: 'panasonic',
      client: t('projects.panasonic.client'),
      title: t('projects.panasonic.title'),
      category: t('projects.panasonic.category'),
      categoryKey: 'tech',
      scale: t('projects.panasonic.scale'),
      challenge: t('projects.panasonic.challenge'),
      solution: t('projects.panasonic.solution'),
      result: t('projects.panasonic.result'),
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80',
    },
    {
      id: 'vinhtuong',
      client: t('projects.vinhtuong.client'),
      title: t('projects.vinhtuong.title'),
      category: t('projects.vinhtuong.category'),
      categoryKey: 'tech',
      scale: t('projects.vinhtuong.scale'),
      challenge: t('projects.vinhtuong.challenge'),
      solution: t('projects.vinhtuong.solution'),
      result: t('projects.vinhtuong.result'),
      image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=80',
    },
    {
      id: 'clear',
      client: t('projects.clear.client'),
      title: t('projects.clear.title'),
      category: t('projects.clear.category'),
      categoryKey: 'csr',
      scale: t('projects.clear.scale'),
      challenge: t('projects.clear.challenge'),
      solution: t('projects.clear.solution'),
      result: t('projects.clear.result'),
      image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=1200&q=80',
    },
    {
      id: 'pepsi_tet',
      client: t('projects.pepsi_tet.client'),
      title: t('projects.pepsi_tet.title'),
      category: t('projects.pepsi_tet.category'),
      categoryKey: 'csr',
      scale: t('projects.pepsi_tet.scale'),
      challenge: t('projects.pepsi_tet.challenge'),
      solution: t('projects.pepsi_tet.solution'),
      result: t('projects.pepsi_tet.result'),
      image: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=1200&q=80',
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.categoryKey === activeFilter);

  const filterTabs = [
    { key: 'all', label: t('filter_all') },
    { key: 'fmcg', label: t('filter_fmcg') },
    { key: 'tech', label: t('filter_tech') },
    { key: 'csr', label: t('filter_csr') },
  ];

  return (
    <section id="portfolio" className="max-w-7xl mx-auto px-6 sm:px-8 py-20 md:py-32 scroll-mt-20">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="h-[2px] w-8 bg-[var(--color-crimson)]"></span>
            <span className="text-[10px] tracking-[0.25em] font-black text-[var(--color-crimson)] uppercase">
              {t('subtitle')}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-black tracking-tighter uppercase leading-none max-w-2xl text-[var(--color-surface-white)]">
            {t('title')} <span className="text-[var(--color-crimson)]">{t('title_highlight')}</span>
          </h2>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2">
          {filterTabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveFilter(tab.key as any)}
              className={`px-5 py-2.5 rounded-lg text-xs font-black uppercase tracking-wider transition-all duration-200 border ${
                activeFilter === tab.key
                  ? 'bg-[var(--color-crimson)] text-white border-[var(--color-crimson)] shadow-sm'
                  : 'bg-[var(--color-surface-container-lowest)] text-[var(--color-cool-gray)] border-[var(--border-subtle)] hover:text-[var(--color-surface-white)] hover:border-[var(--color-crimson)]/40'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Case Studies Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div 
              key={project.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="bg-[var(--color-surface-container-lowest)] rounded-xl border border-[var(--border-subtle)] hover:border-[var(--color-crimson)]/50 transition-all duration-300 shadow-executive overflow-hidden flex flex-col group"
            >
              {/* Card Image Banner */}
              <div className="relative h-64 sm:h-72 overflow-hidden bg-[var(--color-surface-container)]">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover opacity-85 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent"></div>
                
                {/* Badges on Image */}
                <div className="absolute top-5 left-5 right-5 flex items-center justify-between z-10">
                  <span className="text-[10px] font-black uppercase tracking-wider text-white bg-black/60 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/15">
                    {project.category}
                  </span>
                  <span className="text-[11px] font-black uppercase tracking-widest text-[var(--color-crimson)] bg-white/95 px-3 py-1 rounded-md shadow-sm">
                    {project.client}
                  </span>
                </div>

                {/* Bottom Overlay on Image */}
                <div className="absolute bottom-5 left-5 right-5 z-10">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-white/80 block mb-1">
                    📍 {project.scale}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-white leading-tight">
                    {project.title}
                  </h3>
                </div>
              </div>

              {/* Challenge -> Solution -> Result Breakdown */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  {/* Challenge */}
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[var(--color-cool-gray)]">
                      <Target className="w-3.5 h-3.5 text-[var(--color-crimson)]" />
                      <span>{t('challenge_label')}</span>
                    </div>
                    <p className="text-xs sm:text-sm text-[var(--color-cool-gray)] leading-relaxed pl-5.5 border-l border-[var(--border-subtle)]">
                      {project.challenge}
                    </p>
                  </div>

                  {/* Solution */}
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[var(--color-surface-white)]">
                      <Lightbulb className="w-3.5 h-3.5 text-amber-500" />
                      <span>{t('solution_label')}</span>
                    </div>
                    <p className="text-xs sm:text-sm text-[var(--color-cool-gray)] leading-relaxed pl-5.5 border-l border-[var(--border-subtle)]">
                      {project.solution}
                    </p>
                  </div>
                </div>

                {/* Highlighted Result / KPI Box */}
                <div className="bg-[var(--color-surface-container)] p-4 sm:p-5 rounded-lg border-l-4 border-[var(--color-crimson)] border border-[var(--border-subtle)]">
                  <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[var(--color-crimson)] mb-1">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>{t('result_label')}</span>
                  </div>
                  <p className="text-xs sm:text-sm font-bold text-[var(--color-surface-white)] leading-relaxed">
                    {project.result}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}


