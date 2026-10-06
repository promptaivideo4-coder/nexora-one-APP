import React, { useRef } from 'react';
import {
  ExternalLink,
  Sparkles,
  Globe,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { Button } from '../components/common/Button';
import { GlassCard } from '../components/common/GlassCard';
import { StatusBadge } from '../components/common/StatusBadge';
import { FadeIn } from '../components/common/MotionWrapper';
import { PRODUCTS_DATA, ProductItem } from '../data/products';

const HorizontalProductRow: React.FC<{ categoryTitle: string; items: ProductItem[] }> = ({ categoryTitle, items }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.75;
      scrollRef.current.scrollTo({
        left: direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="mb-6 sm:mb-8">
      <div className="flex items-center justify-between mb-2.5">
        <h2 className="text-sm sm:text-base font-heading font-bold text-white tracking-wide flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#DAAF37]" />
          {categoryTitle}
        </h2>
        <div className="hidden sm:flex items-center gap-1.5">
          <button
            onClick={() => scroll('left')}
            className="w-7 h-7 rounded-full bg-white/10 border border-white/20 text-white flex items-center justify-center hover:bg-[#DAAF37] hover:text-[#0A0A0A] hover:border-[#DAAF37] transition-all"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={() => scroll('right')}
            className="w-7 h-7 rounded-full bg-white/10 border border-white/20 text-white flex items-center justify-center hover:bg-[#DAAF37] hover:text-[#0A0A0A] hover:border-[#DAAF37] transition-all"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="relative group">
        <div
          ref={scrollRef}
          className="flex flex-row overflow-x-auto snap-x snap-mandatory gap-3 pb-2 pt-1 scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {items.map((product) => {
            const isSalonOS = product.id === 'salonos';
            return (
              <div
                key={product.id}
                className="min-w-[200px] sm:min-w-[230px] max-w-[240px] flex-shrink-0 snap-start flex"
              >
                <GlassCard
                  className={`p-3.5 sm:p-4 flex flex-col justify-between w-full rounded-2xl ${
                    isSalonOS
                      ? 'border-[#DAAF37]/60 bg-gradient-to-b from-white/[0.08] via-black/90 to-black shadow-[0_6px_25px_rgba(218,175,55,0.2)]'
                      : 'border-white/10 bg-black/60'
                  }`}
                  glow={isSalonOS ? 'gold' : 'subtle'}
                >
                  <div>
                    {isSalonOS && (
                      <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#DAAF37]/20 border border-[#DAAF37]/40 text-[#F4D03F] text-[9px] font-heading font-semibold uppercase tracking-wider mb-2">
                        <Sparkles className="w-2.5 h-2.5" />
                        Flagship
                      </div>
                    )}
                    <div className="flex items-start justify-between gap-2 mb-1.5">
                      <h3 className="text-xs sm:text-sm font-heading font-bold text-white leading-snug line-clamp-1">
                        {product.name}
                      </h3>
                      <StatusBadge status={product.status} />
                    </div>

                    <p className="text-[11px] text-white/75 font-sans leading-relaxed mb-2.5 line-clamp-2">
                      {product.oneLiner}
                    </p>

                    <div className="text-[10px] text-white/40 font-sans mb-3 truncate">
                      <span className="text-white/60">Audience:</span> {product.audience}
                    </div>
                  </div>

                  <div className="pt-2 border-t border-white/10">
                    {product.demoUrl ? (
                      <a
                        href={product.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-1.5 px-3 rounded-xl bg-gradient-to-r from-[#F4D03F] to-[#DAAF37] text-[#0A0A0A] font-heading font-bold text-[10px] uppercase tracking-wider text-center flex items-center justify-center gap-1 shadow-sm hover:opacity-90 transition-opacity"
                      >
                        <span>Demo</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    ) : (
                      <a
                        href={`/verticals#${product.id}`}
                        className="w-full py-1.5 px-3 rounded-xl bg-white/[0.06] border border-white/15 text-white font-heading font-semibold text-[10px] text-center flex items-center justify-center hover:bg-white/10 transition-colors"
                      >
                        View Vertical
                      </a>
                    )}
                  </div>
                </GlassCard>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export const ProductsPage: React.FC = () => {
  // Deduplicate and categorize products
  const coreOperations = PRODUCTS_DATA.filter((p) =>
    ['customer-app', 'salonos', 'white-label', 'ai-tools'].includes(p.id)
  );
  const professionalNetworks = PRODUCTS_DATA.filter((p) =>
    ['growth-partner', 'salon-jobs', 'beauty-b2b'].includes(p.id)
  );
  const expansionVerticals = PRODUCTS_DATA.filter((p) =>
    ['real-estate-platform', 'food-platform', 'advertising-platform'].includes(p.id)
  );

  return (
    <div className="w-full pb-12">
      {/* Low-Profile Hero Header */}
      <section className="relative overflow-hidden w-full border-b border-white/[0.08] bg-[#0A0A0A] py-8 sm:py-12">
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-transparent to-[#0A0A0A]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[200px] bg-[#DAAF37]/10 blur-[100px] rounded-full" />
        </div>

        <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#DAAF37]/10 border border-[#DAAF37]/30 text-[#F4D03F] text-[11px] font-heading font-medium tracking-wide uppercase mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F4D03F] animate-pulse" />
              PRODUCTS & SERVICES
            </div>

            <h1 className="text-2xl sm:text-4xl font-serif font-bold text-[#F5F5F5] tracking-tight max-w-3xl mx-auto leading-tight mb-3">
              The Nexora{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFFFFF] via-[#F4D03F] to-[#DAAF37]">
                Product Family
              </span>
            </h1>

            <p className="text-xs sm:text-sm text-white/75 font-sans leading-relaxed max-w-2xl mx-auto mb-4">
              Explore our unified connected ecosystem across core operations, professional networks, and local commerce expansion.
            </p>

            {/* Platform Portal Link */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs">
              <span className="text-white/60">Portal:</span>
              <a
                href="https://fanal-templetes-app.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#DAAF37] hover:underline font-heading font-medium inline-flex items-center gap-1"
              >
                <span>Nexora Platform Portal</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Main Products Horizontal Rows Section */}
      <section className="py-6 sm:py-8 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <HorizontalProductRow
          categoryTitle="Core Operations & Customer Platforms"
          items={coreOperations}
        />

        <HorizontalProductRow
          categoryTitle="Ecosystem & Professional Networks"
          items={professionalNetworks}
        />

        <HorizontalProductRow
          categoryTitle="Multi-Vertical Local Commerce & Expansion"
          items={expansionVerticals}
        />
      </section>

      {/* Compact White-Label Architecture Preview */}
      <section className="py-6 sm:py-8 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <GlassCard className="p-5 sm:p-8 border-[#DAAF37]/35 overflow-hidden" glow="gold">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="max-w-xl">
              <span className="text-[10px] uppercase font-heading font-semibold tracking-widest text-[#DAAF37] block mb-1">
                White-Label Architecture
              </span>
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-white mb-2">
                Your Brand. Your Digital Presence.
              </h2>
              <p className="text-xs sm:text-sm text-white/75 font-sans leading-relaxed mb-4">
                Launch branded websites and apps connected directly to SalonOS operations without building software from scratch.
              </p>
              <Button
                href="https://fanal-templetes-app.vercel.app/templates"
                variant="primary"
                size="sm"
                icon={<ExternalLink className="w-3.5 h-3.5" />}
              >
                Explore Templates
              </Button>
            </div>

            <div className="p-4 rounded-2xl bg-gradient-to-b from-white/[0.04] to-black border border-white/10 text-center flex-shrink-0">
              <Globe className="w-8 h-8 text-[#DAAF37] mx-auto mb-2" />
              <div className="text-xs font-heading font-bold text-white mb-1">Central Engine</div>
              <div className="text-[10px] text-white/50">Unified CMS & SalonOS Sync</div>
            </div>
          </div>
        </GlassCard>
      </section>

      {/* Footer Note */}
      <section className="pb-8 max-w-[800px] mx-auto px-4 text-center">
        <p className="text-[11px] text-white/40 font-sans">
          Status labels reflect current product states. Demo links open external applications.
        </p>
      </section>
    </div>
  );
};
