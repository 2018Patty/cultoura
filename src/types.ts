export type PageId = 
  | 'home'
  | 'explore'
  | 'detail'
  | 'transparency'
  | 'community'
  | 'b2b'
  | 'booking'
  | 'traveler-dashboard'
  | 'provider-dashboard'
  | 'overview';

export interface RevenueBreakdownLevel1 {
  communitySharePct: number; // e.g. 77
  paymentGatewayPct: number; // e.g. 3
  communityManagerPct: number; // e.g. 4
  insuranceSupportPct: number; // e.g. 2
  platformDevOpsPct: number; // e.g. 14
}

export interface CommunityDistributionLevel2 {
  homestayPct: number; // e.g. 10
  guideLeaderPct: number; // e.g. 50
  localMealsPct: number; // e.g. 20
  localTransportPct: number; // e.g. 10
  communityFundPct: number; // e.g. 10
}

export interface ImpactMetrics {
  jobsSupported: number;
  treesPlanted: number;
  localIncomeGeneratedThb: number;
  culturalPreservationItems: string[];
}

export interface Experience {
  id: string;
  titleTh: string;
  titleEn: string;
  subtitleTh: string;
  communityNameTh: string;
  communityNameEn: string;
  communityId: string;
  locationTh: string;
  locationEn: string;
  region: 'north' | 'south' | 'central' | 'northeast';
  category: 'culture' | 'nature' | 'food' | 'craft' | 'csr';
  priceThbPerPerson: number;
  durationText: string;
  maxGroupSize: number;
  rating: number;
  reviewCount: number;
  coverImage: string;
  images: string[];
  descriptionTh: string;
  highlightsTh: string[];
  includedTh: string[];
  itinerary: { time: string; titleTh: string; descTh: string }[];
  hostNameTh: string;
  hostRoleTh: string;
  hostAvatar: string;
  breakdownLevel1: RevenueBreakdownLevel1;
  distributionLevel2: CommunityDistributionLevel2;
  impact: ImpactMetrics;
  isFeatured?: boolean;
  isB2BRecommended?: boolean;
}

export interface CommunityProfile {
  id: string;
  nameTh: string;
  nameEn: string;
  provinceTh: string;
  storyTh: string;
  coverImage: string;
  gallery: string[];
  foundingYear: number;
  householdsInvolved: number;
  leaderNameTh: string;
  leaderTitleTh: string;
  leaderAvatar: string;
  keyHighlightsTh: string[];
  activeExperiencesCount: number;
  totalIncomeGeneratedThb: number;
  communityFundSpentThb: number;
  fundProjectsTh: string[];
}

export interface Booking {
  id: string;
  experienceId: string;
  experienceTitleTh: string;
  communityNameTh: string;
  bookingDate: string;
  paxCount: number;
  totalPriceThb: number;
  directToCommunityThb: number;
  status: 'confirmed' | 'completed' | 'pending';
  travelerName: string;
  travelerEmail: string;
  paymentMethod: string;
  qrCodeUrl?: string;
  createdDate: string;
}

export interface B2BPackage {
  id: string;
  titleTh: string;
  type: 'CSR' | 'Team Building' | 'University Field Trip' | 'Inbound Agency';
  targetPax: string;
  duration: string;
  priceStartThb: number;
  esgAlignment: string[];
  descriptionTh: string;
  featuredCommunityTh: string;
  image: string;
}
