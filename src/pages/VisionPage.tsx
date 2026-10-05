import React from 'react';
import {
  Compass,
  Target,
  Sparkles,
  ArrowRight,
  SplitSquareVertical,
  Network,
  Boxes,
  Users,
  Briefcase,
  Layers,
  Bot,
  RefreshCw,
} from 'lucide-react';
import { Button } from '../components/common/Button';
import { GlassCard } from '../components/common/GlassCard';
import { SectionHeading } from '../components/common/SectionHeading';
import { SectionDivider } from '../components/common/SectionDivider';
import { FadeIn } from '../components/common/MotionWrapper';
import {
  VISION_STATEMENT,
  MISSION_STATEMENT,
  LONG_TERM_DIRECTION,
  MISSION_PILLARS,
  FRAGMENTATION_PROBLEM,
  NEXORA_APPROACH,
} from '../data/vision';

export const VisionPage: React.FC = () => {
  const getPillarIcon = (iconName: string) => {
    switch (iconName) {
      case 'Boxes':
        return <Boxes className="w-5 h-5" />;
      case 'Users':
        return <Users className="w-5 h-5" />;
      case 'Target':
        return <Target className="w-5 h-5" />;
      case 'Briefcase':
        return <Briefcase className="w-5 h-5" />;
      case 'Network':
        return <Network className="w-5 h-5" />;
      case 'Layers':
        return <Layers className="w-5 h-5" />;
      case 'Bot':
        return <Bot className="w-5 h-5" />;
      case 'RefreshCw':
        return <RefreshCw className="w-5 h-5" />;
      default:
        return <Sparkles className="w-5 h-5" />;
    }
  };

  return (
    <div className="w-full">
      {/* Hero Section with Seamless Gold Earth Network Visual */}
      <section className="relative pt-12 pb-20 sm:pt-20 sm:pb-28 overflow-hidden bg-[#0A0A0A]">
        {/* Cinematic Glowing Gold Earth Background on Right */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
          <div className="absolute right-0 top-0 bottom-0 w-full lg:w-[65%] xl:w-[60%] h-full origin-top-right">
            <img
              src="/assets/vision-mission-hero.webp"
              alt="Nexora Connected Earth Network"
              className="w-full h-full object-cover object-right opacity-90 lg:opacity-100 select-none"
              loading="eager"
            />
            {/* Seamless Left Gradient into Pure Deep Black */}
            <div className="absolute inset-y-0 left-0 w-2/5 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/85 to-transparent pointer-events-none" />
            <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#0A0A0A] to-transparent pointer-events-none" />
            <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#0A0A0A] to-transparent pointer-events-none" />
          </div>

          {/* Left Dark Shade for 100% Typography Readability */}
          <div className="absolute inset-y-0 left-0 w-full lg:w-[58%] bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/95 to-transparent z-1" />

          {/* Ambient Warm Golden Rim Glow */}
          <div className="absolute top-1/4 right-[15%] w-[500px] h-[500px] bg-radial from-[#DAAF37]/20 via-[#DAAF37]/5 to-transparent blur-[120px] pointer-events-none" />
          
          {/* Subtle gold bokeh particles */}
          <div className="absolute top-[25%] left-[30%] w-2 h-2 rounded-full bg-[#F4D03F]/80 blur-[0.5px] animate-pulse" />
          <div className="absolute bottom-[30%] left-[20%] w-2.5 h-2.5 rounded-full bg-[#DAAF37]/50 blur-[1px]" />
          <div className="absolute top-[40%] right-[35%] w-2 h-2 rounded-full bg-[#FFF2B2]/90 blur-[0.5px] animate-pulse" />
        </div>

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[440px] lg:min-h-[500px]">
            {/* Left Column: Heading & Vision Statement */}
            <FadeIn className="lg:col-span-7 xl:col-span-6 flex flex-col items-start text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DAAF37]/10 border border-[#DAAF37]/40 text-[#F4D03F] text-xs font-heading font-medium tracking-wider uppercase mb-5 shadow-[0_0_15px_rgba(218,175,55,0.15)]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F4D03F] animate-pulse" />
                Why Nexora exists
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#F5F5F5] tracking-tight leading-[1.12] mb-5">
                Technology should connect industries,{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFFFFF] via-[#F4D03F] to-[#DAAF37]">
                  not keep them fragmented.
                </span>
              </h1>

              <p className="text-base sm:text-lg lg:text-xl text-white/75 font-sans leading-relaxed max-w-xl mb-8">
                Nexora One is built on one idea: the people in an industry — customers, businesses, professionals, partners and suppliers — work best when they are connected.
              </p>

              {/* Explore Our Vision CTA Button */}
              <div>
                <a
                  href="#mission-pillars"
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-gradient-to-r from-[#F4D03F] via-[#E8BE35] to-[#DAAF37] hover:from-[#FFF2B2] hover:to-[#F4D03F] text-[#0A0A0A] font-heading font-bold text-sm tracking-wide shadow-[0_4px_25px_rgba(218,175,55,0.4)] hover:shadow-[0_4px_35px_rgba(218,175,55,0.65)] hover:scale-105 active:scale-95 transition-all duration-200"
                >
                  <span>Explore Our Vision</span>
                  <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                </a>
              </div>
            </FadeIn>

            {/* Right Column: Space for the 3D globe visual on desktop */}
            <div className="hidden lg:block lg:col-span-5 xl:col-span-6 min-h-[440px] pointer-events-none" aria-hidden="true" />
          </div>
        </div>
      </section>

      {/* 3 Large Glass Cards joined by vertical line */}
      <section id="mission-pillars" className="py-12 max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Vertical Gold Connecting Line */}
        <div className="hidden md:block absolute top-12 bottom-12 left-1/2 -translate-x-1/2 w-[1px] bg-gradient-to-b from-transparent via-[#DAAF37]/50 to-transparent pointer-events-none" />

        <div className="space-y-12">
          {/* Card 1: Vision */}
          <FadeIn direction="up">
            <GlassCard className="p-8 sm:p-10 relative overflow-hidden" glow="subtle">
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#DAAF37]/20 to-[#DAAF37]/5 border border-[#DAAF37]/40 flex items-center justify-center text-[#F4D03F] flex-shrink-0 shadow-[0_0_20px_rgba(218,175,55,0.2)]">
                  <Compass className="w-7 h-7" />
                </div>
                <div>
                  <span className="text-xs uppercase font-heading font-semibold text-[#DAAF37] tracking-widest block mb-1">
                    Foundational Vision
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-heading font-semibold text-white mb-4">
                    Our Vision
                  </h2>
                  <blockquote className="text-base sm:text-lg text-white/85 font-sans leading-relaxed border-l-2 border-[#DAAF37]/60 pl-4 py-1 italic">
                    {VISION_STATEMENT}
                  </blockquote>
                </div>
              </div>
            </GlassCard>
          </FadeIn>

          {/* Card 2: Mission */}
          <FadeIn direction="up" delay={0.1}>
            <GlassCard className="p-8 sm:p-10 relative overflow-hidden" glow="subtle">
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#DAAF37]/20 to-[#DAAF37]/5 border border-[#DAAF37]/40 flex items-center justify-center text-[#F4D03F] flex-shrink-0 shadow-[0_0_20px_rgba(218,175,55,0.2)]">
                  <Target className="w-7 h-7" />
                </div>
                <div>
                  <span className="text-xs uppercase font-heading font-semibold text-[#DAAF37] tracking-widest block mb-1">
                    Core Objective
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-heading font-semibold text-white mb-4">
                    Our Mission
                  </h2>
                  <blockquote className="text-base sm:text-lg text-white/85 font-sans leading-relaxed border-l-2 border-[#DAAF37]/60 pl-4 py-1 italic">
                    {MISSION_STATEMENT}
                  </blockquote>
                </div>
              </div>
            </GlassCard>
          </FadeIn>

          {/* Card 3: Long-term Direction */}
          <FadeIn direction="up" delay={0.2}>
            <GlassCard className="p-8 sm:p-10 relative overflow-hidden" glow="subtle">
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#DAAF37]/20 to-[#DAAF37]/5 border border-[#DAAF37]/40 flex items-center justify-center text-[#F4D03F] flex-shrink-0 shadow-[0_0_20px_rgba(218,175,55,0.2)]">
                  <Sparkles className="w-7 h-7" />
                </div>
                <div>
                  <span className="text-xs uppercase font-heading font-semibold text-[#DAAF37] tracking-widest block mb-1">
                    Strategic Horizon
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-heading font-semibold text-white mb-4">
                    Long-term Direction
                  </h2>
                  <p className="text-base text-white/80 font-sans leading-relaxed">
                    {LONG_TERM_DIRECTION}
                  </p>
                </div>
              </div>
            </GlassCard>
          </FadeIn>
        </div>
      </section>

      <SectionDivider />

      {/* 8 Mission Pillars in a 2x4 Grid */}
      <section className="py-16 sm:py-24 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Mission Pillars"
          title="Eight Structural Pillars of"
          titleAccent="Our Mission"
          subtitle="How Nexora translates high-level ecosystem principles into concrete digital capabilities."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {MISSION_PILLARS.map((pillar) => (
            <GlassCard key={pillar.id} className="p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#DAAF37]/15 border border-[#DAAF37]/30 flex items-center justify-center text-[#F4D03F]">
                    {getPillarIcon(pillar.iconName)}
                  </div>
                  <span className="text-xs font-heading font-bold text-[#DAAF37]">
                    0{pillar.id}
                  </span>
                </div>
                <h3 className="text-base font-heading font-semibold text-white mb-2">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-white/70 font-sans leading-relaxed">
                  {pillar.copy}
                </p>
              </div>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* The Problem: Fragmentation & The Nexora Approach */}
      <section className="py-16 sm:py-24 border-t border-white/[0.08] bg-white/[0.01]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* The Problem */}
            <GlassCard className="p-8 sm:p-10 border-red-500/20">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.05] border border-white/10 text-white/60 text-xs font-heading uppercase mb-4">
                <SplitSquareVertical className="w-3.5 h-3.5 text-red-400" />
                {FRAGMENTATION_PROBLEM.label}
              </div>
              <h3 className="text-2xl font-heading font-semibold text-white mb-4">
                {FRAGMENTATION_PROBLEM.title}
              </h3>
              <p className="text-sm sm:text-base text-white/75 font-sans leading-relaxed">
                {FRAGMENTATION_PROBLEM.body}
              </p>
            </GlassCard>

            {/* The Nexora Approach */}
            <GlassCard className="p-8 sm:p-10 border-[#DAAF37]/40" glow="subtle">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#DAAF37]/10 border border-[#DAAF37]/30 text-[#F4D03F] text-xs font-heading uppercase mb-4">
                <Sparkles className="w-3.5 h-3.5" />
                {NEXORA_APPROACH.label}
              </div>
              <h3 className="text-2xl font-heading font-semibold text-white mb-4">
                {NEXORA_APPROACH.title}
              </h3>
              <p className="text-sm sm:text-base text-white/75 font-sans leading-relaxed">
                {NEXORA_APPROACH.body}
              </p>
            </GlassCard>
          </div>

          {/* Closing Section CTA */}
          <div className="mt-16 text-center">
            <Button to="/ecosystem" variant="primary" size="lg" icon={<ArrowRight className="w-4 h-4" />}>
              Explore the Ecosystem
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};
