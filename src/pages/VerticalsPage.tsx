import React from 'react';
import { Link } from 'react-router-dom';
import {
  Sparkles,
  ArrowRight,
  ExternalLink,
  Layers,
  Building2,
  UtensilsCrossed,
  Briefcase,
  ShoppingBag,
  Megaphone,
  Cpu,
  CheckCircle2,
} from 'lucide-react';
import { Button } from '../components/common/Button';
import { GlassCard } from '../components/common/GlassCard';
import { SectionHeading } from '../components/common/SectionHeading';
import { SectionDivider } from '../components/common/SectionDivider';
import { StatusBadge } from '../components/common/StatusBadge';
import { FadeIn } from '../components/common/MotionWrapper';
import { VERTICALS_DATA } from '../data/verticals';

export const VerticalsPage: React.FC = () => {
  const beautyVertical = VERTICALS_DATA.find((v) => v.id === 'beauty')!;
  const expansionVerticals = VERTICALS_DATA.filter((v) => v.id !== 'beauty');

  const getVerticalIcon = (id: string) => {
    switch (id) {
      case 'beauty':
        return <Sparkles className="w-6 h-6 text-[#F4D03F]" />;
      case 'real-estate':
        return <Building2 className="w-6 h-6 text-[#DAAF37]" />;
      case 'food':
        return <UtensilsCrossed className="w-6 h-6 text-[#DAAF37]" />;
      case 'jobs':
        return <Briefcase className="w-6 h-6 text-[#DAAF37]" />;
      case 'commerce':
        return <ShoppingBag className="w-6 h-6 text-[#DAAF37]" />;
      case 'advertising':
        return <Megaphone className="w-6 h-6 text-[#DAAF37]" />;
      case 'ai':
        return <Cpu className="w-6 h-6 text-[#DAAF37]" />;
      default:
        return <Layers className="w-6 h-6 text-[#DAAF37]" />;
    }
  };

  return (
    <div className="w-full">
      {/* Hero Header */}
      <section className="pt-12 pb-12 sm:pt-20 sm:pb-16 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          {/* Header Text Area */}
          <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DAAF37]/10 border border-[#DAAF37]/30 text-[#F4D03F] text-xs font-heading font-medium tracking-wide uppercase mb-6 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F4D03F] animate-pulse" />
              Beyond Beauty
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#F5F5F5] tracking-tight mx-auto leading-[1.15] mb-6">
              One architecture.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFFFFF] via-[#F4D03F] to-[#DAAF37]">
                Multiple industries.
              </span>
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-white/75 font-sans leading-relaxed max-w-3xl mx-auto">
              Beauty is where Nexora began. The same connected architecture is planned to extend into other local-commerce verticals. Each card shows its real status.
            </p>
          </div>

          {/* Standalone Large Multi-Industry Ecosystem Visual (Directly Below Description, No Outline/Border/Card/Frame) */}
          <div className="w-full max-w-[1440px] mx-auto overflow-hidden rounded-xl sm:rounded-2xl">
            <img
              src="/assets/verticals-ecosystem-hero.webp"
              alt="NEXORA ONE Connected Multi-Industry Ecosystem Dais and Holographic Network"
              width={1920}
              height={850}
              className="w-full h-auto object-cover select-none"
              loading="eager"
            />
          </div>
        </FadeIn>
      </section>

      {/* Featured Core Ecosystem Spotlight Card: BEAUTY */}
      <section className="pb-16 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <GlassCard
            id="beauty"
            className="p-8 sm:p-12 lg:p-14 border-2 border-[#DAAF37]/60 relative overflow-hidden"
            glow="gold"
          >
            {/* Ambient Gold Radial Beam */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#DAAF37]/20 via-[#F4D03F]/10 to-transparent blur-3xl pointer-events-none" />

            <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 mb-8 pb-8 border-b border-white/10">
              <div className="flex items-center gap-5">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#F4D03F]/30 to-[#DAAF37]/10 border border-[#DAAF37] flex items-center justify-center shadow-[0_0_25px_rgba(218,175,55,0.35)] flex-shrink-0">
                  <Sparkles className="w-8 h-8 text-[#F4D03F]" />
                </div>
                <div>
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-0.5 rounded-full bg-[#DAAF37] text-[#0A0A0A] font-heading font-bold text-xs uppercase tracking-wider">
                      Core Ecosystem
                    </span>
                    <span className="text-xs text-[#DAAF37] font-sans font-medium">
                      {beautyVertical.statusText}
                    </span>
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white mt-1">
                    {beautyVertical.name}
                  </h2>
                  <p className="text-sm font-sans text-[#DAAF37] font-medium mt-0.5">
                    {beautyVertical.oneLiner}
                  </p>
                </div>
              </div>

              <Button
                to={beautyVertical.ctaTarget}
                variant="primary"
                size="lg"
                icon={<ArrowRight className="w-4 h-4" />}
                className="whitespace-nowrap shadow-[0_4px_25px_rgba(218,175,55,0.4)]"
              >
                {beautyVertical.ctaText}
              </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-10">
              <div className="lg:col-span-7">
                <h3 className="text-base font-heading font-semibold text-white mb-2">
                  Ecosystem Architecture
                </h3>
                <p className="text-sm text-white/80 font-sans leading-relaxed mb-6">
                  {beautyVertical.description}
                </p>

                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.08] mb-6">
                  <span className="text-xs font-heading font-semibold uppercase tracking-wider text-[#DAAF37] block mb-1">
                    Core Opportunity
                  </span>
                  <p className="text-sm text-white/90 font-sans">
                    {beautyVertical.coreOpportunity}
                  </p>
                </div>

                <div className="text-xs text-white/60 font-sans">
                  <span className="text-white/80 font-medium">Target Stakeholders:</span>{' '}
                  {beautyVertical.audience}
                </div>
              </div>

              <div className="lg:col-span-5 bg-white/[0.03] rounded-2xl p-6 border border-white/[0.08] flex flex-col justify-between">
                <div className="mb-5 overflow-hidden rounded-xl border border-[#DAAF37]/30 shadow-[0_4px_20px_rgba(0,0,0,0.5)] aspect-[4/3] sm:aspect-[16/10] relative group">
                  <img
                    src="/assets/vert-beauty.webp"
                    alt="Luxury modern beauty salon interior"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/80 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-3 left-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#DAAF37] animate-pulse" />
                    <span className="text-[11px] font-heading font-medium text-[#F4D03F] uppercase tracking-wider">
                      Core Ecosystem Environment
                    </span>
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-heading font-semibold uppercase tracking-wider text-[#DAAF37] mb-3">
                    Connected Beauty Platforms
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {beautyVertical.relatedProducts.map((prod) => (
                      <div
                        key={prod}
                        className="px-3 py-2 rounded-lg bg-white/[0.03] border border-white/[0.06] text-xs font-sans text-white/85 flex items-center gap-2"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#DAAF37]" />
                        <span className="truncate">{prod}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 pt-3 border-t border-white/[0.08] text-right">
                    <Link
                      to="/products"
                      className="text-xs text-[#DAAF37] hover:underline font-heading font-medium inline-flex items-center gap-1"
                    >
                      <span>View all products</span>
                      <span>→</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </GlassCard>
        </FadeIn>
      </section>

      {/* Section Divider */}
      <SectionDivider />

      {/* Expansion Verticals Grid */}
      <section className="py-12 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Planned Multi-Vertical Layers"
          title="Horizontal Expansion"
          titleAccent="Verticals"
          subtitle="Beyond Beauty, the Nexora One architecture is planned to interconnect commerce, real estate, hospitality, workforce, and advertising."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {expansionVerticals.map((vert) => (
            <GlassCard
              key={vert.id}
              id={vert.id}
              className="p-6 sm:p-7 flex flex-col justify-between border-white/[0.12] scroll-mt-28"
            >
              <div>
                {/* Header & Status */}
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#DAAF37]/15 border border-[#DAAF37]/30 flex items-center justify-center flex-shrink-0">
                      {getVerticalIcon(vert.id)}
                    </div>
                    <div>
                      <h3 className="text-xl font-heading font-semibold text-white tracking-tight leading-snug">
                        {vert.name}
                      </h3>
                      <p className="text-xs text-[#DAAF37] font-medium font-sans">
                        {vert.oneLiner}
                      </p>
                    </div>
                  </div>
                  <StatusBadge status={vert.status} />
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-white/75 font-sans leading-relaxed mb-4">
                  {vert.description}
                </p>

                {/* Core Opportunity Box */}
                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08] mb-4 text-xs font-sans text-white/80 leading-relaxed">
                  <span className="text-white/40 block mb-1 uppercase font-heading font-medium text-[10px]">
                    Core Opportunity:
                  </span>
                  {vert.coreOpportunity}
                </div>

                {/* Audience & Products */}
                <div className="space-y-1.5 text-xs text-white/50 font-sans mb-6">
                  <div>
                    <span className="text-white/70">Audience:</span> {vert.audience}
                  </div>
                  <div>
                    <span className="text-white/70">Related Products:</span>{' '}
                    <span className="text-white/90">{vert.relatedProducts.join(', ')}</span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-2 border-t border-white/[0.08]">
                {vert.ctaTarget.startsWith('http') ? (
                  <Button
                    href={vert.ctaTarget}
                    variant="primary"
                    size="sm"
                    className="w-full text-xs"
                    icon={<ExternalLink className="w-3.5 h-3.5" />}
                  >
                    {vert.ctaText}
                  </Button>
                ) : vert.ctaTarget.startsWith('/') ? (
                  <Button
                    to={vert.ctaTarget}
                    variant="secondary"
                    size="sm"
                    className="w-full text-xs"
                  >
                    {vert.ctaText}
                  </Button>
                ) : (
                  <div className="p-2 text-center rounded-lg bg-white/[0.02] border border-white/[0.05] text-xs text-white/50 font-sans">
                    Status: {vert.statusText}
                  </div>
                )}
              </div>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* Multi-Vertical Repeatable Architecture Pattern (Architecture §15) */}
      <section className="py-20 sm:py-28 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 border-t border-white/[0.08]">
        <GlassCard className="p-8 sm:p-12 text-center" glow="subtle">
          <span className="text-xs uppercase font-heading font-semibold tracking-wider text-[#DAAF37] block mb-2">
            Expansion Methodology
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-4">
            A Reusable Architectural Pattern
          </h2>
          <p className="text-sm sm:text-base text-white/70 font-sans max-w-2xl mx-auto mb-10 leading-relaxed">
            Every expansion vertical follows the same disciplined structure: defined stakeholders, specialized platform layers, shared commerce and advertising mechanisms, and cross-vertical synergy.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm font-heading font-medium">
            <span className="px-4 py-2 rounded-xl bg-white/[0.05] border border-white/10 text-white">
              Nexora One Core
            </span>
            <span className="text-[#DAAF37]">→</span>
            <span className="px-4 py-2 rounded-xl bg-white/[0.05] border border-white/10 text-white">
              Target Vertical
            </span>
            <span className="text-[#DAAF37]">→</span>
            <span className="px-4 py-2 rounded-xl bg-white/[0.05] border border-white/10 text-white">
              Stakeholder Mapping
            </span>
            <span className="text-[#DAAF37]">→</span>
            <span className="px-4 py-2 rounded-xl bg-white/[0.05] border border-white/10 text-white">
              Platform Tools
            </span>
            <span className="text-[#DAAF37]">→</span>
            <span className="px-4 py-2 rounded-xl bg-[#DAAF37]/20 border border-[#DAAF37]/40 text-[#F4D03F]">
              Ecosystem Connectivity
            </span>
          </div>

          <div className="mt-12">
            <Button to="/ecosystem" variant="primary" size="md" icon={<ArrowRight className="w-4 h-4" />}>
              Explore Full Ecosystem Map
            </Button>
          </div>
        </GlassCard>
      </section>
    </div>
  );
};
