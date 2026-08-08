import React, { useState } from 'react';
import { SAMPLE_COMMUNITIES, SAMPLE_EXPERIENCES } from '../data/sampleData';
import { PageId, Experience } from '../types';
import { MapPin, Users, Heart, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';

interface CommunityPageProps {
  onNavigate: (page: PageId) => void;
  onSelectExperience: (exp: Experience) => void;
}

export const CommunityPage: React.FC<CommunityPageProps> = ({ onNavigate, onSelectExperience }) => {
  const [selectedCommunityId, setSelectedCommunityId] = useState<string>(SAMPLE_COMMUNITIES[0].id);

  const community = SAMPLE_COMMUNITIES.find(c => c.id === selectedCommunityId) || SAMPLE_COMMUNITIES[0];
  const activeExps = SAMPLE_EXPERIENCES.filter(e => e.communityId === community.id);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10 text-left">
      
      {/* COMMUNITY SELECTOR TABS */}
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-[#C25E2E]" />
          <h2 className="text-xl sm:text-2xl font-black text-[#5A3A28]">เลือกชุมชนท่องเที่ยวต้นแบบในประเทศไทย</h2>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          {SAMPLE_COMMUNITIES.map((c) => {
            const isSelected = c.id === community.id;
            return (
              <button
                key={c.id}
                onClick={() => setSelectedCommunityId(c.id)}
                className={`px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-2 border ${
                  isSelected 
                    ? 'bg-[#C25E2E] text-white border-[#C25E2E] shadow-md scale-102' 
                    : 'bg-[#FFFDF8] text-[#5A3A28] border-[#E7DBB8] hover:bg-[#F2E6C9]'
                }`}
              >
                <MapPin className="w-3.5 h-3.5" />
                <span>{c.nameTh}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* COMMUNITY HERO BANNER */}
      <div className="relative rounded-3xl overflow-hidden border-2 border-[#E7DBB8] shadow-xl bg-white">
        <img 
          src={community.coverImage} 
          alt={community.nameTh} 
          className="w-full h-80 sm:h-96 object-cover" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#3E2619]/90 via-[#3E2619]/40 to-transparent flex flex-col justify-end p-8 text-white">
          <div className="flex items-center gap-2 mb-2 flex-wrap">
            <span className="bg-[#5E7045] text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5" /> Verified CBT Community
            </span>
            <span className="bg-[#C25E2E] text-white text-xs font-bold px-3 py-1 rounded-full">
              ก่อตั้งปี พ.ศ. {community.foundingYear + 543}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white">{community.nameTh}</h1>
          <p className="text-sm sm:text-base text-[#E7DBB8] mt-1 flex items-center gap-1 font-semibold">
            <MapPin className="w-4 h-4 text-[#C25E2E]" /> {community.provinceTh}
          </p>
        </div>
      </div>

      {/* STATS OVERVIEW */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="bg-[#FFFDF8] p-5 rounded-2xl border border-[#E7DBB8] text-center">
          <span className="text-2xl font-black text-[#5A3A28]">{community.householdsInvolved}</span>
          <span className="text-xs text-[#5A3A28]/70 block font-bold">ครัวเรือนในเครือข่าย</span>
        </div>

        <div className="bg-[#FFFDF8] p-5 rounded-2xl border border-[#E7DBB8] text-center">
          <span className="text-2xl font-black text-[#5E7045]">
            {(community.totalIncomeGeneratedThb / 1000000).toFixed(2)}M
          </span>
          <span className="text-xs text-[#5A3A28]/70 block font-bold">รายได้สะสมสู่ชุมชน (THB)</span>
        </div>

        <div className="bg-[#FFFDF8] p-5 rounded-2xl border border-[#E7DBB8] text-center">
          <span className="text-2xl font-black text-[#C25E2E]">
            {(community.communityFundSpentThb / 1000).toFixed(0)}K
          </span>
          <span className="text-xs text-[#5A3A28]/70 block font-bold">เข้ากองทุนพัฒนาชุมชน (THB)</span>
        </div>

        <div className="bg-[#FFFDF8] p-5 rounded-2xl border border-[#E7DBB8] text-center">
          <span className="text-2xl font-black text-[#5A3A28]">{community.activeExperiencesCount}</span>
          <span className="text-xs text-[#5A3A28]/70 block font-bold">กิจกรรมพร้อมบริการ</span>
        </div>
      </div>

      {/* STORY & LEADER BIO */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        <div className="lg:col-span-8 bg-[#FFFDF8] p-8 rounded-3xl border border-[#E7DBB8] space-y-4">
          <h2 className="text-2xl font-black text-[#5A3A28]">เรื่องราวของวิสาหกิจชุมชน</h2>
          <p className="text-sm text-[#5A3A28]/85 leading-relaxed">
            {community.storyTh}
          </p>

          <div className="pt-4 space-y-2 border-t border-[#E7DBB8]">
            <h3 className="text-sm font-bold text-[#5A3A28]">ไฮไลต์และมรดกทางวัฒนธรรมประจำหมู่บ้าน:</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-semibold text-[#5A3A28]">
              {community.keyHighlightsTh.map((item, idx) => (
                <p key={idx} className="flex items-center gap-2 bg-[#FAF4E9] p-2.5 rounded-xl border border-[#E7DBB8]">
                  <CheckCircle2 className="w-4 h-4 text-[#5E7045] shrink-0" />
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* Leader Profile Box */}
        <div className="lg:col-span-4 bg-[#FAF4E9] p-6 rounded-3xl border-2 border-[#E7DBB8] space-y-4">
          <div className="text-center space-y-2">
            <img 
              src={community.leaderAvatar} 
              alt={community.leaderNameTh} 
              className="w-20 h-20 rounded-full mx-auto object-cover border-4 border-[#C25E2E] shadow-md"
            />
            <h3 className="font-bold text-base text-[#5A3A28]">{community.leaderNameTh}</h3>
            <p className="text-xs text-[#5E7045] font-semibold">{community.leaderTitleTh}</p>
          </div>

          <p className="text-xs text-[#5A3A28]/80 text-center leading-relaxed">
            "เงินทุกบาทที่คุณจ่ายค่าทริป ไม่เพียงแต่นำความสุขมาสู่นักท่องเที่ยว แต่ยังเปลี่ยนเป็นอุปกรณ์ดับไฟป่า และทุนการศึกษาของลูกหลานชาวลาหู่ในหมู่บ้านเรา"
          </p>

          <div className="pt-2 border-t border-[#E7DBB8] space-y-1.5 text-xs">
            <span className="font-bold text-[#5A3A28] block">โครงการที่ใช้เงินกองทุนพัฒนาชุมชน:</span>
            {community.fundProjectsTh.map((proj, i) => (
              <p key={i} className="text-[#C25E2E] font-medium flex items-center gap-1.5">
                <Heart className="w-3.5 h-3.5 fill-[#C25E2E]" /> {proj}
              </p>
            ))}
          </div>
        </div>

      </div>

      {/* PHOTO GALLERY SECTION */}
      {community.gallery && community.gallery.length > 0 && (
        <div className="space-y-4">
          <h2 className="text-2xl font-black text-[#5A3A28]">อัลบั้มภาพบรรยากาศชุมชนเมืองไทย</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {community.gallery.map((imgUrl, i) => (
              <div key={i} className="rounded-2xl overflow-hidden border border-[#E7DBB8] shadow-sm bg-white aspect-4/3">
                <img 
                  src={imgUrl} 
                  alt={`${community.nameTh} photo ${i+1}`} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" 
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ACTIVE EXPERIENCES OFFERED BY THIS COMMUNITY */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-black text-[#5A3A28]">ประสบการณ์ที่เปิดให้จองในชุมชนนี้</h2>
          <button onClick={() => onNavigate('explore')} className="text-xs font-bold text-[#C25E2E] hover:underline cursor-pointer">
            ดูชุมชนอื่นๆ ทั้งหมด →
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {activeExps.map((exp) => (
            <div key={exp.id} className="bg-[#FFFDF8] p-6 rounded-3xl border-2 border-[#E7DBB8] flex flex-col sm:flex-row gap-6 items-center shadow-md">
              <img src={exp.coverImage} alt={exp.titleTh} className="w-full sm:w-40 h-32 rounded-2xl object-cover shrink-0" />
              <div className="space-y-2 text-left">
                <h3 className="font-bold text-[#5A3A28] text-base">{exp.titleTh}</h3>
                <p className="text-xs text-[#5A3A28]/70">{exp.subtitleTh}</p>
                <div className="flex items-center justify-between pt-2">
                  <span className="text-lg font-black text-[#C25E2E]">{exp.priceThbPerPerson.toLocaleString()} THB</span>
                  <button
                    onClick={() => {
                      onSelectExperience(exp);
                      onNavigate('detail');
                    }}
                    className="bg-[#5A3A28] hover:bg-[#3E2619] text-white text-xs font-bold px-4 py-2 rounded-xl transition-colors cursor-pointer"
                  >
                    จองเลย
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
