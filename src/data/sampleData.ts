import { Experience, CommunityProfile, B2BPackage, Booking } from '../types';

export const SAMPLE_COMMUNITIES: CommunityProfile[] = [
  {
    id: 'khao-thep-phithak',
    nameTh: 'วิสาหกิจชุมชนท่องเที่ยวเชิงอนุรักษ์บ้านเขาเทพพิทักษ์',
    nameEn: 'Khao Thep Phithak Eco-Tourism CBT',
    provinceTh: 'สุราษฎร์ธานี (อ.บ้านตาขุน)',
    storyTh: 'เรื่องราวของชาวคลองแสง สัมผัสความศรัทธาที่มีต่อพุทธศาสนา ณ วัดเขาพัง เดินข้ามสะพานแขวนภูเขารูปหัวใจ เรียนรู้วิถีสวนยางพาราและชิมทุเรียนคลองแสงร้อยปีที่โด่งดัง ลิ้มรสอาหารท้องถิ่นเพื่อสุขภาพ และสนุกกับของเล่นพื้นบ้าน "ลูกหวือ" ที่ส่งต่อจากรุ่นสู่รุ่น',
    coverImage: '/localconnect/suspension-bridge-wide.jpg',
    gallery: [
      '/localconnect/suspension-bridge-wide.jpg',
      '/localconnect/wat-khao-phang-temple.jpg',
      '/localconnect/suspension-bridge-motorbike.jpg',
      '/localconnect/elder-luk-wue-craft.jpg',
      '/localconnect/local-food-dishes.jpg'
    ],
    foundingYear: 2012,
    householdsInvolved: 50,
    leaderNameTh: 'ผู้ใหญ่บ้านสมศักดิ์ บ้านเขาพัง',
    leaderTitleTh: 'ประธานวิสาหกิจชุมชนท่องเที่ยวบ้านเขาเทพพิทักษ์',
    leaderAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    keyHighlightsTh: [
      'ไหว้พระวัดเขาพัง สัมผัสความศรัทธาของชาวคลองแสง',
      'เดินข้ามสะพานแขวนภูเขารูปหัวใจ สู่อ้อมกอดธรรมชาติ',
      'เรียนรู้วิถีสวนยางพาราและชิมทุเรียนคลองแสงร้อยปี',
      'สนุกกับของเล่นพื้นบ้าน "ลูกหวือ" ภูมิปัญญาผู้สูงวัย'
    ],
    activeExperiencesCount: 1,
    totalIncomeGeneratedThb: 4100000,
    communityFundSpentThb: 410000,
    fundProjectsTh: [
      'กองทุนอนุรักษ์ป่าและพันธุ์พืชเขาสก-บ้านตาขุน',
      'ทุนส่งเสริมการเกษตรอินทรีย์และผักปลอดสาร'
    ]
  },
  {
    id: 'chiew-lan',
    nameTh: 'วิสาหกิจชุมชนผ้าทอบ้านเชี่ยวหลาน',
    nameEn: 'Ban Chiew Lan Weaving CBT Community',
    provinceTh: 'สุราษฎร์ธานี (อ.บ้านตาขุน)',
    storyTh: 'เยือนวิสาหกิจชุมชนผ้าทอบ้านเชี่ยวหลาน ชมความประณีตของผืนผ้าทอมือ ทดลองกรอด้ายและทอผ้าด้วยตนเอง เดินชมสวนเกษตรอินทรีย์ ร่วมร้อยมาลัยถวาย ณ แท่นพระปรมาภิไธย และลิ้มรสอาหารท้องถิ่นเพื่อสุขภาพ',
    coverImage: '/localconnect/weaver-man-loom.jpg',
    gallery: [
      '/localconnect/weaver-man-loom.jpg',
      '/localconnect/weaver-woman-loom-wide.jpg',
      '/localconnect/woven-fabric-closeup.jpg',
      '/localconnect/organic-garden-flower.jpg',
      '/localconnect/memorial-monument.jpg',
      '/localconnect/chiew-lan-pha-khaoma.jpg',
      '/localconnect/chiew-lan-pha-khaoma-1.jpg',
      '/localconnect/chiew-lan-pha-khaoma-2.jpg'
    ],
    foundingYear: 2014,
    householdsInvolved: 40,
    leaderNameTh: 'กลุ่มทอผ้าบ้านเชี่ยวหลาน',
    leaderTitleTh: 'ประธานวิสาหกิจชุมชนผ้าทอบ้านเชี่ยวหลาน',
    leaderAvatar: '/localconnect/weaver-man-loom.jpg',
    keyHighlightsTh: [
      'เยือนวิสาหกิจชุมชนผ้าทอบ้านเชี่ยวหลาน ชมความประณีตของผืนผ้าทอมือ',
      'ทดลองกรอด้ายและทอผ้าเอง สัมผัสวิธีการทำอย่างใกล้ชิด',
      'เดินชมสวนเกษตรอินทรีย์และร่วมร้อยมาลัยถวายพระปรมาภิไธย',
      'ลิ้มรสอาหารท้องถิ่นเพื่อสุขภาพพร้อมขนมหวานท้องถิ่น'
    ],
    activeExperiencesCount: 1,
    totalIncomeGeneratedThb: 1800000,
    communityFundSpentThb: 180000,
    fundProjectsTh: [
      'กองทุนส่งเสริมกลุ่มทอผ้าบ้านเชี่ยวหลาน',
      'ทุนอนุรักษ์ลายผ้าทอพื้นถิ่นเชี่ยวหลาน'
    ]
  },
  {
    id: 'lemed',
    nameTh: 'วิสาหกิจชุมชนท่องเที่ยวเกษตรบ้านเลม็ด ไชยา',
    nameEn: 'Ban Lemed Chaiya Agro-Tourism CBT Community',
    provinceTh: 'สุราษฎร์ธานี (อ.ไชยา)',
    storyTh: 'ชวนสัมผัสเสน่ห์ของไชยาผ่านเรื่องราว "ข้าวหอมไชยา" ข้าวพื้นเมืองที่สะท้อนภูมิปัญญาการเกษตรของชุมชน เรียนรู้การทำไข่เค็มสูตรดั้งเดิม นั่งรถซาเล้งชมทุ่งนาเขียวขจี และลิ้มรสอาหารพื้นบ้านจากวัตถุดิบท้องถิ่น',
    coverImage: '/localconnect/lemed-chaiya-4.jpg',
    gallery: [
      '/localconnect/lemed-chaiya-1.jpg',
      '/localconnect/lemed-chaiya-2.jpg',
      '/localconnect/lemed-chaiya-3.jpg',
      '/localconnect/lemed-chaiya-4.jpg',
      '/localconnect/lemed-chaiya-5.jpg',
      '/localconnect/lemed-chaiya-6.jpg',
      '/localconnect/lemed-chaiya-7.jpg',
      '/localconnect/lemed-chaiya-8.jpg',
      '/localconnect/lemed-chaiya-9.jpg'
    ],
    foundingYear: 2018,
    householdsInvolved: 20,
    leaderNameTh: 'กลุ่มวิสาหกิจชุมชนท่องเที่ยวเกษตรบ้านเลม็ด',
    leaderTitleTh: 'ประธานวิสาหกิจชุมชนท่องเที่ยวเกษตรบ้านเลม็ด ไชยา',
    leaderAvatar: '/localconnect/lemed-chaiya-5.jpg',
    keyHighlightsTh: [
      'เรียนรู้วิถีเกษตรและเรื่องราวข้าวหอมไชยา ข้าวพื้นเมืองอัตลักษณ์ชุมชน',
      'ลงมือทำไข่เค็มสูตรดั้งเดิม ต้นกำเนิดไข่แดงเลื่องชื่อของไชยา',
      'ลิ้มรสอาหารพื้นบ้านจากวัตถุดิบท้องถิ่นรสชาติเรียบง่าย',
      'นั่งรถซาเล้งชมทุ่งนาเขียวขจีและวิถีชนบทไชยา'
    ],
    activeExperiencesCount: 1,
    totalIncomeGeneratedThb: 850000,
    communityFundSpentThb: 85000,
    fundProjectsTh: [
      'กองทุนอนุรักษ์พันธุ์ข้าวหอมไชยาพื้นเมือง',
      'ทุนส่งเสริมกลุ่มเกษตรกรและแม่บ้านบ้านเลม็ด'
    ]
  },
  {
    id: 'koh-raet',
    nameTh: 'วิสาหกิจชุมชนโฮมสเตย์เกาะแรต',
    nameEn: 'Koh Raet Homestay CBT Community',
    provinceTh: 'สุราษฎร์ธานี (อ่าวบ้านดอน)',
    storyTh: 'ชวนวางความเร่งรีบ เอนกายพักใจในบรรยากาศเรียบง่ายของเกาะแรต สัมผัสวิถีชาวประมงอย่างใกล้ชิด พักโฮมสเตย์อบอุ่น อิ่มอร่อยอาหารทะเลสดใหม่ และเติมสีสันด้วยกิจกรรมชมโลมาสีชมพูในอ่าวบ้านดอน',
    coverImage: '/localconnect/koh-raet-1.jpg',
    gallery: [
      '/localconnect/koh-raet-1.jpg',
      '/localconnect/koh-raet-8.jpg',
      '/localconnect/koh-raet-2.jpg',
      '/localconnect/koh-raet-3.jpg',
      '/localconnect/koh-raet-4.jpg',
      '/localconnect/koh-raet-5.jpg',
      '/localconnect/koh-raet-6.jpg',
      '/localconnect/koh-raet-7.jpg'
    ],
    foundingYear: 2019,
    householdsInvolved: 15,
    leaderNameTh: 'กลุ่มโฮมสเตย์ชุมชนเกาะแรต',
    leaderTitleTh: 'ประธานวิสาหกิจชุมชนโฮมสเตย์เกาะแรต',
    leaderAvatar: '/localconnect/koh-raet-4.jpg',
    keyHighlightsTh: [
      'พักผ่อนสบาย ๆ สัมผัสวิถีชีวิตเรียบง่ายของชาวประมงเกาะแรต',
      'โฮมสเตย์สะอาดอบอุ่น เจ้าบ้านเป็นมิตรดูแลอย่างเป็นกันเอง',
      'ลิ้มรสอาหารทะเลสดใหม่จากวัตถุดิบท้องถิ่น',
      'ล่องเรือชมโลมาสีชมพูในอ่าวบ้านดอน'
    ],
    activeExperiencesCount: 1,
    totalIncomeGeneratedThb: 1200000,
    communityFundSpentThb: 120000,
    fundProjectsTh: [
      'กองทุนพัฒนาโฮมสเตย์ชุมชนเกาะแรต',
      'กองทุนอนุรักษ์โลมาสีชมพูอ่าวบ้านดอน'
    ]
  },
  {
    id: 'thatong',
    nameTh: 'วิสาหกิจชุมชนท่องเที่ยวท่าทอง',
    nameEn: 'Tha Thong CBT Community',
    provinceTh: 'สุราษฎร์ธานี (อ.เมือง)',
    storyTh: 'ชวนใช้เวลาสบาย ๆ ริมอ่าวบ้านดอน ลิ้มรสหอยนางรมสดจากฟาร์ม เรียนรู้วิถีประมงชายฝั่ง ล่องเรือพลังงานแสงอาทิตย์ชมคลองท่าทอง และเฝ้าชมพระอาทิตย์ตกริมอ่าวในเส้นทางท่องเที่ยวคาร์บอนต่ำ',
    coverImage: '/localconnect/thatong-1.jpg',
    gallery: [
      '/localconnect/thatong-1.jpg',
      '/localconnect/thatong-2.jpg',
      '/localconnect/thatong-3.jpg',
      '/localconnect/thatong-4.jpg',
      '/localconnect/thatong-5.jpg',
      '/localconnect/thatong-6.jpg',
      '/localconnect/thatong-7.jpg',
      '/localconnect/thatong-8.jpg'
    ],
    foundingYear: 2017,
    householdsInvolved: 20,
    leaderNameTh: 'กลุ่มวิสาหกิจชุมชนท่องเที่ยวท่าทอง',
    leaderTitleTh: 'ประธานวิสาหกิจชุมชนท่องเที่ยวท่าทอง',
    leaderAvatar: '/localconnect/thatong-1.jpg',
    keyHighlightsTh: [
      'ลิ้มรสหอยนางรมสดจากฟาร์ม สัมผัสรสชาติทะเลอ่าวบ้านดอน',
      'ล่องเรือพลังงานแสงอาทิตย์ชมวิถีริมคลองท่าทอง',
      'เฝ้าชมพระอาทิตย์ตกริมอ่าวบ้านดอน',
      'เส้นทางท่องเที่ยวคาร์บอนต่ำที่เป็นมิตรต่อสิ่งแวดล้อม'
    ],
    activeExperiencesCount: 1,
    totalIncomeGeneratedThb: 700000,
    communityFundSpentThb: 70000,
    fundProjectsTh: [
      'กองทุนพลังงานสะอาดชุมชนท่าทอง',
      'กองทุนอนุรักษ์วิถีประมงชายฝั่งอ่าวบ้านดอน'
    ]
  },
  {
    id: 'wat-prasit',
    nameTh: 'ศูนย์การเรียนรู้ประสิทธิ์ปัญญา',
    nameEn: 'Prasit Panya Learning Center',
    provinceTh: 'สุราษฎร์ธานี (อ.เมือง)',
    storyTh: 'เปิดประสบการณ์เรียนรู้ภูมิปัญญาจาก "ต้นจาก" ผ่านกิจกรรมมัดย้อมสีธรรมชาติ ทำขนมไทย และอาหารพื้นบ้าน โดยรายได้ส่วนหนึ่งสนับสนุนการเรียนรู้และสร้างโอกาสให้แก่นักเรียนด้อยโอกาสและนักเรียนกลุ่มเปราะบาง',
    coverImage: '/localconnect/prasitpanya-1.jpg',
    gallery: [
      '/localconnect/prasitpanya-1.jpg',
      '/localconnect/prasitpanya-4.jpg',
      '/localconnect/prasitpanya-2.jpg',
      '/localconnect/prasitpanya-3.jpg',
      '/localconnect/prasitpanya-5.jpg',
      '/localconnect/prasitpanya-6.jpg',
      '/localconnect/prasitpanya-7.jpg'
    ],
    foundingYear: 2019,
    householdsInvolved: 25,
    leaderNameTh: 'กลุ่มศูนย์การเรียนรู้ประสิทธิ์ปัญญา',
    leaderTitleTh: 'ประธานศูนย์การเรียนรู้ประสิทธิ์ปัญญา',
    leaderAvatar: '/localconnect/prasitpanya-1.jpg',
    keyHighlightsTh: [
      'เรียนรู้ภูมิปัญญาจากต้นจากผ่านกิจกรรมลงมือทำ',
      'สร้างผ้ามัดย้อมจากสีธรรมชาติของเปลือกลูกจาก',
      'ทำขนมไทยและอาหารพื้นบ้านจากวัตถุดิบต้นจาก',
      'รายได้ส่วนหนึ่งส่งต่อโอกาสทางการศึกษาให้เยาวชน'
    ],
    activeExperiencesCount: 1,
    totalIncomeGeneratedThb: 650000,
    communityFundSpentThb: 65000,
    fundProjectsTh: [
      'กองทุนทุนการศึกษานักเรียนด้อยโอกาสวัดประสิทธาราม',
      'กองทุนสืบสานภูมิปัญญาต้นจาก'
    ]
  },
  {
    id: 'don-han',
    nameTh: 'วิสาหกิจชุมชนท่องเที่ยว Amazon ดอนหาร',
    nameEn: 'Amazon Don Han CBT Community',
    provinceTh: 'สุราษฎร์ธานี (อ.เมือง)',
    storyTh: 'สัมผัสความมหัศจรรย์ของผืนป่าโกงกางดอนหาร ผ่านเส้นทางท่องเที่ยวคาร์บอนต่ำ เรียนรู้ความสำคัญของระบบนิเวศชายฝั่ง และปล่อยใจไปกับความสงบของสายน้ำและผืนป่า',
    coverImage: '/localconnect/donhan-3.jpg',
    gallery: [
      '/localconnect/donhan-2.jpg',
      '/localconnect/donhan-1.jpg',
      '/localconnect/donhan-3.jpg',
      '/localconnect/donhan-4.jpg',
      '/localconnect/donhan-5.jpg',
      '/localconnect/donhan-6.jpg',
      '/localconnect/donhan-7.jpg',
      '/localconnect/donhan-8.jpg',
      '/localconnect/donhan-9.jpg',
      '/localconnect/donhan-10.jpg',
      '/localconnect/donhan-11.jpg',
      '/localconnect/donhan-12.jpg'
    ],
    foundingYear: 2018,
    householdsInvolved: 15,
    leaderNameTh: 'กลุ่มวิสาหกิจชุมชนท่องเที่ยว Amazon ดอนหาร',
    leaderTitleTh: 'ประธานวิสาหกิจชุมชนท่องเที่ยวดอนหาร',
    leaderAvatar: '/localconnect/donhan-3.jpg',
    keyHighlightsTh: [
      'สัมผัสความอุดมสมบูรณ์ของระบบนิเวศป่าโกงกางดอนหาร',
      'ล่องเรือพลังงานแสงอาทิตย์เส้นทางคาร์บอนต่ำ',
      'เรียนรู้ความสำคัญของระบบนิเวศชายฝั่ง',
      'ดื่มด่ำความสงบของสายน้ำและผืนป่า'
    ],
    activeExperiencesCount: 1,
    totalIncomeGeneratedThb: 750000,
    communityFundSpentThb: 75000,
    fundProjectsTh: [
      'กองทุนอนุรักษ์ป่าโกงกาง Amazon ดอนหาร',
      'กองทุนพลังงานสะอาดชุมชนดอนหาร'
    ]
  },
  {
    id: 'bang-bai-mai',
    nameTh: 'ห้องเรียนธรรมชาติและชุมชน @ บางใบไม้',
    nameEn: 'Bang Bai Mai Nature & Community Classroom',
    provinceTh: 'สุราษฎร์ธานี (อ.เมือง)',
    storyTh: 'เปิดห้องเรียนที่ไม่มีผนัง ให้เด็ก ๆ ได้สัมผัสธรรมชาติและวิถีชีวิตของชุมชนริมคลองบางใบไม้ ผ่านกิจกรรมฐานการเรียนรู้ที่สนุกและลงมือทำจริง ปลูกฝังแนวคิดการท่องเที่ยวที่ใส่ใจสิ่งแวดล้อม',
    coverImage: '/localconnect/bangbaimai-13.jpg',
    gallery: [
      '/localconnect/bangbaimai-1.jpg',
      '/localconnect/bangbaimai-2.jpg',
      '/localconnect/bangbaimai-3.jpg',
      '/localconnect/bangbaimai-4.jpg',
      '/localconnect/bangbaimai-5.jpg',
      '/localconnect/bangbaimai-6.jpg',
      '/localconnect/bangbaimai-7.jpg',
      '/localconnect/bangbaimai-8.jpg',
      '/localconnect/bangbaimai-9.jpg',
      '/localconnect/bangbaimai-10.jpg',
      '/localconnect/bangbaimai-11.jpg',
      '/localconnect/bangbaimai-12.jpg',
      '/localconnect/bangbaimai-13.jpg',
      '/localconnect/bangbaimai-14.jpg',
      '/localconnect/bangbaimai-15.jpg',
      '/localconnect/bangbaimai-16.jpg',
      '/localconnect/bangbaimai-17.jpg',
      '/localconnect/bangbaimai-18.jpg'
    ],
    foundingYear: 2020,
    householdsInvolved: 20,
    leaderNameTh: 'กลุ่มห้องเรียนธรรมชาติและชุมชนบางใบไม้',
    leaderTitleTh: 'ประธานห้องเรียนธรรมชาติและชุมชน @ บางใบไม้',
    leaderAvatar: '/localconnect/bangbaimai-3.jpg',
    keyHighlightsTh: [
      'เรียนรู้ธรรมชาติ สายน้ำ และวิถีชุมชนริมคลองบางใบไม้',
      'กิจกรรมฐานการเรียนรู้ 6 ฐาน ออกแบบสำหรับเยาวชน',
      'ลิ้มรสอาหารพื้นบ้านเรียบง่ายเหมาะกับเด็ก ๆ',
      'ปลูกฝังแนวคิดการท่องเที่ยวที่ใส่ใจสิ่งแวดล้อม'
    ],
    activeExperiencesCount: 1,
    totalIncomeGeneratedThb: 400000,
    communityFundSpentThb: 40000,
    fundProjectsTh: [
      'กองทุนห้องเรียนธรรมชาติบางใบไม้',
      'กองทุนอนุรักษ์คลองบางใบไม้'
    ]
  },
  {
    id: 'suan-lung-um',
    nameTh: 'พิมพ์รดารีสอร์ท สวนลุงอุ่ม',
    nameEn: 'Pimrada Resort at Suan Lung Um',
    provinceTh: 'สุราษฎร์ธานี (อ.บ้านตาขุน)',
    storyTh: 'ใช้เวลาสองวันหนึ่งคืนอย่างเรียบง่าย ณ พิมพ์รดารีสอร์ท ท่ามกลางบรรยากาศร่มรื่นของสวนสมรม "สวนลุงอุ่ม" เก็บวัตถุดิบสดจากสวนมาปรุงอาหารเอง ทำดอกไม้ไหว้พระ และเดินขึ้นเขาชิงชันชมวิวเขื่อนรัชชประภา',
    coverImage: '/localconnect/suan-lung-um-1.jpg',
    gallery: [
      '/localconnect/suan-lung-um-1.jpg',
      '/localconnect/organic-garden-flower.jpg',
      '/localconnect/garland-making-2.jpg',
      '/localconnect/memorial-monument.jpg'
    ],
    foundingYear: 2021,
    householdsInvolved: 10,
    leaderNameTh: 'ลุงอุ่ม เจ้าของสวนสมรม',
    leaderTitleTh: 'ประธานพิมพ์รดารีสอร์ท สวนลุงอุ่ม',
    leaderAvatar: '/localconnect/suan-lung-um-1.jpg',
    keyHighlightsTh: [
      'พักผ่อนท่ามกลางความร่มรื่นของสวนสมรม',
      'เก็บวัตถุดิบสดจากสวนมารังสรรค์อาหารเย็นด้วยตัวเอง',
      'ประดิษฐ์ช่อดอกไม้จากพืชพรรณในสวน',
      'เดินขึ้นเขาชิงชันชมวิวชุมชนรอบเขื่อนรัชชประภา'
    ],
    activeExperiencesCount: 1,
    totalIncomeGeneratedThb: 900000,
    communityFundSpentThb: 90000,
    fundProjectsTh: [
      'กองทุนพัฒนาสวนสมรมชุมชนบ้านตาขุน',
      'กองทุนยุวมัคคุเทศก์สวนลุงอุ่ม'
    ]
  },
  {
    id: 'koh-set',
    nameTh: 'กลุ่มท่องเที่ยวเชิงอนุรักษ์บ้านพุมเรียง',
    nameEn: 'Ban Phum Riang Eco-Tourism Group',
    provinceTh: 'สุราษฎร์ธานี (ต.พุมเรียง อ.ไชยา)',
    storyTh: 'สัมผัสเสน่ห์ทะเลอ่าวบ้านดอนที่เกาะเสร็จ เกาะเล็กใกล้ฝั่งที่ยังคงความเป็นธรรมชาติ ร่วมกิจกรรม CSR ปล่อยปูและดูแลป่าโกงกาง สนุกกับการหาหอย และพักผ่อนบนหาดทรายที่เป็นส่วนตัว',
    coverImage: '/localconnect/kohset-2.jpg',
    gallery: [
      '/localconnect/kohset-2.jpg',
      '/localconnect/kohset-1.jpg',
      '/localconnect/kohset-4.jpg',
      '/localconnect/kohset-3.jpg',
      '/localconnect/kohset-5.jpg'
    ],
    foundingYear: 2018,
    householdsInvolved: 20,
    leaderNameTh: 'คุณจรินทร์ เฉยเชยชม',
    leaderTitleTh: 'ประธานกลุ่มท่องเที่ยวเชิงอนุรักษ์บ้านพุมเรียง โทร. 092-379-3969',
    leaderAvatar: '/localconnect/kohset-2.jpg',
    keyHighlightsTh: [
      'ร่วมกิจกรรม CSR ปล่อยปูและดูแลป่าโกงกาง',
      'สนุกกับการหาหอยนานาชนิดในอ่าวบ้านดอน',
      'พักผ่อนบนหาดทรายส่วนตัวของเกาะเล็กใกล้ฝั่ง',
      'เที่ยวสนุก พร้อมส่งต่อคุณค่าให้ธรรมชาติและชุมชน'
    ],
    activeExperiencesCount: 1,
    totalIncomeGeneratedThb: 1100000,
    communityFundSpentThb: 110000,
    fundProjectsTh: [
      'บ้านปลาธนาคารปู',
      'กองทุนอนุรักษ์ป่าโกงกางเกาะเสร็จ',
      'กองทุน CSR ปล่อยพันธุ์สัตว์น้ำอ่าวบ้านดอน'
    ]
  }
];

export const SAMPLE_EXPERIENCES: Experience[] = [
  {
    id: 'khao-thep-phithak-suspension',
    titleTh: 'เขาเทพพิทักษ์: การเดินทางด้วยหัวใจ',
    titleEn: 'Heart of Khlong Sang: A Journey into Nature and Local Life',
    subtitleTh: 'เดินทางอย่างมีความหมาย สัมผัสเสน่ห์แห่งวิถีชุมชนริมคลองแสง-สายน้ำจากเขื่อนรัชชประภา',
    communityNameTh: 'วิสาหกิจชุมชนท่องเที่ยวเชิงอนุรักษ์บ้านเขาเทพพิทักษ์',
    communityNameEn: 'Khao Thep Phithak Eco-Tourism CBT',
    communityId: 'khao-thep-phithak',
    locationTh: 'หมู่ 1 ต.เขาพัง อ.บ้านตาขุน จ.สุราษฎร์ธานี',
    locationEn: 'Ban Ta Khun, Surat Thani',
    region: 'south',
    category: 'nature',
    priceThbPerPerson: 1100,
    durationText: '4 ชั่วโมง (10:00 - 14:00 น.)',
    maxGroupSize: 10,
    rating: 4.96,
    reviewCount: 62,
    coverImage: '/localconnect/suspension-bridge-wide.jpg',
    images: [
      '/localconnect/suspension-bridge-wide.jpg',
      '/localconnect/wat-khao-phang-temple.jpg',
      '/localconnect/suspension-bridge-motorbike.jpg',
      '/localconnect/elder-luk-wue-craft.jpg',
      '/localconnect/local-food-dishes.jpg'
    ],
    descriptionTh: 'สัมผัสเรื่องราวและวิถีชีวิตของชุมชนคลองแสง เริ่มต้นด้วยการเรียนรู้ความศรัทธาของชาวชุมชนเขาพัง ณ วัดเขาพัง ข้ามสะพานแขวนภูเขารูปหัวใจ เชื่อมโยงกับธรรมชาติท่ามกลางอ้อมกอดของขุนเขา เรียนรู้วิถีสวนยางและสวนผลไม้ พร้อมลิ้มรสทุเรียนคลองแสงร้อยปี เปิดประสบการณ์ทำอาหารพื้นถิ่นเพื่อสุขภาพ และสนุกกับ "ลูกหวือ" ของเล่นพื้นบ้านที่ถ่ายทอดจากผู้สูงอายุ สะท้อนภูมิปัญญาและคุณค่าที่ชุมชนตั้งใจรักษาและส่งต่อจากรุ่นสู่รุ่น',
    highlightsTh: [
      'เรื่องราวของชาวคลองแสง สัมผัสความศรัทธาของคนในชุมชนเขาพังที่มีต่อพุทธศาสนา ที่วัดเขาพัง',
      'ข้ามสะพานแขวนภูเขารูปหัวใจ ไปเชื่อมต่อกับธรรมชาติในอ้อมกอดของภูเขา',
      'เรียนรู้วิถีการทำสวนยางพารา สวนผลไม้ ที่มีทุเรียนคลองแสงร้อยปีที่โด่งดัง',
      'เปิดประสบการณ์การทำอาหารท้องถิ่น และลิ้มรสชาติอาหารพื้นบ้านที่ดีต่อสุขภาพ',
      'สนุกกับของเล่นพื้นบ้าน "ลูกหวือ" ผ่านการถ่ายทอดของผู้สูงอายุที่ต้องการรักษาและส่งต่อคุณค่าความดั้งเดิม'
    ],
    includedTh: [
      'ไกด์ท้องถิ่น (Local guide)',
      'กิจกรรมทำอาหารท้องถิ่น (Cooking class)',
      'อาหารกลางวันร่วมกับคนในชุมชน (Lunch with locals)',
      'ของเล่นพื้นบ้าน "ลูกหวือ" เป็นของที่ระลึก (Folk toy as a souvenir)'
    ],
    itinerary: [
      { time: '10:00', titleTh: 'ไหว้พระวัดเขาพัง', descTh: 'สัมผัสความศรัทธาของชาวชุมชนคลองแสงที่มีต่อพุทธศาสนา' },
      { time: '10:45', titleTh: 'เดินข้ามสะพานแขวนภูเขารูปหัวใจ', descTh: 'เชื่อมต่อกับธรรมชาติในอ้อมกอดของภูเขา ถ่ายภาพวิวอันซีน' },
      { time: '11:30', titleTh: 'เรียนรู้วิถีสวนยางพาราและทุเรียนคลองแสง', descTh: 'ชมสวนผลไม้และชิมทุเรียนคลองแสงร้อยปีที่โด่งดัง' },
      { time: '12:30', titleTh: 'อาหารท้องถิ่นเพื่อสุขภาพ', descTh: 'Cooking class และลิ้มรสอาหารพื้นบ้านร่วมกับคนในชุมชน' },
      { time: '13:30', titleTh: 'สนุกกับ "ลูกหวือ" ของเล่นพื้นบ้าน', descTh: 'เรียนรู้ของเล่นพื้นบ้านจากผู้สูงอายุ ก่อนเดินทางกลับ' }
    ],
    hostNameTh: 'ผู้ใหญ่บ้านสมศักดิ์ บ้านเขาพัง',
    hostRoleTh: 'ประธานวิสาหกิจบ้านเขาเทพพิทักษ์',
    hostAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    breakdownLevel1: {
      communitySharePct: 82,
      paymentGatewayPct: 2,
      communityManagerPct: 2,
      insuranceSupportPct: 0,
      platformDevOpsPct: 14
    },
    distributionLevel2: {
      homestayPct: 0,
      guideLeaderPct: 33,
      localMealsPct: 42,
      localTransportPct: 0,
      communityFundPct: 11,
      handicraftPct: 9,
      insurancePct: 5
    },
    impact: {
      jobsSupported: 6,
      treesPlanted: 8,
      localIncomeGeneratedThb: 900,
      culturalPreservationItems: ['อนุรักษ์พันธุ์ทุเรียนคลองแสงร้อยปี', 'สืบสานของเล่นพื้นบ้าน "ลูกหวือ"']
    },
    isFeatured: true,
    isB2BRecommended: true
  },
  {
    id: 'chiew-lan-local-journey',
    titleTh: 'บ้านเชี่ยวหลาน…….ทอผ้า ทอใจ',
    titleEn: 'Ban Chiew Lan: Weaving Threads, Weaving Hearts',
    subtitleTh: 'ทอใจไปกับเส้นด้าย • สร้างสรรค์ของที่ระลึกด้วยมือ • ลิ้มรสอาหารพื้นบ้านเพื่อสุขภาพ',
    communityNameTh: 'วิสาหกิจชุมชนผ้าทอบ้านเชี่ยวหลาน',
    communityNameEn: 'Ban Chiew Lan Weaving CBT Community',
    communityId: 'chiew-lan',
    locationTh: 'หมู่ 4-5 บ้านเชี่ยวหลาน ต.เขาพัง อ.บ้านตาขุน จ.สุราษฎร์ธานี',
    locationEn: 'Ban Ta Khun, Surat Thani',
    region: 'south',
    category: 'craft',
    priceThbPerPerson: 2100,
    durationText: '6 ชั่วโมง (09:00 - 15:00 น.)',
    maxGroupSize: 4,
    rating: 4.9,
    reviewCount: 9,
    coverImage: '/localconnect/weaver-man-loom.jpg',
    images: [
      '/localconnect/weaver-man-loom.jpg',
      '/localconnect/weaver-woman-loom-wide.jpg',
      '/localconnect/woven-fabric-closeup.jpg',
      '/localconnect/organic-garden-flower.jpg',
      '/localconnect/memorial-monument.jpg',
      '/localconnect/thai-food-plate.jpg',
      '/localconnect/chiew-lan-pha-khaoma.jpg',
      '/localconnect/chiew-lan-pha-khaoma-1.jpg',
      '/localconnect/chiew-lan-pha-khaoma-2.jpg'
    ],
    descriptionTh: 'ชวนคุณชะลอความเร่งรีบ แล้วกลับมาอยู่กับตัวเองผ่านการปั่นด้ายและทอผ้า ฝึกสมาธิไปกับจังหวะของมือและเส้นด้าย สร้างของที่ระลึกด้วยตัวเอง และลิ้มรสอาหารพื้นบ้านเพื่อสุขภาพ ท่ามกลางวิถีเรียบง่ายของบ้านเชี่ยวหลาน',
    highlightsTh: [
      'ทอใจไปกับเส้นด้าย — เรียนรู้การปั่นด้ายและทอผ้าอย่างช้า ๆ พร้อมสัมผัสความสงบและสมาธิจากงานหัตถกรรม',
      'ถักทอความทรงจำ — สร้างสรรค์ของที่ระลึก D.I.Y. จากเส้นด้ายด้วยตัวเอง',
      'อิ่มอร่อยจากวิถีพื้นถิ่น — ลิ้มรสอาหารพื้นบ้านที่สะท้อนภูมิปัญญาและส่งเสริมสุขภาพ'
    ],
    includedTh: [
      'กิจกรรมปั่นด้าย-ทอผ้าขาวม้า',
      'ของที่ระลึกทำจากผ้าขาวม้าทอมือ',
      'อาหารกลางวันเมนูสมุนไพรพื้นบ้าน 1 มื้อ',
      'อาหารว่างเพื่อสุขภาพ'
    ],
    itinerary: [
      { time: '09:00', titleTh: 'ต้อนรับและเริ่มปั่นด้าย', descTh: 'เรียนรู้การปั่นด้ายอย่างช้า ๆ สัมผัสความสงบและสมาธิจากจังหวะของมือ' },
      { time: '10:30', titleTh: 'ทอผ้าขาวม้าด้วยมือ', descTh: 'ฝึกทอผ้าขาวม้ากับช่างทอบ้านเชี่ยวหลานอย่างใกล้ชิด' },
      { time: '12:00', titleTh: 'อาหารกลางวันเมนูสมุนไพรพื้นบ้าน', descTh: 'ลิ้มรสอาหารพื้นถิ่นเพื่อสุขภาพ 1 มื้อ พร้อมอาหารว่าง' },
      { time: '13:30', titleTh: 'สร้างของที่ระลึก D.I.Y.', descTh: 'ประดิษฐ์ของที่ระลึกจากผ้าขาวม้าทอมือด้วยตัวเอง ก่อนเดินทางกลับ 15:00 น.' }
    ],
    hostNameTh: 'กลุ่มทอผ้าบ้านเชี่ยวหลาน',
    hostRoleTh: 'ประธานวิสาหกิจชุมชนผ้าทอบ้านเชี่ยวหลาน',
    hostAvatar: '/localconnect/weaver-man-loom.jpg',
    breakdownLevel1: {
      communitySharePct: 83,
      paymentGatewayPct: 2,
      communityManagerPct: 2,
      insuranceSupportPct: 0,
      platformDevOpsPct: 13
    },
    distributionLevel2: {
      homestayPct: 0,
      guideLeaderPct: 11,
      localMealsPct: 17,
      localTransportPct: 0,
      communityFundPct: 3,
      handicraftPct: 69,
      insurancePct: 0
    },
    impact: {
      jobsSupported: 8,
      treesPlanted: 4,
      localIncomeGeneratedThb: 1750,
      culturalPreservationItems: ['สืบสานภูมิปัญญาผ้าทอบ้านเชี่ยวหลาน', 'อนุรักษ์ลายผ้าทอมือดั้งเดิม']
    },
    isFeatured: true,
    isB2BRecommended: true
  },
  {
    id: 'lemed-chaiya-rice-egg',
    titleTh: 'ข้าวหอม-ไข่เค็ม…..เต็มคำที่ไชยา',
    titleEn: 'Chaiya Fragrant Rice & Salted Egg: A Full Bite of Local Flavor',
    subtitleTh: 'จากท้องนา สู่สำรับ จากภูมิปัญญา สู่รสชาติ',
    communityNameTh: 'วิสาหกิจชุมชนท่องเที่ยวเกษตรบ้านเลม็ด ไชยา',
    communityNameEn: 'Ban Lemed Chaiya Agro-Tourism CBT Community',
    communityId: 'lemed',
    locationTh: 'ต.เลม็ด อ.ไชยา จ.สุราษฎร์ธานี',
    locationEn: 'Chaiya, Surat Thani',
    region: 'south',
    category: 'food',
    priceThbPerPerson: 780,
    durationText: '4 ชั่วโมง (09:00 - 13:00 น.)',
    maxGroupSize: 20,
    rating: 4.9,
    reviewCount: 12,
    coverImage: '/localconnect/lemed-chaiya-4.jpg',
    images: [
      '/localconnect/lemed-chaiya-1.jpg',
      '/localconnect/lemed-chaiya-2.jpg',
      '/localconnect/lemed-chaiya-3.jpg',
      '/localconnect/lemed-chaiya-4.jpg',
      '/localconnect/lemed-chaiya-5.jpg',
      '/localconnect/lemed-chaiya-6.jpg',
      '/localconnect/lemed-chaiya-7.jpg',
      '/localconnect/lemed-chaiya-8.jpg',
      '/localconnect/lemed-chaiya-9.jpg'
    ],
    descriptionTh: 'ชวนออกเดินทางสัมผัสเสน่ห์ของไชยาผ่านเรื่องราวของ "ข้าวหอมไชยา" ข้าวสายพันธุ์พื้นเมืองที่สะท้อนภูมิปัญญาและวิถีเกษตรของชุมชน เรียนรู้การทำไข่เค็มสูตรดั้งเดิม ไข่แดงสีสวยที่เป็นส่วนหนึ่งของเรื่องราวในคำขวัญจังหวัดสุราษฎร์ธานี ก่อนอิ่มอร่อยกับอาหารพื้นบ้านรสชาติเรียบง่ายจากวัตถุดิบท้องถิ่น นั่งรถซาเล้งชมทุ่งนาเขียวขจี เก็บภาพความงดงามของชนบทไชยา และสัมผัสวิถีชีวิตที่ยังคงผูกพันกับผืนดินและอาหารอย่างใกล้ชิด',
    highlightsTh: [
      'เรียนรู้จากผืนนา — สัมผัสวิถีเกษตรและเรียนรู้เรื่องราวของ "ข้าวหอมไชยา" ข้าวพื้นเมืองอัตลักษณ์ของชุมชน',
      'ไข่เค็มสูตรดั้งเดิม — ลงมือเรียนรู้ภูมิปัญญาการทำไข่เค็มไชยา ต้นกำเนิดความโดดเด่นของ "ไข่แดง" ที่ปรากฏในคำขวัญจังหวัดสุราษฎร์ธานี',
      'อิ่มอร่อยแบบไชยา — ลิ้มรสอาหารพื้นบ้านจากวัตถุดิบท้องถิ่น รสชาติเรียบง่ายและอบอุ่น',
      'ซาเล้งพาเที่ยวท้องนา — นั่งรถซาเล้งชมทุ่งนาเขียวขจี แวะเก็บภาพสวย ๆ และสัมผัสบรรยากาศชนบทอย่างใกล้ชิด'
    ],
    includedTh: [
      'กิจกรรมเรียนรู้ข้าวหอมไชยาและไข่เค็ม',
      'รถซาเล้งนำชมทุ่งนาและชุมชน',
      'อาหารว่างและอาหารกลางวันเมนูพื้นบ้าน',
      'มัคคุเทศก์ท้องถิ่น'
    ],
    itinerary: [
      { time: '09:00', titleTh: 'ต้อนรับและนั่งรถซาเล้งชมทุ่งนา', descTh: 'นั่งรถซาเล้งชมทุ่งนาเขียวขจีและบรรยากาศชนบทไชยา' },
      { time: '09:45', titleTh: 'เรียนรู้เรื่องข้าวหอมไชยา', descTh: 'สัมผัสวิถีเกษตรและเรียนรู้ข้าวพื้นเมืองอัตลักษณ์ของชุมชน' },
      { time: '10:30', titleTh: 'เวิร์กชอปไข่เค็มสูตรดั้งเดิม', descTh: 'ลงมือเรียนรู้ภูมิปัญญาการทำไข่เค็มไชยา ต้นกำเนิด "ไข่แดง" เลื่องชื่อ' },
      { time: '12:00', titleTh: 'อาหารกลางวันพื้นบ้านไชยา', descTh: 'อิ่มอร่อยกับอาหารพื้นบ้านรสชาติเรียบง่ายจากวัตถุดิบท้องถิ่น ก่อนเดินทางกลับ 13:00 น.' }
    ],
    hostNameTh: 'กลุ่มวิสาหกิจชุมชนท่องเที่ยวเกษตรบ้านเลม็ด',
    hostRoleTh: 'ประธานวิสาหกิจชุมชนท่องเที่ยวเกษตรบ้านเลม็ด ไชยา',
    hostAvatar: '/localconnect/lemed-chaiya-5.jpg',
    breakdownLevel1: {
      communitySharePct: 81,
      paymentGatewayPct: 2,
      communityManagerPct: 2,
      insuranceSupportPct: 0,
      platformDevOpsPct: 15
    },
    distributionLevel2: {
      homestayPct: 0,
      guideLeaderPct: 23,
      localMealsPct: 40,
      localTransportPct: 32,
      communityFundPct: 5,
      handicraftPct: 0,
      insurancePct: 0
    },
    impact: {
      jobsSupported: 5,
      treesPlanted: 0,
      localIncomeGeneratedThb: 630,
      culturalPreservationItems: ['สืบสานพันธุ์ข้าวหอมไชยาพื้นเมือง', 'อนุรักษ์ภูมิปัญญาไข่เค็มไชยาดั้งเดิม']
    },
    isFeatured: true,
    isB2BRecommended: false
  },
  {
    id: 'koh-raet-homestay',
    titleTh: 'เอนกายโฮมสเตย์ เฮฮาที่เกาะแรต',
    titleEn: 'Koh Raet Homestay Retreat: Rest, Reconnect & Fisherman Life',
    subtitleTh: 'พักง่าย ๆ ใช้เวลาร่วมกัน และสัมผัสวิถีชาวประมง',
    communityNameTh: 'วิสาหกิจชุมชนโฮมสเตย์เกาะแรต',
    communityNameEn: 'Koh Raet Homestay CBT Community',
    communityId: 'koh-raet',
    locationTh: 'เกาะแรต อ่าวบ้านดอน จ.สุราษฎร์ธานี',
    locationEn: 'Koh Raet, Ban Don Bay, Surat Thani',
    region: 'south',
    category: 'csr',
    priceThbPerPerson: 2300,
    durationText: '2 วัน 1 คืน',
    maxGroupSize: 40,
    rating: 4.8,
    reviewCount: 6,
    coverImage: '/localconnect/koh-raet-1.jpg',
    images: [
      '/localconnect/koh-raet-1.jpg',
      '/localconnect/koh-raet-8.jpg',
      '/localconnect/koh-raet-2.jpg',
      '/localconnect/koh-raet-3.jpg',
      '/localconnect/koh-raet-4.jpg',
      '/localconnect/koh-raet-5.jpg',
      '/localconnect/koh-raet-6.jpg',
      '/localconnect/koh-raet-7.jpg'
    ],
    descriptionTh: 'ชวนวางความเร่งรีบ แล้วเอนกายพักใจในบรรยากาศเรียบง่ายของเกาะแรต สัมผัสวิถีชีวิตชาวประมงอย่างใกล้ชิด พักในโฮมสเตย์สะอาดและอบอุ่น พร้อมต้อนรับด้วยอาหารทะเลสดใหม่จากท้องถิ่น เติมสีสันด้วยกิจกรรมชมโลมาสีชมพู และใช้เวลาร่วมกันอย่างเป็นกันเอง เหมาะสำหรับกลุ่มเล็ก ครอบครัว เพื่อน หรือองค์กรที่ต้องการจัดประชุมและกิจกรรมพัฒนาทีมในบรรยากาศผ่อนคลาย คุ้มค่า และเข้าถึงง่าย พร้อมเชื่อมต่อการเดินทางสู่เกาะสมุยได้อย่างสะดวก',
    highlightsTh: [
      'ช้าลงกับวิถีชาวประมง — พักผ่อนอย่างสบาย ๆ และสัมผัสจังหวะชีวิตเรียบง่ายของชุมชนเกาะแรต',
      'พักอบอุ่นเหมือนบ้าน — โฮมสเตย์สะอาด เจ้าบ้านเป็นมิตร และดูแลอย่างเป็นกันเอง',
      'สดจากทะเลถึงสำรับ — ลิ้มรสอาหารทะเลสดใหม่จากวัตถุดิบท้องถิ่น',
      'ออกไปพบโลมาสีชมพู — เติมประสบการณ์การเดินทางด้วยกิจกรรมชมโลมาสีชมพูในอ่าวบ้านดอน',
      'พบกัน พักผ่อน และเติบโตไปด้วยกัน — พื้นที่สำหรับการประชุมและกิจกรรมพัฒนาทีมขนาดเล็ก ในบรรยากาศสบาย ๆ และงบประมาณที่เข้าถึงได้',
      'เดินทางง่าย เชื่อมต่อสมุย — ใกล้ท่าเรือเฟอร์รี่ สะดวกต่อการเดินทางต่อไปยังเกาะสมุย'
    ],
    includedTh: [
      'บริการห้องประชุม',
      'กิจกรรม CSR',
      'โฮมสเตย์ 1 คืน รวมอาหาร 2 มื้อ',
      'อาหารระหว่างกิจกรรมประชุม/พัฒนาทีม 2 มื้อ',
      'ยุวมัคคุเทศก์',
      'กิจกรรมชมโลมาสีชมพู'
    ],
    itinerary: [
      { time: 'วันที่ 1 · 09:00', titleTh: 'เดินทางถึงเกาะแรต เช็คอินโฮมสเตย์', descTh: 'ต้อนรับและพักผ่อนในโฮมสเตย์สะอาดอบอุ่น สัมผัสวิถีชาวประมงอย่างใกล้ชิด' },
      { time: 'วันที่ 1 · 12:00', titleTh: 'อาหารทะเลสดใหม่มื้อกลางวัน', descTh: 'ลิ้มรสอาหารทะเลสดใหม่จากวัตถุดิบท้องถิ่น' },
      { time: 'วันที่ 1 · 14:00', titleTh: 'กิจกรรมประชุมและพัฒนาทีม', descTh: 'ร่วมกิจกรรม CSR และพัฒนาทีมขนาดเล็กในบรรยากาศผ่อนคลาย' },
      { time: 'วันที่ 2 · 08:00', titleTh: 'ล่องเรือชมโลมาสีชมพู', descTh: 'ออกเรือชมโลมาสีชมพูในอ่าวบ้านดอน เติมสีสันให้ทริป' },
      { time: 'วันที่ 2 · 11:00', titleTh: 'อำลาเกาะแรต เดินทางกลับ', descTh: 'เดินทางกลับหรือเชื่อมต่อสู่เกาะสมุยได้อย่างสะดวก' }
    ],
    hostNameTh: 'กลุ่มโฮมสเตย์ชุมชนเกาะแรต',
    hostRoleTh: 'ประธานวิสาหกิจชุมชนโฮมสเตย์เกาะแรต',
    hostAvatar: '/localconnect/koh-raet-4.jpg',
    breakdownLevel1: {
      communitySharePct: 83,
      paymentGatewayPct: 2,
      communityManagerPct: 2,
      insuranceSupportPct: 0,
      platformDevOpsPct: 13
    },
    distributionLevel2: {
      homestayPct: 66,
      guideLeaderPct: 5,
      localMealsPct: 26,
      localTransportPct: 0,
      communityFundPct: 3,
      handicraftPct: 0,
      insurancePct: 0
    },
    impact: {
      jobsSupported: 10,
      treesPlanted: 0,
      localIncomeGeneratedThb: 1900,
      culturalPreservationItems: ['สืบสานวิถีชาวประมงเกาะแรต', 'อนุรักษ์แหล่งที่อยู่โลมาสีชมพูอ่าวบ้านดอน']
    },
    isFeatured: true,
    isB2BRecommended: true
  },
  {
    id: 'thatong-oyster-sunset',
    titleTh: 'กินหอย คอยตะวัน',
    titleEn: 'Tha Thong: Oysters & Sunset — A Low-Carbon Canal Journey',
    subtitleTh: 'เส้นทางท่องเที่ยวคาร์บอนต่ำ ล่องคลองท่าทอง ชมตะวันลับฟ้าริมอ่าวบ้านดอน',
    communityNameTh: 'วิสาหกิจชุมชนท่องเที่ยวท่าทอง',
    communityNameEn: 'Tha Thong CBT Community',
    communityId: 'thatong',
    locationTh: 'ต.ท่าทอง อ.เมือง จ.สุราษฎร์ธานี',
    locationEn: 'Mueang, Surat Thani',
    region: 'south',
    category: 'food',
    priceThbPerPerson: 800,
    durationText: '4 ชั่วโมง (14:00 - 18:00 น.)',
    maxGroupSize: 10,
    rating: 4.8,
    reviewCount: 7,
    coverImage: '/localconnect/thatong-1.jpg',
    images: [
      '/localconnect/thatong-1.jpg',
      '/localconnect/thatong-2.jpg',
      '/localconnect/thatong-3.jpg',
      '/localconnect/thatong-4.jpg',
      '/localconnect/thatong-5.jpg',
      '/localconnect/thatong-6.jpg',
      '/localconnect/thatong-7.jpg',
      '/localconnect/thatong-8.jpg'
    ],
    descriptionTh: 'ชวนคุณใช้เวลาสบาย ๆ ริมอ่าวบ้านดอน เริ่มต้นด้วยการลิ้มรสหอยนางรมสด ๆ จากฟาร์ม เรียนรู้เสน่ห์ของวิถีประมงชายฝั่ง ก่อนออกเรือล่องคลองท่าทอง ชมธรรมชาติและบรรยากาศอันงดงามของอ่าวบ้านดอน ปิดท้ายวันด้วยช่วงเวลาพิเศษริมอ่าว เฝ้าชมแสงสุดท้ายของวันค่อย ๆ ลับขอบฟ้า เป็นประสบการณ์เรียบง่ายที่รวมรสชาติของทะเล สายน้ำ และความงดงามของพระอาทิตย์ตกไว้ในวันเดียว',
    highlightsTh: [
      'สดจากฟาร์ม ถึงคำแรก — ลิ้มรสหอยนางรมสด ๆ จากฟาร์ม สัมผัสรสชาติของทะเลอ่าวบ้านดอน',
      'ล่องคลองท่าทอง — นั่งเรือชมวิถีริมคลองและธรรมชาติอันงดงามของอ่าวบ้านดอน',
      'คอยตะวันริมอ่าว — ปล่อยเวลาให้ช้าลง ดื่มด่ำกับแสงสุดท้ายและพระอาทิตย์ตกเหนืออ่าวบ้านดอน',
      'เส้นทางท่องเที่ยวคาร์บอนต่ำ — อิ่มอร่อยกับเมนูอาหารทะเลคาร์บอนต่ำ ล่องเรือพลังงานแสงแดด'
    ],
    includedTh: [
      'เรือหางยาวพลังงานแสงอาทิตย์',
      'อาหารกลางวันและอาหารว่าง',
      'มัคคุเทศก์ท้องถิ่น'
    ],
    itinerary: [
      { time: '14:00', titleTh: 'ลิ้มรสหอยนางรมสดจากฟาร์ม', descTh: 'สัมผัสรสชาติทะเลอ่าวบ้านดอนก่อนออกเดินทาง' },
      { time: '15:00', titleTh: 'ล่องเรือพลังงานแสงอาทิตย์ชมคลองท่าทอง', descTh: 'นั่งเรือชมวิถีริมคลองและธรรมชาติอันงดงาม' },
      { time: '17:00', titleTh: 'คอยตะวันริมอ่าวบ้านดอน', descTh: 'ดื่มด่ำกับแสงสุดท้ายและพระอาทิตย์ตกก่อนเดินทางกลับ 18:00 น.' }
    ],
    hostNameTh: 'กลุ่มวิสาหกิจชุมชนท่องเที่ยวท่าทอง',
    hostRoleTh: 'ประธานวิสาหกิจชุมชนท่องเที่ยวท่าทอง',
    hostAvatar: '/localconnect/thatong-1.jpg',
    breakdownLevel1: {
      communitySharePct: 80,
      paymentGatewayPct: 2,
      communityManagerPct: 2,
      insuranceSupportPct: 0,
      platformDevOpsPct: 16
    },
    distributionLevel2: {
      homestayPct: 0,
      guideLeaderPct: 16,
      localMealsPct: 46,
      localTransportPct: 16,
      communityFundPct: 22,
      handicraftPct: 0,
      insurancePct: 0
    },
    impact: {
      jobsSupported: 4,
      treesPlanted: 0,
      localIncomeGeneratedThb: 640,
      culturalPreservationItems: ['สืบสานวิถีประมงชายฝั่งท่าทอง', 'ส่งเสริมเส้นทางท่องเที่ยวคาร์บอนต่ำ']
    },
    isFeatured: true,
    isB2BRecommended: false
  },
  {
    id: 'prasit-panya-batik',
    titleTh: 'ศูนย์การเรียนรู้ประสิทธิ์ปัญญา',
    titleEn: 'Prasit Panya Learning Center: Nipa Palm Wisdom for the Next Generation',
    subtitleTh: 'จากภูมิปัญญาท้องถิ่น สู่โอกาสทางการศึกษาสำหรับเยาวชนในชุมชน',
    communityNameTh: 'ศูนย์การเรียนรู้ประสิทธิ์ปัญญา',
    communityNameEn: 'Prasit Panya Learning Center',
    communityId: 'wat-prasit',
    locationTh: 'อ.เมือง จ.สุราษฎร์ธานี',
    locationEn: 'Mueang, Surat Thani',
    region: 'south',
    category: 'craft',
    priceThbPerPerson: 925,
    durationText: '5 ชั่วโมง (10:00 - 15:00 น.)',
    maxGroupSize: 20,
    rating: 4.85,
    reviewCount: 9,
    coverImage: '/localconnect/prasitpanya-1.jpg',
    images: [
      '/localconnect/prasitpanya-1.jpg',
      '/localconnect/prasitpanya-4.jpg',
      '/localconnect/prasitpanya-2.jpg',
      '/localconnect/prasitpanya-3.jpg',
      '/localconnect/prasitpanya-5.jpg',
      '/localconnect/prasitpanya-6.jpg',
      '/localconnect/prasitpanya-7.jpg'
    ],
    descriptionTh: 'เปิดประสบการณ์เรียนรู้ภูมิปัญญาจาก "ต้นจาก" ผ่านกิจกรรมที่ชวนลงมือทำ ตั้งแต่การสร้างสรรค์ผ้ามัดย้อมจากสีธรรมชาติของเปลือกลูกจาก การทำขนมไทยจากใบและลูกจาก ไปจนถึงการลิ้มรสอาหารพื้นบ้านที่นำวัตถุดิบจากต้นจากมารังสรรค์เป็นเมนูท้องถิ่น พร้อมสัมผัสเรื่องราวของชุมชนที่เปลี่ยนภูมิปัญญาให้เป็นโอกาส เพราะส่วนหนึ่งของรายได้จากกิจกรรมถูกนำไปสนับสนุนการเรียนรู้และสร้างโอกาสในการหารายได้ให้แก่นักเรียนด้อยโอกาสและนักเรียนกลุ่มเปราะบาง เป็นประสบการณ์ที่ได้ทั้งความรู้ ความอร่อย และการส่งต่อโอกาสให้คนรุ่นใหม่',
    highlightsTh: [
      'เรียนรู้ภูมิปัญญาจากต้นจาก — สัมผัสคุณค่าของต้นจากผ่านกิจกรรมสร้างสรรค์ที่ลงมือทำด้วยตัวเอง',
      'สีสันจากธรรมชาติ — สร้างผ้ามัดย้อมจากสีธรรมชาติของเปลือกลูกจาก เรียนรู้เสน่ห์ของสีที่เกิดจากภูมิปัญญาท้องถิ่น',
      'หวานหอมจากใบและลูกจาก — ลงมือทำขนมไทย เรียนรู้การใช้วัตถุดิบท้องถิ่นอย่างสร้างสรรค์',
      'อิ่มอร่อยกับสำรับจากต้นจาก — ลิ้มรสอาหารพื้นบ้านที่นำวัตถุดิบจากต้นจากมาสร้างสรรค์เป็นเมนูท้องถิ่น',
      'เที่ยวแล้วส่งต่อโอกาส — รายได้ส่วนหนึ่งจากกิจกรรมสนับสนุนการเรียนรู้และสร้างโอกาสในการหารายได้ให้แก่นักเรียนด้อยโอกาสและนักเรียนกลุ่มเปราะบาง',
      'ใกล้เมือง เดินทางสะดวก — เติมเต็มประสบการณ์ชุมชนได้ง่าย โดยไม่ต้องเดินทางไกลจากตัวเมือง'
    ],
    includedTh: [
      'กิจกรรมทำผ้ามัดย้อมจากสีเปลือกลูกจาก',
      'ของที่ระลึกผ้ามัดย้อม 1 ชิ้น',
      'กิจกรรมขนมไทยจากใบ-ลูกจาก',
      'อาหารกลางวันเมนูพื้นบ้านจากต้นจาก'
    ],
    itinerary: [
      { time: '10:00', titleTh: 'เรียนรู้ภูมิปัญญาจากต้นจาก', descTh: 'สัมผัสคุณค่าของต้นจากผ่านกิจกรรมสร้างสรรค์' },
      { time: '11:00', titleTh: 'ทำผ้ามัดย้อมจากสีเปลือกลูกจาก', descTh: 'สร้างผ้ามัดย้อมด้วยสีธรรมชาติ นำกลับบ้าน 1 ชิ้น' },
      { time: '13:00', titleTh: 'อาหารกลางวันสำรับจากต้นจาก', descTh: 'ลิ้มรสอาหารพื้นบ้านจากวัตถุดิบต้นจาก' },
      { time: '14:00', titleTh: 'ทำขนมไทยจากใบและลูกจาก', descTh: 'ลงมือทำขนมไทยก่อนเดินทางกลับ 15:00 น.' }
    ],
    hostNameTh: 'กลุ่มศูนย์การเรียนรู้ประสิทธิ์ปัญญา',
    hostRoleTh: 'ประธานศูนย์การเรียนรู้ประสิทธิ์ปัญญา',
    hostAvatar: '/localconnect/prasitpanya-1.jpg',
    breakdownLevel1: {
      communitySharePct: 80,
      paymentGatewayPct: 2,
      communityManagerPct: 2,
      insuranceSupportPct: 0,
      platformDevOpsPct: 16
    },
    distributionLevel2: {
      homestayPct: 0,
      guideLeaderPct: 30,
      localMealsPct: 34,
      localTransportPct: 0,
      communityFundPct: 3,
      handicraftPct: 33,
      insurancePct: 0
    },
    impact: {
      jobsSupported: 6,
      treesPlanted: 0,
      localIncomeGeneratedThb: 740,
      culturalPreservationItems: ['สนับสนุนทุนการศึกษานักเรียนด้อยโอกาส', 'สืบสานภูมิปัญญาต้นจาก']
    },
    isFeatured: true,
    isB2BRecommended: true
  },
  {
    id: 'don-han-mangrove',
    titleTh: 'Amazon ดอนหาร',
    titleEn: 'Amazon Don Han: Mangrove Wonders on a Low-Carbon Trail',
    subtitleTh: 'มหัศจรรย์ป่าโกงกาง บนเส้นทางคาร์บอนต่ำ',
    communityNameTh: 'วิสาหกิจชุมชนท่องเที่ยว Amazon ดอนหาร',
    communityNameEn: 'Amazon Don Han CBT Community',
    communityId: 'don-han',
    locationTh: 'ต.ดอนหาร อ.เมือง จ.สุราษฎร์ธานี',
    locationEn: 'Mueang, Surat Thani',
    region: 'south',
    category: 'nature',
    priceThbPerPerson: 840,
    durationText: '4 ชั่วโมง (10:00 - 14:00 น.)',
    maxGroupSize: 10,
    rating: 4.87,
    reviewCount: 5,
    coverImage: '/localconnect/donhan-3.jpg',
    images: [
      '/localconnect/donhan-2.jpg',
      '/localconnect/donhan-1.jpg',
      '/localconnect/donhan-3.jpg',
      '/localconnect/donhan-4.jpg',
      '/localconnect/donhan-5.jpg',
      '/localconnect/donhan-6.jpg',
      '/localconnect/donhan-7.jpg',
      '/localconnect/donhan-8.jpg',
      '/localconnect/donhan-9.jpg',
      '/localconnect/donhan-10.jpg',
      '/localconnect/donhan-11.jpg',
      '/localconnect/donhan-12.jpg'
    ],
    descriptionTh: 'ออกเดินทางสู่ "Amazon ดอนหาร" สัมผัสความมหัศจรรย์ของผืนป่าโกงกางที่อุดมสมบูรณ์ ผ่านเส้นทางท่องเที่ยวคาร์บอนต่ำที่ชวนให้คุณใกล้ชิดธรรมชาติอย่างเรียบง่าย เรียนรู้ความสำคัญของระบบนิเวศชายฝั่งและปล่อยใจไปกับความสงบของสายน้ำและผืนป่า เป็นประสบการณ์ท่องเที่ยวที่ได้ทั้งความสดชื่น ความรู้ และความประทับใจจากธรรมชาติ',
    highlightsTh: [
      'มหัศจรรย์ป่าโกงกาง — สัมผัสความงดงามและความอุดมสมบูรณ์ของระบบนิเวศป่าโกงกางดอนหาร',
      'เที่ยวเบา ๆ ให้โลกเบาลง — ออกเดินทางบนเส้นทางท่องเที่ยวคาร์บอนต่ำ ใกล้ชิดธรรมชาติอย่างใส่ใจ',
      'ใกล้ชิดธรรมชาติในทุกจังหวะ — ปล่อยใจไปกับสายน้ำ ผืนป่า และบรรยากาศสงบ ๆ ของดอนหาร'
    ],
    includedTh: [
      'เรือหางยาวพลังงานแสงอาทิตย์',
      'อาหารว่างและอาหารกลางวันเมนูพื้นบ้านและคาร์บอนต่ำ',
      'มัคคุเทศก์ท้องถิ่น'
    ],
    itinerary: [
      { time: '10:00', titleTh: 'ล่องเรือพลังงานแสงอาทิตย์สู่ Amazon ดอนหาร', descTh: 'ออกเดินทางชมความมหัศจรรย์ของผืนป่าโกงกาง' },
      { time: '11:30', titleTh: 'เรียนรู้ระบบนิเวศชายฝั่ง', descTh: 'สัมผัสความสงบของสายน้ำและผืนป่าโกงกางอย่างใกล้ชิด' },
      { time: '12:30', titleTh: 'อาหารกลางวันเมนูพื้นบ้านคาร์บอนต่ำ', descTh: 'อิ่มอร่อยก่อนเดินทางกลับ 14:00 น.' }
    ],
    hostNameTh: 'กลุ่มวิสาหกิจชุมชนท่องเที่ยว Amazon ดอนหาร',
    hostRoleTh: 'ประธานวิสาหกิจชุมชนท่องเที่ยวดอนหาร',
    hostAvatar: '/localconnect/donhan-3.jpg',
    breakdownLevel1: {
      communitySharePct: 80,
      paymentGatewayPct: 2,
      communityManagerPct: 2,
      insuranceSupportPct: 0,
      platformDevOpsPct: 16
    },
    distributionLevel2: {
      homestayPct: 0,
      guideLeaderPct: 29,
      localMealsPct: 45,
      localTransportPct: 15,
      communityFundPct: 11,
      handicraftPct: 0,
      insurancePct: 0
    },
    impact: {
      jobsSupported: 4,
      treesPlanted: 20,
      localIncomeGeneratedThb: 672,
      culturalPreservationItems: ['กองทุนอนุรักษ์ป่าโกงกาง Amazon ดอนหาร', 'ส่งเสริมเส้นทางท่องเที่ยวคาร์บอนต่ำ']
    },
    isFeatured: true,
    isB2BRecommended: false
  },
  {
    id: 'bang-bai-mai-classroom',
    titleTh: 'ห้องเรียนธรรมชาติและชุมชน @ บางใบไม้',
    titleEn: 'Bang Bai Mai: Nature & Community Classroom by the Canal',
    subtitleTh: 'เปิดห้องเรียนให้กว้าง เรียนรู้ธรรมชาติ สัมผัสวิถีบางใบไม้',
    communityNameTh: 'ห้องเรียนธรรมชาติและชุมชน @ บางใบไม้',
    communityNameEn: 'Bang Bai Mai Nature & Community Classroom',
    communityId: 'bang-bai-mai',
    locationTh: 'ต.บางใบไม้ อ.เมือง จ.สุราษฎร์ธานี',
    locationEn: 'Mueang, Surat Thani',
    region: 'south',
    category: 'nature',
    priceThbPerPerson: 390,
    durationText: '5 ชั่วโมง (09:00 - 14:00 น.)',
    maxGroupSize: 90,
    rating: 4.8,
    reviewCount: 11,
    coverImage: '/localconnect/bangbaimai-13.jpg',
    images: [
      '/localconnect/bangbaimai-1.jpg',
      '/localconnect/bangbaimai-2.jpg',
      '/localconnect/bangbaimai-3.jpg',
      '/localconnect/bangbaimai-4.jpg',
      '/localconnect/bangbaimai-5.jpg',
      '/localconnect/bangbaimai-6.jpg',
      '/localconnect/bangbaimai-7.jpg',
      '/localconnect/bangbaimai-8.jpg',
      '/localconnect/bangbaimai-9.jpg',
      '/localconnect/bangbaimai-10.jpg',
      '/localconnect/bangbaimai-11.jpg',
      '/localconnect/bangbaimai-12.jpg',
      '/localconnect/bangbaimai-13.jpg',
      '/localconnect/bangbaimai-14.jpg',
      '/localconnect/bangbaimai-15.jpg',
      '/localconnect/bangbaimai-16.jpg',
      '/localconnect/bangbaimai-17.jpg',
      '/localconnect/bangbaimai-18.jpg'
    ],
    descriptionTh: 'ชวนเด็ก ๆ ออกมาเรียนรู้จากห้องเรียนที่ไม่มีผนัง ผ่านการสัมผัสธรรมชาติและวิถีชีวิตของชุมชนริมคลองบางใบไม้ เรียนรู้เรื่องราวของสายน้ำ ผู้คน และภูมิปัญญาท้องถิ่นผ่านกิจกรรมที่สนุกและลงมือทำจริง พร้อมอิ่มอร่อยกับอาหารพื้นบ้านรสชาติคุ้นเคยที่เหมาะสำหรับเด็ก ๆ เดินทางสะดวกใกล้ตัวเมือง และเรียนรู้แนวคิดการท่องเที่ยวที่ใส่ใจสิ่งแวดล้อม เพื่อให้ทุกการเรียนรู้กลายเป็นทั้งความสนุก ความเข้าใจ และความทรงจำจากชุมชน',
    highlightsTh: [
      'เรียนรู้วิถีริมคลอง — เปิดประสบการณ์นอกห้องเรียน ผ่านกิจกรรมเรียนรู้ธรรมชาติ สายน้ำ และวิถีชุมชน',
      'สนุก เรียนรู้ ลงมือทำ — กิจกรรมออกแบบสำหรับเยาวชน ให้เรียนรู้ผ่านการเล่นและประสบการณ์จริง',
      'อิ่มอร่อยแบบท้องถิ่น — ลิ้มรสอาหารพื้นบ้านที่เรียบง่าย ทานง่าย และเหมาะกับเด็ก ๆ',
      'เที่ยวอย่างใส่ใจสิ่งแวดล้อม — เรียนรู้แนวคิดและวิถีการจัดการชุมชนที่เป็นมิตรต่อธรรมชาติ',
      'ใกล้เมือง เดินทางง่าย — สัมผัสเสน่ห์ชุมชนริมคลองได้สะดวก เหมาะสำหรับกิจกรรมเรียนรู้แบบไปเช้า–เย็นกลับ'
    ],
    includedTh: [
      'กิจกรรมฐานการเรียนรู้ 6 ฐานกิจกรรม',
      'อาหารว่างและอาหารกลางวัน'
    ],
    itinerary: [
      { time: '09:00', titleTh: 'เปิดห้องเรียนธรรมชาติ', descTh: 'เริ่มกิจกรรมฐานการเรียนรู้ธรรมชาติและวิถีชุมชนริมคลอง' },
      { time: '10:30', titleTh: 'ฐานกิจกรรมการเรียนรู้ 6 ฐาน', descTh: 'เรียนรู้ผ่านการเล่นและลงมือทำจริงร่วมกับพี่เลี้ยงชุมชน' },
      { time: '12:00', titleTh: 'อาหารกลางวันพื้นบ้าน', descTh: 'ลิ้มรสอาหารพื้นบ้านเรียบง่ายเหมาะกับเด็ก ๆ' },
      { time: '13:00', titleTh: 'สรุปกิจกรรมและเดินทางกลับ', descTh: 'ทบทวนสิ่งที่ได้เรียนรู้ก่อนเดินทางกลับ 14:00 น.' }
    ],
    hostNameTh: 'กลุ่มห้องเรียนธรรมชาติและชุมชนบางใบไม้',
    hostRoleTh: 'ประธานห้องเรียนธรรมชาติและชุมชน @ บางใบไม้',
    hostAvatar: '/localconnect/bangbaimai-3.jpg',
    breakdownLevel1: {
      communitySharePct: 80,
      paymentGatewayPct: 2,
      communityManagerPct: 2,
      insuranceSupportPct: 0,
      platformDevOpsPct: 16
    },
    distributionLevel2: {
      homestayPct: 0,
      guideLeaderPct: 48,
      localMealsPct: 22,
      localTransportPct: 0,
      communityFundPct: 14,
      handicraftPct: 16,
      insurancePct: 0
    },
    impact: {
      jobsSupported: 8,
      treesPlanted: 0,
      localIncomeGeneratedThb: 312,
      culturalPreservationItems: ['กองทุนห้องเรียนธรรมชาติบางใบไม้', 'ส่งเสริมการท่องเที่ยวใส่ใจสิ่งแวดล้อม']
    },
    isFeatured: true,
    isB2BRecommended: true
  },
  {
    id: 'suan-lung-um-retreat',
    titleTh: '"อยู่แต่สวน" ที่สวนลุงอุ่ม บ้านตาขุน',
    titleEn: 'Suan Lung Um Retreat: Slow Living Among the Orchards',
    subtitleTh: 'พักกายกลางสวน สัมผัสวิถี เรียนรู้ความสุขที่เรียบง่าย',
    communityNameTh: 'พิมพ์รดารีสอร์ท สวนลุงอุ่ม',
    communityNameEn: 'Pimrada Resort at Suan Lung Um',
    communityId: 'suan-lung-um',
    locationTh: 'บ้านตาขุน จ.สุราษฎร์ธานี',
    locationEn: 'Ban Ta Khun, Surat Thani',
    region: 'south',
    category: 'nature',
    priceThbPerPerson: 1500,
    durationText: '2 วัน 1 คืน',
    maxGroupSize: 2,
    rating: 4.9,
    reviewCount: 4,
    coverImage: '/localconnect/suan-lung-um-1.jpg',
    images: [
      '/localconnect/suan-lung-um-1.jpg',
      '/localconnect/organic-garden-flower.jpg',
      '/localconnect/garland-making-2.jpg',
      '/localconnect/memorial-monument.jpg'
    ],
    descriptionTh: 'ชวนคุณหลีกหนีความเร่งรีบ แล้วใช้เวลาสองวันหนึ่งคืนอย่างเรียบง่าย ณ พิมพ์รดารีสอร์ท ที่พักสไตล์โมเดิร์นท่ามกลางบรรยากาศร่มรื่นของสวนสมรม "สวนลุงอุ่ม" สัมผัสวิถีชีวิตผ่านการเก็บวัตถุดิบสดจากสวนมาปรุงอาหารเย็นด้วยตัวเอง พร้อมเรียนรู้เสน่ห์ของอาหารเช้าแบบเรียบง่ายในแบบคนท้องถิ่น เติมความละมุนด้วยกิจกรรมทำดอกไม้จากพืชพรรณในสวน แวะสักการะพระเพื่อความเป็นสิริมงคล ณ วัดไกรสรเขตราราม ก่อนออกเดินขึ้นเขาชิงชัน ชมวิวชุมชนโดยรอบเขื่อนรัชชประภาจากมุมสูง เป็นการพักผ่อนที่ได้ทั้ง อยู่กับธรรมชาติ อยู่กับชุมชน และกลับมาอยู่กับตัวเอง',
    highlightsTh: [
      'พักกลางสวนสมรม — ใช้ชีวิตช้า ๆ ท่ามกลางความร่มรื่นของสวนลุงอุ่ม',
      'เก็บจากสวน ปรุงจากใจ — เก็บวัตถุดิบสดจากสวนมารังสรรค์อาหารเย็นด้วยตัวเอง',
      'ร้อยเรียงความงามจากธรรมชาติ — สร้างสรรค์ดอกไม้จากพืชพรรณในสวนด้วยมือของคุณ',
      'มองชุมชนจากบนเขา — เดินขึ้นเขาชิงชัน ชมวิถีชุมชนรอบเขื่อนรัชชประภาจากมุมสูง',
      'เที่ยวไปกับยุวมัคคุเทศก์ — เปิดมุมมองใหม่ผ่านเรื่องราวของชุมชน โดยเยาวชนในพื้นที่ร่วมทำหน้าที่นำชม พร้อมเรียนรู้และฝึกทักษะอาชีพจากประสบการณ์จริง'
    ],
    includedTh: [
      'ที่พัก 1 ห้องสำหรับ 2 ท่าน รวมอาหารเช้าเมนูท้องถิ่น',
      'Cooking class',
      'กิจกรรมประดิษฐ์ช่อดอกไม้สำหรับการไหว้พระ',
      'ยุวมัคคุเทศก์'
    ],
    itinerary: [
      { time: 'วันที่ 1 · 14:00', titleTh: 'เช็คอินพิมพ์รดารีสอร์ท', descTh: 'เข้าพักท่ามกลางบรรยากาศร่มรื่นของสวนสมรม' },
      { time: 'วันที่ 1 · 16:00', titleTh: 'Cooking class อาหารมื้อเย็น', descTh: 'เก็บวัตถุดิบสดจากสวนมารังสรรค์อาหารเย็นด้วยตัวเอง' },
      { time: 'วันที่ 2 · 09:15', titleTh: 'ประดิษฐ์ช่อดอกไม้ไหว้พระ', descTh: 'สร้างสรรค์ดอกไม้จากพืชพรรณในสวนด้วยมือของคุณ' },
      { time: 'วันที่ 2 · 10:30', titleTh: 'ไหว้พระวัดไกรสรเขตราราม และชมวิวเขาชิงชัน', descTh: 'เดินขึ้นเขาชิงชัน ชมวิถีชุมชนรอบเขื่อนรัชชประภาจากมุมสูง ก่อนเช็คเอาท์ 12:00 น.' }
    ],
    hostNameTh: 'ลุงอุ่ม เจ้าของสวนสมรม',
    hostRoleTh: 'ประธานพิมพ์รดารีสอร์ท สวนลุงอุ่ม',
    hostAvatar: '/localconnect/suan-lung-um-1.jpg',
    breakdownLevel1: {
      communitySharePct: 87,
      paymentGatewayPct: 2,
      communityManagerPct: 2,
      insuranceSupportPct: 0,
      platformDevOpsPct: 9
    },
    distributionLevel2: {
      homestayPct: 50,
      guideLeaderPct: 31,
      localMealsPct: 15,
      localTransportPct: 0,
      communityFundPct: 4,
      handicraftPct: 0,
      insurancePct: 0
    },
    impact: {
      jobsSupported: 5,
      treesPlanted: 0,
      localIncomeGeneratedThb: 1300,
      culturalPreservationItems: ['กองทุนยุวมัคคุเทศก์สวนลุงอุ่ม', 'สืบสานวิถีสวนสมรมบ้านตาขุน']
    },
    isFeatured: true,
    isB2BRecommended: false
  },
  {
    id: 'koh-set-csr',
    titleTh: 'หาหอย ปล่อยปู ดูแลป่าโกงกาง @ เกาะเสร็จ ไชยา',
    titleEn: 'Koh Set: Shell Hunting, Crab Release & Mangrove Care',
    subtitleTh: 'สนุกกับทะเล ดูแลธรรมชาติ ส่งต่อคุณค่าให้ชุมชน',
    communityNameTh: 'กลุ่มท่องเที่ยวเชิงอนุรักษ์บ้านพุมเรียง',
    communityNameEn: 'Ban Phum Riang Eco-Tourism Group',
    communityId: 'koh-set',
    locationTh: 'เกาะเสร็จ ต.พุมเรียง อ.ไชยา จ.สุราษฎร์ธานี',
    locationEn: 'Chaiya, Surat Thani',
    region: 'south',
    category: 'culture',
    priceThbPerPerson: 1100,
    durationText: '5 ชั่วโมง (07:00 - 12:00 น.)',
    maxGroupSize: 40,
    rating: 4.85,
    reviewCount: 6,
    coverImage: '/localconnect/kohset-2.jpg',
    images: [
      '/localconnect/kohset-2.jpg',
      '/localconnect/kohset-1.jpg',
      '/localconnect/kohset-4.jpg',
      '/localconnect/kohset-3.jpg',
      '/localconnect/kohset-5.jpg'
    ],
    descriptionTh: 'ออกไปสัมผัสเสน่ห์ทะเลอ่าวบ้านดอนที่เกาะเสร็จ อำเภอไชยา เกาะเล็ก ๆ ใกล้ฝั่งที่ยังคงความงดงามและความเป็นธรรมชาติ ชวนคุณสนุกกับการออกหาหอยนานาชนิด เรียนรู้ระบบนิเวศชายฝั่งผ่านกิจกรรมปล่อยปูและดูแลป่าโกงกาง พร้อมใช้เวลาพักผ่อน เล่นน้ำ และดื่มด่ำกับบรรยากาศหาดทรายสวย ๆ ที่ให้ความรู้สึกเป็นส่วนตัว เป็นวันพักผ่อนที่ได้ทั้งความสนุกจากทะเลและความสุขจากการมีส่วนร่วมดูแลธรรมชาติ',
    highlightsTh: [
      'เที่ยวทะเล พร้อมดูแลทะเล — ร่วมกิจกรรม CSR ปล่อยปูและดูแลป่าโกงกาง เติมคุณค่าให้ระบบนิเวศชายฝั่ง',
      'สนุกกับการหาหอย — เรียนรู้และลงมือค้นหาหอยนานาชนิดท่ามกลางธรรมชาติของอ่าวบ้านดอน',
      'หาดสวย เกาะใกล้ฝั่ง — สัมผัสธรรมชาติทางทะเลที่สวยงาม เดินทางไม่ไกล เหมาะกับการพักผ่อนแบบสบาย ๆ',
      'เล่นน้ำแบบเป็นส่วนตัว — ใช้เวลาชิล ๆ ริมทะเล เล่นน้ำ และผ่อนคลายบนเกาะที่ให้บรรยากาศเป็นส่วนตัว',
      'เที่ยวสนุก ส่งต่อคุณค่า — เปลี่ยนวันพักผ่อนให้เป็นประสบการณ์ที่ดีต่อทั้งตัวคุณและธรรมชาติ'
    ],
    includedTh: [
      'กิจกรรม CSR',
      'เรือหางยาว',
      'อาหารกลางวันเมนูอาหารทะเลและอาหารว่าง',
      'มัคคุเทศก์ท้องถิ่น'
    ],
    itinerary: [
      { time: '07:00', titleTh: 'ออกเรือสู่เกาะเสร็จ', descTh: 'ล่องเรือหางยาวสู่เกาะเล็กใกล้ฝั่งในอ่าวบ้านดอน' },
      { time: '08:00', titleTh: 'กิจกรรม CSR ปล่อยปูและดูแลป่าโกงกาง', descTh: 'ร่วมดูแลระบบนิเวศชายฝั่งเพื่อความยั่งยืน' },
      { time: '09:30', titleTh: 'สนุกกับการหาหอย', descTh: 'เรียนรู้และลงมือค้นหาหอยนานาชนิด' },
      { time: '11:00', titleTh: 'พักผ่อนเล่นน้ำและอาหารกลางวันทะเล', descTh: 'อิ่มอร่อยกับอาหารทะเลก่อนเดินทางกลับ 12:00 น.' }
    ],
    hostNameTh: 'คุณจรินทร์ เฉยเชยชม',
    hostRoleTh: 'ประธานกลุ่มท่องเที่ยวเชิงอนุรักษ์บ้านพุมเรียง โทร. 092-379-3969',
    hostAvatar: '/localconnect/kohset-2.jpg',
    breakdownLevel1: {
      communitySharePct: 80,
      paymentGatewayPct: 2,
      communityManagerPct: 2,
      insuranceSupportPct: 0,
      platformDevOpsPct: 16
    },
    distributionLevel2: {
      homestayPct: 0,
      guideLeaderPct: 28,
      localMealsPct: 35,
      localTransportPct: 17,
      communityFundPct: 20,
      handicraftPct: 0,
      insurancePct: 0
    },
    impact: {
      jobsSupported: 10,
      treesPlanted: 40,
      localIncomeGeneratedThb: 880,
      culturalPreservationItems: ['บ้านปลาธนาคารปู', 'กองทุน CSR ปล่อยพันธุ์สัตว์น้ำอ่าวบ้านดอน', 'อนุรักษ์ป่าโกงกางเกาะเสร็จ']
    },
    isFeatured: true,
    isB2BRecommended: true
  }
];

export const SAMPLE_B2B_PACKAGES: B2BPackage[] = [
  {
    id: 'b2b-csr-koh-raet',
    titleTh: 'CSR & Team Building: เอนกายโฮมสเตย์ เฮฮาที่เกาะแรต',
    type: 'CSR',
    targetPax: '20 - 40 ท่าน',
    duration: '2 วัน 1 คืน',
    priceStartThb: 2300,
    esgAlignment: ['SDG 1: Zero Poverty', 'SDG 8: Decent Work', 'SDG 14: Life Below Water'],
    descriptionTh: 'โปรแกรมองค์กรที่ผสานห้องประชุมและกิจกรรมพัฒนาทีมเข้ากับโฮมสเตย์ชุมชนเกาะแรต สัมผัสวิถีชาวประมง อาหารทะเลสดใหม่ และกิจกรรมชมโลมาสีชมพูในอ่าวบ้านดอน เหมาะกับกลุ่มเล็กที่ต้องการบรรยากาศผ่อนคลายและงบประมาณเข้าถึงง่าย',
    featuredCommunityTh: 'วิสาหกิจชุมชนโฮมสเตย์เกาะแรต จ.สุราษฎร์ธานี',
    image: '/localconnect/koh-raet-1.jpg',
    experienceId: 'koh-raet-homestay'
  },
  {
    id: 'b2b-csr-koh-set',
    titleTh: 'CSR & Team Building: หาหอย ปล่อยปู ดูแลป่าโกงกาง เกาะเสร็จ ไชยา',
    type: 'CSR',
    targetPax: '20 - 40 ท่าน',
    duration: '5 ชั่วโมง (Half Day)',
    priceStartThb: 1100,
    esgAlignment: ['SDG 8: Decent Work', 'SDG 14: Life Below Water', 'SDG 15: Life on Land'],
    descriptionTh: 'โปรแกรม CSR ครึ่งวันสำหรับองค์กร ร่วมกิจกรรมปล่อยปูและดูแลป่าโกงกางเพื่อฟื้นฟูระบบนิเวศชายฝั่ง พร้อมกิจกรรมหาหอยและพักผ่อนบนหาดทรายส่วนตัวของเกาะเสร็จ อำเภอไชยา เหมาะกับกิจกรรมสร้างความสัมพันธ์ทีมที่ได้ทั้งความสนุกและคุณค่าต่อสิ่งแวดล้อม',
    featuredCommunityTh: 'กลุ่มท่องเที่ยวเชิงอนุรักษ์บ้านพุมเรียง ต.พุมเรียง อ.ไชยา จ.สุราษฎร์ธานี',
    image: '/localconnect/kohset-1.jpg',
    experienceId: 'koh-set-csr'
  }
];

export const INITIAL_BOOKINGS: Booking[] = [
  {
    id: 'BK-2026-8801',
    experienceId: 'khao-thep-phithak-suspension',
    experienceTitleTh: 'เขาเทพพิทักษ์: การเดินทางด้วยหัวใจ',
    communityNameTh: 'วิสาหกิจชุมชนท่องเที่ยวเชิงอนุรักษ์บ้านเขาเทพพิทักษ์',
    bookingDate: '2026-08-20',
    paxCount: 2,
    totalPriceThb: 2200,
    directToCommunityThb: 1804,
    status: 'confirmed',
    travelerName: 'คุณภัทรวรินทร์ สมบูรณ์',
    travelerEmail: 'patwarin@gmail.com',
    paymentMethod: 'PromptPay QR',
    qrCodeUrl: 'https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=LOCALCONNECT-BK-2026-8801',
    createdDate: '2026-08-04'
  }
];
