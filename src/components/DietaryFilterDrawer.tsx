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
import { DietaryTag } from "@/data/menu";
import { SlidersHorizontal, Flame, Sparkles, Leaf, Check } from "lucide-react";
import { cn } from "@/lib/utils";

export type FilterOption = "All" | DietaryTag;

interface DietaryFilterProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  selectedFilter: FilterOption;
  onSelectFilter: (filter: FilterOption) => void;
  language: "en" | "am";
  isDesktop?: boolean;
}

const FILTER_ITEMS: { id: FilterOption; en: string; am: string; icon?: React.ReactNode }[] = [
  { id: "All", en: "All Items", am: "ሁሉም" },
  {
    id: "Popular",
    en: "Popular",
    am: "ተወዳጅ",
    icon: <Sparkles className="w-3.5 h-3.5 text-[#F28C28]" />,
  },
  { id: "Chicken", en: "Chicken", am: "ዶሮ" },
  { id: "Beef", en: "Beef", am: "የበሬ ሥጋ" },
  { id: "Fish", en: "Fish", am: "አሳ" },
  { id: "Tuna", en: "Tuna", am: "ቱና" },
  {
    id: "Vegetarian",
    en: "Vegetarian",
    am: "አትክልት / ቬጀቴሪያን",
    icon: <Leaf className="w-3.5 h-3.5 text-emerald-600" />,
  },
  {
    id: "Fasting",
    en: "Fasting",
    am: "የጾም",
    icon: <Leaf className="w-3.5 h-3.5 text-teal-600" />,
  },
  {
    id: "Spicy",
    en: "Spicy 🌶️",
    am: "የሚያቃጥል 🌶️",
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
                  ? "bg-[#F28C28] text-white border-[#F28C28] shadow-xs"
                  : "bg-white text-[#2B2118] border-[#EEE9E2] hover:bg-[#F3EFE9]"
              )}
            >
              <div className="flex items-center gap-2">
                {item.icon}
                <span>{language === "am" ? item.am : item.en}</span>
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
        <DialogContent className="sm:max-w-md bg-white border border-[#EEE9E2]">
          <DialogHeader>
            <DialogTitle className="text-base font-semibold text-[#2B2118] flex items-center gap-2">
              <SlidersHorizontal className="w-4 h-4 text-[#F28C28]" />
              {language === "am" ? "የምግብ ማጣሪያዎች" : "Dietary Filters"}
            </DialogTitle>
            <DialogDescription className="text-xs text-[#7A6F66]">
              {language === "am"
                ? "በአመጋገብ አይነት ወይም በግብዓት ይምረጡ"
                : "Filter dishes by ingredients or dietary preference"}
            </DialogDescription>
          </DialogHeader>

          {content}
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={isOpen} onOpenChange={onOpenChange}>
      <DrawerContent className="bg-white border-t border-[#EEE9E2] px-4 pb-6">
        <DrawerHeader className="px-0 pt-3 pb-2 text-left">
          <DrawerTitle className="text-base font-semibold text-[#2B2118] flex items-center gap-2">
            <SlidersHorizontal className="w-4 h-4 text-[#F28C28]" />
            {language === "am" ? "የምግብ ማጣሪያዎች" : "Dietary Filters"}
          </DrawerTitle>
          <DrawerDescription className="text-xs text-[#7A6F66]">
            {language === "am"
              ? "የሚፈልጉትን የምግብ አይነት ይምረጡ"
              : "Select a dietary preference or ingredient"}
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
            {language === "am" ? "ሁሉንም አሳይ" : "Reset to All"}
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

export default DietaryFilterDrawer;
