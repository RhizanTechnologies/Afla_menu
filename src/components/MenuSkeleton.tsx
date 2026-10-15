import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

export function MenuSkeletonGrid({ count = 6 }: { count?: number }) {
  return (
    <div
      role="status"
      aria-label="Loading menu items"
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 my-4"
    >
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className="bg-white rounded-2xl border border-[#EEE9E2] p-3 flex flex-row sm:flex-col gap-3 justify-between"
        >
          <div className="flex flex-row sm:flex-col gap-3 flex-1">
            <Skeleton className="w-[88px] h-[88px] sm:w-full sm:aspect-[4/3] rounded-xl shrink-0" />
            <div className="flex-1 space-y-2 py-1">
              <Skeleton className="h-4 w-3/4" />
              <Skeleton className="h-3 w-1/2" />
              <Skeleton className="h-3 w-full" />
            </div>
          </div>
          <div className="flex justify-between items-center pt-2 border-t border-[#EEE9E2]/60">
            <Skeleton className="h-5 w-16" />
            <Skeleton className="h-4 w-12 rounded-full" />
          </div>
        </div>
      ))}
      <span className="sr-only">Loading menu items...</span>
    </div>
  );
}

export default MenuSkeletonGrid;
