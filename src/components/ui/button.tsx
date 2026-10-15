import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?:
    | "default"
    | "outline"
    | "secondary"
    | "ghost"
    | "link"
    | "primary-orange";
  size?: "default" | "sm" | "lg" | "icon";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6417] disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98] cursor-pointer";

    const variantStyles = {
      default:
        "bg-[#FF6417] text-white hover:bg-[#E5550D] shadow-xs",
      "primary-orange":
        "bg-[#FF6417] text-white hover:bg-[#E5550D] shadow-xs",
      outline:
        "border border-[#F0E9E1] bg-white text-[#1F1A16] hover:bg-[#FAF8F5] hover:border-[#FF6417]/50",
      secondary:
        "bg-[#FFF2E5] text-[#FF6417] hover:bg-[#FFE6CF] border border-[#FFDEC2]",
      ghost:
        "hover:bg-[#F4EFEA] text-[#1F1A16]",
      link:
        "text-[#FF6417] underline-offset-4 hover:underline",
    };

    const sizeStyles = {
      default: "min-h-[44px] px-4 py-2",
      sm: "min-h-[36px] px-3 text-xs",
      lg: "min-h-[48px] px-6 text-base",
      icon: "min-h-[44px] min-w-[44px] p-0",
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variantStyles[variant], sizeStyles[size], className)}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };
