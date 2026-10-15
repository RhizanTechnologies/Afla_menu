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
    const origin =
      typeof window !== "undefined"
        ? window.location.origin
        : "https://aflamenu.com";
    const targetUrl = `${origin}/?table=${encodeURIComponent(tableNumber)}`;

    QRCode.toDataURL(targetUrl, {
      width: 320,
      margin: 2,
      color: {
        dark: "#2B2118",
        light: "#ffffff",
      },
    })
      .then((url) => setQrDataUrl(url))
      .catch((err) => console.error("QR Code generation error", err));
  }, [tableNumber, isOpen]);

  const handleCopyLink = () => {
    const origin =
      typeof window !== "undefined"
        ? window.location.origin
        : "https://aflamenu.com";
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
      <DialogContent className="sm:max-w-md bg-white border border-[#EEE9E2] p-5">
        <DialogHeader className="text-left">
          <div className="flex items-center gap-2 mb-1">
            <div className="p-2 rounded-full bg-[#F3EFE9] text-[#F28C28]">
              <QrCode className="w-4 h-4" />
            </div>
            <DialogTitle className="text-base font-semibold text-[#2B2118]">
              Generate Table QR Code
            </DialogTitle>
          </div>
          <DialogDescription className="text-xs text-[#7A6F66]">
            Print or download table-specific QR codes for customer table stands.
          </DialogDescription>
        </DialogHeader>

        <div className="flex flex-col items-center gap-4 py-2">
          {/* Table Selector */}
          <div className="flex items-center gap-2 w-full">
            <label
              htmlFor="table-select"
              className="text-xs font-medium text-[#7A6F66] shrink-0"
            >
              Select Table:
            </label>
            <input
              id="table-select"
              type="text"
              value={tableNumber}
              onChange={(e) => setTableNumber(e.target.value)}
              placeholder="e.g. 1, 2, Terrace 4"
              className="flex-1 rounded-xl border border-[#EEE9E2] bg-white px-3 py-1.5 text-xs text-[#2B2118] focus:outline-none focus:ring-2 focus:ring-[#F28C28]"
            />
          </div>

          {/* Printable Preview Card */}
          <div
            id="printable-table-qr"
            className="w-full max-w-[260px] bg-white rounded-2xl border-2 border-[#EEE9E2] p-5 text-center flex flex-col items-center shadow-xs"
          >
            <AflaLogo size={42} />
            <h4 className="font-semibold text-xs text-[#2B2118] mt-2">
              AFLA Restaurant
            </h4>
            <p className="text-[9px] uppercase tracking-wider text-[#7A6F66]">
              Scan for Digital Menu
            </p>

            <div className="my-3 p-2 bg-[#FAFAF8] rounded-xl border border-[#EEE9E2]">
              {qrDataUrl ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={qrDataUrl}
                  alt={`QR Code for Table ${tableNumber}`}
                  className="w-36 h-36 mx-auto rounded-lg"
                />
              ) : (
                <div className="w-36 h-36 flex items-center justify-center text-xs text-[#7A6F66]">
                  Generating...
                </div>
              )}
            </div>

            <div className="inline-block px-3 py-1 bg-[#F3EFE9] text-[#2B2118] rounded-full text-xs font-semibold">
              Table {tableNumber}
            </div>
          </div>

          {/* Actions */}
          <div className="grid grid-cols-3 gap-2 w-full pt-1">
            <Button
              variant="outline"
              size="sm"
              onClick={handleCopyLink}
              className="text-xs gap-1.5"
            >
              {copied ? (
                <Check className="w-3.5 h-3.5 text-emerald-600" />
              ) : (
                <Copy className="w-3.5 h-3.5" />
              )}
              {copied ? "Copied" : "Copy"}
            </Button>

            <Button
              variant="outline"
              size="sm"
              onClick={handleDownload}
              className="text-xs gap-1.5"
            >
              <Download className="w-3.5 h-3.5" />
              Download
            </Button>

            <Button
              variant="default"
              size="sm"
              onClick={handlePrint}
              className="text-xs gap-1.5"
            >
              <Printer className="w-3.5 h-3.5" />
              Print
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default TableQrModal;
