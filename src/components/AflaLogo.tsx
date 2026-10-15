import React from "react";

interface AflaLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: "sm" | "md" | "lg" | "xl";
  showText?: boolean;
  className?: string;
}

export function AflaLogo({
  size = "md",
  showText = true,
  className = "",
  ...props
}: AflaLogoProps) {
  const sizeMap = {
    sm: { width: showText ? 120 : 32, height: 32, scale: 0.8 },
    md: { width: showText ? 150 : 40, height: 40, scale: 1 },
    lg: { width: showText ? 190 : 52, height: 52, scale: 1.3 },
    xl: { width: showText ? 240 : 64, height: 64, scale: 1.6 },
  };

  const currentSize = sizeMap[size];

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      <svg
        width={currentSize.height}
        height={currentSize.height}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Afla Restaurant Emblem"
        {...props}
      >
        <defs>
          <linearGradient id="aflaGrad1" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#EA580C" />
            <stop offset="50%" stopColor="#F97316" />
            <stop offset="100%" stopColor="#FBBF24" />
          </linearGradient>
          <linearGradient id="aflaGradInner" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F59E0B" />
            <stop offset="100%" stopColor="#DC2626" />
          </linearGradient>
          <filter id="aflaGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Outer Circle Ring */}
        <circle
          cx="50"
          cy="50"
          r="46"
          stroke="url(#aflaGrad1)"
          strokeWidth="2.5"
          strokeDasharray="4 2"
          className="opacity-60"
        />

        {/* Stylized 'A' Flame Crown Emblem */}
        <g filter="url(#aflaGlow)">
          {/* Main Left Arch of 'A' */}
          <path
            d="M 50 12 C 43 25, 24 54, 22 75 C 21 84, 30 90, 40 88 C 45 87, 48 83, 50 78 C 52 83, 55 87, 60 88 C 70 90, 79 84, 78 75 C 76 54, 57 25, 50 12 Z"
            fill="url(#aflaGrad1)"
          />
          {/* Inner Flame Void/Crown */}
          <path
            d="M 50 36 C 45 46, 36 60, 36 71 C 36 76, 42 79, 47 77 C 49 76, 50 73, 50 70 C 50 73, 51 76, 53 77 C 58 79, 64 76, 64 71 C 64 60, 55 46, 50 36 Z"
            fill="var(--background, #0f172a)"
          />
          {/* Inner Core Flame */}
          <path
            d="M 50 50 C 47 56, 42 64, 42 71 C 42 74, 46 76, 50 75 C 54 76, 58 74, 58 71 C 58 64, 53 56, 50 50 Z"
            fill="url(#aflaGradInner)"
          />
        </g>
      </svg>

      {showText && (
        <div className="flex flex-col">
          <div className="flex items-center gap-1.5 leading-none tracking-widest font-black text-xl uppercase text-zinc-900 dark:text-zinc-50 font-serif">
            <span>AFLA</span>
            <span className="text-orange-500 text-xs font-normal font-sans ml-0.5 tracking-normal">
              አፍላ
            </span>
          </div>
          <span className="text-[9px] uppercase tracking-[0.25em] font-semibold text-zinc-500 dark:text-zinc-400 mt-0.5">
            Restaurant & Grill
          </span>
        </div>
      )}
    </div>
  );
}

export default AflaLogo;
