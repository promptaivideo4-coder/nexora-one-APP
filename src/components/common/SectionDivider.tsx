import React from 'react';

export interface SectionDividerProps {
  className?: string;
  width?: 'sm' | 'md' | 'lg';
}

export const SectionDivider: React.FC<SectionDividerProps> = ({
  className = '',
  width = 'md',
}) => {
  const widthClasses = {
    sm: 'w-24',
    md: 'w-48',
    lg: 'w-80',
  }[width];

  return (
    <div className={`relative flex items-center justify-center my-16 sm:my-24 ${className}`} aria-hidden="true">
      <div className={`h-[1px] ${widthClasses} bg-gradient-to-r from-transparent via-[#DAAF37]/50 to-transparent`} />
      <div className="absolute w-1.5 h-1.5 rounded-full bg-[#DAAF37] shadow-[0_0_8px_rgba(218,175,55,0.8)]" />
    </div>
  );
};
