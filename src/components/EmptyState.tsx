import React from "react";
import { Utensils, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Language } from "@/data/menu";

interface EmptyStateProps {
  searchQuery: string;
  selectedFilter: string;
  onReset: () => void;
  language: Language;
}

export function EmptyState({
  searchQuery,
  selectedFilter,
  onReset,
  language,
}: EmptyStateProps) {
  const title =
    language === "am"
      ? "ምንም ምግብ አልተገኘም"
      : language === "so"
      ? "Lama helin wax cunto ah"
      : "No dishes found";

  const message = searchQuery
    ? language === "am"
      ? `ለ "${searchQuery}" የተገኘ ምግብ የለም።`
      : language === "so"
      ? `Ma jiro wax cunto ah oo ku habboon "${searchQuery}".`
      : `We couldn't find any dish matching "${searchQuery}".`
    : language === "am"
    ? "በዚህ ማጣሪያ ምንም አይነት ምግብ አልተገኘም።"
    : language === "so"
    ? "Ma jiraan wax cunto ah oo ku habboon shaandhadaada."
    : "No items match your selected dietary filter.";

  const buttonText =
    language === "am"
      ? "ሁሉንም አሳይ"
      : language === "so"
      ? "Dib u celi shaandhada"
      : "Reset filters";

  return (
    <div className="flex flex-col items-center justify-center text-center py-16 px-4 bg-white rounded-3xl border border-[#F0E9E1] my-6 card-soft-shadow">
      <div className="w-12 h-12 rounded-full bg-[#FFF2E5] flex items-center justify-center text-[#FF6417] mb-3">
        <Utensils className="w-6 h-6" />
      </div>

      <h3 className="text-base font-bold text-[#1F1A16] mb-1">{title}</h3>

      <p className="text-xs text-[#7A6F66] max-w-xs mb-5">{message}</p>

      <Button
        variant="outline"
        size="sm"
        onClick={onReset}
        className="gap-2 text-xs border-[#F0E9E1] hover:border-[#FF6417] text-[#1F1A16] cursor-pointer"
      >
        <RotateCcw className="w-3.5 h-3.5" />
        <span>{buttonText}</span>
      </Button>
    </div>
  );
}

export default EmptyState;
