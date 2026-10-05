import React, { useState } from 'react';
import {
  User,
  Store,
  TrendingUp,
  Briefcase,
  Sparkles,
  ArrowRight,
  ExternalLink,
  ShieldAlert,
  Scissors,
} from 'lucide-react';
import { Button } from '../components/common/Button';
import { GlassCard } from '../components/common/GlassCard';
import { SectionHeading } from '../components/common/SectionHeading';
import { SectionDivider } from '../components/common/SectionDivider';
import { FadeIn } from '../components/common/MotionWrapper';
import {
  STAKEHOLDERS,
  PLANNED_REWARD_FRAMEWORK,
  REWARD_DISCLAIMER,
} from '../data/stakeholders';

export const BenefitsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('customer');

  const customerStakeholder = STAKEHOLDERS.find((s) => s.id === 'customer')!;
  const salonOwnerStakeholder = STAKEHOLDERS.find((s) => s.id === 'salon-owner')!;
  const growthPartnerStakeholder = STAKEHOLDERS.find((s) => s.id === 'growth-partner')!;
  const b2bStakeholder = STAKEHOLDERS.find((s) => s.id === 'b2b')!;

  return (
    <div className="w-full">
      {/* Hero Header */}
      <section className="pt-12 pb-12 sm:pt-20 sm:pb-16 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <FadeIn>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DAAF37]/10 border border-[#DAAF37]/30 text-[#F4D03F] text-xs font-heading font-medium tracking-wide uppercase mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F4D03F] animate-pulse" />
            Stakeholders
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#F5F5F5] tracking-tight max-w-4xl mx-auto leading-[1.15] mb-6">
            What does Nexora{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFFFFF] via-[#F4D03F] to-[#DAAF37]">
              give me?
            </span>
          </h1>

          <p className="text-base sm:text-lg lg:text-xl text-white/75 font-sans leading-relaxed max-w-2xl mx-auto mb-6">
            Nexora serves four main groups. Find yours.
          </p>

          <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08] text-xs text-white/50 text-center font-sans max-w-2xl mx-auto mb-10">
            Benefits describe planned and demonstrated capabilities. Availability varies by product. See each product&apos;s status.
          </div>

          {/* Hero Visual Display */}
          <div className="relative max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.9)]">
            <img
              src="/assets/who-benefits-hero.webp"
              alt="Nexora Who Benefits - Customer, Salon Owner, Professional, Growth Partner"
              className="w-full h-auto object-contain select-none"
              loading="eager"
            />
          </div>
        </FadeIn>
      </section>

      {/* 4 Deep Stakeholder Sections */}
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-24">
        {/* 4.1 Customer */}
        <section id="customer" className="scroll-mt-28">
          <GlassCard className="p-8 sm:p-12 border-[#DAAF37]/30" glow="subtle">
            <div className="flex flex-col lg:flex-row items-start justify-between gap-8 mb-8 pb-8 border-b border-white/10">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-[#DAAF37]/15 border border-[#DAAF37]/40 flex items-center justify-center text-[#F4D03F] flex-shrink-0 shadow-[0_0_25px_rgba(218,175,55,0.25)]">
                  <User className="w-8 h-8" />
                </div>
                <div>
                  <span className="text-xs uppercase font-heading font-semibold text-[#DAAF37] tracking-wider block">
                    Participant 01
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-heading font-semibold text-white">
                    {customerStakeholder.name}
                  </h2>
                  <p className="text-sm font-sans text-[#DAAF37] font-medium mt-1">
                    {customerStakeholder.tagline}
                  </p>
                </div>
              </div>
              {customerStakeholder.ctaTarget.startsWith('http') ? (
                <Button href={customerStakeholder.ctaTarget} variant="primary" size="md" icon={<ExternalLink className="w-4 h-4" />}>
                  {customerStakeholder.ctaLabel}
                </Button>
              ) : (
                <Button to={customerStakeholder.ctaTarget} variant="primary" size="md">
                  {customerStakeholder.ctaLabel}
                </Button>
              )}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <div>
                <span className="text-xs uppercase font-heading font-semibold tracking-wider text-white/40 block mb-2">
                  The Problem
                </span>
                <p className="text-sm text-white/75 font-sans leading-relaxed">
                  {customerStakeholder.problem}
                </p>
              </div>
              <div>
                <span className="text-xs uppercase font-heading font-semibold tracking-wider text-[#DAAF37] block mb-2">
                  The Nexora Solution
                </span>
                <p className="text-sm text-white/85 font-sans leading-relaxed">
                  {customerStakeholder.solution}
                </p>
              </div>
            </div>

            {/* Benefits List */}
            <div className="mb-8">
              <span className="text-xs uppercase font-heading font-semibold tracking-wider text-white/50 block mb-3">
                Planned Customer Benefits
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {customerStakeholder.benefits.map((b, i) => (
                  <div key={i} className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-xs text-white/80 font-sans flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#DAAF37]" />
                    <span>{b}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Customer Journey Flow */}
            <div className="pt-6 border-t border-white/10">
              <span className="text-xs uppercase font-heading font-semibold tracking-wider text-white/50 block mb-4">
                Customer Journey Flow
              </span>
              <div className="flex flex-wrap items-center gap-2 text-xs font-heading">
                {customerStakeholder.journeySteps.map((step, idx) => (
                  <React.Fragment key={idx}>
                    <span className="px-3 py-1.5 rounded-lg bg-white/[0.05] border border-white/[0.1] text-white">
                      {step}
                    </span>
                    {idx < customerStakeholder.journeySteps.length - 1 && (
                      <span className="text-[#DAAF37]">→</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </GlassCard>
        </section>

        {/* 4.2 Salon Owner */}
        <section id="salon-owner" className="scroll-mt-28">
          <GlassCard className="p-8 sm:p-12 border-[#DAAF37]/30" glow="subtle">
            <div className="flex flex-col lg:flex-row items-start justify-between gap-8 mb-8 pb-8 border-b border-white/10">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-[#DAAF37]/15 border border-[#DAAF37]/40 flex items-center justify-center text-[#F4D03F] flex-shrink-0 shadow-[0_0_25px_rgba(218,175,55,0.25)]">
                  <Store className="w-8 h-8" />
                </div>
                <div>
                  <span className="text-xs uppercase font-heading font-semibold text-[#DAAF37] tracking-wider block">
                    Participant 02
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-heading font-semibold text-white">
                    {salonOwnerStakeholder.name}
                  </h2>
                  <p className="text-sm font-sans text-[#DAAF37] font-medium mt-1">
                    {salonOwnerStakeholder.tagline}
                  </p>
                </div>
              </div>
              <Button href={salonOwnerStakeholder.ctaTarget} variant="primary" size="md" icon={<ExternalLink className="w-4 h-4" />}>
                {salonOwnerStakeholder.ctaLabel}
              </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <div>
                <span className="text-xs uppercase font-heading font-semibold tracking-wider text-white/40 block mb-2">
                  The Problem
                </span>
                <p className="text-sm text-white/75 font-sans leading-relaxed">
                  {salonOwnerStakeholder.problem}
                </p>
              </div>
              <div>
                <span className="text-xs uppercase font-heading font-semibold tracking-wider text-[#DAAF37] block mb-2">
                  The Nexora Solution
                </span>
                <p className="text-sm text-white/85 font-sans leading-relaxed">
                  {salonOwnerStakeholder.solution}
                </p>
              </div>
            </div>

            {/* Benefits List */}
            <div className="mb-8">
              <span className="text-xs uppercase font-heading font-semibold tracking-wider text-white/50 block mb-3">
                Planned Owner Benefits
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {salonOwnerStakeholder.benefits.map((b, i) => (
                  <div key={i} className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-xs text-white/80 font-sans flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#DAAF37]" />
                    <span>{b}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Owner Journey */}
            <div className="pt-6 border-t border-white/10">
              <span className="text-xs uppercase font-heading font-semibold tracking-wider text-white/50 block mb-4">
                Owner Journey Flow
              </span>
              <div className="flex flex-wrap items-center gap-2 text-xs font-heading">
                {salonOwnerStakeholder.journeySteps.map((step, idx) => (
                  <React.Fragment key={idx}>
                    <span className="px-3 py-1.5 rounded-lg bg-white/[0.05] border border-white/[0.1] text-white">
                      {step}
                    </span>
                    {idx < salonOwnerStakeholder.journeySteps.length - 1 && (
                      <span className="text-[#DAAF37]">→</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </GlassCard>
        </section>

        {/* 4.3 Growth Partner */}
        <section id="growth-partner" className="scroll-mt-28">
          <GlassCard className="p-8 sm:p-12 border-[#DAAF37]/30" glow="subtle">
            <div className="flex flex-col lg:flex-row items-start justify-between gap-8 mb-8 pb-8 border-b border-white/10">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-[#DAAF37]/15 border border-[#DAAF37]/40 flex items-center justify-center text-[#F4D03F] flex-shrink-0 shadow-[0_0_25px_rgba(218,175,55,0.25)]">
                  <TrendingUp className="w-8 h-8" />
                </div>
                <div>
                  <span className="text-xs uppercase font-heading font-semibold text-[#DAAF37] tracking-wider block">
                    Participant 03
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-heading font-semibold text-white">
                    {growthPartnerStakeholder.name}
                  </h2>
                  <p className="text-sm font-sans text-[#DAAF37] font-medium mt-1">
                    {growthPartnerStakeholder.tagline}
                  </p>
                </div>
              </div>
              <Button href={growthPartnerStakeholder.ctaTarget} variant="primary" size="md" icon={<ExternalLink className="w-4 h-4" />}>
                {growthPartnerStakeholder.ctaLabel}
              </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <div>
                <span className="text-xs uppercase font-heading font-semibold tracking-wider text-white/40 block mb-2">
                  The Problem
                </span>
                <p className="text-sm text-white/75 font-sans leading-relaxed">
                  {growthPartnerStakeholder.problem}
                </p>
              </div>
              <div>
                <span className="text-xs uppercase font-heading font-semibold tracking-wider text-[#DAAF37] block mb-2">
                  The Nexora Solution
                </span>
                <p className="text-sm text-white/85 font-sans leading-relaxed">
                  {growthPartnerStakeholder.solution}
                </p>
              </div>
            </div>

            {/* Growth Partner Program Supporting Visual (Directly Inside Section, No Frame/Outline) */}
            <div className="mb-8 overflow-hidden rounded-xl sm:rounded-2xl">
              <img
                src="/assets/growth-partner-framework.webp"
                alt="NEXORA ONE Growth Partner Framework - Scope, Performance and Recognition"
                width={1920}
                height={850}
                className="w-full h-auto object-cover select-none"
                loading="lazy"
              />
            </div>

            {/* Planned Recognition Framework (Illustrative) */}
            <div className="mb-8 pt-6 border-t border-white/10">
              <span className="text-xs uppercase font-heading font-semibold tracking-wider text-[#DAAF37] block mb-3">
                Planned Recognition Framework (Illustrative)
              </span>

              <div className="overflow-x-auto rounded-xl border border-white/10 mb-4">
                <table className="w-full text-left text-xs font-sans">
                  <thead className="bg-white/[0.05] text-[#DAAF37] uppercase font-heading font-semibold">
                    <tr>
                      <th className="py-3 px-4">Milestone</th>
                      <th className="py-3 px-4">Planned Recognition (Generic Item)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/[0.06]">
                    {PLANNED_REWARD_FRAMEWORK.map((item, idx) => (
                      <tr key={idx} className="hover:bg-white/[0.02]">
                        <td className="py-2.5 px-4 font-heading font-medium text-white">{item.milestone}</td>
                        <td className="py-2.5 px-4 text-white/80">{item.recognition}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Mandatory Disclaimer */}
              <div className="p-4 rounded-xl bg-[#DAAF37]/5 border border-[#DAAF37]/25 flex items-start gap-3">
                <ShieldAlert className="w-4 h-4 text-[#DAAF37] flex-shrink-0 mt-0.5" />
                <p className="text-xs text-white/70 font-sans leading-relaxed italic">
                  {REWARD_DISCLAIMER}
                </p>
              </div>
            </div>

            {/* Growth Partner Journey Flow */}
            <div className="pt-6 border-t border-white/10">
              <span className="text-xs uppercase font-heading font-semibold tracking-wider text-white/50 block mb-4">
                Partner Journey Flow
              </span>
              <div className="flex flex-wrap items-center gap-2 text-xs font-heading">
                {growthPartnerStakeholder.journeySteps.map((step, idx) => (
                  <React.Fragment key={idx}>
                    <span className="px-3 py-1.5 rounded-lg bg-white/[0.05] border border-white/[0.1] text-white">
                      {step}
                    </span>
                    {idx < growthPartnerStakeholder.journeySteps.length - 1 && (
                      <span className="text-[#DAAF37]">→</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </GlassCard>
        </section>

        {/* 4.4 B2B Brands / Distributors */}
        <section id="b2b" className="scroll-mt-28">
          <GlassCard className="p-8 sm:p-12 border-[#DAAF37]/30" glow="subtle">
            <div className="flex flex-col lg:flex-row items-start justify-between gap-8 mb-8 pb-8 border-b border-white/10">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-[#DAAF37]/15 border border-[#DAAF37]/40 flex items-center justify-center text-[#F4D03F] flex-shrink-0 shadow-[0_0_25px_rgba(218,175,55,0.25)]">
                  <Briefcase className="w-8 h-8" />
                </div>
                <div>
                  <span className="text-xs uppercase font-heading font-semibold text-[#DAAF37] tracking-wider block">
                    Participant 04
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-heading font-semibold text-white">
                    {b2bStakeholder.name}
                  </h2>
                  <p className="text-sm font-sans text-[#DAAF37] font-medium mt-1">
                    {b2bStakeholder.tagline}
                  </p>
                </div>
              </div>
              <Button href={b2bStakeholder.ctaTarget} variant="primary" size="md" icon={<ExternalLink className="w-4 h-4" />}>
                {b2bStakeholder.ctaLabel}
              </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <div>
                <span className="text-xs uppercase font-heading font-semibold tracking-wider text-white/40 block mb-2">
                  The Problem
                </span>
                <p className="text-sm text-white/75 font-sans leading-relaxed">
                  {b2bStakeholder.problem}
                </p>
              </div>
              <div>
                <span className="text-xs uppercase font-heading font-semibold tracking-wider text-[#DAAF37] block mb-2">
                  The Nexora Solution
                </span>
                <p className="text-sm text-white/85 font-sans leading-relaxed">
                  {b2bStakeholder.solution}
                </p>
              </div>
            </div>

            {/* B2B Flow */}
            <div className="mb-8 pt-6 border-t border-white/10">
              <span className="text-xs uppercase font-heading font-semibold tracking-wider text-white/50 block mb-4">
                Planned B2B Commerce Flow
              </span>
              <div className="flex flex-wrap items-center gap-2 text-xs font-heading">
                {b2bStakeholder.journeySteps.map((step, idx) => (
                  <React.Fragment key={idx}>
                    <span className="px-3.5 py-2 rounded-lg bg-[#DAAF37]/15 border border-[#DAAF37]/35 text-white font-medium">
                      {step}
                    </span>
                    {idx < b2bStakeholder.journeySteps.length - 1 && (
                      <span className="text-[#DAAF37] font-bold">→</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* B2B Benefits */}
            <div className="pt-6 border-t border-white/10">
              <span className="text-xs uppercase font-heading font-semibold tracking-wider text-white/50 block mb-3">
                Planned B2B Capabilities
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {b2bStakeholder.benefits.map((b, i) => (
                  <div key={i} className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-xs text-white/80 font-sans flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#DAAF37]" />
                    <span>{b}</span>
                  </div>
                ))}
              </div>
            </div>
          </GlassCard>
        </section>

        {/* 4.5 Beauty Professionals (Related Stakeholder) */}
        <section id="professionals" className="scroll-mt-28">
          <GlassCard className="p-8 border-white/15">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#DAAF37]/15 border border-[#DAAF37]/30 flex items-center justify-center text-[#F4D03F]">
                  <Scissors className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-heading font-semibold text-white">
                    Beauty Professionals
                  </h3>
                  <p className="text-xs text-white/70 font-sans mt-0.5">
                    Stylists, therapists, technicians and other specialists in salons.
                  </p>
                </div>
              </div>
              <Button to="/products" variant="secondary" size="sm">
                Explore Products
              </Button>
            </div>
          </GlassCard>
        </section>
      </div>

      <div className="py-20 text-center">
        <Button to="/ecosystem" variant="primary" size="lg" icon={<ArrowRight className="w-4 h-4" />}>
          Explore the Ecosystem
        </Button>
      </div>
    </div>
  );
};
