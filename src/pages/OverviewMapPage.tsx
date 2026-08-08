import React from 'react';
import { PageId } from '../types';
import { LayoutGrid, Compass, PieChart, Users, Building2, CreditCard, UserCheck, HeartHandshake, Home, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface OverviewMapPageProps {
  onNavigate: (page: PageId) => void;
}

export const OverviewMapPage: React.FC<OverviewMapPageProps> = ({ onNavigate }) => {
  const screens = [
    { id: 'home', nameTh: '1. หน้าแรก (Home Landing Page)', desc: 'เปิดตัวแบรนด์ ค้นหาทริป ไฮไลต์จุดเด่น ความโปร่งใสรายได้', icon: <Home className="w-5 h-5 text-[#C25E2E]" /> },
    { id: 'explore', nameTh: '2. ค้นหากิจกรรม (Explore Directory)', desc: 'ตัวกรองภูมิภาค หมวดหมู่ เรียงตามสัดส่วนรายได้ถึงชุมชน', icon: <Compass className="w-5 h-5 text-[#5E7045]" /> },
    { id: 'detail', nameTh: '3. รายละเอียดแพ็กเกจ (Experience Detail)', desc: 'ภาพกิจกรรม เรื่องราวปราชญ์ชุมชน กำหนดการ และโมเดลรายได้ฝังในหน้า', icon: <Compass className="w-5 h-5 text-[#5A3A28]" /> },
    { id: 'transparency', nameTh: '4. ความโปร่งใสรายได้ (STAR FEATURE)', desc: 'คำนวณเงินย้อนกลับ แผนภูมิ Donut Chart, Segmented Flow, สัดส่วน 2 ระดับ', icon: <PieChart className="w-5 h-5 text-[#C25E2E]" />, highlight: true },
    { id: 'community', nameTh: '5. โปรไฟล์ชุมชน (Community Profile)', desc: 'ประวัติวิสาหกิจ ผู้นำหมู่บ้าน กองทุนพัฒนาชุมชน และทริปที่เปิดรับ', icon: <Users className="w-5 h-5 text-[#5E7045]" /> },
    { id: 'b2b', nameTh: '6. องค์กร & CSR (B2B Solutions)', desc: 'ทริป Team Building, CSR, Field Trip พร้อมขอใบเสนอราคา & รายงาน ESG', icon: <Building2 className="w-5 h-5 text-[#5A3A28]" /> },
    { id: 'booking', nameTh: '7. ขั้นตอนการจอง (Booking Flow)', desc: '4 ขั้นตอนเลือกวัน กรอกข้อมูล ตรวจสอบสัดส่วนเงิน และชำระ PromptPay QR', icon: <CreditCard className="w-5 h-5 text-[#C25E2E]" /> },
    { id: 'traveler-dashboard', nameTh: '8. แดชบอร์ดนักท่องเที่ยว (Traveler Portal)', desc: 'ประวัติการจอง ตั๋วเดินทาง QR Code และกระเป๋าผลกระทบสะสม', icon: <UserCheck className="w-5 h-5 text-[#5E7045]" /> },
    { id: 'provider-dashboard', nameTh: '9. แดชบอร์ดผู้จัดชุมชน (Community Operator)', desc: 'มุมมองฝั่งสถาบันชุมชน สรุปเงินโอน ตารางคณะนักท่องเที่ยว', icon: <HeartHandshake className="w-5 h-5 text-[#5A3A28]" /> },
    { id: 'overview', nameTh: '10. ผังระบบ Prototype Map', nameEn: 'Business Architecture', desc: 'แผนผังภาพรวมทั้ง 10 หน้า สรุป Business Model Canvas', icon: <LayoutGrid className="w-5 h-5 text-[#C25E2E]" /> }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12 text-left">
      
      {/* HEADER */}
      <div className="bg-[#5A3A28] text-white p-8 rounded-3xl border-2 border-[#C25E2E] space-y-3">
        <span className="bg-[#C25E2E] text-white font-black text-[10px] px-3 py-1 rounded-full uppercase">
          System Overview & Prototype Sitemap
        </span>
        <h1 className="text-3xl font-black text-white">ผังโครงสร้างระบบและ Business Model Canvas</h1>
        <p className="text-sm text-[#E7DBB8]">
          คลิกเลือกหน้าจอเพื่อทดลองใช้งาน Core User Journey ทั้งหมดของ Cultoura
        </p>
      </div>

      {/* BUSINESS MODEL CANVAS SUMMARY */}
      <div className="bg-[#FFFDF8] p-8 rounded-3xl border-2 border-[#E7DBB8] space-y-6">
        <h2 className="text-2xl font-black text-[#5A3A28] flex items-center gap-2">
          <ShieldCheck className="w-6 h-6 text-[#5E7045]" />
          ภาพรวมโมเดลธุรกิจสองฝั่ง (Two-Sided Sustainable Platform)
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-[#5A3A28]">
          <div className="bg-[#FAF4E9] p-5 rounded-2xl border border-[#E7DBB8] space-y-2">
            <h3 className="font-bold text-sm text-[#C25E2E]">1. Demand Side (ผู้ซื้อ)</h3>
            <p className="font-semibold">• B2C Travelers: นักท่องเที่ยวสายยั่งยืน ต้องการประสบการณ์แท้</p>
            <p className="font-semibold">• B2B Customers: องค์กรทำ CSR, Team Building, Field Trips โรงเรียน, Inbound Agency</p>
          </div>

          <div className="bg-[#FAF4E9] p-5 rounded-2xl border border-[#E7DBB8] space-y-2">
            <h3 className="font-bold text-sm text-[#5E7045]">2. Supply Side (ผู้ขาย)</h3>
            <p className="font-semibold">• วิสาหกิจชุมชน (CBT)</p>
            <p className="font-semibold">• กลุ่มแม่บ้าน / โฮมสเตย์ / ไกด์ท้องถิ่น / คนขับรถ / กลุ่มหัตถกรรม</p>
          </div>

          <div className="bg-[#FAF4E9] p-5 rounded-2xl border border-[#E7DBB8] space-y-2">
            <h3 className="font-bold text-sm text-[#5A3A28]">3. Key Differentiator</h3>
            <p className="font-black text-[#5E7045]">• ความโปร่งใสในการกระจายรายได้ (100% Revenue Transparency)</p>
            <p className="font-semibold">• ชุมชนรับรายได้หลัก 77% โดยตรง</p>
          </div>
        </div>
      </div>

      {/* SITEMAP GRID OF ALL 10 PAGES */}
      <div className="space-y-6">
        <h2 className="text-2xl font-black text-[#5A3A28]">หน้าจอทั้งหมดในระบบคลิก prototype (10 Screens)</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {screens.map((sc) => (
            <div 
              key={sc.id}
              onClick={() => onNavigate(sc.id as any)}
              className={`p-5 rounded-2xl border-2 transition-all cursor-pointer flex items-start justify-between gap-4 ${
                sc.highlight 
                  ? 'bg-[#FAF4E9] border-[#C25E2E] shadow-md hover:bg-white' 
                  : 'bg-[#FFFDF8] border-[#E7DBB8] hover:border-[#5A3A28]'
              }`}
            >
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  {sc.icon}
                  <h3 className="font-bold text-sm text-[#5A3A28]">{sc.nameTh}</h3>
                </div>
                <p className="text-xs text-[#5A3A28]/70">{sc.desc}</p>
              </div>

              <span className="bg-[#5A3A28] text-white text-xs font-bold px-3 py-1.5 rounded-xl shrink-0 flex items-center gap-1">
                เปิดหน้า <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
