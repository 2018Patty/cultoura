import React from 'react';
import { PageId, Booking } from '../types';
import { User, Calendar, Award, ShieldCheck, Heart, Download, QrCode, ArrowRight } from 'lucide-react';

interface TravelerDashboardProps {
  bookings: Booking[];
  onNavigate: (page: PageId) => void;
}

export const TravelerDashboard: React.FC<TravelerDashboardProps> = ({ bookings, onNavigate }) => {
  const totalLocalIncomeGenerated = bookings.reduce((sum, b) => sum + b.directToCommunityThb, 3988);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10 text-left">
      
      {/* TRAVELER PROFILE & IMPACT WALLET BANNER */}
      <div className="bg-gradient-to-r from-[#1F4B38] via-[#14301F] to-[#1F4B38] text-white p-8 rounded-3xl border-2 border-[#355E3B] shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
        
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-2xl bg-[#355E3B] text-white font-black text-2xl flex items-center justify-center shrink-0 border-2 border-white">
            P
          </div>
          <div className="space-y-1">
            <span className="bg-[#6C8355] text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase">
              Impact Traveler Level 2
            </span>
            <h1 className="text-2xl font-black text-white">คุณภัทรวรินทร์ สมบูรณ์</h1>
            <p className="text-xs text-[#E6F2EA]">patwarin@gmail.com • สมาชิกตั้งแต่ ส.ค. 2026</p>
          </div>
        </div>

        {/* Impact Wallet Summary Box */}
        <div className="bg-white/10 p-4 rounded-2xl border border-white/20 text-center sm:text-right space-y-1 w-full md:w-auto">
          <span className="text-[11px] text-[#E6F2EA] block font-semibold">รายได้สะสมที่คุณส่งตรงถึงชุมชน:</span>
          <span className="text-2xl font-black text-[#B8D1C1]">{totalLocalIncomeGenerated.toLocaleString()} THB</span>
          <span className="text-[10px] text-white/80 block">ช่วยสนับสนุน 2 ชุมชน & 12 ครัวเรือน</span>
        </div>

      </div>

      {/* UPCOMING & PAST BOOKINGS */}
      <div className="space-y-6">
        <div className="flex items-center justify-between border-b border-[#E6F2EA] pb-3">
          <h2 className="text-2xl font-black text-[#1F4B38]">การจองของฉัน (My Bookings)</h2>
          <button 
            onClick={() => onNavigate('explore')} 
            className="text-xs font-bold text-[#355E3B] hover:underline flex items-center gap-1 cursor-pointer"
          >
            <span>ค้นหาทริปใหม่</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="space-y-4">
          {bookings.map((b) => (
            <div key={b.id} className="bg-[#FFFFFF] p-6 rounded-3xl border-2 border-[#E6F2EA] shadow-md flex flex-col md:flex-row items-center justify-between gap-6">
              
              <div className="space-y-2 text-left w-full md:w-auto">
                <div className="flex items-center gap-2">
                  <span className="bg-[#6C8355] text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase">
                    {b.status === 'confirmed' ? '✓ ยืนยันแล้ว' : 'เสร็จสิ้น'}
                  </span>
                  <span className="text-xs font-bold text-[#355E3B]">{b.id}</span>
                </div>

                <h3 className="text-lg font-bold text-[#1F4B38]">{b.experienceTitleTh}</h3>
                <p className="text-xs text-[#1F4B38]/80 font-semibold">{b.communityNameTh} • {b.paxCount} ท่าน</p>
                <p className="text-xs text-[#1F4B38]/60">วันเดินทาง: {b.bookingDate}</p>

                {/* Transparency Summary pill */}
                <div className="bg-[#F6F8F4] p-2.5 rounded-xl border border-[#E6F2EA] inline-block text-xs">
                  <span className="font-semibold text-[#1F4B38]">เงินส่งตรงถึงชุมชน: </span>
                  <span className="font-black text-[#6C8355]">{b.directToCommunityThb.toLocaleString()} THB</span>
                </div>
              </div>

              {/* Ticket QR & Receipt Actions */}
              <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto shrink-0 border-t md:border-t-0 md:border-l border-[#E6F2EA] pt-4 md:pt-0 md:pl-6">
                {b.qrCodeUrl && (
                  <img src={b.qrCodeUrl} alt="QR Code" className="w-20 h-20 rounded-xl border border-[#E6F2EA]" />
                )}
                <div className="space-y-2 w-full sm:w-auto">
                  <button 
                    onClick={() => onNavigate('transparency')}
                    className="w-full bg-[#1F4B38] hover:bg-[#14301F] text-white text-xs font-bold px-4 py-2.5 rounded-xl transition-colors cursor-pointer flex items-center justify-center gap-1.5"
                  >
                    <ShieldCheck className="w-4 h-4 text-[#B8D1C1]" />
                    <span>ใบแสดงความโปร่งใส</span>
                  </button>
                  <button 
                    onClick={() => alert(`ดาวน์โหลดใบเสร็จรับเงินสำหรับรายการ ${b.id} เรียบร้อยแล้ว`)}
                    className="w-full bg-[#F6F8F4] hover:bg-[#E6F2EA] text-[#1F4B38] border border-[#E6F2EA] text-xs font-bold px-4 py-2 rounded-xl transition-colors cursor-pointer flex items-center justify-center gap-1.5"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>ดาวน์โหลดใบเสร็จ</span>
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
