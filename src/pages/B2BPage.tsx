import React, { useState } from 'react';
import { SAMPLE_B2B_PACKAGES } from '../data/sampleData';
import { PageId } from '../types';
import { Building2, Award, FileText, CheckCircle2, Users, Send, Sparkles, ChevronRight, ShieldCheck } from 'lucide-react';

interface B2BPageProps {
  onNavigate: (page: PageId) => void;
}

export const B2BPage: React.FC<B2BPageProps> = ({ onNavigate }) => {
  const [showQuoteModal, setShowQuoteModal] = useState<boolean>(false);
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const [companyName, setCompanyName] = useState<string>('');
  const [paxCount, setPaxCount] = useState<string>('30-50');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12 text-left">
      
      {/* B2B HERO BANNER */}
      <div className="bg-gradient-to-r from-[#6C8355] via-[#1F4B38] to-[#6C8355] text-white p-8 sm:p-12 rounded-3xl border-2 border-[#93B39A] shadow-2xl space-y-6 relative overflow-hidden">
        
        <div className="max-w-3xl space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 bg-[#F6F8F4] text-[#6C8355] px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider">
            <Building2 className="w-4 h-4" />
            <span>LocalConnect for Business (B2B / CSR / Field Trips)</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white leading-tight">
            จัดทริปองค์กร & CSR อย่างโปร่งใส พร้อมรายงาน ESG Impact
          </h1>

          <p className="text-sm sm:text-base text-[#F6F8F4]/90 leading-relaxed font-medium">
            ยกระดับกิจกรรม Team Building ทริปประจำปีบริษัท หรือ Field Trip สถาบันการศึกษา ให้ตอบโจทย์เป้าหมายการพัฒนาที่ยั่งยืน (SDGs) พร้อมระบบสรุปข้อมูลผลกระทบเชิงบวกสำหรับรายงาน ESG
          </p>

          <div className="pt-2 flex flex-wrap gap-3">
            <button
              onClick={() => setShowQuoteModal(true)}
              className="bg-[#355E3B] hover:bg-[#1F4B38] text-white px-6 py-3.5 rounded-2xl font-bold text-sm transition-all shadow-md flex items-center gap-2 cursor-pointer"
            >
              <Send className="w-4 h-4" />
              <span>ขอใบเสนอราคา / ออกแบบทริปเฉพาะองค์กร</span>
            </button>

            <button
              onClick={() => onNavigate('transparency')}
              className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-6 py-3.5 rounded-2xl font-bold text-sm transition-all cursor-pointer"
            >
              ดูสัดส่วนการกระจายรายได้ B2B
            </button>
          </div>
        </div>

      </div>

      {/* WHY CORPORATES CHOOSE LOCALCONNECT */}
      <div className="space-y-6">
        <div className="text-center max-w-xl mx-auto">
          <span className="text-xs font-bold text-[#355E3B] uppercase">จุดเด่นสำหรับองค์กร</span>
          <h2 className="text-2xl font-black text-[#1F4B38]">ทำไมบริษัทชั้นนำจึงจัดทริปกับ LocalConnect</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#FFFFFF] p-6 rounded-3xl border border-[#E6F2EA] space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-[#6C8355]/15 text-[#6C8355] flex items-center justify-center font-bold">
              <FileText className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-[#1F4B38]">รายงาน ESG Impact ได้รับการรับรอง</h3>
            <p className="text-xs text-[#1F4B38]/80 leading-relaxed">
              หลังจบโครงการ องค์กรจะได้รับรายงานสรุปจำนวนชั่วโมงจิตอาสา จำนวนการสร้างงาน และเงินกระจายสู่ชุมชนจริง เพื่อใช้ในรายงานการพัฒนาที่ยั่งยืนประจำปี
            </p>
          </div>

          <div className="bg-[#FFFFFF] p-6 rounded-3xl border border-[#E6F2EA] space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-[#355E3B]/15 text-[#355E3B] flex items-center justify-center font-bold">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-[#1F4B38]">ใบเสร็จกำกับภาษี & โปร่งใส 100%</h3>
            <p className="text-xs text-[#1F4B38]/80 leading-relaxed">
              ออกเอกสารใบเสร็จในนามนิติบุคคลถูกต้อง สามารถนำไปหักลดหย่อนภาษีองค์กรและตรวจสอบสัดส่วนเงินส่งตรงวิสาหกิจชุมชนได้ทุกรายการ
            </p>
          </div>

          <div className="bg-[#FFFFFF] p-6 rounded-3xl border border-[#E6F2EA] space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-[#93B39A]/15 text-[#93B39A] flex items-center justify-center font-bold">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-[#1F4B38]">ทีมงานประสานงานแบบ End-to-End</h3>
            <p className="text-xs text-[#1F4B38]/80 leading-relaxed">
              มี Community Manager และไกด์มืออาชีพดูแลการเดินทาง รถรับส่ง ประกันภัย และมาตรการความปลอดภัยตลอดทริป
            </p>
          </div>
        </div>
      </div>

      {/* FEATURED B2B PACKAGES */}
      <div className="space-y-6">
        <h2 className="text-2xl font-black text-[#1F4B38]">ตัวอย่างแพ็กเกจยอดนิยมสำหรับองค์กร</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SAMPLE_B2B_PACKAGES.map((pkg) => (
            <div key={pkg.id} className="bg-[#FFFFFF] rounded-3xl border-2 border-[#E6F2EA] overflow-hidden shadow-md flex flex-col justify-between">
              <div>
                <img src={pkg.image} alt={pkg.titleTh} className="w-full h-48 object-cover" />
                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="bg-[#6C8355] text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase">
                      {pkg.type}
                    </span>
                    <span className="text-xs font-bold text-[#1F4B38]">{pkg.duration}</span>
                  </div>

                  <h3 className="text-lg font-bold text-[#1F4B38]">{pkg.titleTh}</h3>
                  <p className="text-xs text-[#1F4B38]/80 leading-relaxed">{pkg.descriptionTh}</p>

                  <div className="pt-2 flex flex-wrap gap-1.5">
                    {pkg.esgAlignment.map((esg, idx) => (
                      <span key={idx} className="bg-[#F6F8F4] text-[#6C8355] border border-[#E6F2EA] text-[10px] font-bold px-2.5 py-1 rounded-md">
                        {esg}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-[#E6F2EA]/60 mt-4 flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-[#1F4B38]/60 font-semibold block">ราคาเริ่มต้น</span>
                  <span className="text-xl font-black text-[#355E3B]">{pkg.priceStartThb.toLocaleString()} <span className="text-xs font-normal text-[#1F4B38]">THB / ท่าน</span></span>
                </div>

                <button
                  onClick={() => setShowQuoteModal(true)}
                  className="bg-[#355E3B] hover:bg-[#1F4B38] text-white font-bold text-xs px-4 py-2.5 rounded-xl transition-colors cursor-pointer"
                >
                  สนใจแพ็กเกจนี้
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* REQUEST QUOTATION MODAL */}
      {showQuoteModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-xs z-50 flex items-center justify-center p-4">
          <div className="bg-[#FFFFFF] rounded-3xl max-w-lg w-full p-6 sm:p-8 border-2 border-[#355E3B] shadow-2xl space-y-4 text-left">
            
            <div className="flex items-center justify-between border-b border-[#E6F2EA] pb-3">
              <h3 className="text-lg font-black text-[#1F4B38]">ขอใบเสนอราคาจัดทริปองค์กร</h3>
              <button 
                onClick={() => setShowQuoteModal(false)}
                className="text-[#1F4B38] font-bold text-sm hover:text-[#355E3B] cursor-pointer"
              >
                ✕
              </button>
            </div>

            {formSubmitted ? (
              <div className="py-8 text-center space-y-3">
                <div className="w-14 h-14 rounded-full bg-[#6C8355] text-white flex items-center justify-center mx-auto font-bold text-2xl">
                  ✓
                </div>
                <h4 className="text-xl font-bold text-[#1F4B38]">ส่งข้อมูลสำเร็จแล้ว!</h4>
                <p className="text-xs text-[#1F4B38]/80 max-w-xs mx-auto">
                  ทีมงาน LocalConnect B2B Sales จะติดต่อกลับท่านภายใน 24 ชั่วโมง พร้อมข้อเสนอและโครงสร้างความโปร่งใสรายได้
                </p>
                <button
                  onClick={() => {
                    setFormSubmitted(false);
                    setShowQuoteModal(false);
                  }}
                  className="bg-[#1F4B38] text-white font-bold text-xs px-6 py-2.5 rounded-xl transition-colors cursor-pointer mt-4"
                >
                  ปิดหน้าต่าง
                </button>
              </div>
            ) : (
              <form 
                onSubmit={(e) => {
                  e.preventDefault();
                  setFormSubmitted(true);
                }} 
                className="space-y-3"
              >
                <div>
                  <label className="text-xs font-bold text-[#1F4B38] block mb-1">ชื่อองค์กร / บริษัท / สถาบัน:</label>
                  <input 
                    type="text" 
                    required 
                    placeholder="เช่น บริษัท เอสซีจี จำกัด (มหาชน)" 
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    className="w-full bg-[#F6F8F4] p-3 rounded-xl border border-[#E6F2EA] text-xs font-bold text-[#1F4B38]"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-bold text-[#1F4B38] block mb-1">ชื่อผู้ติดต่อ:</label>
                    <input type="text" required placeholder="คุณสมชาย" className="w-full bg-[#F6F8F4] p-3 rounded-xl border border-[#E6F2EA] text-xs font-bold text-[#1F4B38]" />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-[#1F4B38] block mb-1">เบอร์โทรศัพท์:</label>
                    <input type="tel" required placeholder="081-234-5678" className="w-full bg-[#F6F8F4] p-3 rounded-xl border border-[#E6F2EA] text-xs font-bold text-[#1F4B38]" />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-[#1F4B38] block mb-1">จำนวนผู้ร่วมเดินทางโดยประมาณ:</label>
                  <select 
                    value={paxCount}
                    onChange={(e) => setPaxCount(e.target.value)}
                    className="w-full bg-[#F6F8F4] p-3 rounded-xl border border-[#E6F2EA] text-xs font-bold text-[#1F4B38]"
                  >
                    <option value="10-20">10 - 20 ท่าน</option>
                    <option value="30-50">30 - 50 ท่าน</option>
                    <option value="50-100">50 - 100 ท่าน</option>
                    <option value="100+">100 ท่านขึ้นไป</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-bold text-[#1F4B38] block mb-1">ความต้องการเพิ่มเติม (วัตถุประสงค์ CSR / จังหวัดที่สนใจ):</label>
                  <textarea rows={3} placeholder="เช่น สนใจปลูกป่าแนวกันไฟป่า จ.เชียงใหม่ งบประมาณ 3,500 บาท/ท่าน..." className="w-full bg-[#F6F8F4] p-3 rounded-xl border border-[#E6F2EA] text-xs font-bold text-[#1F4B38]"></textarea>
                </div>

                <button 
                  type="submit" 
                  className="w-full bg-[#355E3B] hover:bg-[#1F4B38] text-white font-bold text-sm py-3.5 rounded-2xl transition-colors cursor-pointer"
                >
                  ส่งข้อมูลขอเสนอราคา
                </button>
              </form>
            )}

          </div>
        </div>
      )}

    </div>
  );
};
