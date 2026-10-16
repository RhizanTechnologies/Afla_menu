"use client";

import React, { useState } from "react";
import Image from "next/image";
import { MenuItem, formatPrice, Language } from "@/data/menu";
import { MenuImagePlaceholder } from "@/components/MenuImagePlaceholder";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Flame, Leaf, Plus } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  item: MenuItem;
  onClick: () => void;
  language: Language;
}

export function ProductCard({ item, onClick, language }: ProductCardProps) {
  const [imageError, setImageError] = useState(false);

  const title =
    language === "am" && item.amharicName
      ? item.amharicName
      : language === "so" && item.somaliName
      ? item.somaliName
      : item.name;

  const subtitle =
    language === "en"
      ? item.amharicName
      : item.name !== title
      ? item.name
      : item.amharicName;

  return (
    <article
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onClick();
        }
      }}
      className={cn(
        "group relative bg-white hover:bg-[#FFFDFB] rounded-3xl border border-[#F0E9E1] p-3.5 sm:p-4 transition-all duration-300 cursor-pointer select-none card-soft-shadow hover:card-hover-shadow hover:border-[#FF6417] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6417]",
        "flex flex-col justify-between"
      )}
    >
      <div className="flex flex-col gap-3 flex-1 min-w-0">
        {/* Dish Image - Full width card hero on both mobile and desktop */}
        <div
          className={cn(
            "w-full rounded-2xl overflow-hidden bg-[#FAF6F0] relative shadow-2xs",
            "aspect-[16/10] sm:aspect-[4/3]"
          )}
        >
          {item.image && !imageError ? (
            <Image
              src={item.image}
              alt={item.name}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-106"
              onError={() => setImageError(true)}
            />
          ) : (
            <MenuImagePlaceholder
              category={item.category}
              className="w-full h-full"
              iconSize="lg"
            />
          )}

          {/* Badges on image overlay */}
          <div className="absolute top-2.5 left-2.5 flex flex-wrap gap-1">
            {item.isPopular && (
              <Badge variant="popular" className="text-[10px] shadow-xs">
                <Sparkles className="w-2.5 h-2.5 fill-current" />
                {language === "am"
                  ? "ተወዳጅ"
                  : language === "so"
                  ? "Caanka ah"
                  : "Popular"}
              </Badge>
            )}
            {item.isSpicy && (
              <Badge variant="spicy" className="text-[10px]">
                <Flame className="w-2.5 h-2.5 fill-current" />
                {language === "am"
                  ? "የሚቃጥል 🌶️"
                  : language === "so"
                  ? "Basbaas 🌶️"
                  : "Spicy 🌶️"}
              </Badge>
            )}
            {item.isVegetarian && (
              <Badge variant="vegetarian" className="text-[10px]">
                <Leaf className="w-2.5 h-2.5" />
                {language === "am"
                  ? "አትክልት"
                  : language === "so"
                  ? "Qudaar"
                  : "Veg"}
              </Badge>
            )}
            {item.isFasting && (
              <Badge variant="fasting" className="text-[10px]">
                {language === "am"
                  ? "የጾም"
                  : language === "so"
                  ? "Sooman"
                  : "Fasting"}
              </Badge>
            )}
          </div>
        </div>

        {/* Dish Details */}
        <div className="flex flex-col flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-extrabold text-[15px] sm:text-base text-[#1F1A16] leading-snug group-hover:text-[#FF6417] transition-colors line-clamp-2">
              {title}
            </h3>
          </div>

          {subtitle && (
            <p className="text-[11.5px] text-[#7A6F66] mt-0.5 font-medium line-clamp-1">
              {subtitle}
            </p>
          )}

          {item.description && (
            <p className="text-xs text-[#7A6F66] line-clamp-2 mt-1.5 leading-relaxed">
              {item.description}
            </p>
          )}

          {item.side && (
            <div className="mt-2">
              <span className="inline-block text-[10.5px] text-[#FF6417] bg-[#FFF2E5] border border-[#FFDEC2] px-2.5 py-0.5 rounded-full font-semibold">
                {item.side}
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Price & Action Row */}
      <div className="flex items-center justify-between gap-2 pt-3 border-t border-[#F0E9E1]/80 mt-3">
        <div>
          <span className="text-base sm:text-lg font-black text-[#FF6417] tracking-tight">
            {formatPrice(item.price)}
          </span>
        </div>

        <span
          aria-hidden="true"
          className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#FFF2E5] text-[#FF6417] group-hover:bg-[#FF6417] group-hover:text-white transition-all flex items-center justify-center shrink-0 shadow-2xs group-hover:scale-105"
        >
          <Plus className="w-4 h-4 stroke-[2.5]" />
        </span>
      </div>
    </article>
  );
}

export default ProductCard;
