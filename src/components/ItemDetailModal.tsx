"use client";

import React from "react";
import { MenuItem, formatPrice } from "@/data/menu";
import { useMediaQuery } from "@/lib/useMediaQuery";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerFooter,
  DrawerClose,
} from "@/components/ui/drawer";
import { Badge } from "@/components/ui/badge";
import { MenuImage } from "@/components/MenuImage";
import { Button } from "@/components/ui/button";
import {
  Sparkles,
  Utensils,
  Leaf,
  Share2,
  Check,
  Info,
  Clock,
} from "lucide-react";

interface ItemDetailModalProps {
  item: MenuItem | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ItemDetailModal({
  item,
  isOpen,
  onClose,
}: ItemDetailModalProps) {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const [copied, setCopied] = React.useState(false);

  if (!item) return null;

  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: `${item.name} - Afla Restaurant`,
          text: `Check out ${item.name} at Afla Restaurant for ${formatPrice(
            item.price
          )}!`,
          url: window.location.href,
        })
        .catch(() => {});
    } else {
      navigator.clipboard.writeText(
        `${item.name} - ${formatPrice(item.price)} at Afla Restaurant`
      );
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const Content = (
    <div className="flex flex-col gap-4">
      {/* Large Image Header */}
      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800">
        <MenuImage
          src={item.image}
          alt={item.name}
          category={item.category}
          priority={true}
          className="w-full h-full object-cover"
        />

        {/* Floating Badges */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 z-10">
          {item.isPopular && (
            <Badge variant="popular" className="gap-1 shadow-md">
              <Sparkles className="w-3 h-3 fill-current" />
              Popular
            </Badge>
          )}
          {item.isSpicy && (
            <Badge variant="spicy" className="gap-1 shadow-md">
              <span>Spicy 🌶️</span>
            </Badge>
          )}
          {item.isVegetarian && (
            <Badge variant="vegetarian" className="gap-1 shadow-md">
              <Leaf className="w-3 h-3 text-emerald-600" />
              <span>Vegetarian</span>
            </Badge>
          )}
          {item.isFasting && (
            <Badge variant="fasting" className="gap-1 shadow-md">
              <span>Fasting</span>
            </Badge>
          )}
        </div>
      </div>

      {/* Title & Price Row */}
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-zinc-100 dark:border-zinc-800 pb-3">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-zinc-50 font-serif">
            {item.name}
          </h2>
          {item.amharicName && (
            <p className="text-sm font-medium text-orange-500 mt-0.5">
              {item.amharicName}
            </p>
          )}
        </div>

        <div className="flex flex-col sm:items-end">
          <span className="text-[10px] uppercase font-semibold text-zinc-400">
            Price
          </span>
          <span className="text-2xl font-extrabold text-orange-600 dark:text-orange-500">
            {formatPrice(item.price)}
          </span>
        </div>
      </div>

      {/* Side Note */}
      {item.side && (
        <div className="flex items-center gap-2 text-sm text-amber-800 dark:text-amber-300 bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900/40 p-3 rounded-xl">
          <Utensils className="w-4 h-4 shrink-0 text-amber-600 dark:text-amber-400" />
          <span className="font-medium">{item.side}</span>
        </div>
      )}

      {/* Description */}
      {item.description && (
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-1">
            Description
          </h3>
          <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
            {item.description}
          </p>
        </div>
      )}

      {/* Ingredients List */}
      {item.ingredients && item.ingredients.length > 0 && (
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-2">
            Ingredients & Details
          </h3>
          <div className="flex flex-wrap gap-1.5">
            {item.ingredients.map((ing, i) => (
              <span
                key={i}
                className="text-xs bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 px-2.5 py-1 rounded-md border border-zinc-200/60 dark:border-zinc-700/60"
              >
                {ing}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Dietary Tags */}
      <div>
        <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-2">
          Dietary Tags
        </h3>
        <div className="flex flex-wrap gap-1.5">
          {item.tags.map((tag) => (
            <Badge key={tag} variant="tag" className="text-xs px-2.5 py-1">
              {tag}
            </Badge>
          ))}
        </div>
      </div>

      {/* Action Footer */}
      <div className="flex items-center justify-between gap-3 pt-3 border-t border-zinc-100 dark:border-zinc-800">
        <Button
          variant="outline"
          size="sm"
          onClick={handleShare}
          className="gap-2 text-xs"
        >
          {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Share2 className="w-3.5 h-3.5" />}
          {copied ? "Copied" : "Share Dish"}
        </Button>

        <div className="flex items-center gap-1.5 text-xs text-zinc-400">
          <Clock className="w-3.5 h-3.5" />
          <span>Freshly prepared to order</span>
        </div>
      </div>
    </div>
  );

  if (isDesktop) {
    return (
      <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
        <DialogContent className="max-w-lg max-h-[90vh] overflow-y-auto">
          <DialogHeader className="sr-only">
            <DialogTitle>{item.name}</DialogTitle>
            <DialogDescription>{item.description}</DialogDescription>
          </DialogHeader>
          {Content}
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DrawerContent>
        <DrawerHeader className="sr-only">
          <DrawerTitle>{item.name}</DrawerTitle>
          <DrawerDescription>{item.description}</DrawerDescription>
        </DrawerHeader>
        <div className="p-4 overflow-y-auto max-h-[75vh]">{Content}</div>
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button variant="outline" className="w-full">
              Close
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
