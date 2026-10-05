export interface StakeholderDetail {
  id: string;
  name: string;
  tagline: string;
  problem: string;
  solution: string;
  benefits: string[];
  journeySteps: string[];
  ctaLabel: string;
  ctaTarget: string;
}

export const STAKEHOLDERS: StakeholderDetail[] = [
  {
    id: 'customer',
    name: 'Customer',
    tagline: 'Discover. Book. Save. Earn. Repeat.',
    problem:
      'Finding a trusted local business, comparing options and getting rewarded for loyalty usually means juggling separate apps, calls and messages.',
    solution:
      'One place to discover businesses and services, book where supported, and collect loyalty benefits.',
    benefits: [
      'Business and service discovery',
      'Offers and promotions',
      'Online booking where supported',
      'Loyalty points and rewards',
      'Personalized recommendations',
      'Reviews and ratings',
      'Verified-business discovery',
      'Digital gift cards',
    ],
    journeySteps: [
      'Discover',
      'Find a business',
      'View services & offers',
      'Book or enquire',
      'Get confirmation',
      'Use the service',
      'Earn loyalty',
      'Return',
    ],
    ctaLabel: 'Explore Beauty Directory',
    ctaTarget: 'https://beauty-directory-zeta.vercel.app/',
  },
  {
    id: 'salon-owner',
    name: 'Salon Owner / Business Owner',
    tagline: 'Run your business. Grow your customers. Automate your marketing.',
    problem:
      'Owners juggle bookings, customer records, marketing and staff across disconnected tools, and have no branded digital presence of their own.',
    solution:
      'A connected set of tools: your own branded website and app, plus an operating system for the business.',
    benefits: [
      'White-Label Websites & Apps',
      'Online booking tools',
      'Customer management (CRM)',
      'Customer loyalty & points',
      'WhatsApp campaigns and automation',
      'Automated customer recall',
      'Marketing campaigns and AI-assisted content',
      'Offers and promotions management',
      'Reviews and reputation tools',
      'Search visibility support',
      'Digital gift cards portal',
      'Staff and operations support',
      'Business analytics',
      'Multi-location support where applicable',
    ],
    journeySteps: [
      'Create digital presence',
      'Choose website / app / SalonOS tools',
      'Set up profile, services, staff, availability',
      'Connect booking + CRM',
      'Activate WhatsApp, marketing, loyalty',
      'Manage customers',
      'Measure growth',
      'Retain and grow',
    ],
    ctaLabel: 'Create Salon Website',
    ctaTarget: 'https://fanal-templetes-app.vercel.app/templates',
  },
  {
    id: 'growth-partner',
    name: 'Growth Partner',
    tagline: 'Grow the Nexora network. Build recognition. Progress through milestones.',
    problem:
      'People who want to help local businesses go digital lack a structured program, tools and a clear path.',
    solution:
      'A structured Growth Partner program with a dashboard, onboarding tracking and a milestone framework.',
    benefits: [
      'Local business onboarding opportunity',
      'Dedicated partner dashboard',
      'Onboarding and performance tracking',
      'Growth milestones',
      'Recognition & badges',
      'Training and support',
      'District-level growth opportunities',
      'Business network development',
    ],
    journeySteps: [
      'Discover the program',
      'Apply',
      'Verification where required',
      'Approval and activation',
      'Access dashboard',
      'Identify local businesses',
      'Onboard businesses',
      'Track progress',
      'Reach milestones',
      'Receive eligible recognition',
    ],
    ctaLabel: 'Join Growth Partner',
    ctaTarget: 'https://pink-growth-partner.vercel.app/',
  },
  {
    id: 'b2b',
    name: 'B2B Brands / Distributors',
    tagline: 'Connect brands, distributors and beauty businesses in one B2B network.',
    problem:
      'Reaching salons and professionals across regions depends on scattered relationships and limited visibility.',
    solution:
      'A B2B network and marketplace layer that connects supply with beauty businesses.',
    benefits: [
      'Access to salon and professional networks',
      'B2B marketplace presence',
      'Product discovery and listing',
      'Wholesale opportunities',
      'Lead generation and business enquiries',
      'Brand visibility across network',
      'Advertising opportunities',
      'Distributor network expansion',
      'Regional market expansion',
    ],
    journeySteps: [
      'Brand / Manufacturer',
      'Distributor / Supplier',
      'Salon / Business / Professional',
      'Customer',
    ],
    ctaLabel: 'Join B2B Network',
    ctaTarget: 'https://beauty-shop-2.vercel.app/',
  },
];

export const PLANNED_REWARD_FRAMEWORK = [
  { milestone: '25 shops', recognition: 'Official Nexora T-shirt' },
  { milestone: '50 shops', recognition: 'Tablet' },
  { milestone: '100 shops', recognition: 'Branded laptop' },
  { milestone: '250 shops', recognition: 'Electric scooter' },
  { milestone: '500 shops', recognition: 'Premium smartphone' },
  { milestone: '750 shops', recognition: '350 cc motorcycle' },
  { milestone: '1000+ shops', recognition: 'District Partner recognition and SUV' },
];

export const REWARD_DISCLAIMER =
  'Illustrative planned framework. Reward terms, eligibility, funding, compliance and availability are not yet finalized and this is not a guaranteed offer. Final terms will be published in the Growth Partner program terms.';
