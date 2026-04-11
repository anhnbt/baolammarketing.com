import React from 'react';
import { Home, BarChart2, MessageSquare, Phone, MapPin, Mail, Zap } from 'lucide-react';
import { useTranslations } from 'next-intl';

export function Footer() {
  const t = useTranslations('Footer');

  return (
    <>
      {/* Bottom Mobile Navigation (Mobile Only) */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full z-50 flex justify-around items-center h-16 bg-[#0b1326]/90 backdrop-blur-2xl border-t border-[#df2a30]/15 shadow-[0px_-24px_48px_rgba(0,0,0,0.4)]">
        <a className="flex flex-col items-center justify-center bg-[#df2a30] text-white px-6 py-2 rounded-sm active:scale-90 transition-transform h-full w-full" href="#services">
          <Zap className="w-5 h-5" />
          <span className="font-['Inter'] text-[10px] font-black tracking-widest uppercase mt-1">EXECUTION</span>
        </a>
        <a className="flex flex-col items-center justify-center text-[#b9c8de] px-6 py-2 hover:bg-[#131b2e] transition-all active:scale-90 h-full w-full" href="#niche">
          <BarChart2 className="w-5 h-5" />
          <span className="font-['Inter'] text-[10px] font-black tracking-widest uppercase mt-1">MASTERY</span>
        </a>
        <a className="flex flex-col items-center justify-center text-[#b9c8de] px-6 py-2 hover:bg-[#131b2e] transition-all active:scale-90 h-full w-full" href="#portfolio">
          <Home className="w-5 h-5" />
          <span className="font-['Inter'] text-[10px] font-black tracking-widest uppercase mt-1">PORTFOLIO</span>
        </a>
        <a className="flex flex-col items-center justify-center text-[#b9c8de] px-6 py-2 hover:bg-[#131b2e] transition-all active:scale-90 h-full w-full" href="#contact">
          <MessageSquare className="w-5 h-5" />
          <span className="font-['Inter'] text-[10px] font-black tracking-widest uppercase mt-1">METRICS</span>
        </a>
      </nav>

      {/* FAB: Hotline */}
      <a href="tel:0911636666" className="fixed bottom-24 right-6 md:bottom-12 md:right-12 w-14 h-14 bg-[var(--color-iron-blue)]/90 backdrop-blur-[24px] rounded-full shadow-2xl flex items-center justify-center text-white group active:scale-90 transition-all z-100 border border-white/20">
        <div className="absolute inset-0 rounded-full bg-[var(--color-iron-blue)] animate-ping opacity-30"></div>
        <Phone className="w-6 h-6 group-hover:scale-110 transition-transform" />
      </a>

      {/* Static Footer Block */}
      <footer className="w-full bg-[var(--color-surface-container-lowest)] border-t border-white/5 pt-16 pb-32 md:pb-16 mt-auto">
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
              <h3 className="text-sm font-black text-[var(--color-surface-white)] uppercase tracking-widest mb-6">Liên hệ</h3>
              <ul className="space-y-4">
                <li className="flex gap-3 text-[var(--color-cool-gray)] text-sm items-start">
                  <MapPin className="w-4 h-4 text-[var(--color-crimson)] shrink-0 mt-0.5" />
                  <span className="leading-relaxed">Tầng 3, Tòa nhà Văn Phòng, Q. Cầu Giấy, Hà Nội</span>
                </li>
                <li className="flex gap-3 text-[var(--color-cool-gray)] text-sm items-center">
                  <Phone className="w-4 h-4 text-[var(--color-crimson)] shrink-0" />
                  <span>090 123 4567</span>
                </li>
                <li className="flex gap-3 text-[var(--color-cool-gray)] text-sm items-center">
                  <Mail className="w-4 h-4 text-[var(--color-crimson)] shrink-0" />
                  <span>contact@baolammarketing.com</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[var(--color-cool-gray)]/60 text-xs">
              &copy; {new Date().getFullYear()} BAO LAM MARKETING & DISTRIBUTION. All rights reserved.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-[var(--color-cool-gray)]/60 hover:text-white text-xs transition-colors">Chính sách bảo mật</a>
              <a href="#" className="text-[var(--color-cool-gray)]/60 hover:text-white text-xs transition-colors">Điều khoản thanh toán</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
