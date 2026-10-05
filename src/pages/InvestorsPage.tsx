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
    </div>
  );
};
