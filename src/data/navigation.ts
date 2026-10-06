export interface NavItem {
  id: string;
  fullLabel: string;
  shortLabel: string;
  route: string;
  description?: string;
}

export const NAV_ITEMS: NavItem[] = [
  { id: 'home', fullLabel: 'Home', shortLabel: 'Home', route: '/' },
  { id: 'ecosystem', fullLabel: 'Our Ecosystem', shortLabel: 'Ecosystem', route: '/ecosystem' },
  { id: 'products', fullLabel: 'Products & Platforms', shortLabel: 'Products', route: '/products' },
  { id: 'beauty', fullLabel: 'Beauty Ecosystem', shortLabel: 'Beauty', route: '/beauty-ecosystem' },
  { id: 'benefits', fullLabel: 'Who Benefits?', shortLabel: 'Benefits', route: '/who-benefits' },
  { id: 'verticals', fullLabel: 'Our Verticals', shortLabel: 'Verticals', route: '/verticals' },
  { id: 'vision', fullLabel: 'Vision & Mission', shortLabel: 'Vision', route: '/vision-mission' },
  { id: 'investors', fullLabel: 'Investors', shortLabel: 'Investors', route: '/investors' },
  { id: 'research', fullLabel: 'Market Research & Differentiation', shortLabel: 'Research', route: '/market-research' },
  { id: 'insights', fullLabel: 'Insights / Research', shortLabel: 'Insights', route: '/insights' },
  { id: 'about', fullLabel: 'About Nexora', shortLabel: 'About', route: '/about' },
];

export const HEADER_CTA = {
  label: 'Explore the Ecosystem',
  target: '/ecosystem',
};

export const FOOTER_SECTIONS = {
  brand: {
    name: 'NEXORA ONE',
    descriptor: 'Connected Digital Ecosystem',
    statement: 'Nexora One is a connected, multi-vertical digital ecosystem, beginning with Beauty.',
  },
  ecosystem: [
    { label: 'Beauty', href: '/verticals#beauty' },
    { label: 'Real Estate', href: '/verticals#real-estate' },
    { label: 'Food Delivery', href: '/verticals#food' },
    { label: 'Jobs', href: '/verticals#jobs' },
    { label: 'Commerce', href: '/verticals#commerce' },
    { label: 'Advertising', href: '/verticals#advertising' },
    { label: 'AI & Technology', href: '/verticals#ai' },
  ],
  products: [
    { label: 'SalonOS', href: '/products#salonos' },
    { label: 'White-Label Websites & Apps', href: '/products#white-label' },
    { label: 'Growth Partner', href: '/products#growth-partner' },
    { label: 'Beauty B2B', href: '/products#beauty-b2b' },
    { label: 'Customer App', href: '/products#customer-app' },
  ],
  company: [
    { label: 'Vision & Mission', href: '/vision-mission' },
    { label: 'Market Research', href: '/market-research' },
    { label: 'About', href: '/about' },
    { label: 'Insights', href: '/insights' },
    { label: 'Partnership', href: 'mailto:[PLACEHOLDER: official contact email]?subject=Partnership%20Discussion' },
  ],
  contactEmail: '[PLACEHOLDER: official contact email]',
};
