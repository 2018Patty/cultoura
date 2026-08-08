import React from 'react';
import { PageId } from '../types';
import { Compass, PieChart, Users, Building2, UserCheck, LayoutGrid, HeartHandshake, ShieldCheck, MapPin } from 'lucide-react';
import { CultouraLogo } from './CultouraLogo';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  savedCount?: number;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate, savedCount = 1 }) => {
  return (
    <header className="sticky top-0 z-40 bg-[#FAF4E9]/95 backdrop-blur-md border-b border-[#E7DBB8] shadow-xs">
      {/* Top Notification / Trust Bar */}
      <div className="bg-[#5A3A28] text-[#F2E6C9] text-xs py-1.5 px-4 text-center font-medium flex items-center justify-center gap-2">
        <ShieldCheck className="w-3.5 h-3.5 text-[#B7C5A1]" />
        <span>โปร่งใส 100% — แสดงสัดส่วนเงินรายได้ส่งตรงถึงชุมชนวิสาหกิจทุกการจอง</span>
        <span className="hidden md:inline-block text-[#D47A55] font-bold">|</span>
        <button 
          onClick={() => onNavigate('transparency')}
          className="hidden md:inline-flex items-center gap-1 underline underline-offset-2 hover:text-white transition-colors cursor-pointer"
        >
          ดูโมเดลการจัดสรรเงิน →
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & Tagline */}
          <button 
            onClick={() => onNavigate('home')}
            className="flex items-center gap-2.5 group text-left cursor-pointer transition-transform hover:scale-102"
          >
            <CultouraLogo size="md" showTagline={true} />
            <span className="hidden sm:inline-block text-[10px] bg-[#5E7045] text-white font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider ml-1 shadow-xs">
              Verified CBT
            </span>
          </button>

          {/* Primary Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-[#F2E6C9]/60 p-1.5 rounded-full border border-[#E7DBB8]">
            <button
              onClick={() => onNavigate('home')}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                currentPage === 'home' 
                  ? 'bg-[#5A3A28] text-[#FAF4E9] shadow-xs' 
                  : 'text-[#5A3A28] hover:bg-[#E7DBB8]/60'
              }`}
            >
              หน้าแรก
            </button>

            <button
              onClick={() => onNavigate('explore')}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                currentPage === 'explore' || currentPage === 'detail'
                  ? 'bg-[#5A3A28] text-[#FAF4E9] shadow-xs' 
                  : 'text-[#5A3A28] hover:bg-[#E7DBB8]/60'
              }`}
            >
              <Compass className="w-3.5 h-3.5 text-[#C25E2E]" />
              ค้นหากิจกรรม
            </button>

            {/* STAR FEATURE BUTTON */}
            <button
              onClick={() => onNavigate('transparency')}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                currentPage === 'transparency' 
                  ? 'bg-[#C25E2E] text-[#FAF4E9] shadow-md ring-2 ring-[#C25E2E]/30' 
                  : 'text-[#C25E2E] bg-[#D47A55]/15 hover:bg-[#D47A55]/30'
              }`}
            >
              <PieChart className="w-4 h-4 text-[#C25E2E] animate-pulse" />
              ความโปร่งใสรายได้
              <span className="bg-[#C25E2E] text-white text-[9px] px-1.5 py-0.5 rounded-md font-extrabold uppercase">
                Star Feature
              </span>
            </button>

            <button
              onClick={() => onNavigate('community')}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                currentPage === 'community' 
                  ? 'bg-[#5A3A28] text-[#FAF4E9] shadow-xs' 
                  : 'text-[#5A3A28] hover:bg-[#E7DBB8]/60'
              }`}
            >
              <Users className="w-3.5 h-3.5 text-[#5E7045]" />
              ชุมชนของเรา
            </button>

            <button
              onClick={() => onNavigate('b2b')}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                currentPage === 'b2b' 
                  ? 'bg-[#5A3A28] text-[#FAF4E9] shadow-xs' 
                  : 'text-[#5A3A28] hover:bg-[#E7DBB8]/60'
              }`}
            >
              <Building2 className="w-3.5 h-3.5 text-[#5A3A28]" />
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
                  ? 'bg-[#5E7045] text-white border-[#5E7045]'
                  : 'bg-white text-[#5A3A28] border-[#E7DBB8] hover:bg-[#F2E6C9]'
              }`}
              title="การจองของฉัน / Traveler Portal"
            >
              <UserCheck className="w-4 h-4 text-[#5E7045]" />
              <span className="hidden sm:inline">การจองของฉัน</span>
              {savedCount > 0 && (
                <span className="bg-[#C25E2E] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                  {savedCount}
                </span>
              )}
            </button>

            {/* Provider / Community Dashboard */}
            <button
              onClick={() => onNavigate('provider-dashboard')}
              className={`px-3 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 border transition-all cursor-pointer ${
                currentPage === 'provider-dashboard'
                  ? 'bg-[#5A3A28] text-white border-[#5A3A28]'
                  : 'bg-[#FAF4E9] text-[#5A3A28] border-[#E7DBB8] hover:bg-[#E7DBB8]'
              }`}
              title="แดชบอร์ดผู้จัดกิจกรรมชุมชน / Community Operator Portal"
            >
              <HeartHandshake className="w-4 h-4 text-[#C25E2E]" />
              <span className="hidden md:inline">สำหรับชุมชน</span>
            </button>

            {/* System Map Overview */}
            <button
              onClick={() => onNavigate('overview')}
              className="p-2.5 rounded-xl bg-[#F2E6C9] hover:bg-[#E7DBB8] text-[#5A3A28] transition-all cursor-pointer border border-[#E7DBB8]"
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
