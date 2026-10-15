"use client";

import React from "react";
import { MenuItem, formatPrice } from "@/data/menu";
import { Badge } from "@/components/ui/badge";
import { MenuImage } from "@/components/MenuImage";
import { Sparkles, Utensils, Leaf, Eye } from "lucide-react";

interface MenuItemCardProps {
  item: MenuItem;
  onSelect: (item: MenuItem) => void;
  priority?: boolean;
}

export function MenuItemCard({ item, onSelect, priority = false }: MenuItemCardProps) {
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onSelect(item);
    }
  };

  return (
    <article
      role="button"
      tabIndex={0}
      onClick={() => onSelect(item)}
      onKeyDown={handleKeyDown}
      aria-label={`View details for ${item.name}`}
      className="group relative flex flex-col justify-between rounded-2xl border border-zinc-200/80 bg-white dark:border-zinc-800/80 dark:bg-zinc-900/90 shadow-xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-zinc-950"
    >
      <div>
        {/* Card Image Container */}
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-zinc-100 dark:bg-zinc-800">
          <MenuImage
            src={item.image}
            alt={item.name}
            category={item.category}
            priority={priority}
            className="w-full h-full"
          />

          {/* Top Badges Overlay */}
          <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between gap-1 pointer-events-none z-10">
            <div className="flex flex-wrap items-center gap-1.5">
              {item.isPopular && (
                <Badge variant="popular" className="gap-1 shadow-sm font-semibold">
                  <Sparkles className="w-3 h-3 fill-current" />
                  Popular
                </Badge>
              )}
              {item.isSpicy && (
                <Badge variant="spicy" className="gap-1">
                  <span>Spicy 🌶️</span>
                </Badge>
              )}
              {item.isVegetarian && (
                <Badge variant="vegetarian" className="gap-1">
                  <Leaf className="w-3 h-3 text-emerald-600" />
                  <span>Vegetarian</span>
                </Badge>
              )}
              {item.isFasting && (
                <Badge variant="fasting" className="gap-1">
                  <span>Fasting</span>
                </Badge>
              )}
            </div>

            {/* Tap indicator badge */}
            <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-black/60 backdrop-blur-md text-white text-[10px] px-2 py-0.5 rounded-full flex items-center gap-1">
              <Eye className="w-3 h-3" />
              View
            </span>
          </div>
        </div>

        {/* Card Body */}
        <div className="p-4 sm:p-5">
          {/* Header & Amharic Name */}
          <div className="flex items-start justify-between gap-2 mb-1">
            <h3 className="font-semibold text-base sm:text-lg text-zinc-900 dark:text-zinc-50 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
              {item.name}
            </h3>
            {item.amharicName && (
              <span className="text-xs text-orange-500/90 font-medium whitespace-nowrap shrink-0 mt-0.5">
                {item.amharicName}
              </span>
            )}
          </div>

          {/* Description */}
          {item.description && (
            <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 line-clamp-2 leading-relaxed mb-3">
              {item.description}
            </p>
          )}

          {/* Side / Includes Note */}
          {item.side && (
            <div className="inline-flex items-center gap-1.5 text-[11px] font-medium text-amber-700 dark:text-amber-400 bg-amber-50/80 dark:bg-amber-950/40 border border-amber-200/60 dark:border-amber-900/40 px-2.5 py-1 rounded-full mb-3">
              <Utensils className="w-3 h-3" />
              <span>{item.side}</span>
            </div>
          )}
        </div>
      </div>

      {/* Card Footer: Price in bold orange & tags */}
      <div className="px-4 pb-4 sm:px-5 sm:pb-5 pt-0 mt-auto flex items-center justify-between border-t border-zinc-100 dark:border-zinc-800/60 pt-3">
        <div className="flex flex-col">
          <span className="text-[10px] font-medium uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
            Price
          </span>
          <span className="text-base sm:text-lg font-bold text-orange-600 dark:text-orange-500">
            {formatPrice(item.price)}
          </span>
        </div>

        {/* Ingredient/Dietary quick tags */}
        <div className="flex items-center gap-1">
          {item.tags
            .filter((t) => !["Popular", "Spicy", "Vegetarian", "Fasting"].includes(t))
            .slice(0, 2)
            .map((tag) => (
              <Badge key={tag} variant="tag" className="text-[10px] px-1.5 py-0.5">
                {tag}
              </Badge>
            ))}
        </div>
      </div>
    </article>
  );
}
