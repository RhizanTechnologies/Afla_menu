# 🍽️ Afla Restaurant & Lounge — Digital Menu (አፍላ ምናሌ)

A high-end, responsive digital menu web application designed for **Afla Restaurant & Lounge** in Addis Ababa, Ethiopia. Built with **Next.js 16 (App Router)**, **React 19**, **TypeScript**, **Tailwind CSS**, and **shadcn/ui** patterns.

Designed to feel calm, clean, and luxurious—like a Michelin-grade restaurant app—while providing lightning-fast search, dietary filtering, and responsive drawer/dialog interactions on smartphones and desktops.

---

## 🌟 Key Features

- **⚡ Instant Real-Time Search**: Search dishes by English title, Amharic name (e.g. *ቸክን, አሳ, ላዛኛ*), ingredients (*rosemary, egg, cheese*), or category.
- **🏷️ Dietary & Ingredient Filters**: Quick toggle pills for `Popular`, `Spicy 🌶️`, `Vegetarian`, `Fasting`, `Chicken`, `Beef`, `Fish & Tuna`.
- **💰 ETB Price Formatting**: Stored as numbers in `data/menu.ts`. Whole numbers format cleanly without decimals (e.g., `ETB 4,885`, `ETB 685`), while decimal items preserve cents (e.g., `ETB 549.79`). Bold orange visual emphasis.
- **📱 Responsive Detail View**:
  - **Mobile (< 768px)**: Opens an accessible bottom **Drawer** (`vaul`).
  - **Desktop (≥ 768px)**: Opens a centered **Dialog** (`@radix-ui/react-dialog`).
- **🖨️ Built-in Table QR Code Generator**: Generates table-specific QR codes with instant PNG download and printable table stand preview (supports Table 1–30, VIP Lounge, Terrace, etc.).
- **🖼️ Intelligent Image Fallbacks & Skeletons**: High-resolution dish photos with animated skeleton loaders (zero CLS) and graceful culinary art fallbacks if an image hasn't been uploaded yet.
- **♿ WCAG AA & Lighthouse 95+**: Full keyboard accessibility (`Enter`/`Space` to open cards, `Esc` to close), ARIA dialog attributes, semantic landmarks.
- **🌙 Theme-Ready Aesthetics**: Polished stone/amber/orange warm luxury restaurant palette with dark mode support.

---

## 📁 Project File Tree

```
Afla/
├── data/
│   └── menu.ts                 # Single source of truth: 48 items, categories, tags, formatPrice
├── public/
│   ├── images/                 # Food photography & dish assets
│   │   ├── afla-special-burger.jpg
│   │   ├── chicken-tibs.jpg
│   │   ├── fried-chicken.jpg
│   │   ├── special-pizza.jpg
│   │   └── special-shawarma.jpg
│   └── favicon.ico
├── src/
│   ├── app/
│   │   ├── globals.css         # Design system tokens, warm culinary palette, scrollbar utilities
│   │   ├── layout.tsx          # SEO meta tags, OpenGraph, viewport, font optimization
│   │   └── page.tsx            # Interactive menu application with Suspense & state orchestration
│   ├── components/
│   │   ├── AflaLogo.tsx        # Deliverable: Bespoke SVG Flame-Crown logo component
│   │   ├── Header.tsx          # Sticky brand header, status pulse, search bar, QR modal trigger
│   │   ├── CategoryNav.tsx     # Sticky horizontal category pills with item counters
│   │   ├── FilterBar.tsx       # Dietary filter chips (Spicy, Veg, Fasting, etc.)
│   │   ├── MenuItemCard.tsx    # Card with bold orange price, badges, Amharic name & side notes
│   │   ├── MenuImage.tsx       # Image wrapper with skeleton loader and SVG fallback
│   │   ├── ItemDetailModal.tsx # Responsive Drawer (mobile) + Dialog (desktop)
│   │   ├── TableQrModal.tsx    # Table QR generator with download & print stand options
│   │   ├── MenuSkeleton.tsx    # Skeleton grid preventing layout shift (CLS 0)
│   │   ├── EmptyState.tsx      # Friendly empty search/filter state with 1-click reset
│   │   ├── BackToTop.tsx       # Floating back-to-top button with smooth scroll
│   │   ├── Footer.tsx          # Hours, phone, address, Google Maps link, social links
│   │   └── ui/                 # Accessible UI building blocks (shadcn patterns)
│   │       ├── badge.tsx       # Badges (Popular, Spicy, Vegetarian, Fasting, Tag)
│   │       ├── button.tsx      # Buttons with primary-orange gradient & accessible states
│   │       ├── dialog.tsx      # Radix UI accessible modal dialog
│   │       ├── drawer.tsx      # Vaul accessible bottom sliding drawer
│   │       ├── input.tsx       # Styled search input
│   │       └── skeleton.tsx    # Smooth pulse loading placeholder
│   ├── data/
│   │   └── menu.ts             # Direct re-export for clean @/data/menu path alias
│   └── lib/
│       ├── utils.ts            # clsx & tailwind-merge (cn helper)
│       └── useMediaQuery.ts    # Breakpoint listener for responsive Drawer/Dialog switching
├── package.json
├── tsconfig.json
└── README.md
```

---

## 🚀 Setup & Local Development

### 1. Prerequisites
- **Node.js**: v18+ (v20+ recommended)
- **npm** or **pnpm** or **yarn**

### 2. Installation
```bash
# Clone the repository
git clone https://github.com/Urz1/Afla_menu.git
cd Afla_menu

# Install dependencies
npm install
```

### 3. Running Locally
```bash
# Start development server
npm run dev

# Or build and run production server
npm run build
npm run start
```
Open [http://localhost:3000](http://localhost:3000) (or the port indicated in terminal) in your browser.

---

## 📝 How to Edit Prices & Menu Items

All items are maintained in a single clean file: [`data/menu.ts`](file:///data/menu.ts).

### Editing a Price
Locate the item by its `id` or `name` and modify the `price` numerical value:

```typescript
// Example: Updating Afla Special Burger price
{
  id: "burger-afla-special",
  name: "Afla Special Burger",
  category: "burger",
  price: 795, // Changed from 755 to 795
  // ...
}
```

#### Price Formatting Rules:
- Whole numbers are automatically displayed without decimals and with thousand separators (e.g. `4885` → `ETB 4,885`).
- Fractional amounts retain their exact cents (e.g. `549.79` → `ETB 549.79`).
- Prices are styled in **bold orange** across cards and detail drawers.

---

## ➕ How to Add a New Item or Category

### Adding a New Menu Item
Add an entry to `MENU_ITEMS` in `data/menu.ts`:

```typescript
{
  id: "burger-smash-double",
  name: "Double Smash Burger",
  amharicName: "ስማሽ በርገር",
  category: "burger",
  price: 690,
  description: "Two crispy-edged smashed beef patties, cheddar, pickles, and house secret sauce.",
  ingredients: ["Two beef patties", "Cheddar cheese", "Pickles", "House sauce"],
  side: "Side seasoned fries",
  image: "/images/double-smash.jpg", // Optional photo
  isPopular: true,
  tags: ["Popular", "Beef"],
}
```

### Adding a New Category
1. Add the category identifier to `MenuCategoryId` in `data/menu.ts`:
   ```typescript
   export type MenuCategoryId =
     | "chicken"
     | "mixed-grill"
     | "burger"
     | ...
     | "desserts"; // <-- New category
   ```
2. Add metadata to `CATEGORIES`:
   ```typescript
   {
     id: "desserts",
     name: "Desserts",
     amharicName: "ጣፋጭ ምግቦች",
     description: "Decadent cakes, traditional sweet pastries, and artisan ice creams",
     iconName: "Cake",
   }
   ```
The category navigation bar and filter system will immediately detect the new category, compute its dish counts, and render it automatically!

---

## 📸 How to Add Food Photos

1. Place your photo (JPEG, PNG, or WebP) inside the `public/images/` directory:
   ```
   public/images/my-new-dish.jpg
   ```
2. Link it in `data/menu.ts`:
   ```typescript
   image: "/images/my-new-dish.jpg"
   ```
3. **Automatic Fallback**: If an item does not have an image assigned (or if the file is missing/broken), `MenuImage` automatically renders a category-themed culinary emblem on a warm gradient background.

---

## 📱 How to Generate Table QR Codes

### Method 1: Using the Built-in Table QR Modal (Interactive)
1. Tap the **"Table QR"** button in the top navigation bar.
2. Select the Table Number (e.g. `Table 1` through `Table 30`, `VIP Lounge`, `Terrace`).
3. The modal generates a scannable QR code live.
4. Click **"Download PNG"** to save high-res QR files for acrylic table cards, or click **"Print Table Stand"** for an instant printable table stand format.

### Method 2: Table URL Query Parameter
When customers scan a QR code encoded with:
```
https://your-domain.com/?table=12
```
The menu automatically detects the table number and displays a **"Table 12"** badge at the top of the menu!

---

## 🎨 Summary of shadcn Components & Blocks Chosen

| Component | Library / Pattern | Implementation & Purpose |
| :--- | :--- | :--- |
| **Drawer** | `vaul` | Mobile-first bottom sliding sheet for dish inspection on smartphones. Natural drag gestures, backdrop blur, fluid spring physics. |
| **Dialog** | `@radix-ui/react-dialog` | Centered modal for tablet & desktop viewports with accessible focus trapping, keyboard dismiss (`Esc`), and smooth zoom-in animation. |
| **Badge** | Custom shadcn variant | Micro-badges for `Popular`, `Spicy 🌶️`, `Vegetarian`, `Fasting`, `Chicken`, `Beef`, `Fish`. Distinct accessible color themes. |
| **Skeleton** | Tailwind pulse | Matches dish card geometry perfectly to achieve **Zero Cumulative Layout Shift (CLS 0)** while images/fonts load. |
| **Button** | Radix / Tailwind | Custom primary gradient (`from-orange-500 to-amber-600`), ghost, and outline variants with micro-haptic scale transitions (`active:scale-[0.98]`). |
| **Input** | HTML5 / Tailwind | Rounded pill search field with backdrop blur, keyboard shortcut focus, and quick-clear `(X)` icon. |
| **Logo** | SVG Component | Custom `<AflaLogo />` featuring stylized charcoal-flame crown lettermark with Ethiopian Amharic subtitle. |

---

## 🚢 Deployment

This project is ready for one-click deployment to **Vercel**, **Netlify**, or any Node.js VPS.

### Deploy to Vercel
```bash
npm install -g vercel
vercel
```
All routes are pre-rendered statically (`○ Static`) for maximum performance, edge CDN caching, and 95+ Lighthouse scores.

---

## 📄 License & Credits
- **Client**: Afla Restaurant & Lounge (Bole Medhanialem, Addis Ababa)
- **Built by**: Neba / Urz1
- **License**: MIT
