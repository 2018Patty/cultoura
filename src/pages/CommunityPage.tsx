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
          <Sparkles className="w-5 h-5 text-[#355E3B]" />
          <h2 className="text-xl sm:text-2xl font-black text-[#1F4B38]">เลือกชุมชนท่องเที่ยวเด่นในประเทศไทย</h2>
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
                    ? 'bg-[#355E3B] text-white border-[#355E3B] shadow-md scale-102' 
                    : 'bg-[#FFFFFF] text-[#1F4B38] border-[#E6F2EA] hover:bg-[#F6F8F4]'
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
      <div className="relative rounded-3xl overflow-hidden border-2 border-[#E6F2EA] shadow-xl bg-white">
        <img 
          src={community.coverImage} 
          alt={community.nameTh} 
          className="w-full h-80 sm:h-96 object-cover" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#14301F]/90 via-[#14301F]/40 to-transparent flex flex-col justify-end p-8 text-white">
          <div className="flex items-center gap-2 mb-2 flex-wrap">
            <span className="bg-[#6C8355] text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5" /> Verified CBT Community
            </span>
            <span className="bg-[#355E3B] text-white text-xs font-bold px-3 py-1 rounded-full">
              ก่อตั้งปี พ.ศ. {community.foundingYear + 543}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white">{community.nameTh}</h1>
          <p className="text-sm sm:text-base text-[#E6F2EA] mt-1 flex items-center gap-1 font-semibold">
            <MapPin className="w-4 h-4 text-[#355E3B]" /> {community.provinceTh}
          </p>
        </div>
      </div>

      {/* STATS OVERVIEW */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="bg-[#FFFFFF] p-5 rounded-2xl border border-[#E6F2EA] text-center">
          <span className="text-2xl font-black text-[#1F4B38]">{community.householdsInvolved}</span>
          <span className="text-xs text-[#1F4B38]/70 block font-bold">ครัวเรือนในเครือข่าย</span>
        </div>

        <div className="bg-[#FFFFFF] p-5 rounded-2xl border border-[#E6F2EA] text-center">
          <span className="text-2xl font-black text-[#6C8355]">
            {(community.totalIncomeGeneratedThb / 1000000).toFixed(2)}M
          </span>
          <span className="text-xs text-[#1F4B38]/70 block font-bold">รายได้สะสมสู่ชุมชน (THB)</span>
        </div>

        <div className="bg-[#FFFFFF] p-5 rounded-2xl border border-[#E6F2EA] text-center">
          <span className="text-2xl font-black text-[#355E3B]">
            {(community.communityFundSpentThb / 1000).toFixed(0)}K
          </span>
          <span className="text-xs text-[#1F4B38]/70 block font-bold">เข้ากองทุนพัฒนาชุมชน (THB)</span>
        </div>

        <div className="bg-[#FFFFFF] p-5 rounded-2xl border border-[#E6F2EA] text-center">
          <span className="text-2xl font-black text-[#1F4B38]">{community.activeExperiencesCount}</span>
          <span className="text-xs text-[#1F4B38]/70 block font-bold">กิจกรรมพร้อมบริการ</span>
        </div>
      </div>

      {/* STORY & LEADER BIO */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        <div className="lg:col-span-8 bg-[#FFFFFF] p-8 rounded-3xl border border-[#E6F2EA] space-y-4">
          <h2 className="text-2xl font-black text-[#1F4B38]">เรื่องราวของวิสาหกิจชุมชน</h2>
          <p className="text-sm text-[#1F4B38]/85 leading-relaxed">
            {community.storyTh}
          </p>

          <div className="pt-4 space-y-2 border-t border-[#E6F2EA]">
            <h3 className="text-sm font-bold text-[#1F4B38]">ไฮไลต์และมรดกทางวัฒนธรรมประจำหมู่บ้าน:</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-semibold text-[#1F4B38]">
              {community.keyHighlightsTh.map((item, idx) => (
                <p key={idx} className="flex items-center gap-2 bg-[#F6F8F4] p-2.5 rounded-xl border border-[#E6F2EA]">
                  <CheckCircle2 className="w-4 h-4 text-[#6C8355] shrink-0" />
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* Leader Profile Box */}
        <div className="lg:col-span-4 bg-[#F6F8F4] p-6 rounded-3xl border-2 border-[#E6F2EA] space-y-4">
          <div className="text-center space-y-2">
            <img 
              src={community.leaderAvatar} 
              alt={community.leaderNameTh} 
              className="w-20 h-20 rounded-full mx-auto object-cover border-4 border-[#355E3B] shadow-md"
            />
            <h3 className="font-bold text-base text-[#1F4B38]">{community.leaderNameTh}</h3>
            <p className="text-xs text-[#6C8355] font-semibold">{community.leaderTitleTh}</p>
          </div>

          <p className="text-xs text-[#1F4B38]/80 text-center leading-relaxed">
            "เงินทุกบาทที่คุณจ่ายค่าทริป ไม่เพียงแต่นำความสุขมาสู่นักท่องเที่ยว แต่ยังเปลี่ยนเป็นอุปกรณ์ดับไฟป่า และทุนการศึกษาของลูกหลานชาวลาหู่ในหมู่บ้านเรา"
          </p>

          <div className="pt-2 border-t border-[#E6F2EA] space-y-1.5 text-xs">
            <span className="font-bold text-[#1F4B38] block">โครงการที่ใช้เงินกองทุนพัฒนาชุมชน:</span>
            {community.fundProjectsTh.map((proj, i) => (
              <p key={i} className="text-[#355E3B] font-medium flex items-center gap-1.5">
                <Heart className="w-3.5 h-3.5 fill-[#355E3B]" /> {proj}
              </p>
            ))}
          </div>
        </div>

      </div>

      {/* PHOTO GALLERY SECTION */}
      {community.gallery && community.gallery.length > 0 && (
        <div className="space-y-4">
          <h2 className="text-2xl font-black text-[#1F4B38]">อัลบั้มภาพบรรยากาศชุมชนเมืองไทย</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {community.gallery.map((imgUrl, i) => (
              <div key={i} className="rounded-2xl overflow-hidden border border-[#E6F2EA] shadow-sm bg-white aspect-4/3">
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
          <h2 className="text-2xl font-black text-[#1F4B38]">ประสบการณ์ที่เปิดให้จองในชุมชนนี้</h2>
          <button onClick={() => onNavigate('explore')} className="text-xs font-bold text-[#355E3B] hover:underline cursor-pointer">
            ดูชุมชนอื่นๆ ทั้งหมด →
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {activeExps.map((exp) => (
            <div key={exp.id} className="bg-[#FFFFFF] p-6 rounded-3xl border-2 border-[#E6F2EA] flex flex-col sm:flex-row gap-6 items-center shadow-md">
              <img src={exp.coverImage} alt={exp.titleTh} className="w-full sm:w-40 h-32 rounded-2xl object-cover shrink-0" />
              <div className="space-y-2 text-left">
                <h3 className="font-bold text-[#1F4B38] text-base">{exp.titleTh}</h3>
                <p className="text-xs text-[#1F4B38]/70">{exp.subtitleTh}</p>
                <div className="flex items-center justify-between pt-2">
                  <span className="text-lg font-black text-[#355E3B]">{exp.priceThbPerPerson.toLocaleString()} THB</span>
                  <button
                    onClick={() => {
                      onSelectExperience(exp);
                      onNavigate('detail');
                    }}
                    className="bg-[#1F4B38] hover:bg-[#14301F] text-white text-xs font-bold px-4 py-2 rounded-xl transition-colors cursor-pointer"
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
