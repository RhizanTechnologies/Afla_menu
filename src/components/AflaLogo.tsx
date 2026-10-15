import React from "react";

interface AflaLogoProps {
  size?: number;
  className?: string;
  showText?: boolean;
}

export function AflaLogo({
  size = 40,
  className = "",
  showText = false,
}: AflaLogoProps) {
  return (
    <div className={`inline-flex items-center gap-2.5 select-none ${className}`}>
      {/* 100% Crisp Vector SVG Logo (Zero blur, zero raster screenshot) */}
      <svg
        width={size}
        height={size}
        viewBox="0 0 160 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="AFLA Restaurant Rooster Logo"
        className="shrink-0 drop-shadow-xs"
      >
        <defs>
          <linearGradient id="aflaBadgeBg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFA133" />
            <stop offset="100%" stopColor="#EA6E00" />
          </linearGradient>
          <linearGradient id="aflaRibbonBg" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#F98825" />
            <stop offset="50%" stopColor="#FFA64D" />
            <stop offset="100%" stopColor="#F98825" />
          </linearGradient>
        </defs>

        {/* Outer Circular Badge with Dark Brown / Charcoal Border */}
        <circle
          cx="80"
          cy="74"
          r="66"
          fill="url(#aflaBadgeBg)"
          stroke="#2A170B"
          strokeWidth="7"
        />

        {/* Inner subtle decorative ring */}
        <circle
          cx="80"
          cy="74"
          r="58"
          fill="none"
          stroke="#FFDFB0"
          strokeWidth="2"
          strokeDasharray="4 3"
          opacity="0.8"
        />

        {/* Dark Rooster Tail Feathers fanning out on the right */}
        <g id="tail-feathers">
          <path
            d="M 92 68 C 114 54, 134 58, 142 74 C 132 84, 114 84, 94 80 Z"
            fill="#1D1108"
            stroke="#2A170B"
            strokeWidth="3"
            strokeLinejoin="round"
          />
          <path
            d="M 90 60 C 116 40, 136 46, 144 60 C 132 70, 116 71, 92 68 Z"
            fill="#2B1A0E"
            stroke="#2A170B"
            strokeWidth="3"
            strokeLinejoin="round"
          />
          <path
            d="M 86 52 C 108 30, 128 34, 136 46 C 124 54, 108 56, 88 58 Z"
            fill="#3B2516"
            stroke="#2A170B"
            strokeWidth="3"
            strokeLinejoin="round"
          />
        </g>

        {/* Muscular Rooster Chest & Arm/Wing */}
        <path
          d="M 64 68 C 64 68, 76 68, 88 80 C 88 88, 80 96, 68 96 C 54 96, 44 86, 48 76 C 50 72, 58 68, 64 68 Z"
          fill="#FFF9EE"
          stroke="#2A170B"
          strokeWidth="4"
          strokeLinejoin="round"
        />
        {/* Muscular golden torso shading */}
        <path
          d="M 68 80 C 76 80, 84 86, 82 94 C 76 96, 68 96, 64 94 C 62 88, 64 82, 68 80 Z"
          fill="#F5A038"
          stroke="#2A170B"
          strokeWidth="3"
        />

        {/* Rooster Head */}
        <circle
          cx="60"
          cy="52"
          r="22"
          fill="#FFF9EE"
          stroke="#2A170B"
          strokeWidth="4.5"
        />

        {/* Spiky Red Comb on Head */}
        <path
          d="M 50 40 C 44 26, 54 20, 56 28 C 60 18, 70 16, 72 26 C 76 20, 86 22, 84 32 C 82 38, 70 42, 62 42 Z"
          fill="#D62828"
          stroke="#2A170B"
          strokeWidth="3.5"
          strokeLinejoin="round"
        />

        {/* Red Wattle below beak */}
        <path
          d="M 46 62 C 40 64, 38 72, 42 78 C 48 82, 54 78, 52 68 Z"
          fill="#D62828"
          stroke="#2A170B"
          strokeWidth="3"
        />

        {/* Sharp Yellow Beak */}
        <path
          d="M 44 52 L 26 58 C 34 65, 44 65, 46 60 Z"
          fill="#FFB020"
          stroke="#2A170B"
          strokeWidth="3.5"
          strokeLinejoin="round"
        />
        <path
          d="M 42 58 L 30 58"
          stroke="#2A170B"
          strokeWidth="2.5"
          strokeLinecap="round"
        />

        {/* Friendly Rooster Eye */}
        <circle cx="54" cy="48" r="6" fill="#FFFFFF" stroke="#2A170B" strokeWidth="2.5" />
        <circle cx="52" cy="48" r="3" fill="#1D1108" />
        <circle cx="50.5" cy="46.5" r="1.2" fill="#FFFFFF" />

        {/* Left Arm / Fist giving big THUMBS UP */}
        <g id="thumbs-up">
          <ellipse
            cx="40"
            cy="76"
            rx="12"
            ry="9"
            fill="#FFB020"
            stroke="#2A170B"
            strokeWidth="3.5"
          />
          {/* Fist knuckles */}
          <path
            d="M 32 76 C 32 72, 44 70, 48 76"
            stroke="#2A170B"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          {/* Prominent Upright Thumb */}
          <path
            d="M 38 74 C 36 64, 46 62, 46 70 C 46 74, 42 76, 38 74 Z"
            fill="#FFB020"
            stroke="#2A170B"
            strokeWidth="3.5"
            strokeLinejoin="round"
          />
        </g>

        {/* Ribbon Banner Across Bottom: Amber-orange with maroon border */}
        <g id="ribbon-banner">
          {/* Left Ribbon Notch End */}
          <path
            d="M 18 124 L 32 110 L 32 128 Z"
            fill="#4A1017"
            stroke="#30070C"
            strokeWidth="2"
          />
          {/* Right Ribbon Notch End */}
          <path
            d="M 142 124 L 128 110 L 128 128 Z"
            fill="#4A1017"
            stroke="#30070C"
            strokeWidth="2"
          />

          {/* Main Curved Banner Body */}
          <path
            d="M 24 112 Q 80 122 136 112 L 132 136 Q 80 146 28 136 Z"
            fill="url(#aflaRibbonBg)"
            stroke="#5C141E"
            strokeWidth="4.5"
            strokeLinejoin="round"
          />

          {/* Banner Highlight Accent */}
          <path
            d="M 28 115 Q 80 124 132 115"
            stroke="#FFF0D0"
            strokeWidth="2"
            strokeLinecap="round"
            fill="none"
          />

          {/* "AFLA" Text in bold maroon uppercase */}
          <text
            x="80"
            y="131"
            textAnchor="middle"
            fill="#5C141E"
            fontSize="18"
            fontWeight="900"
            fontFamily="system-ui, -apple-system, sans-serif"
            letterSpacing="3"
          >
            AFLA
          </text>
        </g>
      </svg>

      {showText && (
        <div className="flex flex-col leading-tight">
          <span className="font-extrabold text-base tracking-tight text-[#1F1A16] font-serif">
            AFLA RESTAURANT
          </span>
          <span className="text-[10px] uppercase tracking-wider text-[#FF6417] font-bold">
            PIZZA · BURGER · CHICKEN
          </span>
        </div>
      )}
    </div>
  );
}

export default AflaLogo;
