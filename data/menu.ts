export type MenuCategoryId =
  | "chicken"
  | "mixed-grill"
  | "burger"
  | "sandwich"
  | "shawarma-wrap"
  | "pasta-rice"
  | "pizza"
  | "fish"
  | "salad"
  | "signature-drinks";

export interface CategoryInfo {
  id: MenuCategoryId;
  name: string;
  amharicName: string;
  description: string;
  iconName: string;
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
  ingredients?: string[];
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
    description: "Crispy fried, golden roasted, and seasoned chicken specialties",
    iconName: "Drumstick",
  },
  {
    id: "mixed-grill",
    name: "Mixed Grill",
    amharicName: "ሚክስድ ግሪል",
    description: "Sizzling meat tibs and oven-baked layered lasagna",
    iconName: "Flame",
  },
  {
    id: "burger",
    name: "Burger",
    amharicName: "በርገር",
    description: "Flame-grilled gourmet beef and chicken patties with house sauces",
    iconName: "Sandwich",
  },
  {
    id: "sandwich",
    name: "Sandwich",
    amharicName: "ሳንድዊች",
    description: "Freshly assembled layered sandwiches with premium fillings",
    iconName: "Utensils",
  },
  {
    id: "shawarma-wrap",
    name: "Shawarma Wrap",
    amharicName: "ሻዋርማ እና ሮል",
    description: "Toasted flatbread rolled with spiced meats, veggies and garlic sauce",
    iconName: "Wrap",
  },
  {
    id: "pasta-rice",
    name: "Pasta & Rice",
    amharicName: "ፓስታ እና ሩዝ",
    description: "Al dente Italian pasta dishes and fragrant seasoned rice plates",
    iconName: "Soup",
  },
  {
    id: "pizza",
    name: "Pizza",
    amharicName: "ፒዛ",
    description: "Stone-baked hand-stretched pizzas with gooey mozzarella and fresh herbs",
    iconName: "Pizza",
  },
  {
    id: "fish",
    name: "Fish",
    amharicName: "አሳ",
    description: "Fresh Nile perch and Tilapia fillets prepared grilled, goulash or cutlet",
    iconName: "Fish",
  },
  {
    id: "salad",
    name: "Salad",
    amharicName: "ሰላጣ",
    description: "Vibrant crisp garden greens, tossed seafood, and seasonal fruit bowls",
    iconName: "Salad",
  },
  {
    id: "signature-drinks",
    name: "Signature Drinks",
    amharicName: "መጠጦች",
    description: "Artisan cold brews, sparkling tonics, and refreshing herbal infusions",
    iconName: "Coffee",
  },
];

/**
 * Format currency in ETB:
 * - Whole numbers have no decimals (e.g. 4885 -> "ETB 4,885", 685 -> "ETB 685")
 * - Decimal numbers retain their cents (e.g. 549.79 -> "ETB 549.79")
 */
export function formatPrice(price: number): string {
  const hasDecimals = price % 1 !== 0;
  const formatted = price.toLocaleString("en-US", {
    minimumFractionDigits: hasDecimals ? 2 : 0,
    maximumFractionDigits: 2,
  });
  return `ETB ${formatted}`;
}

export const MENU_ITEMS: MenuItem[] = [
  // ==========================================
  // CHICKEN
  // ==========================================
  {
    id: "chicken-full-fried",
    name: "Full Fried Chicken",
    amharicName: "ፍራይድ ቸክን",
    category: "chicken",
    price: 4885,
    description: "Crispy whole golden fried chicken seasoned with house spices.",
    side: "Side fries and sauce",
    image: "/images/fried-chicken.jpg",
    tags: ["Chicken"],
  },
  {
    id: "chicken-half-fried",
    name: "Half Fried Chicken",
    amharicName: "ፍራይድ ቸክን",
    category: "chicken",
    price: 2485,
    description: "Half portion of our signature golden fried chicken.",
    side: "Side fries and sauce",
    image: "/images/fried-chicken.jpg",
    tags: ["Chicken"],
  },
  {
    id: "chicken-8-piece",
    name: "Fried Chicken, 8 piece",
    amharicName: "ፍራይድ ቸክን",
    category: "chicken",
    price: 1995,
    description: "Eight juicy pieces of deep-fried seasoned chicken perfection.",
    side: "Side fries and sauce",
    image: "/images/fried-chicken.jpg",
    isPopular: true,
    tags: ["Popular", "Chicken"],
  },
  {
    id: "chicken-6-piece",
    name: "Fried Chicken, 6 piece",
    amharicName: "ፍራይድ ቸክን",
    category: "chicken",
    price: 1680,
    description: "Six pieces of crunchy, tender marinated fried chicken.",
    side: "Side fries and sauce",
    image: "/images/fried-chicken.jpg",
    tags: ["Chicken"],
  },
  {
    id: "chicken-4-piece",
    name: "Fried Chicken, 4 piece",
    amharicName: "ፍራይድ ቸክን",
    category: "chicken",
    price: 1095,
    description: "Four crispy pieces of freshly fried chicken.",
    side: "Side fries and sauce",
    image: "/images/fried-chicken.jpg",
    tags: ["Chicken"],
  },
  {
    id: "chicken-cutlet",
    name: "Chicken Cutlet",
    category: "chicken",
    price: 898,
    description: "Chicken, egg, flour, bread crumbs, side rice or salad",
    ingredients: ["Chicken", "Egg", "Flour", "Bread crumbs"],
    side: "Side rice or salad",
    image: "/images/chicken-cutlet.jpg",
    tags: ["Chicken"],
  },
  {
    id: "chicken-breast",
    name: "Chicken Breast",
    amharicName: "ቸክን ብረስት",
    category: "chicken",
    price: 1050,
    description: "Chicken, tomato, rosemary, soy sauce, side rice or salad",
    ingredients: ["Chicken", "Tomato", "Rosemary", "Soy sauce"],
    side: "Side rice or salad",
    image: "/images/chicken-breast.jpg",
    tags: ["Chicken"],
  },
  {
    id: "chicken-leg-3-piece",
    name: "Chicken Leg, 3 piece",
    amharicName: "ቸክን ሌግ",
    category: "chicken",
    price: 1050,
    description: "Three succulent chicken drumsticks seasoned and roasted to perfection.",
    image: "/images/chicken-leg.jpg",
    tags: ["Chicken"],
  },
  {
    id: "chicken-nugget",
    name: "Chicken Nugget",
    amharicName: "ቸክን ኑጌት",
    category: "chicken",
    price: 1149,
    description: "Breaded chicken, egg, flour, side fries or salad",
    ingredients: ["Breaded chicken", "Egg", "Flour"],
    side: "Side fries or salad",
    image: "/images/chicken-nuggets.jpg",
    tags: ["Chicken"],
  },
  {
    id: "chicken-full-roasted",
    name: "Full Roasted Chicken",
    category: "chicken",
    price: 3350,
    description: "Whole oven-roasted chicken herb-infused with juicy tender skin.",
    image: "/images/roasted-chicken.jpg",
    tags: ["Chicken"],
  },
  {
    id: "chicken-half-roasted",
    name: "Half Roasted Chicken",
    category: "chicken",
    price: 1670,
    description: "Half oven-roasted seasoned chicken, slow-cooked to seal in juices.",
    image: "/images/roasted-chicken.jpg",
    tags: ["Chicken"],
  },

  // ==========================================
  // MIXED GRILL
  // ==========================================
  {
    id: "mixed-chicken-tibs",
    name: "Chicken Tibs",
    amharicName: "ቺክን ትብስ",
    category: "mixed-grill",
    price: 895,
    description: "Sautéed marinated chicken cubes with onions, garlic, and sliced green peppers.",
    isPopular: true,
    isSpicy: true,
    image: "/images/chicken-tibs.jpg",
    tags: ["Popular", "Spicy", "Chicken"],
  },
  {
    id: "mixed-grill-lasagna",
    name: "Mixed Grill Lasagna",
    amharicName: "ሚክስድ ግሪል በላዛኛ",
    category: "mixed-grill",
    price: 1500,
    description: "Decadent layered pasta baked with grilled meats, béchamel, and rich melted cheese.",
    image: "/images/lasagna.jpg",
    tags: ["Beef", "Chicken"],
  },
  {
    id: "lasagna",
    name: "Lasagna",
    amharicName: "ላዛኛ",
    category: "mixed-grill",
    price: 1200,
    description: "Traditional Italian baked pasta layered with seasoned ground beef and tomato sauce.",
    image: "/images/lasagna.jpg",
    tags: ["Beef"],
  },

  // ==========================================
  // BURGER
  // ==========================================
  {
    id: "burger-afla-special",
    name: "Afla Special Burger",
    category: "burger",
    price: 755,
    description: "Grilled beef patty, sliced cheese, beef mortadella, fried egg, tomato, lettuce, mayonnaise",
    ingredients: [
      "Grilled beef patty",
      "Sliced cheese",
      "Beef mortadella",
      "Fried egg",
      "Tomato",
      "Lettuce",
      "Mayonnaise",
    ],
    isPopular: true,
    image: "/images/afla-special-burger.jpg",
    tags: ["Popular", "Beef"],
  },
  {
    id: "burger-chicken-special",
    name: "Chicken Special Burger",
    category: "burger",
    price: 755,
    description: "Grilled patty, sliced cheese, beef mortadella, fried egg, tomato, lettuce",
    ingredients: [
      "Grilled chicken patty",
      "Sliced cheese",
      "Beef mortadella",
      "Fried egg",
      "Tomato",
      "Lettuce",
    ],
    image: "/images/chicken-burger.jpg",
    tags: ["Chicken", "Beef"],
  },
  {
    id: "burger-double",
    name: "Double Burger",
    category: "burger",
    price: 720,
    description: "Grilled beef patty, sliced cheese, lettuce, tomato, mayonnaise",
    ingredients: [
      "Double grilled beef patty",
      "Sliced cheese",
      "Lettuce",
      "Tomato",
      "Mayonnaise",
    ],
    image: "/images/double-burger.jpg",
    tags: ["Beef"],
  },
  {
    id: "burger-bbq",
    name: "BBQ Burger",
    category: "burger",
    price: 549.79,
    description: "Grilled beef patty, sliced cheese, lettuce, BBQ sauce",
    ingredients: [
      "Grilled beef patty",
      "Sliced cheese",
      "Lettuce",
      "BBQ sauce",
    ],
    image: "/images/bbq-burger.jpg",
    tags: ["Beef"],
  },
  {
    id: "burger-cheese",
    name: "Cheese Burger",
    category: "burger",
    price: 575,
    description: "Grilled beef patty, sliced cheese, lettuce, fresh tomato, mayonnaise",
    ingredients: [
      "Grilled beef patty",
      "Sliced cheese",
      "Lettuce",
      "Fresh tomato",
      "Mayonnaise",
    ],
    image: "/images/cheese-burger.jpg",
    tags: ["Beef"],
  },
  {
    id: "burger-beef",
    name: "Beef Burger",
    category: "burger",
    price: 545,
    description: "Two beef patties, salad, tomato, onion, pepper",
    ingredients: [
      "Two beef patties",
      "Salad",
      "Tomato",
      "Onion",
      "Pepper",
    ],
    image: "/images/beef-burger.jpg",
    tags: ["Beef"],
  },

  // ==========================================
  // SANDWICH
  // ==========================================
  {
    id: "sandwich-egg",
    name: "Egg Sandwich",
    category: "sandwich",
    price: 389,
    description: "Topped with fried egg, lettuce, fresh tomato, mayonnaise",
    ingredients: ["Fried egg", "Lettuce", "Fresh tomato", "Mayonnaise"],
    image: "/images/egg-sandwich.jpg",
    tags: ["Vegetarian"],
    isVegetarian: true,
  },
  {
    id: "sandwich-chicken",
    name: "Chicken Sandwich",
    category: "sandwich",
    price: 595,
    description: "Grilled chicken patty, special sauce, fresh tomato, lettuce, mayonnaise",
    ingredients: [
      "Grilled chicken patty",
      "Special sauce",
      "Fresh tomato",
      "Lettuce",
      "Mayonnaise",
    ],
    image: "/images/chicken-sandwich.jpg",
    tags: ["Chicken"],
  },
  {
    id: "sandwich-egg-cheese",
    name: "Egg and Cheese",
    category: "sandwich",
    price: 519,
    description: "Topped with fried egg, sliced cheese, lettuce, fresh tomato, mayonnaise",
    ingredients: ["Fried egg", "Sliced cheese", "Lettuce", "Fresh tomato", "Mayonnaise"],
    image: "/images/egg-cheese-sandwich.jpg",
    tags: ["Vegetarian"],
    isVegetarian: true,
  },
  {
    id: "sandwich-club",
    name: "Club Sandwich",
    category: "sandwich",
    price: 720,
    description: "Served with fries. Multi-layer toasted sandwich with chicken, boiled egg, cheese, and vegetables.",
    side: "Served with fries",
    image: "/images/club-sandwich.jpg",
    tags: ["Chicken"],
  },
  {
    id: "sandwich-vegetable",
    name: "Vegetable Sandwich",
    category: "sandwich",
    price: 350,
    description: "Mixed cooked vegetables, lettuce, fresh tomato, cucumber",
    ingredients: ["Mixed cooked vegetables", "Lettuce", "Fresh tomato", "Cucumber"],
    isVegetarian: true,
    image: "/images/veg-sandwich.jpg",
    tags: ["Vegetarian"],
  },

  // ==========================================
  // SHAWARMA WRAP
  // ==========================================
  {
    id: "wrap-special-shawarma",
    name: "Special Shawarma",
    category: "shawarma-wrap",
    price: 685,
    description: "Grilled chicken, mozzarella cheese, cabbage, beef mortadella, onion, fresh tomato, chili",
    ingredients: [
      "Grilled chicken",
      "Mozzarella cheese",
      "Cabbage",
      "Beef mortadella",
      "Onion",
      "Fresh tomato",
      "Chili",
    ],
    isPopular: true,
    isSpicy: true,
    image: "/images/special-shawarma.jpg",
    tags: ["Popular", "Spicy", "Chicken", "Beef"],
  },
  {
    id: "wrap-chicken",
    name: "Chicken Wrap",
    category: "shawarma-wrap",
    price: 595,
    description: "Grilled chicken, fresh tomato, onion, chili pepper",
    ingredients: ["Grilled chicken", "Fresh tomato", "Onion", "Chili pepper"],
    isSpicy: true,
    image: "/images/chicken-wrap.jpg",
    tags: ["Spicy", "Chicken"],
  },
  {
    id: "wrap-spicy-chicken",
    name: "Spicy Chicken Wrap",
    category: "shawarma-wrap",
    price: 645,
    description: "Grilled chicken, hot pepper, fresh tomato, onion, chili",
    ingredients: ["Grilled chicken", "Hot pepper", "Fresh tomato", "Onion", "Chili"],
    isSpicy: true,
    image: "/images/spicy-chicken-wrap.jpg",
    tags: ["Spicy", "Chicken"],
  },
  {
    id: "wrap-tuna",
    name: "Tuna Wrap",
    category: "shawarma-wrap",
    price: 570,
    description: "Light grilled tuna, fresh tomato, chili, onion",
    ingredients: ["Light grilled tuna", "Fresh tomato", "Chili", "Onion"],
    isSpicy: true,
    image: "/images/tuna-wrap.jpg",
    tags: ["Spicy", "Fish", "Tuna"],
  },
  {
    id: "wrap-beef",
    name: "Beef Wrap",
    category: "shawarma-wrap",
    price: 630,
    description: "Grilled beef, fresh tomato, chili, onion",
    ingredients: ["Grilled beef", "Fresh tomato", "Chili", "Onion"],
    isSpicy: true,
    image: "/images/beef-wrap.jpg",
    tags: ["Spicy", "Beef"],
  },
  {
    id: "wrap-vegetable",
    name: "Vegetable Wrap",
    category: "shawarma-wrap",
    price: 460,
    description: "Mixed well-cooked vegetables",
    ingredients: ["Mixed well-cooked seasonal vegetables"],
    isVegetarian: true,
    image: "/images/vegetable-wrap.jpg",
    tags: ["Vegetarian"],
  },

  // ==========================================
  // PASTA & RICE
  // ==========================================
  {
    id: "pasta-vegetable",
    name: "Pasta with Vegetable",
    category: "pasta-rice",
    price: 450,
    description: "Mixed well-cooked vegetables, green pepper",
    ingredients: ["Mixed well-cooked vegetables", "Green pepper"],
    isVegetarian: true,
    image: "/images/pasta-veg.jpg",
    tags: ["Vegetarian"],
  },
  {
    id: "pasta-tomato-sauce",
    name: "Pasta with Tomato Sauce",
    category: "pasta-rice",
    price: 420,
    description: "Tomato sauce, green pepper, onion",
    ingredients: ["Tomato sauce", "Green pepper", "Onion"],
    isVegetarian: true,
    image: "/images/pasta-tomato.jpg",
    tags: ["Vegetarian"],
  },
  {
    id: "pasta-tuna",
    name: "Pasta with Tuna",
    category: "pasta-rice",
    price: 550,
    description: "Tuna, green pepper, onion, tomato sauce",
    ingredients: ["Tuna", "Green pepper", "Onion", "Tomato sauce"],
    image: "/images/pasta-tuna.jpg",
    tags: ["Fish", "Tuna"],
  },
  {
    id: "pasta-meat-sauce",
    name: "Pasta with Meat Sauce",
    category: "pasta-rice",
    price: 580,
    description: "Meat, green pepper, onion, Bolognese sauce",
    ingredients: ["Minced beef", "Green pepper", "Onion", "Bolognese sauce"],
    image: "/images/pasta-meat.jpg",
    tags: ["Beef"],
  },
  {
    id: "rice-vegetable",
    name: "Rice with Vegetable",
    category: "pasta-rice",
    price: 420,
    description: "Mixed well-cooked vegetables, green pepper",
    ingredients: ["Mixed well-cooked vegetables", "Green pepper"],
    isVegetarian: true,
    image: "/images/rice-veg.jpg",
    tags: ["Vegetarian"],
  },
  {
    id: "rice-tuna",
    name: "Rice with Tuna",
    category: "pasta-rice",
    price: 550,
    description: "Tuna, green pepper, onion, tomato sauce",
    ingredients: ["Tuna", "Green pepper", "Onion", "Tomato sauce"],
    image: "/images/rice-tuna.jpg",
    tags: ["Fish", "Tuna"],
  },
  {
    id: "rice-meat-sauce",
    name: "Rice with Meat Sauce",
    category: "pasta-rice",
    price: 580,
    description: "Meat, green pepper, onion, Bolognese sauce",
    ingredients: ["Minced beef", "Green pepper", "Onion", "Bolognese sauce"],
    image: "/images/rice-meat.jpg",
    tags: ["Beef"],
  },
  {
    id: "rice-chicken",
    name: "Chicken with Rice",
    category: "pasta-rice",
    price: 685,
    description: "Chicken, fresh tomato, onion, chili",
    ingredients: ["Chicken", "Fresh tomato", "Onion", "Chili"],
    isSpicy: true,
    image: "/images/chicken-rice.jpg",
    tags: ["Spicy", "Chicken"],
  },

  // ==========================================
  // PIZZA
  // ==========================================
  {
    id: "pizza-special",
    name: "Special Pizza",
    category: "pizza",
    price: 895,
    description: "Tomato sauce, mozzarella cheese, minced beef, chicken, boiled egg, oregano",
    ingredients: [
      "Tomato sauce",
      "Mozzarella cheese",
      "Minced beef",
      "Chicken",
      "Boiled egg",
      "Oregano",
    ],
    isPopular: true,
    image: "/images/special-pizza.jpg",
    tags: ["Popular", "Beef", "Chicken"],
  },
  {
    id: "pizza-chicken",
    name: "Chicken Pizza",
    category: "pizza",
    price: 840,
    description: "Chicken topping, mozzarella cheese, beef slice",
    ingredients: ["Chicken topping", "Mozzarella cheese", "Beef slice"],
    image: "/images/chicken-pizza.jpg",
    tags: ["Chicken", "Beef"],
  },
  {
    id: "pizza-bbq-chicken",
    name: "BBQ Chicken Pizza",
    category: "pizza",
    price: 799,
    description: "BBQ sauce, mozzarella cheese, chicken topping, beef slice",
    ingredients: ["BBQ sauce", "Mozzarella cheese", "Chicken topping", "Beef slice"],
    image: "/images/bbq-chicken-pizza.jpg",
    tags: ["Chicken", "Beef"],
  },
  {
    id: "pizza-meatlover",
    name: "Meatlover Pizza",
    category: "pizza",
    price: 685,
    description: "Tomato sauce, beef, oregano, mozzarella cheese",
    ingredients: ["Tomato sauce", "Seasoned beef", "Oregano", "Mozzarella cheese"],
    image: "/images/meat-pizza.jpg",
    tags: ["Beef"],
  },
  {
    id: "pizza-tuna",
    name: "Tuna Pizza",
    category: "pizza",
    price: 750,
    description: "Tomato sauce, tuna, onion, oregano, mozzarella cheese",
    ingredients: ["Tomato sauce", "Tuna", "Onion", "Oregano", "Mozzarella cheese"],
    image: "/images/tuna-pizza.jpg",
    tags: ["Fish", "Tuna"],
  },
  {
    id: "pizza-fasting-hot-veg",
    name: "Fasting Hot Vegetable Pizza",
    category: "pizza",
    price: 630,
    description: "Fasting sauce, mushroom, mixed vegetables, onion, oregano",
    ingredients: ["Fasting sauce", "Mushroom", "Mixed vegetables", "Onion", "Oregano"],
    isVegetarian: true,
    isFasting: true,
    isSpicy: true,
    image: "/images/fasting-pizza.jpg",
    tags: ["Vegetarian", "Fasting", "Spicy"],
  },
  {
    id: "pizza-margherita",
    name: "Margherita Pizza",
    category: "pizza",
    price: 760,
    description: "Fiery sauce, mushroom, onion, oregano, cheese",
    ingredients: ["Fiery sauce", "Mushroom", "Onion", "Oregano", "Cheese"],
    isVegetarian: true,
    isSpicy: true,
    image: "/images/margherita-pizza.jpg",
    tags: ["Vegetarian", "Spicy"],
  },

  // ==========================================
  // FISH
  // ==========================================
  {
    id: "fish-grilled-nile-perch",
    name: "Grilled Nile Perch",
    amharicName: "ግሪልድ ናይል ፐርች",
    category: "fish",
    price: 1150,
    description: "Nile perch, flour coating, assorted vegetables, seasonal side rice or fries",
    ingredients: ["Nile perch", "Flour coating", "Assorted vegetables"],
    side: "Seasonal side rice or fries",
    image: "/images/grilled-fish.jpg",
    tags: ["Fish"],
  },
  {
    id: "fish-goulash",
    name: "Fish Goulash",
    amharicName: "አሳ ጉላሽ",
    category: "fish",
    price: 850,
    description: "Fried fish, vegetable oil, egg-coated flour, side rice or vegetables",
    ingredients: ["Fried fish", "Vegetable oil", "Egg-coated flour"],
    side: "Side rice or vegetables",
    image: "/images/fish-goulash.jpg",
    tags: ["Fish"],
  },
  {
    id: "fish-cutlet",
    name: "Fish Cutlet",
    amharicName: "አሳ ኩትሌት",
    category: "fish",
    price: 895,
    description: "Tilapia fish, vegetable oil, breadcrumbs, flour, side rice or vegetables",
    ingredients: ["Tilapia fish", "Vegetable oil", "Breadcrumbs", "Flour"],
    side: "Side rice or vegetables",
    image: "/images/fish-cutlet.jpg",
    tags: ["Fish"],
  },

  // ==========================================
  // SALAD
  // ==========================================
  {
    id: "salad-mixed",
    name: "Mixed Salad",
    amharicName: "ሚክስድ ሳላድ",
    category: "salad",
    price: 460,
    description: "Fresh crisp garden vegetables, ripe tomatoes, cucumbers, tossed in house dressing.",
    isVegetarian: true,
    isFasting: true,
    image: "/images/mixed-salad.jpg",
    tags: ["Vegetarian", "Fasting"],
  },
  {
    id: "salad-fish",
    name: "Fish Salad",
    amharicName: "ፊሽ ሳላድ",
    category: "salad",
    price: 750,
    description: "Flaked tender fish seasoned with aromatic herbs over crisp seasonal salad greens.",
    image: "/images/fish-salad.jpg",
    tags: ["Fish"],
  },
  {
    id: "salad-chicken",
    name: "Chicken Salad",
    amharicName: "ቺክን ሳላድ",
    category: "salad",
    price: 750,
    description: "Sliced grilled seasoned chicken breast layered over fresh mixed greens and herbs.",
    image: "/images/chicken-salad.jpg",
    tags: ["Chicken"],
  },
  {
    id: "salad-tuna",
    name: "Tuna Salad",
    amharicName: "ቱና ሳላድ",
    category: "salad",
    price: 670,
    description: "Flaked ocean tuna with diced bell peppers, sweet red onions, and lemon vinaigrette.",
    image: "/images/tuna-salad.jpg",
    tags: ["Fish", "Tuna"],
  },
  {
    id: "salad-fruit-punch",
    name: "Fruit Punch Salad",
    amharicName: "ፍሩት ሳላድ",
    category: "salad",
    price: 550,
    description: "Vibrant tropical blend of freshly sliced seasonal Ethiopian fruits.",
    isVegetarian: true,
    isFasting: true,
    image: "/images/fruit-salad.jpg",
    tags: ["Vegetarian", "Fasting"],
  },

  // ==========================================
  // SIGNATURE DRINKS
  // ==========================================
  {
    id: "drink-hibiscus",
    name: "Hibiscus",
    amharicName: "ሃይቢስከስ",
    category: "signature-drinks",
    price: 440,
    description: "Chilled ruby-red steeped hibiscus flower tea with subtle tart and sweet botanical notes.",
    image: "/images/hibiscus.jpg",
    tags: ["Vegetarian", "Fasting"],
  },
  {
    id: "drink-espresso-tonic",
    name: "Espresso Tonic",
    amharicName: "ኤስፕሬሶ ቶኒክ",
    category: "signature-drinks",
    price: 350,
    description: "Effervescent tonic water poured over fresh ice, crowned with rich single-origin Ethiopian espresso.",
    image: "/images/espresso-tonic.jpg",
    tags: ["Vegetarian", "Fasting"],
  },
  {
    id: "drink-cold-brew",
    name: "Cold Brew",
    amharicName: "ኮልድ ብሩ",
    category: "signature-drinks",
    price: 440,
    description: "Silky 16-hour slow cold-extracted Ethiopian highland coffee, low in acidity and deeply aromatic.",
    image: "/images/cold-brew.jpg",
    tags: ["Vegetarian", "Fasting"],
  },
  {
    id: "drink-special-iced-tea",
    name: "Special Iced Tea",
    amharicName: "ስፔሻል አይስድ ቲ",
    category: "signature-drinks",
    price: 280,
    description: "Signature cold brewed black tea with fresh garden mint leaves and zesty lemon twists.",
    image: "/images/iced-tea.jpg",
    tags: ["Vegetarian", "Fasting"],
  },
];

export const RESTAURANT_INFO = {
  name: "Afla Restaurant & Lounge",
  tagline: "Modern Culinary Artistry • Addis Ababa",
  phone: "+251 91 123 4567",
  secondaryPhone: "+251 11 654 3210",
  address: "Bole Medhanialem, Next to Edna Mall, Addis Ababa, Ethiopia",
  googleMapsUrl: "https://maps.google.com/?q=Bole+Medhanialem+Addis+Ababa",
  hours: {
    weekdays: "8:00 AM – 11:30 PM",
    weekends: "8:00 AM – 12:00 Midnight",
  },
  socials: {
    instagram: "https://instagram.com/aflarestaurant",
    telegram: "https://t.me/aflarestaurant",
    tiktok: "https://tiktok.com/@aflarestaurant",
    facebook: "https://facebook.com/aflarestaurant",
  },
};
