"use client";

import React from "react";
import { Utensils, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";

interface EmptyStateProps {
  searchQuery: string;
  selectedFilter: string;
  onReset: () => void;
  language: "en" | "am";
}

export function EmptyState({
  searchQuery,
  selectedFilter,
  onReset,
  language,
}: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center text-center py-16 px-4 bg-white rounded-3xl border border-[#EEE9E2] my-6">
      <div className="w-12 h-12 rounded-full bg-[#F3EFE9] flex items-center justify-center text-[#F28C28] mb-3">
        <Utensils className="w-6 h-6" />
      </div>

      <h3 className="text-base font-semibold text-[#2B2118] mb-1">
        {language === "am" ? "ምንም ምግብ አልተገኘም" : "No dishes found"}
      </h3>

      <p className="text-xs text-[#7A6F66] max-w-xs mb-5">
        {searchQuery
          ? language === "am"
            ? `ለ "${searchQuery}" የተገኘ ምግብ የለም።`
            : `We couldn't find any dish matching "${searchQuery}".`
          : language === "am"
          ? "በዚህ ማጣሪያ ምንም አይነት ምግብ አልተገኘም።"
          : "No items match your selected dietary filter."}
      </p>

      <Button
        variant="outline"
        size="sm"
        onClick={onReset}
        className="gap-2 text-xs"
      >
        <RotateCcw className="w-3.5 h-3.5" />
        <span>{language === "am" ? "ሁሉንም አሳይ" : "Reset filters"}</span>
      </Button>
    </div>
  );
}

export default EmptyState;
