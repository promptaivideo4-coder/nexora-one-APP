export interface InsightItem {
  id: string;
  title: string;
  category: string;
  relatedVertical: string;
  date: string;
  excerpt: string;
  body: string;
  keyPoints?: string[];
  relatedProduct: string;
  relatedProductLink: string;
}

export const INSIGHT_CATEGORIES = [
  'All',
  'Beauty industry',
  'AI for local businesses',
  'Digital transformation',
  'Customer retention',
  'B2B beauty',
  'Local commerce',
  'Real Estate technology',
  'Food technology',
  'Jobs & professional networks',
  'Market research',
  'Ecosystem updates',
];

export const INSIGHTS_DATA: InsightItem[] = [
  {
    id: 'ins-01',
    title: 'What is a connected ecosystem?',
    category: 'Ecosystem updates',
    relatedVertical: 'Beauty',
    date: '[PLACEHOLDER: publish date]',
    excerpt: 'Why one connected architecture can serve an industry better than separate apps.',
    body: 'A connected ecosystem treats customers, businesses, professionals and suppliers as parts of one network. Instead of each group using a separate, unrelated tool, the products share a brand, an identity and links between them. That is the idea behind Nexora One.',
    keyPoints: [
      'Unifies customer discovery with merchant operating software',
      'Shared identity across booking, CRM, and loyalty',
      'Reduces friction and eliminates isolated software silos',
    ],
    relatedProduct: 'Nexora SalonOS',
    relatedProductLink: '/products#salonos',
  },
  {
    id: 'ins-02',
    title: 'Why beauty businesses need more than booking software',
    category: 'Beauty industry',
    relatedVertical: 'Beauty',
    date: '[PLACEHOLDER: publish date]',
    excerpt: 'Booking is one part of running a salon.',
    body: 'Running a salon also involves customer records, marketing, loyalty, staff, supplier relationships and a brand presence. Treating booking as the whole product leaves these needs in separate tools. Nexora’s approach is to connect them.',
    keyPoints: [
      'Booking accounts for only one step in the operational lifecycle',
      'Client retention requires automated recall and WhatsApp communication',
      'Branded digital web presence establishes distinct salon identity',
    ],
    relatedProduct: 'White-Label Websites & Apps',
    relatedProductLink: '/products#white-label',
  },
  {
    id: 'ins-03',
    title: 'White-label: a brand of your own, powered by a platform',
    category: 'Local commerce',
    relatedVertical: 'Beauty',
    date: '[PLACEHOLDER: publish date]',
    excerpt: 'What white-label websites and apps mean for a local business.',
    body: 'White-label means a business presents its own brand while the technology runs on a shared platform. Customers see the salon’s brand, and the owner gets tools without building software from scratch.',
    keyPoints: [
      'Preserves merchant brand autonomy over marketplace aggregation',
      'Direct customer relationship without competitor brand interference',
      'Turnkey setup powered by the central Nexora white-label engine',
    ],
    relatedProduct: 'White-Label Websites & Apps',
    relatedProductLink: '/products#white-label',
  },
  {
    id: 'ins-04',
    title: 'How automation can support customer retention',
    category: 'AI for local businesses',
    relatedVertical: 'AI & Technology',
    date: '[PLACEHOLDER: publish date]',
    excerpt: 'Reminders, recall and campaigns, handled consistently.',
    body: 'Retention depends on staying in touch with customers at the right moment. Automation can help businesses send timely reminders and recall messages consistently, while the owner stays in control of the message.',
    keyPoints: [
      'Timely automated reminders reduce no-shows and lost appointment slots',
      'Predictive customer recall intervals based on historical booking cadences',
      'Automated marketing content assistance for busy local owners',
    ],
    relatedProduct: 'Nexora AI Business Tools',
    relatedProductLink: '/products#ai-tools',
  },
];
