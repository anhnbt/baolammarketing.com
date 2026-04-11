import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../globals.css';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';

import { Header } from '@/widgets/header/ui/Header';
import { Footer } from '@/widgets/footer/ui/Footer';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin', 'vietnamese'],
});

export const metadata: Metadata = {
  title: 'Bảo Lâm Marketing | Execution Engine',
  description: 'Đơn vị tư vấn & thực thi toàn quốc: Activation, Event, Sampling. Năng lực triển khai tại 63 tỉnh thành với hệ thống 3000+ nhân sự.',
  openGraph: {
    title: 'Bảo Lâm Marketing & Distribution',
    description: 'Hiện thực hóa các chiến lược BTL bằng mạng lưới thực thi khổng lồ. Chúng tôi mang đến doanh số bằng sự chuẩn xác trong từng dự án Event, Activation.',
    url: 'https://baolammarketing.com',
    siteName: 'Bảo Lâm Marketing',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1200&h=630&auto=format&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Quy mô sự kiện và thực thi của Bảo Lâm Marketing',
      },
    ],
    locale: 'vi_VN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bảo Lâm Marketing | The Execution Powerhouse',
    description: 'Năng lực bao phủ 63 tỉnh thành. Chuyên môn hóa Execution, Sampling và chuỗi Activation.',
    images: ['https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1200&h=630&auto=format&fit=crop'],
  },
};

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;

  if (!routing.locales.includes(locale as 'en' | 'vi')) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale} className={`${inter.variable} antialiased h-full`}>
      <body className="min-h-full flex flex-col bg-[var(--color-surface)] text-[var(--color-surface-white)] overflow-x-hidden">
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main className="flex-1 flex flex-col">
            {children}
          </main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
