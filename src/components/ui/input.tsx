import * as React from "react";
import { cn } from "@/lib/utils";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-11 w-full rounded-2xl border border-[#F0E9E1] bg-white px-4 py-2 text-sm text-[#1F1A16] placeholder:text-[#7A6F66]/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6417]/25 focus-visible:border-[#FF6417] disabled:cursor-not-allowed disabled:opacity-50 transition-all card-soft-shadow",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
