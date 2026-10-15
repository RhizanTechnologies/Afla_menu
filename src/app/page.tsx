"use client";

import React, { useState, useMemo, useEffect, Suspense } from "react";
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
  chicken: "🍗",
  "mixed-grill": "🥩",
  burger: "🍔",
  sandwich: "🥪",
  shawarma: "🌯",
  "pasta-rice": "🍝",
  pizza: "🍕",
  fish: "🐟",
  salad: "🥗",
  "signature-drinks": "🍹",
};

const QUICK_FILTERS: { id: FilterOption; label: string; icon?: string }[] = [
  { id: "All", label: "All" },
  { id: "Popular", label: "Popular", icon: "⭐" },
  { id: "Spicy", label: "Spicy", icon: "🌶️" },
  { id: "Vegetarian", label: "Vegetarian", icon: "🥬" },
  { id: "Fasting", label: "Fasting", icon: "🌱" },
];

function MenuMain() {
  const searchParams = useSearchParams();
  const tableParam = searchParams.get("table");
  const isDesktop = useMediaQuery("(min-width: 768px)");

  const [language, setLanguage] = useState<"en" | "am">("en");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilter, setSelectedFilter] = useState<FilterOption>("All");
  const [activeCategory, setActiveCategory] = useState<MenuCategoryId | "all">(
    "chicken"
  );
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isQrModalOpen, setIsQrModalOpen] = useState(false);

  // Auto-open QR modal if ?qr=1 is in URL
  useEffect(() => {
    if (searchParams.get("qr") === "1") {
      setIsQrModalOpen(true);
    }
  }, [searchParams]);

  // Scroll spy to update active category pill while scrolling
  useEffect(() => {
    if (searchQuery.trim() !== "" || selectedFilter !== "All") return;

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 180;
      for (const cat of CATEGORIES) {
        const section = document.getElementById(`section-${cat.id}`);
        if (section) {
          const top = section.offsetTop;
          const height = section.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveCategory(cat.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [searchQuery, selectedFilter]);

  // Filter items based on search query and dietary selection
  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      // 1. Dietary filter
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

      // 2. Search query (matches name, amharic, description, side, ingredients, tags)
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
        const matchesCategory = item.category.toLowerCase().includes(q);
        const matchesTag = item.tags.some((t) => t.toLowerCase().includes(q));

        return (
          matchesName ||
          matchesAmharic ||
          matchesDesc ||
          matchesSide ||
          matchesCategory ||
          matchesTag
        );
      }

      return true;
    });
  }, [searchQuery, selectedFilter]);

  // Smooth scroll to a category section
  const handleSelectCategory = (catId: MenuCategoryId) => {
    setActiveCategory(catId);
    if (searchQuery.trim() !== "" || selectedFilter !== "All") {
      setSearchQuery("");
      setSelectedFilter("All");
    }
    const section = document.getElementById(`section-${catId}`);
    if (section) {
      const yOffset = -130;
      const y =
        section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const handleResetFilters = () => {
    setSearchQuery("");
    setSelectedFilter("All");
  };

  const isFiltering = searchQuery.trim() !== "" || selectedFilter !== "All";

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#1F1A16]">
      {/* 1. Sticky Header */}
      <Header
        language={language}
        onToggleLanguage={() =>
          setLanguage((prev) => (prev === "en" ? "am" : "en"))
        }
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
                  : "Search pizza, burger, chicken..."
              }
              className="w-full h-11 pl-10 pr-9 text-xs sm:text-sm bg-white text-[#1F1A16] placeholder:text-[#7A6F66]/80 border border-[#F0E9E1] focus:border-[#FF6417] rounded-2xl outline-none transition-all card-soft-shadow focus:ring-2 focus:ring-[#FF6417]/20"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                aria-label="Clear search"
                className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-[#7A6F66] hover:text-[#1F1A16]"
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
            <span className="text-[11px] text-[#7A6F66]">Filter:</span>
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
                <span>{f.label}</span>
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
            {language === "am" ? "ተጨማሪ ማጣሪያ" : "More Filters"}
          </span>
          {selectedFilter !== "All" && (
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF6417]" />
          )}
        </button>
      </div>

      {/* 3. Sticky Horizontally Scrollable Category Pills */}
      {!isFiltering && (
        <CategoryNav
          categories={CATEGORIES}
          activeCategory={activeCategory}
          onSelectCategory={handleSelectCategory}
          language={language}
        />
      )}

      {/* 4. Menu Items Section */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-4 py-4">
        {/* Table greeting if tableParam exists */}
        {tableParam && (
          <div className="mb-4 inline-flex items-center gap-1.5 px-3.5 py-1 bg-[#FFF2E5] border border-[#FFDEC2] text-[#FF6417] rounded-full text-xs font-bold">
            <span>Table {tableParam} Dine-in</span>
          </div>
        )}

        {/* If user is filtering or searching, show results list */}
        {isFiltering ? (
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-[#F0E9E1] mb-4">
              <span className="text-xs font-bold text-[#7A6F66]">
                {language === "am"
                  ? `${filteredItems.length} የተገኙ ምግቦች`
                  : `${filteredItems.length} dishes found`}
              </span>
              <button
                onClick={handleResetFilters}
                className="text-xs font-bold text-[#FF6417] hover:underline cursor-pointer"
              >
                {language === "am" ? "ሁሉንም አሳይ" : "Clear filters"}
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
          /* Default Browse Mode: 1 col on mobile, 2 on tablet, 3 on desktop */
          <div className="space-y-8">
            {CATEGORIES.map((cat) => {
              const itemsInCat = MENU_ITEMS.filter(
                (item) => item.category === cat.id
              );
              if (itemsInCat.length === 0) return null;

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
                          {language === "am" ? cat.amharicName : cat.name}
                        </h2>
                        <p className="text-[11px] text-[#7A6F66] font-medium leading-none mt-0.5">
                          {language === "am" ? cat.name : cat.amharicName}
                        </p>
                      </div>
                    </div>
                    <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-white border border-[#F0E9E1] text-[#7A6F66] card-soft-shadow">
                      {itemsInCat.length} {language === "am" ? "ምግቦች" : "items"}
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
