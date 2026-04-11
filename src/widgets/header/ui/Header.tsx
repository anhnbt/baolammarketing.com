'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { useTheme } from 'next-themes';
import { LanguageSwitcher } from '@/features/language-switcher/ui/LanguageSwitcher';
import { ThemeToggle } from '@/shared/ui/ThemeToggle';

export function Header() {
  const t = useTranslations('Header');
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Use dark logo (black text) for light mode, white logo for dark mode
  const logoSrc = mounted && resolvedTheme === 'light' ? '/logo-dark.png' : '/logo.png';

  return (
    <header className="fixed top-0 w-full z-50 bg-[var(--color-surface-container-low)]/80 backdrop-blur-xl flex justify-between items-center px-6 py-2 shadow-sm border-b border-[var(--border-subtle)]">
      <div className="flex items-center gap-3">
        <Image
          src={logoSrc}
          alt="Bao Lam Marketing"
          width={240}
          height={64}
          className="h-10 md:h-14 w-auto object-contain drop-shadow-md"
          priority
        />
      </div>

      <div className="flex items-center gap-4 md:gap-6">
        <nav className="hidden md:flex gap-8">
          <a className="text-[var(--color-crimson)] font-black text-xs underline decoration-2 underline-offset-4 tracking-widest uppercase hover:opacity-80 transition-opacity" href="#contact">{t('lead_gen')}</a>
          <a className="text-[var(--color-cool-gray)] hover:text-[var(--color-crimson)] transition-colors font-medium text-xs tracking-widest uppercase" href="#portfolio">{t('campaigns')}</a>
          <a className="text-[var(--color-cool-gray)] hover:text-[var(--color-crimson)] transition-colors font-medium text-xs tracking-widest uppercase" href="#services">{t('network')}</a>
        </nav>

        <ThemeToggle />
        <LanguageSwitcher />
      </div>
    </header>
  );
}
