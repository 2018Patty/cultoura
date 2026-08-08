import React, { useState } from 'react';
import { PageId, Experience, Booking } from '../types';
import { CreditCard, CheckCircle2, ShieldCheck, ArrowRight, ArrowLeft, QrCode, PieChart, Users, Calendar } from 'lucide-react';

interface BookingFlowProps {
  experience: Experience;
  paxCount: number;
  bookingDate: string;
  onNavigate: (page: PageId) => void;
  onBookingCompleted: (newBooking: Booking) => void;
}

export const BookingFlow: React.FC<BookingFlowProps> = ({ 
  experience, 
  paxCount: initialPax, 
  bookingDate: initialDate, 
  onNavigate, 
  onBookingCompleted 
}) => {
  const [step, setStep] = useState<number>(1);
  const [paxCount, setPaxCount] = useState<number>(initialPax);
  const [bookingDate, setBookingDate] = useState<string>(initialDate);
  const [travelerName, setTravelerName] = useState<string>('คุณภัทรวรินทร์ สมบูรณ์');
  const [travelerEmail, setTravelerEmail] = useState<string>('patwarin@gmail.com');
  const [travelerPhone, setTravelerPhone] = useState<string>('081-998-8811');
  const [includeSouvenirAddon, setIncludeSouvenirAddon] = useState<boolean>(true);

  // Price calculations
  const basePrice = experience.priceThbPerPerson * paxCount;
  const addonPrice = includeSouvenirAddon ? (150 * paxCount) : 0;
  const totalPrice = basePrice + addonPrice;

  const communityShareThb = Math.round((totalPrice * experience.breakdownLevel1.communitySharePct) / 100);
  const platformOpsThb = Math.round((totalPrice * experience.breakdownLevel1.platformDevOpsPct) / 100);
  const gatewayThb = Math.round((totalPrice * experience.breakdownLevel1.paymentGatewayPct) / 100);

  const handleConfirmPayment = () => {
    const newBookingObj: Booking = {
      id: `BK-2026-${Math.floor(1000 + Math.random() * 9000)}`,
      experienceId: experience.id,
      experienceTitleTh: experience.titleTh,
      communityNameTh: experience.communityNameTh,
      bookingDate: bookingDate,
      paxCount: paxCount,
      totalPriceThb: totalPrice,
      directToCommunityThb: communityShareThb,
      status: 'confirmed',
      travelerName: travelerName,
      travelerEmail: travelerEmail,
      paymentMethod: 'PromptPay QR',
      qrCodeUrl: 'https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=CULTOURA-CONFIRMED',
      createdDate: '2026-08-05'
    };

    onBookingCompleted(newBookingObj);
    setStep(4);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8 text-left">
      
      {/* STEPPER HEADER */}
      <div className="bg-[#FFFDF8] p-6 rounded-3xl border-2 border-[#E7DBB8] shadow-sm space-y-4">
        <h1 className="text-2xl font-black text-[#5A3A28]">ขั้นตอนการจองทริปและชำระเงิน</h1>
        
        {/* Step Progress Pills */}
        <div className="grid grid-cols-4 gap-2 text-center text-xs font-bold">
          <div className={`p-2 rounded-xl transition-all ${step >= 1 ? 'bg-[#5A3A28] text-white' : 'bg-[#FAF4E9] text-[#5A3A28]/50'}`}>
            1. เลือกวันที่ & ผู้เดินทาง
          </div>
          <div className={`p-2 rounded-xl transition-all ${step >= 2 ? 'bg-[#5A3A28] text-white' : 'bg-[#FAF4E9] text-[#5A3A28]/50'}`}>
            2. ข้อมูลติดต่อ & Add-ons
          </div>
          <div className={`p-2 rounded-xl transition-all ${step >= 3 ? 'bg-[#C25E2E] text-white font-black' : 'bg-[#FAF4E9] text-[#5A3A28]/50'}`}>
            3. ตรวจสอบสัดส่วนเงิน
          </div>
          <div className={`p-2 rounded-xl transition-all ${step >= 4 ? 'bg-[#5E7045] text-white' : 'bg-[#FAF4E9] text-[#5A3A28]/50'}`}>
            4. ยืนยันการจอง
          </div>
        </div>
      </div>

      {/* STEP 1: DATE & PAX */}
      {step === 1 && (
        <div className="bg-[#FFFDF8] p-8 rounded-3xl border-2 border-[#E7DBB8] space-y-6 animate-in fade-in">
          <h2 className="text-xl font-bold text-[#5A3A28]">1. ยืนยันกำหนดการเดินทางและจำนวนผู้เดินทาง</h2>
          
          <div className="bg-[#FAF4E9] p-4 rounded-2xl border border-[#E7DBB8] flex items-center gap-4">
            <img src={experience.coverImage} alt={experience.titleTh} className="w-20 h-20 rounded-xl object-cover" />
            <div>
              <h3 className="font-bold text-sm text-[#5A3A28]">{experience.titleTh}</h3>
              <p className="text-xs text-[#5E7045] font-semibold">{experience.communityNameTh}</p>
              <p className="text-xs text-[#C25E2E] font-bold mt-1">{experience.priceThbPerPerson.toLocaleString()} THB / ท่าน</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-bold text-[#5A3A28] block mb-1">เลือกวันที่เดินทาง:</label>
              <input 
                type="date" 
                value={bookingDate} 
                onChange={(e) => setBookingDate(e.target.value)}
                className="w-full bg-[#FAF4E9] p-3 rounded-xl border border-[#E7DBB8] text-xs font-bold text-[#5A3A28]" 
              />
            </div>

            <div>
              <label className="text-xs font-bold text-[#5A3A28] block mb-1">จำนวนผู้เดินทาง (ท่าน):</label>
              <div className="flex items-center justify-between bg-[#FAF4E9] p-2 rounded-xl border border-[#E7DBB8]">
                <button onClick={() => setPaxCount(Math.max(1, paxCount - 1))} className="w-8 h-8 rounded-lg bg-[#E7DBB8] font-bold">-</button>
                <span className="font-bold text-xs text-[#5A3A28]">{paxCount} ท่าน</span>
                <button onClick={() => setPaxCount(paxCount + 1)} className="w-8 h-8 rounded-lg bg-[#C25E2E] text-white font-bold">+</button>
              </div>
            </div>
          </div>

          <button 
            onClick={() => setStep(2)} 
            className="w-full bg-[#C25E2E] hover:bg-[#A84E23] text-white font-bold text-sm py-3.5 rounded-2xl transition-colors cursor-pointer"
          >
            ถัดไป: กรอกข้อมูลติดต่อ →
          </button>
        </div>
      )}

      {/* STEP 2: TRAVELER DETAILS & ADDONS */}
      {step === 2 && (
        <div className="bg-[#FFFDF8] p-8 rounded-3xl border-2 border-[#E7DBB8] space-y-6 animate-in fade-in">
          <h2 className="text-xl font-bold text-[#5A3A28]">2. ข้อมูลติดต่อผู้จอง และกิจกรรมเสริม</h2>

          <div className="space-y-3">
            <div>
              <label className="text-xs font-bold text-[#5A3A28] block mb-1">ชื่อ-นามสกุล ผู้เดินทางหลัก:</label>
              <input 
                type="text" 
                value={travelerName} 
                onChange={(e) => setTravelerName(e.target.value)}
                className="w-full bg-[#FAF4E9] p-3 rounded-xl border border-[#E7DBB8] text-xs font-bold text-[#5A3A28]" 
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-xs font-bold text-[#5A3A28] block mb-1">อีเมลรับใบยืนยัน:</label>
                <input 
                  type="email" 
                  value={travelerEmail} 
                  onChange={(e) => setTravelerEmail(e.target.value)}
                  className="w-full bg-[#FAF4E9] p-3 rounded-xl border border-[#E7DBB8] text-xs font-bold text-[#5A3A28]" 
                />
              </div>

              <div>
                <label className="text-xs font-bold text-[#5A3A28] block mb-1">เบอร์โทรศัพท์:</label>
                <input 
                  type="tel" 
                  value={travelerPhone} 
                  onChange={(e) => setTravelerPhone(e.target.value)}
                  className="w-full bg-[#FAF4E9] p-3 rounded-xl border border-[#E7DBB8] text-xs font-bold text-[#5A3A28]" 
                />
              </div>
            </div>
          </div>

          {/* Add-on selection */}
          <div className="bg-[#FAF4E9] p-4 rounded-2xl border border-[#E7DBB8] space-y-2">
            <span className="text-xs font-bold text-[#5A3A28] block">เลือกรับของที่ระลึกหัตถกรรมชุมชน (Add-on):</span>
            <label className="flex items-center gap-2 text-xs font-semibold text-[#5A3A28] cursor-pointer">
              <input 
                type="checkbox" 
                checked={includeSouvenirAddon} 
                onChange={(e) => setIncludeSouvenirAddon(e.target.checked)}
                className="accent-[#C25E2E] w-4 h-4"
              />
              <span>สมุดบันทึกกระดาษสาทำมือ + ชาปู่หมื่นออร์แกนิกชุดที่ระลึก (+150 THB / ท่าน)</span>
            </label>
          </div>

          <div className="flex gap-3">
            <button onClick={() => setStep(1)} className="w-1/3 bg-[#E7DBB8] text-[#5A3A28] font-bold text-xs py-3.5 rounded-2xl">ย้อนกลับ</button>
            <button onClick={() => setStep(3)} className="w-2/3 bg-[#C25E2E] text-white font-bold text-xs py-3.5 rounded-2xl">ถัดไป: ตรวจสอบความโปร่งใสรายได้ →</button>
          </div>
        </div>
      )}

      {/* STEP 3: TRANSPARENT REVENUE SUMMARY REVIEW (MOST IMPORTANT CHECKOUT STEP) */}
      {step === 3 && (
        <div className="bg-gradient-to-br from-[#5A3A28] to-[#3E2619] text-white p-8 rounded-3xl border-2 border-[#C25E2E] space-y-6 shadow-2xl animate-in fade-in">
          
          <div className="space-y-1">
            <span className="bg-[#C25E2E] text-white font-black text-[10px] px-3 py-1 rounded-full uppercase">
              ขั้นตอนสำคัญก่อนชำระเงิน
            </span>
            <h2 className="text-2xl font-black text-white">3. ยืนยันสัดส่วนรายได้ที่จะส่งถึงชุมชนวิสาหกิจ</h2>
            <p className="text-xs text-[#E7DBB8]">
              ทุกๆ บาทที่คุณชำระจะถูกแบ่งสัดส่วนตามข้อตกลงธรรมาภิบาลชุมชนอย่างซื่อสัตย์
            </p>
          </div>

          <div className="bg-white/10 p-5 rounded-2xl border border-white/10 space-y-3">
            <div className="flex justify-between text-sm font-bold border-b border-white/20 pb-2">
              <span>ยอดชำระสุทธิ ({paxCount} ท่าน):</span>
              <span className="text-xl font-black text-[#B7C5A1]">{totalPrice.toLocaleString()} THB</span>
            </div>

            <div className="space-y-2 text-xs">
              <div className="flex justify-between font-bold text-[#B7C5A1]">
                <span>• ส่งตรงเข้าบัญชีวิสาหกิจชุมชน ({experience.breakdownLevel1.communitySharePct}%):</span>
                <span>{communityShareThb.toLocaleString()} THB</span>
              </div>
              <div className="flex justify-between text-[#E7DBB8]">
                <span>• ค่าพัฒนาแพลตฟอร์ม & สื่อสารการตลาด ({experience.breakdownLevel1.platformDevOpsPct}%):</span>
                <span>{platformOpsThb.toLocaleString()} THB</span>
              </div>
              <div className="flex justify-between text-[#E7DBB8]">
                <span>• ค่าธรรมเนียมชำระเงิน & ประกันภัย (5%):</span>
                <span>{(gatewayThb * 2).toLocaleString()} THB</span>
              </div>
            </div>
          </div>

          <div className="flex gap-3">
            <button onClick={() => setStep(2)} className="w-1/3 bg-white/10 text-white font-bold text-xs py-3.5 rounded-2xl border border-white/20">
              แก้ไขข้อมูล
            </button>
            <button 
              onClick={handleConfirmPayment} 
              className="w-2/3 bg-[#C25E2E] hover:bg-[#A84E23] text-white font-black text-sm py-3.5 rounded-2xl shadow-lg cursor-pointer"
            >
              ชำระเงินผ่าน PromptPay ({totalPrice.toLocaleString()} THB)
            </button>
          </div>

        </div>
      )}

      {/* STEP 4: PAYMENT SIMULATION & RECEIPT CONFIRMATION */}
      {step === 4 && (
        <div className="bg-[#FFFDF8] p-8 rounded-3xl border-2 border-[#5E7045] space-y-6 text-center animate-in zoom-in-95 duration-200">
          
          <div className="w-16 h-16 rounded-full bg-[#5E7045] text-white font-bold text-3xl flex items-center justify-center mx-auto shadow-md">
            ✓
          </div>

          <div className="space-y-1">
            <span className="bg-[#5E7045] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase">
              ชำระเงินสำเร็จ — ยืนยันการจองเรียบร้อย
            </span>
            <h2 className="text-2xl font-black text-[#5A3A28]">ขอบคุณที่ร่วมเดินทางและสนับสนุนชุมชน</h2>
            <p className="text-xs text-[#5A3A28]/80">
              ใบบันทึกการจองและรายงานการกระจายรายได้ถูกส่งไปยัง {travelerEmail} เรียบร้อยแล้ว
            </p>
          </div>

          {/* Simulated Ticket & QR */}
          <div className="bg-[#FAF4E9] p-6 rounded-3xl border-2 border-dashed border-[#E7DBB8] max-w-md mx-auto space-y-4 text-left">
            <div className="flex justify-between items-center border-b border-[#E7DBB8] pb-3">
              <span className="font-bold text-xs text-[#5A3A28]">CULTOURA TRAVEL TICKET</span>
              <span className="font-black text-xs text-[#C25E2E]">BK-2026-8801</span>
            </div>

            <div className="space-y-1 text-xs text-[#5A3A28]">
              <p className="font-bold text-sm text-[#5A3A28]">{experience.titleTh}</p>
              <p>ผู้เดินทาง: {travelerName} ({paxCount} ท่าน)</p>
              <p>วันที่เดินทาง: {bookingDate}</p>
              <p className="font-bold text-[#5E7045] pt-1">
                รายได้ส่งถึงวิสาหกิจชุมชน: {communityShareThb.toLocaleString()} THB
              </p>
            </div>

            <div className="pt-2 text-center">
              <img 
                src="https://api.qrserver.com/v1/create-qr-code/?size=160x160&data=CULTOURA-CONFIRMED-8801" 
                alt="QR Ticket" 
                className="w-32 h-32 mx-auto rounded-xl border border-[#E7DBB8]"
              />
              <span className="text-[10px] text-[#5A3A28]/60 block mt-1">สแกน QR Code เพื่อ Check-in เมื่อถึงชุมชน</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
            <button
              onClick={() => onNavigate('traveler-dashboard')}
              className="bg-[#5A3A28] hover:bg-[#3E2619] text-white font-bold text-xs px-6 py-3 rounded-2xl cursor-pointer"
            >
              ไปที่แดชบอร์ดการจองของฉัน
            </button>
            <button
              onClick={() => onNavigate('home')}
              className="bg-[#FAF4E9] text-[#5A3A28] border border-[#E7DBB8] font-bold text-xs px-6 py-3 rounded-2xl cursor-pointer"
            >
              กลับสู่หน้าแรก
            </button>
          </div>

        </div>
      )}

    </div>
  );
};
