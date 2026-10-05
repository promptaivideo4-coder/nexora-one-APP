import React from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { FOOTER_SECTIONS } from '../../data/navigation';
import { NexoraLogo } from '../common/NexoraLogo';
import { ArrowUpRight } from 'lucide-react';

export const SiteFooter: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.footer
      initial={shouldReduceMotion ? false : { opacity: 0, y: 15 }}
      whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1.0] }}
      className="relative mt-24 border-t border-[#DAAF37]/20 bg-[#0A0A0A]/90 backdrop-blur-xl"
    >
      {/* Top Gold Hairline Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-[#DAAF37]/60 to-transparent shadow-[0_0_12px_rgba(218,175,55,0.4)]" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Column 1: Brand & Overview */}
          <div className="flex flex-col gap-4">
            <NexoraLogo size="md" showSubtitle={true} />
            <p className="text-sm text-white/70 font-sans leading-relaxed mt-2 max-w-sm">
              {FOOTER_SECTIONS.brand.statement}
            </p>
            <div className="mt-4 flex items-center gap-2 text-xs font-heading font-medium text-[#DAAF37] tracking-wider uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#DAAF37]" />
              Beauty-First • Multi-Vertical
            </div>
          </div>

          {/* Column 2: Ecosystem */}
          <div>
            <h3 className="text-xs font-heading font-semibold uppercase tracking-widest text-[#DAAF37] mb-5">
              Ecosystem Verticals
            </h3>
            <ul className="space-y-3 font-sans text-sm">
              {FOOTER_SECTIONS.ecosystem.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.href}
                    className="text-white/65 hover:text-[#F4D03F] transition-colors inline-flex items-center gap-1 group"
                  >
                    <span>{item.label}</span>
                    <span className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#DAAF37]">
                      ›
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Products */}
          <div>
            <h3 className="text-xs font-heading font-semibold uppercase tracking-widest text-[#DAAF37] mb-5">
              Products & Platforms
            </h3>
            <ul className="space-y-3 font-sans text-sm">
              {FOOTER_SECTIONS.products.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.href}
                    className="text-white/65 hover:text-[#F4D03F] transition-colors inline-flex items-center gap-1 group"
                  >
                    <span>{item.label}</span>
                    <span className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#DAAF37]">
                      ›
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Company & Partnership */}
          <div>
            <h3 className="text-xs font-heading font-semibold uppercase tracking-widest text-[#DAAF37] mb-5">
              Company
            </h3>
            <ul className="space-y-3 font-sans text-sm">
              {FOOTER_SECTIONS.company.map((item) => {
                const isMailto = item.href.startsWith('mailto:');
                if (isMailto) {
                  return (
                    <li key={item.label}>
                      <a
                        href={item.href}
                        className="text-white/65 hover:text-[#F4D03F] transition-colors inline-flex items-center gap-1 group"
                      >
                        <span>{item.label}</span>
                        <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 text-[#DAAF37]" />
                      </a>
                    </li>
                  );
                }
                return (
                  <li key={item.label}>
                    <Link
                      to={item.href}
                      className="text-white/65 hover:text-[#F4D03F] transition-colors inline-flex items-center gap-1 group"
                    >
                      <span>{item.label}</span>
                      <span className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#DAAF37]">
                        ›
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>

            <div className="mt-6 pt-5 border-t border-white/[0.08]">
              <span className="text-xs text-white/50 block mb-1">Corporate Enquiry</span>
              <a
                href={`mailto:${FOOTER_SECTIONS.contactEmail}?subject=Corporate%20Enquiry`}
                className="text-xs text-[#DAAF37] hover:underline break-all"
              >
                {FOOTER_SECTIONS.contactEmail}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-8 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50 font-sans">
          <div>
            © {currentYear} Nexora One. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span className="text-white/40">Connected Digital Ecosystem</span>
            <a
              href={`mailto:${FOOTER_SECTIONS.contactEmail}?subject=Contact%20Nexora`}
              className="hover:text-[#DAAF37] transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};
