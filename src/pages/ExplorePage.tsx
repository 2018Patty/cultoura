import React, { useState } from 'react';
import { PageId, Experience } from '../types';
import { SAMPLE_EXPERIENCES } from '../data/sampleData';
import { Search, MapPin, Filter, Star, ArrowUpDown, ShieldCheck, Compass, Check } from 'lucide-react';

interface ExplorePageProps {
  onNavigate: (page: PageId) => void;
  onSelectExperience: (exp: Experience) => void;
}

export const ExplorePage: React.FC<ExplorePageProps> = ({ onNavigate, onSelectExperience }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedRegion, setSelectedRegion] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortBy, setSortBy] = useState<'impact' | 'price' | 'rating'>('impact');

  // Filter experiences
  const filteredExperiences = SAMPLE_EXPERIENCES.filter(exp => {
    const matchesCategory = selectedCategory === 'all' || exp.category === selectedCategory;
    const matchesRegion = selectedRegion === 'all' || exp.region === selectedRegion;
    const matchesSearch = searchQuery === '' || 
      exp.titleTh.toLowerCase().includes(searchQuery.toLowerCase()) ||
      exp.communityNameTh.toLowerCase().includes(searchQuery.toLowerCase()) ||
      exp.locationTh.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesRegion && matchesSearch;
  }).sort((a, b) => {
    if (sortBy === 'impact') {
      return b.breakdownLevel1.communitySharePct - a.breakdownLevel1.communitySharePct;
    } else if (sortBy === 'price') {
      return a.priceThbPerPerson - b.priceThbPerPerson;
    } else {
      return b.rating - a.rating;
    }
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8 text-left">
      
      {/* Header */}
      <div className="space-y-2 border-b border-[#E6F2EA] pb-6">
        <div className="flex items-center gap-2 text-xs font-bold text-[#355E3B] uppercase tracking-wider">
          <Compass className="w-4 h-4" />
          <span>ค้นหาทริปและกิจกรรมวิถีไทย</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-[#1F4B38]">
          ประสบการณ์ท่องเที่ยวโดยชุมชน (CBT Directory)
        </h1>
        <p className="text-sm text-[#1F4B38]/80 max-w-2xl">
          เลือกทริปที่ใช่ สัมผัสวัฒนธรรมแท้ และมั่นใจว่าค่าทริปของคุณถูกกระจายสู่ชุมชนอย่างโปร่งใส 100%
        </p>
      </div>

      {/* SEARCH AND FILTER BAR */}
      <div className="bg-[#FFFFFF] p-5 rounded-3xl border-2 border-[#E6F2EA] shadow-md space-y-4">
        
        {/* Top Controls */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
          
          {/* Search Input */}
          <div className="md:col-span-5 bg-[#F6F8F4] p-3 rounded-2xl border border-[#E6F2EA] flex items-center gap-2">
            <Search className="w-4 h-4 text-[#355E3B] shrink-0" />
            <input 
              type="text"
              placeholder="ค้นหาตามชื่อทริป, ชุมชน, หรือจังหวัด..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-transparent text-xs sm:text-sm font-semibold text-[#1F4B38] focus:outline-hidden w-full"
            />
          </div>

          {/* Region Select */}
          <div className="md:col-span-3 bg-[#F6F8F4] p-3 rounded-2xl border border-[#E6F2EA] flex items-center gap-2">
            <MapPin className="w-4 h-4 text-[#6C8355] shrink-0" />
            <select
              value={selectedRegion}
              onChange={(e) => setSelectedRegion(e.target.value)}
              className="bg-transparent text-xs sm:text-sm font-semibold text-[#1F4B38] focus:outline-hidden w-full cursor-pointer"
            >
              <option value="all">ทุกภาคทั่วไทย</option>
              <option value="north">ภาคเหนือ</option>
              <option value="south">ภาคใต้</option>
              <option value="northeast">ภาคอีสาน</option>
            </select>
          </div>

          {/* Sort Selector */}
          <div className="md:col-span-4 bg-[#F6F8F4] p-3 rounded-2xl border border-[#E6F2EA] flex items-center gap-2">
            <ArrowUpDown className="w-4 h-4 text-[#355E3B] shrink-0" />
            <span className="text-xs font-bold text-[#1F4B38] shrink-0">เรียงตาม:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="bg-transparent text-xs sm:text-sm font-semibold text-[#1F4B38] focus:outline-hidden w-full cursor-pointer"
            >
              <option value="impact">สัดส่วนรายได้ถึงชุมชนสูงสุด (% Direct)</option>
              <option value="rating">คะแนนรีวิวสูงสุด (Rating)</option>
              <option value="price">ราคาน้อยไปมาก (Price)</option>
            </select>
          </div>

        </div>

        {/* Category Filter Chips */}
        <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-[#E6F2EA]/60">
          <span className="text-xs font-bold text-[#1F4B38] mr-2">หมวดหมู่:</span>
          {[
            { id: 'all', label: 'ทั้งหมด' },
            { id: 'culture', label: '🎭 วัฒนธรรม & วิถีชีวิต' },
            { id: 'craft', label: '🧵 งานหัตถกรรม & มัดย้อม' },
            { id: 'nature', label: '🌱 ธรรมชาติ & เดินป่า' },
            { id: 'food', label: '🍲 อาหารพื้นบ้าน' }
          ].map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#355E3B] text-white shadow-xs'
                    : 'bg-[#F6F8F4]/60 hover:bg-[#E6F2EA] text-[#1F4B38]'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

      </div>

      {/* Results Counter Bar */}
      <div className="flex items-center justify-between text-xs font-bold text-[#1F4B38]/80">
        <span>พบ {filteredExperiences.length} กิจกรรมที่ตรงกับการค้นหา</span>
        <button 
          onClick={() => onNavigate('transparency')}
          className="text-[#355E3B] hover:underline flex items-center gap-1 cursor-pointer"
        >
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>ดูโมเดลความโปร่งใสแบบเต็ม →</span>
        </button>
      </div>

      {/* EXPERIENCES LIST GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredExperiences.map((exp) => (
          <div 
            key={exp.id}
            className="bg-[#FFFFFF] rounded-3xl border-2 border-[#E6F2EA] overflow-hidden shadow-md hover:shadow-xl transition-all group flex flex-col justify-between text-left"
          >
            <div>
              {/* Card Cover Image */}
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={exp.coverImage} 
                  alt={exp.titleTh}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 flex items-center gap-1.5">
                  <span className="bg-[#1F4B38]/90 text-white text-[11px] font-bold px-3 py-1 rounded-full backdrop-blur-md">
                    {exp.durationText}
                  </span>
                  <span className="bg-[#6C8355] text-white text-[11px] font-bold px-2.5 py-1 rounded-full">
                    {exp.region === 'north' ? 'เหนือ' : exp.region === 'south' ? 'ใต้' : 'อีสาน'}
                  </span>
                </div>

                <div className="absolute top-3 right-3 bg-white/95 text-[#1F4B38] text-xs font-bold px-2.5 py-1 rounded-full shadow-xs flex items-center gap-1">
                  <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                  <span>{exp.rating}</span>
                </div>
              </div>

              {/* Card Details */}
              <div className="p-6 space-y-3">
                <p className="text-xs font-bold text-[#6C8355] flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 shrink-0" />
                  {exp.communityNameTh}
                </p>

                <h3 className="text-lg font-bold text-[#1F4B38] line-clamp-2 leading-snug group-hover:text-[#355E3B] transition-colors">
                  {exp.titleTh}
                </h3>

                <p className="text-xs text-[#1F4B38]/75 line-clamp-2">
                  {exp.subtitleTh}
                </p>

                {/* Transparency Summary Module */}
                <div className="bg-[#F6F8F4] p-3 rounded-2xl border border-[#E6F2EA] space-y-1.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-[#1F4B38]">สัดส่วนเงินส่งตรงชุมชน:</span>
                    <span className="font-black text-[#6C8355]">
                      {exp.breakdownLevel1.communitySharePct}% ({Math.round(exp.priceThbPerPerson * exp.breakdownLevel1.communitySharePct / 100).toLocaleString()} บาท)
                    </span>
                  </div>

                  <div className="w-full bg-[#E6F2EA] h-2 rounded-full overflow-hidden flex">
                    <div className="bg-[#6C8355] h-full" style={{ width: `${exp.breakdownLevel1.communitySharePct}%` }} />
                    <div className="bg-[#355E3B] h-full" style={{ width: `${exp.breakdownLevel1.platformDevOpsPct}%` }} />
                    <div className="bg-[#93B39A] h-full" style={{ width: '9%' }} />
                  </div>
                </div>

              </div>
            </div>

            {/* Card Footer */}
            <div className="p-6 pt-0 border-t border-[#E6F2EA]/40 mt-4 flex items-center justify-between">
              <div>
                <span className="text-[10px] font-semibold text-[#1F4B38]/60 block">ราคา/ท่าน</span>
                <span className="text-xl font-black text-[#355E3B]">
                  {exp.priceThbPerPerson.toLocaleString()} <span className="text-xs font-normal text-[#1F4B38]">THB</span>
                </span>
              </div>

              <button
                onClick={() => {
                  onSelectExperience(exp);
                  onNavigate('detail');
                }}
                className="bg-[#355E3B] hover:bg-[#1F4B38] text-white font-bold text-xs px-4 py-2.5 rounded-xl transition-colors cursor-pointer"
              >
                ดูรายละเอียด & จอง
              </button>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
};
