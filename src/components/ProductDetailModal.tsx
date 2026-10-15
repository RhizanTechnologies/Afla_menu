"use client";

import React, { useState } from "react";
import Image from "next/image";
import { MenuItem, formatPrice } from "@/data/menu";
import { MenuImagePlaceholder } from "@/components/MenuImagePlaceholder";
import { Badge } from "@/components/ui/badge";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
} from "@/components/ui/drawer";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Sparkles, Flame, Leaf, Utensils, X } from "lucide-react";

interface ProductDetailModalProps {
  item: MenuItem | null;
  isOpen: boolean;
  onClose: () => void;
  language: "en" | "am";
  isDesktop?: boolean;
}

export function ProductDetailModal({
  item,
  isOpen,
  onClose,
  language,
  isDesktop = false,
}: ProductDetailModalProps) {
  const [imageError, setImageError] = useState(false);

  if (!item) return null;

  const modalBody = (
    <div className="flex flex-col gap-4">
      {/* High-res Image Container */}
      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-[#FAF6F0] shadow-xs">
        {item.image && !imageError ? (
          <Image
            src={item.image}
            alt={item.name}
            fill
            sizes="(max-width: 768px) 100vw, 500px"
            className="object-cover"
            onError={() => setImageError(true)}
          />
        ) : (
          <MenuImagePlaceholder
            category={item.category}
            className="w-full h-full"
            iconSize="lg"
          />
        )}

        {/* Badges Overlay */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
          {item.isPopular && (
            <Badge variant="popular" className="shadow-xs">
              <Sparkles className="w-3 h-3 fill-current" />
              Popular
            </Badge>
          )}
          {item.isSpicy && (
            <Badge variant="spicy">
              <Flame className="w-3 h-3 fill-current" />
              Spicy 🌶️
            </Badge>
          )}
          {item.isVegetarian && (
            <Badge variant="vegetarian">
              <Leaf className="w-3 h-3" />
              Vegetarian
            </Badge>
          )}
          {item.isFasting && <Badge variant="fasting">Fasting</Badge>}
        </div>
      </div>

      {/* Header Info */}
      <div className="flex flex-col gap-1">
        <div className="flex items-baseline justify-between gap-2">
          <h2 className="text-xl sm:text-2xl font-extrabold text-[#1F1A16] tracking-tight">
            {item.name}
          </h2>
          <span className="text-xl sm:text-2xl font-black text-[#FF6417] shrink-0">
            {formatPrice(item.price)}
          </span>
        </div>

        {item.amharicName && (
          <p className="text-sm text-[#7A6F66] font-normal">
            {item.amharicName}
          </p>
        )}
      </div>

      {/* Description */}
      {item.description && (
        <div className="text-xs sm:text-sm text-[#7A6F66] leading-relaxed">
          {item.description}
        </div>
      )}

      {/* Side Note */}
      {item.side && (
        <div className="flex items-center gap-2 text-xs text-[#1F1A16] bg-[#FFF2E5] border border-[#FFDEC2] p-3 rounded-2xl font-medium">
          <Utensils className="w-3.5 h-3.5 text-[#FF6417] shrink-0" />
          <span>{item.side}</span>
        </div>
      )}

      {/* Tags */}
      {item.tags.length > 0 && (
        <div className="flex flex-wrap gap-1.5 pt-1">
          {item.tags.map((tag) => (
            <Badge key={tag} variant="tag" className="text-[11px]">
              {tag}
            </Badge>
          ))}
        </div>
      )}

      {/* Close button */}
      <div className="pt-2">
        <button
          onClick={onClose}
          className="w-full py-3 rounded-2xl bg-[#FF6417] text-white hover:bg-[#E5550D] font-bold text-sm transition-all shadow-xs cursor-pointer"
        >
          {language === "am" ? "ተመለስ" : "Close"}
        </button>
      </div>
    </div>
  );

  if (isDesktop) {
    return (
      <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
        <DialogContent className="sm:max-w-md bg-white border border-[#F0E9E1] p-6 rounded-3xl">
          <DialogHeader className="sr-only">
            <DialogTitle>{item.name}</DialogTitle>
            <DialogDescription>{item.description || item.name}</DialogDescription>
          </DialogHeader>
          {modalBody}
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DrawerContent className="bg-white border-t border-[#F0E9E1] px-5 pb-8 rounded-t-[32px]">
        <DrawerHeader className="sr-only">
          <DrawerTitle>{item.name}</DrawerTitle>
          <DrawerDescription>{item.description || item.name}</DrawerDescription>
        </DrawerHeader>
        <div className="pt-3">{modalBody}</div>
      </DrawerContent>
    </Drawer>
  );
}

export default ProductDetailModal;
