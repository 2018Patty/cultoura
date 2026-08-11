import React from 'react';
import { PageId } from '../types';
import { LayoutGrid, Compass, PieChart, Users, Building2, CreditCard, UserCheck, HeartHandshake, Home, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface OverviewMapPageProps {
  onNavigate: (page: PageId) => void;
}

export const OverviewMapPage: React.FC<OverviewMapPageProps> = ({ onNavigate }) => {
  const screens = [
    { id: 'home', nameTh: '1. หน้าแรก (Home Landing Page)', desc: 'เปิดตัวแบรนด์ ค้นหาทริป ไฮไลต์จุดเด่น ความโปร่งใสรายได้', icon: <Home className="w-5 h-5 text-[#355E3B]" /> },
    { id: 'explore', nameTh: '2. ค้นหากิจกรรม (Explore Directory)', desc: 'ตัวกรองภูมิภาค หมวดหมู่ เรียงตามสัดส่วนรายได้ถึงชุมชน', icon: <Compass className="w-5 h-5 text-[#6C8355]" /> },
    { id: 'detail', nameTh: '3. รายละเอียดแพ็กเกจ (Experience Detail)', desc: 'ภาพกิจกรรม เรื่องราวปราชญ์ชุมชน กำหนดการ และโมเดลรายได้ฝังในหน้า', icon: <Compass className="w-5 h-5 text-[#1F4B38]" /> },
    { id: 'transparency', nameTh: '4. ความโปร่งใสรายได้ (STAR FEATURE)', desc: 'คำนวณเงินย้อนกลับ แผนภูมิ Donut Chart, Segmented Flow, สัดส่วน 2 ระดับ', icon: <PieChart className="w-5 h-5 text-[#355E3B]" />, highlight: true },
    { id: 'community', nameTh: '5. โปรไฟล์ชุมชน (Community Profile)', desc: 'ประวัติวิสาหกิจ ผู้นำหมู่บ้าน กองทุนพัฒนาชุมชน และทริปที่เปิดรับ', icon: <Users className="w-5 h-5 text-[#6C8355]" /> },
    { id: 'b2b', nameTh: '6. องค์กร & CSR (B2B Solutions)', desc: 'ทริป Team Building, CSR, Field Trip พร้อมขอใบเสนอราคา & รายงาน ESG', icon: <Building2 className="w-5 h-5 text-[#1F4B38]" /> },
    { id: 'booking', nameTh: '7. ขั้นตอนการจอง (Booking Flow)', desc: '4 ขั้นตอนเลือกวัน กรอกข้อมูล ตรวจสอบสัดส่วนเงิน และชำระ PromptPay QR', icon: <CreditCard className="w-5 h-5 text-[#355E3B]" /> },
    { id: 'traveler-dashboard', nameTh: '8. แดชบอร์ดนักท่องเที่ยว (Traveler Portal)', desc: 'ประวัติการจอง ตั๋วเดินทาง QR Code และกระเป๋าผลกระทบสะสม', icon: <UserCheck className="w-5 h-5 text-[#6C8355]" /> },
    { id: 'provider-dashboard', nameTh: '9. แดชบอร์ดผู้จัดชุมชน (Community Operator)', desc: 'มุมมองฝั่งสถาบันชุมชน สรุปเงินโอน ตารางคณะนักท่องเที่ยว', icon: <HeartHandshake className="w-5 h-5 text-[#1F4B38]" /> },
    { id: 'overview', nameTh: '10. ผังระบบ Prototype Map', nameEn: 'Business Architecture', desc: 'แผนผังภาพรวมทั้ง 10 หน้า สรุป Business Model Canvas', icon: <LayoutGrid className="w-5 h-5 text-[#355E3B]" /> }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12 text-left">
      
      {/* HEADER */}
      <div className="bg-[#1F4B38] text-white p-8 rounded-3xl border-2 border-[#355E3B] space-y-3">
        <span className="bg-[#355E3B] text-white font-black text-[10px] px-3 py-1 rounded-full uppercase">
          System Overview & Prototype Sitemap
        </span>
        <h1 className="text-3xl font-black text-white">ผังโครงสร้างระบบและ Business Model Canvas</h1>
        <p className="text-sm text-[#E6F2EA]">
          คลิกเลือกหน้าจอเพื่อทดลองใช้งาน Core User Journey ทั้งหมดของ LocalConnect
        </p>
      </div>

      {/* BUSINESS MODEL CANVAS SUMMARY */}
      <div className="bg-[#FFFFFF] p-8 rounded-3xl border-2 border-[#E6F2EA] space-y-6">
        <h2 className="text-2xl font-black text-[#1F4B38] flex items-center gap-2">
          <ShieldCheck className="w-6 h-6 text-[#6C8355]" />
          ภาพรวมโมเดลธุรกิจสองฝั่ง (Two-Sided Sustainable Platform)
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-[#1F4B38]">
          <div className="bg-[#F6F8F4] p-5 rounded-2xl border border-[#E6F2EA] space-y-2">
            <h3 className="font-bold text-sm text-[#355E3B]">1. Demand Side (ผู้ซื้อ)</h3>
            <p className="font-semibold">• B2C Travelers: นักท่องเที่ยวสายยั่งยืน ต้องการประสบการณ์แท้</p>
            <p className="font-semibold">• B2B Customers: องค์กรทำ CSR, Team Building, Field Trips โรงเรียน, Inbound Agency</p>
          </div>

          <div className="bg-[#F6F8F4] p-5 rounded-2xl border border-[#E6F2EA] space-y-2">
            <h3 className="font-bold text-sm text-[#6C8355]">2. Supply Side (ผู้ขาย)</h3>
            <p className="font-semibold">• วิสาหกิจชุมชน (CBT)</p>
            <p className="font-semibold">• กลุ่มแม่บ้าน / โฮมสเตย์ / ไกด์ท้องถิ่น / คนขับรถ / กลุ่มหัตถกรรม</p>
          </div>

          <div className="bg-[#F6F8F4] p-5 rounded-2xl border border-[#E6F2EA] space-y-2">
            <h3 className="font-bold text-sm text-[#1F4B38]">3. Key Differentiator</h3>
            <p className="font-black text-[#6C8355]">• ความโปร่งใสในการกระจายรายได้ (100% Revenue Transparency)</p>
            <p className="font-semibold">• ชุมชนรับรายได้หลัก 77% โดยตรง</p>
          </div>
        </div>
      </div>

      {/* SITEMAP GRID OF ALL 10 PAGES */}
      <div className="space-y-6">
        <h2 className="text-2xl font-black text-[#1F4B38]">หน้าจอทั้งหมดในระบบคลิก prototype (10 Screens)</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {screens.map((sc) => (
            <div 
              key={sc.id}
              onClick={() => onNavigate(sc.id as any)}
              className={`p-5 rounded-2xl border-2 transition-all cursor-pointer flex items-start justify-between gap-4 ${
                sc.highlight 
                  ? 'bg-[#F6F8F4] border-[#355E3B] shadow-md hover:bg-white' 
                  : 'bg-[#FFFFFF] border-[#E6F2EA] hover:border-[#1F4B38]'
              }`}
            >
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  {sc.icon}
                  <h3 className="font-bold text-sm text-[#1F4B38]">{sc.nameTh}</h3>
                </div>
                <p className="text-xs text-[#1F4B38]/70">{sc.desc}</p>
              </div>

              <span className="bg-[#1F4B38] text-white text-xs font-bold px-3 py-1.5 rounded-xl shrink-0 flex items-center gap-1">
                เปิดหน้า <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
