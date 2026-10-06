import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import {
  ArrowRight,
} from 'lucide-react';
import { Button } from '../components/common/Button';
import { GlassCard } from '../components/common/GlassCard';
import { SectionHeading } from '../components/common/SectionHeading';
import { SectionDivider } from '../components/common/SectionDivider';
import { FadeIn } from '../components/common/MotionWrapper';
import { EcosystemOverview } from '../components/home/EcosystemOverview';
import { MultiVerticalsSection } from '../components/home/MultiVerticalsSection';
import { TrustDifferentiationSection } from '../components/home/TrustDifferentiationSection';
import { HomeCTASection } from '../components/home/HomeCTASection';

export const HomePage: React.FC = () => {
  const heroRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  // Subtle, gentle parallax scroll transforms
  const visualY = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);
  const visualScale = useTransform(scrollYProgress, [0, 1], [1, 1.04]);
  const glowY = useTransform(scrollYProgress, [0, 1], ['0%', '24%']);
  const glowOpacity = useTransform(scrollYProgress, [0, 0.7, 1], [1, 0.75, 0.2]);
  const particlesY = useTransform(scrollYProgress, [0, 1], ['0%', '-18%']);

  return (
    <div className="w-full">
      {/* 4.1 Hero Section - Seamless Full-Bleed Cinematic Background */}
      <section ref={heroRef} className="relative min-h-[500px] lg:min-h-[560px] flex items-center pt-6 pb-8 sm:pt-8 sm:pb-10 lg:pt-8 lg:pb-10 overflow-hidden bg-[#0A0A0A]">
        {/* Seamless Hero Cinematic Visual Layer (Laptop + Phone + Woman + Glowing Globe) */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          {/* Main Visual Image aligned to right with subtle parallax translation & depth */}
          <motion.div
            style={prefersReducedMotion ? {} : { y: visualY, scale: visualScale }}
            className="absolute right-0 top-0 bottom-0 w-full lg:w-[65%] xl:w-[60%] 2xl:w-[58%] h-full origin-top-right will-change-transform"
          >
            <img
              src="/assets/hero-devices.webp"
              alt="Nexora One connected digital ecosystem"
              className="w-full h-full object-cover object-center lg:object-right-center scale-100"
              loading="eager"
            />
            {/* Seamless Left Fade into Deep Black #0A0A0A */}
            <div className="absolute inset-y-0 left-0 w-2/5 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/80 to-transparent pointer-events-none" />
            {/* Seamless Top & Bottom Feathering into Deep Black */}
            <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#0A0A0A] via-[#0A0A0A]/60 to-transparent pointer-events-none" />
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/80 to-transparent pointer-events-none" />
          </motion.div>

          {/* Left Text Shadow Gradient to guarantee crystal-clear typography readability */}
          <div className="absolute inset-y-0 left-0 w-full lg:w-[58%] bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/95 to-transparent z-1" />

          {/* Golden Ambient Rim Lighting & Glow Ribbons with multi-rate parallax depth */}
          <motion.div
            style={prefersReducedMotion ? {} : { y: glowY, opacity: glowOpacity }}
            className="absolute top-1/4 right-[12%] w-[600px] h-[600px] bg-radial from-[#DAAF37]/20 via-[#DAAF37]/5 to-transparent blur-[130px] pointer-events-none will-change-transform"
          />
          <motion.div
            style={prefersReducedMotion ? {} : { y: glowY, opacity: glowOpacity }}
            className="absolute bottom-0 right-[20%] w-[500px] h-[300px] bg-radial from-[#DAAF37]/15 to-transparent blur-[100px] pointer-events-none will-change-transform"
          />

          {/* Subtle floating golden dust particles moving in gentle counter-depth */}
          <motion.div
            style={prefersReducedMotion ? {} : { y: particlesY }}
            className="absolute inset-0 pointer-events-none will-change-transform opacity-60"
          >
            <div className="absolute top-[20%] right-[35%] w-1.5 h-1.5 rounded-full bg-[#F4D03F]/60 blur-[0.5px]" />
            <div className="absolute top-[45%] right-[22%] w-1 h-1 rounded-full bg-[#DAAF37]/70 blur-[0.5px]" />
            <div className="absolute top-[60%] right-[42%] w-2 h-2 rounded-full bg-[#F4D03F]/40 blur-[1px]" />
            <div className="absolute top-[30%] right-[15%] w-1.5 h-1.5 rounded-full bg-[#DAAF37]/50 blur-[0.5px]" />
          </motion.div>
        </div>

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center min-h-[420px] lg:min-h-[480px]">
            {/* Left Column: Text & CTAs */}
            <FadeIn direction="up" className="lg:col-span-7 xl:col-span-6 flex flex-col items-start text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DAAF37]/10 border border-[#DAAF37]/40 text-[#F4D03F] text-xs font-heading font-medium tracking-wider uppercase mb-4 shadow-[0_0_15px_rgba(218,175,55,0.15)]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F4D03F] animate-pulse" />
                CONNECTED DIGITAL ECOSYSTEM
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold tracking-tight text-[#F5F5F5] leading-[1.08] mb-3">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFFFFF] via-[#F4D03F] to-[#DAAF37]">
                  NEXORA ONE
                </span>
                <span className="block text-2xl sm:text-3xl lg:text-4xl font-serif font-normal text-white/90 mt-1.5">
                  A Connected Digital Ecosystem
                </span>
              </h1>

              <p className="text-base sm:text-lg text-white/75 font-sans leading-relaxed max-w-xl mb-6">
                Empowering Customers, Businesses, Professionals, Partners and Brands through Technology.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <Button
                  to="/ecosystem"
                  variant="primary"
                  size="lg"
                  icon={<ArrowRight className="w-4 h-4" />}
                >
                  Explore Ecosystem
                </Button>
                <Button
                  to="/products"
                  variant="secondary"
                  size="lg"
                >
                  Explore Products
                </Button>
              </div>

              {/* Mobile-only visual integration (seamless without card/border/box) */}
              <div className="lg:hidden relative w-full mt-6 pointer-events-none">
                <div className="relative w-full aspect-[16/9] overflow-hidden">
                  <img
                    src="/assets/hero-devices.webp"
                    alt="Nexora One connected digital ecosystem"
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-[#0A0A0A]/40" />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/60 via-transparent to-[#0A0A0A]/40" />
                </div>
              </div>
            </FadeIn>

            {/* Right Column: Spacework on desktop allowing the integrated background visual to breathe */}
            <div className="hidden lg:block lg:col-span-5 xl:col-span-6 min-h-[420px] pointer-events-none" aria-hidden="true" />
          </div>
        </div>
      </section>

      {/* 02. Ecosystem Overview Section (matching approved visual reference) */}
      <EcosystemOverview />

      {/* Who Benefits Preview Section (per 17_VISUAL_REFERENCE §4.6) */}
      <section className="py-6 sm:py-8 border-t border-white/[0.08] bg-white/[0.01]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Participant Value"
            title="Designed for"
            titleAccent="Every Participant"
            subtitle="Nexora provides structured tools, discovery mechanisms, and digital advantages across four primary stakeholders."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-6">
            {[
              {
                title: 'Customers',
                tag: 'Discover. Book. Save. Earn. Repeat.',
                desc: 'Find trusted local businesses, book instantly, and collect rewards without juggling disjointed apps.',
              },
              {
                title: 'Business Owners',
                tag: 'Run. Grow. Automate.',
                desc: 'Launch branded white-label websites, automate customer communication, and manage daily operations.',
              },
              {
                title: 'Growth Partners',
                tag: 'Onboard. Track. Progress.',
                desc: 'A dedicated partner dashboard and milestone progression for onboarding local merchants to the platform.',
              },
              {
                title: 'B2B Networks',
                tag: 'Supply. Distribute. Expand.',
                desc: 'Wholesale marketplace access connecting manufacturers directly with local salons and verified professionals.',
              },
            ].map((card, i) => (
              <GlassCard key={i} className="p-5 sm:p-6 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-heading font-semibold text-white mb-1">{card.title}</h3>
                  <div className="text-xs text-[#DAAF37] font-medium mb-2.5">{card.tag}</div>
                  <p className="text-xs text-white/70 font-sans leading-relaxed">{card.desc}</p>
                </div>
                <div className="mt-3.5 pt-3.5 border-t border-white/10 flex items-center text-xs text-[#DAAF37]">
                  <span>View Full Journey</span>
                  <span className="ml-1">→</span>
                </div>
              </GlassCard>
            ))}
          </div>

          <div className="flex justify-center">
            <Button to="/who-benefits" variant="secondary" size="md">
              See Who Benefits
            </Button>
          </div>
        </div>
      </section>

      <SectionDivider className="my-5 sm:my-6" />

      {/* 4.3 Key Products Preview */}
      <section className="py-6 sm:py-8 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#DAAF37]/10 border border-[#DAAF37]/30 text-[#F4D03F] text-xs font-heading font-medium tracking-wide uppercase mb-2">
              Platform Preview
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-[#F5F5F5]">
              Powerful Products for a{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFF6D6] via-[#F4D03F] to-[#DAAF37]">
                Bigger Future
              </span>
            </h2>
            <p className="mt-2 text-sm sm:text-base text-white/70 font-sans max-w-xl">
              Explore our platforms built for customers, businesses, partners and brands.
            </p>
          </div>
          <Button to="/products" variant="secondary" size="sm" className="self-start md:self-auto">
            View All Products
          </Button>
        </div>

        {/* Key Products Preview Visual Asset */}
        <div className="relative w-full rounded-2xl md:rounded-3xl overflow-hidden border border-[#DAAF37]/30 bg-[#0A0A0A] shadow-[0_12px_45px_rgba(0,0,0,0.8)] group">
          <img
            src="/assets/home-products-preview.webp"
            alt="Nexora One Key Products Preview - Customer App, SalonOS, White-Label, Growth Partner, B2B Marketplace"
            className="w-full h-auto object-cover object-center"
            loading="lazy"
          />
          <div className="absolute inset-0 rounded-2xl md:rounded-3xl pointer-events-none ring-1 ring-inset ring-white/10" />
        </div>
      </section>

      {/* 4.4 Verticals Section (Beyond Beauty. A Multi-Vertical Ecosystem.) */}
      <MultiVerticalsSection />

      {/* 4.5 Trust / Differentiation */}
      <TrustDifferentiationSection />

      {/* 06. CTA Section */}
      <HomeCTASection />
    </div>
  );
};
