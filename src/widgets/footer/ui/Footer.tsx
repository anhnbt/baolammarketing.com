"use client"
import React, { useEffect, useState } from 'react';
import { Home, BarChart2, MessageSquare, Phone, MapPin, Mail, Zap } from 'lucide-react';
import { useTranslations } from 'next-intl';

export function Footer() {
  const t = useTranslations('Footer');
  const [activeHash, setActiveHash] = useState('');

  useEffect(() => {
    const handleHashChange = () => {
      setActiveHash(window.location.hash || '#');
    };

    // Initial set
    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navItems = [
    { id: '#services', label: 'EXECUTION', icon: Zap },
    { id: '#niche', label: 'MASTERY', icon: BarChart2 },
    { id: '#portfolio', label: 'PORTFOLIO', icon: Home },
    { id: '#contact', label: 'METRICS', icon: MessageSquare },
  ];

  return (
    <>
      {/* Bottom Mobile Navigation (Mobile Only) */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full z-50 flex justify-around items-center h-16 bg-[var(--color-surface-container-lowest)]/95 backdrop-blur-2xl border-t border-[var(--color-crimson)]/20 shadow-[0px_-10px_30px_rgba(0,0,0,0.1)]">
        {navItems.map((item) => {
          const isActive = activeHash === item.id;
          return (
            <a
              key={item.id}
              href={item.id}
              className={`flex flex-col items-center justify-center h-full w-full transition-all active:scale-95 ${isActive
                ? 'bg-[var(--color-crimson)] text-white'
                : 'text-[var(--color-cool-gray)] hover:bg-[var(--color-surface-container-low)]'
                }`}
            >
              <item.icon className={`w-5 h-5 ${isActive ? 'animate-pulse' : ''}`} />
              <span className="font-['Inter'] text-[9px] font-black tracking-widest uppercase mt-1 px-1 text-center">{item.label}</span>
            </a>
          );
        })}
      </nav>

      {/* FAB: Hotline */}
      <a href="tel:0911636666" className="fixed bottom-24 right-6 md:bottom-12 md:right-12 w-14 h-14 bg-[var(--color-crimson)]/90 backdrop-blur-[24px] rounded-full shadow-2xl flex items-center justify-center text-white group active:scale-90 transition-all z-40 border border-white/20">
        <div className="absolute inset-0 rounded-full bg-[var(--color-crimson)] animate-ping opacity-30"></div>
        <Phone className="w-6 h-6 group-hover:scale-110 transition-transform" />
      </a>

      {/* Static Footer Block */}
      <footer className="w-full bg-[var(--color-surface-container-lowest)] border-t border-[var(--border-subtle)] pt-16 pb-32 md:pb-16 mt-auto">
        <div className="max-w-7xl mx-auto px-8 w-full">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

            {/* Brand Information */}
            <div className="col-span-1 md:col-span-2">
              <h2 className="text-xl font-black text-[var(--color-surface-white)] uppercase tracking-widest mb-6 border-l-4 border-[var(--color-crimson)] pl-4">
                Bảo Lâm Marketing
              </h2>
              <p className="text-[var(--color-cool-gray)] text-sm mb-6 leading-relaxed max-w-sm">
                Đơn vị tư vấn và thực thi các chiến dịch Activation, Event và Sampling toàn quốc. Với mạng lưới 3000+ nhân sự và năng lực hậu cần vượt trội.
              </p>
            </div>

            {/* Quick Links */}
            <div className="col-span-1">
              <h3 className="text-sm font-black text-[var(--color-surface-white)] uppercase tracking-widest mb-6">Liên kết</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-[var(--color-cool-gray)] hover:text-[var(--color-crimson)] text-sm transition-colors">Về chúng tôi</a></li>
                <li><a href="#" className="text-[var(--color-cool-gray)] hover:text-[var(--color-crimson)] text-sm transition-colors">Dự án tiêu biểu</a></li>
                <li><a href="#" className="text-[var(--color-cool-gray)] hover:text-[var(--color-crimson)] text-sm transition-colors">Hệ thống thực thi</a></li>
                <li><a href="#" className="text-[var(--color-cool-gray)] hover:text-[var(--color-crimson)] text-sm transition-colors">Tuyển dụng</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div className="col-span-1">
              <h3 className="text-sm font-black text-[var(--color-surface-white)] uppercase tracking-widest mb-6 border-b border-[var(--border-subtle)] pb-3">Liên hệ</h3>
              <ul className="space-y-6">
                <li className="flex gap-3 text-[var(--color-cool-gray)] text-sm items-start">
                  <MapPin className="w-4 h-4 text-[var(--color-crimson)] shrink-0 mt-1" />
                  <span className="leading-relaxed">Ô 22 Lô 4, Đền Lừ 2, Phường Hoàng Văn Thụ, Quận Hoàng Mai, TP. Hà Nội.</span>
                </li>
                <li className="flex gap-3 text-[var(--color-cool-gray)] text-sm items-start">
                  <Phone className="w-4 h-4 text-[var(--color-crimson)] shrink-0 mt-1" />
                  <div className="flex flex-col gap-1.5">
                    <span className="text-[10px] text-[var(--color-cool-gray)]/60 uppercase font-black tracking-widest">Hotline Văn Phòng</span>
                    <span>0436 341 636 - 0462 954 954</span>
                    <span className="text-[10px] text-[var(--color-cool-gray)]/60 uppercase font-black tracking-widest mt-2">Hợp Tác Chiến Lược</span>
                    <span className="text-[var(--color-surface-white)] font-bold">0911 63 6666 <span className="font-normal italic text-[var(--color-cool-gray)]">(Mr. Thọ Tạ)</span></span>
                  </div>
                </li>
                <li className="flex gap-3 text-[var(--color-cool-gray)] text-sm items-center">
                  <Mail className="w-4 h-4 text-[var(--color-crimson)] shrink-0" />
                  <span>tho.tv@baolammarketing.com</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-[var(--border-subtle)] flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[var(--color-cool-gray)] text-xs">
              &copy; {new Date().getFullYear()} BAO LAM MARKETING & DISTRIBUTION. All rights reserved.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-[var(--color-cool-gray)] hover:text-[var(--color-surface-white)] text-xs transition-colors">Chính sách bảo mật</a>
              <a href="#" className="text-[var(--color-cool-gray)] hover:text-[var(--color-surface-white)] text-xs transition-colors">Điều khoản thanh toán</a>
            </div>
          </div>
          <div className="mt-8 text-center bg-black/20 border border-[var(--color-crimson)]/20 rounded-sm py-3 px-4">
            <p className="text-[var(--color-surface-white)]/60 text-[11px] italic tracking-widest uppercase">{t('testing_status')}</p>
          </div>
        </div>
      </footer>
    </>
  );
}
