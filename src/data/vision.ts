export interface MissionPillar {
  id: number;
  title: string;
  copy: string;
  iconName: string;
}

export const VISION_STATEMENT =
  'To build connected digital ecosystems that bring customers, businesses, professionals, growth partners, brands and distributors into useful digital networks, powered by modern software, automation and AI.';

export const MISSION_STATEMENT =
  'To make digital tools accessible to local businesses, and to connect the people around them into networks where everyone can grow.';

export const LONG_TERM_DIRECTION =
  'Beauty is the original and core ecosystem. The same architecture is planned to extend into Real Estate, Food Delivery, Jobs, Commerce, Advertising and AI & Technology.';

export const MISSION_PILLARS: MissionPillar[] = [
  {
    id: 1,
    title: 'Digitize local businesses',
    copy: 'Make digital tools accessible to local businesses.',
    iconName: 'Boxes',
  },
  {
    id: 2,
    title: 'Help customers discover',
    copy: 'Help customers find businesses, services, products and opportunities.',
    iconName: 'Users',
  },
  {
    id: 3,
    title: 'Help owners grow',
    copy: 'Help business owners operate, market and grow more efficiently.',
    iconName: 'Target',
  },
  {
    id: 4,
    title: 'Create professional opportunities',
    copy: 'Create structured opportunities for professionals and workers.',
    iconName: 'Briefcase',
  },
  {
    id: 5,
    title: 'Build a Growth Partner network',
    copy: 'Support business onboarding and expansion through a Growth Partner network.',
    iconName: 'Network',
  },
  {
    id: 6,
    title: 'Connect brands and distributors',
    copy: 'Connect brands, manufacturers, distributors, suppliers and business buyers through B2B systems.',
    iconName: 'Layers',
  },
  {
    id: 7,
    title: 'Apply automation and AI',
    copy: 'Use automation and AI to improve marketing, retention, operations and decisions.',
    iconName: 'Bot',
  },
  {
    id: 8,
    title: 'Build reusable technology',
    copy: 'Build technology that can expand from Beauty into other local-commerce verticals.',
    iconName: 'RefreshCw',
  },
];

export const FRAGMENTATION_PROBLEM = {
  label: 'The Problem: Fragmentation (Illustrative)',
  title: 'Disconnected Silos in Local Commerce',
  body: 'Local industries often run on separate tools: one for booking, another for marketing, another for hiring, another for sourcing. Customers, businesses, professionals and suppliers each work in their own silo, and valuable connections are missed.',
};

export const NEXORA_APPROACH = {
  label: 'The Nexora Approach',
  title: 'One Unified Architecture',
  body: 'Nexora is designed as one connected architecture rather than a collection of unrelated apps. Each product is a layer of the same ecosystem, sharing a brand, a design language and cross-links.',
};
