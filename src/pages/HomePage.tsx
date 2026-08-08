import React, { useState } from 'react';
import { PageId, Experience } from '../types';
import { SAMPLE_EXPERIENCES, SAMPLE_COMMUNITIES } from '../data/sampleData';
import { 
  Search, 
  MapPin, 
  Compass, 
  PieChart, 
  ShieldCheck, 
  Users, 
  ArrowRight, 
  Star, 
  Sparkles, 
  CheckCircle2, 
  Building2, 
  Heart,
  TrendingUp,
  Leaf
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onSelectExperience: (exp: Experience) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onSelectExperience }) => {
  const [selectedRegion, setSelectedRegion] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const featuredExperiences = SAMPLE_EXPERIENCES.filter(e => e.isFeatured);

  return (
    <div className="space-y-16 pb-12">
      
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#E7DBB8]/60 via-[#FAF4E9] to-[#FAF4E9] pt-12 pb-20 px-4 sm:px-6 lg:px-8 border-b border-[#E7DBB8]">
        
        {/* Background Decorative Motif */}
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#B7C5A1]/30 blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 -left-24 w-80 h-80 rounded-full bg-[#D47A55]/20 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6 text-left">
              
              <div className="inline-flex items-center gap-2 bg-[#5E7045]/15 border border-[#5E7045]/30 text-[#5E7045] px-4 py-1.5 rounded-full text-xs font-bold shadow-2xs">
                <Leaf className="w-3.5 h-3.5 text-[#5E7045]" />
                <span>แพลตฟอร์มท่องเที่ยวชุมชนแท้ 100% ความโปร่งใสตรวจสอบได้</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#5A3A28] leading-[1.15] tracking-tight">
                เชื่อมโยงวิถีชีวิต <br className="hidden sm:block" />
                <span className="text-[#C25E2E]">กระจายรายได้ตรงถึงชุมชน</span>
              </h1>

              <p className="text-base sm:text-lg text-[#5A3A28]/85 font-medium leading-relaxed max-w-2xl">
                สัมผัสคุณค่าวัฒนธรรม อาหาร และธรรมชาติผ่านประสบการณ์ชุมชนแท้ (CBT) พร้อมระบบตรวจสอบเส้นทางเงินรายได้ ชุมชนได้รับประโยชน์เต็ม 100%
              </p>

              {/* SEARCH BOX MODULE */}
              <div className="bg-white p-3 sm:p-4 rounded-3xl border-2 border-[#E7DBB8] shadow-xl space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  
                  {/* Search Query */}
                  <div className="bg-[#FAF4E9] p-2.5 rounded-2xl border border-[#E7DBB8] flex items-center gap-2">
                    <Search className="w-4 h-4 text-[#C25E2E] shrink-0" />
                    <input 
                      type="text" 
                      placeholder="ค้นหากิจกรรม หรือ ชุมชน..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="bg-transparent text-xs sm:text-sm font-semibold text-[#5A3A28] focus:outline-hidden w-full placeholder:text-[#5A3A28]/50"
                    />
                  </div>

                  {/* Region Select */}
                  <div className="bg-[#FAF4E9] p-2.5 rounded-2xl border border-[#E7DBB8] flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#5E7045] shrink-0" />
                    <select 
                      value={selectedRegion}
                      onChange={(e) => setSelectedRegion(e.target.value)}
                      className="bg-transparent text-xs sm:text-sm font-semibold text-[#5A3A28] focus:outline-hidden w-full cursor-pointer"
                    >
                      <option value="all">ทุกภูมิภาคทั่วไทย</option>
                      <option value="north">ภาคเหนือ (เชียงใหม่/เชียงราย)</option>
                      <option value="south">ภาคใต้ (นครศรีธรรมราช)</option>
                      <option value="northeast">ภาคอีสาน (อุดรธานี)</option>
                    </select>
                  </div>

                  {/* Search CTA */}
                  <button 
                    onClick={() => onNavigate('explore')}
                    className="bg-[#C25E2E] hover:bg-[#A84E23] text-white rounded-2xl font-bold text-sm py-3 px-4 transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Compass className="w-4 h-4" />
                    <span>ค้นหาทริปชุมชน</span>
                  </button>

                </div>

                {/* Popular Keywords */}
                <div className="flex flex-wrap items-center gap-2 pt-1 text-xs text-[#5A3A28]/70">
                  <span className="font-bold text-[#5A3A28]">ยอดนิยม:</span>
                  {['ชาดอยปู่หมื่น', 'มัดย้อมคีรีวง', 'มรดกโลกบ้านเชียง', 'โฮมสเตย์', 'CSR องค์กร'].map((kw, i) => (
                    <button 
                      key={i}
                      onClick={() => onNavigate('explore')}
                      className="bg-[#F2E6C9]/60 hover:bg-[#E7DBB8] text-[#5A3A28] px-2.5 py-0.5 rounded-full font-semibold transition-colors cursor-pointer"
                    >
                      {kw}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quick Trust Numbers */}
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-[#E7DBB8]/80 text-left">
                <div>
                  <p className="text-2xl font-black text-[#5A3A28]">77% - 82%</p>
                  <p className="text-xs font-semibold text-[#C25E2E]">ส่งตรงถึงชุมชนวิสาหกิจ</p>
                </div>
                <div>
                  <p className="text-2xl font-black text-[#5A3A28]">48+</p>
                  <p className="text-xs font-semibold text-[#5E7045]">ชุมชนต้นแบบทั่วไทย</p>
                </div>
                <div>
                  <p className="text-2xl font-black text-[#5A3A28]">100%</p>
                  <p className="text-xs font-semibold text-[#5A3A28]">โปร่งใส ตรวจสอบได้</p>
                </div>
              </div>

            </div>

            {/* Right Hero Image Card */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden border-4 border-white shadow-2xl bg-white">
                <img 
                  src="https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&w=1000&q=80" 
                  alt="Doi Pu Muen Lahu Culture" 
                  className="w-full h-[420px] object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#3E2619]/90 via-[#3E2619]/30 to-transparent flex flex-col justify-end p-6 text-white text-left">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="bg-[#C25E2E] text-white text-[10px] font-black px-2.5 py-1 rounded-full uppercase tracking-wider">
                      ทริปแนะนำสัปดาห์นี้
                    </span>
                    <span className="bg-black/40 backdrop-blur-md text-white text-xs font-bold px-2.5 py-1 rounded-full flex items-center gap-1">
                      <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" /> 4.95
                    </span>
                  </div>
                  <h3 className="text-xl font-bold leading-snug">
                    เรียนรู้วิถีชาออร์แกนิกและชนเผ่าลาหู่ ดอยปู่หมื่น
                  </h3>
                  <p className="text-xs text-[#E7DBB8] mt-1">
                    จิบบอกชาพระราชทาน และสัมผัสวิถีชีวิตคนอยู่กับป่า
                  </p>
                  
                  {/* Revenue Teaser Badge */}
                  <div className="mt-4 bg-white/10 backdrop-blur-md p-3 rounded-2xl border border-white/20 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-[#E7DBB8] block font-semibold">รายได้ตรงสู่ชุมชน</span>
                      <span className="text-sm font-extrabold text-[#B7C5A1]">2,000 THB (77%)</span>
                    </div>
                    <button 
                      onClick={() => {
                        onSelectExperience(SAMPLE_EXPERIENCES[0]);
                        onNavigate('detail');
                      }}
                      className="bg-white text-[#5A3A28] hover:bg-[#FAF4E9] font-bold text-xs px-3.5 py-2 rounded-xl transition-colors cursor-pointer"
                    >
                      ดูรายละเอียด →
                    </button>
                  </div>
                </div>
              </div>

              {/* Floating Floating Badge */}
              <div className="absolute -bottom-6 -left-6 bg-[#FAF4E9] p-3.5 rounded-2xl border-2 border-[#E7DBB8] shadow-xl flex items-center gap-3 hidden sm:flex">
                <div className="w-10 h-10 rounded-xl bg-[#5E7045] text-white flex items-center justify-center font-bold">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div className="text-left">
                  <p className="text-xs font-black text-[#5A3A28]">Verified CBT Standard</p>
                  <p className="text-[10px] font-semibold text-[#5E7045]">ได้รับการรับรองมาตรฐานชุมชน</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 2. STAR FEATURE BANNER: REVENUE TRANSPARENCY PROMOTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-[#5A3A28] via-[#3E2619] to-[#5A3A28] rounded-3xl p-8 sm:p-10 text-white shadow-2xl border-2 border-[#C25E2E] relative overflow-hidden text-left">
          
          <div className="absolute top-0 right-0 translate-x-8 -translate-y-8 w-64 h-64 rounded-full bg-[#C25E2E]/20 blur-2xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-3">
              <div className="inline-flex items-center gap-1.5 bg-[#C25E2E] text-white px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider">
                <PieChart className="w-3.5 h-3.5" />
                <span>ไฮไลต์สำคัญของแบรนด์ — Cultoura Signature UI</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-white">
                "ห่วงโซ่คุณค่าเชื่อมโยงชุมชน" — นวัตกรรมความโปร่งใสรายได้
              </h2>
              <p className="text-sm text-[#E7DBB8] leading-relaxed max-w-2xl">
                เราเชื่อว่าการท่องเที่ยวที่ยั่งยืนเริ่มต้นจากความซื่อสัตย์ บน Cultoura นักท่องเที่ยวสามารถตรวจสอบย้อนกลับได้ทันทีว่าค่าทริปทุกบาทถูกกระจายไปสู่ Homestay, ไกด์ท้องถิ่น, มื้ออาหาร, และกองทุนพัฒนาชุมชนเท่าไร
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
              <button
                onClick={() => onNavigate('transparency')}
                className="bg-[#C25E2E] hover:bg-[#A84E23] text-white px-6 py-4 rounded-2xl font-bold text-sm transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer border border-[#D47A55]"
              >
                <PieChart className="w-4 h-4" />
                <span>เปิดดูความโปร่งใสแบบ Interactive</span>
              </button>
              <div className="text-center">
                <span className="text-[11px] text-[#B7C5A1] font-medium">
                  ✓ แสดงสัดส่วนชัดเจนทั้ง B2C และ B2B
                </span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. FEATURED EXPERIENCES SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 text-left border-b border-[#E7DBB8] pb-4">
          <div>
            <div className="flex items-center gap-2 text-[#C25E2E] text-xs font-bold uppercase tracking-wider mb-1">
              <Sparkles className="w-4 h-4" />
              <span>ประสบการณ์ชุมชนยอดนิยม</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#5A3A28]">
              คัดสรรกิจกรรมวิถีไทยแท้ พร้อมจองง่ายในคลิกเดียว
            </h2>
          </div>

          <button
            onClick={() => onNavigate('explore')}
            className="text-[#C25E2E] hover:text-[#A84E23] font-bold text-sm flex items-center gap-1 transition-colors cursor-pointer"
          >
            <span>ดูประสบการณ์ทั้งหมด ({SAMPLE_EXPERIENCES.length})</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Experience Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredExperiences.map((exp) => (
            <div 
              key={exp.id}
              className="bg-[#FFFDF8] rounded-3xl border-2 border-[#E7DBB8] overflow-hidden shadow-md hover:shadow-xl transition-all group flex flex-col justify-between text-left"
            >
              <div>
                {/* Card Image */}
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={exp.coverImage} 
                    alt={exp.titleTh}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                  <div className="absolute top-3 left-3 flex items-center gap-1.5">
                    <span className="bg-[#5A3A28]/90 text-white text-[11px] font-bold px-3 py-1 rounded-full backdrop-blur-md">
                      {exp.durationText}
                    </span>
                    <span className="bg-[#5E7045] text-white text-[11px] font-bold px-2.5 py-1 rounded-full">
                      {exp.region === 'north' ? 'ภาคเหนือ' : exp.region === 'south' ? 'ภาคใต้' : 'ภาคอีสาน'}
                    </span>
                  </div>

                  {/* Rating Pill */}
                  <div className="absolute top-3 right-3 bg-white/95 text-[#5A3A28] text-xs font-bold px-2.5 py-1 rounded-full shadow-xs flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                    <span>{exp.rating}</span>
                    <span className="text-[10px] text-gray-500">({exp.reviewCount})</span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 space-y-4">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#5E7045]">
                    <MapPin className="w-3.5 h-3.5 shrink-0" />
                    <span className="truncate">{exp.communityNameTh} ({exp.locationTh})</span>
                  </div>

                  <h3 className="text-lg font-bold text-[#5A3A28] line-clamp-2 leading-snug group-hover:text-[#C25E2E] transition-colors">
                    {exp.titleTh}
                  </h3>

                  <p className="text-xs text-[#5A3A28]/75 line-clamp-2 leading-relaxed">
                    {exp.subtitleTh}
                  </p>

                  {/* Direct Community Revenue Breakdown Badge */}
                  <div className="bg-[#FAF4E9] p-3 rounded-2xl border border-[#E7DBB8] space-y-1">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-semibold text-[#5A3A28]">ชุมชนได้รับตรง:</span>
                      <span className="font-extrabold text-[#5E7045]">
                        {exp.breakdownLevel1.communitySharePct}% ({Math.round(exp.priceThbPerPerson * exp.breakdownLevel1.communitySharePct / 100).toLocaleString()} THB)
                      </span>
                    </div>
                    {/* Mini Progress Bar */}
                    <div className="w-full bg-[#E7DBB8] h-2 rounded-full overflow-hidden flex">
                      <div className="bg-[#5E7045] h-full" style={{ width: `${exp.breakdownLevel1.communitySharePct}%` }} />
                      <div className="bg-[#C25E2E] h-full" style={{ width: `${exp.breakdownLevel1.platformDevOpsPct}%` }} />
                      <div className="bg-[#D47A55] h-full" style={{ width: '9%' }} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Footer & Booking CTA */}
              <div className="p-6 pt-0 border-t border-[#E7DBB8]/40 mt-4 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-semibold text-[#5A3A28]/60 block">ราคาเริ่มต้น</span>
                  <span className="text-xl font-black text-[#C25E2E]">
                    {exp.priceThbPerPerson.toLocaleString()} <span className="text-xs font-normal text-[#5A3A28]">THB / ท่าน</span>
                  </span>
                </div>

                <button
                  onClick={() => {
                    onSelectExperience(exp);
                    onNavigate('detail');
                  }}
                  className="bg-[#5A3A28] hover:bg-[#3E2619] text-[#FAF4E9] font-bold text-xs px-4 py-2.5 rounded-xl transition-colors cursor-pointer"
                >
                  จองประสบการณ์
                </button>
              </div>
            </div>
          ))}
        </div>

      </section>

      {/* 4. WHY CULTOURA (4 PILLARS) */}
      <section className="bg-[#F2E6C9]/60 py-16 border-y border-[#E7DBB8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 text-left">
          
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold text-[#C25E2E] uppercase tracking-widest">ทำไมต้อง Cultoura</span>
            <h2 className="text-3xl font-black text-[#5A3A28]">
              ยกระดับการท่องเที่ยวชุมชนอย่างยั่งยืน
            </h2>
            <p className="text-sm text-[#5A3A28]/80">
              จุดต่างที่สร้างคุณค่าร่วมกันระหว่างนักท่องเที่ยว ชุมชน และองค์กร
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="bg-[#FFFDF8] p-6 rounded-3xl border border-[#E7DBB8] space-y-3 shadow-xs">
              <div className="w-12 h-12 rounded-2xl bg-[#C25E2E]/15 text-[#C25E2E] flex items-center justify-center font-bold">
                <PieChart className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#5A3A28]">100% Transparency</h3>
              <p className="text-xs text-[#5A3A28]/80 leading-relaxed">
                ระบบแสดงการกระจายรายได้ชัดเจน รู้ทันทีว่าเงินค่าทริปถูกจัดสรรให้โฮมสเตย์ ไกด์ และกองทุนหมู่บ้านเท่าไร
              </p>
            </div>

            <div className="bg-[#FFFDF8] p-6 rounded-3xl border border-[#E7DBB8] space-y-3 shadow-xs">
              <div className="w-12 h-12 rounded-2xl bg-[#5E7045]/15 text-[#5E7045] flex items-center justify-center font-bold">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#5A3A28]">Authentic Wisdom</h3>
              <p className="text-xs text-[#5A3A28]/80 leading-relaxed">
                สัมผัสวิถีชีวิตจริง ปราชญ์ชาวบ้านตัวจริง เรื่องราววัฒนธรรมท้องถิ่นที่ไม่ถูกปรุงแต่งเพื่อการท่องเที่ยวเชิงพาณิชย์
              </p>
            </div>

            <div className="bg-[#FFFDF8] p-6 rounded-3xl border border-[#E7DBB8] space-y-3 shadow-xs">
              <div className="w-12 h-12 rounded-2xl bg-[#D47A55]/15 text-[#D47A55] flex items-center justify-center font-bold">
                <Building2 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#5A3A28]">B2B & CSR Ready</h3>
              <p className="text-xs text-[#5A3A28]/80 leading-relaxed">
                รองรับการจัดทริปองค์กร Team Building และ Field Trip พร้อมรายงานผลกระทบมิติ ESG ชัดเจน
              </p>
            </div>

            <div className="bg-[#FFFDF8] p-6 rounded-3xl border border-[#E7DBB8] space-y-3 shadow-xs">
              <div className="w-12 h-12 rounded-2xl bg-[#8A9A5B]/15 text-[#8A9A5B] flex items-center justify-center font-bold">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#5A3A28]">Verified CBT Standard</h3>
              <p className="text-xs text-[#5A3A28]/80 leading-relaxed">
                วิสาหกิจชุมชนทุกแห่งผ่านการคัดสรรและประเมินมาตรฐานความปลอดภัย การจัดการสิ่งแวดล้อมอย่างถูกสุขลักษณะ
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 5. COMMUNITY SPOTLIGHT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-left">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-xs font-bold text-[#5E7045] uppercase tracking-wider block mb-1">ชุมชนต้นแบบในเครือข่าย</span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#5A3A28]">
              วิสาหกิจชุมชนผู้สืบสานคุณค่าท้องถิ่น
            </h2>
          </div>
          <button
            onClick={() => onNavigate('community')}
            className="text-[#5A3A28] font-bold text-sm hover:underline cursor-pointer"
          >
            ดูชุมชนทั้งหมด →
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SAMPLE_COMMUNITIES.map((c) => (
            <div 
              key={c.id} 
              className="bg-[#FFFDF8] p-6 rounded-3xl border-2 border-[#E7DBB8] space-y-4 hover:shadow-lg transition-all"
            >
              <div className="flex items-center gap-3">
                <img src={c.leaderAvatar} alt={c.leaderNameTh} className="w-12 h-12 rounded-full object-cover border-2 border-[#C25E2E]" />
                <div>
                  <h3 className="font-bold text-[#5A3A28] text-sm">{c.nameTh}</h3>
                  <p className="text-xs text-[#5E7045] font-semibold">{c.provinceTh}</p>
                </div>
              </div>

              <p className="text-xs text-[#5A3A28]/80 line-clamp-3 leading-relaxed">
                {c.storyTh}
              </p>

              <div className="bg-[#FAF4E9] p-3 rounded-2xl text-xs space-y-1">
                <span className="font-bold text-[#5A3A28] block">โครงการพัฒนาที่ชุมชนดำเนินการ:</span>
                <p className="text-[#C25E2E] font-medium">• {c.fundProjectsTh[0]}</p>
              </div>

              <button
                onClick={() => onNavigate('community')}
                className="w-full bg-[#E7DBB8] hover:bg-[#F2E6C9] text-[#5A3A28] font-bold text-xs py-2 rounded-xl transition-colors cursor-pointer"
              >
                เยี่ยมชมโปรไฟล์ชุมชน
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* 6. B2B / CORPORATE CALLOUT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#5E7045] text-white rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden text-left">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <span className="bg-[#FAF4E9] text-[#5E7045] font-black text-[11px] px-3 py-1 rounded-full uppercase tracking-wider inline-block">
                Cultoura for Business (B2B)
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-white leading-snug">
                ออกแบบทริป CSR & Team Building สำหรับองค์กรยุคใหม่
              </h2>
              <p className="text-sm text-[#FAF4E9]/90 max-w-xl leading-relaxed">
                ให้ทริปประจำปีของบริษัทคุณสร้างคุณค่าที่แท้จริงให้สังคม พร้อมรายงานผลกระทบมิติ ESG (Environment, Social, Governance) ที่ใช้อ้างอิงได้อย่างเป็นทางการ
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-3">
              <button
                onClick={() => onNavigate('b2b')}
                className="bg-[#C25E2E] hover:bg-[#A84E23] text-white font-bold text-sm px-6 py-4 rounded-2xl transition-all shadow-md text-center cursor-pointer"
              >
                ดูแพ็กเกจองค์กร & ขอใบเสนอราคา
              </button>
              <button
                onClick={() => onNavigate('b2b')}
                className="bg-white/10 hover:bg-white/20 text-white font-bold text-xs px-6 py-3 rounded-2xl transition-all text-center border border-white/20 cursor-pointer"
              >
                ดาวน์โหลดตัวอย่างรายงาน ESG Impact
              </button>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};
