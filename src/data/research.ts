export type CellStatus = 'Observed' | 'Not observed' | 'Pending';

export interface FeatureMatrixRow {
  featureName: string;
  category: string;
  industryStandard: CellStatus;
  nexoraArchitecture: CellStatus;
  notes: string;
}

export interface ArchitectureDimension {
  dimension: string;
  conventionalApproach: string;
  nexoraApproach: string;
}

export const RESEARCH_OBJECTIVE =
  'To understand how existing platforms serve the beauty industry, and to describe where the Nexora One architecture sits within that landscape.';

export const KNOWN_FINDING =
  "Competitive research has found substantial market overlap. Nexora's differentiation is therefore described as an architecture and combination of layers, not as a single feature or an absolute claim.";

export const METHODOLOGY_POINTS = [
  'Public information only: platform websites, product pages and published documentation.',
  'Each platform reviewed on [PLACEHOLDER: research date].',
  'Scope: [PLACEHOLDER: e.g., regions, platform categories, number of platforms].',
  'A feature marked "Not observed" means it was not found in public materials on the review date. It does not mean the feature does not exist.',
];

export const FEATURE_MATRIX: FeatureMatrixRow[] = [
  {
    featureName: 'Customer discovery marketplace',
    category: 'Discovery',
    industryStandard: 'Observed',
    nexoraArchitecture: 'Observed',
    notes: 'Common in major B2C aggregator platforms',
  },
  {
    featureName: 'Salon booking engine',
    category: 'Operations',
    industryStandard: 'Observed',
    nexoraArchitecture: 'Observed',
    notes: 'Core foundation across traditional salon software',
  },
  {
    featureName: 'Salon CRM & Customer Database',
    category: 'Operations',
    industryStandard: 'Observed',
    nexoraArchitecture: 'Observed',
    notes: 'Standard across business management tools',
  },
  {
    featureName: 'Customer Loyalty & Points',
    category: 'Retention',
    industryStandard: 'Observed',
    nexoraArchitecture: 'Observed',
    notes: 'Varies between tier-based programs and custom points',
  },
  {
    featureName: 'WhatsApp automation & Recall',
    category: 'Communication',
    industryStandard: 'Pending',
    nexoraArchitecture: 'Observed',
    notes: 'Often requires third-party API plugins in conventional setups',
  },
  {
    featureName: 'White-label salon websites/apps',
    category: 'Branding',
    industryStandard: 'Not observed',
    nexoraArchitecture: 'Observed',
    notes: 'Most market competitors enforce their own marketplace brand over client brand',
  },
  {
    featureName: 'Professionals / beauty jobs layer',
    category: 'Workforce',
    industryStandard: 'Not observed',
    nexoraArchitecture: 'Observed',
    notes: 'Typically siloed on separate job boards rather than within the POS/CRM',
  },
  {
    featureName: 'Growth Partner network',
    category: 'Acquisition',
    industryStandard: 'Not observed',
    nexoraArchitecture: 'Observed',
    notes: 'Structured community merchant onboarding framework',
  },
  {
    featureName: 'B2B beauty marketplace & supply',
    category: 'Commerce',
    industryStandard: 'Not observed',
    nexoraArchitecture: 'Observed',
    notes: 'Wholesale distributor integration is rarely connected to salon POS',
  },
  {
    featureName: 'Advertising layer across network',
    category: 'Growth',
    industryStandard: 'Pending',
    nexoraArchitecture: 'Observed',
    notes: 'Cross-network promotional mechanism for brands and salons',
  },
  {
    featureName: 'AI marketing content & demand tools',
    category: 'Intelligence',
    industryStandard: 'Pending',
    nexoraArchitecture: 'Observed',
    notes: 'Emerging capabilities currently in development across platforms',
  },
  {
    featureName: 'Multi-vertical expansion architecture',
    category: 'Scale',
    industryStandard: 'Not observed',
    nexoraArchitecture: 'Observed',
    notes: 'Most platforms remain strictly single-vertical salon or food point-solutions',
  },
];

export const ARCHITECTURE_MATRIX: ArchitectureDimension[] = [
  {
    dimension: 'Hierarchy Model',
    conventionalApproach: 'Software-first or standalone aggregator marketplace.',
    nexoraApproach: 'Customer-first hierarchy unifying discovery with merchant operations.',
  },
  {
    dimension: 'Ecosystem Connectivity',
    conventionalApproach: 'Fragmented single-purpose tools requiring multi-app subscriptions.',
    nexoraApproach: 'Connected multi-product ecosystem sharing identity and data layers.',
  },
  {
    dimension: 'Branded Digital Presence',
    conventionalApproach: 'Merchants listed as commoditized profiles inside competitor branding.',
    nexoraApproach: 'Dedicated White-Label Websites & Apps powered by central platform engine.',
  },
  {
    dimension: 'Network Growth Framework',
    conventionalApproach: 'Direct corporate sales forces with geographic limitations.',
    nexoraApproach: 'Structured Growth Partner network with transparent milestone tracking.',
  },
  {
    dimension: 'Supply Chain Integration',
    conventionalApproach: 'Salons purchase supplies offline or via unrelated B2B portals.',
    nexoraApproach: 'B2B beauty distribution layer connecting brands, distributors, and salons directly.',
  },
  {
    dimension: 'Industry Scope',
    conventionalApproach: 'Locked within single-vertical silo.',
    nexoraApproach: 'Beauty-to-multi-vertical expansion framework (Real Estate, Food, Jobs, Commerce).',
  },
];

export const CANDIDATE_PLATFORMS = [
  { name: 'Fresha', category: 'Salon marketplace & booking software' },
  { name: 'Booksy', category: 'Appointment booking platform' },
  { name: 'Vagaro', category: 'Salon & wellness management software' },
  { name: 'Mindbody', category: 'Fitness & wellness business management' },
  { name: 'Zenoti', category: 'Enterprise salon & spa software' },
  { name: 'Urban Company', category: 'At-home on-demand service marketplace' },
];

export const WORDING_GUIDELINES = [
  {
    status: 'Allowed',
    text: 'Within our defined research scope…',
    rationale: 'Properly anchors findings to verifiable boundaries.',
  },
  {
    status: 'Allowed',
    text: 'Our research indicates…',
    rationale: 'Evidence-based qualification.',
  },
  {
    status: 'Allowed',
    text: 'Not observed in public materials on {date}',
    rationale: 'Factual statement regarding public availability.',
  },
  {
    status: 'Allowed',
    text: 'A new architecture for…',
    rationale: 'Descriptive positioning of systemic design.',
  },
  {
    status: 'Disallowed',
    text: "World's First",
    rationale: 'Unsupported absolute global claim.',
  },
  {
    status: 'Disallowed',
    text: 'No competitor',
    rationale: 'Disregards observed market overlap.',
  },
  {
    status: 'Disallowed',
    text: 'Only platform / unique in the world',
    rationale: 'Unsubstantiated absolute claim.',
  },
  {
    status: 'Disallowed',
    text: 'Best / #1 / Leading',
    rationale: 'Banned superlative without audited third-party proof.',
  },
];
