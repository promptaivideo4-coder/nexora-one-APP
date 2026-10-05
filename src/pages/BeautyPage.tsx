import React from 'react';
import { Link } from 'react-router-dom';
import {
  Sparkles,
  ArrowRight,
  User,
  Store,
  Globe,
  MessageSquare,
  Bot,
  Scissors,
  TrendingUp,
  Boxes,
  Layers,
  ChevronRight,
} from 'lucide-react';
import { Button } from '../components/common/Button';
import { GlassCard } from '../components/common/GlassCard';
import { SectionHeading } from '../components/common/SectionHeading';
import { SectionDivider } from '../components/common/SectionDivider';
import { FadeIn, StaggerContainer, StaggerItem } from '../components/common/MotionWrapper';

export const BeautyPage: React.FC = () => {
  const endToEndFlow = [
    { title: 'Customer', desc: 'Discovery & Booking' },
    { title: 'Customer Platform', desc: 'Loyalty & Services' },
    { title: 'Salon / Business', desc: 'Digital Presence' },
    { title: 'SalonOS + CRM', desc: 'Marketing & AI Engine' },
    { title: 'Professional / Staff', desc: 'Jobs & Operations' },
    { title: 'Growth Partner', desc: 'Network Onboarding' },
    { title: 'B2B Marketplace', desc: 'Supply Layer' },
    { title: 'Brands / Distributors', desc: 'Wholesale Commerce' },
  ];

  const beautyLayers = [
    {
      id: 'customer',
      title: 'Customer Experience',
      headline: 'Customer Experience',
      copy: 'Discover salons and services, view offers, book where supported and earn loyalty benefits.',
      productLink: '/products#customer-app',
      productName: 'Nexora Customer App',
      icon: <User className="w-5 h-5" />,
    },
    {
      id: 'salonos',
      title: 'Nexora SalonOS',
      headline: 'Nexora SalonOS',
      copy: 'A digital operating system for salons: booking, CRM, loyalty, marketing, recall and analytics in one place.',
      productLink: '/products#salonos',
      productName: 'Nexora SalonOS',
      icon: <Store className="w-5 h-5" />,
    },
    {
      id: 'white-label',
      title: 'White-Label Websites & Apps',
      headline: 'White-Label Websites & Apps',
      copy: 'Your brand. Your digital presence. Powered by Nexora. Launch a branded website and app for your business.',
      productLink: '/products#white-label',
      productName: 'White-Label Websites & Apps',
      icon: <Globe className="w-5 h-5" />,
    },
    {
      id: 'marketing',
      title: 'Marketing & WhatsApp Automation',
      headline: 'Marketing & WhatsApp Automation',
      copy: 'Campaigns, offers and automated customer communication.',
      productLink: '/products#salonos',
      productName: 'SalonOS Automation Suite',
      icon: <MessageSquare className="w-5 h-5" />,
    },
    {
      id: 'ai',
      title: 'AI Growth Tools',
      headline: 'AI Growth Tools',
      copy: 'AI-assisted marketing content and business insights. Capabilities are being developed.',
      productLink: '/products#ai-tools',
      productName: 'Nexora AI Business Tools',
      icon: <Bot className="w-5 h-5" />,
    },
    {
      id: 'professionals',
      title: 'Professionals & Jobs',
      headline: 'Professionals & Jobs',
      copy: 'Opportunities for beauty professionals, connected to salons and employers.',
      productLink: '/products#salon-jobs',
      productName: 'Nexora Salon Jobs',
      icon: <Scissors className="w-5 h-5" />,
    },
    {
      id: 'growth-partner',
      title: 'Growth Partner Network',
      headline: 'Growth Partner Network',
      copy: 'A structured program that helps local businesses join the network.',
      productLink: '/products#growth-partner',
      productName: 'Nexora Growth Partner',
      icon: <TrendingUp className="w-5 h-5" />,
    },
    {
      id: 'b2b',
      title: 'B2B Marketplace',
      headline: 'B2B Marketplace',
      copy: 'A network connecting brands, distributors and suppliers with beauty businesses.',
      productLink: '/products#beauty-b2b',
      productName: 'Nexora Beauty B2B',
      icon: <Boxes className="w-5 h-5" />,
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="pt-12 pb-12 sm:pt-20 sm:pb-16 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <FadeIn>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DAAF37]/10 border border-[#DAAF37]/30 text-[#F4D03F] text-xs font-heading font-medium tracking-wide uppercase mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F4D03F] animate-pulse" />
            Core ecosystem
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#F5F5F5] tracking-tight max-w-4xl mx-auto leading-[1.15] mb-4">
            The Nexora{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFFFFF] via-[#F4D03F] to-[#DAAF37]">
              Beauty Ecosystem
            </span>
          </h1>

          <p className="text-lg sm:text-2xl text-[#DAAF37] font-serif font-semibold italic max-w-3xl mx-auto mb-4">
            &ldquo;Beyond Booking. Beyond Salon Software. A Connected Beauty Industry Ecosystem.&rdquo;
          </p>

          <p className="text-sm sm:text-base text-white/70 font-sans max-w-2xl mx-auto mb-6">
            From customer discovery to salon operations, growth networks and B2B distribution.
          </p>

          <div className="p-3.5 rounded-xl bg-[#DAAF37]/10 border border-[#DAAF37]/30 text-xs font-sans text-[#F4D03F] max-w-2xl mx-auto mb-10">
            Beauty is the original Nexora ecosystem. The Nexora One architecture is planned to grow beyond Beauty.
          </div>

          {/* Panoramic Hero Visual Display */}
          <div className="relative max-w-6xl mx-auto rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.9)]">
            <img
              src="/assets/beauty-ecosystem-hero.webp"
              alt="Nexora Beauty Ecosystem Panorama - Hair, Wellness, Makeup, Nails, Styling, Spa"
              className="w-full h-auto object-contain select-none"
              loading="eager"
            />
          </div>
        </FadeIn>
      </section>

      {/* End-to-End Diagram Section */}
      <section className="py-12 border-y border-white/[0.08] bg-white/[0.02]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs uppercase font-heading font-semibold tracking-wider text-[#DAAF37] block mb-1">
              End-to-End Diagram
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-semibold text-white">
              Full Industry Value Chain Connection
            </h2>
            <p className="text-xs sm:text-sm text-white/60 font-sans mt-2">
              Every participant, from client to brand distributor, flows through connected nodes.
            </p>
          </div>

          {/* Interactive Flow Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
            {endToEndFlow.map((step, idx) => (
              <div
                key={idx}
                className="relative p-4 rounded-xl bg-white/[0.03] border border-white/[0.08] hover:border-[#DAAF37]/50 hover:bg-white/[0.06] transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-[#DAAF37] font-heading font-bold mb-2">
                    <span>0{idx + 1}</span>
                    {idx < endToEndFlow.length - 1 && (
                      <span className="text-white/30 hidden lg:inline">›</span>
                    )}
                  </div>
                  <h3 className="text-xs font-heading font-semibold text-white leading-tight mb-1">
                    {step.title}
                  </h3>
                  <p className="text-[10px] text-white/50 font-sans leading-tight">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8 Layer Sections */}
      <section className="py-20 sm:py-28 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Ecosystem Components"
          title="Eight Specialized Layers of the"
          titleAccent="Beauty Network"
          subtitle="Explore how booking, branded web presence, talent recruiting, partner networks, and wholesale procurement interconnect."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {beautyLayers.map((layer) => (
            <GlassCard
              key={layer.id}
              className="p-6 flex flex-col justify-between border-white/[0.12] hover:border-[#DAAF37]/50"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#DAAF37]/15 border border-[#DAAF37]/30 flex items-center justify-center text-[#F4D03F]">
                    {layer.icon}
                  </div>
                  <span className="text-[10px] uppercase font-heading font-medium tracking-wider text-[#DAAF37]">
                    Layer
                  </span>
                </div>
                <h3 className="text-lg font-heading font-semibold text-white mb-2">
                  {layer.headline}
                </h3>
                <p className="text-xs sm:text-sm text-white/70 font-sans leading-relaxed mb-6">
                  {layer.copy}
                </p>
              </div>

              <div className="pt-4 border-t border-white/[0.08]">
                <Link
                  to={layer.productLink}
                  className="inline-flex items-center justify-between w-full text-xs font-heading font-medium text-[#DAAF37] hover:text-[#F4D03F] transition-colors group"
                >
                  <span className="truncate">{layer.productName}</span>
                  <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </GlassCard>
          ))}
        </div>

        {/* Section Divider */}
        <SectionDivider />

        {/* Action CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button
            to="/products"
            variant="primary"
            size="lg"
            icon={<ArrowRight className="w-4 h-4" />}
          >
            Explore Products
          </Button>
          <Button
            to="/ecosystem"
            variant="secondary"
            size="lg"
          >
            Explore the Ecosystem
          </Button>
        </div>
      </section>
    </div>
  );
};
