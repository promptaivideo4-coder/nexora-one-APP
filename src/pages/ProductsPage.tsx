import React from 'react';
import { motion } from 'framer-motion';
import {
  ExternalLink,
  Layers,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Globe,
  Smartphone,
  Laptop,
} from 'lucide-react';
import { Button } from '../components/common/Button';
import { GlassCard } from '../components/common/GlassCard';
import { SectionHeading } from '../components/common/SectionHeading';
import { SectionDivider } from '../components/common/SectionDivider';
import { StatusBadge } from '../components/common/StatusBadge';
import { DeviceMockup } from '../components/common/DeviceMockup';
import { FadeIn } from '../components/common/MotionWrapper';
import { PRODUCTS_DATA } from '../data/products';

export const ProductsPage: React.FC = () => {
  return (
    <div className="w-full">
      {/* Hero Header with Cinematic Showcase Background */}
      <section className="relative overflow-hidden w-full border-b border-white/[0.08] bg-[#0A0A0A]">
        {/* Background Visual Asset */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img
            src="/assets/products-hero.webp"
            alt="Nexora Products Ecosystem Showcase"
            width={1920}
            height={800}
            className="w-full h-full object-cover object-center opacity-45 select-none"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/90 via-[#0A0A0A]/75 to-[#0A0A0A]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#DAAF37]/15 via-transparent to-transparent" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[260px] bg-[#DAAF37]/10 blur-[120px] rounded-full" />
        </div>

        <div className="relative z-10 py-16 sm:py-24 lg:py-28 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DAAF37]/10 border border-[#DAAF37]/30 text-[#F4D03F] text-xs font-heading font-medium tracking-wide uppercase mb-6 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F4D03F] animate-pulse" />
              PRODUCTS
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#F5F5F5] tracking-tight max-w-4xl mx-auto leading-[1.15] mb-6">
              The Nexora{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFFFFF] via-[#F4D03F] to-[#DAAF37]">
                Product Family
              </span>
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-white/80 font-sans leading-relaxed max-w-3xl mx-auto mb-8 drop-shadow-sm">
              Each product is a layer of the same ecosystem. Where a demo exists, you can open it in a new tab. Demos are external applications, separate from this website.
            </p>

            {/* Platform Entry Link */}
            <div className="inline-flex flex-col sm:flex-row items-center gap-3 p-3 sm:px-5 sm:py-2.5 rounded-full bg-white/[0.04] border border-white/[0.1] text-xs font-sans backdrop-blur-md">
              <span className="text-white/60">Platform Entry:</span>
              <a
                href="https://fanal-templetes-app.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#DAAF37] hover:text-[#F4D03F] font-heading font-medium inline-flex items-center gap-1.5 underline underline-offset-4 transition-colors"
              >
                <span>Nexora Platform Portal</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <span className="text-white/30 text-[10px] uppercase font-heading bg-white/[0.05] px-2 py-0.5 rounded-full border border-white/10">
                Demo (Unverified)
              </span>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Products Ecosystem Overview Showcase Section */}
      <section className="py-12 sm:py-16 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          {/* Floating Gold Ambient Particles / Glow Orbs */}
          <div className="absolute -top-12 -left-12 w-64 h-64 bg-[#DAAF37]/15 blur-[100px] rounded-full pointer-events-none animate-pulse" />
          <div className="absolute -bottom-12 -right-12 w-80 h-80 bg-[#DAAF37]/12 blur-[110px] rounded-full pointer-events-none" />
          <div className="absolute top-1/3 right-10 w-32 h-32 bg-[#F4D03F]/10 blur-[60px] rounded-full pointer-events-none" />

          {/* Floating Stardust Particles */}
          <span className="absolute top-8 left-12 w-1.5 h-1.5 rounded-full bg-[#DAAF37]/60 shadow-[0_0_8px_#DAAF37] animate-ping pointer-events-none hidden sm:block" />
          <span className="absolute bottom-16 right-16 w-2 h-2 rounded-full bg-[#F4D03F]/70 shadow-[0_0_12px_#F4D03F] animate-pulse pointer-events-none hidden sm:block" />
          <span className="absolute top-1/2 left-6 w-1 h-1 rounded-full bg-[#DAAF37]/80 shadow-[0_0_6px_#DAAF37] pointer-events-none" />
          <span className="absolute top-1/4 right-1/4 w-1.5 h-1.5 rounded-full bg-[#DAAF37]/50 shadow-[0_0_8px_#DAAF37] pointer-events-none" />

          {/* Premium Glassmorphism Container with Thin Glowing Gold Border */}
          <div className="relative rounded-2xl sm:rounded-3xl border border-[#DAAF37]/40 bg-gradient-to-b from-white/[0.06] via-black/80 to-black/90 backdrop-blur-2xl p-4 sm:p-8 lg:p-10 shadow-[0_16px_50px_rgba(0,0,0,0.85),0_0_45px_rgba(218,175,55,0.12),inset_0_1px_1px_rgba(255,255,255,0.15)] overflow-hidden">
            {/* Header / Titles */}
            <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 relative z-10">
              <span className="text-[#DAAF37] text-xs sm:text-sm font-heading font-semibold tracking-[0.25em] uppercase block mb-2 drop-shadow-[0_2px_8px_rgba(218,175,55,0.3)]">
                MULTI-VERTICAL SYNERGY
              </span>
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight leading-tight">
                Products Ecosystem Overview
              </h2>
              <p className="mt-3 text-sm sm:text-base text-white/75 font-sans leading-relaxed">
                Unified digital infrastructure orchestrating consumer discovery, merchant operations, supply-chain logistics, and automated AI engines across all 7 Nexora domains.
              </p>
            </div>

            {/* Centered Image with Clean Aspect Ratio & Subtle Gold Border */}
            <div className="relative z-10 rounded-xl sm:rounded-2xl overflow-hidden border border-[#DAAF37]/35 shadow-[0_10px_35px_rgba(0,0,0,0.75)] bg-black/60 group">
              <img
                src="/assets/products-ecosystem-overview.webp"
                alt="NEXORA ONE multi-vertical products and ecosystems network panel"
                width={1920}
                height={640}
                className="w-full h-auto object-cover select-none transition-transform duration-700 group-hover:scale-[1.01]"
                loading="eager"
              />
            </div>
          </div>
        </motion.div>
      </section>

      {/* 8.1 Product Cards Grid */}
      <section className="py-8 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {PRODUCTS_DATA.map((product) => {
            const isSalonOS = product.id === 'salonos';
            const capabilityList = product.benefits.split('•').map((b) => b.trim());

            return (
              <GlassCard
                key={product.id}
                id={product.id}
                className={`p-6 sm:p-7 flex flex-col justify-between scroll-mt-28 transition-all duration-300 ${
                  isSalonOS
                    ? 'border-[#DAAF37]/55 bg-gradient-to-b from-white/[0.08] via-black/85 to-black/95 shadow-[0_16px_50px_rgba(0,0,0,0.85),0_0_35px_rgba(218,175,55,0.18)] ring-1 ring-[#DAAF37]/35'
                    : 'border-white/[0.12]'
                }`}
                glow={isSalonOS ? 'gold' : 'subtle'}
              >
                <div>
                  {/* Top Flagship Ribbon for SalonOS */}
                  {isSalonOS && (
                    <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-[#DAAF37]/25 via-[#F4D03F]/15 to-transparent border border-[#DAAF37]/45 text-[#F4D03F] text-[10px] font-heading font-semibold uppercase tracking-widest mb-3 w-fit">
                      <Sparkles className="w-3 h-3 text-[#F4D03F]" />
                      <span>Flagship Operating System</span>
                    </div>
                  )}

                  {/* Header & Status */}
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <h2 className={`text-lg sm:text-xl font-heading font-semibold tracking-tight leading-snug ${isSalonOS ? 'text-white drop-shadow-[0_2px_8px_rgba(218,175,55,0.25)]' : 'text-white'}`}>
                      {product.name}
                    </h2>
                    <StatusBadge status={product.status} />
                  </div>

                  {/* Device Visual Mockup */}
                  <div className="my-4 py-2 flex justify-center">
                    {product.id === 'customer-app' ? (
                      <div className="w-full relative rounded-xl overflow-hidden border border-[#DAAF37]/30 bg-black/60 shadow-[0_8px_24px_rgba(0,0,0,0.6)] group">
                        <img
                          src="/assets/shot-customer-app.webp"
                          alt="Nexora Customer App UI Mockup"
                          className="w-full h-auto object-cover select-none transition-transform duration-500 group-hover:scale-[1.02]"
                          loading="eager"
                        />
                      </div>
                    ) : product.id === 'salonos' ? (
                      <div className="w-full relative rounded-xl overflow-hidden border-2 border-[#DAAF37]/55 bg-black/80 shadow-[0_12px_35px_rgba(0,0,0,0.85),0_0_25px_rgba(218,175,55,0.25)] group">
                        <img
                          src="/assets/shot-salonos.webp"
                          alt="Nexora SalonOS Dashboard Mockup"
                          className="w-full h-auto object-cover select-none transition-transform duration-700 group-hover:scale-[1.03]"
                          loading="eager"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                      </div>
                    ) : product.id === 'white-label' ? (
                      <div className="w-full relative rounded-xl overflow-hidden border border-[#DAAF37]/30 bg-black/60 shadow-[0_8px_24px_rgba(0,0,0,0.6)] group">
                        <img
                          src="/assets/shot-white-label.webp"
                          alt="White-Label Websites & Apps Multi-Device Mockup"
                          className="w-full h-auto object-cover select-none transition-transform duration-500 group-hover:scale-[1.02]"
                          loading="eager"
                        />
                      </div>
                    ) : product.id === 'growth-partner' ? (
                      <div className="w-full relative rounded-xl overflow-hidden border border-[#DAAF37]/30 bg-black/60 shadow-[0_8px_24px_rgba(0,0,0,0.6)] group">
                        <img
                          src="/assets/shot-growth-partner.webp"
                          alt="Nexora Growth Partner Rewards Dashboard Mockup"
                          width={1280}
                          height={720}
                          className="w-full h-auto object-cover select-none transition-transform duration-500 group-hover:scale-[1.02]"
                          loading="eager"
                        />
                      </div>
                    ) : product.id === 'salon-jobs' ? (
                      <div className="w-full relative rounded-xl overflow-hidden border border-[#DAAF37]/30 bg-black/60 shadow-[0_8px_24px_rgba(0,0,0,0.6)] group">
                        <img
                          src="/assets/shot-jobs.webp"
                          alt="Nexora Salon Jobs Career Showcase Platform Mockup"
                          width={1280}
                          height={720}
                          className="w-full h-auto object-cover select-none transition-transform duration-500 group-hover:scale-[1.02]"
                          loading="eager"
                        />
                      </div>
                    ) : product.id === 'beauty-b2b' ? (
                      <div className="w-full relative rounded-xl overflow-hidden border border-[#DAAF37]/30 bg-black/60 shadow-[0_8px_24px_rgba(0,0,0,0.6)] group">
                        <img
                          src="/assets/shot-b2b.webp"
                          alt="Nexora Luxury Beauty B2B Marketplace Dashboard Mockup"
                          width={1280}
                          height={720}
                          className="w-full h-auto object-cover select-none transition-transform duration-500 group-hover:scale-[1.02]"
                          loading="eager"
                        />
                      </div>
                    ) : product.id === 'real-estate-platform' ? (
                      <div className="w-full relative rounded-xl overflow-hidden border border-[#DAAF37]/30 bg-black/60 shadow-[0_8px_24px_rgba(0,0,0,0.6)] group">
                        <img
                          src="/assets/shot-real-estate.webp"
                          alt="Nexora Luxury Real Estate Showcase Platform Mockup"
                          width={1280}
                          height={720}
                          className="w-full h-auto object-cover select-none transition-transform duration-500 group-hover:scale-[1.02]"
                          loading="eager"
                        />
                      </div>
                    ) : product.id === 'food-platform' ? (
                      <div className="w-full relative rounded-xl overflow-hidden border border-[#DAAF37]/30 bg-black/60 shadow-[0_8px_24px_rgba(0,0,0,0.6)] group">
                        <img
                          src="/assets/shot-food.webp"
                          alt="Nexora Food Delivery Showcase Platform Mockup"
                          width={1280}
                          height={720}
                          className="w-full h-auto object-cover select-none transition-transform duration-500 group-hover:scale-[1.02]"
                          loading="eager"
                        />
                      </div>
                    ) : product.id === 'advertising-platform' ? (
                      <div className="w-full relative rounded-xl overflow-hidden border border-[#DAAF37]/30 bg-black/60 shadow-[0_8px_24px_rgba(0,0,0,0.6)] group">
                        <img
                          src="/assets/shot-advertising.webp"
                          alt="Nexora Targeted Advertising Platform Mockup"
                          width={1280}
                          height={720}
                          className="w-full h-auto object-cover select-none transition-transform duration-500 group-hover:scale-[1.02]"
                          loading="eager"
                        />
                      </div>
                    ) : product.id === 'ai-tools' ? (
                      <div className="w-full relative rounded-xl overflow-hidden border border-[#DAAF37]/30 bg-black/60 shadow-[0_8px_24px_rgba(0,0,0,0.6)] group">
                        <img
                          src="/assets/shot-ai.webp"
                          alt="Nexora AI Business Tools Platform Mockup"
                          width={1280}
                          height={720}
                          className="w-full h-auto object-cover select-none transition-transform duration-500 group-hover:scale-[1.02]"
                          loading="eager"
                        />
                      </div>
                    ) : (
                      <DeviceMockup
                        variant="laptop"
                        title={product.name}
                        subtitle={product.oneLiner}
                        category={product.status === 'Demo' ? 'Interactive Demo' : 'Planned Layer'}
                      />
                    )}
                  </div>

                  {/* One Liner */}
                  <p className={`text-xs sm:text-sm font-sans font-medium mb-3 ${isSalonOS ? 'text-[#F4D03F]' : 'text-[#DAAF37]'}`}>
                    {product.oneLiner}
                  </p>

                  {/* Capabilities Box with Clean Structured Chips */}
                  <div className={`p-3.5 rounded-xl mb-4 text-xs font-sans leading-relaxed ${isSalonOS ? 'bg-white/[0.05] border border-[#DAAF37]/30' : 'bg-white/[0.03] border border-white/[0.08]'}`}>
                    <span className="text-white/50 block mb-2 uppercase font-heading font-semibold text-[10px] tracking-wider">
                      Key Capabilities (Planned / Demonstrated):
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {capabilityList.map((cap, i) => (
                        <span
                          key={i}
                          className={`inline-flex items-center px-2.5 py-1 rounded-md text-[11px] font-medium font-sans ${
                            isSalonOS
                              ? 'bg-[#DAAF37]/15 text-white border border-[#DAAF37]/30'
                              : 'bg-white/[0.05] text-white/80 border border-white/10'
                          }`}
                        >
                          {cap}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Audience */}
                  <div className="text-xs text-white/50 font-sans mb-4">
                    <span className="text-white/60">Target Audience:</span> {product.audience}
                  </div>

                  {/* Secondary Links if available */}
                  {product.secondaryLinks && (
                    <div className="mb-4 pt-3 border-t border-white/[0.08] space-y-1.5">
                      {product.secondaryLinks.map((sec, i) => (
                        <a
                          key={i}
                          href={sec.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs text-white/60 hover:text-[#DAAF37] font-sans inline-flex items-center gap-1.5 group transition-colors block"
                        >
                          <span className="text-[#DAAF37]">›</span>
                          <span className="underline underline-offset-2">{sec.label}</span>
                          <ExternalLink className="w-3 h-3 opacity-60 group-hover:opacity-100" />
                        </a>
                      ))}
                    </div>
                  )}
                </div>

                {/* Action Button */}
                <div className="pt-2">
                  {product.demoUrl ? (
                    <Button
                      href={product.demoUrl}
                      variant="primary"
                      size="sm"
                      className={`w-full ${isSalonOS ? 'shadow-[0_4px_25px_rgba(218,175,55,0.4)] hover:shadow-[0_4px_35px_rgba(218,175,55,0.65)]' : ''}`}
                      icon={<ExternalLink className="w-3.5 h-3.5" />}
                    >
                      Open Demo →
                    </Button>
                  ) : (
                    <Button
                      to={`/verticals#${product.id}`}
                      variant="secondary"
                      size="sm"
                      className="w-full"
                    >
                      View Vertical
                    </Button>
                  )}
                </div>
              </GlassCard>
            );
          })}
        </div>
      </section>

      {/* 8.4 White-Label Feature Visual Engine (Design §14) */}
      <section className="py-20 sm:py-28 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <GlassCard className="p-8 sm:p-12 lg:p-16 border-[#DAAF37]/35 overflow-hidden" glow="gold">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs uppercase font-heading font-semibold tracking-wider text-[#DAAF37] block mb-2">
              Proprietary White-Label Architecture
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white mb-3">
              White-Label Websites & Apps
            </h2>
            <p className="text-base sm:text-lg text-white/80 font-sans italic">
              &ldquo;Your brand. Your digital presence. Powered by Nexora.&rdquo;
            </p>
            <p className="text-xs sm:text-sm text-white/60 font-sans mt-2">
              Launch a branded website and app for your business, connected directly to SalonOS operations without building software from scratch.
            </p>
          </div>

          {/* Central Engine Diagram */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            {/* Left: Input Brand A */}
            <div className="space-y-4">
              <div className="p-5 rounded-xl bg-white/[0.04] border border-white/[0.1] text-center">
                <div className="w-8 h-8 rounded-lg bg-[#DAAF37]/15 border border-[#DAAF37]/30 flex items-center justify-center text-[#F4D03F] mx-auto mb-2 text-xs font-bold font-heading">
                  A
                </div>
                <div className="text-sm font-heading font-semibold text-white">Brand A Salon Site</div>
                <div className="text-xs text-white/50 font-sans mt-0.5">Custom domain, colors & branding</div>
              </div>

              <div className="p-5 rounded-xl bg-white/[0.04] border border-white/[0.1] text-center">
                <div className="w-8 h-8 rounded-lg bg-[#DAAF37]/15 border border-[#DAAF37]/30 flex items-center justify-center text-[#F4D03F] mx-auto mb-2 text-xs font-bold font-heading">
                  B
                </div>
                <div className="text-sm font-heading font-semibold text-white">Brand B Wellness App</div>
                <div className="text-xs text-white/50 font-sans mt-0.5">Dedicated mobile iOS & Android presence</div>
              </div>
            </div>

            {/* Center: Nexora Core White-Label Engine */}
            <div className="p-8 rounded-2xl bg-gradient-to-b from-[#1F1F1F] to-[#0E0E0E] border-2 border-[#DAAF37] shadow-[0_0_35px_rgba(218,175,55,0.3)] text-center relative">
              <div className="w-16 h-16 rounded-2xl bg-[#DAAF37]/20 border border-[#DAAF37] flex items-center justify-center text-[#F4D03F] mx-auto mb-4">
                <Globe className="w-8 h-8" />
              </div>
              <span className="text-[10px] uppercase font-heading font-bold text-[#DAAF37] tracking-wider block mb-1">
                Central Foundation
              </span>
              <h3 className="text-xl font-heading font-bold text-white mb-2">
                Nexora White-Label Engine
              </h3>
              <p className="text-xs text-white/70 font-sans leading-relaxed">
                Centralized CMS, unified SalonOS synchronization, automated customer loyalty, and shared booking infrastructure.
              </p>
            </div>

            {/* Right: Input Brand C */}
            <div className="space-y-4">
              <div className="p-5 rounded-xl bg-white/[0.04] border border-white/[0.1] text-center">
                <div className="w-8 h-8 rounded-lg bg-[#DAAF37]/15 border border-[#DAAF37]/30 flex items-center justify-center text-[#F4D03F] mx-auto mb-2 text-xs font-bold font-heading">
                  C
                </div>
                <div className="text-sm font-heading font-semibold text-white">Brand C Studio Platform</div>
                <div className="text-xs text-white/50 font-sans mt-0.5">Integrated booking & WhatsApp recall</div>
              </div>

              <div className="p-5 rounded-xl bg-white/[0.02] border border-dashed border-white/20 text-center">
                <div className="text-xs font-heading font-medium text-white/60">Enterprise & Multi-Location</div>
                <div className="text-[10px] text-white/40 font-sans mt-1">Multi-branch tenant orchestration</div>
              </div>
            </div>
          </div>

          <div className="mt-10 text-center">
            <Button
              href="https://fanal-templetes-app.vercel.app/templates"
              variant="primary"
              size="md"
              icon={<ExternalLink className="w-4 h-4" />}
            >
              Explore White-Label Templates
            </Button>
          </div>
        </GlassCard>
      </section>

      {/* 8.5 Product Disclaimer Footer Note */}
      <section className="pb-16 max-w-[900px] mx-auto px-4 text-center">
        <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.08] text-xs text-white/50 font-sans leading-relaxed">
          Status labels reflect the current state of each product. Demo links open external applications and may change.
        </div>
      </section>
    </div>
  );
};
