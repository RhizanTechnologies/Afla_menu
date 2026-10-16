"use client";

import React, { useState, useMemo, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import {
  MENU_ITEMS,
  CATEGORIES,
  MenuItem,
  MenuCategoryId,
  DietaryTag,
  Language,
} from "@/data/menu";
import { Header } from "@/components/Header";
import { CategoryNav } from "@/components/CategoryNav";
import { ProductCard } from "@/components/ProductCard";
import { ProductDetailModal } from "@/components/ProductDetailModal";
import {
  DietaryFilterDrawer,
  FilterOption,
} from "@/components/DietaryFilterDrawer";
import { TableQrModal } from "@/components/TableQrModal";
import { EmptyState } from "@/components/EmptyState";
import { BackToTop } from "@/components/BackToTop";
import { Footer } from "@/components/Footer";
import { MenuSkeletonGrid } from "@/components/MenuSkeleton";
import { useMediaQuery } from "@/lib/useMediaQuery";
import { Search, SlidersHorizontal, X } from "lucide-react";

const CATEGORY_ICONS: Record<string, string> = {
  breakfast: "🍳",
  chicken: "🍗",
  "mixed-grill": "🥩",
  burger: "🍔",
  sandwich: "🥪",
  shawarma: "🌯",
  "pasta-rice": "🍝",
  pizza: "🍕",
  fish: "🐟",
  salad: "🥗",
  juice: "🧃",
  "shakes-smoothies": "🥤",
  "hot-drinks": "☕",
  "cold-drinks": "🍹",
};

const QUICK_FILTERS: {
  id: FilterOption;
  en: string;
  am: string;
  so: string;
  icon?: string;
}[] = [
  { id: "All", en: "All", am: "ሁሉም", so: "Dhammaan" },
  { id: "Popular", en: "Popular", am: "ተወዳጅ", so: "Caanka ah", icon: "⭐" },
  { id: "Spicy", en: "Spicy", am: "የሚቃጥል", so: "Basbaas", icon: "🌶️" },
  { id: "Vegetarian", en: "Vegetarian", am: "አትክልት", so: "Qudaar", icon: "🥬" },
  { id: "Fasting", en: "Fasting", am: "የጾም", so: "Sooman", icon: "🌱" },
];

function MenuMain() {
  const searchParams = useSearchParams();
  const tableParam = searchParams.get("table");
  const isDesktop = useMediaQuery("(min-width: 768px)");

  const [language, setLanguage] = useState<Language>("en");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilter, setSelectedFilter] = useState<FilterOption>("All");
  const [activeCategory, setActiveCategory] = useState<MenuCategoryId | "all">("all");
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isQrModalOpen, setIsQrModalOpen] = useState(false);

  // Auto-open QR modal if ?qr=1 is in URL
  useEffect(() => {
    if (searchParams.get("qr") === "1") {
      setIsQrModalOpen(true);
    }
  }, [searchParams]);

  // Categories to display: If activeCategory is "all", display all categories.
  // If specific category is selected, display ONLY that category.
  const displayedCategories = useMemo(() => {
    if (activeCategory === "all") {
      return CATEGORIES;
    }
    return CATEGORIES.filter((cat) => cat.id === activeCategory);
  }, [activeCategory]);

  // Filter items based on category, search query, and dietary selection
  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      // 1. Category filter
      if (activeCategory !== "all" && item.category !== activeCategory) {
        return false;
      }

      // 2. Dietary filter
      if (selectedFilter !== "All") {
        if (selectedFilter === "Popular" && !item.isPopular) return false;
        if (selectedFilter === "Spicy" && !item.isSpicy) return false;
        if (selectedFilter === "Vegetarian" && !item.isVegetarian) return false;
        if (selectedFilter === "Fasting" && !item.isFasting) return false;
        if (
          ["Chicken", "Beef", "Fish", "Tuna"].includes(selectedFilter) &&
          !item.tags.includes(selectedFilter as DietaryTag)
        ) {
          return false;
        }
      }

      // 3. Search query (matches name, amharic, somali, description, side, ingredients, tags)
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchesName = item.name.toLowerCase().includes(q);
        const matchesAmharic = item.amharicName
          ? item.amharicName.toLowerCase().includes(q)
          : false;
        const matchesSomali = item.somaliName
          ? item.somaliName.toLowerCase().includes(q)
          : false;
        const matchesDesc = item.description
          ? item.description.toLowerCase().includes(q)
          : false;
        const matchesSide = item.side
          ? item.side.toLowerCase().includes(q)
          : false;
        const matchesCategory = item.category.toLowerCase().includes(q);
        const matchesTag = item.tags.some((t) => t.toLowerCase().includes(q));

        return (
          matchesName ||
          matchesAmharic ||
          matchesSomali ||
          matchesDesc ||
          matchesSide ||
          matchesCategory ||
          matchesTag
        );
      }

      return true;
    });
  }, [activeCategory, searchQuery, selectedFilter]);

  // Handle category selection (switching category exclusively and scrolling smoothly)
  const handleSelectCategory = (catId: MenuCategoryId | "all") => {
    setActiveCategory(catId);
    const target = document.getElementById("menu-content");
    if (target) {
      const yOffset = -120;
      const y =
        target.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: Math.max(0, y), behavior: "smooth" });
    }
  };

  const handleResetFilters = () => {
    setSearchQuery("");
    setSelectedFilter("All");
    setActiveCategory("all");
  };

  const isSearchingOrDietary =
    searchQuery.trim() !== "" || selectedFilter !== "All";

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#1F1A16]">
      {/* 1. Sticky Header with 3-way Language Switcher */}
      <Header
        language={language}
        onSelectLanguage={setLanguage}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />

      {/* 2. Responsive Search & Filter Bar (Mobile full, Desktop inline controls) */}
      <section className="w-full max-w-6xl mx-auto px-4 pt-3 pb-1 md:hidden">
        <div className="flex items-center gap-2">
          {/* Full-width Search Input on mobile */}
          <div className="relative flex-1">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#7A6F66] pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={
                language === "am"
                  ? "ምግብ ወይም ግብዓት ይፈልጉ..."
                  : language === "so"
                  ? "Raadi pizza, burger, digaag..."
                  : "Search pizza, burger, chicken..."
              }
              className="w-full h-11 pl-10 pr-9 text-xs sm:text-sm bg-white text-[#1F1A16] placeholder:text-[#7A6F66]/80 border border-[#F0E9E1] focus:border-[#FF6417] rounded-2xl outline-none transition-all card-soft-shadow focus:ring-2 focus:ring-[#FF6417]/20"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                aria-label="Clear search"
                className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-[#7A6F66] hover:text-[#1F1A16] cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Filter Drawer Button */}
          <button
            onClick={() => setIsFilterOpen(true)}
            aria-label="Open dietary filters"
            className="relative flex items-center justify-center min-h-[44px] min-w-[44px] rounded-2xl bg-white border border-[#F0E9E1] text-[#1F1A16] hover:border-[#FF6417] transition-colors card-soft-shadow cursor-pointer shrink-0"
          >
            <SlidersHorizontal className="w-4 h-4 text-[#1F1A16]" />
            {selectedFilter !== "All" && (
              <span className="absolute top-2.5 right-2.5 w-2 h-2 rounded-full bg-[#FF6417]" />
            )}
          </button>
        </div>

        {/* Active Filter notification pill */}
        {selectedFilter !== "All" && (
          <div className="flex items-center gap-1.5 mt-2">
            <span className="text-[11px] text-[#7A6F66]">
              {language === "am"
                ? "ማጣሪያ:"
                : language === "so"
                ? "Shaandheyn:"
                : "Filter:"}
            </span>
            <span className="inline-flex items-center gap-1 text-[11px] font-bold text-[#FF6417] bg-[#FFF2E5] border border-[#FFDEC2] px-2.5 py-0.5 rounded-full">
              {selectedFilter}
              <button
                onClick={() => setSelectedFilter("All")}
                aria-label="Clear filter"
                className="hover:text-[#1F1A16] cursor-pointer"
              >
                <X className="w-3 h-3" />
              </button>
            </span>
          </div>
        )}
      </section>

      {/* Desktop Quick Dietary Filter Strip */}
      <div className="hidden md:flex max-w-6xl mx-auto px-4 pt-3 pb-1 w-full justify-between items-center">
        <div className="flex items-center gap-2">
          {QUICK_FILTERS.map((f) => {
            const isActive = selectedFilter === f.id;
            const label =
              language === "am" ? f.am : language === "so" ? f.so : f.en;
            return (
              <button
                key={f.id}
                onClick={() => setSelectedFilter(f.id)}
                className={`inline-flex items-center gap-1 text-xs font-bold px-3 py-1.5 rounded-full transition-all border cursor-pointer ${
                  isActive
                    ? "bg-[#FF6417] text-white border-[#FF6417] shadow-xs"
                    : "bg-white text-[#7A6F66] border-[#F0E9E1] hover:border-[#FF6417]/40 hover:text-[#1F1A16] card-soft-shadow"
                }`}
              >
                {f.icon && <span>{f.icon}</span>}
                <span>{label}</span>
              </button>
            );
          })}
        </div>

        <button
          onClick={() => setIsFilterOpen(true)}
          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-[#F0E9E1] bg-white text-xs font-bold text-[#1F1A16] hover:border-[#FF6417] transition-colors cursor-pointer card-soft-shadow"
        >
          <SlidersHorizontal className="w-3.5 h-3.5 text-[#FF6417]" />
          <span>
            {language === "am"
              ? "ተጨማሪ ማጣሪያ"
              : language === "so"
              ? "Shaandhooyin"
              : "More Filters"}
          </span>
          {selectedFilter !== "All" && (
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF6417]" />
          )}
        </button>
      </div>

      {/* 3. Sticky Horizontally Scrollable Category Pills */}
      <CategoryNav
        categories={CATEGORIES}
        activeCategory={activeCategory}
        onSelectCategory={handleSelectCategory}
        language={language}
      />

      {/* 4. Menu Items Section */}
      <main id="menu-content" className="flex-1 max-w-6xl w-full mx-auto px-4 py-4">
        {/* Table greeting if tableParam exists */}
        {tableParam && (
          <div className="mb-4 inline-flex items-center gap-1.5 px-3.5 py-1 bg-[#FFF2E5] border border-[#FFDEC2] text-[#FF6417] rounded-full text-xs font-bold">
            <span>
              {language === "am"
                ? `ጠረጴዛ ${tableParam}`
                : language === "so"
                ? `Miiska ${tableParam}`
                : `Table ${tableParam} Dine-in`}
            </span>
          </div>
        )}

        {/* If user is searching or dietary filtering, show filtered items directly */}
        {isSearchingOrDietary ? (
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-[#F0E9E1] mb-4">
              <span className="text-xs font-bold text-[#7A6F66]">
                {language === "am"
                  ? `${filteredItems.length} የተገኙ ምግቦች`
                  : language === "so"
                  ? `${filteredItems.length} cunto ayaa la helay`
                  : `${filteredItems.length} dishes found`}
              </span>
              <button
                onClick={handleResetFilters}
                className="text-xs font-bold text-[#FF6417] hover:underline cursor-pointer"
              >
                {language === "am"
                  ? "ሁሉንም አሳይ"
                  : language === "so"
                  ? "Nadiifi shaandhada"
                  : "Clear filters"}
              </button>
            </div>

            {filteredItems.length === 0 ? (
              <EmptyState
                searchQuery={searchQuery}
                selectedFilter={selectedFilter}
                onReset={handleResetFilters}
                language={language}
              />
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                {filteredItems.map((item) => (
                  <ProductCard
                    key={item.id}
                    item={item}
                    onClick={() => setSelectedItem(item)}
                    language={language}
                  />
                ))}
              </div>
            )}
          </div>
        ) : (
          /* Default Browse Mode: Shows ONLY the selected category, or all categories if 'All' is selected */
          <div className="space-y-8">
            {displayedCategories.map((cat) => {
              const itemsInCat = MENU_ITEMS.filter(
                (item) => item.category === cat.id
              );
              if (itemsInCat.length === 0) return null;

              const title =
                language === "am"
                  ? cat.amharicName
                  : language === "so"
                  ? cat.somaliName || cat.name
                  : cat.name;

              const subtitle =
                language === "en" ? cat.amharicName : cat.name;

              return (
                <section
                  key={cat.id}
                  id={`section-${cat.id}`}
                  className="scroll-mt-32"
                >
                  {/* Clean, attractive section header */}
                  <div className="flex items-center justify-between pb-2 mb-3.5 border-b border-[#F0E9E1]">
                    <div className="flex items-center gap-2.5">
                      <span
                        className="text-xl sm:text-2xl select-none leading-none"
                        role="img"
                        aria-hidden="true"
                      >
                        {CATEGORY_ICONS[cat.id] || "🍽️"}
                      </span>
                      <div>
                        <h2 className="text-base sm:text-xl font-extrabold text-[#1F1A16] tracking-tight">
                          {title}
                        </h2>
                        {subtitle && (
                          <p className="text-[11px] text-[#7A6F66] font-medium leading-none mt-0.5">
                            {subtitle}
                          </p>
                        )}
                      </div>
                    </div>
                    <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-white border border-[#F0E9E1] text-[#7A6F66] card-soft-shadow">
                      {itemsInCat.length}{" "}
                      {language === "am"
                        ? "ምግቦች"
                        : language === "so"
                        ? "cunto"
                        : "items"}
                    </span>
                  </div>

                  {/* Responsive grid: 1 col on mobile (<640px), 2 on tablet, 3 on desktop */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                    {itemsInCat.map((item) => (
                      <ProductCard
                        key={item.id}
                        item={item}
                        onClick={() => setSelectedItem(item)}
                        language={language}
                      />
                    ))}
                  </div>
                </section>
              );
            })}
          </div>
        )}
      </main>

      {/* 5. Footer */}
      <Footer onOpenQrModal={() => setIsQrModalOpen(true)} />

      {/* Floating Back to top button */}
      <BackToTop />

      {/* Dietary Filter Bottom Sheet / Dialog */}
      <DietaryFilterDrawer
        isOpen={isFilterOpen}
        onOpenChange={setIsFilterOpen}
        selectedFilter={selectedFilter}
        onSelectFilter={setSelectedFilter}
        language={language}
        isDesktop={isDesktop}
      />

      {/* Product Detail Bottom Sheet / Dialog */}
      <ProductDetailModal
        item={selectedItem}
        isOpen={selectedItem !== null}
        onClose={() => setSelectedItem(null)}
        language={language}
        isDesktop={isDesktop}
      />

      {/* Table QR Stand Generator Modal */}
      <TableQrModal
        isOpen={isQrModalOpen}
        onClose={() => setIsQrModalOpen(false)}
      />
    </div>
  );
}

export default function Page() {
  return (
    <Suspense fallback={<MenuSkeletonGrid count={6} />}>
      <MenuMain />
    </Suspense>
  );
}
