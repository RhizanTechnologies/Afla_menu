"use client";

import React from "react";
import { AflaLogo } from "@/components/AflaLogo";
import { RESTAURANT_INFO } from "@/data/menu";
import {
  Clock,
  Phone,
  MapPin,
  ExternalLink,
} from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-zinc-950 text-zinc-300 border-t border-zinc-800/80 pt-14 pb-12 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-zinc-800/60">
          {/* Col 1: Brand & Bio */}
          <div className="flex flex-col gap-4">
            <AflaLogo size="md" showText={true} />
            <p className="text-xs text-zinc-400 leading-relaxed max-w-sm">
              Experience the pinnacle of culinary craft in Addis Ababa. From flame-grilled specialties and stone-baked pizzas to crispy fried favorites and artisanal brews.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={RESTAURANT_INFO.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow Afla on Instagram"
                className="p-2.5 rounded-full bg-zinc-900 hover:bg-orange-600 text-zinc-300 hover:text-white transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href={RESTAURANT_INFO.socials.telegram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Join Afla on Telegram"
                className="p-2.5 rounded-full bg-zinc-900 hover:bg-orange-600 text-zinc-300 hover:text-white transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                </svg>
              </a>
              <a
                href={RESTAURANT_INFO.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow Afla on Facebook"
                className="p-2.5 rounded-full bg-zinc-900 hover:bg-orange-600 text-zinc-300 hover:text-white transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2: Opening Hours */}
          <div className="flex flex-col gap-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-zinc-100 flex items-center gap-2">
              <Clock className="w-4 h-4 text-orange-500" />
              Hours of Operation
            </h4>
            <div className="space-y-2 text-xs text-zinc-400">
              <div>
                <span className="block font-medium text-zinc-200">Monday – Thursday</span>
                <span>{RESTAURANT_INFO.hours.weekdays}</span>
              </div>
              <div>
                <span className="block font-medium text-zinc-200">Friday – Sunday</span>
                <span>{RESTAURANT_INFO.hours.weekends}</span>
              </div>
              <div className="pt-1 text-emerald-400 font-medium">
                Dine-in, Takeaway & Delivery Available
              </div>
            </div>
          </div>

          {/* Col 3: Phone & Direct Contact */}
          <div className="flex flex-col gap-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-zinc-100 flex items-center gap-2">
              <Phone className="w-4 h-4 text-orange-500" />
              Phone & Orders
            </h4>
            <div className="space-y-2 text-xs text-zinc-400">
              <p>For reservations, table bookings, or takeaway orders:</p>
              <a
                href={`tel:${RESTAURANT_INFO.phone}`}
                className="block text-sm font-bold text-orange-400 hover:underline"
              >
                {RESTAURANT_INFO.phone}
              </a>
              <a
                href={`tel:${RESTAURANT_INFO.secondaryPhone}`}
                className="block text-xs font-semibold text-zinc-300 hover:underline"
              >
                {RESTAURANT_INFO.secondaryPhone}
              </a>
            </div>
          </div>

          {/* Col 4: Address & Google Maps */}
          <div className="flex flex-col gap-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-zinc-100 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-orange-500" />
              Location & Map
            </h4>
            <p className="text-xs text-zinc-400 leading-relaxed">
              {RESTAURANT_INFO.address}
            </p>
            <div>
              <a
                href={RESTAURANT_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-orange-400 hover:text-orange-300 bg-orange-950/40 border border-orange-500/30 px-3 py-1.5 rounded-lg transition-colors"
              >
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p>© {currentYear} Afla Restaurant & Grill. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Crafted with passion in Addis Ababa, Ethiopia
          </p>
        </div>
      </div>
    </footer>
  );
}
