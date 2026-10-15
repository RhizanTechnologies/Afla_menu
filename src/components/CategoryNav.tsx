"use client";

import React, { useRef, useEffect } from "react";
import { CategoryInfo, MenuCategoryId } from "@/data/menu";
import { cn } from "@/lib/utils";

interface CategoryNavProps {
  categories: CategoryInfo[];
  activeCategory: MenuCategoryId | "all";
  onSelectCategory: (id: MenuCategoryId) => void;
  language: "en" | "am";
  className?: string;
}

const CATEGORY_ICONS: Record<string, string> = {
  chicken: "🍗",
  "mixed-grill": "🥩",
  burger: "🍔",
  sandwich: "🥪",
  shawarma: "🌯",
  "pasta-rice": "🍝",
  pizza: "🍕",
  fish: "🐟",
  salad: "🥗",
  "signature-drinks": "🍹",
};

export function CategoryNav({
  categories,
  activeCategory,
  onSelectCategory,
  language,
  className,
}: CategoryNavProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const activePillRef = useRef<HTMLButtonElement>(null);

  // Auto-scroll the active pill into view smoothly without breaking left margin
  useEffect(() => {
    if (activePillRef.current && scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const pill = activePillRef.current;

      // If it's the very first category, keep it at the natural left padding
      if (activeCategory === categories[0]?.id) {
        container.scrollTo({ left: 0, behavior: "smooth" });
        return;
      }

      const scrollLeft =
        pill.offsetLeft - container.offsetWidth / 2 + pill.offsetWidth / 2;
      container.scrollTo({ left: Math.max(0, scrollLeft), behavior: "smooth" });
    }
  }, [activeCategory, categories]);

  return (
    <nav
      aria-label="Menu Categories"
      className={cn(
        "sticky top-15 z-30 w-full bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#F0E9E1] py-2",
        className
      )}
    >
      <div
        ref={scrollContainerRef}
        className="flex items-center gap-2 overflow-x-auto no-scrollbar px-4 sm:px-6 max-w-6xl mx-auto scroll-smooth snap-x snap-mandatory scroll-pl-4 scroll-pr-4"
      >
        {categories.map((cat, index) => {
          const isActive = activeCategory === cat.id;
          const icon = CATEGORY_ICONS[cat.id] || "🍽️";
          return (
            <button
              key={cat.id}
              ref={isActive ? activePillRef : null}
              onClick={() => onSelectCategory(cat.id)}
              className={cn(
                "snap-start shrink-0 inline-flex items-center gap-2 min-h-[40px] px-4 rounded-full text-xs sm:text-sm font-bold transition-all border cursor-pointer select-none",
                isActive
                  ? "bg-[#FF6417] text-white border-[#FF6417] shadow-[0_4px_12px_rgba(255,100,23,0.25)]"
                  : "bg-white text-[#4A3E34] border-[#F0E9E1] hover:border-[#FF6417]/50 card-soft-shadow hover:text-[#1F1A16]"
              )}
            >
              <span className="text-sm leading-none" role="img" aria-hidden="true">
                {icon}
              </span>
              <span>{language === "am" ? cat.amharicName : cat.name}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}

export default CategoryNav;
