"use client";

import React from "react";
import { AflaLogo } from "@/components/AflaLogo";
import { Language } from "@/data/menu";
import { cn } from "@/lib/utils";
import { Search, X } from "lucide-react";

interface HeaderProps {
  language: Language;
  onSelectLanguage: (lang: Language) => void;
  searchQuery?: string;
  onSearchChange?: (val: string) => void;
}

export function Header({
  language,
  onSelectLanguage,
  searchQuery,
  onSearchChange,
}: HeaderProps) {
  return (
    <header className="sticky top-0 z-40 w-full h-15 bg-white/95 backdrop-blur-md border-b border-[#F0E9E1] transition-shadow">
      <div className="max-w-6xl mx-auto h-full px-4 flex items-center justify-between gap-2 sm:gap-3">
        {/* Left: Rooster Logo & Brand Wordmark */}
        <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
          <AflaLogo size={40} />
          <div className="flex flex-col justify-center leading-none">
            <div className="flex items-center gap-1.5">
              <span className="font-extrabold text-[13px] sm:text-base text-[#1F1A16] tracking-tight">
                AFLA RESTAURANT
              </span>
              <span className="hidden xs:inline-block text-[9.5px] font-bold text-[#3B7A23] bg-[#EAF5E4] px-1.5 py-0.5 rounded-sm uppercase tracking-wider">
                MENU
              </span>
            </div>
            <span className="text-[9px] sm:text-[9.5px] uppercase tracking-widest text-[#D32F2F] font-bold mt-1">
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
                  : language === "so"
                  ? "Raadi pizza, burger, digaag..."
                  : "Search pizza, burger, chicken..."
              }
              className="w-full h-10 pl-10 pr-9 text-xs sm:text-sm bg-[#FAF8F5] hover:bg-white focus:bg-white text-[#1F1A16] placeholder:text-[#7A6F66]/80 border border-[#F0E9E1] focus:border-[#FF6417] rounded-full outline-none transition-all card-soft-shadow focus:ring-2 focus:ring-[#FF6417]/20"
            />
            {searchQuery && (
              <button
                onClick={() => onSearchChange("")}
                aria-label="Clear search"
                className="absolute right-3 p-1 text-[#7A6F66] hover:text-[#1F1A16] cursor-pointer"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        )}

        {/* Right: Modern 3-Language Segmented Switcher (EN · አማ · SO) */}
        <div className="flex items-center shrink-0">
          <div className="flex items-center bg-[#FAF8F5] p-1 rounded-full border border-[#F0E9E1] card-soft-shadow">
            {(
              [
                { code: "en", label: "EN" },
                { code: "am", label: "አማ" },
                { code: "so", label: "SO" },
              ] as const
            ).map((l) => {
              const active = language === l.code;
              return (
                <button
                  key={l.code}
                  onClick={() => onSelectLanguage(l.code)}
                  aria-label={`Select language ${l.label}`}
                  className={cn(
                    "min-h-[28px] px-2.5 rounded-full text-[11px] sm:text-xs font-extrabold transition-all cursor-pointer select-none",
                    active
                      ? "bg-[#FF6417] text-white shadow-xs"
                      : "text-[#7A6F66] hover:text-[#1F1A16] hover:bg-white/60"
                  )}
                >
                  {l.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
