"use client";

import React, { useState, useEffect } from "react";
import QRCode from "qrcode";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { QrCode, Download, Printer, Check, Copy } from "lucide-react";
import { AflaLogo } from "@/components/AflaLogo";

interface TableQrModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function TableQrModal({ isOpen, onClose }: TableQrModalProps) {
  const [tableNumber, setTableNumber] = useState<string>("1");
  const [qrDataUrl, setQrDataUrl] = useState<string>("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
    const origin = typeof window !== "undefined" ? window.location.origin : "https://aflamenu.com";
    const targetUrl = `${origin}/?table=${encodeURIComponent(tableNumber)}`;

    QRCode.toDataURL(targetUrl, {
      width: 320,
      margin: 2,
      color: {
        dark: "#18181b",
        light: "#ffffff",
      },
    })
      .then((url) => setQrDataUrl(url))
      .catch((err) => console.error("QR Code generation error", err));
  }, [tableNumber, isOpen]);

  const handleCopyLink = () => {
    const origin = typeof window !== "undefined" ? window.location.origin : "https://aflamenu.com";
    const targetUrl = `${origin}/?table=${encodeURIComponent(tableNumber)}`;
    navigator.clipboard.writeText(targetUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    if (!qrDataUrl) return;
    const link = document.createElement("a");
    link.download = `afla-menu-table-${tableNumber}.png`;
    link.href = qrDataUrl;
    link.click();
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-md text-center p-6 sm:p-8">
        <DialogHeader className="items-center">
          <div className="p-3 rounded-full bg-orange-100 dark:bg-orange-950/50 text-orange-600 mb-2">
            <QrCode className="w-6 h-6" />
          </div>
          <DialogTitle className="text-xl font-serif">Table QR Generator</DialogTitle>
          <DialogDescription>
            Scan to view our digital menu directly on any smartphone
          </DialogDescription>
        </DialogHeader>

        {/* Table Selector */}
        <div className="flex items-center justify-center gap-2 my-2">
          <label htmlFor="table-select" className="text-xs font-semibold uppercase text-zinc-500">
            Table:
          </label>
          <select
            id="table-select"
            value={tableNumber}
            onChange={(e) => setTableNumber(e.target.value)}
            className="rounded-lg border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 px-3 py-1.5 text-sm font-semibold text-zinc-800 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-orange-500"
          >
            {Array.from({ length: 30 }, (_, i) => (
              <option key={i + 1} value={`${i + 1}`}>
                Table {i + 1}
              </option>
            ))}
            <option value="VIP-1">VIP Lounge 1</option>
            <option value="VIP-2">VIP Lounge 2</option>
            <option value="Terrace">Terrace Bar</option>
            <option value="Takeaway">Takeaway Counter</option>
          </select>
        </div>

        {/* Printable Card Preview */}
        <div className="my-4 p-5 rounded-2xl bg-white border border-zinc-200 shadow-md text-zinc-900 inline-flex flex-col items-center">
          <AflaLogo size="sm" showText={true} className="mb-2" />
          <div className="text-xs font-bold uppercase tracking-widest text-orange-600 mb-3">
            Table {tableNumber}
          </div>

          {qrDataUrl ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={qrDataUrl}
              alt={`QR code for Table ${tableNumber}`}
              className="w-48 h-48 rounded-lg shadow-xs"
            />
          ) : (
            <div className="w-48 h-48 bg-zinc-100 rounded-lg animate-pulse" />
          )}

          <p className="text-[11px] text-zinc-500 mt-3 font-medium">
            Point camera to view menu & specials
          </p>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-2 mt-2">
          <Button
            variant="outline"
            size="sm"
            onClick={handleCopyLink}
            className="gap-1.5 text-xs"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
            {copied ? "Link Copied" : "Copy Link"}
          </Button>

          <Button
            variant="outline"
            size="sm"
            onClick={handleDownload}
            className="gap-1.5 text-xs"
          >
            <Download className="w-3.5 h-3.5" />
            Download PNG
          </Button>
        </div>

        <Button
          variant="primary-orange"
          size="sm"
          onClick={handlePrint}
          className="w-full gap-2 mt-2 font-medium"
        >
          <Printer className="w-4 h-4" />
          Print Table Stand
        </Button>
      </DialogContent>
    </Dialog>
  );
}
