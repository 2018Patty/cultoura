import React from 'react';

interface CultouraLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'full' | 'icon' | 'dark' | 'light';
  showTagline?: boolean;
}

export const CultouraLogo: React.FC<CultouraLogoProps> = ({
  className = '',
  size = 'md',
  variant = 'full',
  showTagline = true
}) => {
  const logoSrc = variant === 'light' ? '/logo-white.png' : '/logo-brown.png';

  let heightPx = 38;
  if (size === 'sm') heightPx = 28;
  if (size === 'lg') heightPx = 54;
  if (size === 'xl') heightPx = 76;

  if (variant === 'icon') {
    return (
      <div
        className={`aspect-square rounded-2xl bg-[#5A3A28] text-[#FAF4E9] flex items-center justify-center font-black shadow-md ${className}`}
        style={{ height: `${heightPx}px`, width: `${heightPx}px` }}
      >
        <span className="text-2xl italic tracking-tighter" style={{ fontFamily: "'Google Sans', sans-serif" }}>C</span>
      </div>
    );
  }

  // The wordmark image already includes the "CONNECT. EXPLORE. ADORE." tagline baked in,
  // so it's rendered at a larger height and showTagline just toggles that extra vertical space.
  const imgHeightPx = showTagline ? heightPx * 1.45 : heightPx;

  return (
    <div className={`inline-flex flex-col items-start justify-center select-none ${className}`}>
      <img
        src={logoSrc}
        alt="Cultoura — Connect. Explore. Adore."
        style={{ height: `${imgHeightPx}px` }}
        className="w-auto"
      />
    </div>
  );
};


