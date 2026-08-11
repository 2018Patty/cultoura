import React from 'react';
import { PageId } from '../types';
import { Compass, PieChart, Users, Building2, UserCheck, LayoutGrid, HeartHandshake, ShieldCheck, MapPin } from 'lucide-react';
import { LocalConnectLogo } from './LocalConnectLogo';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  savedCount?: number;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate, savedCount = 1 }) => {
  return (
    <header className="sticky top-0 z-40 bg-[#F6F8F4]/95 backdrop-blur-md border-b border-[#E6F2EA] shadow-xs">
      {/* Top Notification / Trust Bar */}
      <div className="bg-[#1F4B38] text-[#F6F8F4] text-xs py-1.5 px-4 text-center font-medium flex items-center justify-center gap-2">
        <ShieldCheck className="w-3.5 h-3.5 text-[#B8D1C1]" />
        <span>โปร่งใส 100% — แสดงสัดส่วนเงินรายได้ส่งตรงถึงชุมชนวิสาหกิจทุกการจอง</span>
        <span className="hidden md:inline-block text-[#93B39A] font-bold">|</span>
        <button 
          onClick={() => onNavigate('transparency')}
          className="hidden md:inline-flex items-center gap-1 underline underline-offset-2 hover:text-white transition-colors cursor-pointer"
        >
          ดูโมเดลการจัดสรรเงิน →
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">

          {/* Logo & Tagline */}
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center gap-2.5 group text-left cursor-pointer transition-transform hover:scale-102"
          >
            <LocalConnectLogo size="lg" showTagline={true} />
          </button>

          {/* Primary Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-[#F6F8F4]/60 p-1.5 rounded-full border border-[#E6F2EA]">
            <button
              onClick={() => onNavigate('home')}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                currentPage === 'home' 
                  ? 'bg-[#1F4B38] text-[#F6F8F4] shadow-xs' 
                  : 'text-[#1F4B38] hover:bg-[#E6F2EA]/60'
              }`}
            >
              หน้าแรก
            </button>

            <button
              onClick={() => onNavigate('explore')}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                currentPage === 'explore' || currentPage === 'detail'
                  ? 'bg-[#1F4B38] text-[#F6F8F4] shadow-xs' 
                  : 'text-[#1F4B38] hover:bg-[#E6F2EA]/60'
              }`}
            >
              <Compass className="w-3.5 h-3.5 text-[#355E3B]" />
              ค้นหากิจกรรม
            </button>

            {/* STAR FEATURE BUTTON */}
            <button
              onClick={() => onNavigate('transparency')}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                currentPage === 'transparency' 
                  ? 'bg-[#355E3B] text-[#F6F8F4] shadow-md ring-2 ring-[#355E3B]/30' 
                  : 'text-[#355E3B] bg-[#93B39A]/15 hover:bg-[#93B39A]/30'
              }`}
            >
              <PieChart className="w-4 h-4 text-[#355E3B] animate-pulse" />
              ความโปร่งใสรายได้
              <span className="bg-[#355E3B] text-white text-[9px] px-1.5 py-0.5 rounded-md font-extrabold uppercase">
                Star Feature
              </span>
            </button>

            <button
              onClick={() => onNavigate('community')}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                currentPage === 'community' 
                  ? 'bg-[#1F4B38] text-[#F6F8F4] shadow-xs' 
                  : 'text-[#1F4B38] hover:bg-[#E6F2EA]/60'
              }`}
            >
              <Users className="w-3.5 h-3.5 text-[#6C8355]" />
              ชุมชนของเรา
            </button>

            <button
              onClick={() => onNavigate('b2b')}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                currentPage === 'b2b' 
                  ? 'bg-[#1F4B38] text-[#F6F8F4] shadow-xs' 
                  : 'text-[#1F4B38] hover:bg-[#E6F2EA]/60'
              }`}
            >
              <Building2 className="w-3.5 h-3.5 text-[#1F4B38]" />
              องค์กร & CSR
            </button>
          </nav>

          {/* Right Portals & User Control */}
          <div className="flex items-center gap-2">
            
            {/* Traveler Dashboard Shortcut */}
            <button
              onClick={() => onNavigate('traveler-dashboard')}
              className={`px-3 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 border transition-all cursor-pointer ${
                currentPage === 'traveler-dashboard'
                  ? 'bg-[#6C8355] text-white border-[#6C8355]'
                  : 'bg-white text-[#1F4B38] border-[#E6F2EA] hover:bg-[#F6F8F4]'
              }`}
              title="การจองของฉัน / Traveler Portal"
            >
              <UserCheck className="w-4 h-4 text-[#6C8355]" />
              <span className="hidden sm:inline">การจองของฉัน</span>
              {savedCount > 0 && (
                <span className="bg-[#355E3B] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                  {savedCount}
                </span>
              )}
            </button>

            {/* Provider / Community Dashboard */}
            <button
              onClick={() => onNavigate('provider-dashboard')}
              className={`px-3 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 border transition-all cursor-pointer ${
                currentPage === 'provider-dashboard'
                  ? 'bg-[#1F4B38] text-white border-[#1F4B38]'
                  : 'bg-[#F6F8F4] text-[#1F4B38] border-[#E6F2EA] hover:bg-[#E6F2EA]'
              }`}
              title="แดชบอร์ดผู้จัดกิจกรรมชุมชน / Community Operator Portal"
            >
              <HeartHandshake className="w-4 h-4 text-[#355E3B]" />
              <span className="hidden md:inline">สำหรับชุมชน</span>
            </button>

            {/* System Map Overview */}
            <button
              onClick={() => onNavigate('overview')}
              className="p-2.5 rounded-xl bg-[#F6F8F4] hover:bg-[#E6F2EA] text-[#1F4B38] transition-all cursor-pointer border border-[#E6F2EA]"
              title="ดูผังระบบรวมทั้งหมด (System Map & Prototype Map)"
            >
              <LayoutGrid className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>
    </header>
  );
};
