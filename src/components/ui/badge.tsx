import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?:
    | "default"
    | "popular"
    | "spicy"
    | "vegetarian"
    | "fasting"
    | "tag";
}

function Badge({ className, variant = "default", ...props }: BadgeProps) {
  const variantStyles = {
    default: "bg-[#F4EFEA] text-[#7A6F66] border border-[#F0E9E1]",
    popular: "bg-[#FF6417] text-white font-bold shadow-xs",
    spicy: "bg-[#FEF2F2] text-[#D62828] border border-[#FECACA] font-semibold",
    vegetarian: "bg-[#F0FDF4] text-[#166534] border border-[#BBF7D0] font-semibold",
    fasting: "bg-[#ECFDF5] text-[#065F46] border border-[#A7F3D0] font-semibold",
    tag: "bg-[#F4EFEA] text-[#7A6F66] border border-[#F0E9E1]",
  };

  return (
    <div
      className={cn(
        "inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] leading-tight font-medium select-none",
        variantStyles[variant],
        className
      )}
      {...props}
    />
  );
}

export { Badge };
