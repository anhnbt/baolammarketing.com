import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { LanguageSwitcher } from '@/features/language-switcher/ui/LanguageSwitcher';

export function Header() {
  const t = useTranslations('Header');

  return (
    <header className="fixed top-0 w-full z-50 bg-[var(--color-surface-container-low)]/80 backdrop-blur-xl flex justify-between items-center px-6 py-4 shadow-sm">
      <div className="flex items-center gap-3">
        <Image src="/logo-dark.png" alt="Bao Lam Marketing" width={240} height={64} className="h-10 md:h-14 w-auto object-contain drop-shadow-md" />
      </div>

      <div className="flex items-center gap-6">
        <nav className="hidden md:flex gap-8">
          <a className="text-[var(--color-crimson)] font-black text-xs underline decoration-2 underline-offset-4 tracking-widest uppercase hover:text-[var(--color-iron-blue)] transition-colors" href="#contact">{t('lead_gen')}</a>
          <a className="text-[var(--color-cool-gray)] hover:text-[var(--color-crimson)] transition-colors font-medium text-xs tracking-widest uppercase" href="#portfolio">{t('campaigns')}</a>
          <a className="text-[var(--color-cool-gray)] hover:text-[var(--color-crimson)] transition-colors font-medium text-xs tracking-widest uppercase" href="#services">{t('network')}</a>
        </nav>

        <LanguageSwitcher />
      </div>
    </header>
  );
}
