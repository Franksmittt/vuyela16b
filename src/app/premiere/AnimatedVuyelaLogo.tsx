'use client';

import Image from 'next/image';

type AnimatedVuyelaLogoProps = {
  variant?: 'light' | 'dark';
  size?: 'nav' | 'hero';
  className?: string;
  priority?: boolean;
};

/**
 * Official Vuyela Group wordmark with living motion:
 * entrance reveal, flowing silver bands, gold sheen, arrow pulse.
 */
export default function AnimatedVuyelaLogo({
  variant = 'light',
  size = 'nav',
  className = '',
  priority = false,
}: AnimatedVuyelaLogoProps) {
  const src =
    variant === 'dark'
      ? '/images/brand/vuyela-logo-dark.webp'
      : '/images/brand/vuyela-logo-light-clear.png';

  const isHero = size === 'hero';

  return (
    <div
      className={`pm-logo-alive pm-logo-alive--${size} pm-logo-alive--${variant} ${className}`}
      aria-label="Vuyela Group"
      role="img"
    >
      {/* Living silver pathway bands — brand motion language */}
      <svg
        className="pm-logo-bands"
        viewBox="0 0 720 240"
        aria-hidden="true"
        focusable="false"
      >
        <defs>
          <linearGradient id="pmBandGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#9a9a9a" stopOpacity="0" />
            <stop offset="25%" stopColor="#c8c8c8" stopOpacity="0.55" />
            <stop offset="55%" stopColor="#8e8e8e" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#b0b0b0" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="pmBandFlow" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
            <stop offset="40%" stopColor="#ffffff" stopOpacity="0" />
            <stop offset="50%" stopColor="#ffffff" stopOpacity="0.85" />
            <stop offset="60%" stopColor="#ffffff" stopOpacity="0" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
            <animate
              attributeName="x1"
              values="-100%;100%"
              dur="3.8s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="x2"
              values="0%;200%"
              dur="3.8s"
              repeatCount="indefinite"
            />
          </linearGradient>
        </defs>
        <g className="pm-logo-band-group">
          <path
            className="pm-logo-band pm-logo-band--1"
            d="M-20 168 C80 158, 180 120, 300 108 C420 96, 520 88, 760 62"
            fill="none"
            stroke="url(#pmBandGrad)"
            strokeWidth="18"
            strokeLinecap="round"
          />
          <path
            className="pm-logo-band pm-logo-band--2"
            d="M-20 186 C90 176, 200 142, 320 128 C440 114, 560 100, 760 78"
            fill="none"
            stroke="url(#pmBandGrad)"
            strokeWidth="14"
            strokeLinecap="round"
          />
          <path
            className="pm-logo-band pm-logo-band--3"
            d="M-20 202 C100 194, 220 164, 340 148 C460 132, 580 112, 760 94"
            fill="none"
            stroke="url(#pmBandGrad)"
            strokeWidth="10"
            strokeLinecap="round"
          />
          <path
            className="pm-logo-band-shine"
            d="M-20 186 C90 176, 200 142, 320 128 C440 114, 560 100, 760 78"
            fill="none"
            stroke="url(#pmBandFlow)"
            strokeWidth="6"
            strokeLinecap="round"
          />
        </g>
        {/* Stylized arrow — pulses forward */}
        <g className="pm-logo-arrow">
          <path d="M292 168 L318 152 L308 168 L318 184 Z" fill="#6a6a6a" />
          <path d="M304 168 L330 152 L320 168 L330 184 Z" fill="#8a8a8a" />
        </g>
      </svg>

      <div className="pm-logo-mark">
        <Image
          src={src}
          alt=""
          width={720}
          height={238}
          priority={priority}
          className="pm-logo-img"
          sizes={isHero ? '(max-width: 768px) 90vw, 520px' : '180px'}
        />
        {/* Gold sheen sweeping across VUYELA */}
        <span className="pm-logo-sheen" aria-hidden="true" />
      </div>
    </div>
  );
}
