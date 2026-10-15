"use client";

import React, { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Utensils,
  Flame,
  Pizza,
  Fish,
  Salad,
  Coffee,
  Sandwich,
  Soup,
} from "lucide-react";
import { MenuCategoryId } from "@/data/menu";

interface MenuImageProps {
  src?: string;
  alt: string;
  category: MenuCategoryId;
  className?: string;
  fill?: boolean;
  priority?: boolean;
  sizes?: string;
}

const CATEGORY_FALLBACK_ICONS: Record<
  MenuCategoryId,
  React.ComponentType<{ className?: string }>
> = {
  chicken: Flame,
  "mixed-grill": Flame,
  burger: Sandwich,
  sandwich: Sandwich,
  "shawarma-wrap": Utensils,
  "pasta-rice": Soup,
  pizza: Pizza,
  fish: Fish,
  salad: Salad,
  "signature-drinks": Coffee,
};

export function MenuImage({
  src,
  alt,
  category,
  className,
  priority = false,
}: MenuImageProps) {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const FallbackIcon = CATEGORY_FALLBACK_ICONS[category] || Utensils;

  if (!src || hasError) {
    return (
      <div
        className={cn(
          "relative flex flex-col items-center justify-center bg-gradient-to-br from-orange-950/20 via-zinc-900/40 to-amber-950/20 border border-orange-500/10 text-orange-400 select-none overflow-hidden",
          className
        )}
        role="img"
        aria-label={`${alt} illustration`}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.12)_0,transparent_70%)]" />
        <div className="p-3 rounded-full bg-orange-500/10 text-orange-500 mb-2 border border-orange-500/20 backdrop-blur-xs">
          <FallbackIcon className="w-8 h-8" />
        </div>
        <span className="text-[11px] font-medium tracking-wider text-zinc-400 uppercase">
          Afla Kitchen
        </span>
      </div>
    );
  }

  return (
    <div className={cn("relative overflow-hidden bg-zinc-100 dark:bg-zinc-900", className)}>
      {isLoading && (
        <Skeleton className="absolute inset-0 w-full h-full rounded-none" />
      )}
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        priority={priority}
        className={cn(
          "object-cover transition-all duration-300 ease-out group-hover:scale-105",
          isLoading ? "opacity-0" : "opacity-100"
        )}
        onLoad={() => setIsLoading(false)}
        onError={() => {
          setIsLoading(false);
          setHasError(true);
        }}
      />
    </div>
  );
}
