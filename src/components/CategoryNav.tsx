"use client";

import React, { useRef, useEffect } from "react";
import { CATEGORIES, MenuCategoryId, MENU_ITEMS } from "@/data/menu";
import { cn } from "@/lib/utils";
import {
  Flame,
  Sandwich,
  Utensils,
  Soup,
  Pizza,
  Fish,
  Salad,
  Coffee,
} from "lucide-react";

interface CategoryNavProps {
  activeCategory: MenuCategoryId | "all";
  onSelectCategory: (id: MenuCategoryId | "all") => void;
}

const CATEGORY_ICONS: Record<MenuCategoryId, React.ComponentType<{ className?: string }>> = {
  chicken: Flame,
  "mixed-grill": Flame,
  burger: Sandwich,
  sandwich: Utensils,
  "shawarma-wrap": Utensils,
  "pasta-rice": Soup,
  pizza: Pizza,
  fish: Fish,
  salad: Salad,
  "signature-drinks": Coffee,
};

export function CategoryNav({
  activeCategory,
  onSelectCategory,
}: CategoryNavProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Auto-scroll the active pill into view when it changes
  useEffect(() => {
    if (!scrollContainerRef.current) return;
    const activeEl = scrollContainerRef.current.querySelector(
      `[data-category="${activeCategory}"]`
    ) as HTMLElement;
    if (activeEl) {
      const container = scrollContainerRef.current;
      const scrollLeft =
        activeEl.offsetLeft -
        container.offsetWidth / 2 +
        activeEl.offsetWidth / 2;
      container.scrollTo({ left: scrollLeft, behavior: "smooth" });
    }
  }, [activeCategory]);

  return (
    <nav
      aria-label="Menu Categories"
      className="sticky top-0 z-30 w-full bg-white/85 dark:bg-zinc-950/85 backdrop-blur-md border-b border-zinc-200/80 dark:border-zinc-800/80 py-2.5 transition-shadow"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div
          ref={scrollContainerRef}
          className="flex items-center gap-2 overflow-x-auto no-scrollbar scroll-smooth py-0.5"
          role="tablist"
        >
          {/* "All Menu" Pill */}
          <button
            role="tab"
            aria-selected={activeCategory === "all"}
            data-category="all"
            onClick={() => onSelectCategory("all")}
            className={cn(
              "inline-flex items-center gap-1.5 whitespace-nowrap rounded-full px-3.5 py-1.5 text-xs sm:text-sm font-medium transition-all shrink-0 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500",
              activeCategory === "all"
                ? "bg-orange-600 text-white shadow-md shadow-orange-600/25 scale-[1.02]"
                : "bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-800"
            )}
          >
            <span>All Dishes</span>
            <span
              className={cn(
                "ml-1 text-[10px] px-1.5 py-0.2 rounded-full",
                activeCategory === "all"
                  ? "bg-white/20 text-white"
                  : "bg-zinc-200 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400"
              )}
            >
              {MENU_ITEMS.length}
            </span>
          </button>

          {CATEGORIES.map((cat) => {
            const Icon = CATEGORY_ICONS[cat.id] || Utensils;
            const count = MENU_ITEMS.filter((i) => i.category === cat.id).length;
            const isSelected = activeCategory === cat.id;

            return (
              <button
                key={cat.id}
                role="tab"
                aria-selected={isSelected}
                data-category={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                className={cn(
                  "inline-flex items-center gap-1.5 whitespace-nowrap rounded-full px-3.5 py-1.5 text-xs sm:text-sm font-medium transition-all shrink-0 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500",
                  isSelected
                    ? "bg-orange-600 text-white shadow-md shadow-orange-600/25 scale-[1.02]"
                    : "bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-800"
                )}
              >
                <Icon className="w-3.5 h-3.5 shrink-0" />
                <span>{cat.name}</span>
                <span
                  className={cn(
                    "ml-1 text-[10px] px-1.5 py-0.2 rounded-full",
                    isSelected
                      ? "bg-white/20 text-white"
                      : "bg-zinc-200 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400"
                  )}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
