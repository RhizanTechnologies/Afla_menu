import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Noto_Sans_Ethiopic } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const notoEthiopic = Noto_Sans_Ethiopic({
  variable: "--font-ethiopic",
  subsets: ["ethiopic"],
  weight: ["400", "600"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#FF6417",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "AFLA Restaurant | PIZZA · BURGER · CHICKEN",
  description:
    "Official digital menu for AFLA Restaurant. Browse our selection of Pizza, Burger, Chicken, and more.",
  manifest: "/manifest.json",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "AFLA Restaurant | PIZZA · BURGER · CHICKEN",
    description: "Official digital menu for AFLA Restaurant.",
    type: "website",
    locale: "en_US",
  },
};

const jsonLdMenu = {
  "@context": "https://schema.org",
  "@type": "Menu",
  name: "AFLA Restaurant Digital Menu",
  description: "Digital menu for AFLA Restaurant — PIZZA · BURGER · CHICKEN",
  hasMenuSection: [
    { "@type": "MenuSection", name: "Break Fast" },
    { "@type": "MenuSection", name: "Chicken" },
    { "@type": "MenuSection", name: "Mixed Grill" },
    { "@type": "MenuSection", name: "Burger" },
    { "@type": "MenuSection", name: "Sandwich" },
    { "@type": "MenuSection", name: "Shawarma Wrap" },
    { "@type": "MenuSection", name: "Pasta & Rice" },
    { "@type": "MenuSection", name: "Pizza" },
    { "@type": "MenuSection", name: "Fish" },
    { "@type": "MenuSection", name: "Salad" },
    { "@type": "MenuSection", name: "Fresh Juice" },
    { "@type": "MenuSection", name: "Shakes & Smoothies" },
    { "@type": "MenuSection", name: "Hot Drinks" },
    { "@type": "MenuSection", name: "Cold Drinks & Mojitos" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`light ${plusJakarta.variable} ${notoEthiopic.variable}`}
      style={{ colorScheme: "light" }}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdMenu) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans bg-[#FAF8F5] text-[#1F1A16] antialiased">
        {children}
      </body>
    </html>
  );
}
