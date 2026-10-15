# 🐔 AFLA Restaurant — Digital Menu (አፍላ ምናሌ)

A minimalist, mobile-first digital menu web application built for **AFLA Restaurant** (Pizza · Burger · Chicken) in Addis Ababa, Ethiopia.

Designed specifically for guests scanning a table QR code on their smartphones: calm, clean, ultra-fast, and strictly in a warm light theme.

---

## 🎨 Design System & Hard Rules

- **Theme**: Strict light-only theme.
  - Background: `#FAFAF8`
  - Cards: `#FFFFFF`
  - Body Text: `#2B2118`
  - Muted Text: `#7A6F66`
  - Borders: `#EEE9E2`
  - Accent Color: `#F28C28` (AFLA Orange)
  - Detail Accents: `#D62828` (Spicy 🌶️)
  - Neutral Placeholders: `#F3EFE9`
- **Zero Dark Modes**: No dark classes, dark mode toggles, or black/dark-brown backgrounds anywhere in the project. Forced `color-scheme: light`.
- **Mobile-First**: Perfect at 390px mobile viewport, zero horizontal overflow down to 320px, with tap targets ≥ 44px.
- **Rooster Badge Logo**: Custom SVG rooster badge with spiky red comb, cheerful smile, thumbs-up, and "AFLA" banner ribbon.
- **Bilingual**: Instant toggle between English (`EN`) and Amharic (`አማ`).

---

## 🛠️ Tech Stack & Selected Components

- **Framework**: Next.js 16 (App Router) + React 19 + TypeScript
- **Styling**: Tailwind CSS + Shadcn UI CSS variable design tokens
- **Typography**: Inter (Latin) + Noto Sans Ethiopic (Amharic)
- **Icons**: Lucide React
- **Selected UI Components & Blocks**:
  - **Vaul (`Drawer`)**: Bottom sheet drawer for mobile dietary filters and item details, providing smooth swipe-to-dismiss native gestures.
  - **Radix UI (`Dialog`)**: Centered accessible modal for desktop screens (≥768px).
  - **Horizontal Snap Category Tabs**: Native CSS scroll-snap tabs without cluttering item counts, highlighting active categories in AFLA orange.
  - **Mobile Horizontal Product Cards**: Compact 88x88 left image/neutral placeholder and right title/Amharic/description/bold ETB price, expanding into 2-column and 3-column vertical cards on tablets and desktops.
  - **PWA Manifest & JSON-LD**: Full Restaurant Menu Schema markup for SEO.

---

## 🚀 Quick Setup & Local Run

```bash
# Clone the repository
git clone https://github.com/Urz1/Afla_menu.git
cd Afla_menu

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) on your phone or desktop browser.

---

## ✏️ Owner's Guide

### 1. How to Edit Prices or Item Details
All menu data is centralized in a single typed file: [`data/menu.ts`](file:///home/nebiyu/Desktop/Noorcent/Menu/Afla_menu/data/menu.ts).

To update any price:
1. Open [`data/menu.ts`](file:///home/nebiyu/Desktop/Noorcent/Menu/Afla_menu/data/menu.ts).
2. Locate the item by its `id` or `name` (e.g. `afla-special-burger`).
3. Modify the `price` number:
   ```typescript
   {
     id: "afla-special-burger",
     name: "Afla Special Burger",
     category: "burger",
     price: 755, // <-- Change to new price in ETB
     description: "Grilled beef patty, sliced cheese, beef mortadella, fried egg, tomato, lettuce, mayonnaise",
     image: "/images/afla-special-burger.jpg",
     isPopular: true,
     tags: ["Popular", "Beef"],
   }
   ```
4. Whole numbers automatically format with thousand separators (e.g. `ETB 4,885`), and decimal prices preserve cents (e.g. `ETB 549.79`).

### 2. How to Add Photos
When an item has no photo, the app displays a soft neutral (`#F3EFE9`) placeholder with a category-tailored food icon. Never use stock photos or repeat photos across unrelated dishes.

To add a real dish photo:
1. Save your photograph (e.g. `fried-chicken-8-piece.jpg`) in the [`public/images/`](file:///home/nebiyu/Desktop/Noorcent/Menu/Afla_menu/public/images) folder.
2. In [`data/menu.ts`](file:///home/nebiyu/Desktop/Noorcent/Menu/Afla_menu/data/menu.ts), set the `image` property:
   ```typescript
   image: "/images/fried-chicken-8-piece.jpg"
   ```
3. Save the file. The image will now appear with an automatic skeleton loader on the card and detail drawer!

### 3. How to Generate Table QR Codes
The menu includes a built-in table QR stand generator for restaurant staff:
1. Scroll to the footer or visit `http://localhost:3000/?qr=1`.
2. Click **"Staff: Table QR Stand Generator"**.
3. Type the Table number (e.g. `1`, `12`, or `Terrace 4`).
4. Click **Download** to save a high-resolution PNG, or click **Print** to print the stand directly.
5. When guests scan the QR code with their mobile phone camera, the menu opens directly with their table identified (e.g. `Table 12`).

---

## 📋 Menu Summary (58 Items)

1. **Chicken** (11 items)
2. **Mixed Grill** (3 items)
3. **Burger** (6 items)
4. **Sandwich** (5 items)
5. **Shawarma** (6 items)
6. **Pasta & Rice** (8 items)
7. **Pizza** (7 items)
8. **Fish** (3 items)
9. **Salad** (5 items)
10. **Signature Drinks** (4 items)

Total: **58 items**.
