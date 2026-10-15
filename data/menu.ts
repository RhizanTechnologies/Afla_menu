export type MenuCategoryId =
  | "chicken"
  | "mixed-grill"
  | "burger"
  | "sandwich"
  | "shawarma"
  | "pasta-rice"
  | "pizza"
  | "fish"
  | "salad"
  | "signature-drinks";

export interface CategoryInfo {
  id: MenuCategoryId;
  name: string;
  amharicName: string;
  icon: string;
}

export type DietaryTag =
  | "Popular"
  | "Spicy"
  | "Vegetarian"
  | "Fasting"
  | "Chicken"
  | "Beef"
  | "Fish"
  | "Tuna";

export interface MenuItem {
  id: string;
  name: string;
  amharicName?: string;
  category: MenuCategoryId;
  price: number;
  description?: string;
  side?: string;
  image?: string;
  isPopular?: boolean;
  isSpicy?: boolean;
  isVegetarian?: boolean;
  isFasting?: boolean;
  tags: DietaryTag[];
}

export const CATEGORIES: CategoryInfo[] = [
  {
    id: "chicken",
    name: "Chicken",
    amharicName: "ዶሮ / ቸክን",
    icon: "drumstick",
  },
  {
    id: "mixed-grill",
    name: "Mixed Grill",
    amharicName: "ሚክስድ ግሪል",
    icon: "utensils",
  },
  {
    id: "burger",
    name: "Burger",
    amharicName: "በርገር",
    icon: "sandwich",
  },
  {
    id: "sandwich",
    name: "Sandwich",
    amharicName: "ሳንድዊች",
    icon: "sandwich",
  },
  {
    id: "shawarma",
    name: "Shawarma Wrap",
    amharicName: "ሻዋርማ እና ሮል",
    icon: "wrap",
  },
  {
    id: "pasta-rice",
    name: "Pasta & Rice",
    amharicName: "ፓስታ እና ሩዝ",
    icon: "soup",
  },
  {
    id: "pizza",
    name: "Pizza",
    amharicName: "ፒዛ",
    icon: "pizza",
  },
  {
    id: "fish",
    name: "Fish",
    amharicName: "አሳ",
    icon: "fish",
  },
  {
    id: "salad",
    name: "Salad",
    amharicName: "ሰላጣ",
    icon: "salad",
  },
  {
    id: "signature-drinks",
    name: "Signature Drinks",
    amharicName: "ልዩ መጠጦች",
    icon: "drink",
  },
];

export const MENU_ITEMS: MenuItem[] = [
  // ----------------------------------------------------
  // CHICKEN (11 items)
  // ----------------------------------------------------
  {
    id: "full-fried-chicken",
    name: "Full Fried Chicken",
    amharicName: "ፍራይድ ቸክን",
    category: "chicken",
    price: 4885,
    side: "Side fries and sauce",
    image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?q=80&w=800&auto=format&fit=crop",
    tags: ["Chicken"],
  },
  {
    id: "half-fried-chicken",
    name: "Half Fried Chicken",
    amharicName: "ፍራይድ ቸክን",
    category: "chicken",
    price: 2485,
    side: "Side fries and sauce",
    image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?q=80&w=800&auto=format&fit=crop",
    tags: ["Chicken"],
  },
  {
    id: "fried-chicken-8-piece",
    name: "Fried Chicken, 8 piece",
    amharicName: "ፍራይድ ቸክን",
    category: "chicken",
    price: 1995,
    side: "Side fries and sauce",
    image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?q=80&w=800&auto=format&fit=crop",
    isPopular: true,
    tags: ["Popular", "Chicken"],
  },
  {
    id: "fried-chicken-6-piece",
    name: "Fried Chicken, 6 piece",
    amharicName: "ፍራይድ ቸክን",
    category: "chicken",
    price: 1680,
    side: "Side fries and sauce",
    image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?q=80&w=800&auto=format&fit=crop",
    tags: ["Chicken"],
  },
  {
    id: "fried-chicken-4-piece",
    name: "Fried Chicken, 4 piece",
    amharicName: "ፍራይድ ቸክን",
    category: "chicken",
    price: 1095,
    side: "Side fries and sauce",
    image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?q=80&w=800&auto=format&fit=crop",
    tags: ["Chicken"],
  },
  {
    id: "chicken-cutlet",
    name: "Chicken Cutlet",
    category: "chicken",
    price: 898,
    description: "Chicken, egg, flour, bread crumbs, side rice or salad",
    side: "Side rice or salad",
    image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?q=80&w=800&auto=format&fit=crop",
    tags: ["Chicken"],
  },
  {
    id: "chicken-breast",
    name: "Chicken Breast",
    amharicName: "ቸክን ብረስት",
    category: "chicken",
    price: 1050,
    description: "Chicken, tomato, rosemary, soy sauce, side rice or salad",
    side: "Side rice or salad",
    tags: ["Chicken"],
  },
  {
    id: "chicken-leg-3-piece",
    name: "Chicken Leg, 3 piece",
    amharicName: "ቸክን ሌግ",
    category: "chicken",
    price: 1050,
    image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?q=80&w=800&auto=format&fit=crop",
    tags: ["Chicken"],
  },
  {
    id: "chicken-nugget",
    name: "Chicken Nugget",
    amharicName: "ቸክን ኑጌት",
    category: "chicken",
    price: 1149,
    description: "Breaded chicken, egg, flour, side fries or salad",
    side: "Side fries or salad",
    tags: ["Chicken"],
  },
  {
    id: "full-roasted-chicken",
    name: "Full Roasted Chicken",
    category: "chicken",
    price: 3350,
    image: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?q=80&w=800&auto=format&fit=crop",
    tags: ["Chicken"],
  },
  {
    id: "half-roasted-chicken",
    name: "Half Roasted Chicken",
    category: "chicken",
    price: 1670,
    image: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?q=80&w=800&auto=format&fit=crop",
    tags: ["Chicken"],
  },

  // ----------------------------------------------------
  // MIXED GRILL (3 items)
  // ----------------------------------------------------
  {
    id: "chicken-tibs",
    name: "Chicken Tibs",
    amharicName: "ቺክን ትብስ",
    category: "mixed-grill",
    price: 895,
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800&auto=format&fit=crop",
    isPopular: true,
    tags: ["Popular", "Chicken"],
  },
  {
    id: "mixed-grill-lasagna",
    name: "Mixed Grill Lasagna",
    amharicName: "ሚክስድ ግሪል በላዛኛ",
    category: "mixed-grill",
    price: 1500,
    image: "https://images.unsplash.com/photo-1574894709920-11b28e7367e3?q=80&w=800&auto=format&fit=crop",
    tags: ["Beef"],
  },
  {
    id: "lasagna",
    name: "Lasagna",
    amharicName: "ላዛኛ",
    category: "mixed-grill",
    price: 1200,
    image: "https://images.unsplash.com/photo-1574894709920-11b28e7367e3?q=80&w=800&auto=format&fit=crop",
    tags: ["Beef"],
  },

  // ----------------------------------------------------
  // BURGER (6 items) — User provided Unsplash
  // ----------------------------------------------------
  {
    id: "afla-special-burger",
    name: "Afla Special Burger",
    category: "burger",
    price: 755,
    description:
      "Grilled beef patty, sliced cheese, beef mortadella, fried egg, tomato, lettuce, mayonnaise",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=999&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    isPopular: true,
    tags: ["Popular", "Beef"],
  },
  {
    id: "chicken-special-burger",
    name: "Chicken Special Burger",
    category: "burger",
    price: 755,
    description:
      "Grilled patty, sliced cheese, beef mortadella, fried egg, tomato, lettuce",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=999&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    tags: ["Chicken", "Beef"],
  },
  {
    id: "double-burger",
    name: "Double Burger",
    category: "burger",
    price: 720,
    description: "Grilled beef patty, sliced cheese, lettuce, tomato, mayonnaise",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=999&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    tags: ["Beef"],
  },
  {
    id: "bbq-burger",
    name: "BBQ Burger",
    category: "burger",
    price: 549.79,
    description: "Grilled beef patty, sliced cheese, lettuce, BBQ sauce",
    tags: ["Beef"],
  },
  {
    id: "cheese-burger",
    name: "Cheese Burger",
    category: "burger",
    price: 575,
    description:
      "Grilled beef patty, sliced cheese, lettuce, fresh tomato, mayonnaise",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=999&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    tags: ["Beef"],
  },
  {
    id: "beef-burger",
    name: "Beef Burger",
    category: "burger",
    price: 545,
    description: "Two beef patties, salad, tomato, onion, pepper",
    tags: ["Beef"],
  },

  // ----------------------------------------------------
  // SANDWICH (5 items) — User provided Unsplash
  // ----------------------------------------------------
  {
    id: "egg-sandwich",
    name: "Egg Sandwich",
    category: "sandwich",
    price: 389,
    description: "Topped with fried egg, lettuce, fresh tomato, mayonnaise",
    tags: [],
  },
  {
    id: "chicken-sandwich",
    name: "Chicken Sandwich",
    category: "sandwich",
    price: 595,
    description:
      "Grilled chicken patty, special sauce, fresh tomato, lettuce, mayonnaise",
    image:
      "https://images.unsplash.com/photo-1559466273-d95e72debaf8?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    tags: ["Chicken"],
  },
  {
    id: "egg-and-cheese",
    name: "Egg and Cheese",
    category: "sandwich",
    price: 519,
    description:
      "Topped with fried egg, sliced cheese, lettuce, fresh tomato, mayonnaise",
    tags: [],
  },
  {
    id: "club-sandwich",
    name: "Club Sandwich",
    category: "sandwich",
    price: 720,
    description: "Served with fries",
    side: "Served with fries",
    image:
      "https://images.unsplash.com/photo-1559466273-d95e72debaf8?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    tags: ["Chicken"],
  },
  {
    id: "vegetable-sandwich",
    name: "Vegetable Sandwich",
    category: "sandwich",
    price: 350,
    description: "Mixed cooked vegetables, lettuce, fresh tomato, cucumber",
    isVegetarian: true,
    tags: ["Vegetarian"],
  },

  // ----------------------------------------------------
  // SHAWARMA WRAP (6 items)
  // ----------------------------------------------------
  {
    id: "special-shawarma",
    name: "Special Shawarma",
    category: "shawarma",
    price: 685,
    description:
      "Grilled chicken, mozzarella cheese, cabbage, beef mortadella, onion, fresh tomato, chili",
    image: "https://images.unsplash.com/photo-1561651823-34feb02250e4?q=80&w=800&auto=format&fit=crop",
    isPopular: true,
    isSpicy: true,
    tags: ["Popular", "Chicken", "Beef", "Spicy"],
  },
  {
    id: "chicken-wrap",
    name: "Chicken Wrap",
    category: "shawarma",
    price: 595,
    description: "Grilled chicken, fresh tomato, onion, chili pepper",
    image: "https://images.unsplash.com/photo-1561651823-34feb02250e4?q=80&w=800&auto=format&fit=crop",
    tags: ["Chicken"],
  },
  {
    id: "spicy-chicken-wrap",
    name: "Spicy Chicken Wrap",
    category: "shawarma",
    price: 645,
    description: "Grilled chicken, hot pepper, fresh tomato, onion, chili",
    isSpicy: true,
    image: "https://images.unsplash.com/photo-1561651823-34feb02250e4?q=80&w=800&auto=format&fit=crop",
    tags: ["Chicken", "Spicy"],
  },
  {
    id: "tuna-wrap",
    name: "Tuna Wrap",
    category: "shawarma",
    price: 570,
    description: "Light grilled tuna, fresh tomato, chili, onion",
    tags: ["Tuna", "Fish"],
  },
  {
    id: "beef-wrap",
    name: "Beef Wrap",
    category: "shawarma",
    price: 630,
    description: "Grilled beef, fresh tomato, chili, onion",
    tags: ["Beef"],
  },
  {
    id: "vegetable-wrap",
    name: "Vegetable Wrap",
    category: "shawarma",
    price: 460,
    description: "Mixed well-cooked vegetables",
    isVegetarian: true,
    tags: ["Vegetarian"],
  },

  // ----------------------------------------------------
  // PASTA & RICE (8 items)
  // ----------------------------------------------------
  {
    id: "pasta-with-vegetable",
    name: "Pasta with Vegetable",
    category: "pasta-rice",
    price: 450,
    description: "Mixed well-cooked vegetables, green pepper",
    isVegetarian: true,
    image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?q=80&w=800&auto=format&fit=crop",
    tags: ["Vegetarian"],
  },
  {
    id: "pasta-with-tomato-sauce",
    name: "Pasta with Tomato Sauce",
    category: "pasta-rice",
    price: 420,
    description: "Tomato sauce, green pepper, onion",
    isVegetarian: true,
    image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?q=80&w=800&auto=format&fit=crop",
    tags: ["Vegetarian"],
  },
  {
    id: "pasta-with-tuna",
    name: "Pasta with Tuna",
    category: "pasta-rice",
    price: 550,
    description: "Tuna, green pepper, onion, tomato sauce",
    tags: ["Tuna", "Fish"],
  },
  {
    id: "pasta-with-meat-sauce",
    name: "Pasta with Meat Sauce",
    category: "pasta-rice",
    price: 580,
    description: "Meat, green pepper, onion, Bolognese sauce",
    tags: ["Beef"],
  },
  {
    id: "rice-with-vegetable",
    name: "Rice with Vegetable",
    category: "pasta-rice",
    price: 420,
    description: "Mixed well-cooked vegetables, green pepper",
    isVegetarian: true,
    image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?q=80&w=800&auto=format&fit=crop",
    tags: ["Vegetarian"],
  },
  {
    id: "rice-with-tuna",
    name: "Rice with Tuna",
    category: "pasta-rice",
    price: 550,
    description: "Tuna, green pepper, onion, tomato sauce",
    tags: ["Tuna", "Fish"],
  },
  {
    id: "rice-with-meat-sauce",
    name: "Rice with Meat Sauce",
    category: "pasta-rice",
    price: 580,
    description: "Meat, green pepper, onion, Bolognese sauce",
    tags: ["Beef"],
  },
  {
    id: "chicken-with-rice",
    name: "Chicken with Rice",
    category: "pasta-rice",
    price: 685,
    description: "Chicken, fresh tomato, onion, chili",
    image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?q=80&w=800&auto=format&fit=crop",
    tags: ["Chicken"],
  },

  // ----------------------------------------------------
  // PIZZA (7 items)
  // ----------------------------------------------------
  {
    id: "special-pizza",
    name: "Special Pizza",
    category: "pizza",
    price: 895,
    description:
      "Tomato sauce, mozzarella cheese, minced beef, chicken, boiled egg, oregano",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=800&auto=format&fit=crop",
    isPopular: true,
    tags: ["Popular", "Beef", "Chicken"],
  },
  {
    id: "chicken-pizza",
    name: "Chicken Pizza",
    category: "pizza",
    price: 840,
    description: "Chicken topping, mozzarella cheese, beef slice",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=800&auto=format&fit=crop",
    tags: ["Chicken", "Beef"],
  },
  {
    id: "bbq-chicken-pizza",
    name: "BBQ Chicken Pizza",
    category: "pizza",
    price: 799,
    description: "BBQ sauce, mozzarella cheese, chicken topping, beef slice",
    tags: ["Chicken", "Beef"],
  },
  {
    id: "meatlover-pizza",
    name: "Meatlover Pizza",
    category: "pizza",
    price: 685,
    description: "Tomato sauce, beef, oregano, mozzarella cheese",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=800&auto=format&fit=crop",
    tags: ["Beef"],
  },
  {
    id: "tuna-pizza",
    name: "Tuna Pizza",
    category: "pizza",
    price: 750,
    description: "Tomato sauce, tuna, onion, oregano, mozzarella cheese",
    tags: ["Tuna", "Fish"],
  },
  {
    id: "fasting-hot-vegetable-pizza",
    name: "Fasting Hot Vegetable Pizza",
    category: "pizza",
    price: 630,
    description: "Fasting sauce, mushroom, mixed vegetables, onion, oregano",
    isSpicy: true,
    isVegetarian: true,
    isFasting: true,
    tags: ["Vegetarian", "Fasting", "Spicy"],
  },
  {
    id: "margherita-pizza",
    name: "Margherita Pizza",
    category: "pizza",
    price: 760,
    description: "Fiery sauce, mushroom, onion, oregano, cheese",
    isSpicy: true,
    tags: ["Spicy"],
  },

  // ----------------------------------------------------
  // FISH (3 items) — User provided Unsplash
  // ----------------------------------------------------
  {
    id: "grilled-nile-perch",
    name: "Grilled Nile Perch",
    amharicName: "ግሪልድ ናይል ፐርች",
    category: "fish",
    price: 1150,
    description:
      "Nile perch, flour coating, assorted vegetables, seasonal side rice or fries",
    side: "Side rice or fries",
    image:
      "https://images.unsplash.com/photo-1725393325387-07f0d4951528?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    tags: ["Fish"],
  },
  {
    id: "fish-goulash",
    name: "Fish Goulash",
    amharicName: "አሳ ጉላሽ",
    category: "fish",
    price: 850,
    description:
      "Fried fish, vegetable oil, egg-coated flour, side rice or vegetables",
    side: "Side rice or vegetables",
    tags: ["Fish"],
  },
  {
    id: "fish-cutlet",
    name: "Fish Cutlet",
    amharicName: "አሳ ኩትሌት",
    category: "fish",
    price: 895,
    description:
      "Tilapia fish, vegetable oil, breadcrumbs, flour, side rice or vegetables",
    side: "Side rice or vegetables",
    image:
      "https://images.unsplash.com/photo-1725393325387-07f0d4951528?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    tags: ["Fish"],
  },

  // ----------------------------------------------------
  // SALAD (5 items)
  // ----------------------------------------------------
  {
    id: "mixed-salad",
    name: "Mixed Salad",
    amharicName: "ሚክስድ ሳላድ",
    category: "salad",
    price: 460,
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=800&auto=format&fit=crop",
    isVegetarian: true,
    tags: ["Vegetarian"],
  },
  {
    id: "fish-salad",
    name: "Fish Salad",
    amharicName: "ፊሽ ሳላድ",
    category: "salad",
    price: 750,
    tags: ["Fish"],
  },
  {
    id: "chicken-salad",
    name: "Chicken Salad",
    amharicName: "ቺክን ሳላድ",
    category: "salad",
    price: 750,
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=800&auto=format&fit=crop",
    tags: ["Chicken"],
  },
  {
    id: "tuna-salad",
    name: "Tuna Salad",
    amharicName: "ቱና ሳላድ",
    category: "salad",
    price: 670,
    tags: ["Tuna", "Fish"],
  },
  {
    id: "fruit-punch-salad",
    name: "Fruit Punch Salad",
    amharicName: "ፍሩት ሳላድ",
    category: "salad",
    price: 550,
    isVegetarian: true,
    tags: ["Vegetarian"],
  },

  // ----------------------------------------------------
  // SIGNATURE DRINKS (4 items)
  // ----------------------------------------------------
  {
    id: "hibiscus",
    name: "Hibiscus",
    category: "signature-drinks",
    price: 440,
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=800&auto=format&fit=crop",
    tags: [],
  },
  {
    id: "espresso-tonic",
    name: "Espresso Tonic",
    category: "signature-drinks",
    price: 350,
    tags: [],
  },
  {
    id: "cold-brew",
    name: "Cold Brew",
    category: "signature-drinks",
    price: 440,
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=800&auto=format&fit=crop",
    tags: [],
  },
  {
    id: "special-iced-tea",
    name: "Special Iced Tea",
    category: "signature-drinks",
    price: 280,
    tags: [],
  },
];

/**
 * Formats ETB currency.
 * Shows whole numbers without decimals (e.g., "ETB 4,885").
 * Preserves two decimals for fractional amounts (e.g., "ETB 549.79").
 */
export function formatPrice(price: number): string {
  if (price % 1 === 0) {
    return `ETB ${price.toLocaleString("en-US")}`;
  }
  return `ETB ${price.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;
}
