'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/routing';

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const toggleLocale = () => {
    const nextLocale = locale === 'vi' ? 'en' : 'vi';
    router.replace(pathname, { locale: nextLocale });
  };

  return (
    <button 
      onClick={toggleLocale}
      className="flex items-center gap-2 bg-[var(--color-surface-container-highest)] border border-white/10 hover:bg-[var(--color-surface-container)] transition-all h-9 px-3 rounded-full cursor-pointer hover:scale-105 active:scale-95 shadow-sm"
      aria-label="Toggle language"
    >
      <span className="text-base select-none">
        {locale === 'vi' ? '🇻🇳' : '🇬🇧'}
      </span>
      <span className="text-[10px] tracking-widest font-black uppercase text-[var(--color-surface-white)] mt-px">
        {locale === 'vi' ? 'VN' : 'EN'}
      </span>
    </button>
  );
}
