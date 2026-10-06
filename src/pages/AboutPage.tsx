import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Building2,
  ShieldCheck,
  Compass,
  Cpu,
  Layers,
  Sparkles,
  ArrowRight,
  Mail,
  Handshake,
  CheckCircle2,
  Send,
  MessageSquare,
  User,
  Clock,
} from 'lucide-react';
import { Button } from '../components/common/Button';
import { GlassCard } from '../components/common/GlassCard';
import { SectionHeading } from '../components/common/SectionHeading';
import { SectionDivider } from '../components/common/SectionDivider';
import { FadeIn } from '../components/common/MotionWrapper';
import { InteractiveImage } from '../components/common/InteractiveImage';

export const AboutPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Partnership Discussion',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: 'Partnership Discussion', message: '' });
    }, 800);
  };

  const principles = [
    {
      title: 'Connected by Design',
      desc: 'No product stands alone. Every system layer shares data, branding, and workflows to eliminate industry fragmentation.',
    },
    {
      title: 'Accessible Digital Tools',
      desc: 'Democratizing high-tier digital infrastructure for local independent merchants without high custom development barriers.',
    },
    {
      title: 'Transparent Status',
      desc: 'Clear public distinction between demonstrably active platforms and planned expansion horizons.',
    },
    {
      title: 'Merchant Brand Autonomy',
      desc: 'Empowering local businesses with their own branded websites and apps rather than commoditizing them under third-party brands.',
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Header */}
      <section className="pt-12 pb-16 sm:pt-20 sm:pb-24 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <FadeIn>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DAAF37]/10 border border-[#DAAF37]/30 text-[#F4D03F] text-xs font-heading font-medium tracking-wide uppercase mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F4D03F] animate-pulse" />
            The company
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#F5F5F5] tracking-tight max-w-4xl mx-auto leading-[1.15] mb-6">
            About{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFFFFF] via-[#F4D03F] to-[#DAAF37]">
              Nexora
            </span>
          </h1>

          <p className="text-base sm:text-lg lg:text-xl text-white/75 font-sans leading-relaxed max-w-3xl mx-auto">
            Nexora One is building a connected, multi-vertical digital ecosystem, beginning with Beauty.
          </p>
        </FadeIn>
      </section>

      {/* About Corporate Vision Visual Section */}
      <section className="pb-12 sm:pb-16 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative">
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
          <div className="relative rounded-2xl sm:rounded-3xl border border-[#DAAF37]/40 bg-gradient-to-b from-white/[0.06] via-black/80 to-black/90 backdrop-blur-2xl p-3 sm:p-6 lg:p-8 shadow-[0_16px_50px_rgba(0,0,0,0.85),0_0_45px_rgba(218,175,55,0.12),inset_0_1px_1px_rgba(255,255,255,0.15)] overflow-hidden">
            {/* Centered Image with 16:9 Aspect Ratio & Subtle Gold Border */}
            <div className="relative z-10 rounded-xl sm:rounded-2xl overflow-hidden border border-[#DAAF37]/35 shadow-[0_10px_35px_rgba(0,0,0,0.75)] bg-black/60 group">
              <InteractiveImage
                src="/assets/about-building.webp"
                alt="Nexora Global Corporate Vision, Governance, and Ecosystem Leadership"
                width={1920}
                height={1080}
                className="w-full h-auto object-cover select-none transition-transform duration-700 group-hover:scale-[1.01]"
                loading="eager"
              />
            </div>
          </div>
        </motion.div>
      </section>

      {/* 5 Core Corporate Philosophy Sections */}
      <section className="pb-16 max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* 10.1 Company Overview */}
        <GlassCard className="p-8 sm:p-10 border-[#DAAF37]/35" glow="subtle">
          <div className="flex items-center gap-3.5 mb-4">
            <div className="w-10 h-10 rounded-xl bg-[#DAAF37]/15 border border-[#DAAF37]/30 flex items-center justify-center text-[#F4D03F]">
              <Building2 className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-heading font-semibold text-[#DAAF37] tracking-wider block">
                Corporate Profile
              </span>
              <h2 className="text-xl sm:text-2xl font-heading font-semibold text-white">
                Company Overview
              </h2>
            </div>
          </div>
          <p className="text-sm sm:text-base text-white/80 font-sans leading-relaxed">
            Nexora One is building a connected, multi-vertical digital ecosystem. It began with the Beauty industry, bringing customers, salons, professionals, growth partners, brands and distributors into one connected architecture, and is designed to expand into other local-commerce verticals.
          </p>
        </GlassCard>

        {/* 10.2 What Nexora is Building */}
        <GlassCard className="p-8 sm:p-10 border-white/15">
          <div className="flex items-center gap-3.5 mb-4">
            <div className="w-10 h-10 rounded-xl bg-[#DAAF37]/15 border border-[#DAAF37]/30 flex items-center justify-center text-[#F4D03F]">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-heading font-semibold text-[#DAAF37] tracking-wider block">
                Product Ecosystem
              </span>
              <h2 className="text-xl sm:text-2xl font-heading font-semibold text-white">
                What Nexora is Building
              </h2>
            </div>
          </div>
          <p className="text-sm sm:text-base text-white/80 font-sans leading-relaxed">
            A family of connected products: customer discovery, salon operations, branded websites and apps, a Growth Partner network, beauty jobs and a B2B network, supported by automation and AI.
          </p>
        </GlassCard>

        {/* 10.3 Technology Direction */}
        <GlassCard className="p-8 sm:p-10 border-white/15">
          <div className="flex items-center gap-3.5 mb-4">
            <div className="w-10 h-10 rounded-xl bg-[#DAAF37]/15 border border-[#DAAF37]/30 flex items-center justify-center text-[#F4D03F]">
              <Cpu className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-heading font-semibold text-[#DAAF37] tracking-wider block">
                Technical Foundation
              </span>
              <h2 className="text-xl sm:text-2xl font-heading font-semibold text-white">
                Technology Direction
              </h2>
            </div>
          </div>
          <p className="text-sm sm:text-base text-white/80 font-sans leading-relaxed">
            Reusable technology that serves many industries: one platform foundation, connected data and automation, and AI applied to marketing, retention and operations.
          </p>
        </GlassCard>

        {/* 10.4 Ecosystem Philosophy */}
        <GlassCard className="p-8 sm:p-10 border-white/15">
          <div className="flex items-center gap-3.5 mb-4">
            <div className="w-10 h-10 rounded-xl bg-[#DAAF37]/15 border border-[#DAAF37]/30 flex items-center justify-center text-[#F4D03F]">
              <Compass className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-heading font-semibold text-[#DAAF37] tracking-wider block">
                System Axiom
              </span>
              <h2 className="text-xl sm:text-2xl font-heading font-semibold text-white">
                Ecosystem Philosophy
              </h2>
            </div>
          </div>
          <p className="text-sm sm:text-base text-white/80 font-sans leading-relaxed">
            Products should be understood as layers of one ecosystem. Every participant gets clear value, and every product connects to at least one other layer.
          </p>
        </GlassCard>

        {/* 10.5 Future Direction */}
        <GlassCard className="p-8 sm:p-10 border-[#DAAF37]/35" glow="subtle">
          <div className="flex items-center gap-3.5 mb-4">
            <div className="w-10 h-10 rounded-xl bg-[#DAAF37]/15 border border-[#DAAF37]/30 flex items-center justify-center text-[#F4D03F]">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-heading font-semibold text-[#DAAF37] tracking-wider block">
                Strategic Horizon
              </span>
              <h2 className="text-xl sm:text-2xl font-heading font-semibold text-white">
                Future Direction
              </h2>
            </div>
          </div>
          <p className="text-sm sm:text-base text-white/80 font-sans leading-relaxed">
            Beauty remains the core ecosystem while Nexora One extends the architecture to Real Estate, Food Delivery, Jobs, Commerce, Advertising and AI & Technology, one vertical at a time, with each vertical&apos;s status stated honestly.
          </p>
        </GlassCard>
      </section>

      <SectionDivider />

      {/* Corporate Principles */}
      <section className="py-12 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Core Values"
          title="Guiding Architectural"
          titleAccent="Principles"
          subtitle="The operating rules that inform platform design, merchant relationships, and long-term ecosystem expansion."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {principles.map((pr, i) => (
            <GlassCard key={i} className="p-6">
              <div className="w-8 h-8 rounded-lg bg-[#DAAF37]/15 border border-[#DAAF37]/30 flex items-center justify-center text-[#F4D03F] mb-4">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <h3 className="text-base font-heading font-semibold text-white mb-2">
                {pr.title}
              </h3>
              <p className="text-xs sm:text-sm text-white/70 font-sans leading-relaxed">
                {pr.desc}
              </p>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* Leadership & Entity Governance Placeholders */}
      <section className="py-12 max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
        <GlassCard className="p-8 border-white/10 text-center">
          <div className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-white/60 mx-auto mb-3">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-heading font-semibold text-white mb-2">
            Corporate Governance & Entity Details
          </h3>
          <p className="text-xs sm:text-sm text-white/60 font-sans max-w-xl mx-auto mb-4">
            Nexora One governance records, leadership profiles, and jurisdiction filings.
          </p>
          <div className="inline-flex flex-wrap justify-center gap-3 text-xs text-white/50 font-sans">
            <span className="px-3 py-1 rounded-full bg-white/[0.03] border border-white/10">
              Registration: [PLACEHOLDER: year, jurisdiction, registration details where needed]
            </span>
            <span className="px-3 py-1 rounded-full bg-white/[0.03] border border-white/10">
              Leadership: [PLACEHOLDER: leadership profiles/names]
            </span>
          </div>
        </GlassCard>
      </section>

      {/* Contact Us Section with Gold Glassmorphism Form */}
      <section id="contact" className="py-16 sm:py-24 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Get in Touch"
          title="Contact"
          titleAccent="Nexora Corporate"
          subtitle="Direct inquiries regarding enterprise licensing, white-label solutions, or strategic ecosystem partnerships."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Contact Details & Fast Inquiries */}
          <div className="lg:col-span-5 space-y-6">
            <GlassCard className="p-8 border-[#DAAF37]/35 relative overflow-hidden" glow="subtle">
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#DAAF37]/10 blur-3xl rounded-full pointer-events-none" />

              <div className="flex items-center gap-3.5 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-[#DAAF37]/15 border border-[#DAAF37]/35 flex items-center justify-center text-[#F4D03F] shadow-[0_0_20px_rgba(218,175,55,0.2)]">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-heading font-semibold text-[#DAAF37] tracking-widest block">
                    Direct Channel
                  </span>
                  <h3 className="text-xl font-heading font-semibold text-white">
                    Corporate Office
                  </h3>
                </div>
              </div>

              <p className="text-sm text-white/75 font-sans leading-relaxed mb-6">
                Connect directly with our corporate development and architectural governance team.
              </p>

              <div className="space-y-4 text-xs sm:text-sm font-sans">
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08]">
                  <Mail className="w-4 h-4 text-[#F4D03F] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-white/40 block text-[11px] uppercase font-heading">Official Email</span>
                    <a
                      href="mailto:[PLACEHOLDER: official contact email]?subject=Corporate%20Enquiry"
                      className="text-[#DAAF37] hover:text-[#F4D03F] underline underline-offset-2 transition-colors"
                    >
                      [PLACEHOLDER: official contact email]
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08]">
                  <Handshake className="w-4 h-4 text-[#F4D03F] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-white/40 block text-[11px] uppercase font-heading">Partnership Discussions</span>
                    <span className="text-white/80">White-label licensing, B2B brands & distributors</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08]">
                  <Clock className="w-4 h-4 text-[#F4D03F] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-white/40 block text-[11px] uppercase font-heading">Response SLA</span>
                    <span className="text-white/80">Within 24-48 business hours</span>
                  </div>
                </div>
              </div>
            </GlassCard>
          </div>

          {/* Right Column: Clean Gold Glassmorphic Contact Form */}
          <div className="lg:col-span-7">
            <GlassCard className="p-8 sm:p-10 border-[#DAAF37]/40 bg-gradient-to-b from-white/[0.06] via-black/85 to-black/95 backdrop-blur-2xl shadow-[0_16px_50px_rgba(0,0,0,0.85),0_0_35px_rgba(218,175,55,0.12)] relative overflow-hidden" glow="gold">
              <div className="mb-6">
                <h3 className="text-2xl font-serif font-bold text-white mb-1">
                  Send a Message
                </h3>
                <p className="text-xs sm:text-sm text-white/70 font-sans">
                  Fill out the form below and a representative will respond to your inquiry.
                </p>
              </div>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-[#DAAF37]/20 border border-[#DAAF37] flex items-center justify-center text-[#F4D03F] mx-auto mb-4 shadow-[0_0_25px_rgba(218,175,55,0.35)]">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-heading font-semibold text-white mb-2">
                    Message Received
                  </h4>
                  <p className="text-sm text-white/75 font-sans max-w-md mx-auto mb-6">
                    Thank you for reaching out. Your message has been logged, and our team will get in touch shortly.
                  </p>
                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={() => setIsSubmitted(false)}
                  >
                    Send Another Message
                  </Button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name Field */}
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-xs uppercase font-heading font-semibold text-[#DAAF37] tracking-wider mb-2"
                    >
                      Your Name <span className="text-red-400">*</span>
                    </label>
                    <div className="relative">
                      <input
                        id="contact-name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. John Doe"
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/15 focus:border-[#DAAF37] focus:ring-1 focus:ring-[#DAAF37] text-white placeholder-white/30 text-sm font-sans outline-none transition-all"
                      />
                      <User className="absolute right-3.5 top-3.5 w-4 h-4 text-white/30 pointer-events-none" />
                    </div>
                  </div>

                  {/* Email Field */}
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-xs uppercase font-heading font-semibold text-[#DAAF37] tracking-wider mb-2"
                    >
                      Business Email <span className="text-red-400">*</span>
                    </label>
                    <div className="relative">
                      <input
                        id="contact-email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/15 focus:border-[#DAAF37] focus:ring-1 focus:ring-[#DAAF37] text-white placeholder-white/30 text-sm font-sans outline-none transition-all"
                      />
                      <Mail className="absolute right-3.5 top-3.5 w-4 h-4 text-white/30 pointer-events-none" />
                    </div>
                  </div>

                  {/* Subject / Purpose Field */}
                  <div>
                    <label
                      htmlFor="contact-subject"
                      className="block text-xs uppercase font-heading font-semibold text-[#DAAF37] tracking-wider mb-2"
                    >
                      Inquiry Category
                    </label>
                    <select
                      id="contact-subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#141414] border border-white/15 focus:border-[#DAAF37] focus:ring-1 focus:ring-[#DAAF37] text-white text-sm font-sans outline-none transition-all cursor-pointer"
                    >
                      <option value="Partnership Discussion">Partnership Discussion</option>
                      <option value="White-Label Websites & Apps">White-Label Websites & Apps</option>
                      <option value="Enterprise & Licensing">Enterprise & Licensing</option>
                      <option value="B2B Brands / Distributors">B2B Brands / Distributors</option>
                      <option value="Growth Partner Inquiry">Growth Partner Inquiry</option>
                      <option value="General Corporate Inquiries">General Corporate Inquiries</option>
                    </select>
                  </div>

                  {/* Message Field */}
                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-xs uppercase font-heading font-semibold text-[#DAAF37] tracking-wider mb-2"
                    >
                      Message <span className="text-red-400">*</span>
                    </label>
                    <div className="relative">
                      <textarea
                        id="contact-message"
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Describe your inquiry or partnership objective..."
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/15 focus:border-[#DAAF37] focus:ring-1 focus:ring-[#DAAF37] text-white placeholder-white/30 text-sm font-sans outline-none transition-all resize-none"
                      />
                      <MessageSquare className="absolute right-3.5 top-3.5 w-4 h-4 text-white/30 pointer-events-none" />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#F4D03F] via-[#E8BE35] to-[#DAAF37] hover:from-[#FFF2B2] hover:to-[#F4D03F] text-[#0A0A0A] font-heading font-bold text-sm tracking-wide shadow-[0_4px_25px_rgba(218,175,55,0.4)] hover:shadow-[0_4px_35px_rgba(218,175,55,0.65)] hover:scale-[1.01] active:scale-[0.99] transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                          <span>Sending Message...</span>
                        </>
                      ) : (
                        <>
                          <span>Submit Inquiry</span>
                          <Send className="w-4 h-4 stroke-[2.5]" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </GlassCard>
          </div>
        </div>
      </section>
    </div>
  );
};
