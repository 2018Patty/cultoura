import React, { useState } from 'react';
import { PageId, Experience } from '../types';
import { EXPERIENCE_REVIEWS } from '../data/reviewsData';
import { 
  MapPin, 
  Clock, 
  Users, 
  Star, 
  CheckCircle2, 
  PieChart, 
  ShieldCheck, 
  Calendar, 
  ChevronRight, 
  Heart,
  Sparkles,
  ArrowLeft,
  Images
} from 'lucide-react';

interface DetailPageProps {
  experience: Experience;
  onNavigate: (page: PageId) => void;
  onStartBooking: (exp: Experience, pax: number, date: string) => void;
}

export const DetailPage: React.FC<DetailPageProps> = ({ experience, onNavigate, onStartBooking }) => {
  const [paxCount, setPaxCount] = useState<number>(2);
  const [selectedDate, setSelectedDate] = useState<string>('2026-08-25');
  const [activeTab, setActiveTab] = useState<'overview' | 'itinerary' | 'transparency' | 'reviews'>('overview');
  const [showAllPhotos, setShowAllPhotos] = useState<boolean>(false);

  const allPhotos = Array.from(new Set([experience.coverImage, ...experience.images]));
  const communityShareAmount = Math.round((experience.priceThbPerPerson * experience.breakdownLevel1.communitySharePct) / 100);
  const totalPrice = experience.priceThbPerPerson * paxCount;
  const totalCommunityShare = communityShareAmount * paxCount;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 text-left">
      
      {/* Back Button & Breadcrumbs */}
      <div className="flex items-center justify-between">
        <button
          onClick={() => onNavigate('explore')}
          className="flex items-center gap-1.5 text-xs font-bold text-[#1F4B38] bg-[#F6F8F4] hover:bg-[#E6F2EA] px-3.5 py-2 rounded-xl transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>ย้อนกลับไปรายการทริป</span>
        </button>

        <div className="flex items-center gap-2 text-xs text-[#1F4B38]/70 font-semibold">
          <span>หน้าแรก</span>
          <ChevronRight className="w-3.5 h-3.5" />
          <span>กิจกรรม</span>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-[#355E3B] truncate max-w-xs">{experience.titleTh}</span>
        </div>
      </div>

      {/* Main Experience Header */}
      <div className="space-y-3">
        <div className="flex flex-wrap items-center gap-2">
          <span className="bg-[#6C8355] text-white text-xs font-bold px-3 py-1 rounded-full">
            {experience.category === 'culture' ? '🎭 วัฒนธรรม' : experience.category === 'craft' ? '🧵 หัตถกรรม' : '🌱 ธรรมชาติ'}
          </span>
          <span className="bg-[#1F4B38] text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
            <MapPin className="w-3.5 h-3.5" /> {experience.locationTh}
          </span>
          <span className="bg-[#F6F8F4] text-[#355E3B] border border-[#355E3B] text-xs font-extrabold px-3 py-1 rounded-full flex items-center gap-1">
            <PieChart className="w-3.5 h-3.5" /> ชุมชนได้รับ {experience.breakdownLevel1.communitySharePct}% ({communityShareAmount.toLocaleString()} THB/ท่าน)
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-black text-[#1F4B38] leading-tight">
          {experience.titleTh}
        </h1>

        <p className="text-base text-[#1F4B38]/80 font-medium">
          {experience.subtitleTh}
        </p>

        <div className="flex flex-wrap items-center gap-6 pt-2 text-xs font-bold text-[#1F4B38]">
          <span className="flex items-center gap-1 text-amber-600">
            <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
            <span className="text-sm font-black">{experience.rating}</span> ({experience.reviewCount} รีวิว)
          </span>
          <span className="flex items-center gap-1">
            <Clock className="w-4 h-4 text-[#355E3B]" /> ระยะเวลา: {experience.durationText}
          </span>
          <span className="flex items-center gap-1">
            <Users className="w-4 h-4 text-[#6C8355]" /> รับกลุ่มละไม่เกิน {experience.maxGroupSize} ท่าน
          </span>
        </div>
      </div>

      {/* PHOTO GALLERY GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        <div className="lg:col-span-8 rounded-3xl overflow-hidden border-2 border-[#E6F2EA] shadow-md h-96">
          <img src={experience.coverImage} alt={experience.titleTh} className="w-full h-full object-cover" />
        </div>
        <div className="lg:col-span-4 grid grid-cols-2 lg:grid-cols-1 gap-4">
          {experience.images.slice(1, 3).map((img, i) => (
            <div key={i} className="rounded-3xl overflow-hidden border-2 border-[#E6F2EA] shadow-xs h-44">
              <img src={img} alt={`Gallery ${i}`} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>

      {/* VIEW MORE PHOTOS TOGGLE */}
      {allPhotos.length > 3 && (
        <div className="flex justify-center">
          <button
            onClick={() => setShowAllPhotos(!showAllPhotos)}
            className="flex items-center gap-2 bg-[#F6F8F4] hover:bg-[#E6F2EA] text-[#1F4B38] font-bold text-xs px-5 py-2.5 rounded-2xl border border-[#E6F2EA] transition-colors cursor-pointer"
          >
            <Images className="w-4 h-4 text-[#355E3B]" />
            {showAllPhotos ? 'ซ่อนรูปภาพ' : `ดูรูปเพิ่มเติม (ทั้งหมด ${allPhotos.length} รูป)`}
          </button>
        </div>
      )}

      {/* FULL PHOTO GALLERY SECTION */}
      {showAllPhotos && (
        <div className="space-y-4 animate-in fade-in duration-200">
          <h2 className="text-2xl font-black text-[#1F4B38]">อัลบั้มภาพทั้งหมดของทริปนี้</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {allPhotos.map((imgUrl, i) => (
              <div key={i} className="rounded-2xl overflow-hidden border border-[#E6F2EA] shadow-sm bg-white aspect-4/3">
                <img
                  src={imgUrl}
                  alt={`${experience.titleTh} photo ${i + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TWO COLUMN CONTENT LAYOUT */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* Left Primary Details Column */}
        <div className="lg:col-span-8 space-y-10">
          
          {/* Section Navigation Tabs */}
          <div className="flex border-b-2 border-[#E6F2EA] gap-4">
            {[
              { id: 'overview', label: 'รายละเอียดกิจกรรม' },
              { id: 'itinerary', label: 'กำหนดการ (Itinerary)' },
              { id: 'transparency', label: '📊 ความโปร่งใสรายได้ (Transparency)' },
              { id: 'reviews', label: 'รีวิวจากนักท่องเที่ยว' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`pb-3 text-xs sm:text-sm font-bold transition-all cursor-pointer border-b-2 -mb-0.5 ${
                  activeTab === tab.id
                    ? 'border-[#355E3B] text-[#355E3B]'
                    : 'border-transparent text-[#1F4B38]/70 hover:text-[#1F4B38]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* TAB 1: OVERVIEW */}
          {activeTab === 'overview' && (
            <div className="space-y-8 animate-in fade-in duration-200">
              
              {/* Description */}
              <div className="bg-[#FFFFFF] p-6 rounded-3xl border border-[#E6F2EA] space-y-3">
                <h3 className="text-lg font-bold text-[#1F4B38]">เกี่ยวกับประสบการณ์นี้</h3>
                <p className="text-sm text-[#1F4B38]/85 leading-relaxed">
                  {experience.descriptionTh}
                </p>
              </div>

              {/* Host Profile Card */}
              <div className="bg-[#F6F8F4] p-6 rounded-3xl border-2 border-[#E6F2EA] space-y-4">
                <div className="flex items-center gap-4">
                  <img src={experience.hostAvatar} alt={experience.hostNameTh} className="w-14 h-14 rounded-full object-cover border-2 border-[#355E3B]" />
                  <div>
                    <span className="text-[10px] font-bold text-[#6C8355] uppercase tracking-wider block">ผู้นำกิจกรรมและปราชญ์ชุมชน</span>
                    <h4 className="text-base font-bold text-[#1F4B38]">{experience.hostNameTh}</h4>
                    <p className="text-xs text-[#1F4B38]/75">{experience.hostRoleTh} ({experience.communityNameTh})</p>
                  </div>
                </div>
                <button
                  onClick={() => onNavigate('community')}
                  className="w-full bg-[#E6F2EA] hover:bg-[#F6F8F4] text-[#1F4B38] font-bold text-xs py-2.5 rounded-2xl transition-colors cursor-pointer"
                >
                  อ่านเรื่องราวและภาพรวมของชุมชนนี้ →
                </button>
              </div>

              {/* Highlights */}
              <div className="space-y-3">
                <h3 className="text-lg font-bold text-[#1F4B38]">ไฮไลต์ของกิจกรรม</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {experience.highlightsTh.map((item, index) => (
                    <div key={index} className="bg-[#FFFFFF] p-3.5 rounded-2xl border border-[#E6F2EA] flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#6C8355] shrink-0 mt-0.5" />
                      <span className="text-xs font-semibold text-[#1F4B38]">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* What is Included */}
              <div className="space-y-3">
                <h3 className="text-lg font-bold text-[#1F4B38]">สิ่งที่รวมในแพ็กเกจ</h3>
                <div className="bg-[#FFFFFF] p-5 rounded-3xl border border-[#E6F2EA] space-y-2 text-xs font-semibold text-[#1F4B38]">
                  {experience.includedTh.map((inc, i) => (
                    <p key={i} className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#355E3B]" />
                      {inc}
                    </p>
                  ))}
                </div>
              </div>

            </div>
          )}

          {/* TAB 2: ITINERARY */}
          {activeTab === 'itinerary' && (
            <div className="bg-[#FFFFFF] p-6 rounded-3xl border border-[#E6F2EA] space-y-6 animate-in fade-in duration-200">
              <h3 className="text-lg font-bold text-[#1F4B38]">กำหนดการทริปโดยสังเขป</h3>
              <div className="space-y-6 relative before:absolute before:inset-0 before:left-3.5 before:w-0.5 before:bg-[#E6F2EA]">
                {experience.itinerary.map((item, idx) => (
                  <div key={idx} className="relative pl-10 space-y-1">
                    <span className="absolute left-1.5 top-1.5 w-4 h-4 rounded-full bg-[#355E3B] border-2 border-white" />
                    <span className="text-xs font-black text-[#355E3B] bg-[#F6F8F4] px-2.5 py-0.5 rounded-full border border-[#E6F2EA]">
                      {item.time}
                    </span>
                    <h4 className="text-sm font-bold text-[#1F4B38] pt-1">{item.titleTh}</h4>
                    <p className="text-xs text-[#1F4B38]/80">{item.descTh}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: EMBEDDED REVENUE TRANSPARENCY MODULE */}
          {(activeTab === 'transparency' || activeTab === 'overview') && (
            <div className="bg-gradient-to-br from-[#1F4B38] to-[#14301F] text-white p-6 sm:p-8 rounded-3xl border-2 border-[#355E3B] space-y-6 shadow-xl">
              
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-[#355E3B] text-white flex items-center justify-center font-bold shrink-0">
                    <PieChart className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">โครงสร้างความโปร่งใสรายได้ของแพ็กเกจนี้</h3>
                    <p className="text-xs text-[#E6F2EA]">
                      ราคา {experience.priceThbPerPerson.toLocaleString()} THB / ท่าน
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => onNavigate('transparency')}
                  className="bg-[#355E3B] hover:bg-[#1F4B38] text-white px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1 cursor-pointer shrink-0"
                >
                  <span>เปิดดูฉบับเต็ม Interactive</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              {/* Progress Segment Bar */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs font-bold">
                  <span className="text-[#B8D1C1]">ชุมชนวิสาหกิจรับตรง ({experience.breakdownLevel1.communitySharePct}%)</span>
                  <span>{communityShareAmount.toLocaleString()} THB</span>
                </div>
                <div className="w-full bg-black/40 h-3 rounded-full overflow-hidden flex">
                  <div className="bg-[#93B39A] h-full" style={{ width: `${experience.breakdownLevel1.communitySharePct}%` }} title="ชุมชนได้รับตรง" />
                  <div className="bg-[#93B39A] h-full" style={{ width: `${experience.breakdownLevel1.platformDevOpsPct}%` }} title="แพลตฟอร์ม" />
                  <div className="bg-[#355E3B] h-full" style={{ width: '9%' }} title="ประกันและผู้จัดการ" />
                </div>
              </div>

              {/* Detailed Breakdown Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 text-center text-xs">
                <div className="bg-white/10 p-2.5 rounded-2xl border border-white/10">
                  <span className="text-[10px] text-[#E6F2EA] block">ชุมชนรับตรง</span>
                  <span className="font-extrabold text-[#B8D1C1] text-sm">{experience.breakdownLevel1.communitySharePct}%</span>
                </div>
                <div className="bg-white/10 p-2.5 rounded-2xl border border-white/10">
                  <span className="text-[10px] text-[#E6F2EA] block">Payment Gateway</span>
                  <span className="font-extrabold text-white text-sm">{experience.breakdownLevel1.paymentGatewayPct}%</span>
                </div>
                <div className="bg-white/10 p-2.5 rounded-2xl border border-white/10">
                  <span className="text-[10px] text-[#E6F2EA] block">Community Manager</span>
                  <span className="font-extrabold text-white text-sm">{experience.breakdownLevel1.communityManagerPct}%</span>
                </div>
                <div className="bg-white/10 p-2.5 rounded-2xl border border-white/10">
                  <span className="text-[10px] text-[#E6F2EA] block">Platform Ops</span>
                  <span className="font-extrabold text-white text-sm">{experience.breakdownLevel1.platformDevOpsPct}%</span>
                </div>
              </div>

            </div>
          )}

          {/* TAB 4: REVIEWS */}
          {activeTab === 'reviews' && (
            <div className="bg-[#FFFFFF] p-6 rounded-3xl border border-[#E6F2EA] space-y-4 animate-in fade-in duration-200">
              <h3 className="text-lg font-bold text-[#1F4B38]">รีวิวและความประทับใจจากผู้เคยร่วมทริป</h3>
              <div className="space-y-3">
                {(EXPERIENCE_REVIEWS[experience.id] || []).map((review, i) => (
                  <div key={i} className="p-4 rounded-2xl bg-[#F6F8F4] border border-[#E6F2EA]">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-bold text-xs text-[#1F4B38]">{review.nameTh}</span>
                      <span className="text-amber-500 font-bold text-xs flex items-center gap-1">
                        <Star className="w-3.5 h-3.5 fill-amber-500" /> {review.rating.toFixed(1)}
                      </span>
                    </div>
                    <p className="text-xs text-[#1F4B38]/80">
                      "{review.textTh}"
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Right Sticky Booking Box Column */}
        <div className="lg:col-span-4">
          <div className="sticky top-28 bg-[#FFFFFF] p-6 rounded-3xl border-2 border-[#355E3B] shadow-xl space-y-6">
            
            {/* Price Display */}
            <div className="border-b border-[#E6F2EA] pb-4">
              <span className="text-xs font-semibold text-[#1F4B38]/70 block">ราคาแพ็กเกจ</span>
              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-black text-[#355E3B]">{experience.priceThbPerPerson.toLocaleString()}</span>
                <span className="text-xs font-bold text-[#1F4B38]">THB / ท่าน</span>
              </div>
            </div>

            {/* Date Selection */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-[#1F4B38] flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-[#355E3B]" /> เลือกล็อตวันที่เดินทาง:
              </label>
              <input 
                type="date" 
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="w-full bg-[#F6F8F4] p-3 rounded-2xl border border-[#E6F2EA] text-xs font-bold text-[#1F4B38] cursor-pointer"
              />
            </div>

            {/* Pax Counter */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-[#1F4B38] flex items-center gap-1">
                <Users className="w-3.5 h-3.5 text-[#6C8355]" /> จำนวนผู้เดินทาง:
              </label>
              <div className="flex items-center justify-between bg-[#F6F8F4] p-2 rounded-2xl border border-[#E6F2EA]">
                <button 
                  onClick={() => setPaxCount(Math.max(1, paxCount - 1))}
                  className="w-8 h-8 rounded-xl bg-[#E6F2EA] text-[#1F4B38] font-black text-sm flex items-center justify-center cursor-pointer"
                >
                  -
                </button>
                <span className="font-bold text-sm text-[#1F4B38]">{paxCount} ท่าน</span>
                <button 
                  onClick={() => setPaxCount(Math.min(experience.maxGroupSize, paxCount + 1))}
                  className="w-8 h-8 rounded-xl bg-[#355E3B] text-white font-black text-sm flex items-center justify-center cursor-pointer"
                >
                  +
                </button>
              </div>
            </div>

            {/* Price and Impact Summary */}
            <div className="bg-[#F6F8F4] p-4 rounded-2xl border border-[#E6F2EA] space-y-2 text-xs">
              <div className="flex justify-between font-semibold text-[#1F4B38]">
                <span>ยอดรวม {paxCount} ท่าน:</span>
                <span>{totalPrice.toLocaleString()} THB</span>
              </div>
              <div className="flex justify-between font-black text-[#6C8355] pt-2 border-t border-[#E6F2EA]">
                <span>ชุมชนวิสาหกิจได้รับตรง:</span>
                <span>{totalCommunityShare.toLocaleString()} THB</span>
              </div>
            </div>

            {/* Booking CTA */}
            <button
              onClick={() => onStartBooking(experience, paxCount, selectedDate)}
              className="w-full bg-[#355E3B] hover:bg-[#1F4B38] text-white font-bold text-sm py-4 rounded-2xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>ดำเนินการจองทริป</span>
              <ChevronRight className="w-4 h-4" />
            </button>

            <p className="text-[10px] text-center text-[#1F4B38]/70 font-semibold">
              🔒 จองปลอดภัยผ่านระบบ PromptPay / Credit Card มีใบเสร็จแยกสัดส่วนชัดเจน
            </p>

          </div>
        </div>

      </div>

    </div>
  );
};
