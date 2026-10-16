"use client";

import React from "react";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerFooter,
} from "@/components/ui/drawer";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { DietaryTag, Language } from "@/data/menu";
import { SlidersHorizontal, Flame, Sparkles, Leaf, Check } from "lucide-react";
import { cn } from "@/lib/utils";

export type FilterOption = "All" | DietaryTag;

interface DietaryFilterProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  selectedFilter: FilterOption;
  onSelectFilter: (filter: FilterOption) => void;
  language: Language;
  isDesktop?: boolean;
}

const FILTER_ITEMS: {
  id: FilterOption;
  en: string;
  am: string;
  so: string;
  icon?: React.ReactNode;
}[] = [
  { id: "All", en: "All Items", am: "ሁሉም", so: "Dhammaan" },
  {
    id: "Popular",
    en: "Popular",
    am: "ተወዳጅ",
    so: "Caanka ah",
    icon: <Sparkles className="w-3.5 h-3.5 text-[#FF6417]" />,
  },
  { id: "Chicken", en: "Chicken", am: "ዶሮ", so: "Digaag" },
  { id: "Beef", en: "Beef", am: "የበሬ ሥጋ", so: "Hilib Lo'aad" },
  { id: "Fish", en: "Fish", am: "አሳ", so: "Malaay" },
  { id: "Tuna", en: "Tuna", am: "ቱና", so: "Tuuno" },
  {
    id: "Vegetarian",
    en: "Vegetarian",
    am: "አትክልት / ቬጀቴሪያን",
    so: "Qudaar",
    icon: <Leaf className="w-3.5 h-3.5 text-emerald-600" />,
  },
  {
    id: "Fasting",
    en: "Fasting",
    am: "የጾም",
    so: "Sooman",
    icon: <Leaf className="w-3.5 h-3.5 text-teal-600" />,
  },
  {
    id: "Spicy",
    en: "Spicy 🌶️",
    am: "የሚያቃጥል 🌶️",
    so: "Basbaas 🌶️",
    icon: <Flame className="w-3.5 h-3.5 text-[#D62828]" />,
  },
];

export function DietaryFilterDrawer({
  isOpen,
  onOpenChange,
  selectedFilter,
  onSelectFilter,
  language,
  isDesktop = false,
}: DietaryFilterProps) {
  const getItemLabel = (item: (typeof FILTER_ITEMS)[number]) => {
    if (language === "am") return item.am;
    if (language === "so") return item.so;
    return item.en;
  };

  const titleText =
    language === "am"
      ? "የምግብ ማጣሪያዎች"
      : language === "so"
      ? "Shaandhada Cuntada"
      : "Dietary Filters";

  const subtitleText =
    language === "am"
      ? "በአመጋገብ አይነት ወይም በግብዓት ይምረጡ"
      : language === "so"
      ? "Xulo nooca cuntada ama maaddooyinka"
      : "Filter dishes by ingredients or dietary preference";

  const resetText =
    language === "am"
      ? "ሁሉንም አሳይ"
      : language === "so"
      ? "Dib ugu noqo Dhammaan"
      : "Reset to All";

  const content = (
    <div className="py-2">
      <div className="grid grid-cols-2 gap-2 sm:gap-2.5">
        {FILTER_ITEMS.map((item) => {
          const isSelected = selectedFilter === item.id;
          return (
            <button
              key={item.id}
              onClick={() => {
                onSelectFilter(item.id);
                onOpenChange(false);
              }}
              className={cn(
                "flex items-center justify-between min-h-[44px] px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-medium border transition-all text-left cursor-pointer",
                isSelected
                  ? "bg-[#FF6417] text-white border-[#FF6417] shadow-xs"
                  : "bg-white text-[#1F1A16] border-[#F0E9E1] hover:bg-[#FAF8F5]"
              )}
            >
              <div className="flex items-center gap-2">
                {item.icon}
                <span>{getItemLabel(item)}</span>
              </div>
              {isSelected && <Check className="w-4 h-4 shrink-0 text-white" />}
            </button>
          );
        })}
      </div>
    </div>
  );

  if (isDesktop) {
    return (
      <Dialog open={isOpen} onOpenChange={onOpenChange}>
        <DialogContent className="sm:max-w-md bg-white border border-[#F0E9E1]">
          <DialogHeader>
            <DialogTitle className="text-base font-semibold text-[#1F1A16] flex items-center gap-2">
              <SlidersHorizontal className="w-4 h-4 text-[#FF6417]" />
              {titleText}
            </DialogTitle>
            <DialogDescription className="text-xs text-[#7A6F66]">
              {subtitleText}
            </DialogDescription>
          </DialogHeader>

          {content}
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={isOpen} onOpenChange={onOpenChange}>
      <DrawerContent className="bg-white border-t border-[#F0E9E1] px-4 pb-6">
        <DrawerHeader className="px-0 pt-3 pb-2 text-left">
          <DrawerTitle className="text-base font-semibold text-[#1F1A16] flex items-center gap-2">
            <SlidersHorizontal className="w-4 h-4 text-[#FF6417]" />
            {titleText}
          </DrawerTitle>
          <DrawerDescription className="text-xs text-[#7A6F66]">
            {subtitleText}
          </DrawerDescription>
        </DrawerHeader>

        {content}

        <DrawerFooter className="px-0 pt-3">
          <Button
            variant="outline"
            onClick={() => {
              onSelectFilter("All");
              onOpenChange(false);
            }}
            className="w-full text-xs"
          >
            {resetText}
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

export default DietaryFilterDrawer;
