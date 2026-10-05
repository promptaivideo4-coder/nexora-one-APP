import React from 'react';
import { motion } from 'framer-motion';
import {
  FileText,
  AlertCircle,
  CheckCircle2,
  XCircle,
  Clock,
  Layers,
  ShieldCheck,
  Search,
  Scale,
  ExternalLink,
} from 'lucide-react';
import { Button } from '../components/common/Button';
import { GlassCard } from '../components/common/GlassCard';
import { SectionHeading } from '../components/common/SectionHeading';
import { SectionDivider } from '../components/common/SectionDivider';
import { FadeIn } from '../components/common/MotionWrapper';
import {
  RESEARCH_OBJECTIVE,
  KNOWN_FINDING,
  METHODOLOGY_POINTS,
  FEATURE_MATRIX,
  ARCHITECTURE_MATRIX,
  CANDIDATE_PLATFORMS,
  WORDING_GUIDELINES,
  CellStatus,
} from '../data/research';

export const ResearchPage: React.FC = () => {
  const renderCellStatus = (status: CellStatus) => {
    switch (status) {
      case 'Observed':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-heading font-medium bg-[#DAAF37]/20 border border-[#DAAF37]/50 text-[#F4D03F]">
            <CheckCircle2 className="w-3 h-3" />
            <span>Observed</span>
          </span>
        );
      case 'Not observed':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-heading font-medium bg-white/[0.04] border border-white/20 text-white/50">
            <XCircle className="w-3 h-3 text-white/40" />
            <span>Not observed</span>
          </span>
        );
      case 'Pending':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-heading font-medium bg-white/[0.05] border border-dashed border-white/30 text-white/60">
            <Clock className="w-3 h-3 text-white/40" />
            <span>Pending</span>
          </span>
        );
    }
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="pt-12 pb-14 sm:pt-20 sm:pb-20 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          {/* Header Text Area */}
          <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DAAF37]/10 border border-[#DAAF37]/30 text-[#F4D03F] text-xs font-heading font-medium tracking-wide uppercase mb-6 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F4D03F] animate-pulse" />
              EVIDENCE & MARKET INTELLIGENCE
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#F5F5F5] tracking-tight mx-auto leading-[1.15] mb-6">
              Market Research &{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFFFFF] via-[#F4D03F] to-[#DAAF37]">
                Differentiation
              </span>
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-white/80 font-sans leading-relaxed max-w-3xl mx-auto">
              Understanding the existing landscape before defining the Nexora architecture.
            </p>
          </div>

          {/* Standalone Large Market Research Visual (Directly Below Subtitle, No Frame/Card/Border) */}
          <div className="w-full max-w-[1440px] mx-auto overflow-hidden rounded-xl sm:rounded-2xl">
            <img
              src="/assets/market-research-hero.webp"
              alt="NEXORA ONE Market Research and Differentiation Intelligence Dashboard"
              width={1920}
              height={850}
              className="w-full h-auto object-cover select-none"
              loading="eager"
            />
          </div>
        </FadeIn>
      </section>

      {/* 9.1 & 9.2 Objective and Known Finding Cards */}
      <section className="pb-16 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Objective */}
          <GlassCard className="p-8 sm:p-10 border-[#DAAF37]/30" glow="subtle">
            <div className="flex items-center gap-3.5 mb-5">
              <div className="w-12 h-12 rounded-xl bg-[#DAAF37]/15 border border-[#DAAF37]/35 flex items-center justify-center text-[#F4D03F]">
                <Search className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs uppercase font-heading font-semibold text-[#DAAF37] tracking-wider block">
                  Foundational Study
                </span>
                <h2 className="text-2xl font-heading font-semibold text-white">
                  Research Objective
                </h2>
              </div>
            </div>
            <p className="text-sm sm:text-base text-white/80 font-sans leading-relaxed">
              {RESEARCH_OBJECTIVE}
            </p>
          </GlassCard>

          {/* Known Finding */}
          <GlassCard className="p-8 sm:p-10 border-[#DAAF37]/30" glow="subtle">
            <div className="flex items-center gap-3.5 mb-5">
              <div className="w-12 h-12 rounded-xl bg-[#DAAF37]/15 border border-[#DAAF37]/35 flex items-center justify-center text-[#F4D03F]">
                <Scale className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs uppercase font-heading font-semibold text-[#DAAF37] tracking-wider block">
                  Project Memory Reference
                </span>
                <h2 className="text-2xl font-heading font-semibold text-white">
                  Known Finding
                </h2>
              </div>
            </div>
            <p className="text-sm sm:text-base text-white/80 font-sans leading-relaxed">
              {KNOWN_FINDING}
            </p>
          </GlassCard>
        </div>

        {/* 9.3 Methodology Card */}
        <GlassCard className="p-8 sm:p-10 border-white/15 mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-white">
              <FileText className="w-4 h-4" />
            </div>
            <h3 className="text-xl font-heading font-semibold text-white">
              Research Methodology & Parameters
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {METHODOLOGY_POINTS.map((point, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.08] text-xs sm:text-sm text-white/80 font-sans flex items-start gap-3"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#DAAF37] flex-shrink-0 mt-2" />
                <span className="leading-relaxed">{point}</span>
              </div>
            ))}
          </div>

          <div className="p-4 rounded-xl bg-[#DAAF37]/5 border border-[#DAAF37]/30 flex items-center gap-3 text-xs text-[#F4D03F] font-sans">
            <AlertCircle className="w-4 h-4 text-[#DAAF37] flex-shrink-0" />
            <span>
              Release Gate Status: Platform candidate list is scoped and monitored. Final competitor audit data is being verified with public review dates.
            </span>
          </div>
        </GlassCard>
      </section>

      {/* 9.5 Feature Matrix Table */}
      <section className="py-12 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Empirical Analysis"
          title="Industry Feature"
          titleAccent="Comparison Matrix"
          subtitle="Fixed analytical categories assessing public market availability across conventional software compared with the Nexora connected architecture."
        />

        {/* Legend */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-8 text-xs font-sans">
          <span className="text-white/50">Classification Legend:</span>
          <span className="inline-flex items-center gap-1.5 text-white/80">
            <span className="w-2 h-2 rounded-full bg-[#DAAF37]" />
            Observed in public materials
          </span>
          <span className="inline-flex items-center gap-1.5 text-white/60">
            <span className="w-2 h-2 rounded-full bg-white/30" />
            Not observed in public materials
          </span>
          <span className="inline-flex items-center gap-1.5 text-white/50">
            <span className="w-2 h-2 rounded-full border border-dashed border-white/50" />
            Pending verification / emerging
          </span>
        </div>

        {/* Feature Table Container */}
        <GlassCard className="p-2 sm:p-6 overflow-hidden border-white/15">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm font-sans border-collapse">
              <thead>
                <tr className="border-b border-white/15 text-white uppercase font-heading text-[11px] tracking-wider bg-white/[0.04]">
                  <th className="py-4 px-4 sm:px-6">Feature / Capability</th>
                  <th className="py-4 px-3 sm:px-4">Domain</th>
                  <th className="py-4 px-3 sm:px-4">Conventional Software</th>
                  <th className="py-4 px-3 sm:px-4">Nexora One Architecture</th>
                  <th className="py-4 px-4 sm:px-6">Observation Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.08]">
                {FEATURE_MATRIX.map((row, idx) => (
                  <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                    <td className="py-3.5 px-4 sm:px-6 font-heading font-medium text-white">
                      {row.featureName}
                    </td>
                    <td className="py-3.5 px-3 sm:px-4 text-white/60 font-mono text-xs">
                      {row.category}
                    </td>
                    <td className="py-3.5 px-3 sm:px-4">
                      {renderCellStatus(row.industryStandard)}
                    </td>
                    <td className="py-3.5 px-3 sm:px-4">
                      {renderCellStatus(row.nexoraArchitecture)}
                    </td>
                    <td className="py-3.5 px-4 sm:px-6 text-xs text-white/65 font-sans leading-relaxed">
                      {row.notes}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </GlassCard>
      </section>

      <SectionDivider />

      {/* 9.6 Architecture Matrix (Qualitative) */}
      <section className="py-12 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Architectural Differentiation"
          title="Structural & Architectural"
          titleAccent="Comparison"
          subtitle="Nexora's differentiation is founded upon the combination of layers and system-level connectivity rather than an isolated feature."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {ARCHITECTURE_MATRIX.map((dim, idx) => (
            <GlassCard key={idx} className="p-6 flex flex-col justify-between">
              <div>
                <div className="text-xs font-heading font-bold text-[#DAAF37] uppercase tracking-wider mb-2">
                  Dimension 0{idx + 1}
                </div>
                <h3 className="text-lg font-heading font-semibold text-white mb-4">
                  {dim.dimension}
                </h3>

                <div className="space-y-4 text-xs sm:text-sm font-sans">
                  <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08]">
                    <span className="text-[10px] uppercase font-heading font-semibold text-white/40 block mb-1">
                      Conventional Pattern
                    </span>
                    <p className="text-white/70 leading-relaxed">
                      {dim.conventionalApproach}
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#DAAF37]/10 border border-[#DAAF37]/30">
                    <span className="text-[10px] uppercase font-heading font-semibold text-[#DAAF37] block mb-1">
                      Nexora One Pattern
                    </span>
                    <p className="text-white/90 font-medium leading-relaxed">
                      {dim.nexoraApproach}
                    </p>
                  </div>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* 9.8 Nexora Architecture Statement & 9.9 Qualified Differentiation Statement */}
      <section className="py-16 sm:py-24 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <GlassCard className="p-8 sm:p-12 lg:p-14 border-[#DAAF37]/50 text-center" glow="gold">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#DAAF37]/15 border border-[#DAAF37]/40 text-[#F4D03F] text-xs font-heading font-medium tracking-wide uppercase mb-6">
            Synthesized Differentiation
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-serif font-bold text-white mb-6">
            A New Architecture for a Connected Beauty Industry Ecosystem
          </h2>

          <p className="text-base sm:text-lg text-white/85 font-sans leading-relaxed max-w-3xl mx-auto mb-10">
            The Nexora One combination of layers: customer-first hierarchy, a connected multi-product ecosystem, white-label salon websites and apps, a Growth Partner network, a B2B beauty distribution layer, and planned Beauty-to-multi-vertical expansion.
          </p>

          <div className="p-4 rounded-xl bg-white/[0.04] border border-white/10 max-w-2xl mx-auto text-xs text-white/60 font-sans italic">
            &ldquo;Within our defined research scope, we describe where the Nexora One architecture sits within the market as a systemic combination of interconnected layers.&rdquo;
          </div>
        </GlassCard>
      </section>

      {/* 9.9 Allowed vs Disallowed Wording Compliance Table */}
      <section className="py-12 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="text-xs uppercase font-heading font-semibold tracking-wider text-[#DAAF37] block mb-1">
            Governance & Compliance
          </span>
          <h3 className="text-xl sm:text-2xl font-heading font-semibold text-white">
            Objective Claim Governance Policy
          </h3>
          <p className="text-xs sm:text-sm text-white/60 font-sans mt-1">
            Nexora One strictly forbids unproven claims, vanity figures, and superlative hype.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Allowed */}
          <GlassCard className="p-6 border-emerald-500/30">
            <div className="flex items-center gap-2 mb-4 text-emerald-400 font-heading font-semibold text-sm">
              <CheckCircle2 className="w-4 h-4" />
              <span>Allowed Qualified Wording</span>
            </div>
            <ul className="space-y-3 font-sans text-xs sm:text-sm">
              {WORDING_GUIDELINES.filter((w) => w.status === 'Allowed').map((item, i) => (
                <li key={i} className="p-3 rounded-lg bg-white/[0.03] border border-white/[0.06]">
                  <div className="font-heading font-medium text-white mb-0.5">
                    &ldquo;{item.text}&rdquo;
                  </div>
                  <div className="text-white/50 text-xs">{item.rationale}</div>
                </li>
              ))}
            </ul>
          </GlassCard>

          {/* Disallowed */}
          <GlassCard className="p-6 border-red-500/30">
            <div className="flex items-center gap-2 mb-4 text-red-400 font-heading font-semibold text-sm">
              <XCircle className="w-4 h-4" />
              <span>Disallowed Absolute Claims</span>
            </div>
            <ul className="space-y-3 font-sans text-xs sm:text-sm">
              {WORDING_GUIDELINES.filter((w) => w.status === 'Disallowed').map((item, i) => (
                <li key={i} className="p-3 rounded-lg bg-white/[0.03] border border-white/[0.06]">
                  <div className="font-heading font-medium text-white/70 line-through mb-0.5">
                    &ldquo;{item.text}&rdquo;
                  </div>
                  <div className="text-red-400/80 text-xs">{item.rationale}</div>
                </li>
              ))}
            </ul>
          </GlassCard>
        </div>
      </section>

      {/* 9.10 Candidate Reference Platforms & Disclaimer */}
      <section className="py-16 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <GlassCard className="p-8 border-white/10 text-center">
          <span className="text-xs uppercase font-heading font-semibold text-white/40 tracking-wider block mb-2">
            Scope Overview
          </span>
          <h4 className="text-base font-heading font-semibold text-white mb-3">
            Candidate Platforms Under Review
          </h4>
          <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
            {CANDIDATE_PLATFORMS.map((p) => (
              <span
                key={p.name}
                className="px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs text-white/75 font-sans"
              >
                {p.name} ({p.category})
              </span>
            ))}
          </div>

          <p className="text-xs text-white/50 font-sans max-w-2xl mx-auto italic">
            Research reflects publicly available information on the stated review date and may change. Detailed comparison data is being finalized and will be published with sources and review date.
          </p>
        </GlassCard>
      </section>
    </div>
  );
};
