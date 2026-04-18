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
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    setMounted(true);

    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -60% 0px',
      threshold: 0
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    ['portfolio', 'services', 'contact'].forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Use dark logo (black text) for light mode, white logo for dark mode
  const logoSrc = mounted && resolvedTheme === 'light' ? '/logo.png' : '/logo-dark.png';

  const navLinks = [
    { href: '#contact', label: t('lead_gen'), id: 'contact' },
    { href: '#portfolio', label: t('campaigns'), id: 'portfolio' },
    { href: '#services', label: t('network'), id: 'services' },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-[var(--color-surface-container-lowest)]/90 backdrop-blur-xl flex justify-between items-center px-6 py-2 shadow-sm border-b border-[var(--border-subtle)]">
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
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-xs tracking-widest uppercase transition-all duration-300 ${
                activeSection === link.id
                  ? 'text-[var(--color-crimson)] font-black underline decoration-2 underline-offset-8'
                  : 'text-[var(--color-cool-gray)] hover:text-[var(--color-crimson)] font-medium'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <ThemeToggle />
        <LanguageSwitcher />
      </div>
    </header>
  );
}
