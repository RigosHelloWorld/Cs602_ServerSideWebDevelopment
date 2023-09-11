import { FOOD_CATEGORIES } from './enums/food-categories';

export interface Item {
  name: string;
  price: number;
  friendlyName: string;
  type: FOOD_CATEGORIES;
}

const FoodItems: Item[] = [
  {
    name: 'wheat',
    price: 0.5,
    friendlyName: 'Wheat',
    type: FOOD_CATEGORIES.BREAD,
  },
  {
    name: 'white',
    price: 0.0,
    friendlyName: 'White',
    type: FOOD_CATEGORIES.BREAD,
  },
  {
    name: 'pita',
    price: 1.0,
    friendlyName: 'Pita',
    type: FOOD_CATEGORIES.BREAD,
  },
  {
    name: 'roastbeef',
    price: 2.5,
    friendlyName: 'Roast Beef',
    type: FOOD_CATEGORIES.MEAT,
  },
  {
    name: 'ham',
    price: 1.75,
    friendlyName: 'Ham',
    type: FOOD_CATEGORIES.MEAT,
  },
  {
    name: 'turkey',
    price: 2.0,
    friendlyName: 'Turkey',
    type: FOOD_CATEGORIES.MEAT,
  },
  {
    name: 'tuna',
    price: 3.0,
    friendlyName: 'Tuna',
    type: FOOD_CATEGORIES.MEAT,
  },
  {
    name: 'swiss',
    price: 1.25,
    friendlyName: 'Swiss',
    type: FOOD_CATEGORIES.CHEESE,
  },
  {
    name: 'american',
    price: 0.5,
    friendlyName: 'American',
    type: FOOD_CATEGORIES.CHEESE,
  },
  {
    name: 'chedder',
    price: 2.25,
    friendlyName: 'Chedder',
    type: FOOD_CATEGORIES.CHEESE,
  },
  {
    name: 'tomato',
    price: 0.25,
    friendlyName: 'Tomato',
    type: FOOD_CATEGORIES.ADDITIONAL_TOPPINGS,
  },
  {
    name: 'pickles',
    price: 0.25,
    friendlyName: 'Pickles',
    type: FOOD_CATEGORIES.ADDITIONAL_TOPPINGS,
  },
  {
    name: 'onions',
    price: 0.25,
    friendlyName: 'Onions',
    type: FOOD_CATEGORIES.ADDITIONAL_TOPPINGS,
  },
  {
    name: 'mushrooms',
    price: 0.25,
    friendlyName: 'Mushrooms',
    type: FOOD_CATEGORIES.ADDITIONAL_TOPPINGS,
  },
  {
    name: 'hotchilis',
    price: 0.25,
    friendlyName: "Hot Chili's",
    type: FOOD_CATEGORIES.ADDITIONAL_TOPPINGS,
  },
  {
    name: 'greenpeppers',
    price: 0.25,
    friendlyName: 'Green Peppers',
    type: FOOD_CATEGORIES.ADDITIONAL_TOPPINGS,
  },
  {
    name: 'olives',
    price: 0.25,
    friendlyName: 'Olives',
    type: FOOD_CATEGORIES.ADDITIONAL_TOPPINGS,
  },
];

function createFoodMap(foodItems: Item[]): Map<string, Item> {
  const foodMap = new Map<string, Item>();
  foodItems.forEach((item) => {
    foodMap.set(item.name, item);
  });
  return foodMap;
}

export const ITEMS_FOOD_MAP = createFoodMap(FoodItems);
