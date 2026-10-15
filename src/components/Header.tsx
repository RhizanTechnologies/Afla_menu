"use client";

import React from "react";
import { AflaLogo } from "@/components/AflaLogo";
import { Globe, Search, X } from "lucide-react";

interface HeaderProps {
  language: "en" | "am";
  onToggleLanguage: () => void;
  searchQuery?: string;
  onSearchChange?: (val: string) => void;
}

export function Header({
  language,
  onToggleLanguage,
  searchQuery,
  onSearchChange,
}: HeaderProps) {
  return (
    <header className="sticky top-0 z-40 w-full h-15 bg-white/95 backdrop-blur-md border-b border-[#F0E9E1] transition-shadow">
      <div className="max-w-6xl mx-auto h-full px-4 flex items-center justify-between gap-3">
        {/* Left: Rooster Logo & Brand Wordmark */}
        <div className="flex items-center gap-3 shrink-0">
          <AflaLogo size={42} />
          <div className="flex flex-col justify-center leading-none">
            <div className="flex items-center gap-1.5">
              <span className="font-extrabold text-sm sm:text-base text-[#1F1A16] tracking-tight">
                AFLA RESTAURANT
              </span>
              <span className="hidden xs:inline-block text-[10px] font-bold text-[#3B7A23] bg-[#EAF5E4] px-1.5 py-0.5 rounded-sm uppercase tracking-wider">
                MENU
              </span>
            </div>
            <span className="text-[9.5px] uppercase tracking-widest text-[#D32F2F] font-bold mt-1">
              PIZZA · BURGER · CHICKEN
            </span>
          </div>
        </div>

        {/* Center: Desktop inline search (visible from md up) */}
        {onSearchChange !== undefined && (
          <div className="hidden md:flex flex-1 max-w-md mx-6 relative items-center">
            <Search className="absolute left-3.5 w-4 h-4 text-[#7A6F66] pointer-events-none" />
            <input
              type="text"
              value={searchQuery || ""}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder={
                language === "am"
                  ? "ምግብ ወይም ግብዓት ይፈልጉ..."
                  : "Search pizza, burger, chicken..."
              }
              className="w-full h-10 pl-10 pr-9 text-xs sm:text-sm bg-[#FAF8F5] hover:bg-white focus:bg-white text-[#1F1A16] placeholder:text-[#7A6F66]/80 border border-[#F0E9E1] focus:border-[#FF6417] rounded-full outline-none transition-all card-soft-shadow focus:ring-2 focus:ring-[#FF6417]/20"
            />
            {searchQuery && (
              <button
                onClick={() => onSearchChange("")}
                aria-label="Clear search"
                className="absolute right-3 p-1 text-[#7A6F66] hover:text-[#1F1A16]"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        )}

        {/* Right: Language Switcher (EN / አማ) */}
        <div className="flex items-center gap-2">
          <button
            onClick={onToggleLanguage}
            aria-label={`Switch language. Current: ${
              language === "en" ? "English" : "Amharic"
            }`}
            className="inline-flex items-center justify-center gap-1.5 min-h-[40px] px-3.5 py-1.5 rounded-full border border-[#F0E9E1] bg-white text-[#1F1A16] hover:border-[#FF6417] text-xs font-bold transition-all cursor-pointer select-none card-soft-shadow hover:bg-[#FAF8F5]"
          >
            <Globe className="w-3.5 h-3.5 text-[#FF6417]" />
            <span>{language === "en" ? "አማርኛ" : "English"}</span>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
