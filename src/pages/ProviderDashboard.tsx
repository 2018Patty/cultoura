import React from 'react';
import { PageId } from '../types';
import { HeartHandshake, TrendingUp, Calendar, Users, DollarSign, ArrowUpRight, ShieldCheck } from 'lucide-react';

interface ProviderDashboardProps {
  onNavigate: (page: PageId) => void;
}

export const ProviderDashboard: React.FC<ProviderDashboardProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10 text-left">
      
      {/* PROVIDER HEADER BANNER */}
      <div className="bg-[#3E2619] text-white p-8 rounded-3xl border-2 border-[#C25E2E] shadow-xl space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-[#C25E2E] text-white flex items-center justify-center font-bold shrink-0">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] font-bold text-[#B7C5A1] uppercase tracking-wider block">
                ระบบจัดการวิสาหกิจท่องเที่ยวชุมชน (Community Operator Portal)
              </span>
              <h1 className="text-2xl font-black text-white">วิสาหกิจท่องเที่ยวชุมชนบ้านดอยปู่หมื่น</h1>
            </div>
          </div>

          <span className="bg-[#5E7045] text-white text-xs font-bold px-3.5 py-1.5 rounded-full flex items-center gap-1.5 w-max">
            <ShieldCheck className="w-4 h-4" /> สถานะ: พร้อมรับนักท่องเที่ยว
          </span>
        </div>
      </div>

      {/* REVENUE & PAYOUT METRICS */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="bg-[#FFFDF8] p-6 rounded-3xl border-2 border-[#E7DBB8] space-y-2 shadow-xs">
          <span className="text-xs font-bold text-[#5A3A28]/70 block">รายได้สุทธิเดือนนี้ (Net Payout):</span>
          <p className="text-3xl font-black text-[#5E7045]">84,500 <span className="text-sm font-bold">THB</span></p>
          <p className="text-[10px] text-[#5E7045] font-semibold">↑ +18% จากเดือนก่อนหน้า</p>
        </div>

        <div className="bg-[#FFFDF8] p-6 rounded-3xl border-2 border-[#E7DBB8] space-y-2 shadow-xs">
          <span className="text-xs font-bold text-[#5A3A28]/70 block">เงินเข้ากองทุนพัฒนาชุมชน:</span>
          <p className="text-3xl font-black text-[#C25E2E]">12,400 <span className="text-sm font-bold">THB</span></p>
          <p className="text-[10px] text-[#C25E2E] font-semibold">สะสมงบดับไฟป่าและทุนการศึกษา</p>
        </div>

        <div className="bg-[#FFFDF8] p-6 rounded-3xl border-2 border-[#E7DBB8] space-y-2 shadow-xs">
          <span className="text-xs font-bold text-[#5A3A28]/70 block">นักท่องเที่ยวเดือนนี้:</span>
          <p className="text-3xl font-black text-[#5A3A28]">42 <span className="text-sm font-bold">ท่าน</span></p>
          <p className="text-[10px] text-[#5A3A28]/70 font-semibold">กระจายงาน 14 ครัวเรือน</p>
        </div>
      </div>

      {/* UPCOMING TOUR GROUPS CALENDAR LIST */}
      <div className="bg-[#FFFDF8] p-6 rounded-3xl border-2 border-[#E7DBB8] space-y-4">
        <h2 className="text-xl font-bold text-[#5A3A28] flex items-center gap-2">
          <Calendar className="w-5 h-5 text-[#C25E2E]" />
          ตารางคณะท่องเที่ยวที่กำลังจะเดินทางมาถึง
        </h2>

        <div className="space-y-3">
          <div className="bg-[#FAF4E9] p-4 rounded-2xl border border-[#E7DBB8] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <span className="bg-[#C25E2E] text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full">20 ส.ค. 2026</span>
              <h3 className="font-bold text-sm text-[#5A3A28] mt-1">คณะคุณภัทรวรินทร์ สมบูรณ์ (2 ท่าน)</h3>
              <p className="text-xs text-[#5A3A28]/70">แพ็กเกจเรียนรู้วิถีชาออร์แกนิก • โฮมสเตย์บ้านพ่อหลวงเจริญ</p>
            </div>
            <span className="font-black text-[#5E7045] text-sm">ส่วนแบ่งชุมชน: 3,988 THB</span>
          </div>

          <div className="bg-[#FAF4E9] p-4 rounded-2xl border border-[#E7DBB8] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <span className="bg-[#5E7045] text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full">28 ส.ค. 2026</span>
              <h3 className="font-bold text-sm text-[#5A3A28]">คณะ CSR บริษัท เอสซีจี จำกัด (40 ท่าน)</h3>
              <p className="text-xs text-[#5A3A28]/70">กิจกรรมทำแนวกันไฟป่าและปลูกต้นชาออร์แกนิก</p>
            </div>
            <span className="font-black text-[#5E7045] text-sm">ส่วนแบ่งชุมชน: 117,040 THB</span>
          </div>
        </div>
      </div>

    </div>
  );
};
