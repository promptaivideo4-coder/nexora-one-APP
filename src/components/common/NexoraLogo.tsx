import React from 'react';
import { Link } from 'react-router-dom';

export interface NexoraLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showSubtitle?: boolean;
  linkToHome?: boolean;
}

export const NexoraLogo: React.FC<NexoraLogoProps> = ({
  className = '',
  size = 'md',
  showSubtitle = true,
  linkToHome = true,
}) => {
  const iconSize = {
    sm: 'w-7 h-7 text-xs',
    md: 'w-9 h-9 text-sm',
    lg: 'w-12 h-12 text-lg',
  }[size];

  const textSizes = {
    sm: 'text-base sm:text-lg',
    md: 'text-lg sm:text-xl',
    lg: 'text-2xl sm:text-3xl',
  }[size];

  const content = (
    <div className={`inline-flex items-center gap-2.5 sm:gap-3 flex-shrink-0 select-none whitespace-nowrap ${className}`}>
      {/* Sculpted Gold 'N' Emblem */}
      <div className={`relative ${iconSize} flex items-center justify-center rounded-xl bg-gradient-to-br from-[#1F1F1F] to-[#0A0A0A] border border-[#DAAF37]/40 shadow-[0_0_15px_rgba(218,175,55,0.3)] flex-shrink-0 overflow-hidden group`}>
        {/* Ambient Ring / Halo */}
        <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-[#DAAF37]/20 via-transparent to-[#F4D03F]/20 opacity-70 group-hover:opacity-100 transition-opacity" />
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-4/5 h-4/5 relative z-10 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
        >
          <defs>
            <linearGradient id="goldN1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFF2B2" />
              <stop offset="40%" stopColor="#F4D03F" />
              <stop offset="80%" stopColor="#DAAF37" />
              <stop offset="100%" stopColor="#997517" />
            </linearGradient>
            <linearGradient id="goldN2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FFF9E0" />
              <stop offset="50%" stopColor="#E5BE42" />
              <stop offset="100%" stopColor="#8A6710" />
            </linearGradient>
          </defs>
          {/* Outer gold ring arc */}
          <circle cx="50" cy="50" r="44" stroke="url(#goldN1)" strokeWidth="3" opacity="0.6" strokeDasharray="180 50" />
          {/* Stylized N character */}
          <path
            d="M26 80V20L54 58V20H74V80L46 42V80H26Z"
            fill="url(#goldN1)"
            stroke="#DAAF37"
            strokeWidth="1.5"
          />
        </svg>
      </div>

      {/* Brand Name & Descriptor */}
      <div className="flex flex-col justify-center leading-none">
        <div className={`font-serif font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-[#FFFFFF] via-[#F4D03F] to-[#DAAF37] ${textSizes}`}>
          NEXORA ONE
        </div>
        {showSubtitle && (
          <div className="text-[9px] sm:text-[10px] tracking-[0.2em] font-heading font-medium text-[#DAAF37]/90 uppercase mt-0.5">
            Connected Digital Ecosystem
          </div>
        )}
      </div>
    </div>
  );

  if (linkToHome) {
    return (
      <Link to="/" className="focus:outline-none focus-visible:ring-2 focus-visible:ring-[#DAAF37] rounded-lg">
        {content}
      </Link>
    );
  }

  return content;
};
