import React, { useState } from 'react';
import { PageId } from '../types';
import { 
  Home, 
  Compass, 
  Info, 
  PieChart, 
  Users, 
  Building2, 
  CreditCard, 
  UserCheck, 
  HeartHandshake, 
  LayoutGrid, 
  ChevronUp, 
  Sparkles,
  Layers
} from 'lucide-react';

interface PrototypeNavProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
}

const PAGES_CONFIG: { id: PageId; nameTh: string; nameEn: string; icon: React.ReactNode; badge?: string }[] = [
  { id: 'home', nameTh: '1. หน้าแรก', nameEn: 'Landing Page', icon: <Home className="w-4 h-4" /> },
  { id: 'explore', nameTh: '2. ค้นหากิจกรรม', nameEn: 'Explore & Filter', icon: <Compass className="w-4 h-4" /> },
  { id: 'detail', nameTh: '3. รายละเอียดแพ็กเกจ', nameEn: 'Package Detail', icon: <Info className="w-4 h-4" /> },
  { id: 'transparency', nameTh: '4. ความโปร่งใสรายได้', nameEn: 'Revenue Transparency', icon: <PieChart className="w-4 h-4" />, badge: 'STAR' },
  { id: 'community', nameTh: '5. โปรไฟล์ชุมชน', nameEn: 'Community Profile', icon: <Users className="w-4 h-4" /> },
  { id: 'b2b', nameTh: '6. องค์กร & CSR', nameEn: 'B2B / Team Building', icon: <Building2 className="w-4 h-4" /> },
  { id: 'booking', nameTh: '7. ขั้นตอนการจอง', nameEn: 'Booking Flow', icon: <CreditCard className="w-4 h-4" /> },
  { id: 'traveler-dashboard', nameTh: '8. แดชบอร์ดนักท่องเที่ยว', nameEn: 'Traveler Dashboard', icon: <UserCheck className="w-4 h-4" /> },
  { id: 'provider-dashboard', nameTh: '9. แดชบอร์ดชุมชน', nameEn: 'Community Operator', icon: <HeartHandshake className="w-4 h-4" /> },
  { id: 'overview', nameTh: '10. ผังระบบ Prototype Map', nameEn: 'System Architecture Map', icon: <LayoutGrid className="w-4 h-4" />, badge: 'MAP' },
];

export const PrototypeNav: React.FC<PrototypeNavProps> = ({ currentPage, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);

  const currentPageObj = PAGES_CONFIG.find(p => p.id === currentPage) || PAGES_CONFIG[0];

  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 w-[95%] max-w-4xl">
      
      {/* Expanded Quick Switcher Sheet */}
      {isOpen && (
        <div className="bg-[#5A3A28] text-[#FAF4E9] rounded-3xl p-5 mb-3 border-2 border-[#C25E2E] shadow-2xl backdrop-blur-lg animate-in slide-in-from-bottom duration-200">
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#7A533D]">
            <div className="flex items-center gap-2">
              <Layers className="w-5 h-5 text-[#C25E2E]" />
              <span className="font-bold text-sm text-white">Cultoura Prototype Screen Switcher (10 Screens)</span>
            </div>
            <span className="text-xs text-[#E7DBB8] bg-[#7A533D] px-2.5 py-1 rounded-full">
              คลิกเพื่อสลับหน้าใช้งาน
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2">
            {PAGES_CONFIG.map((p) => {
              const isActive = currentPage === p.id;
              return (
                <button
                  key={p.id}
                  onClick={() => {
                    onNavigate(p.id);
                    setIsOpen(false);
                  }}
                  className={`p-2.5 rounded-xl text-left transition-all flex flex-col justify-between border cursor-pointer ${
                    isActive
                      ? 'bg-[#C25E2E] text-white border-white shadow-md font-bold'
                      : 'bg-[#3E2619] hover:bg-[#7A533D] text-[#E7DBB8] border-[#7A533D]'
                  }`}
                >
                  <div className="flex items-center justify-between w-full mb-1">
                    <span className="shrink-0">{p.icon}</span>
                    {p.badge && (
                      <span className="bg-[#FAF4E9] text-[#5A3A28] text-[9px] font-black px-1.5 py-0.2 rounded-md">
                        {p.badge}
                      </span>
                    )}
                  </div>
                  <div>
                    <p className="text-xs font-semibold leading-snug truncate">{p.nameTh}</p>
                    <p className="text-[10px] opacity-80 truncate">{p.nameEn}</p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Floating Toolbar Pill */}
      <div className="bg-[#3E2619]/90 text-[#FAF4E9] p-2 pl-4 pr-3 rounded-full border border-[#C25E2E]/60 shadow-2xl backdrop-blur-md flex items-center justify-between gap-3">
        
        {/* Active Screen Indicator */}
        <div className="flex items-center gap-2.5 overflow-hidden">
          <span className="w-3 h-3 rounded-full bg-[#C25E2E] animate-ping shrink-0" />
          <div className="truncate">
            <span className="text-[10px] font-semibold text-[#B7C5A1] uppercase tracking-wider block leading-none">
              กำลังดูหน้า:
            </span>
            <span className="text-xs font-bold text-white truncate flex items-center gap-1.5 mt-0.5">
              {currentPageObj.icon}
              {currentPageObj.nameTh}
            </span>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-1.5 shrink-0">
          
          <button
            onClick={() => onNavigate('transparency')}
            className="hidden sm:flex items-center gap-1 bg-[#C25E2E] hover:bg-[#A84E23] text-white text-xs px-3 py-1.5 rounded-full font-bold transition-all shadow-xs cursor-pointer"
          >
            <PieChart className="w-3.5 h-3.5" />
            <span>หน้าความโปร่งใส</span>
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="bg-[#5A3A28] hover:bg-[#7A533D] text-white px-3.5 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5 border border-[#7A533D] transition-all cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#E7DBB8]" />
            <span>สลับหน้า ({PAGES_CONFIG.findIndex(p=>p.id===currentPage)+1}/10)</span>
            <ChevronUp className={`w-3.5 h-3.5 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
          </button>
        </div>

      </div>
    </div>
  );
};
