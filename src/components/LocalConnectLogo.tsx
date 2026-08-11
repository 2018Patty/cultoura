import React from 'react';
import greenLogo from '../assets/green.svg';
import whiteLogo from '../assets/white.svg';

interface LocalConnectLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'full' | 'icon' | 'dark' | 'light';
  showTagline?: boolean;
}

export const LocalConnectLogo: React.FC<LocalConnectLogoProps> = ({
  className = '',
  size = 'md',
  variant = 'full',
  showTagline = true
}) => {
  const logoSrc = variant === 'light' ? whiteLogo : greenLogo;

  let heightPx = 64;
  if (size === 'sm') heightPx = 44;
  if (size === 'lg') heightPx = 88;
  if (size === 'xl') heightPx = 120;

  if (variant === 'icon') {
    return (
      <div
        className={`aspect-square rounded-2xl bg-[#1F4B38] text-[#F6F8F4] flex items-center justify-center font-black shadow-md ${className}`}
        style={{ height: `${heightPx}px`, width: `${heightPx}px` }}
      >
        <span className="text-2xl italic tracking-tighter" style={{ fontFamily: "'Google Sans', sans-serif" }}>L</span>
      </div>
    );
  }

  // The wordmark image is cropped tight to its content (wordmark + tagline baked in);
  // showTagline just shrinks it slightly so the tagline line reads as a subtler accent.
  const imgHeightPx = showTagline ? heightPx : heightPx * 0.78;

  return (
    <div className={`inline-flex flex-col items-start justify-center select-none ${className}`}>
      <img
        src={logoSrc}
        alt="LocalConnect — The Meaningful Travels"
        style={{ height: `${imgHeightPx}px` }}
        className="w-auto"
      />
    </div>
  );
};
