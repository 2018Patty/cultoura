import { Experience, CommunityProfile, B2BPackage, Booking } from '../types';

export const SAMPLE_COMMUNITIES: CommunityProfile[] = [
  {
    id: 'klong-noi',
    nameTh: 'วิสาหกิจชุมชนท่องเที่ยวตำบลคลองน้อย',
    nameEn: 'Klong Noi CBT Community',
    provinceTh: 'สุราษฎร์ธานี (อ.เมือง)',
    storyTh: 'ล่องเรือชมสวนผลไม้ผสมผสานและป่าจากริมคลองสายต่างๆ สัมผัสวิถีชีวิตชาวสวนคลองน้อย แปรรูปกระท้อน ทำหัตถกรรมกะลามะพร้าว ชมศูนย์สาธิตการฝึกลิงเพื่อการเกษตร และทานอาหารพื้นบ้านขนมไทยโบราณ',
    coverImage: 'https://images.unsplash.com/photo-1596178065887-1198b6148b2b?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1596178065887-1198b6148b2b?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1606744888344-493238951221?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80'
    ],
    foundingYear: 2011,
    householdsInvolved: 50,
    leaderNameTh: 'คุณสมพร คลองน้อย',
    leaderTitleTh: 'ประธานวิสาหกิจชุมชนท่องเที่ยวตำบลคลองน้อย',
    leaderAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    keyHighlightsTh: [
      'ล่องเรือชมสวนผลไม้ผสมผสานและป่าจากริมคลอง',
      'แปรรูปกระท้อนชิมสายพันธุ์ต่างๆ และทำหัตถกรรมกะลามะพร้าว',
      'ชมศูนย์สาธิตการฝึกลิงเพื่อการเกษตรวิถีใต้',
      'ทานอาหารพื้นบ้านคลองน้อยและขนมไทยโบราณ'
    ],
    activeExperiencesCount: 1,
    totalIncomeGeneratedThb: 2850000,
    communityFundSpentThb: 285000,
    fundProjectsTh: [
      'กองทุนอนุรักษ์ป่าจากและตลิ่งลำน้ำคลองน้อย',
      'สนับสนุนกลุ่มอาชีพหัตถกรรมกะลามะพร้าวและงานจักสาน'
    ]
  },
  {
    id: 'leeled',
    nameTh: 'กลุ่มท่องเที่ยวโดยชุมชนลีเล็ด',
    nameEn: 'Leeled CBT Community',
    provinceTh: 'สุราษฎร์ธานี (อ.พุนพิน)',
    storyTh: 'ล่องเรือชมระบบนิเวศป่าชายเลนผืนใหญ่ "อเมซอนแห่งสุราษฎร์" ร่วมกิจกรรม CSR ปลูกป่าและเก็บขยะ จัดทีมบิวดิ้งทำบ้านปลา และเรียนรู้งานจักสานและอาหารท้องถิ่น',
    coverImage: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&w=800&q=80'
    ],
    foundingYear: 2010,
    householdsInvolved: 50,
    leaderNameTh: 'กำนันประเสริฐ ชุมชนลีเล็ด',
    leaderTitleTh: 'ประธานกลุ่มท่องเที่ยวโดยชุมชนลีเล็ด',
    leaderAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    keyHighlightsTh: [
      'ล่องเรือชมระบบนิเวศป่าชายเลนและอุโมงค์ต้นไม้',
      'กิจกรรมปลูกป่าชายเลนและเก็บขยะ CSR',
      'ทีมบิวดิ้งสร้างบ้านปลาเพื่ออนุรักษ์พันธุ์สัตว์น้ำ',
      'ทำอาหารท้องถิ่นรสเด็ดและงานจักสานพื้นบ้าน'
    ],
    activeExperiencesCount: 1,
    totalIncomeGeneratedThb: 3100000,
    communityFundSpentThb: 310000,
    fundProjectsTh: [
      'กองทุนอนุรักษ์และปลูกป่าชายเลนชุมชนลีเล็ด',
      'ศูนย์ฟื้นฟูพันธุ์สัตว์น้ำและบ้านปลาธรรมชาติ'
    ]
  },
  {
    id: 'khanam-noi',
    nameTh: 'วิสาหกิจชุมชนกลุ่มท่องเที่ยวขนำน้อยหอยใหญ่',
    nameEn: 'Khanam Noi Hoy Yai CBT Community',
    provinceTh: 'สุราษฎร์ธานี (อ.กาญจนดิษฐ์)',
    storyTh: 'ล่องเรือชมวิถีชาวประมงชายฝั่ง เรียนรู้การทำฟาร์มหอยนางรมสุราษฎร์ยักษ์และหอยแครงกลางอ่าวบ้านดอน ทานอาหารทะเลสดอร่อยบนขนำกลางทะเล',
    coverImage: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80'
    ],
    foundingYear: 2013,
    householdsInvolved: 30,
    leaderNameTh: 'พี่สุจินต์ กาญจนดิษฐ์',
    leaderTitleTh: 'ประธานวิสาหกิจกลุ่มท่องเที่ยวขนำน้อยหอยใหญ่',
    leaderAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80',
    keyHighlightsTh: [
      'ล่องเรือชมวิถีชีวิตประมงชายฝั่งอ่าวบ้านดอน',
      'เรียนรู้ฟาร์มเลี้ยงหอยนางรมยักษ์และหอยแครง',
      'รับประทานอาหารทะเลสดบนขนำไม้กลางทะเล',
      'สินค้าซีฟู้ดแปรรูปตรงจากชาวประมง'
    ],
    activeExperiencesCount: 1,
    totalIncomeGeneratedThb: 3600000,
    communityFundSpentThb: 360000,
    fundProjectsTh: [
      'กองทุนฟื้นฟูทรัพยากรประมงชายฝั่งอ่าวบ้านดอน',
      'สวัสดิการชาวประมงพื้นบ้านกลุ่มขนำน้อย'
    ]
  },
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
      '/localconnect/memorial-monument.jpg'
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
    id: 'chaiya-egg',
    nameTh: 'วิสาหกิจชุมชนไข่เค็ม อ.ส.ม. ไชยา',
    nameEn: 'Chaiya Salted Egg CBT Community',
    provinceTh: 'สุราษฎร์ธานี (อ.ไชยา)',
    storyTh: 'สัมผัสตำนานไข่เค็มไชยาอันดับหนึ่งของไทย เวิร์กชอปพอกดินจอมปลวกผสมแกลบเผา ชิมไข่เค็มดาว เมนูผัดไทยไข่เค็ม และทำขนมไทยจากไข่เค็มไชยา',
    coverImage: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&w=800&q=80'
    ],
    foundingYear: 2008,
    householdsInvolved: 30,
    leaderNameTh: 'ป้าจินตนา ไชยา',
    leaderTitleTh: 'ประธานวิสาหกิจชุมชนไข่เค็ม อ.ส.ม. ไชยา',
    leaderAvatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
    keyHighlightsTh: [
      'เวิร์กชอปพอกดินจอมปลวกและแกลบทำไข่เค็มไชยาแท้',
      'ทำอาหารและขนมเปี๊ยะไข่เค็มไชยา',
      'สัมผัสเส้นทางประวัติศาสตร์เมืองเก่าไชยา'
    ],
    activeExperiencesCount: 1,
    totalIncomeGeneratedThb: 1950000,
    communityFundSpentThb: 195000,
    fundProjectsTh: [
      'กองทุนส่งเสริมกลุ่มแม่บ้านเกษตรกรไชยา',
      'ทุนการศึกษาเยาวชนคนรุ่นใหม่สืบสานภูมิปัญญาไชยา'
    ]
  },
  {
    id: 'surat-elephant',
    nameTh: 'สุราษฎร์ธานี เอเลเฟ่น เฮาส์',
    nameEn: 'Surat Thani Elephant House CBT',
    provinceTh: 'สุราษฎร์ธานี (อ.กาญจนดิษฐ์)',
    storyTh: 'เรียนรู้ความสัมพันธ์ระหว่างคนกับช้าง สัมผัสวิถีควาญช้างท้องถิ่น ทำอาหารและป้อนอาหารให้ช้าง พายเรือคายัค และทำภาชนะจากมูลช้าง',
    coverImage: 'https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80'
    ],
    foundingYear: 2015,
    householdsInvolved: 30,
    leaderNameTh: 'พี่สุเทพ ควาญช้างสุราษฎร์',
    leaderTitleTh: 'ผู้นำศูนย์อนุรักษ์สุราษฎร์ธานี เอเลเฟ่น เฮาส์',
    leaderAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    keyHighlightsTh: [
      'สัมผัสวิถีชีวิตความผูกพันระหว่างคนกับช้างอย่างอบอุ่น',
      'เรียนรู้การปรุงสมุนไพรและทำอาหารสุขภาพให้ช้าง',
      'พายเรือคายัค และทำกระดาษผาชนะจากมูลช้าง'
    ],
    activeExperiencesCount: 1,
    totalIncomeGeneratedThb: 2900000,
    communityFundSpentThb: 290000,
    fundProjectsTh: [
      'กองทุนดูแลอาหารและการแพทย์ช้างในชุมชน',
      'สวัสดิการครอบครัวควาญช้างสุราษฎร์ธานี'
    ]
  },
  {
    id: 'koh-phaluai',
    nameTh: 'ชุมชนท่องเที่ยวเกาะพะลวย',
    nameEn: 'Koh Phaluai Green Island CBT Community',
    provinceTh: 'สุราษฎร์ธานี (อ.เกาะสมุย)',
    storyTh: 'เรียนรู้เรื่องพลังงานสะอาดบนเกาะพะลวย กรีนไอส์แลนด์ ร่วมเก็บขยะชายหาดและปลูกป่าชายเลนเพื่อฟื้นฟูระบบนิเวศเกาะ เดินป่า เข้าถ้ำ และตามหานกเงือกที่ยังคงอาศัยอยู่บนเกาะเล็กกลางอ่าวไทยแห่งนี้',
    coverImage: '/tceb/koh-phaluai-hornbill.jpg',
    gallery: [
      '/tceb/koh-phaluai-hornbill.jpg',
      '/tceb/koh-phaluai-beach-cleanup.jpg'
    ],
    foundingYear: 2016,
    householdsInvolved: 25,
    leaderNameTh: 'ทีมชุมชนเกาะพะลวย กรีนไอส์แลนด์',
    leaderTitleTh: 'ประธานชุมชนท่องเที่ยวเกาะพะลวย',
    leaderAvatar: '/tceb/koh-phaluai-beach-cleanup.jpg',
    keyHighlightsTh: [
      'เรียนรู้เรื่องพลังงานสะอาดบนเกาะพะลวย กรีนไอส์แลนด์',
      'ร่วมกิจกรรมเก็บขยะชายหาดและปลูกป่าชายเลน',
      'เดินป่า เข้าถ้ำ และตามหานกเงือกบนเกาะ'
    ],
    activeExperiencesCount: 1,
    totalIncomeGeneratedThb: 1500000,
    communityFundSpentThb: 150000,
    fundProjectsTh: [
      'กองทุนพลังงานสะอาดเกาะพะลวย',
      'กองทุนอนุรักษ์นกเงือกและป่าชายเลนเกาะพะลวย'
    ]
  },
  {
    id: 'sala-athit-garden',
    nameTh: 'สวนสละอาทิตย์',
    nameEn: 'Sala Athit Salak Fruit Garden',
    provinceTh: 'สุราษฎร์ธานี (อ.บ้านนาสาร)',
    storyTh: 'เยี่ยมชมสวนสละอาทิตย์ เรียนรู้การจัดการดินและกระบวนการปลูกสละตั้งแต่ต้นจนถึงผลผลิต ชิมสละอาทิตย์สดจากต้นรสหวานฉ่ำ และร่วมกิจกรรมทีมบิวดิ้งท่ามกลางบรรยากาศร่มรื่นในสวน',
    coverImage: '/tceb/sala-athit-picking.jpg',
    gallery: [
      '/tceb/sala-athit-picking.jpg',
      '/tceb/sala-athit-peeling.jpg'
    ],
    foundingYear: 2009,
    householdsInvolved: 15,
    leaderNameTh: 'เจ้าของสวนสละอาทิตย์',
    leaderTitleTh: 'ประธานสวนสละอาทิตย์',
    leaderAvatar: '/tceb/sala-athit-peeling.jpg',
    keyHighlightsTh: [
      'เรียนรู้การจัดการดินและกระบวนการผลิตสละอาทิตย์',
      'ชิมสละอาทิตย์สดจากต้นรสหวานฉ่ำ',
      'จัดกิจกรรมทีมบิวดิ้งในสวนสละ'
    ],
    activeExperiencesCount: 1,
    totalIncomeGeneratedThb: 900000,
    communityFundSpentThb: 90000,
    fundProjectsTh: [
      'กองทุนพัฒนาพันธุ์สละอาทิตย์',
      'ทุนส่งเสริมเกษตรกรรุ่นใหม่บ้านนาสาร'
    ]
  },
  {
    id: 'tai-dam-learning-center',
    nameTh: 'ศูนย์เรียนรู้ภูมิปัญญาไทดำ',
    nameEn: 'Tai Dam Wisdom Learning Center',
    provinceTh: 'สุราษฎร์ธานี (อ.พุนพิน)',
    storyTh: 'เรียนรู้ภูมิปัญญาชาวไทดำ ชมการแสดงพื้นบ้านโดยกลุ่มเยาวชนสืบสานวัฒนธรรม ทดลองแต่งกายชุดไทดำนุ่งผ้าซิ่นลายแตงโม ลิ้มรสอาหารไทดำและอาหารใต้ในตลาดพื้นบ้าน และล่องเรือชมวิถีชุมชนริมแม่น้ำตาปี',
    coverImage: '/tceb/tai-dam-dance.jpg',
    gallery: [
      '/tceb/tai-dam-dance.jpg',
      '/tceb/tai-dam-textile-craft.jpg'
    ],
    foundingYear: 2013,
    householdsInvolved: 35,
    leaderNameTh: 'กลุ่มเยาวชนไทดำท่าข้าม',
    leaderTitleTh: 'ประธานศูนย์เรียนรู้ภูมิปัญญาไทดำ',
    leaderAvatar: '/tceb/tai-dam-textile-craft.jpg',
    keyHighlightsTh: [
      'ชมการแสดงไทดำโดยกลุ่มเยาวชนสืบสานวัฒนธรรม',
      'ทดลองแต่งกายชุดไทดำ นุ่งผ้าซิ่นลายแตงโม',
      'ล่องเรือชมวิถีชุมชนริมแม่น้ำตาปี',
      'ชิมอาหารไทดำและอาหารใต้ในตลาดพื้นบ้าน'
    ],
    activeExperiencesCount: 1,
    totalIncomeGeneratedThb: 1200000,
    communityFundSpentThb: 120000,
    fundProjectsTh: [
      'กองทุนสืบสานวัฒนธรรมไทดำ',
      'ทุนกลุ่มเยาวชนนาฏศิลป์ไทดำ'
    ]
  }
];

export const SAMPLE_EXPERIENCES: Experience[] = [
  {
    id: 'klong-noi-canal-tour',
    titleTh: 'ล่องเรือสวนผลไม้ ป่าจากริมคลอง หัตถกรรมกะลามะพร้าว และศูนย์ฝึกลิงเพื่อการเกษตร',
    titleEn: 'Klong Noi Canal Fruit Orchard & Coconut Shell Handcraft Tour',
    subtitleTh: 'นั่งเรือหางยาวชมสวนผลไม้ผสมผสาน ป่าจากริมคลอง ฝึกลิงเพื่อการเกษตร และทำขนมไทยโบราณ',
    communityNameTh: 'วิสาหกิจชุมชนท่องเที่ยวตำบลคลองน้อย',
    communityNameEn: 'Klong Noi CBT Community',
    communityId: 'klong-noi',
    locationTh: 'อ.เมือง จ.สุราษฎร์ธานี',
    locationEn: 'Mueang, Surat Thani',
    region: 'south',
    category: 'culture',
    priceThbPerPerson: 1250,
    durationText: '1 วัน (09:00 - 15:00 น.)',
    maxGroupSize: 15,
    rating: 4.92,
    reviewCount: 42,
    coverImage: 'https://images.unsplash.com/photo-1596178065887-1198b6148b2b?auto=format&fit=crop&w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1596178065887-1198b6148b2b?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1606744888344-493238951221?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80'
    ],
    descriptionTh: 'ล่องเรือชมสวนผลไม้และป่าจากริมคลองสายคลองน้อย เรียนรู้วิถีชีวิตชาวสวนผลไม้ปักษ์ใต้ แปรรูปกระท้อนหวานฉ่ำ ชิมผลิตภัณฑ์จากกะลามะพร้าว ชมศูนย์สาธิตการฝึกลิงเพื่อการเกษตรอย่างใกล้ชิด และรับประทานอาหารพื้นบ้านปักษ์ใต้แท้',
    highlightsTh: [
      'ล่องเรือหางยาวชมระบบนิเวศลำน้ำป่าจากและสวนผลไม้ริมคลอง',
      'เวิร์กชอปทำหัตถกรรมจากกะลามะพร้าวและแปรรูปกระท้อน',
      'เยี่ยมชมศูนย์สาธิตการฝึกลิงเก็บมะพร้าวเพื่อการเกษตร',
      'ทานอาหารพื้นบ้านแกงส้มปลาคลอง และขนมไทยโบราณ'
    ],
    includedTh: [
      'ค่าเรือหางยาวนำเที่ยวตลอดเส้นทาง',
      'อาหารกลางวันปักษ์ใต้และผลไม้สดในสวน',
      'อุปกรณ์ทำหัตถกรรมกะลามะพร้าว',
      'มัคคุเทศก์ท้องถิ่นชาวสวนคลองน้อย'
    ],
    itinerary: [
      { time: '09:00', titleTh: 'ลงเรือหางยาวท่าคลองน้อย', descTh: 'รับฟังบรรยายประวัติศาสตร์ลำน้ำคลองน้อยและจิบน้ำมะพร้าวสด' },
      { time: '10:15', titleTh: 'ชมสวนผลไม้ & แปรรูปกระท้อน', descTh: 'เดินชมสวนกระท้อน สวนมะพร้าว และทดลองทำผลิตภัณฑ์กะลามะพร้าว' },
      { time: '12:00', titleTh: 'ทานอาหารพื้นบ้านริมคลอง', descTh: 'ลิ้มรสแกงส้มปลา คั่วกลิ้ง และขนมไทยโบราณ' },
      { time: '13:30', titleTh: 'ชมศูนย์สาธิตการฝึกลิงเกษตร', descTh: 'เรียนรู้ภูมิปัญญาการฝึกลิงมะพร้าววิถีไทยเดิม' }
    ],
    hostNameTh: 'คุณสมพร คลองน้อย',
    hostRoleTh: 'ประธานวิสาหกิจชุมชนคลองน้อย',
    hostAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    breakdownLevel1: {
      communitySharePct: 77,
      paymentGatewayPct: 3,
      communityManagerPct: 4,
      insuranceSupportPct: 2,
      platformDevOpsPct: 14
    },
    distributionLevel2: {
      homestayPct: 10,
      guideLeaderPct: 35,
      localMealsPct: 30,
      localTransportPct: 10,
      communityFundPct: 15
    },
    impact: {
      jobsSupported: 6,
      treesPlanted: 8,
      localIncomeGeneratedThb: 962,
      culturalPreservationItems: ['สืบสานสวนผลไม้ป่าจากริมคลอง', 'กองทุนอนุรักษ์ตลิ่งลำน้ำ']
    },
    isFeatured: true,
    isB2BRecommended: true
  },
  {
    id: 'leeled-mangrove-amazon',
    titleTh: 'ล่องเรืออุโมงค์ต้นไม้ป่าชายเลน "อเมซอนแห่งสุราษฎร์" กิจกรรม CSR ปลูกป่า และสร้างบ้านปลา',
    titleEn: 'Leeled Mangrove Amazon Boat Tour & Fish House CSR',
    subtitleTh: 'สัมผัสอุโมงค์ต้นไม้ป่าชายเลนผืนใหญ่ CSR ปลูกป่าชายเลน และทำกิจกรรมทีมบิวดิ้ง',
    communityNameTh: 'กลุ่มท่องเที่ยวโดยชุมชนลีเล็ด',
    communityNameEn: 'Leeled CBT Community',
    communityId: 'leeled',
    locationTh: 'อ.พุนพิน จ.สุราษฎร์ธานี',
    locationEn: 'Phunphin, Surat Thani',
    region: 'south',
    category: 'nature',
    priceThbPerPerson: 1400,
    durationText: '1 วัน (08:30 - 15:30 น.)',
    maxGroupSize: 30,
    rating: 4.95,
    reviewCount: 58,
    coverImage: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&w=800&q=80'
    ],
    descriptionTh: 'ตื่นตาตื่นใจกับ "อเมซอนแห่งสุราษฎร์" ในป่าชายเลนลีเล็ด ล่องเรือชมอุโมงค์โกงกางที่สมบูรณ์ที่สุด ร่วมกิจกรรม CSR ปลูกกล้าไม้ชายเลนและเก็บขยะเพื่อรักษาสิ่งแวดล้อม สนุกกับทีมบิวดิ้งสร้างบ้านปลา และทานอาหารประมงป่าชายเลน',
    highlightsTh: [
      'ล่องเรือชมอุโมงค์ต้นไม้โกงกางและนกน้ำป่าชายเลนลีเล็ด',
      'กิจกรรม CSR ปลูกฝักโกงกางและเก็บขยะชายฝั่ง',
      'ทีมบิวดิ้งประดิษฐ์ซุ้มบ้านปลาเพื่ออนุรักษ์พันธุ์สัตว์น้ำ',
      'ทานอาหารทะเลป่าชายเลน ปูก้อน แกงส้ม และกุ้งสด'
    ],
    includedTh: [
      'เรือนำเที่ยวป่าชายเลนและเสื้อชูชีพมาตรฐาน',
      'ต้นกล้าไม้ชายเลนและอุปกรณ์ปลูกป่า CSR',
      'อาหารกลางวันซีฟู้ดป่าชายเลน 1 มื้อ',
      'วิทยากรและทีมไกด์ชุมชนลีเล็ด'
    ],
    itinerary: [
      { time: '08:30', titleTh: 'ปฐมนิเทศ ณ ศูนย์เรียนรู้ลีเล็ด', descTh: 'ต้อนรับด้วยเครื่องดื่มสมุนไพรและฟังเรื่องราวป่าชายเลน' },
      { time: '09:30', titleTh: 'ล่องเรือชมอเมซอนสุราษฎร์', descTh: 'ลอดอุโมงค์โกงกางธรรมชาติตระการตา' },
      { time: '11:00', titleTh: 'กิจกรรม CSR ปลูกป่า & บ้านปลา', descTh: 'ร่วมใจปลูกป่าโกงกางและประกอบซุ้มบ้านปลาปล่อยสู่ลำน้ำ' },
      { time: '12:30', titleTh: 'มื้อกลางวันซีฟู้ดชุมชนลีเล็ด', descTh: 'อร่อยกับอาหารทะเลสดใหม่ปรุงสไตล์ชาวบ้าน' }
    ],
    hostNameTh: 'กำนันประเสริฐ ชุมชนลีเล็ด',
    hostRoleTh: 'ประธานกลุ่มท่องเที่ยวชุมชนลีเล็ด',
    hostAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    breakdownLevel1: {
      communitySharePct: 79,
      paymentGatewayPct: 3,
      communityManagerPct: 2,
      insuranceSupportPct: 2,
      platformDevOpsPct: 14
    },
    distributionLevel2: {
      homestayPct: 5,
      guideLeaderPct: 35,
      localMealsPct: 30,
      localTransportPct: 10,
      communityFundPct: 20
    },
    impact: {
      jobsSupported: 10,
      treesPlanted: 25,
      localIncomeGeneratedThb: 1106,
      culturalPreservationItems: ['กองทุนฟื้นฟูป่าชายเลนลีเล็ด', 'ธนาคารบ้านปลา']
    },
    isFeatured: true,
    isB2BRecommended: true
  },
  {
    id: 'khanam-noi-oyster',
    titleTh: 'ฟาร์มหอยนางรมสุราษฎร์ยักษ์อ่าวบ้านดอน และจัดเลี้ยงซีฟู้ดสดบนขนำกลางทะเล',
    titleEn: 'Khanam Noi Giant Oyster Farm & Sea Cabin Seafood Feast',
    subtitleTh: 'สัมผัสฟาร์มหอยนางรมสุราษฎร์ยักษ์และหอยแครง ชิมซีฟู้ดสดๆ กลางอ่าวบ้านดอน',
    communityNameTh: 'วิสาหกิจชุมชนกลุ่มท่องเที่ยวขนำน้อยหอยใหญ่',
    communityNameEn: 'Khanam Noi Hoy Yai CBT Community',
    communityId: 'khanam-noi',
    locationTh: 'อ.กาญจนดิษฐ์ จ.สุราษฎร์ธานี',
    locationEn: 'Kanchanadit, Surat Thani',
    region: 'south',
    category: 'food',
    priceThbPerPerson: 1650,
    durationText: '1 วัน (10:00 - 15:00 น.)',
    maxGroupSize: 20,
    rating: 4.98,
    reviewCount: 74,
    coverImage: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80'
    ],
    descriptionTh: 'ล่องเรือชมความยิ่งใหญ่ของฟาร์มหอยนางรมสุราษฎร์ธานีอันเลื่องชื่อระดับโลก เรียนรู้วิธีการเลี้ยงหอยนางรมยักษ์และหอยแครงกลางทะเลอ่าวบ้านดอน จากนั้นขึ้นนั่งพักผ่อนทานอาหารทะเลสดจัดเต็มบนขนำไม้กลางอ่าวสัมผัสลมทะเลเย็นสบาย',
    highlightsTh: [
      'ล่องเรือประมงท้องถิ่นชมแปลงเลี้ยงหอยนางรมยักษ์และหอยแครง',
      'สาธิตการงมและแกะหอยนางรมสดๆ จากแปลงเลี้ยงกลางทะเล',
      'จัดเลี้ยงอาหารทะเลสด หอยนางรมยักษ์ หอยแครง กุ้ง ปู บนขนำกลางทะเล',
      'สนับสนุนเศรษฐกิจประมงพื้นบ้านกาญจนดิษฐ์โดยตรง'
    ],
    includedTh: [
      'เรือประมงนำเที่ยวและเสื้อชูชีพ',
      'มื้ออาหารกลางวันซีฟู้ดจัดเต็มบนขนำกลางทะเล',
      'หอยนางรมยักษ์สุราษฎร์สดพร้อมเครื่องเคียงกระถินหอมเจียว',
      'ประกันอุบัติเหตุทางน้ำ'
    ],
    itinerary: [
      { time: '10:00', titleTh: 'ลงเรือ ณ ท่าเรือท่าทองใหม่', descTh: 'สวมเสื้อชูชีพและล่องเรือชมทัศนียภาพอ่าวบ้านดอน' },
      { time: '10:45', titleTh: 'เยี่ยมชมฟาร์มหอยนางรมยักษ์', descTh: 'ชมแปลงเลี้ยงหอยนางรมและสาธิตการแกะหอยสด' },
      { time: '12:00', titleTh: 'รับประทานซีฟู้ดบนขนำกลางทะเล', descTh: 'อิ่มอร่อยกับหอยนางรมยักษ์สด กุ้ง ปู และอาหารทะเลเผา' },
      { time: '14:00', titleTh: 'พักผ่อนรับลมทะเลและเดินทางกลับ', descTh: 'ชมวิถีชาวประมงชายฝั่งและเดินทางกลับเข้าสู่ฝั่ง' }
    ],
    hostNameTh: 'พี่สุจินต์ กาญจนดิษฐ์',
    hostRoleTh: 'ประธานวิสาหกิจขนำน้อยหอยใหญ่',
    hostAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80',
    breakdownLevel1: {
      communitySharePct: 80,
      paymentGatewayPct: 3,
      communityManagerPct: 2,
      insuranceSupportPct: 2,
      platformDevOpsPct: 13
    },
    distributionLevel2: {
      homestayPct: 15,
      guideLeaderPct: 30,
      localMealsPct: 35,
      localTransportPct: 5,
      communityFundPct: 15
    },
    impact: {
      jobsSupported: 8,
      treesPlanted: 10,
      localIncomeGeneratedThb: 1320,
      culturalPreservationItems: ['สืบสานฟาร์มหอยนางรมยักษ์สุราษฎร์', 'กองทุนกลุ่มประมงขนำน้อย']
    },
    isFeatured: true,
    isB2BRecommended: true
  },
  {
    id: 'khao-thep-phithak-suspension',
    titleTh: 'Heart of Khlong Sang: ไหว้พระวัดเขาพัง เดินสะพานแขวนภูเขารูปหัวใจ และชิมทุเรียนคลองแสงร้อยปี',
    titleEn: 'Heart of Khlong Sang: A Journey into Nature and Local Life',
    subtitleTh: 'สัมผัสศรัทธาชาวคลองแสง เดินข้ามสะพานแขวนภูเขารูปหัวใจ และเรียนรู้วิถีสวนยางพาราทุเรียนโบราณ',
    communityNameTh: 'วิสาหกิจชุมชนท่องเที่ยวเชิงอนุรักษ์บ้านเขาเทพพิทักษ์',
    communityNameEn: 'Khao Thep Phithak Eco-Tourism CBT',
    communityId: 'khao-thep-phithak',
    locationTh: 'หมู่ 1 ต.เขาพัง อ.บ้านตาขุน จ.สุราษฎร์ธานี',
    locationEn: 'Ban Ta Khun, Surat Thani',
    region: 'south',
    category: 'nature',
    priceThbPerPerson: 900,
    durationText: 'ครึ่งวัน (10:00 - 14:00 น.)',
    maxGroupSize: 15,
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
    descriptionTh: 'เรื่องราวของชาวคลองแสง สัมผัสความศรัทธาของคนในชุมชนเขาพังที่มีต่อพุทธศาสนา ณ วัดเขาพัง เดินข้ามสะพานแขวนภูเขารูปหัวใจ ไปเชื่อมต่อกับธรรมชาติในอ้อมกอดของภูเขา เรียนรู้วิถีการทำสวนยางพาราและสวนผลไม้ที่มีทุเรียนคลองแสงร้อยปีที่โด่งดัง เปิดประสบการณ์การทำอาหารท้องถิ่นและลิ้มรสอาหารพื้นบ้านที่ดีต่อสุขภาพ และสนุกกับของเล่นพื้นบ้าน "ลูกหวือ" ผ่านการถ่ายทอดของผู้สูงอายุที่ต้องการรักษาและส่งต่อคุณค่าความดั้งเดิม',
    highlightsTh: [
      'เรื่องราวของชาวคลองแสง สัมผัสความศรัทธาที่มีต่อพุทธศาสนา ณ วัดเขาพัง',
      'เดินข้ามสะพานแขวนภูเขารูปหัวใจ เชื่อมต่อธรรมชาติในอ้อมกอดของภูเขา',
      'เรียนรู้วิถีสวนยางพาราและสวนผลไม้ ชิมทุเรียนคลองแสงร้อยปีที่โด่งดัง',
      'ลิ้มรสอาหารท้องถิ่นเพื่อสุขภาพ และสนุกกับของเล่นพื้นบ้าน "ลูกหวือ"'
    ],
    includedTh: [
      'ไกด์นำเที่ยวชุมชนบ้านเขาเทพพิทักษ์ตลอดโปรแกรม',
      'อาหารท้องถิ่นเพื่อสุขภาพพร้อมผลไม้ตามฤดูกาล',
      'ค่าเข้าชมสะพานแขวนภูเขารูปหัวใจ',
      'ของเล่นพื้นบ้าน "ลูกหวือ" ทำมือ นำกลับบ้าน'
    ],
    itinerary: [
      { time: '10:00', titleTh: 'ไหว้พระวัดเขาพัง', descTh: 'สัมผัสความศรัทธาของชาวชุมชนคลองแสงที่มีต่อพุทธศาสนา' },
      { time: '10:45', titleTh: 'เดินข้ามสะพานแขวนภูเขารูปหัวใจ', descTh: 'เชื่อมต่อกับธรรมชาติในอ้อมกอดของภูเขา ถ่ายภาพวิวอันซีน' },
      { time: '11:30', titleTh: 'เรียนรู้วิถีสวนยางพาราและทุเรียนคลองแสง', descTh: 'ชมสวนผลไม้และชิมทุเรียนคลองแสงร้อยปีที่โด่งดัง' },
      { time: '12:30', titleTh: 'อาหารท้องถิ่นเพื่อสุขภาพ', descTh: 'ลิ้มรสอาหารพื้นบ้านและสนุกกับของเล่นพื้นบ้าน "ลูกหวือ"' }
    ],
    hostNameTh: 'ผู้ใหญ่บ้านสมศักดิ์ บ้านเขาพัง',
    hostRoleTh: 'ประธานวิสาหกิจบ้านเขาเทพพิทักษ์',
    hostAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    breakdownLevel1: {
      communitySharePct: 78,
      paymentGatewayPct: 3,
      communityManagerPct: 3,
      insuranceSupportPct: 2,
      platformDevOpsPct: 14
    },
    distributionLevel2: {
      homestayPct: 0,
      guideLeaderPct: 40,
      localMealsPct: 30,
      localTransportPct: 10,
      communityFundPct: 20
    },
    impact: {
      jobsSupported: 6,
      treesPlanted: 8,
      localIncomeGeneratedThb: 702,
      culturalPreservationItems: ['อนุรักษ์พันธุ์ทุเรียนคลองแสงร้อยปี', 'สืบสานของเล่นพื้นบ้าน "ลูกหวือ"']
    },
    isFeatured: true,
    isB2BRecommended: true
  },
  {
    id: 'chiew-lan-local-journey',
    titleTh: 'Local Journey of Ban Chiew Lan: เยือนวิสาหกิจผ้าทอ ทดลองกรอด้ายทอผ้า และร้อยมาลัยถวายพระปรมาภิไธย',
    titleEn: 'Local Journey of Ban Chiew Lan: Weaving Workshop & Organic Garden Experience',
    subtitleTh: 'ทดลองกรอด้ายและทอผ้าเอง เยือนสวนเกษตรอินทรีย์ และลิ้มรสอาหารท้องถิ่นเพื่อสุขภาพ',
    communityNameTh: 'วิสาหกิจชุมชนผ้าทอบ้านเชี่ยวหลาน',
    communityNameEn: 'Ban Chiew Lan Weaving CBT Community',
    communityId: 'chiew-lan',
    locationTh: 'หมู่ 4-5 บ้านเชี่ยวหลาน ต.เขาพัง อ.บ้านตาขุน จ.สุราษฎร์ธานี',
    locationEn: 'Ban Ta Khun, Surat Thani',
    region: 'south',
    category: 'craft',
    priceThbPerPerson: 900,
    durationText: 'ครึ่งวัน (10:00 - 14:00 น.)',
    maxGroupSize: 15,
    rating: 4.9,
    reviewCount: 9,
    coverImage: '/localconnect/weaver-man-loom.jpg',
    images: [
      '/localconnect/weaver-man-loom.jpg',
      '/localconnect/weaver-woman-loom-wide.jpg',
      '/localconnect/woven-fabric-closeup.jpg',
      '/localconnect/organic-garden-flower.jpg',
      '/localconnect/memorial-monument.jpg',
      '/localconnect/thai-food-plate.jpg'
    ],
    descriptionTh: 'ต้อนรับด้วย Welcome Drink พร้อมขนมไทยแท้ เดินชมสวนเกษตรอินทรีย์ พบปะเจ้าของสวนและสัมผัสความสดชื่นของธรรมชาติ ร่วมร้อยมาลัยเพื่อนำไปถวาย ณ แท่นพระปรมาภิไธย รับประทานอาหารท้องถิ่นเพื่อสุขภาพพร้อมขนมหวานท้องถิ่นเติมความอร่อย เยือนวิสาหกิจชุมชนผ้าทอบ้านเชี่ยวหลาน ชมความประณีตของผืนผ้าทอมือ ทดลองกรอด้ายและทอผ้าเอง สัมผัสวิธีการทำอย่างใกล้ชิด ผ่านกิจกรรม Workshop จากผ้าทอบ้านเชี่ยวหลาน',
    highlightsTh: [
      'ต้อนรับด้วย Welcome Drink พร้อมขนมไทยแท้',
      'เดินชมสวนเกษตรอินทรีย์ พบปะเจ้าของสวนและสัมผัสธรรมชาติ',
      'ร่วมร้อยมาลัยถวาย ณ แท่นพระปรมาภิไธย',
      'เยือนวิสาหกิจผ้าทอบ้านเชี่ยวหลาน ทดลองกรอด้ายและทอผ้าเอง'
    ],
    includedTh: [
      'เครื่องดื่มต้อนรับและขนมไทยแท้',
      'อาหารกลางวันท้องถิ่นเพื่อสุขภาพพร้อมขนมหวานท้องถิ่น',
      'อุปกรณ์เวิร์กชอปกรอด้ายและทอผ้า',
      'วิทยากรกลุ่มทอผ้าบ้านเชี่ยวหลาน'
    ],
    itinerary: [
      { time: '10:00', titleTh: 'ต้อนรับด้วย Welcome Drink', descTh: 'จิบเครื่องดื่มต้อนรับพร้อมขนมไทยแท้ก่อนเริ่มทริป' },
      { time: '10:30', titleTh: 'เดินชมสวนเกษตรอินทรีย์', descTh: 'พบปะเจ้าของสวนและร่วมร้อยมาลัยถวาย ณ แท่นพระปรมาภิไธย' },
      { time: '12:00', titleTh: 'อาหารท้องถิ่นเพื่อสุขภาพ', descTh: 'ลิ้มรสอาหารพื้นบ้านพร้อมขนมหวานท้องถิ่นเติมความอร่อย' },
      { time: '13:00', titleTh: 'เวิร์กชอปกรอด้ายและทอผ้า', descTh: 'เยือนวิสาหกิจผ้าทอบ้านเชี่ยวหลาน ทดลองทอผ้าเองอย่างใกล้ชิด' }
    ],
    hostNameTh: 'กลุ่มทอผ้าบ้านเชี่ยวหลาน',
    hostRoleTh: 'ประธานวิสาหกิจชุมชนผ้าทอบ้านเชี่ยวหลาน',
    hostAvatar: '/localconnect/weaver-man-loom.jpg',
    breakdownLevel1: {
      communitySharePct: 78,
      paymentGatewayPct: 3,
      communityManagerPct: 3,
      insuranceSupportPct: 2,
      platformDevOpsPct: 14
    },
    distributionLevel2: {
      homestayPct: 0,
      guideLeaderPct: 50,
      localMealsPct: 25,
      localTransportPct: 5,
      communityFundPct: 20
    },
    impact: {
      jobsSupported: 8,
      treesPlanted: 4,
      localIncomeGeneratedThb: 702,
      culturalPreservationItems: ['สืบสานภูมิปัญญาผ้าทอบ้านเชี่ยวหลาน', 'อนุรักษ์ลายผ้าทอมือดั้งเดิม']
    },
    isFeatured: true,
    isB2BRecommended: true
  },
  {
    id: 'chaiya-salted-egg-workshop',
    titleTh: 'เวิร์กชอปพอกดินจอมปลวกผสมแกลบเผาทำไข่เค็มไชยา และชิมผัดไทยไข่เค็ม',
    titleEn: 'Chaiya Salted Egg Clay Coating Workshop & Old Town Gastronomy',
    subtitleTh: 'เรียนรู้สูตรลับไข่เค็มไชยาอันดับ 1 พอกดินจอมปลวกผสมแกลบเผา และชิมเมนูเด็ด',
    communityNameTh: 'วิสาหกิจชุมชนไข่เค็ม อ.ส.ม. ไชยา',
    communityNameEn: 'Chaiya Salted Egg CBT Community',
    communityId: 'chaiya-egg',
    locationTh: 'อ.ไชยา จ.สุราษฎร์ธานี',
    locationEn: 'Chaiya, Surat Thani',
    region: 'south',
    category: 'craft',
    priceThbPerPerson: 980,
    durationText: 'ครึ่งวัน (09:00 - 12:30 น.)',
    maxGroupSize: 20,
    rating: 4.90,
    reviewCount: 38,
    coverImage: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?auto=format&fit=crop&w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&w=800&q=80'
    ],
    descriptionTh: 'ลงมือทำไข่เค็มไชยาด้วยตนเอง ภูมิปัญญาพื้นบ้านเมืองไชยาที่มีชื่อเสียงยาวนาน เรียนรู้วิธีการผสมดินจอมปลวก เกลือ และพอกด้วยแกลบเผา พร้อมนำไข่เค็มฝีมือตนเองกลับบ้าน ชิมเมนูผัดไทยไข่เค็มและขนมเปี๊ยะไข่เค็มไชยา',
    highlightsTh: [
      'เวิร์กชอปพอกไข่เค็มไชยาด้วยดินจอมปลวกและแกลบเผา นำกลับบ้าน 1 กล่อง',
      'ชิมไข่เค็มดาวทอดสดๆ นุ่มมัน ละมุนลิ้น',
      'ทานผัดไทยไข่เค็มไชยาและขนมเปี๊ยะไส้ไข่เค็มลาวา',
      'ชมสถาปัตยกรรมเมืองเก่าไชยาและพระบรมธาตุไชยา'
    ],
    includedTh: [
      'อุปกรณ์ทำไข่เค็มไชยาและกล่องไข่เค็มนำกลับบ้าน',
      'อาหารกลางวันเมนูผัดไทยไข่เค็มและขนมเปี๊ยะ',
      'วิทยากรป้าจินตนา ปราชญ์ไข่เค็มไชยา'
    ],
    itinerary: [
      { time: '09:00', titleTh: 'ต้อนรับด้วยน้ำส้มสด & ไข่ดาวเค็ม', descTh: 'ฟังประวัติไข่เค็มไชยาและเปรียบเทียบไข่เค็มแต่ละช่วงเวลา' },
      { time: '09:45', titleTh: 'เวิร์กชอปพอกดินจอมปลวก', descTh: 'ผสมดิน เกลือ และพอกแกลบลงบนไข่เป็ดคัดสรร' },
      { time: '11:15', titleTh: 'รับประทานผัดไทยไข่เค็ม', descTh: 'อิ่มอร่อยกับผัดไทยสูตรไชยาและขนมหวานไข่เค็ม' }
    ],
    hostNameTh: 'ป้าจินตนา ไชยา',
    hostRoleTh: 'ประธานวิสาหกิจไข่เค็มไชยา',
    hostAvatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
    breakdownLevel1: {
      communitySharePct: 76,
      paymentGatewayPct: 3,
      communityManagerPct: 5,
      insuranceSupportPct: 2,
      platformDevOpsPct: 14
    },
    distributionLevel2: {
      homestayPct: 0,
      guideLeaderPct: 40,
      localMealsPct: 35,
      localTransportPct: 5,
      communityFundPct: 20
    },
    impact: {
      jobsSupported: 5,
      treesPlanted: 4,
      localIncomeGeneratedThb: 744,
      culturalPreservationItems: ['สืบสานภูมิปัญญาไข่เค็มไชยา', 'กองทุนแม่บ้านเกษตรกรไชยา']
    },
    isFeatured: false,
    isB2BRecommended: true
  },
  {
    id: 'surat-elephant-house',
    titleTh: 'วิถีควาญช้างเชิงอนุรักษ์ ทำสมุนไพรป้อนช้าง พายเรือคายัค และทำภาชนะจากมูลช้าง',
    titleEn: 'Surat Thani Elephant House Care & Kayaking Experience',
    subtitleTh: 'สัมผัสความผูกพันคนกับช้าง ปรุงสมุนไพรป้อนช้าง พายคายัค และทำภาชนะมูลช้าง',
    communityNameTh: 'สุราษฎร์ธานี เอเลเฟ่น เฮาส์',
    communityNameEn: 'Surat Thani Elephant House CBT',
    communityId: 'surat-elephant',
    locationTh: 'อ.กาญจนดิษฐ์ จ.สุราษฎร์ธานี',
    locationEn: 'Kanchanadit, Surat Thani',
    region: 'south',
    category: 'nature',
    priceThbPerPerson: 1850,
    durationText: '1 วัน (09:00 - 15:30 น.)',
    maxGroupSize: 15,
    rating: 4.97,
    reviewCount: 46,
    coverImage: 'https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?auto=format&fit=crop&w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80'
    ],
    descriptionTh: 'สัมผัสประสบการณ์ท่องเที่ยวอนุรักษ์ช้างอย่างแท้จริง ไร้การขี่ช้าง เรียนรู้วิถีควาญช้างปักษ์ใต้ ร่วมปั้นก้อนสมุนไพรสุขภาพป้อนช้าง สัมผัสความน่ารัก อ่อนโยน เดินเล่นกับช้างในธรรมชาติ พายเรือคายัคริมน้ำ และทำกระดาษผาชนะจากมูลช้าง',
    highlightsTh: [
      'ปรุงอาหารสมุนไพรและปั้นก้อนวิตามินป้อนช้างอย่างอบอุ่น',
      'พาช้างเดินเล่นในธรรมชาติและอาบน้ำช้างริมลำธาร',
      'พายเรือคายัคชมธรรมชาติสายน้ำกาญจนดิษฐ์',
      'เวิร์กชอปทำกระดาษและภาชนะรักษ์โลกจากมูลช้าง'
    ],
    includedTh: [
      'ก้อนสมุนไพรและอาหารช้างตลอดกิจกรรม',
      'อุปกรณ์พายเรือคายัคและเสื้อชูชีพ',
      'อาหารกลางวันปักษ์ใต้ท้องถิ่น 1 มื้อ',
      'ทีมควาญช้างและวิทยากรดูแลความปลอดภัย'
    ],
    itinerary: [
      { time: '09:00', titleTh: 'ต้อนรับสู่สุราษฎร์ธานี เอเลเฟ่น เฮาส์', descTh: 'ฟังเรื่องราวประวัติความเป็นมาของช้างและการอนุรักษ์' },
      { time: '10:00', titleTh: 'ปรุงอาหารสมุนไพร & ป้อนช้าง', descTh: 'หั่นผลไม้ ปั้นก้อนสมุนไพร และป้อนช้างอย่างใกล้ชิด' },
      { time: '12:00', titleTh: 'รับประทานอาหารกลางวัน', descTh: 'อร่อยกับอาหารพื้นบ้านปักษ์ใต้ในบรรยากาศร่มรื่น' },
      { time: '13:30', titleTh: 'พายคายัค & ทำกระดาษมูลช้าง', descTh: 'พายคายัคในลำน้ำ และทำผลิตภัณฑ์กระดาษคราฟต์จากมูลช้าง' }
    ],
    hostNameTh: 'พี่สุเทพ ควาญช้างสุราษฎร์',
    hostRoleTh: 'ผู้นำศูนย์อนุรักษ์สุราษฎร์ธานี เอเลเฟ่น เฮาส์',
    hostAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    breakdownLevel1: {
      communitySharePct: 80,
      paymentGatewayPct: 3,
      communityManagerPct: 2,
      insuranceSupportPct: 2,
      platformDevOpsPct: 13
    },
    distributionLevel2: {
      homestayPct: 0,
      guideLeaderPct: 40,
      localMealsPct: 25,
      localTransportPct: 10,
      communityFundPct: 25
    },
    impact: {
      jobsSupported: 8,
      treesPlanted: 15,
      localIncomeGeneratedThb: 1480,
      culturalPreservationItems: ['กองทุนสวัสดิการอาหารและการแพทย์ช้าง', 'สืบสานวิถีควาญช้างปักษ์ใต้']
    },
    isFeatured: true,
    isB2BRecommended: true
  },
  {
    id: 'koh-phaluai-green-island',
    titleTh: 'เกาะพะลวย กรีนไอส์แลนด์: เรียนรู้พลังงานสะอาด เก็บขยะชายหาด ปลูกป่าชายเลน และตามหานกเงือก',
    titleEn: 'Koh Phaluai Green Island: Clean Energy, Beach Cleanup & Hornbill Trekking',
    subtitleTh: 'สัมผัสเกาะเล็กกลางอ่าวไทยที่ขับเคลื่อนด้วยพลังงานสะอาด ร่วม CSR ปลูกป่าชายเลนและตามหานกเงือก',
    communityNameTh: 'ชุมชนท่องเที่ยวเกาะพะลวย',
    communityNameEn: 'Koh Phaluai Green Island CBT Community',
    communityId: 'koh-phaluai',
    locationTh: 'บ้านเกาะพะลวย ต.อ่างทอง อ.เกาะสมุย จ.สุราษฎร์ธานี',
    locationEn: 'Koh Samui, Surat Thani',
    region: 'south',
    category: 'nature',
    priceThbPerPerson: 1200,
    durationText: '1 วัน (09:00 - 16:00 น.)',
    maxGroupSize: 30,
    rating: 4.93,
    reviewCount: 21,
    coverImage: '/tceb/koh-phaluai-hornbill.jpg',
    images: [
      '/tceb/koh-phaluai-hornbill.jpg',
      '/tceb/koh-phaluai-beach-cleanup.jpg'
    ],
    descriptionTh: 'เดินทางสู่เกาะพะลวย กรีนไอส์แลนด์ เกาะเล็กกลางอ่าวไทยที่ขับเคลื่อนด้วยพลังงานสะอาด เรียนรู้ระบบพลังงานหมุนเวียนของชุมชน ร่วมกิจกรรม CSR เก็บขยะบนชายหาดและปลูกป่าชายเลนเพื่อฟื้นฟูระบบนิเวศ เดินป่า เข้าถ้ำ และตามหานกเงือกที่ยังคงอาศัยอยู่บนเกาะ',
    highlightsTh: [
      'เรียนรู้เรื่องพลังงานสะอาดของชุมชนเกาะพะลวย',
      'กิจกรรม CSR เก็บขยะบนชายหาดและปลูกป่าชายเลน',
      'เดินป่า เข้าถ้ำ สัมผัสธรรมชาติเกาะเล็กกลางอ่าวไทย',
      'ตามหานกเงือกในถิ่นอาศัยธรรมชาติบนเกาะ'
    ],
    includedTh: [
      'เรือนำเที่ยวและอุปกรณ์เดินป่า',
      'ต้นกล้าไม้ชายเลนและอุปกรณ์เก็บขยะ CSR',
      'อาหารกลางวันท้องถิ่นเกาะพะลวย 1 มื้อ',
      'ไกด์ท้องถิ่นชุมชนเกาะพะลวย'
    ],
    itinerary: [
      { time: '09:00', titleTh: 'เรียนรู้ระบบพลังงานสะอาด', descTh: 'ฟังบรรยายเรื่องพลังงานหมุนเวียนที่ขับเคลื่อนเกาะพะลวย' },
      { time: '10:30', titleTh: 'กิจกรรม CSR เก็บขยะชายหาด', descTh: 'ร่วมเก็บขยะบนชายหาดและปลูกป่าชายเลนฟื้นฟูระบบนิเวศ' },
      { time: '12:30', titleTh: 'อาหารกลางวันท้องถิ่น', descTh: 'รับประทานอาหารพื้นบ้านเกาะพะลวยริมทะเล' },
      { time: '13:30', titleTh: 'เดินป่าตามหานกเงือก', descTh: 'เดินป่า เข้าถ้ำ และตามหานกเงือกบนเกาะ' }
    ],
    hostNameTh: 'ทีมชุมชนเกาะพะลวย กรีนไอส์แลนด์',
    hostRoleTh: 'ประธานชุมชนท่องเที่ยวเกาะพะลวย',
    hostAvatar: '/tceb/koh-phaluai-beach-cleanup.jpg',
    breakdownLevel1: {
      communitySharePct: 78,
      paymentGatewayPct: 3,
      communityManagerPct: 3,
      insuranceSupportPct: 2,
      platformDevOpsPct: 14
    },
    distributionLevel2: {
      homestayPct: 0,
      guideLeaderPct: 40,
      localMealsPct: 25,
      localTransportPct: 15,
      communityFundPct: 20
    },
    impact: {
      jobsSupported: 6,
      treesPlanted: 30,
      localIncomeGeneratedThb: 936,
      culturalPreservationItems: ['กองทุนพลังงานสะอาดเกาะพะลวย', 'กองทุนอนุรักษ์นกเงือกและป่าชายเลน']
    },
    isFeatured: true,
    isB2BRecommended: true
  },
  {
    id: 'sala-athit-garden-tour',
    titleTh: 'สวนสละอาทิตย์: เรียนรู้การจัดการดิน กระบวนการผลิตสละ และทีมบิวดิ้งในสวน',
    titleEn: 'Sala Athit Salak Fruit Garden: Soil Management & Team Building',
    subtitleTh: 'เดินชมสวนสละอาทิตย์ เรียนรู้กระบวนการปลูกสละ ชิมผลสดจากต้น และร่วมทีมบิวดิ้ง',
    communityNameTh: 'สวนสละอาทิตย์',
    communityNameEn: 'Sala Athit Salak Fruit Garden',
    communityId: 'sala-athit-garden',
    locationTh: 'ต.คลองปราบ อ.บ้านนาสาร จ.สุราษฎร์ธานี',
    locationEn: 'Ban Na San, Surat Thani',
    region: 'south',
    category: 'nature',
    priceThbPerPerson: 900,
    durationText: 'ครึ่งวัน (09:00 - 13:00 น.)',
    maxGroupSize: 50,
    rating: 4.88,
    reviewCount: 15,
    coverImage: '/tceb/sala-athit-picking.jpg',
    images: [
      '/tceb/sala-athit-picking.jpg',
      '/tceb/sala-athit-peeling.jpg'
    ],
    descriptionTh: 'เดินชมสวนสละอาทิตย์ท่ามกลางบรรยากาศร่มรื่น เรียนรู้การจัดการดินและกระบวนการปลูกสละตั้งแต่ต้นจนถึงผลผลิต ชิมสละอาทิตย์สดจากต้นรสหวานฉ่ำ และร่วมกิจกรรมทีมบิวดิ้งในสวนที่เหมาะกับกลุ่มองค์กร',
    highlightsTh: [
      'เรียนรู้การจัดการดินและกระบวนการผลิตสละอาทิตย์',
      'ชิมสละอาทิตย์สดจากต้นรสหวานฉ่ำ',
      'จัดกิจกรรมทีมบิวดิ้งในสวนสละ'
    ],
    includedTh: [
      'ไกด์นำชมสวนสละอาทิตย์',
      'ผลสละอาทิตย์สดชิมในสวน',
      'อุปกรณ์กิจกรรมทีมบิวดิ้ง',
      'เครื่องดื่มต้อนรับ'
    ],
    itinerary: [
      { time: '09:00', titleTh: 'ต้อนรับและเรียนรู้การจัดการดิน', descTh: 'ฟังบรรยายการเตรียมดินและปลูกสละอาทิตย์' },
      { time: '10:00', titleTh: 'เดินชมสวนและเก็บสละ', descTh: 'เดินชมกระบวนการผลิตสละตั้งแต่ต้นจนถึงผลผลิต' },
      { time: '11:30', titleTh: 'ชิมสละอาทิตย์สดจากต้น', descTh: 'ลิ้มรสสละอาทิตย์รสหวานฉ่ำพร้อมเรียนรู้การปอกเปลือก' },
      { time: '12:00', titleTh: 'กิจกรรมทีมบิวดิ้งในสวน', descTh: 'ร่วมกิจกรรมสร้างความสัมพันธ์ทีมท่ามกลางบรรยากาศสวนสละ' }
    ],
    hostNameTh: 'เจ้าของสวนสละอาทิตย์',
    hostRoleTh: 'ประธานสวนสละอาทิตย์',
    hostAvatar: '/tceb/sala-athit-peeling.jpg',
    breakdownLevel1: {
      communitySharePct: 78,
      paymentGatewayPct: 3,
      communityManagerPct: 3,
      insuranceSupportPct: 2,
      platformDevOpsPct: 14
    },
    distributionLevel2: {
      homestayPct: 0,
      guideLeaderPct: 45,
      localMealsPct: 20,
      localTransportPct: 5,
      communityFundPct: 30
    },
    impact: {
      jobsSupported: 4,
      treesPlanted: 6,
      localIncomeGeneratedThb: 702,
      culturalPreservationItems: ['กองทุนพัฒนาพันธุ์สละอาทิตย์', 'ทุนส่งเสริมเกษตรกรรุ่นใหม่บ้านนาสาร']
    },
    isFeatured: false,
    isB2BRecommended: true
  },
  {
    id: 'tai-dam-wisdom-experience',
    titleTh: 'ศูนย์เรียนรู้ภูมิปัญญาไทดำ: ชมการแสดงเยาวชน แต่งกายชุดไทดำ และล่องเรือแม่น้ำตาปี',
    titleEn: 'Tai Dam Wisdom Learning Center: Youth Dance, Costume & Tapi River Boat Tour',
    subtitleTh: 'เรียนรู้ภูมิปัญญาไทดำ ชมการแสดงเยาวชน แต่งกายชุดไทดำ และล่องเรือชมชุมชนริมแม่น้ำตาปี',
    communityNameTh: 'ศูนย์เรียนรู้ภูมิปัญญาไทดำ',
    communityNameEn: 'Tai Dam Wisdom Learning Center',
    communityId: 'tai-dam-learning-center',
    locationTh: 'วัดดอนมะลิ ต.ท่าข้าม อ.พุนพิน จ.สุราษฎร์ธานี',
    locationEn: 'Phunphin, Surat Thani',
    region: 'south',
    category: 'culture',
    priceThbPerPerson: 900,
    durationText: 'ครึ่งวัน (09:00 - 13:00 น.)',
    maxGroupSize: 50,
    rating: 4.91,
    reviewCount: 18,
    coverImage: '/tceb/tai-dam-dance.jpg',
    images: [
      '/tceb/tai-dam-dance.jpg',
      '/tceb/tai-dam-textile-craft.jpg'
    ],
    descriptionTh: 'เรียนรู้ภูมิปัญญาชาวไทดำ ชมการแสดงพื้นบ้านโดยกลุ่มเยาวชนที่ร่วมกันสืบสานวัฒนธรรม ทดลองแต่งกายชุดไทดำนุ่งผ้าซิ่นลายแตงโม ลิ้มรสอาหารไทดำและอาหารใต้ในตลาดพื้นบ้าน ปิดท้ายด้วยการล่องเรือชมวิถีชุมชนริมแม่น้ำตาปี',
    highlightsTh: [
      'ชมการแสดงไทดำโดยกลุ่มเยาวชนสืบสานวัฒนธรรม',
      'ทดลองแต่งกายชุดไทดำ นุ่งผ้าซิ่นลายแตงโม',
      'ล่องเรือชมวิถีชุมชนริมแม่น้ำตาปี',
      'ชิมอาหารไทดำและอาหารใต้ในตลาดพื้นบ้าน'
    ],
    includedTh: [
      'ชุดไทดำสำหรับถ่ายภาพ',
      'อาหารไทดำและอาหารใต้ในตลาดพื้นบ้าน',
      'ค่าเรือล่องแม่น้ำตาปี',
      'ไกด์ชุมชนและการแสดงเยาวชนไทดำ'
    ],
    itinerary: [
      { time: '09:00', titleTh: 'เรียนรู้ภูมิปัญญาไทดำ', descTh: 'ฟังเรื่องราวประวัติศาสตร์และวัฒนธรรมชาวไทดำท่าข้าม' },
      { time: '09:45', titleTh: 'ชมการแสดงเยาวชนไทดำ', descTh: 'ชมการแสดงพื้นบ้านและทดลองแต่งกายชุดไทดำลายแตงโม' },
      { time: '11:00', titleTh: 'ตลาดพื้นบ้านไทดำ', descTh: 'ลิ้มรสอาหารไทดำและอาหารใต้ในตลาดพื้นบ้าน' },
      { time: '12:00', titleTh: 'ล่องเรือแม่น้ำตาปี', descTh: 'ล่องเรือชมวิถีชุมชนริมแม่น้ำตาปี' }
    ],
    hostNameTh: 'กลุ่มเยาวชนไทดำท่าข้าม',
    hostRoleTh: 'ประธานศูนย์เรียนรู้ภูมิปัญญาไทดำ',
    hostAvatar: '/tceb/tai-dam-textile-craft.jpg',
    breakdownLevel1: {
      communitySharePct: 78,
      paymentGatewayPct: 3,
      communityManagerPct: 3,
      insuranceSupportPct: 2,
      platformDevOpsPct: 14
    },
    distributionLevel2: {
      homestayPct: 0,
      guideLeaderPct: 45,
      localMealsPct: 25,
      localTransportPct: 10,
      communityFundPct: 20
    },
    impact: {
      jobsSupported: 10,
      treesPlanted: 0,
      localIncomeGeneratedThb: 702,
      culturalPreservationItems: ['กองทุนสืบสานวัฒนธรรมไทดำ', 'ทุนกลุ่มเยาวชนนาฏศิลป์ไทดำ']
    },
    isFeatured: true,
    isB2BRecommended: true
  }
];

export const SAMPLE_B2B_PACKAGES: B2BPackage[] = [
  {
    id: 'b2b-csr-leeled',
    titleTh: 'CSR & Team Building: ปลูกป่าชายเลนอเมซอน & สร้างบ้านปลา ชุมชนลีเล็ด',
    type: 'CSR',
    targetPax: '20 - 100 ท่าน',
    duration: '2 วัน 1 คืน / 1 วัน',
    priceStartThb: 2800,
    esgAlignment: ['SDG 1: Zero Poverty', 'SDG 13: Climate Action', 'SDG 14: Life Below Water'],
    descriptionTh: 'โปรแกรมองค์กรที่ผสานการล่องเรือชมอเมซอนสุราษฎร์ ปลูกป่าโกงกาง สร้างบ้านปลา และกิจกรรม Team Building สร้างความสามัคคีพร้อมใบรับรองผลกระทบ ESG',
    featuredCommunityTh: 'กลุ่มท่องเที่ยวโดยชุมชนลีเล็ด จ.สุราษฎร์ธานี',
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'b2b-field-trip-khao-thep',
    titleTh: 'Field Trip นิสิตนักศึกษา & องค์กร: นวัตกรรมท่องเที่ยวอนุรักษ์ & เขาสกโมเดล',
    type: 'University Field Trip',
    targetPax: '30 - 150 ท่าน',
    duration: '2 วัน 1 คืน',
    priceStartThb: 2900,
    esgAlignment: ['SDG 4: Quality Education', 'SDG 8: Decent Work', 'SDG 15: Life on Land'],
    descriptionTh: 'ทริปการศึกษาดูงานนวัตกรรมท่องเที่ยวอนุรักษ์ จุดชมวิวสะพานแขวนเขาเทพพิทักษ์ วิวเขารูปหัวใจ การบริหารจัดการเกษตรอินทรีย์และการกระจายรายได้สวัสดิการชุมชน',
    featuredCommunityTh: 'วิสาหกิจชุมชนท่องเที่ยวเชิงอนุรักษ์บ้านเขาเทพพิทักษ์ จ.สุราษฎร์ธานี',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80'
  }
];

export const INITIAL_BOOKINGS: Booking[] = [
  {
    id: 'BK-2026-8801',
    experienceId: 'klong-noi-canal-tour',
    experienceTitleTh: 'ล่องเรือสวนผลไม้ ป่าจากริมคลอง หัตถกรรมกะลามะพร้าว และศูนย์ฝึกลิงเพื่อการเกษตร',
    communityNameTh: 'วิสาหกิจชุมชนท่องเที่ยวตำบลคลองน้อย',
    bookingDate: '2026-08-20',
    paxCount: 2,
    totalPriceThb: 2500,
    directToCommunityThb: 1925,
    status: 'confirmed',
    travelerName: 'คุณภัทรวรินทร์ สมบูรณ์',
    travelerEmail: 'patwarin@gmail.com',
    paymentMethod: 'PromptPay QR',
    qrCodeUrl: 'https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=LOCALCONNECT-BK-2026-8801',
    createdDate: '2026-08-04'
  }
];
