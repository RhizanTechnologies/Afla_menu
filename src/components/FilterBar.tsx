"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { Sparkles, Leaf, Fish, X } from "lucide-react";

export type FilterTag =
  | "all"
  | "Popular"
  | "Spicy"
  | "Vegetarian"
  | "Fasting"
  | "Chicken"
  | "Beef"
  | "Fish";

interface FilterBarProps {
  selectedTag: FilterTag;
  onSelectTag: (tag: FilterTag) => void;
  onClearFilters?: () => void;
}

const FILTER_ITEMS: {
  id: FilterTag;
  label: string;
  icon?: React.ReactNode;
  activeClass: string;
}[] = [
  {
    id: "all",
    label: "All Items",
    activeClass: "bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900",
  },
  {
    id: "Popular",
    label: "Popular",
    icon: <Sparkles className="w-3.5 h-3.5 fill-amber-400 text-amber-500" />,
    activeClass: "bg-amber-500 text-white shadow-amber-500/30",
  },
  {
    id: "Spicy",
    label: "Spicy 🌶️",
    activeClass: "bg-red-600 text-white shadow-red-600/30",
  },
  {
    id: "Vegetarian",
    label: "Vegetarian",
    icon: <Leaf className="w-3.5 h-3.5 text-emerald-400" />,
    activeClass: "bg-emerald-600 text-white shadow-emerald-600/30",
  },
  {
    id: "Fasting",
    label: "Fasting",
    activeClass: "bg-teal-600 text-white shadow-teal-600/30",
  },
  {
    id: "Chicken",
    label: "Chicken",
    activeClass: "bg-orange-600 text-white shadow-orange-600/30",
  },
  {
    id: "Beef",
    label: "Beef",
    activeClass: "bg-stone-700 text-white shadow-stone-700/30",
  },
  {
    id: "Fish",
    label: "Fish & Tuna",
    icon: <Fish className="w-3.5 h-3.5" />,
    activeClass: "bg-sky-600 text-white shadow-sky-600/30",
  },
];

export function FilterBar({
  selectedTag,
  onSelectTag,
  onClearFilters,
}: FilterBarProps) {
  return (
    <div className="w-full py-2.5">
      <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-0.5">
        <span className="text-xs uppercase font-semibold text-zinc-400 dark:text-zinc-500 shrink-0 ml-1">
          Dietary:
        </span>

        {FILTER_ITEMS.map((item) => {
          const isSelected = selectedTag === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onSelectTag(item.id)}
              className={cn(
                "inline-flex items-center gap-1.5 whitespace-nowrap rounded-full px-3 py-1 text-xs font-medium transition-all shrink-0 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500",
                isSelected
                  ? cn(item.activeClass, "shadow-sm scale-[1.02] font-semibold")
                  : "bg-zinc-100 dark:bg-zinc-900/90 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-800 border border-zinc-200/50 dark:border-zinc-800"
              )}
            >
              {item.icon}
              <span>{item.label}</span>
            </button>
          );
        })}

        {selectedTag !== "all" && onClearFilters && (
          <button
            onClick={onClearFilters}
            className="inline-flex items-center gap-1 text-xs text-orange-600 dark:text-orange-400 hover:underline shrink-0 ml-1 font-medium cursor-pointer"
          >
            <X className="w-3 h-3" />
            Reset
          </button>
        )}
      </div>
    </div>
  );
}
