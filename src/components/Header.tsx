"use client";

import React from "react";
import { AflaLogo } from "@/components/AflaLogo";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, X, QrCode, Phone, MapPin } from "lucide-react";
import { RESTAURANT_INFO } from "@/data/menu";

interface HeaderProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onOpenQrModal: () => void;
}

export function Header({
  searchQuery,
  onSearchChange,
  onOpenQrModal,
}: HeaderProps) {
  return (
    <header className="relative w-full border-b border-zinc-200/80 bg-white/95 dark:border-zinc-800/80 dark:bg-zinc-950/95 backdrop-blur-md">
      {/* Top micro-bar: Hours & Location */}
      <div className="w-full bg-zinc-900 text-zinc-300 dark:bg-black text-[11px] py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 font-medium text-emerald-400">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Kitchen Open
            </span>
            <span className="hidden sm:inline text-zinc-400">
              Daily {RESTAURANT_INFO.hours.weekdays}
            </span>
          </div>

          <div className="flex items-center gap-4 text-zinc-400">
            <a
              href={RESTAURANT_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-orange-400 transition-colors"
            >
              <MapPin className="w-3 h-3 text-orange-500" />
              <span className="hidden md:inline">Bole Medhanialem, Addis Ababa</span>
              <span className="md:hidden">Addis Ababa</span>
            </a>
            <a
              href={`tel:${RESTAURANT_INFO.phone}`}
              className="flex items-center gap-1 hover:text-orange-400 transition-colors font-medium text-zinc-200"
            >
              <Phone className="w-3 h-3 text-orange-500" />
              <span className="hidden sm:inline">{RESTAURANT_INFO.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Header Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          {/* Logo & Quick Brand Info */}
          <div className="flex items-center justify-between">
            <AflaLogo size="lg" />

            <div className="flex items-center gap-2 md:hidden">
              <Button
                variant="outline"
                size="sm"
                onClick={onOpenQrModal}
                className="gap-1.5 rounded-full text-xs font-semibold border-orange-500/30 text-orange-600 dark:text-orange-400 hover:bg-orange-50 dark:hover:bg-orange-950/40"
              >
                <QrCode className="w-3.5 h-3.5" />
                Table QR
              </Button>
            </div>
          </div>

          {/* Search and Action Buttons */}
          <div className="flex items-center gap-2.5 w-full md:w-auto">
            {/* Search Input Bar */}
            <div className="relative flex-1 md:w-80 lg:w-96">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
              <Input
                type="text"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder="Search food, ingredients, or አማርኛ..."
                aria-label="Search menu items"
                className="pl-9 pr-9 h-10 text-xs sm:text-sm bg-zinc-100/80 dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 rounded-full focus-visible:ring-orange-500"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => onSearchChange("")}
                  aria-label="Clear search query"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 p-0.5 rounded-full"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Desktop Table QR Modal Button */}
            <div className="hidden md:flex items-center gap-2 shrink-0">
              <Button
                variant="outline"
                size="default"
                onClick={onOpenQrModal}
                className="gap-2 rounded-full font-semibold border-orange-500/30 text-orange-600 dark:text-orange-400 hover:bg-orange-50 dark:hover:bg-orange-950/40 shadow-xs"
              >
                <QrCode className="w-4 h-4" />
                <span>Table QR</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
