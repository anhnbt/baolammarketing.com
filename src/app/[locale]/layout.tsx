import type { Metadata } from 'next';
import { Merriweather, Open_Sans } from 'next/font/google';
import '../globals.css';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { ThemeProvider } from '@/shared/providers/ThemeProvider';

import { Header } from '@/widgets/header/ui/Header';
import { Footer } from '@/widgets/footer/ui/Footer';

const merriweather = Merriweather({
  weight: ['300', '400', '700', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin', 'vietnamese'],
  variable: '--font-merriweather',
  display: 'swap',
});

const openSans = Open_Sans({
  subsets: ['latin', 'vietnamese'],
  variable: '--font-opensans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Bảo Lâm Marketing & Distribution',
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
    title: 'Bảo Lâm Marketing & Distribution',
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
    <html lang={locale} className={`${merriweather.variable} ${openSans.variable} antialiased h-full`} suppressHydrationWarning>
      <body className="min-h-full flex flex-col bg-[var(--color-surface)] text-[var(--color-surface-white)] overflow-x-hidden font-sans">
        <ThemeProvider>
          <NextIntlClientProvider messages={messages}>
            <Header />
            <main className="flex-1 flex flex-col">
              {children}
            </main>
            <Footer />
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
