import React from 'react';
import { PageId } from '../types';
import { ShieldCheck, Heart, PieChart, Sparkles, MapPin, Mail, Phone, ExternalLink } from 'lucide-react';
import { LocalConnectLogo } from './LocalConnectLogo';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-[#14301F] text-[#F6F8F4] pt-16 pb-24 border-t-4 border-[#355E3B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Banner - Transparency Value Banner */}
        <div className="bg-[#1F4B38] rounded-3xl p-8 border border-[#355E3B] mb-12 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 rounded-2xl bg-[#355E3B] text-white flex items-center justify-center shrink-0 shadow-md">
              <PieChart className="w-7 h-7" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-1 flex items-center gap-2">
                โปร่งใส ตรวจสอบได้ ชุมชนได้รับประโยชน์เต็ม 100%
              </h3>
              <p className="text-sm text-[#E6F2EA] max-w-2xl leading-relaxed">
                 LocalConnect มุ่งมั่นกระจายรายได้ถึงมือชาวบ้าน ท้องถิ่น และกองทุนพัฒนาชุมชนอย่างโปร่งใส ไร้ค่าธรรมเนียมแอบแฝง
              </p>
            </div>
          </div>
          <button
            onClick={() => onNavigate('transparency')}
            className="shrink-0 bg-[#355E3B] hover:bg-[#1F4B38] text-white px-6 py-3.5 rounded-2xl font-bold text-sm transition-all shadow-md flex items-center gap-2 cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-[#F6F8F4]" />
            ดูรายละเอียดเส้นทางเงิน
          </button>
        </div>

        {/* Main Footer Navigation Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#355E3B]">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="bg-white/10 p-4 rounded-2xl inline-block border border-white/10 backdrop-blur-xs">
              <LocalConnectLogo size="xl" variant="light" showTagline={true} />
            </div>
            <p className="text-sm text-[#E6F2EA] leading-relaxed max-w-sm">
              แพลตฟอร์มค้นหาและจองประสบการณ์ท่องเที่ยวโดยชุมชน (CBT) เชื่อมโยงนักท่องเที่ยวกับวิถีชีวิต ท้องถิ่น วัฒนธรรม และอาหารอย่างยั่งยืน
            </p>
            <div className="pt-2 flex items-center gap-3 text-xs text-[#B8D1C1]">
              <span className="bg-[#6C8355]/40 px-3 py-1 rounded-full border border-[#6C8355]">
                🌱 Sustainable CBT Model
              </span>
              <span className="bg-[#6C8355]/40 px-3 py-1 rounded-full border border-[#6C8355]">
                🤝 ESG Ready
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-[#355E3B] pb-2">
              สำหรับนักท่องเที่ยว
            </h4>
            <ul className="space-y-2.5 text-sm text-[#E6F2EA]">
              <li>
                <button onClick={() => onNavigate('explore')} className="hover:text-white transition-colors cursor-pointer">
                  ค้นหากิจกรรมทั้งหมด
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('transparency')} className="hover:text-white transition-colors flex items-center gap-1 cursor-pointer">
                  <PieChart className="w-3.5 h-3.5 text-[#355E3B]" />
                  โครงสร้างความโปร่งใส
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('community')} className="hover:text-white transition-colors cursor-pointer">
                  วิสาหกิจชุมชนทั้งหมด
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('traveler-dashboard')} className="hover:text-white transition-colors cursor-pointer">
                  ประวัติการจองและผลกระทบ
                </button>
              </li>
            </ul>
          </div>

          {/* B2B & Community Portal */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-[#355E3B] pb-2">
              สำหรับองค์กร & ชุมชน
            </h4>
            <ul className="space-y-2.5 text-sm text-[#E6F2EA]">
              <li>
                <button onClick={() => onNavigate('b2b')} className="hover:text-white transition-colors cursor-pointer">
                  ทริป CSR & Team Building
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('b2b')} className="hover:text-white transition-colors cursor-pointer">
                  Field Trip สถาบันการศึกษา
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('provider-dashboard')} className="hover:text-white transition-colors cursor-pointer">
                  ระบบผู้จัดกิจกรรมชุมชน
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('overview')} className="hover:text-white transition-colors cursor-pointer">
                  แผนผังระบบ Prototype Map
                </button>
              </li>
            </ul>
          </div>

          {/* Contact & Support */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-[#355E3B] pb-2">
              การติดต่อ
            </h4>
            <ul className="space-y-2.5 text-sm text-[#E6F2EA]">
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#93B39A]" />
                สุราษฎร์ธานี
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#93B39A]" />
                hello@localconnect.travel
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#93B39A]" />
                +66 (0) 2-888-9900
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Credits & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#B8D1C1] gap-4">
          <p>© 2026 LocalConnect Co., Ltd. All rights reserved. The Meaningful Travels.</p>
          <div className="flex items-center gap-6">
            <span>นโยบายความเป็นส่วนตัว</span>
            <span>เงื่อนไขการใช้บริการ</span>
            <span className="flex items-center gap-1 text-[#F6F8F4]">
              <Heart className="w-3.5 h-3.5 text-[#355E3B] fill-[#355E3B]" />
              ทำเพื่อชุมชนท่องเที่ยวไทย
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};
