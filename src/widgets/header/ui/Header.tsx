import React from 'react';
import { useTranslations } from 'next-intl';
import { LanguageSwitcher } from '@/features/language-switcher/ui/LanguageSwitcher';

export function Header() {
  const t = useTranslations('Header');

  return (
    <header className="fixed top-0 w-full z-50 bg-[var(--color-surface-container-low)] flex justify-between items-center px-6 py-4 shadow-sm">
      <div className="flex items-center gap-3">
        {/* Placeholder Icon */}
        <div className="w-6 h-6 bg-[var(--color-crimson)] rounded-sm flex items-center justify-center">
          <div className="w-3 h-[2px] bg-white"></div>
        </div>
        <span className="text-xl font-black tracking-tighter text-[var(--color-crimson)] uppercase">{t('logo')}</span>
      </div>

      <div className="flex items-center gap-6">
        <nav className="hidden md:flex gap-8">
          <a className="text-[var(--color-crimson)] font-bold text-xs tracking-widest uppercase hover:text-[var(--color-iron-blue)] transition-colors" href="#lead-conversion">{t('lead_gen')}</a>
          <a className="text-[var(--color-cool-gray)] hover:text-[var(--color-crimson)] transition-colors font-bold text-xs tracking-widest uppercase" href="#portfolio">{t('campaigns')}</a>
          <a className="text-[var(--color-cool-gray)] hover:text-[var(--color-crimson)] transition-colors font-bold text-xs tracking-widest uppercase" href="#services">{t('network')}</a>
        </nav>
        
        <LanguageSwitcher />
      </div>
    </header>
  );
}
