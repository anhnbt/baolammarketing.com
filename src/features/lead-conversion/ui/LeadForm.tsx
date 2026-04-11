'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { leadFormSchema, LeadFormValues } from '../model/schema';
import { Button } from '@/shared/ui/button';
import { Input } from '@/shared/ui/input';
import { cn } from '@/shared/lib/utils';
import { Loader2 } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { Turnstile } from '@marsidev/react-turnstile';

export function LeadForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const t = useTranslations('LeadConversion.form');

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<LeadFormValues>({
    resolver: zodResolver(leadFormSchema),
    defaultValues: {
      industry: 'FMCG',
    },
  });

  const selectedIndustry = watch('industry');

  const onSubmit = async (data: LeadFormValues) => {
    setIsSubmitting(true);
    setServerError(null);
    
    try {
      const response = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        setServerError(result.error || 'Something went wrong. Please try again.');
      } else {
        setIsSuccess(true);
      }
    } catch (err) {
      setServerError('Network error. Please make sure you are connected.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="bg-[var(--color-surface-container)] p-8 rounded-sm text-center border border-green-500/20">
        <h3 className="text-xl font-black text-green-400 uppercase tracking-tighter mb-2">{t('success_title')}</h3>
        <p className="text-[var(--color-cool-gray)] text-sm">{t('success_desc')}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">
      {/* Field: Industry */}
      <div className="space-y-4">
        <label className="block text-[10px] font-bold uppercase tracking-widest text-[var(--color-cool-gray)]">
          {t('industry_label')}
        </label>
        <div className="flex flex-wrap gap-2">
          {['FMCG', 'Electronics', 'Building Materials', 'Other'].map((ind) => {
            const industryMap: Record<string, string> = {
              'FMCG': t('industry_fmcg'),
              'Electronics': t('industry_electronics'),
              'Building Materials': t('industry_building'),
              'Other': t('industry_other')
            };

            return (
              <button
                key={ind}
                type="button"
                onClick={() => setValue('industry', ind as "FMCG" | "Electronics" | "Building Materials" | "Other", { shouldValidate: true })}
                className={cn(
                  "px-6 py-3 text-xs font-black uppercase tracking-widest rounded-sm transition-all border",
                  selectedIndustry === ind
                    ? "bg-[var(--color-crimson)] border-[var(--color-crimson)] text-white"
                    : "bg-[var(--color-surface-container)] text-[var(--color-cool-gray)] border-white/20 hover:bg-[var(--color-surface-bright)]"
                )}
              >
                {industryMap[ind]}
              </button>
            );
          })}
        </div>
        {errors.industry && (
           <p className="text-red-400 text-xs mt-1">{t(`errors.industry`)}</p>
        )}
      </div>

      {/* Field: Fullname */}
      <div className="space-y-4">
        <label className="block text-[10px] font-bold uppercase tracking-widest text-[var(--color-cool-gray)]">
          {t('fullname_label')}
        </label>
        <Input
          {...register('fullName')}
          placeholder={t('fullname_placeholder')}
          className="w-full bg-[var(--color-surface-container-low)] border-none focus-visible:ring-2 focus-visible:ring-[var(--color-crimson)] p-4 h-14 text-sm font-bold tracking-widest uppercase placeholder:text-[var(--color-cool-gray)]/50 rounded-sm"
        />
        {errors.fullName && (
          <p className="text-red-400 text-xs mt-1">{t(`errors.fullname`)}</p>
        )}
      </div>

      {/* Field: Phone */}
      <div className="space-y-4">
        <label className="block text-[10px] font-bold uppercase tracking-widest text-[var(--color-cool-gray)]">
          {t('phone_label')}
        </label>
        <Input
          {...register('phone')}
          placeholder={t('phone_placeholder')}
          className="w-full bg-[var(--color-surface-container-low)] border-none focus-visible:ring-2 focus-visible:ring-[var(--color-crimson)] p-4 h-14 text-sm font-bold tracking-widest uppercase placeholder:text-[var(--color-cool-gray)]/50 rounded-sm"
        />
        {errors.phone && (
          <p className="text-red-400 text-xs mt-1">{t(`errors.phone`)}</p>
        )}
      </div>

      {/* Field: Email */}
      <div className="space-y-4">
        <label className="block text-[10px] font-bold uppercase tracking-widest text-[var(--color-cool-gray)]">
          {t('email_label')}
        </label>
        <Input
          {...register('email')}
          placeholder={t('email_placeholder')}
          type="email"
          className="w-full bg-[var(--color-surface-container-low)] border-none focus-visible:ring-2 focus-visible:ring-[var(--color-crimson)] p-4 h-14 text-sm font-bold tracking-widest uppercase placeholder:text-[var(--color-cool-gray)]/50 rounded-sm"
        />
        {errors.email && (
          <p className="text-red-400 text-xs mt-1">{t(`errors.email`)}</p>
        )}
      </div>

      {serverError && (
         <div className="p-4 bg-red-500/10 border border-red-500/30 text-red-400 text-sm font-bold rounded-sm">
           {serverError}
         </div>
      )}

      {/* Cloudflare Turnstile inside Form */}
      <div>
        <Turnstile
          siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!}
          onSuccess={(token) => setValue('turnstileToken', token, { shouldValidate: true })}
          onError={() => setServerError('Failed to load Turnstile captcha. Please refresh.')}
          options={{ theme: 'dark' }}
        />
        {errors.turnstileToken && (
           <p className="text-red-400 text-xs mt-1">{errors.turnstileToken.message}</p>
        )}
      </div>

      {/* Primary CTA */}
      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full h-14 bg-[var(--color-crimson)] text-white text-base font-black uppercase tracking-[0.2em] rounded-sm hover:brightness-110 active:scale-[0.98] transition-all shadow-glow"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            {t('button_submitting')}
          </>
        ) : (
          t('button_submit')
        )}
      </Button>
    </form>
  );
}
