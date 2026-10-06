import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import {
  Sparkles,
  Users,
  Store,
  Briefcase,
  TrendingUp,
  ShoppingBag,
  Building2,
  ArrowRight,
  Workflow,
  Network,
  AlertCircle,
  Unlink,
  Search,
  PhoneCall,
  MessageSquare,
  Clock,
  Gift,
  Repeat,
  Layers,
  Split,
  FileQuestion,
  HelpCircle,
  Boxes,
  TrendingDown,
  BarChart3,
  ArrowUpRight,
  ShieldCheck,
  Compass,
  CheckCircle2,
  HeartHandshake,
  RefreshCw,
  Star,
  Check,
  Calendar,
  ExternalLink,
  Globe,
  Database,
  Eye,
  AlertTriangle,
  UserMinus,
  Zap,
  Home,
  Cpu,
  Megaphone,
} from 'lucide-react';
import { Button } from '../components/common/Button';

interface EcosystemNode {
  id: string;
  name: string;
  subheadline: string;
  image: string;
  icon: React.ComponentType<{ className?: string }>;
  tags: string;
}

const ECOSYSTEM_NODES: EcosystemNode[] = [
  {
    id: 'customers',
    name: 'Customers',
    subheadline: 'Discover • Book • Rewards',
    image: '/assets/investor-node-customers.webp',
    icon: Users,
    tags: 'Salons • Spas • Rewards',
  },
  {
    id: 'businesses',
    name: 'Businesses',
    subheadline: 'Website • Booking • CRM • Growth',
    image: '/assets/investor-node-businesses.webp',
    icon: Store,
    tags: 'Salons • Barbers • Spas • Studios',
  },
  {
    id: 'professionals',
    name: 'Professionals',
    subheadline: 'Jobs • Profiles • Opportunities',
    image: '/assets/investor-node-professionals.webp',
    icon: Briefcase,
    tags: 'Stylists • Artists • Opportunities',
  },
  {
    id: 'growth-partners',
    name: 'Growth Partners',
    subheadline: 'Onboarding • Support • Growth',
    image: '/assets/investor-node-partners.webp',
    icon: TrendingUp,
    tags: 'Onboarding • Field Support • Network',
  },
  {
    id: 'market',
    name: 'Market',
    subheadline: 'Products • Suppliers • B2B',
    image: '/assets/investor-node-market.webp',
    icon: ShoppingBag,
    tags: 'Brands • Wholesale • B2B Supply',
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    subheadline: 'Chains • Franchises • Brands',
    image: '/assets/investor-node-enterprise.webp',
    icon: Building2,
    tags: 'Chains • Franchises • Multi-Unit',
  },
];

export const InvestorsPage: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  // Animation variants respecting prefers-reduced-motion
  const fadeIn = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1.0] as const },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.08,
        delayChildren: shouldReduceMotion ? 0 : 0.1,
      },
    },
  };

  return (
    <div className="min-h-screen bg-[#070707] text-white selection:bg-[#DAAF37]/30 selection:text-white relative overflow-hidden flex flex-col justify-center">
      {/* SECTION 1 — INVESTOR HERO */}
      <section
        id="investor-hero"
        aria-label="Investor Hero Section"
        className="relative pt-28 pb-20 sm:pt-36 sm:pb-28 lg:pt-40 lg:pb-32 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto w-full flex-grow flex flex-col justify-center"
      >
        {/* Subtle Ambient Golden Gradients */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] h-[500px] bg-gradient-to-b from-[#DAAF37]/10 via-[#DAAF37]/5 to-transparent blur-[140px] pointer-events-none rounded-full" />
        <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-[#DAAF37]/8 blur-[120px] pointer-events-none rounded-full" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 xl:gap-14 items-center relative z-10">
          {/* LEFT COLUMN: APPROVED INVESTOR HERO CONTENT */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="lg:col-span-5 xl:col-span-5 flex flex-col justify-center text-left"
          >
            {/* 1. Eyebrow */}
            <motion.div variants={fadeIn} className="mb-4">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DAAF37]/10 border border-[#DAAF37]/30 text-[#F4D03F] text-xs font-heading font-semibold uppercase tracking-[0.25em] shadow-[0_0_20px_rgba(218,175,55,0.15)]">
                <Sparkles className="w-3.5 h-3.5 text-[#F4D03F]" />
                NEXORA ONE
              </span>
            </motion.div>

            {/* 2. Main Heading */}
            <motion.h1
              variants={fadeIn}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] xl:text-[54px] font-serif font-bold text-white tracking-tight leading-[1.1] mb-4 text-balance drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]"
            >
              The Connected Beauty{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFF2B2] via-[#F4D03F] to-[#DAAF37]">
                Growth Network
              </span>
            </motion.h1>

            {/* 3. Subheadline */}
            <motion.p
              variants={fadeIn}
              className="text-lg sm:text-xl font-heading font-medium text-[#F4D03F] mb-5 tracking-tight leading-snug"
            >
              Beauty Meets Growth. Everything Connects.
            </motion.p>

            {/* 4. Supporting Text */}
            <motion.p
              variants={fadeIn}
              className="text-sm sm:text-base text-white/80 font-sans leading-relaxed mb-6 font-normal"
            >
              Nexora One is building a connected digital ecosystem for the beauty
              industry — bringing customers, salons, barbers, spas, tattoo studios,
              clinics, professionals, businesses, Growth Partners, suppliers,
              brands and enterprise networks into one connected architecture.
            </motion.p>

            {/* Hero Message Callout */}
            <motion.div
              variants={fadeIn}
              className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-white/[0.06] to-white/[0.02] border border-[#DAAF37]/35 backdrop-blur-md mb-8 shadow-[0_4px_24px_rgba(0,0,0,0.5),0_0_20px_rgba(218,175,55,0.1)] relative overflow-hidden group"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#FFF2B2] via-[#F4D03F] to-[#DAAF37]" />
              <div className="flex items-start gap-3">
                <Network className="w-5 h-5 text-[#F4D03F] flex-shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm font-sans text-white/90 leading-relaxed italic">
                  &ldquo;One ecosystem designed to help people discover, businesses grow,
                  professionals find opportunity, and the beauty industry connect.&rdquo;
                </p>
              </div>
            </motion.div>

            {/* 5. Primary & 6. Secondary CTAs */}
            <motion.div
              variants={fadeIn}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4"
            >
              <Button
                to="/ecosystem"
                variant="primary"
                size="lg"
                className="w-full sm:w-auto shadow-[0_6px_28px_rgba(218,175,55,0.45)] hover:shadow-[0_8px_36px_rgba(218,175,55,0.65)]"
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Explore Nexora
              </Button>
              <Button
                to="/vision-mission"
                variant="secondary"
                size="lg"
                className="w-full sm:w-auto"
                icon={<Workflow className="w-4 h-4 text-[#DAAF37]" />}
              >
                How Nexora Works
              </Button>
            </motion.div>
          </motion.div>

          {/* RIGHT COLUMN: LARGE PREMIUM CONNECTED ECOSYSTEM VISUAL */}
          <div className="lg:col-span-7 xl:col-span-7 relative flex items-center justify-center">
            {/* Background Ambient Aura */}
            <div className="relative w-full max-w-[680px] p-2 sm:p-4 rounded-3xl bg-gradient-to-b from-white/[0.04] via-black/80 to-[#0A0A0A] border border-[#DAAF37]/30 shadow-[0_20px_60px_rgba(0,0,0,0.9),0_0_40px_rgba(218,175,55,0.15)] overflow-hidden">
              {/* Cinematic Center Visual Plate (Depth Layer) */}
              <div className="absolute inset-0 z-0 opacity-25 mix-blend-screen pointer-events-none">
                <img
                  src="/assets/investor-ecosystem-core.webp"
                  alt="Nexora Connected Digital Core"
                  width={680}
                  height={680}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Dynamic Connection Lines (SVG Vector Circuitry) */}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none z-10 hidden sm:block"
                viewBox="0 0 680 540"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient id="goldCircuitGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#DAAF37" stopOpacity="0.7" />
                    <stop offset="50%" stopColor="#F4D03F" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#DAAF37" stopOpacity="0.4" />
                  </linearGradient>
                  <filter id="goldGlowFilter" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="3" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                </defs>

                {/* Concentric Orbital Network Guides */}
                <circle cx="340" cy="270" r="110" stroke="url(#goldCircuitGrad)" strokeWidth="1" strokeDasharray="4 6" opacity="0.45" />
                <circle cx="340" cy="270" r="190" stroke="url(#goldCircuitGrad)" strokeWidth="1" strokeDasharray="3 8" opacity="0.3" />

                {/* Subtle Radial Connection Lines to 6 Node Quadrants */}
                {/* Node 1 Top Left */}
                <path d="M 340 270 L 160 85" stroke="url(#goldCircuitGrad)" strokeWidth="1.2" opacity="0.6" filter="url(#goldGlowFilter)" />
                {/* Node 2 Top Center/Right */}
                <path d="M 340 270 L 520 85" stroke="url(#goldCircuitGrad)" strokeWidth="1.2" opacity="0.6" filter="url(#goldGlowFilter)" />
                {/* Node 3 Mid Left */}
                <path d="M 340 270 L 120 270" stroke="url(#goldCircuitGrad)" strokeWidth="1.2" opacity="0.6" filter="url(#goldGlowFilter)" />
                {/* Node 4 Mid Right */}
                <path d="M 340 270 L 560 270" stroke="url(#goldCircuitGrad)" strokeWidth="1.2" opacity="0.6" filter="url(#goldGlowFilter)" />
                {/* Node 5 Bottom Left */}
                <path d="M 340 270 L 160 455" stroke="url(#goldCircuitGrad)" strokeWidth="1.2" opacity="0.6" filter="url(#goldGlowFilter)" />
                {/* Node 6 Bottom Right */}
                <path d="M 340 270 L 520 455" stroke="url(#goldCircuitGrad)" strokeWidth="1.2" opacity="0.6" filter="url(#goldGlowFilter)" />

                {/* Micro Animated Connection Pulses */}
                {!shouldReduceMotion && (
                  <>
                    <motion.circle
                      cx="340"
                      cy="270"
                      r="3"
                      fill="#FFF2B2"
                      animate={{
                        cx: [340, 160],
                        cy: [270, 85],
                        opacity: [0, 1, 0],
                      }}
                      transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
                    />
                    <motion.circle
                      cx="340"
                      cy="270"
                      r="3"
                      fill="#FFF2B2"
                      animate={{
                        cx: [340, 520],
                        cy: [270, 85],
                        opacity: [0, 1, 0],
                      }}
                      transition={{ duration: 3.6, repeat: Infinity, delay: 0.8, ease: 'easeInOut' }}
                    />
                    <motion.circle
                      cx="340"
                      cy="270"
                      r="3"
                      fill="#FFF2B2"
                      animate={{
                        cx: [340, 120],
                        cy: [270, 270],
                        opacity: [0, 1, 0],
                      }}
                      transition={{ duration: 3.0, repeat: Infinity, delay: 0.4, ease: 'easeInOut' }}
                    />
                    <motion.circle
                      cx="340"
                      cy="270"
                      r="3"
                      fill="#FFF2B2"
                      animate={{
                        cx: [340, 560],
                        cy: [270, 270],
                        opacity: [0, 1, 0],
                      }}
                      transition={{ duration: 3.4, repeat: Infinity, delay: 1.2, ease: 'easeInOut' }}
                    />
                    <motion.circle
                      cx="340"
                      cy="270"
                      r="3"
                      fill="#FFF2B2"
                      animate={{
                        cx: [340, 160],
                        cy: [270, 455],
                        opacity: [0, 1, 0],
                      }}
                      transition={{ duration: 3.3, repeat: Infinity, delay: 0.6, ease: 'easeInOut' }}
                    />
                    <motion.circle
                      cx="340"
                      cy="270"
                      r="3"
                      fill="#FFF2B2"
                      animate={{
                        cx: [340, 520],
                        cy: [270, 455],
                        opacity: [0, 1, 0],
                      }}
                      transition={{ duration: 3.5, repeat: Infinity, delay: 1.0, ease: 'easeInOut' }}
                    />
                  </>
                )}
              </svg>

              <div className="relative z-20 p-3 sm:p-5 flex flex-col gap-4">
                {/* Visual Header Ribbon */}
                <div className="flex items-center justify-between border-b border-white/10 pb-3 px-1">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#DAAF37] animate-pulse" />
                    <span className="text-[11px] font-heading font-semibold uppercase tracking-[0.2em] text-[#DAAF37]">
                      Connected Digital Ecosystem
                    </span>
                  </div>
                  <span className="text-[10px] font-sans text-white/50 tracking-wider">
                    Connection → Network → Scale
                  </span>
                </div>

                {/* THE 6 CONNECTED ECOSYSTEM NODES & CENTRAL NEXORA HUB */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-3.5 sm:gap-4 relative">
                  {/* CENTRAL NEXORA ONE HUB (Positioned prominently in the composition) */}
                  <div className="sm:col-span-2 flex justify-center py-2 sm:py-3">
                    <div className="relative flex items-center gap-3.5 sm:gap-4 px-5 sm:px-7 py-3 sm:py-3.5 rounded-full bg-gradient-to-r from-[#1A1A1A] via-black to-[#1A1A1A] border-2 border-[#DAAF37] shadow-[0_0_35px_rgba(218,175,55,0.4),0_8px_30px_rgba(0,0,0,0.8)] z-30 group hover:scale-[1.02] transition-transform duration-300">
                      {/* Ambient Core Glow */}
                      <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#DAAF37]/30 via-[#F4D03F]/40 to-[#DAAF37]/30 blur-md opacity-70 group-hover:opacity-100 transition-opacity pointer-events-none" />

                      {/* Golden Lotus / Emblem */}
                      <div className="relative w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-[#2A2A2A] to-black border border-[#DAAF37]/60 flex items-center justify-center flex-shrink-0 shadow-[0_0_15px_rgba(218,175,55,0.3)]">
                        <svg
                          viewBox="0 0 100 100"
                          fill="none"
                          className="w-3/4 h-3/4 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
                        >
                          <defs>
                            <linearGradient id="invGoldCore" x1="0%" y1="0%" x2="100%" y2="100%">
                              <stop offset="0%" stopColor="#FFF2B2" />
                              <stop offset="50%" stopColor="#F4D03F" />
                              <stop offset="100%" stopColor="#DAAF37" />
                            </linearGradient>
                          </defs>
                          <path
                            d="M26 80V20L54 58V20H74V80L46 42V80H26Z"
                            fill="url(#invGoldCore)"
                            stroke="#DAAF37"
                            strokeWidth="1.5"
                          />
                        </svg>
                      </div>

                      <div className="relative text-left leading-tight">
                        <div className="text-sm sm:text-base font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-[#FFF2B2] to-[#DAAF37] tracking-wider">
                          NEXORA ONE
                        </div>
                        <div className="text-[10px] sm:text-[11px] font-heading font-semibold text-[#F4D03F] uppercase tracking-widest">
                          Central Ecosystem Hub
                        </div>
                      </div>

                      <span className="relative ml-2 hidden sm:inline-flex items-center px-2 py-0.5 rounded-full bg-[#DAAF37]/20 border border-[#DAAF37]/40 text-[#FFF2B2] text-[9px] font-heading font-medium tracking-wide">
                        Core Architecture
                      </span>
                    </div>
                  </div>

                  {/* 6 CONNECTED ORBIT NODES */}
                  {ECOSYSTEM_NODES.map((node, index) => {
                    const IconComponent = node.icon;
                    return (
                      <div
                        key={node.id}
                        className="group relative rounded-2xl bg-gradient-to-br from-white/[0.08] via-black/80 to-[#101010] border border-[#DAAF37]/30 hover:border-[#DAAF37] p-3 sm:p-3.5 transition-all duration-300 shadow-[0_8px_24px_rgba(0,0,0,0.6)] hover:shadow-[0_12px_32px_rgba(218,175,55,0.25)] hover:scale-[1.02] flex items-center gap-3 sm:gap-3.5 overflow-hidden"
                      >
                        {/* Node Number Badge */}
                        <div className="absolute top-2 right-2 text-[9px] font-heading font-bold text-[#DAAF37]/50 group-hover:text-[#F4D03F] transition-colors">
                          0{index + 1}
                        </div>

                        {/* Node Photorealistic Sector Imagery */}
                        <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-xl overflow-hidden border border-[#DAAF37]/40 flex-shrink-0 bg-black shadow-inner">
                          <img
                            src={node.image}
                            alt={`${node.name} representation`}
                            width={56}
                            height={56}
                            className="w-full h-full object-cover select-none transition-transform duration-500 group-hover:scale-110"
                            loading="eager"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                        </div>

                        {/* Node Content */}
                        <div className="flex-1 min-w-0 text-left">
                          <div className="flex items-center gap-1.5 mb-0.5">
                            <IconComponent className="w-3.5 h-3.5 text-[#F4D03F] flex-shrink-0" />
                            <h3 className="text-xs sm:text-sm font-heading font-bold text-white group-hover:text-[#FFF2B2] transition-colors truncate">
                              {node.name}
                            </h3>
                          </div>
                          <p className="text-[11px] sm:text-xs text-[#DAAF37] font-sans font-medium tracking-tight truncate">
                            {node.subheadline}
                          </p>
                          <span className="text-[10px] text-white/50 font-sans block truncate mt-0.5">
                            {node.tags}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Bottom Ecosystem Visual Sub-bar */}
                <div className="pt-3 border-t border-white/10 flex flex-wrap items-center justify-between text-[10px] font-sans text-white/60 gap-2">
                  <div className="flex items-center gap-2">
                    <span className="text-[#DAAF37]">●</span>
                    <span>Salons • Barbers • Spas • Tattoo Studios • Clinics</span>
                  </div>
                  <div className="text-[#F4D03F] font-heading font-medium">
                    Integrated Ecosystem Architecture
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — THE INDUSTRY PROBLEM */}
      <section
        id="the-industry-problem"
        aria-label="The Industry Problem Section"
        className="relative py-20 sm:py-28 lg:py-32 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto w-full border-t border-white/10"
      >
        {/* Subtle Ambient Darkness & Warning Aura */}
        <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[700px] sm:w-[1000px] h-[400px] bg-gradient-to-b from-amber-500/[0.04] via-transparent to-transparent blur-[140px] pointer-events-none rounded-full" />

        {/* 1. SECTION HEADING & CONTRAST EMPHASIS */}
        <div className="max-w-4xl mx-auto text-center mb-16 sm:mb-20">
          {/* Eyebrow & Contrast Emphasis */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-amber-500/[0.08] border border-amber-500/30 text-amber-300 text-xs font-heading font-semibold uppercase tracking-wider mb-6 shadow-[0_0_24px_rgba(245,158,11,0.12)]">
            <AlertCircle className="w-3.5 h-3.5 text-amber-400" />
            <span>CONNECTED IN REAL LIFE</span>
            <span className="text-white/40">vs.</span>
            <span className="text-amber-200">FRAGMENTED DIGITALLY</span>
          </div>

          {/* Exact Approved Main Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight leading-[1.15] mb-5 text-balance">
            The Beauty Industry Is Connected in Real Life —{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-[#DAAF37]">
              But Fragmented Digitally.
            </span>
          </h2>

          <p className="text-sm sm:text-base text-white/70 font-sans max-w-2xl mx-auto leading-relaxed">
            Customers, businesses, professionals, suppliers and brands all participate in the same real-world industry, but their digital experiences and workflows remain fragmented across disconnected tools and channels.
          </p>
        </div>

        {/* CINEMATIC CUSTOMER PROBLEMS VISUAL (Visual representation of the 5 customer pain points) */}
        <div className="mb-12 sm:mb-16 rounded-2xl sm:rounded-3xl overflow-hidden border border-[#DAAF37]/30 shadow-[0_16px_48px_rgba(0,0,0,0.8),0_0_30px_rgba(218,175,55,0.12)]">
          <img
            src="/assets/customer-problems-cinematic.webp"
            alt="Beauty Booking Journey: Five Customer Problems - Finding Service, Booking Uncertainty, Waiting and Overcrowding, Scattered Offers, Weak Repeat Engagement"
            width={1920}
            height={740}
            className="w-full h-auto object-cover select-none block"
            loading="eager"
          />
        </div>

        {/* 2. CUSTOMER PROBLEMS */}
        <div className="mb-16 sm:mb-20">
          <div className="p-6 sm:p-8 lg:p-10 rounded-3xl bg-gradient-to-b from-white/[0.05] via-[#0D0D0D] to-[#070707] border border-white/10 shadow-[0_12px_40px_rgba(0,0,0,0.6)] relative overflow-hidden">
            {/* Header Block */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-300 flex-shrink-0">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-heading font-bold text-amber-400/80 uppercase tracking-widest block">
                    Stakeholder 01
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white">
                    Customer Problems
                  </h3>
                </div>
              </div>
              <span className="text-xs font-sans text-white/50 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 self-start sm:self-auto">
                5 Primary Pain Points
              </span>
            </div>

            {/* 5 Primary Problems Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
              {[
                {
                  num: '01',
                  text: 'Finding the right service is fragmented.',
                  desc: 'Scattered listings, unverified directories, and outdated business profiles.',
                },
                {
                  num: '02',
                  text: 'Booking uncertainty around slots, professionals, waiting and confirmation.',
                  desc: 'Phone tag, unconfirmed messages, and conflicting schedule calendars.',
                },
                {
                  num: '03',
                  text: 'Waiting and overcrowding at some times, empty chairs at others.',
                  desc: 'Unpredictable walk-in queues with no live queue or load visibility.',
                },
                {
                  num: '04',
                  text: 'Offers and rewards are scattered.',
                  desc: 'Paper punch cards, forgotten promotions, and disconnected loyalty schemes.',
                },
                {
                  num: '05',
                  text: 'Repeat engagement between customer and business is weak.',
                  desc: 'No continuous relationship layer once the customer leaves the salon.',
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-white/[0.03] border border-white/[0.08] hover:border-amber-500/40 transition-colors group relative"
                >
                  <div className="text-xs font-heading font-bold text-amber-400/70 mb-2">
                    Problem {item.num}
                  </div>
                  <h4 className="text-sm sm:text-base font-heading font-semibold text-white mb-2 leading-snug">
                    {item.text}
                  </h4>
                  <p className="text-xs text-white/50 font-sans leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}

              {/* Detailed Customer Pain Points Summary Card */}
              <div className="p-5 rounded-2xl bg-amber-500/[0.04] border border-amber-500/20 flex flex-col justify-center">
                <span className="text-xs font-heading font-semibold text-amber-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <AlertCircle className="w-3.5 h-3.5" />
                  Key Friction Areas
                </span>
                <p className="text-xs text-white/70 font-sans leading-relaxed">
                  Every step of the customer journey involves friction: discovery, availability checks, waiting, and retaining loyalty.
                </p>
              </div>
            </div>

            {/* Detailed Customer Pain Points List */}
            <div className="mb-10 p-5 rounded-2xl bg-black/50 border border-white/10">
              <span className="text-xs font-heading font-semibold uppercase tracking-wider text-white/60 block mb-3">
                Detailed Customer Pain Points
              </span>
              <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 text-xs text-white/80 font-sans">
                {[
                  'finding nearby salons, barbers, spas, tattoo studios, clinics and beauty professionals',
                  'knowing availability',
                  'knowing whether a favourite professional is available',
                  'waiting time',
                  'repeated phone/WhatsApp contact',
                  'discovering offers and loyalty benefits',
                  'maintaining a connected long-term relationship with a business',
                ].map((point, index) => (
                  <li key={index} className="flex items-start gap-2 bg-white/[0.02] p-2.5 rounded-xl border border-white/[0.04]">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0 mt-1.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Visual Direction: Fragmented Customer Touchpoint Journey */}
            <div>
              <div className="flex items-center justify-between mb-3 px-1">
                <span className="text-xs font-heading font-semibold uppercase tracking-wider text-amber-400">
                  Fragmented Customer Touchpoint Journey
                </span>
                <span className="text-[11px] font-sans text-white/40 flex items-center gap-1">
                  <Unlink className="w-3 h-3 text-amber-400/80" /> Disconnected Touchpoints
                </span>
              </div>

              <div className="p-4 sm:p-5 rounded-2xl bg-black/60 border border-amber-500/25">
                <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2.5 items-center">
                  {[
                    { label: 'Search', icon: Search, note: 'Scattered channels' },
                    { label: 'Phone', icon: PhoneCall, note: 'Unanswered calls' },
                    { label: 'WhatsApp', icon: MessageSquare, note: 'Manual chats' },
                    { label: 'Waiting', icon: Clock, note: 'Unknown queue' },
                    { label: 'Visit', icon: Store, note: 'Isolated appointment' },
                    { label: 'Offer', icon: Gift, note: 'Forgotten coupons' },
                    { label: 'Repeat Visit', icon: Repeat, note: 'No digital bond' },
                  ].map((step, idx) => {
                    const StepIcon = step.icon;
                    return (
                      <div key={idx} className="flex flex-col items-center text-center p-3 rounded-xl bg-white/[0.03] border border-white/[0.08] relative group">
                        <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/25 flex items-center justify-center text-amber-400 mb-2">
                          <StepIcon className="w-4 h-4" />
                        </div>
                        <div className="text-xs font-heading font-bold text-white mb-0.5">
                          {step.label}
                        </div>
                        <div className="text-[10px] font-sans text-amber-400/80">
                          {step.note}
                        </div>
                        {idx < 6 && (
                          <div className="hidden lg:flex absolute -right-2 top-1/2 -translate-y-1/2 z-10 text-amber-500/40 font-bold text-xs">
                            ⚡
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3. SALON / SHOP OWNER PROBLEMS */}
        <div className="mb-16 sm:mb-20">
          <div className="p-6 sm:p-8 lg:p-10 rounded-3xl bg-gradient-to-b from-white/[0.05] via-[#0D0D0D] to-[#070707] border border-white/10 shadow-[0_12px_40px_rgba(0,0,0,0.6)] relative overflow-hidden">
            {/* Header Block */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-300 flex-shrink-0">
                  <Store className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-heading font-bold text-amber-400/80 uppercase tracking-widest block">
                    Stakeholder 02
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white">
                    Salon / Shop Owner Problems
                  </h3>
                </div>
              </div>
              <span className="text-xs font-sans text-white/50 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 self-start sm:self-auto">
                10 Core Operational Hurdles
              </span>
            </div>

            {/* Approved Introductory Text & Free Nexora Website Teaser */}
            <div className="mb-8 p-6 sm:p-7 rounded-2xl bg-gradient-to-r from-amber-500/[0.12] via-black to-[#DAAF37]/10 border border-[#DAAF37]/35 shadow-[0_8px_32px_rgba(0,0,0,0.5),0_0_24px_rgba(218,175,55,0.12)] relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-[#FFF2B2] via-[#F4D03F] to-[#DAAF37]" />
              
              <div className="mb-4">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#DAAF37]/15 border border-[#DAAF37]/35 text-[#F4D03F] text-xs font-heading font-semibold uppercase tracking-wider mb-2">
                  <Sparkles className="w-3.5 h-3.5 text-[#F4D03F]" />
                  Small Business Digital Enablement
                </span>
                <p className="text-sm sm:text-base text-white/95 font-sans leading-relaxed mt-2 font-medium">
                  &ldquo;हर छोटा Haircut / Hair Salon / Beauty Shop owner अपनी website नहीं बनाता।
                  Nexora One हर छोटे business owner को उनके अपने नाम और branding के साथ FREE website दे रहा है — 30+ ready templates में से choose करके, लगभग 30 minutes में digital presence तैयार करने के लिए।&rdquo;
                </p>
              </div>

              {/* Free Nexora website solution teaser */}
              <div className="pt-3.5 border-t border-white/10 flex flex-wrap items-center gap-2 sm:gap-2.5 text-xs sm:text-sm font-heading font-semibold text-[#F4D03F]">
                <span>30+ templates</span>
                <span className="text-white/40">•</span>
                <span>Own business name</span>
                <span className="text-white/40">•</span>
                <span>Own branding</span>
                <span className="text-white/40">•</span>
                <span>Approx. 30-minute setup</span>
              </div>
            </div>

            {/* NEW CINEMATIC SALON / SHOP OWNER PROBLEMS & SOLUTIONS INFOGRAPHIC */}
            <div className="mb-12 rounded-2xl sm:rounded-3xl overflow-hidden border border-[#DAAF37]/35 shadow-[0_20px_50px_rgba(0,0,0,0.85),0_0_35px_rgba(218,175,55,0.15)]">
              <img
                src="/assets/salon-owner-problems.webp"
                alt="Salon and Shop Owner Challenges and Nexora One Solutions Infographic"
                width={1920}
                height={960}
                className="w-full h-auto object-cover select-none block"
                loading="eager"
              />
            </div>

            {/* Salon / Shop Owner Problem Details & Cards */}
            {/* Disconnected Technology Stack Banner */}
            <div className="mb-10 p-5 rounded-2xl bg-gradient-to-r from-amber-500/[0.08] via-black to-amber-500/[0.05] border border-amber-500/30">
              <span className="text-xs font-heading font-semibold uppercase tracking-wider text-amber-400 block mb-2">
                Disconnected Technology Stack Burden
              </span>
              <p className="text-xs sm:text-sm text-white/80 font-sans mb-4">
                Business owners are forced to juggle multiple disjointed tools with separate accounts, recurring subscriptions, and no unified data:
              </p>
              <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm font-heading font-bold text-white">
                {[
                  'Website',
                  'Booking',
                  'CRM',
                  'Marketing',
                  'Loyalty',
                  'Reviews',
                  'Communication',
                ].map((tool, idx) => (
                  <React.Fragment key={idx}>
                    <span className="px-3.5 py-1.5 rounded-lg bg-white/[0.05] border border-white/15 text-white/90 shadow-sm flex items-center gap-1.5">
                      <Layers className="w-3.5 h-3.5 text-amber-400" />
                      {tool}
                    </span>
                    {idx < 6 && (
                      <span className="text-amber-400/60 font-serif font-normal">+</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* 10 Salon / Shop Owner Problems Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-4">
              {[
                {
                  id: '01',
                  title: 'Weak or fragmented digital presence.',
                  desc: 'Outdated social links or lack of a customized, branded website to represent the business professionally.',
                },
                {
                  id: '02',
                  title: 'Website cost / complexity.',
                  desc: 'High upfront development agency costs, technical maintenance hurdles, and slow turnaround times.',
                },
                {
                  id: '03',
                  title: 'Manual booking management.',
                  desc: 'Pen-and-paper diaries, double-bookings, and hours lost manually responding to appointment requests.',
                },
                {
                  id: '04',
                  title: 'Empty capacity / uneven workload.',
                  desc: 'Dead hours during midweek and overwhelming weekend surges with no dynamic load leveling.',
                },
                {
                  id: '05',
                  title: 'Customer acquisition difficulty.',
                  desc: 'Relying purely on unpredictable physical footfall and expensive, un-targeted local ads.',
                },
                {
                  id: '06',
                  title: 'Customer retention difficulty.',
                  desc: 'Clients drift away to competitors because there is no automated recall or retention system.',
                },
                {
                  id: '07',
                  title: 'Manual marketing and follow-up.',
                  desc: 'Zero automated campaigns; staff lack time or tools to run regular SMS or WhatsApp follow-ups.',
                },
                {
                  id: '08',
                  title: 'Scattered customer information.',
                  desc: 'Client treatment history, preferences, and contact details are spread across notes and personal phones.',
                },
                {
                  id: '09',
                  title: 'Local visibility and ranking challenges.',
                  desc: 'Struggling to compete against large salon chains for local search discoverability and verified reviews.',
                },
                {
                  id: '10',
                  title: 'Fragmented technology stack.',
                  desc: 'Software tools that do not talk to each other, creating duplicated work and fragmented reports.',
                },
              ].map((prob) => (
                <div
                  key={prob.id}
                  className="p-4 sm:p-5 rounded-2xl bg-white/[0.03] border border-white/[0.08] hover:border-amber-500/35 transition-colors flex items-start gap-3.5"
                >
                  <span className="px-2.5 py-1 rounded-md bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-heading font-bold flex-shrink-0 mt-0.5">
                    {prob.id}
                  </span>
                  <div>
                    <h4 className="text-sm font-heading font-semibold text-white mb-1 leading-snug">
                      {prob.title}
                    </h4>
                    <p className="text-xs text-white/55 font-sans leading-relaxed">
                      {prob.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 4. PROFESSIONAL / JOB SEEKER PROBLEMS */}
        <div className="mb-16 sm:mb-20">
          <div className="p-6 sm:p-8 lg:p-10 rounded-3xl bg-gradient-to-b from-white/[0.05] via-[#0D0D0D] to-[#070707] border border-white/10 shadow-[0_12px_40px_rgba(0,0,0,0.6)] relative overflow-hidden">
            {/* Header Block */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-300 flex-shrink-0">
                  <Briefcase className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-heading font-bold text-amber-400/80 uppercase tracking-widest block">
                    Stakeholder 03
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white">
                    Professional / Job Seeker Problems
                  </h3>
                </div>
              </div>
              <span className="text-xs font-sans text-white/50 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 self-start sm:self-auto">
                4 Core Discovery & Connection Barriers
              </span>
            </div>

            {/* Section Introduction */}
            <div className="mb-6">
              <p className="text-sm sm:text-base text-white/80 font-sans leading-relaxed">
                Talented professionals are ready, but finding the right opportunities is still difficult due to fragmented local salon openings, disconnected portfolios, and informal hiring channels.
              </p>
            </div>

            {/* EXACT UPLOADED CINEMATIC IMAGE */}
            <div className="mb-10 rounded-2xl sm:rounded-3xl overflow-hidden border border-[#DAAF37]/35 shadow-[0_20px_50px_rgba(0,0,0,0.85),0_0_35px_rgba(218,175,55,0.15)]">
              <img
                src="/assets/professional-problems-cinematic.webp"
                alt="Beauty Industry Job-Seeker Challenges: Relevant Jobs Difficult to Discover, Local Salon Opportunities Fragmented, Weak Profiles, Limited Business Connections"
                width={1920}
                height={960}
                className="w-full h-auto object-cover select-none block"
                loading="eager"
              />
            </div>

            {/* Existing Detailed Problem Content / Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {[
                {
                  title: 'relevant jobs are difficult to discover',
                  desc: 'Openings are scattered across generic job portals, social media groups, or word-of-mouth.',
                },
                {
                  title: 'local salon opportunities are fragmented',
                  desc: 'No dedicated single channel showing nearby verified salons actively hiring for specific specialties.',
                },
                {
                  title: 'professional profile / portfolio is weak or disconnected',
                  desc: 'Stylists and artists lack a verified digital portfolio to showcase their client results, ratings, and skills.',
                },
                {
                  title: 'business-to-professional connection is limited',
                  desc: 'Direct hiring relationships depend on chance personal networks rather than an industry talent hub.',
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 sm:p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-amber-500/30 transition-colors flex items-start gap-3.5"
                >
                  <AlertCircle className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="text-sm font-heading font-semibold text-white">
                      {item.title}
                    </div>
                    <div className="text-xs text-white/50 font-sans mt-1 leading-relaxed">
                      {item.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Visual Direction: Disconnected Opportunity Channels */}
            <div className="p-4 sm:p-5 rounded-2xl bg-black/60 border border-white/10">
              <span className="text-[11px] font-heading font-semibold text-white/60 uppercase tracking-wider block mb-3">
                Disconnected Opportunity Channels
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-center text-xs font-sans text-white/70">
                <div className="p-3 rounded-xl bg-white/[0.03] border border-dashed border-white/15">
                  Generic Classifieds
                </div>
                <div className="p-3 rounded-xl bg-white/[0.03] border border-dashed border-white/15">
                  Informal Word-of-Mouth
                </div>
                <div className="p-3 rounded-xl bg-white/[0.03] border border-dashed border-white/15">
                  Scattered Social DMs
                </div>
                <div className="p-3 rounded-xl bg-white/[0.03] border border-dashed border-white/15">
                  Isolated Paper Resumes
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 5. SUPPLIER / BRAND PROBLEMS */}
        <div className="mb-16 sm:mb-20">
          <div className="p-6 sm:p-8 lg:p-10 rounded-3xl bg-gradient-to-b from-white/[0.05] via-[#0D0D0D] to-[#070707] border border-white/10 shadow-[0_12px_40px_rgba(0,0,0,0.6)] relative overflow-hidden">
            {/* Header Block */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-300 flex-shrink-0">
                  <ShoppingBag className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-heading font-bold text-amber-400/80 uppercase tracking-widest block">
                    Stakeholder 04
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white">
                    Supplier / Brand Problems
                  </h3>
                </div>
              </div>
              <span className="text-xs font-sans text-white/50 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 self-start sm:self-auto">
                4 Core B2B Supply Disconnects
              </span>
            </div>

            {/* Short Introduction */}
            <div className="mb-6">
              <p className="text-sm sm:text-base text-white/80 font-sans leading-relaxed">
                Manufacturers, distributors, and brands face fragmented access to beauty businesses, relying on door-to-door sales reps, static PDF catalogues, and disjointed messaging threads for wholesale supply.
              </p>
            </div>

            {/* EXACT SUPPLIER / BRAND PROBLEMS IMAGE */}
            <div className="mb-10 rounded-2xl sm:rounded-3xl overflow-hidden border border-[#DAAF37]/35 shadow-[0_20px_50px_rgba(0,0,0,0.85),0_0_35px_rgba(218,175,55,0.15)]">
              <img
                src="/assets/supplier-problems-cinematic.webp"
                alt="Beauty Industry Supply Challenges: Fragmented Access, Supplier Discovery Difficulty, Scattered Catalogues, Fragmented B2B Enquiries"
                width={1920}
                height={960}
                className="w-full h-auto object-cover select-none block"
                loading="eager"
              />
            </div>

            {/* Existing Four Written Problem Blocks */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {[
                {
                  title: 'fragmented access to beauty businesses',
                  desc: 'Manufacturers and distributors must rely on individual field sales reps knocking on salon doors.',
                },
                {
                  title: 'supplier discovery difficulty',
                  desc: 'Salons cannot easily discover new certified brands, compare wholesale terms, or verify suppliers.',
                },
                {
                  title: 'catalogue/product visibility scattered',
                  desc: 'Product lines, ingredients, and bulk availability remain buried in static PDF sheets or paper booklets.',
                },
                {
                  title: 'business enquiry channels are fragmented',
                  desc: 'Ordering, re-stock inquiries, and B2B communications are lost in informal messaging threads.',
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 sm:p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-amber-500/30 transition-colors flex items-start gap-3.5"
                >
                  <AlertCircle className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="text-sm font-heading font-semibold text-white">
                      {item.title}
                    </div>
                    <div className="text-xs text-white/50 font-sans mt-1 leading-relaxed">
                      {item.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Visual Direction: Fragmented Relationship Flow */}
            <div className="p-4 sm:p-5 rounded-2xl bg-black/60 border border-white/10">
              <span className="text-[11px] font-heading font-semibold text-white/60 uppercase tracking-wider block mb-2.5">
                Fragmented Supply Relationship Flow
              </span>
              <div className="flex items-center justify-between gap-2 p-2.5 rounded-lg bg-white/[0.03] border border-white/10 text-xs font-sans text-center">
                <div className="font-heading font-bold text-amber-300">
                  Brand / Supplier
                </div>
                <div className="text-amber-400/60 font-mono text-[10px]">
                  → [Multiple Channels] →
                </div>
                <div className="font-heading font-bold text-white/90">
                  Beauty Businesses
                </div>
              </div>
              <div className="text-[10px] text-white/40 text-center mt-2">
                Unstructured orders, delayed delivery inquiries & isolated accounts
              </div>
            </div>
          </div>
        </div>

        {/* 6. INDUSTRY-LEVEL PROBLEM & FRAGMENTED ECOSYSTEM DIAGRAM */}
        <div className="p-8 sm:p-10 lg:p-12 rounded-3xl bg-gradient-to-b from-[#141414] via-black to-[#090909] border-2 border-amber-500/30 shadow-[0_20px_60px_rgba(0,0,0,0.8),0_0_30px_rgba(245,158,11,0.1)] relative overflow-hidden">
          {/* Ambient Danger / Disconnect Aura */}
          <div className="absolute top-0 right-0 w-[400px] h-[300px] bg-amber-500/[0.06] blur-[100px] pointer-events-none" />

          {/* Section 6 Heading & Statement */}
          <div className="max-w-3xl mx-auto text-center mb-10">
            <span className="text-xs font-heading font-bold uppercase tracking-[0.25em] text-amber-400 block mb-3">
              Industry-Level Problem
            </span>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-white mb-4 leading-tight">
              &ldquo;Customers, businesses, professionals, Growth Partners, brands and suppliers exist, but they are not sufficiently connected in one digital network.&rdquo;
            </h3>
            <p className="text-xs sm:text-sm text-white/60 font-sans leading-relaxed">
              Every participant operates within the physical economy of beauty, yet each remains isolated behind separate platforms, manual interactions, and disconnected technology silos.
            </p>
          </div>

          {/* Fragmented Ecosystem Diagram (Participant groups separated from each other) */}
          <div className="p-6 sm:p-8 rounded-2xl bg-black/80 border border-white/10 relative">
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/10">
              <span className="text-xs font-heading font-bold uppercase tracking-wider text-amber-400 flex items-center gap-2">
                <Unlink className="w-4 h-4" />
                Fragmented Industry Architecture (Current State)
              </span>
              <span className="text-[11px] font-sans text-white/50">
                Disconnected Silos • No Unified Network
              </span>
            </div>

            {/* 6 Disconnected Participant Groups */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3.5 sm:gap-4 relative">
              {[
                {
                  name: 'Customer',
                  icon: Users,
                  status: 'Isolated Search',
                  barrier: 'Disconnected from direct inventory',
                },
                {
                  name: 'Business',
                  icon: Store,
                  status: 'Manual Workflows',
                  barrier: 'Siloed booking & retention tools',
                },
                {
                  name: 'Professional',
                  icon: Briefcase,
                  status: 'Scattered Jobs',
                  barrier: 'No verified industry profile',
                },
                {
                  name: 'Growth Partner',
                  icon: TrendingUp,
                  status: 'Unstructured Field',
                  barrier: 'Lacking digital tracking infrastructure',
                },
                {
                  name: 'Brand',
                  icon: ShoppingBag,
                  status: 'Indirect Reach',
                  barrier: 'Dependent on fragmented distributors',
                },
                {
                  name: 'Supplier',
                  icon: Boxes,
                  status: 'Scattered Catalogues',
                  barrier: 'Informal B2B ordering channels',
                },
              ].map((group, index) => {
                const GroupIcon = group.icon;
                return (
                  <div
                    key={index}
                    className="p-4 rounded-xl bg-white/[0.03] border border-dashed border-amber-500/30 flex flex-col items-center text-center relative group"
                  >
                    {/* Disconnect indicator */}
                    <div className="w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-300 mb-2.5">
                      <GroupIcon className="w-4 h-4" />
                    </div>

                    <div className="text-sm font-heading font-bold text-white mb-1">
                      {group.name}
                    </div>

                    <div className="text-[10px] font-heading font-medium text-amber-400 uppercase tracking-wide mb-1">
                      {group.status}
                    </div>

                    <div className="text-[10px] text-white/45 font-sans leading-tight">
                      {group.barrier}
                    </div>

                    {/* Broken Link Indicator */}
                    <div className="mt-3 px-2 py-0.5 rounded-full bg-red-950/40 border border-red-500/30 text-red-300 text-[9px] font-sans">
                      Disconnected
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Central Fragmentation Callout Ribbon */}
            <div className="mt-6 pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs font-sans text-white/60 gap-3 text-center sm:text-left">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
                <span>All operating around the same industry, but without a connected digital network.</span>
              </div>
              <div className="text-amber-400 font-heading font-semibold text-[11px] uppercase tracking-wider">
                The Core Structural Gap
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — CUSTOMER SOLUTION */}
      <section
        id="customer-solution"
        aria-label="Customer Solution Section"
        className="relative py-20 sm:py-28 lg:py-32 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto w-full border-t border-white/10"
      >
        {/* Subtle Ambient Gold Aura */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] sm:w-[1000px] h-[450px] bg-gradient-to-b from-[#DAAF37]/[0.08] via-transparent to-transparent blur-[140px] pointer-events-none rounded-full" />

        {/* 1. Section Header & Heading */}
        <div className="max-w-4xl mx-auto text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DAAF37]/10 border border-[#DAAF37]/30 text-[#F4D03F] text-xs font-heading font-semibold uppercase tracking-[0.2em] mb-4 shadow-[0_0_20px_rgba(218,175,55,0.15)]">
            <Sparkles className="w-3.5 h-3.5 text-[#F4D03F]" />
            3. CUSTOMER SOLUTION
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight leading-[1.15] mb-5 text-balance">
            From Finding a Service to Building a{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFF2B2] via-[#F4D03F] to-[#DAAF37]">
              Long-Term Beauty Relationship
            </span>
          </h2>

          <p className="text-sm sm:text-base text-white/75 font-sans max-w-2xl mx-auto leading-relaxed mb-6">
            Transforming fragmented offline interactions into a connected digital lifecycle — empowering customers with instant discovery, transparent booking, and enduring loyalty benefits.
          </p>

          {/* Customer Journey / Introduction */}
          <div className="inline-flex flex-wrap items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-white/[0.05] via-[#121212] to-white/[0.05] border border-[#DAAF37]/35 shadow-[0_0_24px_rgba(218,175,55,0.12)] text-xs sm:text-sm font-heading font-semibold text-[#F4D03F]">
            <span>Discover</span>
            <span className="text-[#DAAF37]/60">→</span>
            <span>Compare</span>
            <span className="text-[#DAAF37]/60">→</span>
            <span>Book</span>
            <span className="text-[#DAAF37]/60">→</span>
            <span>Visit</span>
            <span className="text-[#DAAF37]/60">→</span>
            <span>Review</span>
            <span className="text-[#DAAF37]/60">→</span>
            <span>Reward</span>
            <span className="text-[#DAAF37]/60">→</span>
            <span>Rebook</span>
          </div>
        </div>

        {/* EXACT UPLOADED CUSTOMER SOLUTION CINEMATIC IMAGE */}
        <div className="mb-14 sm:mb-16 rounded-2xl sm:rounded-3xl overflow-hidden border border-[#DAAF37]/35 shadow-[0_20px_50px_rgba(0,0,0,0.85),0_0_35px_rgba(218,175,55,0.15)]">
          <img
            src="/assets/customer-solution-cinematic.webp"
            alt="From Finding a Service to Building a Long-Term Beauty Relationship: Discover, Compare, Book, Visit, Review, Reward, Rebook - Nexora One Customer Solution Infographic"
            width={1920}
            height={960}
            className="w-full h-auto object-cover select-none block"
            loading="eager"
          />
        </div>

        {/* 2. Customer Benefit Callout Cards */}
        <div className="mb-14 sm:mb-16">
          <div className="p-1 rounded-2xl bg-gradient-to-r from-[#DAAF37]/40 via-white/10 to-[#DAAF37]/40 shadow-[0_12px_40px_rgba(0,0,0,0.6)]">
            <div className="p-6 sm:p-8 rounded-[15px] bg-[#0A0A0A] relative overflow-hidden">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-6 border-b border-white/10">
                <div>
                  <span className="text-xs font-heading font-bold uppercase tracking-wider text-[#DAAF37] block mb-1">
                    Value Proposition
                  </span>
                  <h3 className="text-xl sm:text-2xl font-heading font-bold text-white">
                    Customer Benefit
                  </h3>
                </div>
                <div className="text-sm sm:text-base font-serif italic text-[#F4D03F]">
                  &ldquo;Less waiting. Better discovery. Easier booking. Better engagement.&rdquo;
                </div>
              </div>

              {/* 4 Core Pillars of Customer Value */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  {
                    title: 'Less Waiting',
                    desc: 'Real-time slot availability, load-leveling visibility, and automated reminder queues minimize in-salon idle time.',
                    icon: Clock,
                  },
                  {
                    title: 'Better Discovery',
                    desc: 'Verified salon and practitioner profiles, authentic customer reviews, transparent pricing, and visual portfolios.',
                    icon: Search,
                  },
                  {
                    title: 'Easier Booking',
                    desc: 'Frictionless 5-step appointment flow with favourite stylist selection, slot lock, and instant confirmation.',
                    icon: Calendar,
                  },
                  {
                    title: 'Better Engagement',
                    desc: 'Unified loyalty rewards points, direct WhatsApp updates, seasonal promotions, and one-tap rebooking.',
                    icon: HeartHandshake,
                  },
                ].map((item, idx) => {
                  const ItemIcon = item.icon;
                  return (
                    <div
                      key={idx}
                      className="p-4 sm:p-5 rounded-xl bg-white/[0.03] border border-white/[0.08] hover:border-[#DAAF37]/40 transition-colors"
                    >
                      <div className="w-8 h-8 rounded-lg bg-[#DAAF37]/10 border border-[#DAAF37]/25 flex items-center justify-center text-[#F4D03F] mb-3">
                        <ItemIcon className="w-4 h-4" />
                      </div>
                      <div className="text-sm font-heading font-bold text-white mb-1.5">
                        {item.title}
                      </div>
                      <p className="text-xs text-white/60 font-sans leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* 3. The Connected Customer Journey (Contrast to fragmented touchpoints) */}
        <div className="mb-14 sm:mb-16">
          <div className="p-6 sm:p-8 lg:p-10 rounded-3xl bg-gradient-to-b from-white/[0.05] via-[#0D0D0D] to-[#070707] border border-[#DAAF37]/30 shadow-[0_16px_48px_rgba(0,0,0,0.7)] relative overflow-hidden">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-white/10">
              <div>
                <span className="text-xs font-heading font-bold uppercase tracking-wider text-[#DAAF37] block mb-1">
                  Seamless Lifecycle
                </span>
                <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white">
                  Customer Journey
                </h3>
              </div>
              <span className="text-xs font-sans text-[#F4D03F] px-3.5 py-1.5 rounded-full bg-[#DAAF37]/10 border border-[#DAAF37]/30 self-start sm:self-auto font-medium">
                Unified End-to-End Experience
              </span>
            </div>

            {/* Step-by-Step Flow: Discover → Compare → Book → Visit → Review → Reward → Rebook */}
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 items-center">
              {[
                { stage: 'Discover', desc: 'Nearby salons & spas', icon: Search, step: '01' },
                { stage: 'Compare', desc: 'Ratings & portfolios', icon: Split, step: '02' },
                { stage: 'Book', desc: 'Direct slot & stylist lock', icon: Calendar, step: '03' },
                { stage: 'Visit', desc: 'Frictionless check-in', icon: Store, step: '04' },
                { stage: 'Review', desc: 'Verified client feedback', icon: Star, step: '05' },
                { stage: 'Reward', desc: 'Loyalty points & offers', icon: Gift, step: '06' },
                { stage: 'Rebook', desc: 'One-tap repeat cycle', icon: RefreshCw, step: '07' },
              ].map((item, idx) => {
                const StepIcon = item.icon;
                return (
                  <div
                    key={idx}
                    className="flex flex-col items-center text-center p-3.5 rounded-2xl bg-white/[0.03] border border-[#DAAF37]/20 hover:border-[#DAAF37]/60 transition-all hover:scale-[1.02] relative group"
                  >
                    <span className="text-[10px] font-heading font-bold text-[#DAAF37]/60 mb-1">
                      Step {item.step}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#1F1F1F] to-black border border-[#DAAF37]/40 flex items-center justify-center text-[#F4D03F] mb-2 shadow-[0_0_15px_rgba(218,175,55,0.2)]">
                      <StepIcon className="w-4 h-4" />
                    </div>
                    <div className="text-xs font-heading font-bold text-white mb-0.5">
                      {item.stage}
                    </div>
                    <div className="text-[10px] font-sans text-white/50 leading-tight">
                      {item.desc}
                    </div>
                    {idx < 6 && (
                      <div className="hidden lg:flex absolute -right-2.5 top-1/2 -translate-y-1/2 z-10 text-[#DAAF37] font-bold text-sm">
                        →
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* 4. Nexora Discover Feature Block */}
        <div className="mb-14 sm:mb-16">
          <div className="p-6 sm:p-8 lg:p-10 rounded-3xl bg-gradient-to-b from-white/[0.05] via-[#0D0D0D] to-[#070707] border border-white/10 shadow-[0_16px_48px_rgba(0,0,0,0.7)] relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Column: Visual Mockup Showcase */}
              <div className="lg:col-span-6 order-2 lg:order-1">
                <div className="rounded-2xl sm:rounded-3xl overflow-hidden border border-[#DAAF37]/35 shadow-[0_20px_50px_rgba(0,0,0,0.85),0_0_35px_rgba(218,175,55,0.15)] relative group">
                  <img
                    src="/assets/shot-customer-app.webp"
                    alt="Nexora Discover Customer Experience Interface"
                    width={1376}
                    height={768}
                    className="w-full h-auto object-cover select-none block transition-transform duration-500 group-hover:scale-[1.02]"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>

              {/* Right Column: Capabilities & Checklist */}
              <div className="lg:col-span-6 order-1 lg:order-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#DAAF37]/10 border border-[#DAAF37]/30 text-[#F4D03F] text-xs font-heading font-semibold uppercase tracking-wider mb-3">
                  <Compass className="w-3.5 h-3.5" />
                  Consumer Experience Hub
                </div>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-4">
                  Nexora Discover
                </h3>
                <p className="text-xs sm:text-sm text-white/70 font-sans leading-relaxed mb-6">
                  A centralized consumer destination bridging the gap between local verified beauty businesses and clients seeking reliable appointments, personalized aesthetics, and transparent reviews.
                </p>

                <div className="mb-6">
                  <span className="text-xs font-heading font-bold uppercase tracking-wider text-white/50 block mb-3">
                    Customers can:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {[
                      'discover nearby services',
                      'view salon/business profiles',
                      'compare services',
                      'view portfolios',
                      'discover offers',
                      'book appointments',
                      'manage bookings',
                    ].map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.06] text-xs text-white/85 font-sans"
                      >
                        <div className="w-4 h-4 rounded-full bg-[#DAAF37]/20 border border-[#DAAF37]/40 flex items-center justify-center flex-shrink-0 text-[#F4D03F]">
                          <Check className="w-2.5 h-2.5" />
                        </div>
                        <span className="capitalize">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <Button
                    href="https://beauty-directory-zeta.vercel.app/"
                    variant="primary"
                    size="sm"
                    icon={<ExternalLink className="w-3.5 h-3.5" />}
                  >
                    Open Live Directory
                  </Button>
                  <Button
                    to="/products#customer-app"
                    variant="secondary"
                    size="sm"
                  >
                    View Product Specs
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 5. Booking Convenience & 6. Connected Engagement (Two Column Layout) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Booking Convenience Block */}
          <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-white/[0.05] via-[#0D0D0D] to-[#070707] border border-white/10 shadow-[0_12px_40px_rgba(0,0,0,0.6)] flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
                <div className="w-10 h-10 rounded-xl bg-[#DAAF37]/10 border border-[#DAAF37]/30 flex items-center justify-center text-[#F4D03F] flex-shrink-0">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-heading font-bold text-[#DAAF37] uppercase tracking-widest block">
                    Frictionless Scheduling
                  </span>
                  <h3 className="text-xl sm:text-2xl font-heading font-bold text-white">
                    Booking Convenience
                  </h3>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-white/70 font-sans leading-relaxed mb-6">
                Eliminating phone tag and manual back-and-forth through a direct 5-step intuitive booking process:
              </p>

              {/* Date → Time → Service → Professional → Confirmation */}
              <div className="flex flex-col gap-2.5 mb-6">
                {[
                  { step: 'Date', desc: 'Choose suitable calendar day with live open schedule', icon: Calendar },
                  { step: 'Time', desc: 'Select precise time window with zero double-booking overlap', icon: Clock },
                  { step: 'Service', desc: 'Pick desired service treatments with clear pricing and duration', icon: Store },
                  { step: 'Professional', desc: 'Option to select preferred stylist, artist, or specialist', icon: Users },
                  { step: 'Confirmation', desc: 'Instant confirmation with calendar sync and advance payment', icon: CheckCircle2 },
                ].map((item, idx) => {
                  const StepIcon = item.icon;
                  return (
                    <div
                      key={idx}
                      className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-[#DAAF37]/30 transition-colors"
                    >
                      <div className="w-7 h-7 rounded-lg bg-[#DAAF37]/15 border border-[#DAAF37]/30 flex items-center justify-center text-[#F4D03F] flex-shrink-0 text-xs font-heading font-bold">
                        {idx + 1}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-xs sm:text-sm font-heading font-bold text-white flex items-center gap-2">
                          <StepIcon className="w-3.5 h-3.5 text-[#DAAF37]" />
                          <span>{item.step}</span>
                        </div>
                        <div className="text-[11px] text-white/50 font-sans truncate mt-0.5">
                          {item.desc}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Quick Flow Ribbon */}
            <div className="p-3.5 rounded-xl bg-black/60 border border-[#DAAF37]/20 text-center">
              <span className="text-[11px] font-heading font-semibold text-[#F4D03F] tracking-wide">
                Date → Time → Service → Professional → Confirmation
              </span>
            </div>
          </div>

          {/* Connected Engagement Block */}
          <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-white/[0.05] via-[#0D0D0D] to-[#070707] border border-white/10 shadow-[0_12px_40px_rgba(0,0,0,0.6)] flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
                <div className="w-10 h-10 rounded-xl bg-[#DAAF37]/10 border border-[#DAAF37]/30 flex items-center justify-center text-[#F4D03F] flex-shrink-0">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-heading font-bold text-[#DAAF37] uppercase tracking-widest block">
                    Continuous Relationship
                  </span>
                  <h3 className="text-xl sm:text-2xl font-heading font-bold text-white">
                    Connected Engagement
                  </h3>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-white/70 font-sans leading-relaxed mb-6">
                Creating an automated retention flywheel that keeps customers in touch with their favourite salons:
              </p>

              {/* Booking → WhatsApp confirmation → Reminder → Loyalty → Offer → Rebooking */}
              <div className="flex flex-col gap-2.5 mb-6">
                {[
                  { step: 'Booking', desc: 'Customer initiates appointment via app or salon website' },
                  { step: 'WhatsApp confirmation', desc: 'Instant automated message with booking receipt & location' },
                  { step: 'Reminder', desc: 'Timely reminder 24 hours & 2 hours before scheduled slot' },
                  { step: 'Loyalty', desc: 'Points automatically credited upon appointment completion' },
                  { step: 'Offer', desc: 'Targeted milestone promotions based on customer history' },
                  { step: 'Rebooking', desc: 'Effortless one-tap prompt for recurring routine visits' },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-[#DAAF37]/30 transition-colors"
                  >
                    <div className="w-6 h-6 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 flex-shrink-0 text-xs">
                      ✓
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-xs sm:text-sm font-heading font-bold text-white">
                        {item.step}
                      </div>
                      <div className="text-[11px] text-white/50 font-sans truncate mt-0.5">
                        {item.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Flow Ribbon */}
            <div className="p-3.5 rounded-xl bg-black/60 border border-[#DAAF37]/20 text-center">
              <span className="text-[11px] font-heading font-semibold text-[#F4D03F] tracking-wide">
                Booking → WhatsApp confirmation → Reminder → Loyalty → Offer → Rebooking
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — SALON / SHOP OWNER PROBLEM */}
      <section
        id="salon-shop-owner-problem"
        aria-label="Salon / Shop Owner Problem Section"
        className="relative py-20 sm:py-28 lg:py-32 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto w-full border-t border-white/10"
      >
        {/* Subtle Ambient Darkness / Alert Aura */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] sm:w-[1000px] h-[450px] bg-gradient-to-b from-amber-500/[0.06] via-transparent to-transparent blur-[140px] pointer-events-none rounded-full" />

        {/* 1. Section Header & Heading */}
        <div className="max-w-4xl mx-auto text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/[0.1] border border-amber-500/30 text-amber-300 text-xs font-heading font-semibold uppercase tracking-[0.2em] mb-4 shadow-[0_0_20px_rgba(245,158,11,0.15)]">
            <AlertTriangle className="w-3.5 h-3.5 text-amber-400" />
            4. SALON / SHOP OWNER PROBLEMS
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight leading-[1.15] mb-5 text-balance">
            A Good Business Can Still Lose Customers When Its{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-[#DAAF37]">
              Digital Operations Are Fragmented.
            </span>
          </h2>

          <p className="text-sm sm:text-base text-white/75 font-sans max-w-2xl mx-auto leading-relaxed">
            Talented owners and professionals invest immense effort into their craft, yet struggle to retain clients and maximize revenue when operational touchpoints are split across manual notebooks, separate apps, and disconnected tools.
          </p>
        </div>

        {/* EXACT UPLOADED CINEMATIC IMAGE */}
        <div className="mb-14 sm:mb-16 rounded-2xl sm:rounded-3xl overflow-hidden border border-[#DAAF37]/35 shadow-[0_20px_50px_rgba(0,0,0,0.85),0_0_35px_rgba(218,175,55,0.15)]">
          <img
            src="/assets/salon-operations-fragmented.webp"
            alt="A Good Business Can Still Lose Customers When Its Digital Operations Are Fragmented - Salon and Shop Owner Operations Infographic"
            width={1920}
            height={960}
            className="w-full h-auto object-cover select-none block"
            loading="eager"
          />
        </div>

        {/* 2. The 9 Core Salon / Shop Owner Problems Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
          {/* 01. Digital presence */}
          <div className="p-6 rounded-2xl bg-gradient-to-b from-white/[0.04] via-[#0E0E0E] to-[#070707] border border-white/10 hover:border-amber-500/35 transition-all shadow-[0_10px_30px_rgba(0,0,0,0.6)] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/25 flex items-center justify-center text-amber-400">
                  <Globe className="w-4 h-4" />
                </div>
                <span className="text-[11px] font-heading font-bold text-amber-400/60 uppercase tracking-widest">
                  Problem 01
                </span>
              </div>
              <h3 className="text-base sm:text-lg font-heading font-bold text-white mb-2">
                Digital presence
              </h3>
              <p className="text-xs sm:text-sm text-white/70 font-sans leading-relaxed">
                Many local businesses lack a professional digital identity.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-white/[0.06] text-[11px] text-white/45 font-sans">
              No custom branded domain or modern digital showcase.
            </div>
          </div>

          {/* 02. Website cost / complexity */}
          <div className="p-6 rounded-2xl bg-gradient-to-b from-white/[0.04] via-[#0E0E0E] to-[#070707] border border-white/10 hover:border-amber-500/35 transition-all shadow-[0_10px_30px_rgba(0,0,0,0.6)] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/25 flex items-center justify-center text-amber-400">
                  <Layers className="w-4 h-4" />
                </div>
                <span className="text-[11px] font-heading font-bold text-amber-400/60 uppercase tracking-widest">
                  Problem 02
                </span>
              </div>
              <h3 className="text-base sm:text-lg font-heading font-bold text-white mb-2">
                Website cost / complexity
              </h3>
              <p className="text-xs sm:text-sm text-white/70 font-sans leading-relaxed mb-3">
                A small business may struggle with:
              </p>
              <div className="flex flex-wrap gap-1.5 text-[11px] font-heading font-semibold text-amber-300">
                <span className="px-2 py-0.5 rounded-md bg-white/[0.04] border border-white/10">Website</span>
                <span className="text-white/40">+</span>
                <span className="px-2 py-0.5 rounded-md bg-white/[0.04] border border-white/10">hosting</span>
                <span className="text-white/40">+</span>
                <span className="px-2 py-0.5 rounded-md bg-white/[0.04] border border-white/10">design</span>
                <span className="text-white/40">+</span>
                <span className="px-2 py-0.5 rounded-md bg-white/[0.04] border border-white/10">updates</span>
                <span className="text-white/40">+</span>
                <span className="px-2 py-0.5 rounded-md bg-white/[0.04] border border-white/10">technology</span>
              </div>
            </div>
            <div className="mt-4 pt-3 border-t border-white/[0.06] text-[11px] text-white/45 font-sans">
              High upfront fees and constant technical maintenance barriers.
            </div>
          </div>

          {/* 03. Booking management */}
          <div className="p-6 rounded-2xl bg-gradient-to-b from-white/[0.04] via-[#0E0E0E] to-[#070707] border border-white/10 hover:border-amber-500/35 transition-all shadow-[0_10px_30px_rgba(0,0,0,0.6)] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/25 flex items-center justify-center text-amber-400">
                  <PhoneCall className="w-4 h-4" />
                </div>
                <span className="text-[11px] font-heading font-bold text-amber-400/60 uppercase tracking-widest">
                  Problem 03
                </span>
              </div>
              <h3 className="text-base sm:text-lg font-heading font-bold text-white mb-2">
                Booking management
              </h3>
              <p className="text-xs sm:text-sm text-white/70 font-sans leading-relaxed">
                Manual calls, WhatsApp messages, notebooks and scattered appointment information create operational difficulty.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-white/[0.06] text-[11px] text-white/45 font-sans">
              Staff interruptions during service and frequent double-bookings.
            </div>
          </div>

          {/* 04. Empty capacity (Contrast Box) */}
          <div className="p-6 rounded-2xl bg-gradient-to-b from-white/[0.04] via-[#0E0E0E] to-[#070707] border border-white/10 hover:border-amber-500/35 transition-all shadow-[0_10px_30px_rgba(0,0,0,0.6)] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/25 flex items-center justify-center text-amber-400">
                  <Clock className="w-4 h-4" />
                </div>
                <span className="text-[11px] font-heading font-bold text-amber-400/60 uppercase tracking-widest">
                  Problem 04
                </span>
              </div>
              <h3 className="text-base sm:text-lg font-heading font-bold text-white mb-3">
                Empty capacity
              </h3>
              <div className="space-y-2 mb-2">
                <div className="p-2.5 rounded-xl bg-red-950/30 border border-red-500/30 flex items-center justify-between">
                  <span className="text-xs text-white/70 font-sans">Some periods:</span>
                  <span className="text-xs font-heading font-bold text-red-300">Too many customers</span>
                </div>
                <div className="p-2.5 rounded-xl bg-amber-950/30 border border-amber-500/30 flex items-center justify-between">
                  <span className="text-xs text-white/70 font-sans">Other periods:</span>
                  <span className="text-xs font-heading font-bold text-amber-300">Empty chairs</span>
                </div>
              </div>
            </div>
            <div className="mt-3 pt-3 border-t border-white/[0.06] text-[11px] text-white/45 font-sans">
              No dynamic scheduling or off-peak load leveling.
            </div>
          </div>

          {/* 05. Customer retention */}
          <div className="p-6 rounded-2xl bg-gradient-to-b from-white/[0.04] via-[#0E0E0E] to-[#070707] border border-white/10 hover:border-amber-500/35 transition-all shadow-[0_10px_30px_rgba(0,0,0,0.6)] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/25 flex items-center justify-center text-amber-400">
                  <UserMinus className="w-4 h-4" />
                </div>
                <span className="text-[11px] font-heading font-bold text-amber-400/60 uppercase tracking-widest">
                  Problem 05
                </span>
              </div>
              <h3 className="text-base sm:text-lg font-heading font-bold text-white mb-2">
                Customer retention
              </h3>
              <p className="text-xs sm:text-sm text-white/70 font-sans leading-relaxed">
                New customer acquisition is difficult and returning customers need structured engagement.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-white/[0.06] text-[11px] text-white/45 font-sans">
              Clients lapse to competitors without automated re-engagement.
            </div>
          </div>

          {/* 06. Marketing */}
          <div className="p-6 rounded-2xl bg-gradient-to-b from-white/[0.04] via-[#0E0E0E] to-[#070707] border border-white/10 hover:border-amber-500/35 transition-all shadow-[0_10px_30px_rgba(0,0,0,0.6)] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/25 flex items-center justify-center text-amber-400">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <span className="text-[11px] font-heading font-bold text-amber-400/60 uppercase tracking-widest">
                  Problem 06
                </span>
              </div>
              <h3 className="text-base sm:text-lg font-heading font-bold text-white mb-2">
                Marketing
              </h3>
              <p className="text-xs sm:text-sm text-white/70 font-sans leading-relaxed">
                Offers, campaigns, reminders and follow-up often require manual effort.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-white/[0.06] text-[11px] text-white/45 font-sans">
              Salon staff lack time and dedicated tools for routine marketing.
            </div>
          </div>

          {/* 07. Customer data */}
          <div className="p-6 rounded-2xl bg-gradient-to-b from-white/[0.04] via-[#0E0E0E] to-[#070707] border border-white/10 hover:border-amber-500/35 transition-all shadow-[0_10px_30px_rgba(0,0,0,0.6)] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/25 flex items-center justify-center text-amber-400">
                  <Database className="w-4 h-4" />
                </div>
                <span className="text-[11px] font-heading font-bold text-amber-400/60 uppercase tracking-widest">
                  Problem 07
                </span>
              </div>
              <h3 className="text-base sm:text-lg font-heading font-bold text-white mb-2">
                Customer data
              </h3>
              <p className="text-xs sm:text-sm text-white/70 font-sans leading-relaxed">
                Customer information can be scattered, incomplete or difficult to use.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-white/[0.06] text-[11px] text-white/45 font-sans">
              Treatment history and preferences lost in physical diaries.
            </div>
          </div>

          {/* 08. Visibility */}
          <div className="p-6 rounded-2xl bg-gradient-to-b from-white/[0.04] via-[#0E0E0E] to-[#070707] border border-white/10 hover:border-amber-500/35 transition-all shadow-[0_10px_30px_rgba(0,0,0,0.6)] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/25 flex items-center justify-center text-amber-400">
                  <Eye className="w-4 h-4" />
                </div>
                <span className="text-[11px] font-heading font-bold text-amber-400/60 uppercase tracking-widest">
                  Problem 08
                </span>
              </div>
              <h3 className="text-base sm:text-lg font-heading font-bold text-white mb-2">
                Visibility
              </h3>
              <p className="text-xs sm:text-sm text-white/70 font-sans leading-relaxed">
                Local businesses may need to manage Google, social media, referrals, reviews and digital presence separately.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-white/[0.06] text-[11px] text-white/45 font-sans">
              Difficulty standing out against large salon chains with marketing teams.
            </div>
          </div>

          {/* 09. Technology fragmentation */}
          <div className="p-6 rounded-2xl bg-gradient-to-b from-white/[0.04] via-[#0E0E0E] to-[#070707] border border-white/10 hover:border-amber-500/35 transition-all shadow-[0_10px_30px_rgba(0,0,0,0.6)] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/25 flex items-center justify-center text-amber-400">
                  <Boxes className="w-4 h-4" />
                </div>
                <span className="text-[11px] font-heading font-bold text-amber-400/60 uppercase tracking-widest">
                  Problem 09
                </span>
              </div>
              <h3 className="text-base sm:text-lg font-heading font-bold text-white mb-2">
                Technology fragmentation
              </h3>
              <p className="text-xs sm:text-sm text-white/70 font-sans leading-relaxed">
                Businesses may need several disconnected tools instead of one connected system.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-white/[0.06] text-[11px] text-white/45 font-sans">
              Data silos and multiple software subscriptions that never synchronize.
            </div>
          </div>
        </div>

        {/* 3. Concluding Operational Takeaway Banner */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-amber-500/[0.1] via-black to-[#DAAF37]/10 border border-amber-500/30 text-center">
          <p className="text-sm sm:text-base font-serif italic text-white/90 max-w-3xl mx-auto leading-relaxed">
            &ldquo;Businesses may need several disconnected tools instead of one connected system — creating administrative friction, missed bookings, and unmonetized client relationships.&rdquo;
          </p>
        </div>
      </section>

      {/* SECTION 5 — SALON / SHOP OWNER SOLUTION */}
      <section
        id="salon-shop-owner-solution"
        aria-label="Salon / Shop Owner Solution Section"
        className="relative py-20 sm:py-28 lg:py-32 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto w-full border-t border-white/10"
      >
        {/* Subtle Ambient Gold Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] sm:w-[1000px] h-[450px] bg-gradient-to-b from-[#DAAF37]/[0.08] via-transparent to-transparent blur-[140px] pointer-events-none rounded-full" />

        {/* 1. Section Header & Heading */}
        <div className="max-w-4xl mx-auto text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DAAF37]/10 border border-[#DAAF37]/30 text-[#F4D03F] text-xs font-heading font-semibold uppercase tracking-[0.2em] mb-4 shadow-[0_0_20px_rgba(218,175,55,0.15)]">
            <Sparkles className="w-3.5 h-3.5 text-[#F4D03F]" />
            5. SALON / SHOP OWNER SOLUTION
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight leading-[1.15] mb-5 text-balance">
            Your Business. Your Brand.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFF2B2] via-[#F4D03F] to-[#DAAF37]">
              Your Digital Growth.
            </span>
          </h2>

          <p className="text-sm sm:text-base text-white/75 font-sans max-w-2xl mx-auto leading-relaxed mb-6">
            Empowering salons, barbers, spas, tattoo studios, and clinics with their own independent branded digital presence, automated workflows, and connected growth architecture.
          </p>

          {/* Nexora Business Connected Flow Ribbon */}
          <div className="inline-flex flex-wrap items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-white/[0.05] via-[#121212] to-white/[0.05] border border-[#DAAF37]/35 shadow-[0_0_24px_rgba(218,175,55,0.12)] text-xs sm:text-sm font-heading font-semibold text-[#F4D03F]">
            <span>Profile</span>
            <span className="text-[#DAAF37]/60">→</span>
            <span>Services</span>
            <span className="text-[#DAAF37]/60">→</span>
            <span>Booking</span>
            <span className="text-[#DAAF37]/60">→</span>
            <span>Customers</span>
            <span className="text-[#DAAF37]/60">→</span>
            <span>Offers</span>
            <span className="text-[#DAAF37]/60">→</span>
            <span>Reviews</span>
            <span className="text-[#DAAF37]/60">→</span>
            <span>Growth</span>
          </div>
        </div>

        {/* 2. EXACT CINEMATIC SOLUTION INFOGRAPHIC IMAGE */}
        <div className="mb-14 sm:mb-16 rounded-2xl sm:rounded-3xl overflow-hidden border border-[#DAAF37]/35 shadow-[0_20px_50px_rgba(0,0,0,0.85),0_0_35px_rgba(218,175,55,0.15)]">
          <img
            src="/assets/salon-owner-solution-cinematic.webp"
            alt="Your Business. Your Brand. Your Digital Growth. - Nexora One Salon and Shop Owner Solution Infographic"
            width={1920}
            height={960}
            className="w-full h-auto object-cover select-none block"
            loading="eager"
          />
        </div>

        {/* 3. Nexora Business — Connected Business Layer (7 Steps) */}
        <div className="mb-14 sm:mb-16">
          <div className="p-6 sm:p-8 lg:p-10 rounded-3xl bg-gradient-to-b from-white/[0.05] via-[#0D0D0D] to-[#070707] border border-[#DAAF37]/30 shadow-[0_16px_48px_rgba(0,0,0,0.7)] relative overflow-hidden">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-white/10">
              <div>
                <span className="text-xs font-heading font-bold uppercase tracking-wider text-[#DAAF37] block mb-1">
                  Connected Architecture
                </span>
                <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white">
                  Nexora Business
                </h3>
              </div>
              <span className="text-xs font-sans text-[#F4D03F] px-3.5 py-1.5 rounded-full bg-[#DAAF37]/10 border border-[#DAAF37]/30 self-start sm:self-auto font-medium">
                Unified Business Operating System
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 items-center">
              {[
                { stage: 'Profile', desc: 'Branded digital identity', icon: Store, step: '01' },
                { stage: 'Services', desc: 'Menu, pricing & duration', icon: Layers, step: '02' },
                { stage: 'Booking', desc: 'Direct online scheduling', icon: Calendar, step: '03' },
                { stage: 'Customers', desc: 'Unified CRM directory', icon: Users, step: '04' },
                { stage: 'Offers', desc: 'Targeted promotions', icon: Gift, step: '05' },
                { stage: 'Reviews', desc: 'Verified social proof', icon: Star, step: '06' },
                { stage: 'Growth', desc: 'Automated repeat revenue', icon: TrendingUp, step: '07' },
              ].map((item, idx) => {
                const StepIcon = item.icon;
                return (
                  <div
                    key={idx}
                    className="flex flex-col items-center text-center p-3.5 rounded-2xl bg-white/[0.03] border border-[#DAAF37]/20 hover:border-[#DAAF37]/60 transition-all hover:scale-[1.02] relative group"
                  >
                    <span className="text-[10px] font-heading font-bold text-[#DAAF37]/60 mb-1">
                      Step {item.step}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#1F1F1F] to-black border border-[#DAAF37]/40 flex items-center justify-center text-[#F4D03F] mb-2 shadow-[0_0_15px_rgba(218,175,55,0.2)]">
                      <StepIcon className="w-4 h-4" />
                    </div>
                    <div className="text-xs font-heading font-bold text-white mb-0.5">
                      {item.stage}
                    </div>
                    <div className="text-[10px] font-sans text-white/50 leading-tight">
                      {item.desc}
                    </div>
                    {idx < 6 && (
                      <div className="hidden lg:flex absolute -right-2.5 top-1/2 -translate-y-1/2 z-10 text-[#DAAF37] font-bold text-sm">
                        →
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* 4. Nexora Sites — Free Professional Website with 30+ Templates */}
        <div className="mb-14 sm:mb-16">
          <div className="p-6 sm:p-8 lg:p-10 rounded-3xl bg-gradient-to-b from-white/[0.05] via-[#0D0D0D] to-[#070707] border border-white/10 shadow-[0_16px_48px_rgba(0,0,0,0.7)] relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Column: Visual Mockup Showcase */}
              <div className="lg:col-span-6 order-2 lg:order-1">
                <div className="rounded-2xl sm:rounded-3xl overflow-hidden border border-[#DAAF37]/35 shadow-[0_20px_50px_rgba(0,0,0,0.85),0_0_35px_rgba(218,175,55,0.15)] relative group">
                  <img
                    src="/assets/shot-white-label.webp"
                    alt="Nexora Sites Free Professional Website and 30+ Ready Templates"
                    width={1376}
                    height={768}
                    className="w-full h-auto object-cover select-none block transition-transform duration-500 group-hover:scale-[1.02]"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>

              {/* Right Column: Capabilities & Checklist */}
              <div className="lg:col-span-6 order-1 lg:order-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#DAAF37]/10 border border-[#DAAF37]/30 text-[#F4D03F] text-xs font-heading font-semibold uppercase tracking-wider mb-3">
                  <Globe className="w-3.5 h-3.5" />
                  Free Digital Presence
                </div>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-2">
                  Nexora Sites
                </h3>
                <p className="text-base sm:text-lg font-heading font-medium text-[#F4D03F] mb-4">
                  Free professional business website with 30+ beauty-specific templates
                </p>
                <p className="text-xs sm:text-sm text-white/70 font-sans leading-relaxed mb-6">
                  Every salon, barber, and beauty studio gets a high-converting digital storefront with their own business name, custom branding, and booking-ready architecture in approximately 30 minutes.
                </p>

                <div className="mb-6">
                  <span className="text-xs font-heading font-bold uppercase tracking-wider text-white/50 block mb-3">
                    Website / profile can include:
                  </span>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                    {[
                      'Business identity',
                      'Services',
                      'Pricing',
                      'Gallery',
                      'Team',
                      'Location',
                      'Contact',
                      'WhatsApp',
                      'Booking-ready profile',
                    ].map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 p-2 rounded-xl bg-white/[0.03] border border-white/[0.06] text-xs text-white/85 font-sans"
                      >
                        <div className="w-3.5 h-3.5 rounded-full bg-[#DAAF37]/20 border border-[#DAAF37]/40 flex items-center justify-center flex-shrink-0 text-[#F4D03F]">
                          <Check className="w-2 h-2" />
                        </div>
                        <span className="truncate">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <Button
                    href="https://fanal-templetes-app.vercel.app/templates"
                    variant="primary"
                    size="sm"
                    icon={<ExternalLink className="w-3.5 h-3.5" />}
                  >
                    Explore 30+ Templates
                  </Button>
                  <Button
                    to="/products#white-label"
                    variant="secondary"
                    size="sm"
                  >
                    View Website Specs
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 5. Business Growth Tools (8 Tools) */}
        <div className="mb-14 sm:mb-16">
          <div className="p-6 sm:p-8 lg:p-10 rounded-3xl bg-gradient-to-b from-white/[0.05] via-[#0D0D0D] to-[#070707] border border-[#DAAF37]/30 shadow-[0_16px_48px_rgba(0,0,0,0.7)] relative overflow-hidden">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-white/10">
              <div>
                <span className="text-xs font-heading font-bold uppercase tracking-wider text-[#DAAF37] block mb-1">
                  Full Automation Suite
                </span>
                <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white">
                  Business Growth Tools
                </h3>
              </div>
              <span className="text-xs font-sans text-white/50">
                8 Integrated Operational Modules
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { name: 'CRM', desc: 'Complete client history, preference logs & service tracking', icon: Database },
                { name: 'Customer Recall', desc: 'Automated smart recalls to fill chairs and maintain routine visits', icon: RefreshCw },
                { name: 'Loyalty', desc: 'Customizable points, visit milestones & reward redemption', icon: Gift },
                { name: 'Offers', desc: 'Dynamic off-peak discounts and targeted seasonal promotions', icon: Sparkles },
                { name: 'WhatsApp Automation', desc: '30-day automated appointment reminders & confirmation flows', icon: MessageSquare },
                { name: 'AI Marketing', desc: 'One-click promotional copy and social post generation', icon: Zap },
                { name: 'Visibility', desc: 'Synchronized local search optimization and ranking boosts', icon: Eye },
                { name: 'Reviews', desc: 'Automated post-appointment review capture and feedback management', icon: Star },
              ].map((tool, idx) => {
                const ToolIcon = tool.icon;
                return (
                  <div
                    key={idx}
                    className="p-4 sm:p-5 rounded-xl bg-white/[0.03] border border-white/[0.08] hover:border-[#DAAF37]/40 transition-colors group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#DAAF37]/10 border border-[#DAAF37]/25 flex items-center justify-center text-[#F4D03F] mb-3 group-hover:bg-[#DAAF37]/20 transition-colors">
                      <ToolIcon className="w-4 h-4" />
                    </div>
                    <div className="text-sm font-heading font-bold text-white mb-1.5">
                      {tool.name}
                    </div>
                    <p className="text-xs text-white/60 font-sans leading-relaxed">
                      {tool.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* 6. Key Positioning & 7. Strong Differentiator Banners */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Key Positioning */}
          <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#DAAF37]/[0.12] via-black to-[#DAAF37]/[0.05] border border-[#DAAF37]/40 shadow-[0_8px_32px_rgba(0,0,0,0.6),0_0_24px_rgba(218,175,55,0.12)] relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-[#FFF2B2] via-[#F4D03F] to-[#DAAF37]" />
            <div>
              <span className="text-xs font-heading font-bold uppercase tracking-wider text-[#F4D03F] block mb-2">
                Key Strategic Positioning
              </span>
              <p className="text-base sm:text-lg font-serif italic text-white leading-relaxed">
                &ldquo;Nexora does not only give a business a website. It gives the business a connected digital growth layer.&rdquo;
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-white/10 text-xs text-white/60 font-sans">
              Moving beyond static pages to continuous client relationship & revenue orchestration.
            </div>
          </div>

          {/* Strong Differentiator */}
          <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-white/[0.06] via-[#0E0E0E] to-black border border-[#DAAF37]/40 shadow-[0_8px_32px_rgba(0,0,0,0.6)] relative overflow-hidden flex flex-col justify-between">
            <div>
              <span className="text-xs font-heading font-bold uppercase tracking-wider text-[#DAAF37] block mb-2 flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#F4D03F]" />
                Strong Market Differentiator
              </span>
              <div className="p-3.5 rounded-xl bg-black/70 border border-[#DAAF37]/30 text-sm sm:text-base font-heading font-bold text-white mb-2">
                Free beauty website + 30+ templates + Growth Partner-assisted onboarding + connected beauty ecosystem
              </div>
            </div>
            <div className="mt-2 text-xs text-white/60 font-sans leading-relaxed">
              Unmatched competitive barrier: localized human onboarding support coupled with zero-cost barrier to entry.
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6 — DIGITAL TRANSFORMATION */}
      <section
        id="digital-transformation"
        aria-label="Digital Transformation Section"
        className="relative py-20 sm:py-28 lg:py-32 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto w-full border-t border-white/10"
      >
        {/* Subtle Ambient Gold Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] sm:w-[1000px] h-[450px] bg-gradient-to-b from-[#DAAF37]/[0.08] via-transparent to-transparent blur-[140px] pointer-events-none rounded-full" />

        {/* 1. Section Header & Heading */}
        <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DAAF37]/10 border border-[#DAAF37]/30 text-[#F4D03F] text-xs font-heading font-semibold uppercase tracking-[0.2em] mb-4 shadow-[0_0_20px_rgba(218,175,55,0.15)]">
            <Sparkles className="w-3.5 h-3.5 text-[#F4D03F]" />
            6. DIGITAL TRANSFORMATION
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight leading-[1.15] mb-5 text-balance">
            Before Nexora{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFF2B2] via-[#F4D03F] to-[#DAAF37]">
              → With Nexora
            </span>
          </h2>

          <p className="text-sm sm:text-base text-white/75 font-sans max-w-2xl mx-auto leading-relaxed mb-6">
            A comprehensive operational shift from isolated offline administration to a synchronized digital growth engine.
          </p>

          {/* Transformation Flow Ribbon */}
          <div className="inline-flex flex-wrap items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-white/[0.05] via-[#121212] to-white/[0.05] border border-[#DAAF37]/35 shadow-[0_0_24px_rgba(218,175,55,0.12)] text-xs sm:text-sm font-heading font-semibold text-[#F4D03F]">
            <span>Manual Business</span>
            <span className="text-[#DAAF37]/60">→</span>
            <span>Digital Presence</span>
            <span className="text-[#DAAF37]/60">→</span>
            <span>Connected Operations</span>
            <span className="text-[#DAAF37]/60">→</span>
            <span>Customer Engagement</span>
            <span className="text-[#DAAF37]/60">→</span>
            <span>Retention</span>
            <span className="text-[#DAAF37]/60">→</span>
            <span>Growth</span>
          </div>
        </div>

        {/* 2. EXACT CINEMATIC TRANSFORMATION IMAGE */}
        <div className="mb-14 sm:mb-16 rounded-2xl sm:rounded-3xl overflow-hidden border border-[#DAAF37]/35 shadow-[0_20px_50px_rgba(0,0,0,0.85),0_0_35px_rgba(218,175,55,0.15)]">
          <img
            src="/assets/digital-transformation-cinematic.webp"
            alt="Before Nexora vs With Nexora - Digital Transformation Infographic"
            width={1920}
            height={960}
            className="w-full h-auto object-cover select-none block"
            loading="eager"
          />
        </div>

        {/* 3. Transformation Flow 6-Stage Roadmap */}
        <div className="mb-14 sm:mb-16">
          <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-white/[0.05] via-[#0D0D0D] to-[#070707] border border-[#DAAF37]/30 shadow-[0_16px_48px_rgba(0,0,0,0.7)]">
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/10">
              <span className="text-xs font-heading font-bold uppercase tracking-wider text-[#DAAF37]">
                Transformation Lifecycle
              </span>
              <span className="text-xs font-sans text-white/50">
                End-to-End Maturity Progression
              </span>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
              {[
                { stage: 'Manual Business', desc: 'Offline calls & diaries', step: '01' },
                { stage: 'Digital Presence', desc: 'Branded website & identity', step: '02' },
                { stage: 'Connected Operations', desc: 'Online booking & schedule', step: '03' },
                { stage: 'Customer Engagement', desc: 'WhatsApp reminders & CRM', step: '04' },
                { stage: 'Retention', desc: 'Automated recall & loyalty', step: '05' },
                { stage: 'Growth', desc: 'Repeat revenue & expansion', step: '06' },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex flex-col p-3.5 rounded-2xl bg-white/[0.03] border border-[#DAAF37]/20 relative group hover:border-[#DAAF37]/60 transition-all hover:scale-[1.02]"
                >
                  <span className="text-[10px] font-heading font-bold text-[#DAAF37]/60 mb-1">
                    Phase {item.step}
                  </span>
                  <div className="text-xs sm:text-sm font-heading font-bold text-white mb-1">
                    {item.stage}
                  </div>
                  <div className="text-[11px] font-sans text-white/50 leading-tight">
                    {item.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 3. Before Nexora vs. With Nexora Comparison Table */}
        <div className="rounded-3xl bg-gradient-to-b from-white/[0.05] via-[#0D0D0D] to-[#070707] border border-[#DAAF37]/30 shadow-[0_20px_60px_rgba(0,0,0,0.85),0_0_30px_rgba(218,175,55,0.1)] overflow-hidden">
          {/* Table Header */}
          <div className="grid grid-cols-1 md:grid-cols-2 border-b border-white/10 bg-black/60">
            <div className="p-5 sm:p-6 border-b md:border-b-0 md:border-r border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-red-950/40 border border-red-500/30 flex items-center justify-center text-red-400 font-heading font-bold text-xs">
                  ✕
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-heading font-bold text-white">
                    Before Nexora
                  </h3>
                  <p className="text-xs text-white/50 font-sans">
                    Fragmented, Manual & Reactive Operations
                  </p>
                </div>
              </div>
              <span className="text-[10px] font-heading font-bold px-2.5 py-1 rounded-md bg-red-950/30 border border-red-500/20 text-red-300 uppercase tracking-wider hidden sm:inline-block">
                Legacy Friction
              </span>
            </div>

            <div className="p-5 sm:p-6 bg-[#DAAF37]/[0.04] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#DAAF37]/15 border border-[#DAAF37]/35 flex items-center justify-center text-[#F4D03F] font-heading font-bold text-xs">
                  ✓
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-heading font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-[#FFF2B2] to-[#DAAF37]">
                    With Nexora
                  </h3>
                  <p className="text-xs text-[#DAAF37]/80 font-sans">
                    Connected, Automated & Scalable Architecture
                  </p>
                </div>
              </div>
              <span className="text-[10px] font-heading font-bold px-2.5 py-1 rounded-md bg-[#DAAF37]/15 border border-[#DAAF37]/30 text-[#FFF2B2] uppercase tracking-wider hidden sm:inline-block">
                Connected Growth
              </span>
            </div>
          </div>

          {/* 10 Comparison Rows */}
          <div className="divide-y divide-white/[0.06]">
            {[
              { before: 'Manual discovery', with: 'Digital discovery' },
              { before: 'Phone-based booking', with: 'Online booking' },
              { before: 'Uncertain slots', with: 'Structured slots' },
              { before: 'Scattered customer data', with: 'Connected customer records' },
              { before: 'Manual follow-up', with: 'Automated recall' },
              { before: 'Manual WhatsApp marketing', with: 'WhatsApp campaigns' },
              { before: 'Weak digital presence', with: 'Professional website' },
              { before: 'Few digital tools', with: 'Connected business tools' },
              { before: 'Limited retention', with: 'Rewards + loyalty' },
              { before: 'Difficult visibility', with: 'Digital visibility' },
            ].map((row, idx) => (
              <div
                key={idx}
                className="grid grid-cols-1 md:grid-cols-2 hover:bg-white/[0.02] transition-colors"
              >
                {/* Before Side */}
                <div className="p-4 sm:p-5 flex items-center justify-between md:border-r border-white/[0.06] text-xs sm:text-sm text-white/70 font-sans">
                  <div className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-400/60 flex-shrink-0" />
                    <span>{row.before}</span>
                  </div>
                  <span className="text-[10px] text-white/40 md:hidden">Before</span>
                </div>

                {/* With Nexora Side */}
                <div className="p-4 sm:p-5 flex items-center justify-between text-xs sm:text-sm font-heading font-semibold text-white bg-[#DAAF37]/[0.02]">
                  <div className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#DAAF37] flex-shrink-0 shadow-[0_0_6px_#DAAF37]" />
                    <span className="text-white group-hover:text-[#FFF2B2]">{row.with}</span>
                  </div>
                  <span className="text-[10px] text-[#DAAF37] font-sans md:hidden">With Nexora</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7 — NEXORA JOBS */}
      <section
        id="nexora-jobs"
        aria-label="Nexora Jobs Section"
        className="relative py-20 sm:py-28 lg:py-32 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto w-full border-t border-white/10"
      >
        {/* Subtle Ambient Gold Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] sm:w-[1000px] h-[450px] bg-gradient-to-b from-[#DAAF37]/[0.08] via-transparent to-transparent blur-[140px] pointer-events-none rounded-full" />

        {/* 1. Section Header & Heading */}
        <div className="max-w-4xl mx-auto text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DAAF37]/10 border border-[#DAAF37]/30 text-[#F4D03F] text-xs font-heading font-semibold uppercase tracking-[0.2em] mb-4 shadow-[0_0_20px_rgba(218,175,55,0.15)]">
            <Briefcase className="w-3.5 h-3.5 text-[#F4D03F]" />
            7. NEXORA JOBS
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight leading-[1.15] mb-4 text-balance">
            Work. Hire.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFF2B2] via-[#F4D03F] to-[#DAAF37]">
              Build Your Career.
            </span>
          </h2>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-heading font-medium text-white/70 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#DAAF37]" />
            Independent Ecosystem Layer
          </div>

          <p className="text-sm sm:text-base text-white/75 font-sans max-w-2xl mx-auto leading-relaxed">
            A dedicated career and hiring infrastructure connecting verified beauty businesses with skilled industry professionals, creative artists, and licensed specialists.
          </p>
        </div>

        {/* 2. EXACT CINEMATIC JOBS INFOGRAPHIC IMAGE */}
        <div className="mb-14 sm:mb-16 rounded-2xl sm:rounded-3xl overflow-hidden border border-[#DAAF37]/35 shadow-[0_20px_50px_rgba(0,0,0,0.85),0_0_35px_rgba(218,175,55,0.15)]">
          <img
            src="/assets/nexora-jobs-cinematic.webp"
            alt="Work. Hire. Build Your Career. - Nexora Jobs Connected Talent and Hiring Infographic"
            width={1920}
            height={960}
            className="w-full h-auto object-cover select-none block"
            loading="eager"
          />
        </div>

        {/* 3. Nexora Jobs Solution — Dual Pillars (Salons & Professionals) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14 sm:mb-16">
          {/* For Salons / Employers */}
          <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-white/[0.05] via-[#0D0D0D] to-[#070707] border border-[#DAAF37]/30 shadow-[0_16px_48px_rgba(0,0,0,0.7)] flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-5 pb-4 border-b border-white/10">
                <div className="w-10 h-10 rounded-xl bg-[#DAAF37]/10 border border-[#DAAF37]/30 flex items-center justify-center text-[#F4D03F]">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-heading font-bold text-[#DAAF37] uppercase tracking-widest block">
                    For Beauty Businesses
                  </span>
                  <h3 className="text-xl sm:text-2xl font-heading font-bold text-white">
                    Salons Can Post Jobs
                  </h3>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-white/70 font-sans leading-relaxed mb-6">
                Broadcast hiring requirements across the Nexora network to reach pre-screened stylists, technicians, and managers with verified portfolios and verified skill badges.
              </p>

              {/* Salon hiring flow: Vacancy → Candidate → Interview → Hire */}
              <div className="mb-6">
                <span className="text-xs font-heading font-bold uppercase tracking-wider text-white/50 block mb-3">
                  Salon Hiring Flow:
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center">
                  {[
                    { step: '01', title: 'Vacancy', desc: 'Post role & terms' },
                    { step: '02', title: 'Candidate', desc: 'Review talent pool' },
                    { step: '03', title: 'Interview', desc: 'Assess skills live' },
                    { step: '04', title: 'Hire', desc: 'Onboard to team' },
                  ].map((flow, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.08] relative group"
                    >
                      <span className="text-[9px] font-heading font-bold text-[#DAAF37]/60 block mb-0.5">
                        Step {flow.step}
                      </span>
                      <div className="text-xs font-heading font-bold text-white">
                        {flow.title}
                      </div>
                      <div className="text-[10px] text-white/45 font-sans mt-0.5">
                        {flow.desc}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-black/60 border border-[#DAAF37]/20 text-center">
              <span className="text-xs font-heading font-semibold text-[#F4D03F]">
                Vacancy → Candidate → Interview → Hire
              </span>
            </div>
          </div>

          {/* For Professionals / Job Seekers */}
          <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-white/[0.05] via-[#0D0D0D] to-[#070707] border border-[#DAAF37]/30 shadow-[0_16px_48px_rgba(0,0,0,0.7)] flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-5 pb-4 border-b border-white/10">
                <div className="w-10 h-10 rounded-xl bg-[#DAAF37]/10 border border-[#DAAF37]/30 flex items-center justify-center text-[#F4D03F]">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-heading font-bold text-[#DAAF37] uppercase tracking-widest block">
                    For Beauty Specialists
                  </span>
                  <h3 className="text-xl sm:text-2xl font-heading font-bold text-white">
                    Professionals Can Search & Apply
                  </h3>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-white/70 font-sans leading-relaxed mb-6">
                Create a portable digital portfolio of client transformations, verified credentials, and client feedback to apply directly to top-tier salons, spas, and boutique studios.
              </p>

              {/* Job seeker flow: Profile → Search → Apply → Opportunity */}
              <div className="mb-6">
                <span className="text-xs font-heading font-bold uppercase tracking-wider text-white/50 block mb-3">
                  Job Seeker Flow:
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center">
                  {[
                    { step: '01', title: 'Profile', desc: 'Build visual portfolio' },
                    { step: '02', title: 'Search', desc: 'Browse verified salons' },
                    { step: '03', title: 'Apply', desc: '1-click submission' },
                    { step: '04', title: 'Opportunity', desc: 'Grow your career' },
                  ].map((flow, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.08] relative group"
                    >
                      <span className="text-[9px] font-heading font-bold text-[#DAAF37]/60 block mb-0.5">
                        Step {flow.step}
                      </span>
                      <div className="text-xs font-heading font-bold text-white">
                        {flow.title}
                      </div>
                      <div className="text-[10px] text-white/45 font-sans mt-0.5">
                        {flow.desc}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-black/60 border border-[#DAAF37]/20 text-center">
              <span className="text-xs font-heading font-semibold text-[#F4D03F]">
                Profile → Search → Apply → Opportunity
              </span>
            </div>
          </div>
        </div>

        {/* 4. Salon / Business Need (12 Talent Roles) */}
        <div className="p-6 sm:p-8 lg:p-10 rounded-3xl bg-gradient-to-b from-white/[0.05] via-[#0D0D0D] to-[#070707] border border-white/10 shadow-[0_16px_48px_rgba(0,0,0,0.7)] mb-10 sm:mb-12">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-white/10">
            <div>
              <span className="text-xs font-heading font-bold uppercase tracking-wider text-[#DAAF37] block mb-1">
                Specialized Beauty Talent
              </span>
              <h3 className="text-xl sm:text-2xl font-heading font-bold text-white">
                Salon / Business Need
              </h3>
            </div>
            <span className="text-xs font-sans text-white/50">
              Businesses Can Need Talent Such As:
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {[
              'Barber',
              'Hair Stylist',
              'Beautician',
              'Beauty Therapist',
              'Makeup Artist',
              'Nail Technician',
              'Spa Therapist',
              'Tattoo Artist',
              'Salon Manager',
              'Front Desk',
              'Trainer',
              'Sales / Beauty Consultant',
            ].map((role, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-[#DAAF37]/40 transition-colors group"
              >
                <div className="w-7 h-7 rounded-lg bg-[#DAAF37]/10 border border-[#DAAF37]/25 flex items-center justify-center text-[#F4D03F] text-xs font-heading font-bold flex-shrink-0 group-hover:bg-[#DAAF37]/20">
                  {idx + 1}
                </div>
                <span className="text-xs sm:text-sm font-heading font-medium text-white/90 group-hover:text-white truncate">
                  {role}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* 5. Core Message Banner */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#DAAF37]/[0.15] via-black to-[#DAAF37]/[0.1] border border-[#DAAF37]/40 text-center shadow-[0_8px_32px_rgba(0,0,0,0.6),0_0_24px_rgba(218,175,55,0.15)] relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#F4D03F] to-transparent" />
          <span className="text-xs font-heading font-bold uppercase tracking-[0.25em] text-[#DAAF37] block mb-2">
            Core Ecosystem Principle
          </span>
          <h4 className="text-lg sm:text-2xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-[#FFF2B2] to-[#DAAF37] max-w-3xl mx-auto leading-snug">
            &ldquo;A connected beauty ecosystem needs both customers and talent.&rdquo;
          </h4>
          <p className="text-xs sm:text-sm text-white/60 font-sans mt-3 max-w-2xl mx-auto leading-relaxed">
            By unifying client demand and skilled workforce supply within one platform, Nexora solves operational shortages while creating upward career mobility.
          </p>
        </div>
      </section>

      {/* SECTION 8 — NEXORA MARKET / B2B */}
      <section
        id="nexora-market"
        aria-label="Nexora Market / B2B Section"
        className="relative py-20 sm:py-28 lg:py-32 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto w-full border-t border-white/10"
      >
        {/* Subtle Ambient Gold Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] sm:w-[1000px] h-[450px] bg-gradient-to-b from-[#DAAF37]/[0.08] via-transparent to-transparent blur-[140px] pointer-events-none rounded-full" />

        {/* 1. Section Header & Heading */}
        <div className="max-w-4xl mx-auto text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DAAF37]/10 border border-[#DAAF37]/30 text-[#F4D03F] text-xs font-heading font-semibold uppercase tracking-[0.2em] mb-4 shadow-[0_0_20px_rgba(218,175,55,0.15)]">
            <ShoppingBag className="w-3.5 h-3.5 text-[#F4D03F]" />
            8. NEXORA MARKET / B2B
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight leading-[1.15] mb-4 text-balance">
            Beauty-Focused B2B Discovery &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFF2B2] via-[#F4D03F] to-[#DAAF37]">
              Wholesale Network
            </span>
          </h2>

          {/* Supply Flow Ribbon */}
          <div className="inline-flex flex-wrap items-center justify-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] border border-white/10 text-xs font-heading font-semibold text-[#F4D03F] mb-5">
            <span>Brand</span>
            <span className="text-[#DAAF37]/60">→</span>
            <span>Supplier / Distributor</span>
            <span className="text-[#DAAF37]/60">→</span>
            <span>Beauty Business</span>
          </div>

          <p className="text-sm sm:text-base text-white/75 font-sans max-w-2xl mx-auto leading-relaxed mb-6">
            Connecting beauty manufacturers, authorized suppliers, and salon businesses in a direct B2B marketplace discovery network.
          </p>

          {/* B2B Connection Ribbon */}
          <div className="inline-flex flex-wrap items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-white/[0.05] via-[#121212] to-white/[0.05] border border-[#DAAF37]/35 shadow-[0_0_24px_rgba(218,175,55,0.12)] text-xs sm:text-sm font-heading font-semibold text-[#F4D03F]">
            <span>BUSINESS</span>
            <span className="text-[#DAAF37]/60">→</span>
            <span>DISCOVER SUPPLIER</span>
            <span className="text-[#DAAF37]/60">→</span>
            <span>EXPLORE PRODUCTS</span>
            <span className="text-[#DAAF37]/60">→</span>
            <span>CONNECT</span>
          </div>
        </div>

        {/* 2. EXACT CINEMATIC B2B INFOGRAPHIC IMAGE */}
        <div className="mb-14 sm:mb-16 rounded-2xl sm:rounded-3xl overflow-hidden border border-[#DAAF37]/35 shadow-[0_20px_50px_rgba(0,0,0,0.85),0_0_35px_rgba(218,175,55,0.15)]">
          <img
            src="/assets/nexora-market-b2b-cinematic.webp"
            alt="Nexora Market B2B Network - Brand to Supplier to Beauty Business Discovery Infographic"
            width={1920}
            height={960}
            className="w-full h-auto object-cover select-none block"
            loading="eager"
          />
        </div>

        {/* 3. The 12 Marketplace Categories Grid */}
        <div className="p-6 sm:p-8 lg:p-10 rounded-3xl bg-gradient-to-b from-white/[0.05] via-[#0D0D0D] to-[#070707] border border-white/10 shadow-[0_16px_48px_rgba(0,0,0,0.7)] mb-10 sm:mb-12">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-white/10">
            <div>
              <span className="text-xs font-heading font-bold uppercase tracking-wider text-[#DAAF37] block mb-1">
                Connected B2B Supply Network
              </span>
              <h3 className="text-xl sm:text-2xl font-heading font-bold text-white">
                12 Marketplace Categories
              </h3>
            </div>
            <span className="text-xs font-sans text-white/50">
              Wholesale & Direct Supplier Discovery
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {[
              '1. Hair & Styling',
              '2. Skin & Cosmetics',
              '3. Salon Furniture',
              '4. Spa Equipment',
              '5. Tattoo Supplies',
              '6. Nail Products',
              '7. Professional Tools',
              '8. Disposable Supplies',
              '9. Beauty Technology',
              '10. Academy & Training',
              '11. Wholesale Products',
              '12. Brand Partnerships',
            ].map((cat, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-[#DAAF37]/40 transition-colors group"
              >
                <div className="w-2 h-2 rounded-full bg-[#DAAF37] flex-shrink-0 group-hover:scale-125 transition-transform" />
                <span className="text-xs sm:text-sm font-heading font-semibold text-white/90 group-hover:text-white truncate">
                  {cat}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* 4. Action Banner */}
        <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
          <Button
            to="/products#b2b"
            variant="primary"
            size="md"
            icon={<ExternalLink className="w-4 h-4" />}
          >
            Explore B2B Network Specs
          </Button>
        </div>
      </section>

      {/* SECTION 9 — NO BROKER REAL ESTATE */}
      <section
        id="no-broker-real-estate"
        aria-label="No Broker Real Estate Section"
        className="relative py-20 sm:py-28 lg:py-32 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto w-full border-t border-white/10"
      >
        {/* Subtle Ambient Gold Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] sm:w-[1000px] h-[450px] bg-gradient-to-b from-[#DAAF37]/[0.08] via-transparent to-transparent blur-[140px] pointer-events-none rounded-full" />

        {/* 1. Section Header & Heading */}
        <div className="max-w-4xl mx-auto text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DAAF37]/10 border border-[#DAAF37]/30 text-[#F4D03F] text-xs font-heading font-semibold uppercase tracking-[0.2em] mb-4 shadow-[0_0_20px_rgba(218,175,55,0.15)]">
            <Home className="w-3.5 h-3.5 text-[#F4D03F]" />
            9. NO BROKER REAL ESTATE
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight leading-[1.15] mb-5 text-balance">
            The Architecture Can Extend{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFF2B2] via-[#F4D03F] to-[#DAAF37]">
              Beyond Beauty.
            </span>
          </h2>

          <p className="text-sm sm:text-base text-white/75 font-sans max-w-2xl mx-auto leading-relaxed mb-6">
            Demonstrating platform architecture versatility through direct owner-to-buyer property discovery without broker dependency.
          </p>

          {/* Traditional Flow vs No Broker Approach Comparison Ribbons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 mb-2">
            <div className="px-4 py-2 rounded-xl bg-red-950/30 border border-red-500/20 text-xs font-heading font-medium text-red-300">
              <span className="font-bold text-red-400 mr-1.5">Traditional:</span>
              Owner → Broker → Buyer/Tenant
            </div>

            <div className="text-[#DAAF37] font-bold hidden sm:block">vs</div>

            <div className="px-4 py-2 rounded-xl bg-[#DAAF37]/15 border border-[#DAAF37]/35 text-xs sm:text-sm font-heading font-semibold text-[#FFF2B2] shadow-[0_0_20px_rgba(218,175,55,0.12)]">
              <span className="font-bold text-[#F4D03F] mr-1.5">No Broker Approach:</span>
              Owner → Property Listing → Direct Enquiry → Buyer/Tenant
            </div>
          </div>
        </div>

        {/* 2. EXACT CINEMATIC REAL ESTATE INFOGRAPHIC IMAGE */}
        <div className="mb-14 sm:mb-16 rounded-2xl sm:rounded-3xl overflow-hidden border border-[#DAAF37]/35 shadow-[0_20px_50px_rgba(0,0,0,0.85),0_0_35px_rgba(218,175,55,0.15)]">
          <img
            src="/assets/no-broker-real-estate-cinematic.webp"
            alt="The Architecture Can Extend Beyond Beauty - Traditional vs No Broker Real Estate Direct Discovery Model"
            width={1920}
            height={960}
            className="w-full h-auto object-cover select-none block"
            loading="eager"
          />
        </div>

        {/* 3. Core Proposition Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10 sm:mb-12">
          <div className="p-6 rounded-2xl bg-gradient-to-b from-white/[0.05] via-[#0D0D0D] to-[#070707] border border-white/10 hover:border-[#DAAF37]/40 transition-colors flex flex-col justify-between">
            <div>
              <div className="w-9 h-9 rounded-xl bg-[#DAAF37]/10 border border-[#DAAF37]/25 flex items-center justify-center text-[#F4D03F] mb-4">
                <Search className="w-4 h-4" />
              </div>
              <h3 className="text-base sm:text-lg font-heading font-bold text-white mb-2">
                Direct Property Discovery
              </h3>
              <p className="text-xs sm:text-sm text-white/65 font-sans leading-relaxed">
                Seamless digital showcase for commercial shops, modern apartments, and independent properties with high-resolution visual tours and location maps.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-white/[0.06] text-[11px] text-[#DAAF37] font-heading font-semibold">
              Frictionless Search
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-gradient-to-b from-white/[0.05] via-[#0D0D0D] to-[#070707] border border-white/10 hover:border-[#DAAF37]/40 transition-colors flex flex-col justify-between">
            <div>
              <div className="w-9 h-9 rounded-xl bg-[#DAAF37]/10 border border-[#DAAF37]/25 flex items-center justify-center text-[#F4D03F] mb-4">
                <Users className="w-4 h-4" />
              </div>
              <h3 className="text-base sm:text-lg font-heading font-bold text-white mb-2">
                Direct Owner Connection
              </h3>
              <p className="text-xs sm:text-sm text-white/65 font-sans leading-relaxed">
                Connect buyers and tenants directly with property owners via instant inquiry channels without middleman phone tag or hidden markups.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-white/[0.06] text-[11px] text-[#DAAF37] font-heading font-semibold">
              Zero Intermediary
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-gradient-to-b from-white/[0.05] via-[#0D0D0D] to-[#070707] border border-white/10 hover:border-[#DAAF37]/40 transition-colors flex flex-col justify-between">
            <div>
              <div className="w-9 h-9 rounded-xl bg-[#DAAF37]/10 border border-[#DAAF37]/25 flex items-center justify-center text-[#F4D03F] mb-4">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <h3 className="text-base sm:text-lg font-heading font-bold text-white mb-2">
                No Broker Positioning
              </h3>
              <p className="text-xs sm:text-sm text-white/65 font-sans leading-relaxed">
                Eliminating broker dependencies and unnecessary commission layers through a verified direct listing network infrastructure.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-white/[0.06] text-[11px] text-[#DAAF37] font-heading font-semibold">
              Transparent Network
            </div>
          </div>
        </div>

        {/* 4. Strategic Vertical Positioning Banner */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#DAAF37]/[0.12] via-black to-[#DAAF37]/[0.05] border border-[#DAAF37]/35 text-center shadow-[0_8px_32px_rgba(0,0,0,0.6)]">
          <span className="text-xs font-heading font-bold uppercase tracking-[0.2em] text-[#DAAF37] block mb-2">
            Strategic Platform Architecture
          </span>
          <p className="text-sm sm:text-base font-serif italic text-white/90 max-w-3xl mx-auto leading-relaxed">
            &ldquo;Beauty remains the core ecosystem. Real Estate is an expansion vertical demonstrating platform architecture versatility.&rdquo;
          </p>
        </div>
      </section>

      {/* SECTION 10 — NEXORA GROWTH PARTNER */}
      <section
        id="nexora-growth-partner"
        aria-label="Nexora Growth Partner Section"
        className="relative py-20 sm:py-28 lg:py-32 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto w-full border-t border-white/10"
      >
        {/* Subtle Ambient Gold Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] sm:w-[1000px] h-[450px] bg-gradient-to-b from-[#DAAF37]/[0.08] via-transparent to-transparent blur-[140px] pointer-events-none rounded-full" />

        {/* 1. Section Header & Heading */}
        <div className="max-w-4xl mx-auto text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DAAF37]/10 border border-[#DAAF37]/30 text-[#F4D03F] text-xs font-heading font-semibold uppercase tracking-[0.2em] mb-4 shadow-[0_0_20px_rgba(218,175,55,0.15)]">
            <TrendingUp className="w-3.5 h-3.5 text-[#F4D03F]" />
            10. NEXORA GROWTH PARTNER
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight leading-[1.15] mb-5 text-balance">
            A Human Growth Network Behind{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFF2B2] via-[#F4D03F] to-[#DAAF37]">
              Digital Adoption
            </span>
          </h2>

          <p className="text-sm sm:text-base text-white/75 font-sans max-w-2xl mx-auto leading-relaxed mb-6">
            The field-level human support layer bridging the gap for local beauty businesses transitioning from offline operations into the connected digital economy.
          </p>

          {/* Growth Partner Flow Ribbon */}
          <div className="inline-flex flex-wrap items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-white/[0.05] via-[#121212] to-white/[0.05] border border-[#DAAF37]/35 shadow-[0_0_24px_rgba(218,175,55,0.12)] text-xs sm:text-sm font-heading font-semibold text-[#F4D03F]">
            <span>IDENTIFY</span>
            <span className="text-[#DAAF37]/60">→</span>
            <span>EXPLAIN</span>
            <span className="text-[#DAAF37]/60">→</span>
            <span>ONBOARD</span>
            <span className="text-[#DAAF37]/60">→</span>
            <span>SETUP</span>
            <span className="text-[#DAAF37]/60">→</span>
            <span>ACTIVATE</span>
            <span className="text-[#DAAF37]/60">→</span>
            <span>SUPPORT</span>
          </div>
        </div>

        {/* 2. EXACT CINEMATIC GROWTH PARTNER INFOGRAPHIC IMAGE */}
        <div className="mb-14 sm:mb-16 rounded-2xl sm:rounded-3xl overflow-hidden border border-[#DAAF37]/35 shadow-[0_20px_50px_rgba(0,0,0,0.85),0_0_35px_rgba(218,175,55,0.15)]">
          <img
            src="/assets/growth-partner-cinematic.webp"
            alt="A Human Growth Network Behind Digital Adoption: Identify, Explain, Onboard, Setup, Activate, Support - Nexora Growth Partner Visual"
            width={1920}
            height={960}
            className="w-full h-auto object-cover select-none block"
            loading="eager"
          />
        </div>

        {/* 3. Action Banner */}
        <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
          <Button
            href="https://fanal-templetes-app.vercel.app/partner/dashboard"
            variant="primary"
            size="md"
            icon={<ExternalLink className="w-4 h-4" />}
          >
            Explore Growth Partner Dashboard
          </Button>
          <Button
            to="/products#growth-partner"
            variant="secondary"
            size="md"
          >
            View Growth Partner Specs
          </Button>
        </div>
      </section>

      {/* SECTION 11 — GROWTH PARTNER COMMISSION */}
      <section
        id="growth-partner-commission"
        aria-label="Growth Partner Commission Section"
        className="relative py-20 sm:py-28 lg:py-32 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto w-full border-t border-white/10"
      >
        {/* Subtle Ambient Gold Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] sm:w-[1000px] h-[450px] bg-gradient-to-b from-[#DAAF37]/[0.08] via-transparent to-transparent blur-[140px] pointer-events-none rounded-full" />

        {/* 1. Section Header & Heading */}
        <div className="max-w-4xl mx-auto text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DAAF37]/10 border border-[#DAAF37]/30 text-[#F4D03F] text-xs font-heading font-semibold uppercase tracking-[0.2em] mb-4 shadow-[0_0_20px_rgba(218,175,55,0.15)]">
            <Zap className="w-3.5 h-3.5 text-[#F4D03F]" />
            11. GROWTH PARTNER COMMISSION
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight leading-[1.15] mb-5 text-balance">
            Performance-Linked{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFF2B2] via-[#F4D03F] to-[#DAAF37]">
              Growth Share Model
            </span>
          </h2>

          <p className="text-sm sm:text-base text-white/75 font-sans max-w-2xl mx-auto leading-relaxed mb-6">
            Earnings directly connected to verified company collections through a clear, transparent performance-linked partner growth share architecture.
          </p>

          {/* Key Principle Ribbon */}
          <div className="inline-flex flex-wrap items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-white/[0.05] via-[#121212] to-white/[0.05] border border-[#DAAF37]/35 shadow-[0_0_24px_rgba(218,175,55,0.12)] text-xs sm:text-sm font-heading font-semibold text-[#F4D03F]">
            <span>NO COLLECTION = NO COMMISSION</span>
            <span className="text-[#DAAF37]/60">•</span>
            <span>ACTUAL VERIFIED COLLECTION = APPLICABLE PARTNER SHARE</span>
          </div>
        </div>

        {/* 2. EXACT CINEMATIC COMMISSION INFOGRAPHIC IMAGE */}
        <div className="mb-14 sm:mb-16 rounded-2xl sm:rounded-3xl overflow-hidden border border-[#DAAF37]/35 shadow-[0_20px_50px_rgba(0,0,0,0.85),0_0_35px_rgba(218,175,55,0.15)]">
          <img
            src="/assets/growth-partner-commission-cinematic.webp"
            alt="Growth Partner Commission Framework - Performance Linked Growth Share, One Time Activation, Recurring Share 10% to 5% to 2% Lifetime - Nexora Financial Model"
            width={1920}
            height={960}
            className="w-full h-auto object-cover select-none block"
            loading="eager"
          />
        </div>

        {/* 3. Action Banner */}
        <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
          <Button
            href="https://fanal-templetes-app.vercel.app/partner/dashboard"
            variant="primary"
            size="md"
            icon={<ExternalLink className="w-4 h-4" />}
          >
            Explore Growth Partner Dashboard
          </Button>
          <Button
            to="/products#growth-partner"
            variant="secondary"
            size="md"
          >
            View Growth Partner Specs
          </Button>
        </div>
      </section>

      {/* SECTION 12 — GROWTH PARTNER REWARD SYSTEM */}
      <section
        id="growth-partner-reward-system"
        aria-label="Growth Partner Reward System Section"
        className="relative py-20 sm:py-28 lg:py-32 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto w-full border-t border-white/10"
      >
        {/* Subtle Ambient Gold Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] sm:w-[1000px] h-[450px] bg-gradient-to-b from-[#DAAF37]/[0.08] via-transparent to-transparent blur-[140px] pointer-events-none rounded-full" />

        {/* 1. Section Header & Heading */}
        <div className="max-w-4xl mx-auto text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DAAF37]/10 border border-[#DAAF37]/30 text-[#F4D03F] text-xs font-heading font-semibold uppercase tracking-[0.2em] mb-4 shadow-[0_0_20px_rgba(218,175,55,0.15)]">
            <Gift className="w-3.5 h-3.5 text-[#F4D03F]" />
            12. GROWTH PARTNER REWARD SYSTEM
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight leading-[1.15] mb-5 text-balance">
            From Business Onboarding to{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFF2B2] via-[#F4D03F] to-[#DAAF37]">
              Achievement Milestones
            </span>
          </h2>

          <p className="text-sm sm:text-base text-white/75 font-sans max-w-2xl mx-auto leading-relaxed mb-6">
            Recognizing partner growth and scale through 7 verified achievement milestones — from entry recognition to district partner leadership.
          </p>

          {/* Milestone Flow Ribbon */}
          <div className="inline-flex flex-wrap items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-white/[0.05] via-[#121212] to-white/[0.05] border border-[#DAAF37]/35 shadow-[0_0_24px_rgba(218,175,55,0.12)] text-xs sm:text-sm font-heading font-semibold text-[#F4D03F]">
            <span>25 SHOPS</span>
            <span className="text-[#DAAF37]/60">→</span>
            <span>50 SHOPS</span>
            <span className="text-[#DAAF37]/60">→</span>
            <span>100 SHOPS</span>
            <span className="text-[#DAAF37]/60">→</span>
            <span>250 SHOPS</span>
            <span className="text-[#DAAF37]/60">→</span>
            <span>500 SHOPS</span>
            <span className="text-[#DAAF37]/60">→</span>
            <span>750 SHOPS</span>
            <span className="text-[#DAAF37]/60">→</span>
            <span>1000+ SHOPS</span>
          </div>
        </div>

        {/* 2. EXACT CINEMATIC REWARD SYSTEM INFOGRAPHIC IMAGE */}
        <div className="mb-14 sm:mb-16 rounded-2xl sm:rounded-3xl overflow-hidden border border-[#DAAF37]/35 shadow-[0_20px_50px_rgba(0,0,0,0.85),0_0_35px_rgba(218,175,55,0.15)]">
          <img
            src="/assets/growth-partner-reward-system-cinematic.webp"
            alt="Growth Partner Reward Journey - 7 Verified Milestones: T-Shirt, Samsung Tablet, HP Laptop, Electric Scooter, iPhone, Royal Enfield, SUV Car - Nexora Achievement Model"
            width={1920}
            height={960}
            className="w-full h-auto object-cover select-none block"
            loading="eager"
          />
        </div>

        {/* 3. Action Banner */}
        <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
          <Button
            href="https://fanal-templetes-app.vercel.app/partner/dashboard"
            variant="primary"
            size="md"
            icon={<ExternalLink className="w-4 h-4" />}
          >
            Explore Growth Partner Portal
          </Button>
          <Button
            to="/products#growth-partner"
            variant="secondary"
            size="md"
          >
            View Reward Terms
          </Button>
        </div>
      </section>

      {/* SECTION 13 — MAIN WEBSITE DIRECT INCOME */}
      <section
        id="main-website-direct-income"
        aria-label="Main Website Direct Income Section"
        className="relative py-20 sm:py-28 lg:py-32 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto w-full border-t border-white/10"
      >
        {/* Subtle Ambient Gold Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] sm:w-[1000px] h-[450px] bg-gradient-to-b from-[#DAAF37]/[0.08] via-transparent to-transparent blur-[140px] pointer-events-none rounded-full" />

        {/* 1. Section Header & Heading */}
        <div className="max-w-4xl mx-auto text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DAAF37]/10 border border-[#DAAF37]/30 text-[#F4D03F] text-xs font-heading font-semibold uppercase tracking-[0.2em] mb-4 shadow-[0_0_20px_rgba(218,175,55,0.15)]">
            <Globe className="w-3.5 h-3.5 text-[#F4D03F]" />
            13. MAIN WEBSITE DIRECT INCOME
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight leading-[1.15] mb-5 text-balance">
            A Separate Direct{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFF2B2] via-[#F4D03F] to-[#DAAF37]">
              Revenue Layer
            </span>
          </h2>

          <p className="text-sm sm:text-base text-white/75 font-sans max-w-2xl mx-auto leading-relaxed mb-6">
            Direct online organic transactions through the main website platform flow entirely into Nexora company revenue without partner commission deduction.
          </p>

          {/* Core Principle Ribbon */}
          <div className="inline-flex flex-wrap items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-white/[0.05] via-[#121212] to-white/[0.05] border border-[#DAAF37]/35 shadow-[0_0_24px_rgba(218,175,55,0.12)] text-xs sm:text-sm font-heading font-semibold text-[#F4D03F]">
            <span>Direct → Nexora</span>
            <span className="text-[#DAAF37]/60">•</span>
            <span>Separate from Growth Partner Commission Pool</span>
          </div>
        </div>

        {/* 2. EXACT CINEMATIC DIRECT INCOME INFOGRAPHIC IMAGE */}
        <div className="mb-14 sm:mb-16 rounded-2xl sm:rounded-3xl overflow-hidden border border-[#DAAF37]/35 shadow-[0_20px_50px_rgba(0,0,0,0.85),0_0_35px_rgba(218,175,55,0.15)]">
          <img
            src="/assets/main-website-direct-income-cinematic.webp"
            alt="Main Website Direct Income - A Separate Direct Revenue Layer: ₹1,00,000/Month, Growth Partner Commission ₹0, Annual ₹12,00,000 Direct to Nexora"
            width={1920}
            height={960}
            className="w-full h-auto object-cover select-none block"
            loading="eager"
          />
        </div>

        {/* 3. Financial Metrics Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-10">
          <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#DAAF37]/30 transition-colors">
            <span className="text-[11px] font-heading font-bold uppercase tracking-wider text-white/50 block mb-1">
              Monthly Assumption
            </span>
            <div className="text-2xl font-heading font-bold text-white mb-1">
              ₹1,00,000
            </div>
            <p className="text-xs text-white/60 font-sans">
              Main Website Direct Income
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#DAAF37]/30 transition-colors">
            <span className="text-[11px] font-heading font-bold uppercase tracking-wider text-emerald-400 block mb-1">
              Partner Commission
            </span>
            <div className="text-2xl font-heading font-bold text-emerald-300 mb-1">
              ₹0
            </div>
            <p className="text-xs text-white/60 font-sans">
              0% Partner Payout Deduction
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#DAAF37]/30 transition-colors">
            <span className="text-[11px] font-heading font-bold uppercase tracking-wider text-[#DAAF37] block mb-1">
              Direct Nexora Income
            </span>
            <div className="text-2xl font-heading font-bold text-[#F4D03F] mb-1">
              ₹1,00,000 / mo
            </div>
            <p className="text-xs text-white/60 font-sans">
              100% Company Retained Revenue
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#DAAF37]/30 transition-colors">
            <span className="text-[11px] font-heading font-bold uppercase tracking-wider text-[#DAAF37] block mb-1">
              Annualized Run-Rate
            </span>
            <div className="text-2xl font-heading font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-[#FFF2B2] to-[#DAAF37] mb-1">
              ₹12,00,000 / yr
            </div>
            <p className="text-xs text-white/60 font-sans">
              Annual Direct Organic Revenue
            </p>
          </div>
        </div>

        {/* 4. Action Banner */}
        <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
          <Button
            to="/products#white-label"
            variant="primary"
            size="md"
            icon={<ExternalLink className="w-4 h-4" />}
          >
            Explore Main Platform Website Specs
          </Button>
        </div>
      </section>

      {/* SECTION 14 — NEXORA BUSINESS MODEL */}
      <section
        id="nexora-business-model"
        aria-label="Nexora Business Model Section"
        className="relative py-20 sm:py-28 lg:py-32 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto w-full border-t border-white/10"
      >
        {/* Subtle Ambient Gold Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] sm:w-[1000px] h-[450px] bg-gradient-to-b from-[#DAAF37]/[0.08] via-transparent to-transparent blur-[140px] pointer-events-none rounded-full" />

        {/* 1. Section Header & Heading */}
        <div className="max-w-4xl mx-auto text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DAAF37]/10 border border-[#DAAF37]/30 text-[#F4D03F] text-xs font-heading font-semibold uppercase tracking-[0.2em] mb-4 shadow-[0_0_20px_rgba(218,175,55,0.15)]">
            <Boxes className="w-3.5 h-3.5 text-[#F4D03F]" />
            14. NEXORA BUSINESS MODEL
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight leading-[1.15] mb-5 text-balance">
            Complete Money & Value{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFF2B2] via-[#F4D03F] to-[#DAAF37]">
              Architecture
            </span>
          </h2>

          <p className="text-sm sm:text-base text-white/75 font-sans max-w-2xl mx-auto leading-relaxed mb-6">
            Showing the complete money and value architecture across all ecosystem layers without inventing unapproved monetization.
          </p>

          {/* Salon/Shop Layer Flow Ribbon */}
          <div className="inline-flex flex-wrap items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-white/[0.05] via-[#121212] to-white/[0.05] border border-[#DAAF37]/35 shadow-[0_0_24px_rgba(218,175,55,0.12)] text-xs sm:text-sm font-heading font-semibold text-[#F4D03F]">
            <span>Salon / Shop Platform Revenue</span>
            <span className="text-[#DAAF37]/60">→</span>
            <span>Nexora Eligible Company Share</span>
            <span className="text-[#DAAF37]/60">→</span>
            <span>Growth Partner Share</span>
            <span className="text-[#DAAF37]/60">→</span>
            <span>Milestone Rewards</span>
            <span className="text-[#DAAF37]/60">→</span>
            <span>Company Contribution</span>
          </div>
        </div>

        {/* 2. EXACT CINEMATIC BUSINESS MODEL INFOGRAPHIC IMAGE */}
        <div className="mb-14 sm:mb-16 rounded-2xl sm:rounded-3xl overflow-hidden border border-[#DAAF37]/35 shadow-[0_20px_50px_rgba(0,0,0,0.85),0_0_35px_rgba(218,175,55,0.15)]">
          <img
            src="/assets/nexora-business-model-cinematic.webp"
            alt="Nexora Business Model - Complete Money and Value Architecture across Salon/Shop Layer, Main Website, Nexora Market, Nexora Jobs, Real Estate, Enterprise"
            width={1920}
            height={960}
            className="w-full h-auto object-cover select-none block"
            loading="eager"
          />
        </div>

        {/* 3. Separate Ecosystem Layers Grid */}
        <div className="p-6 sm:p-8 lg:p-10 rounded-3xl bg-gradient-to-b from-white/[0.05] via-[#0D0D0D] to-[#070707] border border-white/10 shadow-[0_16px_48px_rgba(0,0,0,0.7)] mb-10 sm:mb-12">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-white/10">
            <div>
              <span className="text-xs font-heading font-bold uppercase tracking-wider text-[#DAAF37] block mb-1">
                Value Architecture
              </span>
              <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white">
                Separate Ecosystem Layers
              </h3>
            </div>
            <span className="text-xs font-sans text-white/50">
              Only Approved Monetization Included
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {/* Main Website */}
            <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#DAAF37]/40 transition-colors flex flex-col justify-between">
              <div>
                <div className="w-8 h-8 rounded-lg bg-[#DAAF37]/10 border border-[#DAAF37]/25 flex items-center justify-center text-[#F4D03F] mb-3">
                  <Globe className="w-4 h-4" />
                </div>
                <h4 className="text-base font-heading font-bold text-white mb-1">
                  Main Website
                </h4>
                <p className="text-xs font-heading font-semibold text-[#F4D03F] mb-2">
                  Direct Income
                </p>
                <p className="text-xs text-white/60 font-sans leading-relaxed">
                  Organic platform revenues flowing 100% directly to Nexora without partner commission splits.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-white/[0.06] text-[10px] text-[#DAAF37] font-heading font-semibold">
                Direct Revenue Layer
              </div>
            </div>

            {/* Nexora Market */}
            <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#DAAF37]/40 transition-colors flex flex-col justify-between">
              <div>
                <div className="w-8 h-8 rounded-lg bg-[#DAAF37]/10 border border-[#DAAF37]/25 flex items-center justify-center text-[#F4D03F] mb-3">
                  <ShoppingBag className="w-4 h-4" />
                </div>
                <h4 className="text-base font-heading font-bold text-white mb-1">
                  Nexora Market
                </h4>
                <p className="text-xs font-heading font-semibold text-[#F4D03F] mb-2">
                  B2B Network
                </p>
                <p className="text-xs text-white/60 font-sans leading-relaxed">
                  Direct brand-to-business discovery positioned with zero commission middleman barriers.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-white/[0.06] text-[10px] text-[#DAAF37] font-heading font-semibold">
                No Commission Positioning
              </div>
            </div>

            {/* Nexora Jobs */}
            <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#DAAF37]/40 transition-colors flex flex-col justify-between">
              <div>
                <div className="w-8 h-8 rounded-lg bg-[#DAAF37]/10 border border-[#DAAF37]/25 flex items-center justify-center text-[#F4D03F] mb-3">
                  <Briefcase className="w-4 h-4" />
                </div>
                <h4 className="text-base font-heading font-bold text-white mb-1">
                  Nexora Jobs
                </h4>
                <p className="text-xs font-heading font-semibold text-[#F4D03F] mb-2">
                  Talent Ecosystem
                </p>
                <p className="text-xs text-white/60 font-sans leading-relaxed">
                  Independent recruitment layer connecting verified salons with skilled beauty specialists.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-white/[0.06] text-[10px] text-[#DAAF37] font-heading font-semibold">
                Employment Network
              </div>
            </div>

            {/* Real Estate */}
            <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#DAAF37]/40 transition-colors flex flex-col justify-between">
              <div>
                <div className="w-8 h-8 rounded-lg bg-[#DAAF37]/10 border border-[#DAAF37]/25 flex items-center justify-center text-[#F4D03F] mb-3">
                  <Home className="w-4 h-4" />
                </div>
                <h4 className="text-base font-heading font-bold text-white mb-1">
                  Real Estate
                </h4>
                <p className="text-xs font-heading font-semibold text-[#F4D03F] mb-2">
                  Expansion Vertical
                </p>
                <p className="text-xs text-white/60 font-sans leading-relaxed">
                  Demonstrating platform versatility through direct owner-to-tenant property listings.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-white/[0.06] text-[10px] text-[#DAAF37] font-heading font-semibold">
                No Broker Expansion
              </div>
            </div>

            {/* Enterprise */}
            <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#DAAF37]/40 transition-colors flex flex-col justify-between">
              <div>
                <div className="w-8 h-8 rounded-lg bg-[#DAAF37]/10 border border-[#DAAF37]/25 flex items-center justify-center text-[#F4D03F] mb-3">
                  <Building2 className="w-4 h-4" />
                </div>
                <h4 className="text-base font-heading font-bold text-white mb-1">
                  Enterprise
                </h4>
                <p className="text-xs font-heading font-semibold text-[#F4D03F] mb-2">
                  Multi-Unit Networks
                </p>
                <p className="text-xs text-white/60 font-sans leading-relaxed">
                  Scalable management for salon chains, franchise networks, and international beauty brands.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-white/[0.06] text-[10px] text-[#DAAF37] font-heading font-semibold">
                Chains & Franchises
              </div>
            </div>
          </div>
        </div>

        {/* 4. Action Banner */}
        <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
          <Button
            to="/ecosystem"
            variant="primary"
            size="md"
            icon={<ExternalLink className="w-4 h-4" />}
          >
            Explore Complete Ecosystem
          </Button>
        </div>
      </section>

      {/* SECTION 15 — WHY NEXORA CAN SCALE */}
      <section
        id="why-nexora-can-scale"
        aria-label="Why Nexora Can Scale Section"
        className="relative py-20 sm:py-28 lg:py-32 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto w-full border-t border-white/10"
      >
        {/* Subtle Ambient Gold Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] sm:w-[1000px] h-[450px] bg-gradient-to-b from-[#DAAF37]/[0.08] via-transparent to-transparent blur-[140px] pointer-events-none rounded-full" />

        {/* 1. Section Header & Heading */}
        <div className="max-w-4xl mx-auto text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DAAF37]/10 border border-[#DAAF37]/30 text-[#F4D03F] text-xs font-heading font-semibold uppercase tracking-[0.2em] mb-4 shadow-[0_0_20px_rgba(218,175,55,0.15)]">
            <TrendingUp className="w-3.5 h-3.5 text-[#F4D03F]" />
            15. WHY NEXORA CAN SCALE
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight leading-[1.15] mb-5 text-balance">
            The Growth Engine Is{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFF2B2] via-[#F4D03F] to-[#DAAF37]">
              The Network
            </span>
          </h2>

          <p className="text-sm sm:text-base text-white/75 font-sans max-w-2xl mx-auto leading-relaxed mb-6">
            Positioning Nexora as a compounding multi-stakeholder ecosystem network — driven by self-reinforcing viral adoption flywheels far beyond a simple booking platform.
          </p>

          {/* Cross-Ecosystem Effect Ribbon */}
          <div className="inline-flex flex-wrap items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-white/[0.05] via-[#121212] to-white/[0.05] border border-[#DAAF37]/35 shadow-[0_0_24px_rgba(218,175,55,0.12)] text-xs sm:text-sm font-heading font-semibold text-[#F4D03F]">
            <span>Business</span>
            <span className="text-[#DAAF37]/60">↔</span>
            <span>Professional</span>
            <span className="text-[#DAAF37]/60">↔</span>
            <span>Customer</span>
            <span className="text-[#DAAF37]/60">↔</span>
            <span>Supplier / Brand</span>
            <span className="text-[#DAAF37]/60">↔</span>
            <span>Growth Partner</span>
          </div>
        </div>

        {/* 2. EXACT CINEMATIC SCALING INFOGRAPHIC IMAGE */}
        <div className="mb-14 sm:mb-16 rounded-2xl sm:rounded-3xl overflow-hidden border border-[#DAAF37]/35 shadow-[0_20px_50px_rgba(0,0,0,0.85),0_0_35px_rgba(218,175,55,0.15)]">
          <img
            src="/assets/why-nexora-can-scale-cinematic.webp"
            alt="Why Nexora Can Scale - Dual Compounding Flywheels: Core Network Flywheel & Digital Transformation Flywheel with Cross-Ecosystem Network Effect"
            width={1920}
            height={960}
            className="w-full h-auto object-cover select-none block"
            loading="eager"
          />
        </div>

        {/* 3. Dual Compounding Flywheels Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10 sm:mb-12">
          {/* Core Flywheel */}
          <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-white/[0.05] via-[#0D0D0D] to-[#070707] border border-[#DAAF37]/30 shadow-[0_16px_48px_rgba(0,0,0,0.7)] flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
                <div className="w-10 h-10 rounded-xl bg-[#DAAF37]/10 border border-[#DAAF37]/30 flex items-center justify-center text-[#F4D03F] flex-shrink-0">
                  <RefreshCw className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-heading font-bold text-[#DAAF37] uppercase tracking-widest block">
                    Network Accelerator
                  </span>
                  <h3 className="text-xl sm:text-2xl font-heading font-bold text-white">
                    Core Flywheel
                  </h3>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                {[
                  { step: 'Growth Partners', desc: 'Field-level human onboarding & merchant acquisition' },
                  { step: 'More Businesses', desc: 'Expanding local merchant density & service directory' },
                  { step: 'More Active Businesses', desc: 'Active online schedules, websites & client CRM' },
                  { step: 'More Customers', desc: 'Higher organic discovery & seamless booking' },
                  { step: 'More Usage', desc: 'Frequent appointments, WhatsApp notifications & reviews' },
                  { step: 'More Business Relationships', desc: 'Stronger repeat client retention & loyalty' },
                  { step: 'More Ecosystem Activity', desc: 'Wholesale B2B orders & professional job hiring' },
                  { step: 'More Growth Opportunities', desc: 'High partner rewards & compounding network value' },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                    <span className="w-5 h-5 rounded-full bg-[#DAAF37]/15 border border-[#DAAF37]/30 flex items-center justify-center text-[#F4D03F] text-[10px] font-bold flex-shrink-0">
                      {idx + 1}
                    </span>
                    <div className="flex-1 min-w-0">
                      <span className="text-xs font-heading font-bold text-white block truncate">{item.step}</span>
                      <span className="text-[10px] text-white/50 font-sans truncate block">{item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Digital Transformation Flywheel */}
          <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-white/[0.05] via-[#0D0D0D] to-[#070707] border border-[#DAAF37]/30 shadow-[0_16px_48px_rgba(0,0,0,0.7)] flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
                <div className="w-10 h-10 rounded-xl bg-[#DAAF37]/10 border border-[#DAAF37]/30 flex items-center justify-center text-[#F4D03F] flex-shrink-0">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-heading font-bold text-[#DAAF37] uppercase tracking-widest block">
                    Product Adoption
                  </span>
                  <h3 className="text-xl sm:text-2xl font-heading font-bold text-white">
                    Digital Transformation Flywheel
                  </h3>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                {[
                  { step: 'Free Website', desc: 'Zero cost barrier with 30+ beauty templates' },
                  { step: 'Business Onboarding', desc: '30-minute partner-guided setup & profile creation' },
                  { step: 'Digital Presence', desc: 'Branded digital storefront & online availability' },
                  { step: 'Customer Discovery', desc: 'Local search visibility & direct client booking' },
                  { step: 'Booking / Engagement', desc: 'Automated WhatsApp reminders & calendar sync' },
                  { step: 'Retention', desc: 'Automated customer recall & loyalty points' },
                  { step: 'Business Growth', desc: 'Predictable repeat bookings & off-peak load filling' },
                  { step: 'Stronger Network', desc: 'Compounding network effects for the entire ecosystem' },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                    <span className="w-5 h-5 rounded-full bg-[#DAAF37]/15 border border-[#DAAF37]/30 flex items-center justify-center text-[#F4D03F] text-[10px] font-bold flex-shrink-0">
                      {idx + 1}
                    </span>
                    <div className="flex-1 min-w-0">
                      <span className="text-xs font-heading font-bold text-white block truncate">{item.step}</span>
                      <span className="text-[10px] text-white/50 font-sans truncate block">{item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 4. Action Banner */}
        <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
          <Button
            to="/ecosystem"
            variant="primary"
            size="md"
            icon={<ExternalLink className="w-4 h-4" />}
          >
            Explore Network Architecture
          </Button>
        </div>
      </section>

      {/* SECTION 16 — WHY NEXORA IS DIFFERENT */}
      <section
        id="why-nexora-is-different"
        aria-label="Why Nexora Is Different Section"
        className="relative py-20 sm:py-28 lg:py-32 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto w-full border-t border-white/10"
      >
        {/* Subtle Ambient Gold Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] sm:w-[1000px] h-[450px] bg-gradient-to-b from-[#DAAF37]/[0.08] via-transparent to-transparent blur-[140px] pointer-events-none rounded-full" />

        {/* 1. Section Header & Heading */}
        <div className="max-w-4xl mx-auto text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DAAF37]/10 border border-[#DAAF37]/30 text-[#F4D03F] text-xs font-heading font-semibold uppercase tracking-[0.2em] mb-4 shadow-[0_0_20px_rgba(218,175,55,0.15)]">
            <Sparkles className="w-3.5 h-3.5 text-[#F4D03F]" />
            16. WHY NEXORA IS DIFFERENT
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight leading-[1.15] mb-5 text-balance">
            From Fragmented To{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFF2B2] via-[#F4D03F] to-[#DAAF37]">
              Connected Ecosystem
            </span>
          </h2>

          <p className="text-sm sm:text-base text-white/75 font-sans max-w-2xl mx-auto leading-relaxed mb-6">
            Where traditional beauty businesses struggle across multiple disconnected software tools, Nexora unifies all core operations into one connected digital network layer.
          </p>

          {/* Differentiator Pillars Ribbon */}
          <div className="inline-flex flex-wrap items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-white/[0.05] via-[#121212] to-white/[0.05] border border-[#DAAF37]/35 shadow-[0_0_24px_rgba(218,175,55,0.12)] text-xs sm:text-sm font-heading font-semibold text-[#F4D03F]">
            <span>Free Beauty Website</span>
            <span className="text-[#DAAF37]/60">+</span>
            <span>30+ Templates</span>
            <span className="text-[#DAAF37]/60">+</span>
            <span>Growth Partner Onboarding</span>
            <span className="text-[#DAAF37]/60">+</span>
            <span>Connected Ecosystem</span>
          </div>
        </div>

        {/* 2. EXACT CINEMATIC DIFFERENTIATION INFOGRAPHIC IMAGE */}
        <div className="mb-14 sm:mb-16 rounded-2xl sm:rounded-3xl overflow-hidden border border-[#DAAF37]/35 shadow-[0_20px_50px_rgba(0,0,0,0.85),0_0_35px_rgba(218,175,55,0.15)]">
          <img
            src="/assets/why-nexora-is-different-cinematic.webp"
            alt="Why Nexora Is Different - Traditional Fragmented Beauty Model vs Nexora Connected Ecosystem Model"
            width={1920}
            height={960}
            className="w-full h-auto object-cover select-none block"
            loading="eager"
          />
        </div>

        {/* 3. Side-by-Side Comparison Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10 sm:mb-12">
          {/* Traditional Fragmented Model */}
          <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-red-950/20 via-[#0D0D0D] to-[#070707] border border-red-500/20 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
                <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-400 flex-shrink-0 font-heading font-bold text-xs">
                  ✕
                </div>
                <div>
                  <span className="text-[11px] font-heading font-bold text-red-400 uppercase tracking-widest block">
                    Legacy Fragmentation
                  </span>
                  <h3 className="text-xl sm:text-2xl font-heading font-bold text-white">
                    Traditional Model
                  </h3>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {[
                  'Separate Booking Tool',
                  'Separate Website',
                  'Separate Job Portal',
                  'Separate Supplier Network',
                  'Separate Marketing Tools',
                  'Separate Customer Loyalty',
                  'No Human Onboarding Layer',
                  'Isolated Account Silos',
                ].map((item, idx) => (
                  <div key={idx} className="p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.06] text-xs text-white/60 font-sans flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-400/80 flex-shrink-0" />
                    <span className="truncate">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-3 border-t border-white/10 text-xs text-red-300 font-sans italic">
              High monthly costs, duplicated manual entries & lost client connections.
            </div>
          </div>

          {/* Nexora Connected Model */}
          <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-white/[0.05] via-[#0D0D0D] to-[#070707] border border-[#DAAF37]/35 shadow-[0_16px_48px_rgba(0,0,0,0.7)] flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
                <div className="w-10 h-10 rounded-xl bg-[#DAAF37]/10 border border-[#DAAF37]/30 flex items-center justify-center text-[#F4D03F] flex-shrink-0 font-heading font-bold text-xs">
                  ✓
                </div>
                <div>
                  <span className="text-[11px] font-heading font-bold text-[#DAAF37] uppercase tracking-widest block">
                    Unified Ecosystem
                  </span>
                  <h3 className="text-xl sm:text-2xl font-heading font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-[#FFF2B2] to-[#DAAF37]">
                    Nexora Connected Model
                  </h3>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {[
                  'Discover Platform',
                  'SalonOS Operations',
                  'Free Branded Sites',
                  '30+ Ready Templates',
                  'Nexora Jobs Hub',
                  'Nexora Market B2B',
                  'Growth Partner Network',
                  'Enterprise Scale',
                ].map((item, idx) => (
                  <div key={idx} className="p-2.5 rounded-xl bg-[#DAAF37]/[0.03] border border-[#DAAF37]/20 text-xs text-white font-heading font-semibold flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#DAAF37] flex-shrink-0 shadow-[0_0_6px_#DAAF37]" />
                    <span className="truncate">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-3 border-t border-white/10 text-xs text-[#F4D03F] font-sans italic">
              Free setup, automated retention, human field support & unified network growth.
            </div>
          </div>
        </div>

        {/* 4. Action Banner */}
        <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
          <Button
            to="/ecosystem"
            variant="primary"
            size="md"
            icon={<ExternalLink className="w-4 h-4" />}
          >
            Explore Nexora Architecture
          </Button>
        </div>
      </section>

      {/* SECTION 17.1 — WHY INVESTMENT IS NEEDED */}
      <section
        id="why-investment-is-needed"
        aria-label="Why Investment Is Needed Section"
        className="relative py-20 sm:py-28 lg:py-32 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto w-full border-t border-white/10"
      >
        {/* Subtle Ambient Gold Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] sm:w-[1000px] h-[450px] bg-gradient-to-b from-[#DAAF37]/[0.08] via-transparent to-transparent blur-[140px] pointer-events-none rounded-full" />

        {/* 1. Section Header & Heading */}
        <div className="max-w-4xl mx-auto text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DAAF37]/10 border border-[#DAAF37]/30 text-[#F4D03F] text-xs font-heading font-semibold uppercase tracking-[0.2em] mb-4 shadow-[0_0_20px_rgba(218,175,55,0.15)]">
            <Zap className="w-3.5 h-3.5 text-[#F4D03F]" />
            17.1. WHY INVESTMENT IS NEEDED
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight leading-[1.15] mb-5 text-balance">
            Why Investment Is{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFF2B2] via-[#F4D03F] to-[#DAAF37]">
              Needed
            </span>
          </h2>

          <p className="text-base sm:text-lg text-white/85 font-sans max-w-3xl mx-auto leading-relaxed mb-6">
            Nexora One is building more than a single digital product. It is building a connected business ecosystem that brings customers, businesses, professionals, Growth Partners, suppliers and multiple service verticals together. To grow this ecosystem at scale, capital is needed for technology, business onboarding, customer acquisition, people, marketing, operations and expansion.
          </p>

          {/* Core Narrative Highlighted Statement */}
          <div className="inline-flex flex-wrap items-center justify-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#DAAF37]/15 via-[#121212] to-[#DAAF37]/10 border border-[#DAAF37]/40 shadow-[0_0_24px_rgba(218,175,55,0.2)] text-xs sm:text-sm font-heading font-semibold text-[#F4D03F]">
            <span>Investment is not only for building software. Investment helps build: Technology + People + Business Network + Customer Network + Growth Partner Network + Market Expansion.</span>
          </div>
        </div>

        {/* 2. Visual Flow Connecting Investment Areas */}
        <div className="mb-14 sm:mb-16 p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-white/[0.05] via-[#0D0D0D] to-[#070707] border border-[#DAAF37]/30 shadow-[0_16px_48px_rgba(0,0,0,0.7)]">
          <div className="text-center mb-8">
            <span className="text-xs font-heading font-bold uppercase tracking-widest text-[#DAAF37] block mb-1">
              Capital Deployment Architecture
            </span>
            <h3 className="text-xl sm:text-2xl font-heading font-bold text-white">
              Capital Flow & Long-Term Ecosystem Value
            </h3>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm font-heading font-semibold text-white">
            {[
              { label: 'INVESTMENT', highlight: true },
              { label: 'TECHNOLOGY', highlight: false },
              { label: 'CUSTOMER & BUSINESS ACQUISITION', highlight: false },
              { label: 'GROWTH PARTNER NETWORK', highlight: false },
              { label: 'ACTIVE ECOSYSTEM', highlight: false },
              { label: 'MORE BUSINESS ACTIVITY', highlight: false },
              { label: 'REVENUE & BUSINESS GROWTH', highlight: false },
              { label: 'LONG-TERM ECOSYSTEM VALUE', highlight: true },
            ].map((node, idx, arr) => (
              <React.Fragment key={idx}>
                <div className={`px-3.5 py-2.5 rounded-xl border ${node.highlight ? 'bg-[#DAAF37]/20 border-[#DAAF37]/50 text-[#F4D03F] shadow-[0_0_15px_rgba(218,175,55,0.25)]' : 'bg-white/[0.04] border-white/10 text-white/90'}`}>
                  {node.label}
                </div>
                {idx < arr.length - 1 && (
                  <span className="text-[#DAAF37] font-bold text-base">↓</span>
                )}
              </React.Fragment>
            ))}
          </div>
          <p className="text-center text-xs text-white/60 font-sans mt-6 max-w-2xl mx-auto">
            Investment is needed to build the network around the technology.
          </p>
        </div>

        {/* 3. 7 Detailed Use-Case Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {/* 1. Technology & Product Development */}
          <div className="p-6 sm:p-7 rounded-2xl bg-gradient-to-b from-white/[0.04] via-[#0D0D0D] to-[#070707] border border-white/10 hover:border-[#DAAF37]/40 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#DAAF37]/10 border border-[#DAAF37]/30 flex items-center justify-center text-[#F4D03F]">
                  <Cpu className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-heading font-bold text-[#DAAF37] uppercase tracking-wider">
                  01 / Foundation
                </span>
              </div>
              <h3 className="text-lg font-heading font-bold text-white mb-2">
                Build the Technology That Connects the Ecosystem
              </h3>
              <p className="text-xs text-white/70 font-sans mb-3">
                Investment can support:
              </p>
              <ul className="space-y-1.5 text-xs text-white/80 font-sans mb-4">
                {[
                  'Customer platforms',
                  'Business tools',
                  'Websites and apps',
                  'Booking systems',
                  'CRM',
                  'Automation',
                  'AI tools',
                  'Payment / QR infrastructure',
                  'Data and reporting',
                  'Platform connectivity',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#DAAF37]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="pt-3 border-t border-white/[0.06] text-xs font-heading font-semibold text-[#DAAF37] italic">
              &ldquo;Technology is the foundation that connects more businesses, customers and services.&rdquo;
            </div>
          </div>

          {/* 2. Customer Acquisition */}
          <div className="p-6 sm:p-7 rounded-2xl bg-gradient-to-b from-white/[0.04] via-[#0D0D0D] to-[#070707] border border-white/10 hover:border-[#DAAF37]/40 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#DAAF37]/10 border border-[#DAAF37]/30 flex items-center justify-center text-[#F4D03F]">
                  <Users className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-heading font-bold text-[#DAAF37] uppercase tracking-wider">
                  02 / Demand
                </span>
              </div>
              <h3 className="text-lg font-heading font-bold text-white mb-2">
                A Network Needs Customers
              </h3>
              <p className="text-xs text-white/70 font-sans mb-3">
                Investment can support:
              </p>
              <ul className="space-y-1.5 text-xs text-white/80 font-sans mb-4">
                {[
                  'Brand awareness',
                  'Digital marketing',
                  'Local discovery',
                  'Customer onboarding',
                  'Customer engagement',
                  'Retention',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#DAAF37]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="pt-3 border-t border-white/[0.06] text-xs font-heading font-semibold text-[#DAAF37] italic">
              &ldquo;Bring customers into the ecosystem and keep them engaged.&rdquo;
            </div>
          </div>

          {/* 3. Salon & Business Onboarding */}
          <div className="p-6 sm:p-7 rounded-2xl bg-gradient-to-b from-white/[0.04] via-[#0D0D0D] to-[#070707] border border-white/10 hover:border-[#DAAF37]/40 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#DAAF37]/10 border border-[#DAAF37]/30 flex items-center justify-center text-[#F4D03F]">
                  <Store className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-heading font-bold text-[#DAAF37] uppercase tracking-wider">
                  03 / Merchants
                </span>
              </div>
              <h3 className="text-lg font-heading font-bold text-white mb-2">
                Bring Offline Businesses Into the Digital Network
              </h3>
              <p className="text-xs text-white/70 font-sans mb-3">
                Investment can support:
              </p>
              <ul className="space-y-1.5 text-xs text-white/80 font-sans mb-3">
                {[
                  'Business identification',
                  'Business onboarding',
                  'Website/profile setup',
                  'Services and portfolio setup',
                  'Digital activation',
                  'Business support',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#DAAF37]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="p-2.5 rounded-xl bg-[#DAAF37]/10 border border-[#DAAF37]/30 text-center text-xs font-heading font-semibold text-[#F4D03F] mb-3">
                Free Website + 30+ Templates + Assisted Onboarding
              </div>
            </div>
            <div className="pt-3 border-t border-white/[0.06] text-xs font-heading font-semibold text-[#DAAF37] italic">
              &ldquo;Nexora reduces the barrier for small businesses to enter the digital economy.&rdquo;
            </div>
          </div>

          {/* 4. Growth Partner Network */}
          <div className="p-6 sm:p-7 rounded-2xl bg-gradient-to-b from-white/[0.04] via-[#0D0D0D] to-[#070707] border border-white/10 hover:border-[#DAAF37]/40 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#DAAF37]/10 border border-[#DAAF37]/30 flex items-center justify-center text-[#F4D03F]">
                  <Network className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-heading font-bold text-[#DAAF37] uppercase tracking-wider">
                  04 / Partners
                </span>
              </div>
              <h3 className="text-lg font-heading font-bold text-white mb-2">
                Scale Business Adoption Through a Human Network
              </h3>
              <p className="text-xs text-white/70 font-sans mb-3">
                Investment can support:
              </p>
              <ul className="space-y-1.5 text-xs text-white/80 font-sans mb-4">
                {[
                  'Partner recruitment',
                  'Training',
                  'Onboarding tools',
                  'Field support',
                  'Business activation',
                  'Network expansion',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#DAAF37]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="pt-3 border-t border-white/[0.06] text-xs font-heading font-semibold text-[#DAAF37] italic">
              &ldquo;Growth Partners help local beauty businesses move from offline operations to connected digital business.&rdquo;
            </div>
          </div>

          {/* 5. Marketing & Brand Building */}
          <div className="p-6 sm:p-7 rounded-2xl bg-gradient-to-b from-white/[0.04] via-[#0D0D0D] to-[#070707] border border-white/10 hover:border-[#DAAF37]/40 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#DAAF37]/10 border border-[#DAAF37]/30 flex items-center justify-center text-[#F4D03F]">
                  <Megaphone className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-heading font-bold text-[#DAAF37] uppercase tracking-wider">
                  05 / Brand
                </span>
              </div>
              <h3 className="text-lg font-heading font-bold text-white mb-2">
                Make Nexora Easier to Discover
              </h3>
              <p className="text-xs text-white/70 font-sans mb-3">
                Investment can support:
              </p>
              <ul className="space-y-1.5 text-xs text-white/80 font-sans mb-4">
                {[
                  'Digital campaigns',
                  'Video content',
                  'Visual advertising',
                  'Local promotion',
                  'Business education',
                  'Brand communication',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#DAAF37]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="pt-3 border-t border-white/[0.06] text-xs font-heading font-semibold text-[#DAAF37] italic">
              &ldquo;Build awareness around the Nexora ecosystem.&rdquo;
            </div>
          </div>

          {/* 6. Team & Operations */}
          <div className="p-6 sm:p-7 rounded-2xl bg-gradient-to-b from-white/[0.04] via-[#0D0D0D] to-[#070707] border border-white/10 hover:border-[#DAAF37]/40 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#DAAF37]/10 border border-[#DAAF37]/30 flex items-center justify-center text-[#F4D03F]">
                  <Briefcase className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-heading font-bold text-[#DAAF37] uppercase tracking-wider">
                  06 / Operations
                </span>
              </div>
              <h3 className="text-lg font-heading font-bold text-white mb-2">
                People Build and Support the Platform
              </h3>
              <p className="text-xs text-white/70 font-sans mb-3">
                Scaling requires people across:
              </p>
              <ul className="space-y-1.5 text-xs text-white/80 font-sans mb-4">
                {[
                  'Technology',
                  'Product development',
                  'Customer support',
                  'Business onboarding',
                  'Growth Partner support',
                  'Marketing',
                  'Operations',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#DAAF37]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="pt-3 border-t border-white/[0.06] text-xs font-heading font-semibold text-[#DAAF37]">
              Operational Infrastructure
            </div>
          </div>

          {/* 7. New Vertical Development */}
          <div className="p-6 sm:p-7 rounded-2xl bg-gradient-to-b from-white/[0.04] via-[#0D0D0D] to-[#070707] border border-white/10 hover:border-[#DAAF37]/40 transition-all flex flex-col justify-between md:col-span-2 lg:col-span-1">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#DAAF37]/10 border border-[#DAAF37]/30 flex items-center justify-center text-[#F4D03F]">
                  <Building2 className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-heading font-bold text-[#DAAF37] uppercase tracking-wider">
                  07 / Expansion
                </span>
              </div>
              <h3 className="text-lg font-heading font-bold text-white mb-2">
                Expand the Architecture Beyond the Core
              </h3>
              <p className="text-xs sm:text-sm text-white/75 font-sans leading-relaxed mb-3">
                Beauty is the core entry ecosystem. The architecture can expand into additional local-service opportunities when the business and market are ready.
              </p>
              <div className="text-xs text-white/70 font-sans mb-2">Examples:</div>
              <ul className="space-y-1.5 text-xs text-white/80 font-sans mb-4">
                {[
                  'No Broker Real Estate',
                  'Food Delivery',
                  'Other Local-Commerce Opportunities',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#DAAF37]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="pt-3 border-t border-white/[0.06] text-xs font-heading font-semibold text-[#DAAF37] italic">
              &ldquo;Expansion should be based on business readiness and market opportunity, not launching everything at once.&rdquo;
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 17.2 — WHAT THE INVESTMENT BUILDS */}
      <section
        id="what-the-investment-builds"
        aria-label="What the Investment Builds Section"
        className="relative py-20 sm:py-28 lg:py-32 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto w-full border-t border-white/10"
      >
        {/* Subtle Ambient Gold Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] sm:w-[1000px] h-[450px] bg-gradient-to-b from-[#DAAF37]/[0.08] via-transparent to-transparent blur-[140px] pointer-events-none rounded-full" />

        {/* 1. Section Header & Heading */}
        <div className="max-w-4xl mx-auto text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DAAF37]/10 border border-[#DAAF37]/30 text-[#F4D03F] text-xs font-heading font-semibold uppercase tracking-[0.2em] mb-4 shadow-[0_0_20px_rgba(218,175,55,0.15)]">
            <Layers className="w-3.5 h-3.5 text-[#F4D03F]" />
            17.2. WHAT THE INVESTMENT BUILDS
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight leading-[1.15] mb-5 text-balance">
            What the Investment{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFF2B2] via-[#F4D03F] to-[#DAAF37]">
              Builds
            </span>
          </h2>

          <p className="text-base sm:text-lg text-white/85 font-sans max-w-3xl mx-auto leading-relaxed mb-6">
            Investment will help Nexora strengthen the technology, business network, customer network, Growth Partner network and ecosystem infrastructure needed to grow the platform and expand into new opportunities.
          </p>

          {/* Core Investment Flow Highlight */}
          <div className="inline-flex flex-wrap items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-white/[0.05] via-[#121212] to-white/[0.05] border border-[#DAAF37]/35 shadow-[0_0_24px_rgba(218,175,55,0.12)] text-xs sm:text-sm font-heading font-semibold text-[#F4D03F]">
            <span>INVESTMENT</span>
            <span className="text-[#DAAF37]/60">→</span>
            <span>BUILD</span>
            <span className="text-[#DAAF37]/60">→</span>
            <span>CONNECT</span>
            <span className="text-[#DAAF37]/60">→</span>
            <span>GROW</span>
            <span className="text-[#DAAF37]/60">→</span>
            <span>EXPAND</span>
          </div>
        </div>

        {/* 2. 8 Core Building Blocks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {/* 1. Technology Foundation */}
          <div className="p-6 sm:p-7 rounded-2xl bg-gradient-to-b from-white/[0.04] via-[#0D0D0D] to-[#070707] border border-white/10 hover:border-[#DAAF37]/40 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#DAAF37]/10 border border-[#DAAF37]/30 flex items-center justify-center text-[#F4D03F]">
                  <Cpu className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-heading font-bold text-[#DAAF37] uppercase tracking-wider">
                  01 / Infrastructure
                </span>
              </div>
              <h3 className="text-lg font-heading font-bold text-white mb-2">
                Build the Digital Infrastructure
              </h3>
              <p className="text-xs text-white/70 font-sans mb-3">
                Investment can strengthen:
              </p>
              <ul className="space-y-1.5 text-xs text-white/80 font-sans mb-4">
                {[
                  'Customer-facing platforms',
                  'Business platforms',
                  'Websites and apps',
                  'Booking systems',
                  'CRM',
                  'Automation',
                  'AI tools',
                  'QR / payment systems',
                  'Reporting and analytics',
                  'Shared ecosystem infrastructure',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#DAAF37]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="pt-3 border-t border-white/[0.06] text-xs font-heading font-semibold text-[#DAAF37] italic">
              &ldquo;Technology connects the different parts of Nexora and makes the ecosystem easier to use and scale.&rdquo;
            </div>
          </div>

          {/* 2. Business Network */}
          <div className="p-6 sm:p-7 rounded-2xl bg-gradient-to-b from-white/[0.04] via-[#0D0D0D] to-[#070707] border border-white/10 hover:border-[#DAAF37]/40 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#DAAF37]/10 border border-[#DAAF37]/30 flex items-center justify-center text-[#F4D03F]">
                  <Store className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-heading font-bold text-[#DAAF37] uppercase tracking-wider">
                  02 / Businesses
                </span>
              </div>
              <h3 className="text-lg font-heading font-bold text-white mb-2">
                Connect More Businesses
              </h3>
              <div className="text-[10px] text-[#DAAF37] font-heading font-semibold mb-2">
                LOCAL BUSINESS → DIGITAL PRESENCE → BOOKING TOOLS → ACTIVE BUSINESS → ECOSYSTEM
              </div>
              <p className="text-xs text-white/70 font-sans mb-3">
                Investment helps bring more local beauty businesses into the digital network via:
              </p>
              <ul className="space-y-1.5 text-xs text-white/80 font-sans mb-4">
                {[
                  'Business onboarding',
                  'Website setup',
                  '30+ templates',
                  'Business profile setup',
                  'Service catalogue',
                  'Digital activation',
                  'Ongoing business support',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#DAAF37]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="pt-3 border-t border-white/[0.06] text-xs font-heading font-semibold text-[#DAAF37]">
              Merchant Adoption Layer
            </div>
          </div>

          {/* 3. Customer Network */}
          <div className="p-6 sm:p-7 rounded-2xl bg-gradient-to-b from-white/[0.04] via-[#0D0D0D] to-[#070707] border border-white/10 hover:border-[#DAAF37]/40 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#DAAF37]/10 border border-[#DAAF37]/30 flex items-center justify-center text-[#F4D03F]">
                  <Users className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-heading font-bold text-[#DAAF37] uppercase tracking-wider">
                  03 / Customers
                </span>
              </div>
              <h3 className="text-lg font-heading font-bold text-white mb-2">
                Bring More Customers Into the Ecosystem
              </h3>
              <div className="text-[10px] text-[#DAAF37] font-heading font-semibold mb-2">
                DISCOVER → BOOK → VISIT → REVIEW → REWARD → REBOOK
              </div>
              <p className="text-xs text-white/75 font-sans leading-relaxed mb-4">
                Investment can support customer awareness, discovery, onboarding, engagement and retention without inventing customer-count numbers.
              </p>
            </div>
            <div className="pt-3 border-t border-white/[0.06] text-xs font-heading font-semibold text-[#DAAF37]">
              Consumer Retention Flywheel
            </div>
          </div>

          {/* 4. Growth Partner Network */}
          <div className="p-6 sm:p-7 rounded-2xl bg-gradient-to-b from-white/[0.04] via-[#0D0D0D] to-[#070707] border border-white/10 hover:border-[#DAAF37]/40 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#DAAF37]/10 border border-[#DAAF37]/30 flex items-center justify-center text-[#F4D03F]">
                  <Network className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-heading font-bold text-[#DAAF37] uppercase tracking-wider">
                  04 / Partners
                </span>
              </div>
              <h3 className="text-lg font-heading font-bold text-white mb-2">
                Expand the Human Adoption Network
              </h3>
              <div className="text-[10px] text-[#DAAF37] font-heading font-semibold mb-2">
                GROWTH PARTNER → ONBOARDING → ACTIVATION → SUPPORT → EXPANSION
              </div>
              <p className="text-xs text-white/70 font-sans mb-3">
                Investment can support:
              </p>
              <ul className="space-y-1.5 text-xs text-white/80 font-sans mb-4">
                {[
                  'Growth Partner recruitment',
                  'Training',
                  'Partner tools',
                  'Onboarding support',
                  'Field support',
                  'Business activation',
                  'Network expansion',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#DAAF37]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="pt-3 border-t border-white/[0.06] text-xs font-heading font-semibold text-[#DAAF37] italic">
              &ldquo;Growth Partners help local beauty businesses move from offline operations to connected digital business.&rdquo;
            </div>
          </div>

          {/* 5. Professional Network */}
          <div className="p-6 sm:p-7 rounded-2xl bg-gradient-to-b from-white/[0.04] via-[#0D0D0D] to-[#070707] border border-white/10 hover:border-[#DAAF37]/40 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#DAAF37]/10 border border-[#DAAF37]/30 flex items-center justify-center text-[#F4D03F]">
                  <Briefcase className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-heading font-bold text-[#DAAF37] uppercase tracking-wider">
                  05 / Talent
                </span>
              </div>
              <h3 className="text-lg font-heading font-bold text-white mb-2">
                Connect Businesses With Talent
              </h3>
              <div className="text-[10px] text-[#DAAF37] font-heading font-semibold mb-2">
                BUSINESS ↔ PROFESSIONAL ↔ JOB OPPORTUNITY
              </div>
              <p className="text-xs text-white/75 font-sans leading-relaxed mb-4">
                Investment can strengthen the Nexora Jobs layer so beauty businesses can hire and professionals can discover relevant opportunities.
              </p>
            </div>
            <div className="pt-3 border-t border-white/[0.06] text-xs font-heading font-semibold text-[#DAAF37]">
              Employment & Skill Layer
            </div>
          </div>

          {/* 6. B2B Beauty Network */}
          <div className="p-6 sm:p-7 rounded-2xl bg-gradient-to-b from-white/[0.04] via-[#0D0D0D] to-[#070707] border border-white/10 hover:border-[#DAAF37]/40 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#DAAF37]/10 border border-[#DAAF37]/30 flex items-center justify-center text-[#F4D03F]">
                  <ShoppingBag className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-heading font-bold text-[#DAAF37] uppercase tracking-wider">
                  06 / B2B Supply
                </span>
              </div>
              <h3 className="text-lg font-heading font-bold text-white mb-2">
                Connect Brands, Suppliers and Beauty Businesses
              </h3>
              <div className="text-[10px] text-[#DAAF37] font-heading font-semibold mb-2">
                BRAND → SUPPLIER / DISTRIBUTOR → BEAUTY BUSINESS
              </div>
              <p className="text-xs text-white/75 font-sans leading-relaxed mb-3">
                Strengthens B2B discovery across 12 official beauty market categories on a listing/discovery/connection model with zero commission.
              </p>
              <div className="text-[11px] text-white/60 font-sans italic">
                Hair & Styling, Skin & Cosmetics, Salon Furniture, Spa Equipment, Tattoo Supplies, Nail Products, Professional Tools, Disposable Supplies, Beauty Technology, Academy & Training, Wholesale Products, Brand Partnerships.
              </div>
            </div>
            <div className="pt-3 border-t border-white/[0.06] text-xs font-heading font-semibold text-[#DAAF37]">
              No-Commission B2B Discovery
            </div>
          </div>

          {/* 7. Digital Services & Advertising */}
          <div className="p-6 sm:p-7 rounded-2xl bg-gradient-to-b from-white/[0.04] via-[#0D0D0D] to-[#070707] border border-white/10 hover:border-[#DAAF37]/40 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#DAAF37]/10 border border-[#DAAF37]/30 flex items-center justify-center text-[#F4D03F]">
                  <Globe className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-heading font-bold text-[#DAAF37] uppercase tracking-wider">
                  07 / Revenue
                </span>
              </div>
              <h3 className="text-lg font-heading font-bold text-white mb-2">
                Build Additional Direct Revenue Channels
              </h3>
              <div className="space-y-3 text-xs text-white/80 font-sans mb-3">
                <div>
                  <span className="font-heading font-bold text-[#DAAF37] block">IT / Digital Services:</span>
                  Landing Page, Multi-page Website, Full-stack Website, AI / Automation / CRM solutions.
                </div>
                <div>
                  <span className="font-heading font-bold text-[#DAAF37] block">Nexora Advertising:</span>
                  Video Ads, Poster / Banner Ads, Business Promotions, Brand Campaigns.
                </div>
              </div>
            </div>
            <div className="pt-3 border-t border-white/[0.06] text-xs font-heading font-semibold text-[#DAAF37]">
              Direct Revenue Layers
            </div>
          </div>

          {/* 8. Multi-Vertical Expansion */}
          <div className="p-6 sm:p-7 rounded-2xl bg-gradient-to-b from-white/[0.04] via-[#0D0D0D] to-[#070707] border border-white/10 hover:border-[#DAAF37]/40 transition-all flex flex-col justify-between md:col-span-2 lg:col-span-2">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#DAAF37]/10 border border-[#DAAF37]/30 flex items-center justify-center text-[#F4D03F]">
                  <Building2 className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-heading font-bold text-[#DAAF37] uppercase tracking-wider">
                  08 / Expansion
                </span>
              </div>
              <h3 className="text-lg font-heading font-bold text-white mb-2">
                Prepare the Architecture for New Opportunities
              </h3>
              <div className="text-[10px] text-[#DAAF37] font-heading font-semibold mb-2">
                BEAUTY → REAL ESTATE → FOOD → OTHER LOCAL-COMMERCE OPPORTUNITIES
              </div>
              <p className="text-xs sm:text-sm text-white/75 font-sans leading-relaxed mb-3">
                Beauty is the core ecosystem. The same technology and network architecture can support additional service verticals as the business becomes ready.
              </p>
              <div className="text-xs text-white/70 font-sans mb-1">Current examples: No Broker Real Estate, Food Delivery (after defined member milestone), other local-commerce opportunities.</div>
            </div>
            <div className="pt-3 border-t border-white/[0.06] text-xs font-heading font-semibold text-[#DAAF37] italic">
              &ldquo;Expansion should be based on business readiness and market opportunity, not launching everything at once.&rdquo;
            </div>
          </div>
        </div>

        {/* 3. The Complete Investment Build Flow Visual */}
        <div className="mb-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-white/[0.05] via-[#0D0D0D] to-[#070707] border border-[#DAAF37]/30 shadow-[0_16px_48px_rgba(0,0,0,0.7)] text-center">
          <span className="text-xs font-heading font-bold uppercase tracking-widest text-[#DAAF37] block mb-1">
            End-to-End Capital Journey
          </span>
          <h3 className="text-xl sm:text-2xl font-heading font-bold text-white mb-6">
            The Complete Investment Build Flow
          </h3>

          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm font-heading font-semibold text-white mb-8">
            {[
              'INVESTMENT',
              'TECHNOLOGY',
              'BUSINESS ONBOARDING',
              'GROWTH PARTNER NETWORK',
              'MORE ACTIVE BUSINESSES',
              'CUSTOMER NETWORK',
              'PROFESSIONAL NETWORK',
              'B2B NETWORK',
              'ECOSYSTEM ACTIVITY',
              'BUSINESS GROWTH',
              'FUTURE EXPANSION',
            ].map((node, idx, arr) => (
              <React.Fragment key={idx}>
                <div className={`px-3 py-2 rounded-xl border ${idx === 0 || idx === arr.length - 1 ? 'bg-[#DAAF37]/20 border-[#DAAF37]/50 text-[#F4D03F]' : 'bg-white/[0.04] border-white/10 text-white/90'}`}>
                  {node}
                </div>
                {idx < arr.length - 1 && (
                  <span className="text-[#DAAF37] font-bold text-base">↓</span>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Key Investor Message */}
          <div className="max-w-3xl mx-auto p-6 rounded-2xl bg-gradient-to-r from-[#DAAF37]/15 via-black to-[#DAAF37]/15 border border-[#DAAF37]/40 shadow-[0_0_24px_rgba(218,175,55,0.2)]">
            <h4 className="text-base sm:text-lg font-heading font-bold text-white mb-2">
              Investment is used to build the network around the technology — not only the technology itself.
            </h4>
            <p className="text-xs sm:text-sm font-heading font-semibold text-[#F4D03F]">
              Technology + People + Businesses + Customers + Professionals + Partners + Market = Connected Ecosystem
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 17.3 — INVESTMENT OPPORTUNITY */}
      <section
        id="investment-opportunity"
        aria-label="Investment Opportunity Section"
        className="relative py-20 sm:py-28 lg:py-32 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto w-full border-t border-white/10"
      >
        {/* Subtle Ambient Gold Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] sm:w-[1000px] h-[450px] bg-gradient-to-b from-[#DAAF37]/[0.08] via-transparent to-transparent blur-[140px] pointer-events-none rounded-full" />

        {/* 1. Section Header & Heading */}
        <div className="max-w-4xl mx-auto text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DAAF37]/10 border border-[#DAAF37]/30 text-[#F4D03F] text-xs font-heading font-semibold uppercase tracking-[0.2em] mb-4 shadow-[0_0_20px_rgba(218,175,55,0.15)]">
            <TrendingUp className="w-3.5 h-3.5 text-[#F4D03F]" />
            17.3. INVESTMENT OPPORTUNITY
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight leading-[1.15] mb-5 text-balance">
            Investment{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFF2B2] via-[#F4D03F] to-[#DAAF37]">
              Opportunity
            </span>
          </h2>

          <p className="text-base sm:text-lg text-white/85 font-sans max-w-3xl mx-auto leading-relaxed mb-6">
            Nexora is building a multi-layer digital ecosystem with Beauty as the core entry market and additional service and expansion opportunities around it. Investment is intended to support technology, business onboarding, customer acquisition, Growth Partner network expansion, marketing, team and operations, and future ecosystem expansion. The investment opportunity should be presented as a structured business investment discussion, not as a guaranteed-return offer.
          </p>
        </div>

        {/* Part 1 — Investment Summary Card */}
        <div className="mb-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-white/[0.05] via-[#0D0D0D] to-[#070707] border border-[#DAAF37]/35 shadow-[0_16px_48px_rgba(0,0,0,0.7)]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-white/10">
            <div>
              <span className="text-xs font-heading font-bold uppercase tracking-wider text-[#DAAF37] block mb-1">
                Executive Overview
              </span>
              <h3 className="text-2xl font-heading font-bold text-white">
                Investment Summary
              </h3>
            </div>
            <span className="text-xs font-heading font-semibold text-[#F4D03F] px-3.5 py-1.5 rounded-full bg-[#DAAF37]/10 border border-[#DAAF37]/30">
              Structured Business Discussion
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { label: 'Total Capital Required', value: '[TO BE FINALIZED]' },
              { label: 'Minimum Investment', value: '[TO BE FINALIZED]' },
              { label: 'Investment Structure', value: '[TO BE FINALIZED]' },
              { label: 'Equity / Ownership Offered', value: '[TO BE FINALIZED]' },
              { label: 'Investment Period', value: '[TO BE FINALIZED]' },
              { label: 'Investor Category', value: '[TO BE FINALIZED]' },
            ].map((item, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#DAAF37]/30 transition-colors">
                <span className="text-[11px] font-heading font-bold uppercase tracking-wider text-white/50 block mb-1.5">
                  {item.label}
                </span>
                <div className="text-lg sm:text-xl font-heading font-bold text-[#F4D03F]">
                  {item.value}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Part 2 — Why This Investment */}
        <div className="mb-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-white/[0.04] via-[#0D0D0D] to-[#070707] border border-white/10">
          <h3 className="text-xl sm:text-2xl font-heading font-bold text-white mb-4">
            Why Invest in Nexora?
          </h3>
          <p className="text-sm text-white/80 font-sans leading-relaxed mb-6">
            The opportunity is based on building a connected ecosystem rather than a single standalone product. Key pillars include:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-6">
            {[
              'Beauty as the core entry ecosystem',
              'Customer network',
              'Business network',
              'Professional / Jobs network',
              'Growth Partner network',
              'Beauty B2B network',
              'Digital / IT services',
              'Advertising layer',
              'Expansion architecture',
            ].map((pillar, idx) => (
              <div key={idx} className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[#DAAF37] flex-shrink-0" />
                <span className="text-xs sm:text-sm font-heading font-semibold text-white/90">{pillar}</span>
              </div>
            ))}
          </div>

          <div className="p-5 rounded-2xl bg-gradient-to-r from-[#DAAF37]/15 via-black to-[#DAAF37]/15 border border-[#DAAF37]/40 text-center">
            <span className="text-xs font-heading font-bold uppercase tracking-wider text-[#DAAF37] block mb-1">
              Core Strategic Thesis
            </span>
            <div className="text-base sm:text-lg font-heading font-bold text-[#F4D03F]">
              One company → Multiple connected business layers → Multiple opportunities for growth
            </div>
          </div>
        </div>

        {/* Part 3 — What the Capital Supports */}
        <div className="mb-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-white/[0.04] via-[#0D0D0D] to-[#070707] border border-white/10">
          <h3 className="text-xl sm:text-2xl font-heading font-bold text-white mb-2">
            Capital Deployment Focus Areas
          </h3>
          <p className="text-xs text-white/60 font-sans mb-6">
            Final percentages are subject to final agreement approval.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { area: 'Marketing & Growth', status: '[TO BE FINALIZED]' },
              { area: 'Technology & Infrastructure', status: '[TO BE FINALIZED]' },
              { area: 'Team & Operations', status: '[TO BE FINALIZED]' },
              { area: 'Business / Salon Onboarding', status: '[TO BE FINALIZED]' },
              { area: 'Growth Partner Network', status: '[TO BE FINALIZED]' },
              { area: 'Reserve / Expansion', status: '[TO BE FINALIZED]' },
            ].map((item, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-between">
                <span className="text-xs sm:text-sm font-heading font-bold text-white">{item.area}</span>
                <span className="text-xs font-heading font-semibold text-[#F4D03F] px-2.5 py-1 rounded-md bg-[#DAAF37]/10 border border-[#DAAF37]/30">
                  {item.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Part 4 — Valuation Basis */}
        <div className="mb-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-white/[0.04] via-[#0D0D0D] to-[#070707] border border-white/10">
          <h3 className="text-xl sm:text-2xl font-heading font-bold text-white mb-4">
            How the Valuation Will Be Considered
          </h3>
          <p className="text-sm text-white/80 font-sans leading-relaxed mb-6">
            The valuation framework will consider the combined business strength across multiple pillars without claiming that valuation is fixed prematurely:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {[
              'Existing revenue streams',
              'Active Beauty ecosystem',
              'Paid IT / Digital Services',
              'Main Website Advertising',
              'Existing technology and product infrastructure',
              'Ready/advanced service-based verticals',
              'Multi-vertical expansion potential',
              'Business network and Growth Partner model',
              'Scalability of the connected ecosystem',
            ].map((val, idx) => (
              <div key={idx} className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center gap-3">
                <span className="w-5 h-5 rounded-full bg-[#DAAF37]/15 border border-[#DAAF37]/30 flex items-center justify-center text-[#F4D03F] text-[10px] font-bold flex-shrink-0">
                  {idx + 1}
                </span>
                <span className="text-xs sm:text-sm font-heading font-semibold text-white/90">{val}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Part 5 — Business Value Structure */}
        <div className="mb-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-white/[0.04] via-[#0D0D0D] to-[#070707] border border-white/10 text-center">
          <h3 className="text-xl sm:text-2xl font-heading font-bold text-white mb-6">
            Nexora Business Value Structure
          </h3>

          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm font-heading font-semibold text-white mb-6">
            {[
              'Beauty Ecosystem',
              'Digital / IT Services',
              'Advertising',
              'Business Network',
              'Professional Network',
              'B2B Network',
              'Service-Based Expansion',
              'Technology Infrastructure',
            ].map((layer, idx, arr) => (
              <React.Fragment key={idx}>
                <div className="px-3 py-2 rounded-xl bg-white/[0.04] border border-white/10 text-white/90">
                  {layer}
                </div>
                {idx < arr.length - 1 && (
                  <span className="text-[#DAAF37] font-bold">+</span>
                )}
              </React.Fragment>
            ))}
          </div>
          <div className="text-[#DAAF37] font-bold text-xl mb-3">↓</div>
          <div className="inline-block px-6 py-3 rounded-2xl bg-[#DAAF37]/20 border border-[#DAAF37]/50 text-[#F4D03F] text-base font-heading font-bold shadow-[0_0_20px_rgba(218,175,55,0.25)]">
            Connected Business Platform
          </div>
          <p className="text-xs text-white/70 font-sans mt-4 max-w-2xl mx-auto">
            The investment is being evaluated against the broader business architecture, not only one product.
          </p>
        </div>

        {/* Part 6 — Investment → Value Creation Flow */}
        <div className="mb-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-white/[0.05] via-[#0D0D0D] to-[#070707] border border-[#DAAF37]/30 shadow-[0_16px_48px_rgba(0,0,0,0.7)] text-center">
          <span className="text-xs font-heading font-bold uppercase tracking-widest text-[#DAAF37] block mb-1">
            Value Creation Mechanics
          </span>
          <h3 className="text-xl sm:text-2xl font-heading font-bold text-white mb-6">
            Investment → Value Creation Flow
          </h3>

          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm font-heading font-semibold text-white mb-4">
            {[
              'INVESTMENT',
              'TECHNOLOGY + PEOPLE',
              'BUSINESS ONBOARDING',
              'CUSTOMER & PROFESSIONAL NETWORK',
              'GROWTH PARTNER EXPANSION',
              'ECOSYSTEM ACTIVITY',
              'REVENUE / BUSINESS GROWTH',
              'LONG-TERM COMPANY VALUE',
            ].map((node, idx, arr) => (
              <React.Fragment key={idx}>
                <div className={`px-3 py-2 rounded-xl border ${idx === 0 || idx === arr.length - 1 ? 'bg-[#DAAF37]/20 border-[#DAAF37]/50 text-[#F4D03F]' : 'bg-white/[0.04] border-white/10 text-white/90'}`}>
                  {node}
                </div>
                {idx < arr.length - 1 && (
                  <span className="text-[#DAAF37] font-bold text-base">↓</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Part 7 — Milestone-Based Funding / Tranches */}
        <div className="mb-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-white/[0.04] via-[#0D0D0D] to-[#070707] border border-white/10">
          <h3 className="text-xl sm:text-2xl font-heading font-bold text-white mb-2">
            Milestone-Based Funding Structure
          </h3>
          <p className="text-xs text-white/60 font-sans mb-6">
            Milestone-based funding structure — details to be finalized with the investment agreement.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { stage: 'Stage 1', title: 'Capital Release', desc: 'Initial Technology / Operations / Market Expansion' },
              { stage: 'Stage 2', title: 'Performance Milestone', desc: 'Next Capital Release' },
              { stage: 'Stage 3', title: 'Network / Business Milestone', desc: 'Next Capital Release' },
              { stage: 'Stage 4', title: 'Expansion Milestone', desc: 'Further Capital Deployment' },
            ].map((stg, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#DAAF37]/30 transition-colors">
                <span className="text-[11px] font-heading font-bold text-[#DAAF37] uppercase tracking-wider block mb-1">
                  {stg.stage}
                </span>
                <h4 className="text-sm font-heading font-bold text-white mb-1">
                  {stg.title}
                </h4>
                <p className="text-xs text-white/60 font-sans">
                  {stg.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Part 8 — Investor Capital Protection / Discipline */}
        <div className="mb-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-white/[0.04] via-[#0D0D0D] to-[#070707] border border-white/10">
          <h3 className="text-xl sm:text-2xl font-heading font-bold text-white mb-4">
            Capital Deployment Discipline
          </h3>
          <p className="text-sm text-white/80 font-sans leading-relaxed mb-6">
            Nexora maintains rigorous governance and capital discipline standards:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              'Capital should be linked to defined business priorities.',
              'Major expansion should follow business readiness.',
              'Performance and progress should be tracked.',
              'Financial reporting should support investor visibility.',
              'Capital use should remain aligned with the approved business plan.',
            ].map((disc, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[#DAAF37] flex-shrink-0" />
                <span className="text-xs sm:text-sm font-heading font-semibold text-white/90">{disc}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Part 9 — Investment Structure Placeholder */}
        <div className="mb-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-white/[0.05] via-[#0D0D0D] to-[#070707] border border-[#DAAF37]/35 shadow-[0_16px_48px_rgba(0,0,0,0.7)]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-white/10">
            <div>
              <span className="text-xs font-heading font-bold uppercase tracking-wider text-[#DAAF37] block mb-1">
                Terms Breakdown
              </span>
              <h3 className="text-2xl font-heading font-bold text-white">
                Proposed Investment Structure
              </h3>
            </div>
            <span className="text-xs font-heading font-semibold text-[#F4D03F] px-3.5 py-1.5 rounded-full bg-[#DAAF37]/10 border border-[#DAAF37]/30">
              Pending Final Approval
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { label: 'Investment Amount', value: '[TO BE FINALIZED]' },
              { label: 'Ownership / Equity', value: '[TO BE FINALIZED]' },
              { label: 'Valuation', value: '[TO BE FINALIZED]' },
              { label: 'Minimum Ticket', value: '[TO BE FINALIZED]' },
              { label: 'Investment Period', value: '[TO BE FINALIZED]' },
              { label: 'Funding Method', value: '[TO BE FINALIZED]' },
            ].map((term, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-white/[0.03] border border-white/10">
                <span className="text-[11px] font-heading font-bold uppercase tracking-wider text-white/50 block mb-1.5">
                  {term.label}
                </span>
                <div className="text-lg sm:text-xl font-heading font-bold text-[#F4D03F]">
                  {term.value}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Part 10 — Investor Message */}
        <div className="p-8 rounded-3xl bg-gradient-to-r from-[#DAAF37]/20 via-black to-[#DAAF37]/20 border border-[#DAAF37]/50 text-center shadow-[0_0_40px_rgba(218,175,55,0.2)]">
          <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white mb-3">
            Invest in the Network, Not Just the Product.
          </h3>
          <p className="text-sm sm:text-base font-sans text-white/85 max-w-2xl mx-auto leading-relaxed">
            Nexora&apos;s investment opportunity is based on building the technology, business relationships, customer network, professional network and expansion infrastructure required to create a connected digital ecosystem.
          </p>
        </div>
      </section>
    </div>
  );
};
