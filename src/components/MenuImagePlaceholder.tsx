import React from "react";
import { MenuCategoryId } from "@/data/menu";
import {
  UtensilsCrossed,
  Pizza,
  Fish,
  Salad,
  Coffee,
  Sandwich,
  Flame,
  Soup,
  Sparkles,
} from "lucide-react";

interface MenuImagePlaceholderProps {
  category: MenuCategoryId;
  className?: string;
  iconSize?: "sm" | "md" | "lg";
}

export function MenuImagePlaceholder({
  category,
  className = "",
  iconSize = "md",
}: MenuImagePlaceholderProps) {
  const getIcon = () => {
    const sizeClasses = {
      sm: "w-5 h-5",
      md: "w-7 h-7",
      lg: "w-10 h-10",
    }[iconSize];

    const iconColor = "text-[#A89F95]";

    switch (category) {
      case "breakfast":
        return <UtensilsCrossed className={`${sizeClasses} ${iconColor}`} />;
      case "chicken":
        return <UtensilsCrossed className={`${sizeClasses} ${iconColor}`} />;
      case "mixed-grill":
        return <Flame className={`${sizeClasses} ${iconColor}`} />;
      case "burger":
      case "sandwich":
      case "shawarma":
        return <Sandwich className={`${sizeClasses} ${iconColor}`} />;
      case "pasta-rice":
        return <Soup className={`${sizeClasses} ${iconColor}`} />;
      case "pizza":
        return <Pizza className={`${sizeClasses} ${iconColor}`} />;
      case "fish":
        return <Fish className={`${sizeClasses} ${iconColor}`} />;
      case "salad":
        return <Salad className={`${sizeClasses} ${iconColor}`} />;
      case "juice":
      case "shakes-smoothies":
      case "cold-drinks":
        return <Coffee className={`${sizeClasses} ${iconColor}`} />;
      case "hot-drinks":
        return <Coffee className={`${sizeClasses} ${iconColor}`} />;
      default:
        return <Sparkles className={`${sizeClasses} ${iconColor}`} />;
    }
  };

  return (
    <div
      className={`w-full h-full flex flex-col items-center justify-center bg-[#F3EFE9] text-[#7A6F66] select-none ${className}`}
      aria-label="Dish illustration placeholder"
    >
      {getIcon()}
    </div>
  );
}

export default MenuImagePlaceholder;
