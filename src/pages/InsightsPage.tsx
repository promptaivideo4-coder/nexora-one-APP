import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  BookOpen,
  ChevronDown,
  ChevronUp,
  Sparkles,
  ArrowRight,
  Tag,
  Calendar,
  Layers,
  CheckCircle2,
} from 'lucide-react';
import { Button } from '../components/common/Button';
import { GlassCard } from '../components/common/GlassCard';
import { SectionHeading } from '../components/common/SectionHeading';
import { SectionDivider } from '../components/common/SectionDivider';
import { FadeIn } from '../components/common/MotionWrapper';
import { INSIGHT_CATEGORIES, INSIGHTS_DATA } from '../data/insights';

export const InsightsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [expandedId, setExpandedId] = useState<string | null>('ins-01');

  const filteredInsights =
    selectedCategory === 'All'
      ? INSIGHTS_DATA
      : INSIGHTS_DATA.filter((item) => item.category === selectedCategory);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="w-full">
      {/* Hero Header with Standalone Large Visual */}
      <section className="pt-12 pb-12 sm:pt-20 sm:pb-16 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          {/* Header Text Area */}
          <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DAAF37]/10 border border-[#DAAF37]/30 text-[#F4D03F] text-xs font-heading font-medium tracking-wide uppercase mb-6 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F4D03F] animate-pulse" />
              Insights
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#F5F5F5] tracking-tight mx-auto leading-[1.15] mb-6">
              Insights &{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFFFFF] via-[#F4D03F] to-[#DAAF37]">
                Research
              </span>
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-white/75 font-sans leading-relaxed max-w-2xl mx-auto">
              Perspectives on the industries Nexora serves.
            </p>
          </div>

          {/* Standalone Large Insights & Research Visual (Directly Below Subtitle, No Frame/Card/Border) */}
          <div className="w-full max-w-[1440px] mx-auto overflow-hidden rounded-xl sm:rounded-2xl">
            <img
              src="/assets/insights-research-hero.webp"
              alt="NEXORA ONE Beauty Industry Insights, Trends and Analytics Dashboard"
              width={1920}
              height={850}
              className="w-full h-auto object-cover select-none"
              loading="eager"
            />
          </div>
        </FadeIn>
      </section>

      {/* 11.1 Category Filter Chips Bar */}
      <section className="pb-8 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-3">
          {INSIGHT_CATEGORIES.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-xs font-heading font-medium tracking-wide whitespace-nowrap transition-all cursor-pointer ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-[#F4D03F] to-[#DAAF37] text-[#0A0A0A] font-semibold shadow-[0_2px_15px_rgba(218,175,55,0.35)]'
                  : 'bg-white/[0.04] border border-white/[0.1] text-white/70 hover:text-white hover:bg-white/[0.08]'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* 11.2 Explainers Cards Grid */}
      <section className="py-8 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {filteredInsights.length === 0 ? (
          <GlassCard className="p-12 text-center max-w-lg mx-auto">
            <BookOpen className="w-8 h-8 text-white/40 mx-auto mb-3" />
            <h3 className="text-base font-heading font-semibold text-white mb-1">
              No articles in this category yet
            </h3>
            <p className="text-xs text-white/60 font-sans mb-4">
              Articles published here explore how technology, local commerce and industry networks connect.
            </p>
            <Button
              variant="secondary"
              size="sm"
              onClick={() => setSelectedCategory('All')}
            >
              Reset to All
            </Button>
          </GlassCard>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {filteredInsights.map((item) => {
              const isExpanded = expandedId === item.id;
              return (
                <GlassCard
                  key={item.id}
                  id={item.id}
                  className={`p-7 sm:p-8 flex flex-col justify-between border-white/[0.12] transition-all duration-300 ${
                    isExpanded ? 'border-[#DAAF37]/50 shadow-[0_8px_32px_rgba(218,175,55,0.15)]' : ''
                  }`}
                >
                  <div>
                    {/* Meta Header */}
                    <div className="flex items-center justify-between gap-3 text-xs mb-3">
                      <span className="px-2.5 py-0.5 rounded-full bg-[#DAAF37]/15 border border-[#DAAF37]/35 text-[#F4D03F] font-heading font-medium">
                        {item.category}
                      </span>
                      <span className="text-white/40 font-sans text-xs">
                        {item.date}
                      </span>
                    </div>

                    {/* Title & Excerpt */}
                    <h2 className="text-xl sm:text-2xl font-heading font-semibold text-white tracking-tight mb-3">
                      {item.title}
                    </h2>

                    <p className="text-sm text-white/75 font-sans leading-relaxed mb-4">
                      {item.excerpt}
                    </p>

                    {/* Expanded Drawer / Body */}
                    {isExpanded && (
                      <div className="mt-4 pt-4 border-t border-white/10 space-y-4 text-sm font-sans text-white/85 leading-relaxed">
                        <p>{item.body}</p>

                        {item.keyPoints && (
                          <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08] space-y-2">
                            <span className="text-[10px] font-heading font-semibold uppercase tracking-wider text-[#DAAF37] block">
                              Key Takeaways:
                            </span>
                            <ul className="space-y-1.5 text-xs text-white/80">
                              {item.keyPoints.map((point, idx) => (
                                <li key={idx} className="flex items-start gap-2">
                                  <span className="w-1.5 h-1.5 rounded-full bg-[#DAAF37] flex-shrink-0 mt-1.5" />
                                  <span>{point}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        <div className="pt-2 flex items-center justify-between text-xs">
                          <span className="text-white/50">Relevant Platform:</span>
                          <Link
                            to={item.relatedProductLink}
                            className="text-[#DAAF37] hover:underline font-heading font-medium inline-flex items-center gap-1"
                          >
                            <span>{item.relatedProduct}</span>
                            <span>→</span>
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Toggle Button */}
                  <div className="pt-4 mt-4 border-t border-white/[0.08]">
                    <button
                      type="button"
                      onClick={() => toggleExpand(item.id)}
                      className="inline-flex items-center gap-1.5 text-xs font-heading font-semibold text-[#DAAF37] hover:text-[#F4D03F] transition-colors cursor-pointer"
                    >
                      <span>{isExpanded ? 'Collapse Insight' : 'Read Full Insight'}</span>
                      {isExpanded ? (
                        <ChevronUp className="w-4 h-4" />
                      ) : (
                        <ChevronDown className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                </GlassCard>
              );
            })}
          </div>
        )}
      </section>

      {/* 11.3 Future Articles Notice */}
      <section className="py-16 sm:py-20 max-w-[1000px] mx-auto px-4 text-center">
        <GlassCard className="p-8 border-white/10">
          <div className="w-10 h-10 rounded-xl bg-[#DAAF37]/15 border border-[#DAAF37]/30 flex items-center justify-center text-[#F4D03F] mx-auto mb-3">
            <BookOpen className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-heading font-semibold text-white mb-2">
            Publishing Cadence
          </h3>
          <p className="text-xs sm:text-sm text-white/60 font-sans max-w-xl mx-auto leading-relaxed">
            Articles published here explore how technology, local commerce and industry networks connect. Ongoing research reports are added as cross-vertical platforms expand.
          </p>
        </GlassCard>
      </section>
    </div>
  );
};
