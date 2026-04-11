'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/routing';
import { Globe } from 'lucide-react';
import { Button } from '@/shared/ui/button';

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const toggleLocale = () => {
    const nextLocale = locale === 'vi' ? 'en' : 'vi';
    router.replace(pathname, { locale: nextLocale });
  };

  return (
    <Button 
      variant="outline" 
      size="sm" 
      onClick={toggleLocale}
      className="flex items-center gap-2 bg-[var(--color-surface-container-highest)] border-white/10 hover:bg-[var(--color-crimson)] hover:text-white hover:border-[var(--color-crimson)] transition-all h-10 px-3 rounded-sm"
    >
      <Globe className="w-4 h-4" />
      <span className="text-[10px] tracking-widest font-black uppercase mt-0.5">
        {locale === 'vi' ? 'EN' : 'VN'}
      </span>
    </Button>
  );
}
