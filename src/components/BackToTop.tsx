"use client";

import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility, { passive: true });
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Back to top"
      className={cn(
        "fixed bottom-6 right-6 z-40 p-3 rounded-full bg-[#F28C28] text-white shadow-lg hover:bg-[#E07D1C] active:scale-95 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#F28C28] focus:ring-offset-2 cursor-pointer",
        isVisible
          ? "translate-y-0 opacity-100 scale-100 pointer-events-auto"
          : "translate-y-6 opacity-0 scale-75 pointer-events-none"
      )}
    >
      <ArrowUp className="w-5 h-5 stroke-[2.5]" />
    </button>
  );
}

export default BackToTop;
