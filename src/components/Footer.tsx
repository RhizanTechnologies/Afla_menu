"use client";

import React from "react";
import { AflaLogo } from "@/components/AflaLogo";
import { ArrowUp, Clock, Phone, MapPin } from "lucide-react";

interface FooterProps {
  onOpenQrModal?: () => void;
}

export function Footer({ onOpenQrModal }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-white border-t border-[#F0E9E1] py-8 px-4 mt-auto">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center gap-5">
        {/* Logo and Brand */}
        <div className="flex flex-col items-center gap-2">
          <AflaLogo size={40} />
          <div>
            <h4 className="font-extrabold text-sm text-[#1F1A16] tracking-tight">
              AFLA RESTAURANT
            </h4>
            <p className="text-[10px] uppercase tracking-wider text-[#FF6417] font-bold mt-0.5">
              PIZZA · BURGER · CHICKEN
            </p>
          </div>
        </div>

        {/* Placeholders */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 text-xs text-[#7A6F66]">
          <div className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-[#FF6417]" />
            <span>Hours: add later</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Phone className="w-3.5 h-3.5 text-[#FF6417]" />
            <span>Phone: add later</span>
          </div>
          <div className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-[#FF6417]" />
            <span>Address: add later</span>
          </div>
        </div>

        {/* Back to top button */}
        <button
          onClick={scrollToTop}
          className="inline-flex items-center gap-1.5 min-h-[40px] px-4 py-2 rounded-full border border-[#F0E9E1] bg-[#FAF8F5] text-xs font-bold text-[#1F1A16] hover:border-[#FF6417] hover:text-[#FF6417] transition-colors cursor-pointer"
        >
          <span>Back to top</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>

        {/* Copyright notice & Staff QR Modal link */}
        <div className="flex flex-col sm:flex-row items-center gap-2 text-[11px] text-[#7A6F66]/80 pt-2 border-t border-[#F0E9E1]/50 w-full justify-center">
          <span>© AFLA Restaurant. All rights reserved.</span>
          {onOpenQrModal && (
            <>
              <span className="hidden sm:inline">·</span>
              <button
                onClick={onOpenQrModal}
                className="text-[#7A6F66]/60 hover:text-[#FF6417] transition-colors cursor-pointer"
              >
                Table QR Stand Generator
              </button>
            </>
          )}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
