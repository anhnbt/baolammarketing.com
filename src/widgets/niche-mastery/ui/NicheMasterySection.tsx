import React from 'react';
import { useTranslations } from 'next-intl';

export function NicheMasterySection() {
  const t = useTranslations('NicheMastery');

  return (
    <section id="niche" className="mb-16 md:mb-32 max-w-7xl mx-auto px-8 w-full mt-12 md:mt-24 scroll-mt-20">
      <div className="mb-8 md:mb-12">
        <h3 className="text-4xl font-black tracking-tighter text-[var(--color-surface-white)] uppercase mb-4">{t('title')}</h3>
        <p className="text-[var(--color-cool-gray)] max-w-3xl border-l-[4px] border-[var(--color-crimson)] pl-6 py-2">
          {t('description')}
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Card 1 */}
        <div className="group bg-[var(--color-surface-container-lowest)] p-8 rounded-lg relative overflow-hidden transition-all duration-500 hover:shadow-lg border border-[var(--border-subtle)]">
          <div className="absolute top-0 left-0 w-1 h-0 bg-[var(--color-crimson)] group-hover:h-full transition-all duration-500"></div>
          <div className="text-[var(--color-crimson)] mb-6 block text-4xl font-bold">⛩️</div>
          <h4 className="text-xl font-bold text-[var(--color-surface-white)] mb-3 uppercase tracking-tight">{t('cards.temple.title')}</h4>
          <p className="text-[var(--color-crimson)] font-black text-sm mb-4">{t('cards.temple.highlight')}</p>
          <p className="text-[var(--color-cool-gray)] text-sm leading-relaxed">
            {t('cards.temple.desc')}
          </p>
        </div>
        
        {/* Card 2 */}
        <div className="group bg-[var(--color-surface-container-lowest)] p-8 rounded-lg relative overflow-hidden transition-all duration-500 hover:shadow-lg border border-[var(--border-subtle)]">
          <div className="absolute top-0 left-0 w-1 h-0 bg-[var(--color-crimson)] group-hover:h-full transition-all duration-500"></div>
          <div className="text-[var(--color-crimson)] mb-6 block text-4xl font-bold">🚚</div>
          <h4 className="text-xl font-bold text-[var(--color-surface-white)] mb-3 uppercase tracking-tight">{t('cards.rural.title')}</h4>
          <p className="text-[var(--color-crimson)] font-black text-sm mb-4">{t('cards.rural.highlight')}</p>
          <p className="text-[var(--color-cool-gray)] text-sm leading-relaxed">
            {t('cards.rural.desc')}
          </p>
        </div>
        
        {/* Card 3 */}
        <div className="group bg-[var(--color-surface-container-lowest)] p-8 rounded-lg relative overflow-hidden transition-all duration-500 hover:shadow-lg border border-[var(--border-subtle)]">
          <div className="absolute top-0 left-0 w-1 h-0 bg-[var(--color-crimson)] group-hover:h-full transition-all duration-500"></div>
          <div className="text-[var(--color-crimson)] mb-6 block text-4xl font-bold">🎓</div>
          <h4 className="text-xl font-bold text-[var(--color-surface-white)] mb-3 uppercase tracking-tight">{t('cards.industrial.title')}</h4>
          <p className="text-[var(--color-crimson)] font-black text-sm mb-4">{t('cards.industrial.highlight')}</p>
          <p className="text-[var(--color-cool-gray)] text-sm leading-relaxed">
            {t('cards.industrial.desc')}
          </p>
        </div>
      </div>
    </section>
  );
}
