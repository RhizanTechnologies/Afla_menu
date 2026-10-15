"use client";

import React from "react";
import { UtensilsCrossed, RotateCcw, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

interface EmptyStateProps {
  searchQuery: string;
  selectedTag: string;
  onReset: () => void;
}

export function EmptyState({
  searchQuery,
  selectedTag,
  onReset,
}: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center text-center py-16 px-4 bg-zinc-50 dark:bg-zinc-900/50 rounded-3xl border border-dashed border-zinc-300 dark:border-zinc-800 my-8">
      <div className="p-4 rounded-full bg-orange-100 dark:bg-orange-950/40 text-orange-600 dark:text-orange-400 mb-4 ring-8 ring-orange-50 dark:ring-orange-950/20">
        <UtensilsCrossed className="w-8 h-8" />
      </div>

      <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mb-2 font-serif">
        No Dishes Found
      </h3>

      <p className="text-sm text-zinc-500 dark:text-zinc-400 max-w-md mb-6 leading-relaxed">
        {searchQuery ? (
          <>
            No items matched <span className="font-semibold text-zinc-800 dark:text-zinc-200">"{searchQuery}"</span>
            {selectedTag !== "all" && (
              <> with tag <span className="font-semibold text-zinc-800 dark:text-zinc-200">{selectedTag}</span></>
            )}. Try searching for <span className="italic">chicken, burger, pizza, lasagna, tibs</span>, or clear filters.
          </>
        ) : (
          <>No items found under the selected dietary filter. Try selecting "All Items" or exploring other categories.</>
        )}
      </p>

      <Button
        variant="primary-orange"
        onClick={onReset}
        className="gap-2 text-sm font-semibold shadow-md"
      >
        <RotateCcw className="w-4 h-4" />
        Reset All Filters & Search
      </Button>
    </div>
  );
}
