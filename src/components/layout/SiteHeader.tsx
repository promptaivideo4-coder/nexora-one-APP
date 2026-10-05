import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion, useReducedMotion, useScroll, useSpring } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';
import { NAV_ITEMS, HEADER_CTA } from '../../data/navigation';
import { NexoraLogo } from '../common/NexoraLogo';
import { Button } from '../common/Button';

export const SiteHeader: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const shouldReduceMotion = useReducedMotion();

  // Scroll Progress Tracking
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <>
      {/* Thin, Elegant Gold Scroll Progress Bar */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-[#DAAF37] via-[#F4D03F] to-[#FFF5D0] shadow-[0_0_10px_rgba(244,208,63,0.8),0_0_20px_rgba(218,175,55,0.4)] z-[100] origin-left pointer-events-none"
        aria-hidden="true"
      />

      {/* Skip to Main Content Link for Keyboard Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-[#DAAF37] focus:text-[#0A0A0A] focus:font-heading focus:font-bold focus:rounded-lg focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-white"
      >
        Skip to main content
      </a>

      <motion.header
        initial={shouldReduceMotion ? false : { opacity: 0, y: -10 }}
        animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1.0] }}
        className={`sticky top-0 z-50 w-full transition-colors duration-300 ${
        scrolled
          ? 'bg-[#0A0A0A]/90 backdrop-blur-xl border-b border-white/[0.12] shadow-[0_4px_30px_rgba(0,0,0,0.6)] py-2.5'
          : 'bg-[#0A0A0A]/75 backdrop-blur-md border-b border-white/[0.08] py-3.5'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        {/* Left: Brand Logo & Wordmark (never wraps or clips) */}
        <div className="flex-shrink-0">
          <NexoraLogo size="md" showSubtitle={true} />
        </div>

        {/* Center: 10 Nav Items (Desktop ≥ 1024px) */}
        <nav
          className="hidden xl:flex items-center gap-1 2xl:gap-2 flex-nowrap"
          aria-label="Main Navigation"
        >
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.id}
              to={item.route}
              className={({ isActive }) =>
                `relative px-2.5 py-1.5 text-[13px] font-heading font-medium tracking-wide rounded-md transition-colors whitespace-nowrap ${
                  isActive
                    ? 'text-[#F4D03F]'
                    : 'text-white/70 hover:text-white hover:bg-white/[0.05]'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <span>{item.shortLabel}</span>
                  {isActive && (
                    <span className="absolute bottom-0 left-2.5 right-2.5 h-[2px] bg-gradient-to-r from-[#F4D03F] to-[#DAAF37] shadow-[0_0_8px_rgba(244,208,63,0.8)] rounded-full" />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Medium Desktop (1024px - 1279px) - slightly tighter spacing */}
        <nav
          className="hidden lg:flex xl:hidden items-center gap-0.5 flex-nowrap"
          aria-label="Main Navigation Tablet"
        >
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.id}
              to={item.route}
              className={({ isActive }) =>
                `relative px-2 py-1 text-[12px] font-heading font-medium tracking-tight rounded transition-colors whitespace-nowrap ${
                  isActive
                    ? 'text-[#F4D03F]'
                    : 'text-white/70 hover:text-white hover:bg-white/[0.05]'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <span>{item.shortLabel}</span>
                  {isActive && (
                    <span className="absolute bottom-0 left-2 right-2 h-[2px] bg-[#F4D03F] rounded-full" />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Right: Primary Header CTA (only one approved CTA: Explore the Ecosystem) */}
        <div className="hidden lg:flex items-center flex-shrink-0">
          <Button
            to={HEADER_CTA.target}
            variant="primary"
            size="sm"
            icon={<ArrowRight className="w-3.5 h-3.5" />}
            className="whitespace-nowrap shadow-[0_2px_15px_rgba(218,175,55,0.3)]"
          >
            {HEADER_CTA.label}
          </Button>
        </div>

        {/* Mobile Menu Trigger (< 1024px) */}
        <div className="flex lg:hidden items-center gap-3">
          <Button
            to={HEADER_CTA.target}
            variant="primary"
            size="sm"
            className="text-xs px-3 py-1.5 sm:hidden whitespace-nowrap"
          >
            Ecosystem
          </Button>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl bg-white/[0.08] border border-white/[0.15] text-[#F5F5F5] hover:text-[#F4D03F] hover:border-[#DAAF37]/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#DAAF37] transition-colors"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Glass Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[61px] z-40 bg-[#0A0A0A]/95 backdrop-blur-2xl border-t border-white/[0.1] lg:hidden flex flex-col justify-between p-6 overflow-y-auto">
          <div className="flex flex-col gap-2">
            <div className="text-xs uppercase font-heading font-semibold tracking-wider text-[#DAAF37] mb-2 px-3">
              Navigation
            </div>
            {NAV_ITEMS.map((item, idx) => (
              <NavLink
                key={item.id}
                to={item.route}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `flex items-center justify-between px-4 py-3 rounded-xl border text-sm font-heading font-medium transition-all ${
                    isActive
                      ? 'bg-gradient-to-r from-[#DAAF37]/20 to-transparent border-[#DAAF37]/50 text-[#F4D03F]'
                      : 'bg-white/[0.03] border-white/[0.08] text-white/80 hover:bg-white/[0.08] hover:text-white'
                  }`
                }
              >
                <span>{item.fullLabel}</span>
                <span className="text-xs font-sans text-white/40">0{idx + 1}</span>
              </NavLink>
            ))}
          </div>

          <div className="pt-6 border-t border-white/[0.1] mt-6 flex flex-col gap-3">
            <Button
              to={HEADER_CTA.target}
              variant="primary"
              size="lg"
              className="w-full text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              {HEADER_CTA.label}
            </Button>
            <p className="text-center text-xs text-white/40 font-sans">
              NEXORA ONE — Connected Digital Ecosystem
            </p>
          </div>
        </div>
      )}
    </motion.header>
    </>
  );
};
