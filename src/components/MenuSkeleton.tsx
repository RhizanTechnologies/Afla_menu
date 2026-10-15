import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

export function MenuSkeletonGrid({ count = 6 }: { count?: number }) {
  return (
    <div
      role="status"
      aria-label="Loading menu items"
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 my-6"
    >
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className="rounded-2xl border border-zinc-200/80 bg-white dark:border-zinc-800/80 dark:bg-zinc-900/90 overflow-hidden shadow-xs flex flex-col justify-between"
        >
          <div>
            <Skeleton className="aspect-[16/10] w-full rounded-none" />
            <div className="p-4 sm:p-5 space-y-3">
              <div className="flex justify-between items-center">
                <Skeleton className="h-5 w-2/3" />
                <Skeleton className="h-4 w-12" />
              </div>
              <Skeleton className="h-3.5 w-full" />
              <Skeleton className="h-3.5 w-4/5" />
              <Skeleton className="h-5 w-1/3 rounded-full" />
            </div>
          </div>
          <div className="px-4 pb-4 sm:px-5 sm:pb-5 pt-3 border-t border-zinc-100 dark:border-zinc-800 flex justify-between items-center">
            <Skeleton className="h-6 w-20" />
            <Skeleton className="h-4 w-14 rounded-full" />
          </div>
        </div>
      ))}
      <span className="sr-only">Loading menu items...</span>
    </div>
  );
}
