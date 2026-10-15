import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#ea580c",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Afla Restaurant & Lounge | Digital Menu (አፍላ ምናሌ)",
  description:
    "Explore the delicious digital menu of Afla Restaurant in Addis Ababa. Featuring crispy fried chicken, gourmet burgers, stone-baked pizzas, fresh fish cutlets, and signature cold brews.",
  keywords: [
    "Afla Restaurant",
    "Addis Ababa Menu",
    "Ethiopian Food",
    "Fried Chicken",
    "Gourmet Burger",
    "Bole Medhanialem",
    "Stone Baked Pizza",
    "Afla Menu",
    "አፍላ ሬስቶራንት",
  ],
  openGraph: {
    title: "Afla Restaurant & Lounge | Digital Menu",
    description:
      "Handcrafted burgers, crispy fried chicken, stone-baked pizzas, and refreshing drinks at Afla Restaurant, Addis Ababa.",
    url: "https://aflamenu.com",
    siteName: "Afla Restaurant",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Afla Restaurant & Lounge | Digital Menu",
    description:
      "View dishes, ingredients, prices, and dietary tags on the official Afla digital menu.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans selection:bg-orange-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}
