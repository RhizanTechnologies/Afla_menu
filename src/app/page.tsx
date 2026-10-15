"use client";

import React, { useState, useMemo, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import {
  MENU_ITEMS,
  CATEGORIES,
  MenuItem,
  MenuCategoryId,
  DietaryTag,
} from "@/data/menu";
import { Header } from "@/components/Header";
import { CategoryNav } from "@/components/CategoryNav";
import { FilterBar, FilterTag } from "@/components/FilterBar";
import { MenuItemCard } from "@/components/MenuItemCard";
import { ItemDetailModal } from "@/components/ItemDetailModal";
import { TableQrModal } from "@/components/TableQrModal";
import { EmptyState } from "@/components/EmptyState";
import { BackToTop } from "@/components/BackToTop";
import { Footer } from "@/components/Footer";
import { MenuSkeletonGrid } from "@/components/MenuSkeleton";
import { Sparkles, QrCode } from "lucide-react";

function MenuContent() {
  const searchParams = useSearchParams();
  const tableParam = searchParams.get("table");

  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<MenuCategoryId | "all">("all");
  const [selectedTag, setSelectedTag] = useState<FilterTag>("all");
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [isQrModalOpen, setIsQrModalOpen] = useState(false);

  // Filter items based on active category, dietary filter, and search query
  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      // 1. Category Filter
      if (activeCategory !== "all" && item.category !== activeCategory) {
        return false;
      }

      // 2. Dietary Tag Filter
      if (selectedTag !== "all") {
        if (selectedTag === "Popular" && !item.isPopular) return false;
        if (selectedTag === "Spicy" && !item.isSpicy) return false;
        if (selectedTag === "Vegetarian" && !item.isVegetarian) return false;
        if (selectedTag === "Fasting" && !item.isFasting) return false;
        if (["Chicken", "Beef", "Fish", "Tuna"].includes(selectedTag)) {
          if (!item.tags.includes(selectedTag as DietaryTag)) return false;
        }
      }

      // 3. Search Query Filter
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchesName = item.name.toLowerCase().includes(q);
        const matchesAmharic = item.amharicName
          ? item.amharicName.toLowerCase().includes(q)
          : false;
        const matchesDesc = item.description
          ? item.description.toLowerCase().includes(q)
          : false;
        const matchesSide = item.side
          ? item.side.toLowerCase().includes(q)
          : false;
        const matchesIngredients = item.ingredients
          ? item.ingredients.some((ing) => ing.toLowerCase().includes(q))
          : false;
        const matchesCategory = item.category.toLowerCase().includes(q);

        return (
          matchesName ||
          matchesAmharic ||
          matchesDesc ||
          matchesSide ||
          matchesIngredients ||
          matchesCategory
        );
      }

      return true;
    });
  }, [activeCategory, selectedTag, searchQuery]);

  const handleSelectItem = (item: MenuItem) => {
    setSelectedItem(item);
    setIsDetailOpen(true);
  };

  const handleResetFilters = () => {
    setSearchQuery("");
    setActiveCategory("all");
    setSelectedTag("all");
  };

  // Group filtered items by category if activeCategory === "all" and not actively searching
  const groupedCategories = useMemo(() => {
    if (activeCategory !== "all" || searchQuery.trim() !== "") {
      return null;
    }

    return CATEGORIES.map((cat) => {
      const itemsInCat = filteredItems.filter((i) => i.category === cat.id);
      return {
        ...cat,
        items: itemsInCat,
      };
    }).filter((group) => group.items.length > 0);
  }, [activeCategory, searchQuery, filteredItems]);

  return (
    <div className="min-h-screen flex flex-col bg-stone-50/60 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100">
      {/* Header with Search and Table QR */}
      <Header
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        onOpenQrModal={() => setIsQrModalOpen(true)}
      />

      {/* Hero Welcome Banner */}
      <div className="relative bg-gradient-to-b from-orange-500/10 via-amber-500/5 to-transparent border-b border-orange-500/10 py-6 sm:py-8 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-bold uppercase tracking-widest text-orange-600 dark:text-orange-400">
                Afla Gourmet Selection
              </span>
              {tableParam && (
                <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-orange-600 text-white shadow-xs">
                  <QrCode className="w-3 h-3" />
                  Table {tableParam}
                </span>
              )}
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-zinc-900 dark:text-zinc-50 font-serif tracking-tight">
              Culinary Artistry & Grill
            </h1>
            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 mt-1 max-w-xl">
              Freshly prepared with authentic Ethiopian spices and prime ingredients. Tap any card to view detailed recipe ingredients and sides.
            </p>
          </div>

          <div className="flex items-center gap-2 self-start sm:self-auto shrink-0">
            <button
              onClick={() => {
                setActiveCategory("all");
                setSelectedTag("Popular");
              }}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-amber-500/15 text-amber-700 dark:text-amber-300 border border-amber-500/30 text-xs font-semibold hover:bg-amber-500/25 transition-colors cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 fill-current text-amber-500" />
              <span>Chef&apos;s Popular Picks</span>
            </button>
          </div>
        </div>
      </div>

      {/* Sticky Category Navigation */}
      <CategoryNav
        activeCategory={activeCategory}
        onSelectCategory={setActiveCategory}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 py-4">
        {/* Secondary Filter Bar (Dietary) */}
        <FilterBar
          selectedTag={selectedTag}
          onSelectTag={setSelectedTag}
          onClearFilters={handleResetFilters}
        />

        {/* Active Filter Indicators / Search Summary */}
        {(searchQuery || selectedTag !== "all" || activeCategory !== "all") && (
          <div className="flex items-center justify-between text-xs text-zinc-500 dark:text-zinc-400 py-2 border-b border-zinc-200/60 dark:border-zinc-800/60 mb-4">
            <div className="flex items-center gap-1.5 flex-wrap">
              <span>Showing</span>
              <strong className="text-orange-600 dark:text-orange-400">
                {filteredItems.length}
              </strong>
              <span>
                {filteredItems.length === 1 ? "dish" : "dishes"}
              </span>
              {searchQuery && (
                <span>
                  matching &ldquo;<strong>{searchQuery}</strong>&rdquo;
                </span>
              )}
              {selectedTag !== "all" && (
                <span>
                  tagged &ldquo;<strong>{selectedTag}</strong>&rdquo;
                </span>
              )}
            </div>

            <button
              onClick={handleResetFilters}
              className="text-xs text-orange-600 dark:text-orange-400 hover:underline font-medium cursor-pointer"
            >
              Clear all
            </button>
          </div>
        )}

        {/* Empty Search/Filter State */}
        {filteredItems.length === 0 && (
          <EmptyState
            searchQuery={searchQuery}
            selectedTag={selectedTag}
            onReset={handleResetFilters}
          />
        )}

        {/* Render Grouped Categories View (When "All Dishes" selected with no search) */}
        {groupedCategories ? (
          <div className="space-y-12 my-6">
            {groupedCategories.map((group) => (
              <section
                key={group.id}
                id={group.id}
                className="scroll-mt-20"
                aria-labelledby={`cat-title-${group.id}`}
              >
                {/* Section Header */}
                <div className="flex items-baseline justify-between border-b border-zinc-200/80 dark:border-zinc-800/80 pb-2.5 mb-5">
                  <div className="flex items-center gap-2.5">
                    <h2
                      id={`cat-title-${group.id}`}
                      className="text-xl sm:text-2xl font-bold font-serif text-zinc-900 dark:text-zinc-50 tracking-tight"
                    >
                      {group.name}
                    </h2>
                    <span className="text-xs sm:text-sm font-medium text-orange-500">
                      {group.amharicName}
                    </span>
                  </div>

                  <span className="text-xs text-zinc-400 font-medium">
                    {group.items.length} {group.items.length === 1 ? "item" : "items"}
                  </span>
                </div>

                {/* Dish Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
                  {group.items.map((item, idx) => (
                    <MenuItemCard
                      key={item.id}
                      item={item}
                      onSelect={handleSelectItem}
                      priority={idx < 2}
                    />
                  ))}
                </div>
              </section>
            ))}
          </div>
        ) : (
          /* Render Flat Grid (When category filtered or search active) */
          filteredItems.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 my-6">
              {filteredItems.map((item, idx) => (
                <MenuItemCard
                  key={item.id}
                  item={item}
                  onSelect={handleSelectItem}
                  priority={idx < 4}
                />
              ))}
            </div>
          )
        )}
      </main>

      {/* Floating Back to Top */}
      <BackToTop />

      {/* Restaurant Footer */}
      <Footer />

      {/* Item Detail Modal (Drawer on mobile, Dialog on desktop) */}
      <ItemDetailModal
        item={selectedItem}
        isOpen={isDetailOpen}
        onClose={() => setIsDetailOpen(false)}
      />

      {/* Table QR Code Generator Modal */}
      <TableQrModal
        isOpen={isQrModalOpen}
        onClose={() => setIsQrModalOpen(false)}
      />
    </div>
  );
}

export default function HomePage() {
  return (
    <Suspense fallback={<MenuSkeletonGrid count={6} />}>
      <MenuContent />
    </Suspense>
  );
}
