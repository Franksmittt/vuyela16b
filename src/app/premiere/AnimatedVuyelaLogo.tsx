'use client';

import { useId } from 'react';

type AnimatedVuyelaLogoProps = {
  size?: 'nav' | 'hero';
  className?: string;
  /** When true, run the staged swoosh → wordmark → tagline sequence */
  animate?: boolean;
};

/**
 * Layered brand mark — separate swooshes, arrow, VUYELA, GROUP, tagline.
 * Hero plays a staged build; nav stays compact/static.
 */
export default function AnimatedVuyelaLogo({
  size = 'hero',
  className = '',
  animate = size === 'hero',
}: AnimatedVuyelaLogoProps) {
  const uid = useId().replace(/:/g, '');
  const isHero = size === 'hero';
  const live = animate && isHero ? 'pm-logo-live' : 'pm-logo-static';

  return (
    <div
      className={`pm-logo-pieces pm-logo-pieces--${size} ${live} ${className}`}
      role="img"
      aria-label="Vuyela Group — Locally invested, Globally connected"
    >
      <svg
        viewBox="0 0 720 240"
        className="pm-logo-svg"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        focusable="false"
      >
        <defs>
          <linearGradient id={`${uid}-s1`} x1="0%" y1="0%" x2="100%" y2="40%">
            <stop offset="0%" stopColor="#b8b8b8" />
            <stop offset="45%" stopColor="#ececec" />
            <stop offset="100%" stopColor="#8f8f8f" />
          </linearGradient>
          <linearGradient id={`${uid}-s2`} x1="0%" y1="0%" x2="100%" y2="50%">
            <stop offset="0%" stopColor="#9a9a9a" />
            <stop offset="50%" stopColor="#d4d4d4" />
            <stop offset="100%" stopColor="#6e6e6e" />
          </linearGradient>
          <linearGradient id={`${uid}-s3`} x1="0%" y1="20%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#7a7a7a" />
            <stop offset="55%" stopColor="#cfcfcf" />
            <stop offset="100%" stopColor="#5a5a5a" />
          </linearGradient>
          <linearGradient id={`${uid}-gold`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ffd84a" />
            <stop offset="55%" stopColor="#e6b800" />
            <stop offset="100%" stopColor="#c49a00" />
          </linearGradient>
        </defs>

        {/* 1 — Grey swoosh ribbons (draw / wipe in first) */}
        <g className="pm-piece pm-piece-swooshes">
          <path
            className="pm-swoosh pm-swoosh--1"
            fill={`url(#${uid}-s1)`}
            d="M12 178 C90 168 160 148 240 132 C340 112 440 96 580 78 C640 70 700 64 720 60 L720 92 C680 98 620 108 560 118 C440 138 340 156 250 174 C170 190 100 202 12 210 Z"
          />
          <path
            className="pm-swoosh pm-swoosh--2"
            fill={`url(#${uid}-s2)`}
            d="M8 196 C88 186 170 168 250 152 C360 130 470 112 600 94 C650 86 700 80 720 76 L720 104 C680 110 630 118 580 126 C460 146 360 166 260 184 C180 198 100 210 8 218 Z"
          />
          <path
            className="pm-swoosh pm-swoosh--3"
            fill={`url(#${uid}-s3)`}
            d="M4 212 C86 204 168 188 250 174 C370 152 490 132 620 114 C670 106 705 100 720 98 L720 122 C680 126 640 132 590 140 C470 160 360 180 250 198 C170 212 90 222 4 228 Z"
          />
        </g>

        {/* 2 — Arrow */}
        <g className="pm-piece pm-piece-arrow">
          <path fill="#5c5c5c" d="M318 156 L348 138 L338 156 L348 174 Z" />
          <path fill="#8a8a8a" d="M332 156 L362 138 L352 156 L362 174 Z" />
        </g>

        {/* 3 — VUYELA wordmark */}
        <g className="pm-piece pm-piece-vuyela">
          <text
            x="28"
            y="128"
            className="pm-logo-vuyela-stroke"
            fontFamily="var(--font-family-display), 'Arial Black', Impact, sans-serif"
            fontWeight="700"
            fontSize="108"
            letterSpacing="-2"
          >
            VUYELA
          </text>
          <text
            x="28"
            y="128"
            className="pm-logo-vuyela-fill"
            fontFamily="var(--font-family-display), 'Arial Black', Impact, sans-serif"
            fontWeight="700"
            fontSize="108"
            letterSpacing="-2"
            fill={`url(#${uid}-gold)`}
          >
            VUYELA
          </text>
        </g>

        {/* 4 — GROUP */}
        <g className="pm-piece pm-piece-group">
          <text
            x="372"
            y="168"
            fontFamily="var(--font-family-display), Arial, sans-serif"
            fontWeight="700"
            fontSize="34"
            letterSpacing="6"
            fill="#1a1a1a"
          >
            GROUP
          </text>
        </g>

        {/* 5 — Tagline */}
        <g className="pm-piece pm-piece-tagline">
          <text
            x="720"
            y="218"
            textAnchor="end"
            fontFamily="var(--font-family-sans), Georgia, serif"
            fontStyle="italic"
            fontSize="18"
            fill="#2a2a2a"
          >
            Locally invested, Globally connected.
          </text>
        </g>
      </svg>
    </div>
  );
}
