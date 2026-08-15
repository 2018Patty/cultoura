import React, { useState } from 'react';
import { SAMPLE_EXPERIENCES } from '../data/sampleData';
import { Experience } from '../types';
import { 
  PieChart, 
  ShieldCheck, 
  Users, 
  HelpCircle, 
  Sparkles, 
  Home as HomeIcon, 
  Compass, 
  Utensils, 
  Truck, 
  TreePine, 
  Award, 
  ArrowRight,
  TrendingUp,
  HeartHandshake,
  CheckCircle2,
  Calculator,
  Coins,
  Gift
} from 'lucide-react';

export const TransparencyPage: React.FC = () => {
  const [selectedExpId, setSelectedExpId] = useState<string>(SAMPLE_EXPERIENCES[0].id);
  const [paxCount, setPaxCount] = useState<number>(1);
  const [activeTab, setActiveTab] = useState<'level1' | 'level2' | 'impact'>('level1');
  const [hoveredSegment, setHoveredSegment] = useState<string | null>(null);

  const selectedExp: Experience = SAMPLE_EXPERIENCES.find(e => e.id === selectedExpId) || SAMPLE_EXPERIENCES[0];

  // Calculated values
  const unitPrice = selectedExp.priceThbPerPerson;
  const totalPrice = unitPrice * paxCount;

  // Level 1 First-Level Amounts
  const communityThb = Math.round((totalPrice * selectedExp.breakdownLevel1.communitySharePct) / 100);
  const gatewayThb = Math.round((totalPrice * selectedExp.breakdownLevel1.paymentGatewayPct) / 100);
  const managerThb = Math.round((totalPrice * selectedExp.breakdownLevel1.communityManagerPct) / 100);
  const platformThb = Math.round((totalPrice * selectedExp.breakdownLevel1.platformDevOpsPct) / 100);

  // Level 2 Community Distribution Amounts (within communityThb)
  const homestayThb = Math.round((communityThb * selectedExp.distributionLevel2.homestayPct) / 100);
  const guideThb = Math.round((communityThb * selectedExp.distributionLevel2.guideLeaderPct) / 100);
  const mealsThb = Math.round((communityThb * selectedExp.distributionLevel2.localMealsPct) / 100);
  const transportThb = Math.round((communityThb * selectedExp.distributionLevel2.localTransportPct) / 100);
  const fundThb = Math.round((communityThb * selectedExp.distributionLevel2.communityFundPct) / 100);
  const handicraftThb = Math.round((communityThb * (selectedExp.distributionLevel2.handicraftPct ?? 0)) / 100);
  const travelInsuranceThb = Math.round((communityThb * (selectedExp.distributionLevel2.insurancePct ?? 0)) / 100);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12 text-left">
      
      {/* PAGE HERO HEADER */}
      <div className="bg-gradient-to-r from-[#1F4B38] via-[#14301F] to-[#1F4B38] text-[#F6F8F4] p-8 sm:p-12 rounded-3xl border-2 border-[#355E3B] shadow-2xl space-y-6 relative overflow-hidden">
        
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#355E3B]/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-3xl space-y-3 relative z-10">
          <div className="inline-flex items-center gap-2 bg-[#355E3B] text-white px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider">
            <PieChart className="w-4 h-4" />
            <span>LocalConnect Core Signature Feature — โปร่งใส ตรวจสอบได้</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white leading-tight">
            ห่วงโซ่คุณค่าเชื่อมโยงชุมชน
          </h1>

          <p className="text-sm sm:text-base text-[#E6F2EA] leading-relaxed font-medium">
            บน LocalConnect ทุกการจองเปิดเผยโครงสร้างสัดส่วนการกระจายรายได้จริง นักท่องเที่ยวสามารถเห็นได้ชัดเจนว่าเงินค่าแพ็กเกจส่งตรงถึงมือชุมชนวิสาหกิจ โฮมสเตย์ และกองทุนพัฒนาหมู่บ้านเท่าไร
          </p>

          <div className="pt-2 flex flex-wrap gap-4 text-xs font-bold text-[#B8D1C1]">
            <span className="flex items-center gap-1">
              <CheckCircle2 className="w-4 h-4 text-[#B8D1C1]" /> ชุมชนรับรายได้หลัก 76% - 78%
            </span>
            <span className="flex items-center gap-1">
              <CheckCircle2 className="w-4 h-4 text-[#B8D1C1]" /> กองทุนพัฒนาชุมชน 10% - 15%
            </span>
            <span className="flex items-center gap-1">
              <CheckCircle2 className="w-4 h-4 text-[#B8D1C1]" /> ปราศจากมาร์จิ้นซ่อนเร้น
            </span>
          </div>
        </div>

      </div>

      {/* INTERACTIVE CONTROLS BAR: PACKAGE SELECTOR & PAX CALCULATOR */}
      <div className="bg-[#FFFFFF] p-6 rounded-3xl border-2 border-[#E6F2EA] shadow-lg space-y-4">
        <div className="flex items-center justify-between border-b border-[#E6F2EA] pb-3">
          <h2 className="text-base font-bold text-[#1F4B38] flex items-center gap-2">
            <Calculator className="w-5 h-5 text-[#355E3B]" />
            คำนวณสัดส่วนรายได้แบบเรียลไทม์ (Live Calculator)
          </h2>
          <span className="text-xs text-[#6C8355] font-semibold bg-[#F6F8F4] px-3 py-1 rounded-full border border-[#E6F2EA]">
            ราคาแพ็กเกจปัจจุบัน: {unitPrice.toLocaleString()} THB / ท่าน
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          
          {/* Select Package Dropdown */}
          <div className="md:col-span-7 space-y-1.5">
            <label className="text-xs font-bold text-[#1F4B38] block">เลือกแพ็กเกจท่องเที่ยวชุมชน:</label>
            <select
              value={selectedExpId}
              onChange={(e) => setSelectedExpId(e.target.value)}
              className="w-full bg-[#F6F8F4] p-3 rounded-2xl border-2 border-[#E6F2EA] text-xs sm:text-sm font-bold text-[#1F4B38] focus:outline-hidden cursor-pointer"
            >
              {SAMPLE_EXPERIENCES.map((exp) => (
                <option key={exp.id} value={exp.id}>
                  {exp.titleTh} ({exp.priceThbPerPerson.toLocaleString()} THB/ท่าน — {exp.communityNameTh})
                </option>
              ))}
            </select>
          </div>

          {/* Group Size Slider */}
          <div className="md:col-span-5 space-y-1.5 bg-[#F6F8F4] p-3 rounded-2xl border border-[#E6F2EA]">
            <div className="flex items-center justify-between text-xs font-bold text-[#1F4B38]">
              <span>จำนวนผู้เดินทาง:</span>
              <span className="text-[#355E3B] font-black text-sm">{paxCount} ท่าน</span>
            </div>
            <input 
              type="range" 
              min="1" 
              max="20" 
              value={paxCount}
              onChange={(e) => setPaxCount(parseInt(e.target.value))}
              className="w-full accent-[#355E3B] cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-[#1F4B38]/60 font-semibold">
              <span>1 ท่าน</span>
              <span>10 ท่าน</span>
              <span>20 ท่าน</span>
            </div>
          </div>

        </div>

        {/* Total Highlight */}
        <div className="bg-[#F6F8F4] p-4 rounded-2xl border border-[#E6F2EA] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <span className="text-xs font-semibold text-[#1F4B38]/80 block">ยอดรวมงบประมาณทริปทั้งหมด:</span>
            <span className="text-2xl font-black text-[#355E3B]">{totalPrice.toLocaleString()} THB</span>
          </div>

          <div className="flex items-center gap-3">
            <div className="text-right">
              <span className="text-xs font-bold text-[#6C8355] block">เงินส่งตรงถึงวิสาหกิจชุมชน ({selectedExp.breakdownLevel1.communitySharePct}%):</span>
              <span className="text-xl font-black text-[#6C8355]">{communityThb.toLocaleString()} THB</span>
            </div>
          </div>
        </div>
      </div>

      {/* 3 MAIN INTERACTIVE TABS */}
      <div className="space-y-8">
        
        <div className="flex justify-center border-b-2 border-[#E6F2EA] gap-2 sm:gap-6">
          {[
            { id: 'level1', label: '1. รายได้ถูกแบ่งอย่างไร (First-Level Breakdown)' },
            { id: 'level2', label: '2. ชุมชนได้รับเท่าไร (Community Distribution)' },
            { id: 'impact', label: '3. ผลกระทบที่เกิดขึ้นกับชุมชน (Impact Summary)' }
          ].map((t) => (
            <button
              key={t.id}
              onClick={() => setActiveTab(t.id as any)}
              className={`pb-4 text-xs sm:text-base font-bold transition-all border-b-4 -mb-1 cursor-pointer ${
                activeTab === t.id
                  ? 'border-[#355E3B] text-[#355E3B]'
                  : 'border-transparent text-[#1F4B38]/60 hover:text-[#1F4B38]'
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* TAB 1: FIRST-LEVEL PRICE BREAKDOWN */}
        {activeTab === 'level1' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center animate-in fade-in duration-200">
            
            {/* SVG DONUT CHART VISUALIZATION */}
            <div className="lg:col-span-5 bg-[#FFFFFF] p-8 rounded-3xl border-2 border-[#E6F2EA] shadow-md flex flex-col items-center justify-center space-y-4">
              <div className="relative w-64 h-64 flex items-center justify-center">
                <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-90">
                  {/* Donut Slices */}
                  {/* Community Share: 77% */}
                  <circle
                    cx="50" cy="50" r="38"
                    fill="transparent"
                    stroke="#6C8355"
                    strokeWidth="16"
                    strokeDasharray={`${77 * 2.38} ${100 * 2.38}`}
                    strokeDashoffset="0"
                    className="hover:opacity-90 transition-opacity cursor-pointer"
                    onMouseEnter={() => setHoveredSegment('Community')}
                    onMouseLeave={() => setHoveredSegment(null)}
                  />
                  {/* Platform Ops: 14% */}
                  <circle
                    cx="50" cy="50" r="38"
                    fill="transparent"
                    stroke="#355E3B"
                    strokeWidth="16"
                    strokeDasharray={`${14 * 2.38} ${100 * 2.38}`}
                    strokeDashoffset={`-${77 * 2.38}`}
                    className="hover:opacity-90 transition-opacity cursor-pointer"
                    onMouseEnter={() => setHoveredSegment('Platform')}
                    onMouseLeave={() => setHoveredSegment(null)}
                  />
                  {/* Community Manager: 4% */}
                  <circle
                    cx="50" cy="50" r="38"
                    fill="transparent"
                    stroke="#93B39A"
                    strokeWidth="16"
                    strokeDasharray={`${4 * 2.38} ${100 * 2.38}`}
                    strokeDashoffset={`-${(77 + 14) * 2.38}`}
                    className="hover:opacity-90 transition-opacity cursor-pointer"
                  />
                  {/* Payment Gateway: 3% */}
                  <circle
                    cx="50" cy="50" r="38"
                    fill="transparent"
                    stroke="#93B39A"
                    strokeWidth="16"
                    strokeDasharray={`${3 * 2.38} ${100 * 2.38}`}
                    strokeDashoffset={`-${(77 + 14 + 4) * 2.38}`}
                    className="hover:opacity-90 transition-opacity cursor-pointer"
                  />
                </svg>

                {/* Donut Center Label */}
                <div className="absolute text-center">
                  <span className="text-[10px] font-bold text-[#1F4B38]/60 uppercase block">งบรวม ({paxCount} ท่าน)</span>
                  <span className="text-xl font-black text-[#1F4B38]">{totalPrice.toLocaleString()}</span>
                  <span className="text-[10px] text-[#6C8355] font-bold block">THB</span>
                </div>
              </div>

              <p className="text-xs text-center text-[#1F4B38]/70 font-semibold">
                {hoveredSegment ? `หมวดที่เลือก: ${hoveredSegment}` : 'ชี้บนแผนภูมิวงกลมเพื่อดูสัดส่วนแต่ละส่วน'}
              </p>
            </div>

            {/* BREAKDOWN CARDS LIST */}
            <div className="lg:col-span-7 space-y-3">
              
              <div className="bg-[#FFFFFF] p-4 rounded-2xl border-2 border-[#6C8355] flex items-center justify-between shadow-xs">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#6C8355] text-white font-black text-sm flex items-center justify-center">
                    77%
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1F4B38] text-sm">ชุมชนวิสาหกิจได้รับตรง (Community Direct Share)</h3>
                    <p className="text-xs text-[#6C8355]">โฮมสเตย์, ไกด์, อาหารท้องถิ่น, ขนส่ง, และกองทุนหมู่บ้าน</p>
                  </div>
                </div>
                <span className="text-base font-black text-[#6C8355]">{communityThb.toLocaleString()} THB</span>
              </div>

              <div className="bg-[#FFFFFF] p-4 rounded-2xl border border-[#E6F2EA] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#355E3B] text-white font-black text-sm flex items-center justify-center">
                    14%
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1F4B38] text-sm">พัฒนาแพลตฟอร์ม & การดำเนินงาน (Platform Ops)</h3>
                    <p className="text-xs text-[#1F4B38]/70">ดูแลระบบเซิร์ฟเวอร์ การตลาด การจับคู่ B2C/B2B</p>
                  </div>
                </div>
                <span className="text-sm font-bold text-[#1F4B38]">{platformThb.toLocaleString()} THB</span>
              </div>

              <div className="bg-[#FFFFFF] p-4 rounded-2xl border border-[#E6F2EA] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#93B39A] text-white font-black text-sm flex items-center justify-center">
                    4%
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1F4B38] text-sm">ผู้จัดการการท่องเที่ยวชุมชน (Community Manager)</h3>
                    <p className="text-xs text-[#1F4B38]/70">ค่าประสานงานในพื้นที่ ตรวจสอบคุณภาพความปลอดภัย</p>
                  </div>
                </div>
                <span className="text-sm font-bold text-[#1F4B38]">{managerThb.toLocaleString()} THB</span>
              </div>

              <div className="bg-[#FFFFFF] p-4 rounded-2xl border border-[#E6F2EA] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#93B39A] text-white font-black text-sm flex items-center justify-center">
                    3%
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1F4B38] text-sm">ช่องทางชำระเงิน (Payment Gateway)</h3>
                    <p className="text-xs text-[#1F4B38]/70">ค่าธรรมเนียมธุรกรรม PromptPay / บัตรเครดิต</p>
                  </div>
                </div>
                <span className="text-sm font-bold text-[#1F4B38]">{gatewayThb.toLocaleString()} THB</span>
              </div>

            </div>

          </div>
        )}

        {/* TAB 2: SECOND-LEVEL COMMUNITY DISTRIBUTION */}
        {activeTab === 'level2' && (
          <div className="space-y-8 animate-in fade-in duration-200">
            
            <div className="bg-[#6C8355] text-white p-6 rounded-3xl space-y-2">
              <span className="bg-[#F6F8F4] text-[#6C8355] font-black text-[10px] px-3 py-1 rounded-full uppercase">
                การกระจายรายได้ภายในชุมชน (Within the {selectedExp.breakdownLevel1.communitySharePct}% Community Share)
              </span>
              <h3 className="text-xl font-bold">
                วิสาหกิจชุมชนกระจายเงิน {communityThb.toLocaleString()} THB ไปสู่ใครบ้าง?
              </h3>
              <p className="text-xs text-[#F6F8F4]/90">
                เราส่งเสริมการสร้างงานหลากหลายอาชีพในหมู่บ้าน ไม่ใช่เพียงเจ้าของสถานที่คนเดียว
              </p>
            </div>

            {/* HUB-AND-SPOKE VALUE CHAIN DIAGRAM */}
            <div className="bg-[#FFFFFF] p-6 sm:p-10 rounded-3xl border-2 border-[#E6F2EA]">

              {/* Hub Node: the money itself */}
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 rounded-full bg-[#6C8355] text-white flex items-center justify-center shadow-lg border-4 border-[#F6F8F4] ring-2 ring-[#6C8355]/30">
                  <Coins className="w-9 h-9" />
                </div>
                <span className="mt-2 text-[10px] font-bold text-[#1F4B38]/70 uppercase tracking-wide">รายได้ชุมชนทั้งหมด</span>
                <span className="text-xl font-black text-[#6C8355]">{communityThb.toLocaleString()} THB</span>
                <div className="w-0.5 h-8 bg-[#B8D1C1] mt-2" />
              </div>

              {/* Stakeholder Icons connected to the hub — self-sizing so the trunk line always
                  matches the actual (post-filter) row width and stays centered */}
              <div className="flex justify-center">
                <div className="relative inline-flex flex-wrap justify-center gap-x-6 gap-y-10 pt-8">
                  {/* Trunk line spans exactly from the first icon's spoke to the last icon's spoke
                      (each item is w-32, so its spoke sits 64px/w-16 in from the item's outer edge) */}
                  <div className="hidden sm:block absolute top-0 left-16 right-16 h-0.5 bg-[#B8D1C1]" />
                  {[
                    { icon: Compass, pct: selectedExp.distributionLevel2.guideLeaderPct, amount: guideThb, color: '#6C8355', label: 'มัคคุเทศก์ / ผู้นำทางชุมชน', who: 'กลุ่มไกด์และผู้นำทางท้องถิ่น' },
                    { icon: Utensils, pct: selectedExp.distributionLevel2.localMealsPct, amount: mealsThb, color: '#355E3B', label: 'อาหารพื้นบ้านวัตถุดิบท้องถิ่น', who: 'กลุ่มแม่บ้านปรุงอาหารและเกษตรกร' },
                    { icon: Gift, pct: selectedExp.distributionLevel2.handicraftPct ?? 0, amount: handicraftThb, color: '#93B39A', label: 'ของเล่นพื้นบ้าน / งานหัตถกรรม', who: 'กลุ่มผู้สูงอายุและช่างฝีมือท้องถิ่น' },
                    { icon: ShieldCheck, pct: selectedExp.distributionLevel2.insurancePct ?? 0, amount: travelInsuranceThb, color: '#355E3B', label: 'ประกันเดินทาง', who: 'ความคุ้มครองนักท่องเที่ยวตลอดทริป' },
                    { icon: HomeIcon, pct: selectedExp.distributionLevel2.homestayPct, amount: homestayThb, color: '#93B39A', label: 'โฮมสเตย์ / ที่พักเรือนไม้', who: 'เจ้าของบ้านพักในชุมชน' },
                    { icon: Truck, pct: selectedExp.distributionLevel2.localTransportPct, amount: transportThb, color: '#93B39A', label: 'รถท้องถิ่น / เรือชุมชน', who: 'กลุ่มคนขับรถและเรือรับส่ง' },
                    { icon: TreePine, pct: selectedExp.distributionLevel2.communityFundPct, amount: fundThb, color: '#6C8355', label: 'กองทุนกลางพัฒนาชุมชน', who: 'คณะกรรมการกองทุนหมู่บ้าน' },
                  ].filter((s) => s.pct > 0).map((s, i) => {
                    const Icon = s.icon;
                    return (
                      <div key={i} className="relative flex flex-col items-center text-center gap-1 w-32">
                        {/* Spoke connecting this icon up to the trunk line */}
                        <div
                          className="hidden sm:block absolute -top-8 left-1/2 -translate-x-1/2 w-0.5 h-8"
                          style={{ backgroundColor: '#B8D1C1' }}
                        />
                        <div
                          className="w-14 h-14 rounded-2xl flex items-center justify-center border-2 shadow-xs"
                          style={{ backgroundColor: `${s.color}26`, borderColor: `${s.color}66`, color: s.color }}
                        >
                          <Icon className="w-7 h-7" />
                        </div>
                        <span className="text-lg font-black" style={{ color: s.color }}>{s.pct}%</span>
                        <h4 className="text-xs font-bold text-[#1F4B38]">{s.label}</h4>
                        <p className="text-xs font-extrabold text-[#355E3B]">{s.amount.toLocaleString()} THB</p>
                        <p className="text-[10px] text-[#1F4B38]/70">{s.who}</p>
                      </div>
                    );
                  })}
                </div>
              </div>

            </div>

          </div>
        )}

        {/* TAB 3: IMPACT SUMMARY */}
        {activeTab === 'impact' && (
          <div className="bg-[#FFFFFF] p-8 rounded-3xl border-2 border-[#E6F2EA] space-y-6 animate-in fade-in duration-200">
            <h3 className="text-2xl font-black text-[#1F4B38]">
              ผลกระทบทางสังคมและสิ่งแวดล้อมที่ทริปนี้สร้างขึ้น (Quantified Impact)
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-[#F6F8F4] p-6 rounded-2xl border border-[#E6F2EA] space-y-2">
                <span className="text-xs font-bold text-[#6C8355] block">การจ้างงานในท้องถิ่น</span>
                <p className="text-3xl font-black text-[#1F4B38]">{selectedExp.impact.jobsSupported * paxCount} <span className="text-sm">อาชีพ</span></p>
                <p className="text-xs text-[#1F4B38]/70">สนับสนุนรายได้ไกด์ แม่บ้าน คนขับรถ และปราชญ์ชุมชน</p>
              </div>

              <div className="bg-[#F6F8F4] p-6 rounded-2xl border border-[#E6F2EA] space-y-2">
                <span className="text-xs font-bold text-[#6C8355] block">การอนุรักษ์ธรรมชาติ</span>
                <p className="text-3xl font-black text-[#6C8355]">{selectedExp.impact.treesPlanted * paxCount} <span className="text-sm">ต้น/แนวกันไฟ</span></p>
                <p className="text-xs text-[#1F4B38]/70">สมทบทุนจัดซื้ออุปกรณ์ดับไฟป่าและฟื้นฟูป่าต้นน้ำ</p>
              </div>

              <div className="bg-[#F6F8F4] p-6 rounded-2xl border border-[#E6F2EA] space-y-2">
                <span className="text-xs font-bold text-[#6C8355] block">เงินสะสมกองทุนพัฒนา</span>
                <p className="text-3xl font-black text-[#355E3B]">{fundThb.toLocaleString()} <span className="text-sm">THB</span></p>
                <p className="text-xs text-[#1F4B38]/70">เข้าสู่บัญชีกองทุนกลางหมู่บ้านโดยตรง</p>
              </div>
            </div>

            <div className="pt-4 border-t border-[#E6F2EA] space-y-2">
              <h4 className="font-bold text-sm text-[#1F4B38]">มรดกทางวัฒนธรรมที่ได้รับการสืบสาน:</h4>
              <div className="flex flex-wrap gap-2">
                {selectedExp.impact.culturalPreservationItems.map((item, i) => (
                  <span key={i} className="bg-[#F6F8F4] text-[#1F4B38] px-3 py-1 rounded-full text-xs font-bold">
                    ✓ {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}

      </div>

      {/* WHY TRANSPARENCY MATTERS SECTION */}
      <section className="bg-[#F6F8F4]/70 p-8 sm:p-10 rounded-3xl border-2 border-[#E6F2EA] space-y-6">
        <div className="max-w-2xl space-y-2">
          <span className="text-xs font-bold text-[#355E3B] uppercase tracking-wider">ทำไมความโปร่งใสจึงสำคัญ?</span>
          <h2 className="text-2xl font-black text-[#1F4B38]">
            ยุติตลาดท่องเที่ยวที่กดราคาชุมชน (No Greenwashing Commitment)
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs leading-relaxed text-[#1F4B38]">
          <div className="bg-[#FFFFFF] p-5 rounded-2xl border border-[#E6F2EA] space-y-2">
            <h3 className="font-bold text-sm text-[#355E3B]">1. ป้องกันการหักค่าหัวคิวที่ไม่เป็นธรรม</h3>
            <p>
              เอเจนต์ท่องเที่ยวทั่วไปมักหักส่วนแบ่งสูงถึง 40% - 60% ทำให้ชาวบ้านผู้ทำงานจริงได้เงินไม่คุ้มค่าเหนื่อย LocalConnect จำกัดค่าแพลตฟอร์มเพียง 14% และให้ชุมชนได้รับหลัก 77%
            </p>
          </div>

          <div className="bg-[#FFFFFF] p-5 rounded-2xl border border-[#E6F2EA] space-y-2">
            <h3 className="font-bold text-sm text-[#6C8355]">2. สร้างกองทุนสวัสดิการชุมชนที่ยั่งยืน</h3>
            <p>
              ทุกทริปมีการหักเข้ากองทุนกลางของหมู่บ้านอย่างเป็นระบบ เพื่อใช้จ่ายตามวัตถุประสงค์ของแต่ละชุมชน
            </p>
          </div>
        </div>
      </section>

    </div>
  );
};
