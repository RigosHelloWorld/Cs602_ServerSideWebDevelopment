import { FoodCategories } from './enums/food-categories';

interface Item {
  name: string;
  price: number;
  friendlyName: string;
  type: FoodCategories;
}

export const FoodItems: Item[] = [
  {
    name: 'wheat',
    price: 0.5,
    friendlyName: 'Wheat',
    type: FoodCategories.BREAD,
  },
  {
    name: 'white',
    price: 0.0,
    friendlyName: 'White',
    type: FoodCategories.BREAD,
  },
  {
    name: 'pita',
    price: 1.0,
    friendlyName: 'Pita',
    type: FoodCategories.BREAD,
  },
  {
    name: 'roastbeef',
    price: 2.5,
    friendlyName: 'Roast Beef',
    type: FoodCategories.MEAT,
  },
  {
    name: 'ham',
    price: 1.75,
    friendlyName: 'Ham',
    type: FoodCategories.MEAT,
  },
  {
    name: 'turkey',
    price: 2.0,
    friendlyName: 'Turkey',
    type: FoodCategories.MEAT,
  },
  {
    name: 'tuna',
    price: 3.0,
    friendlyName: 'Tuna',
    type: FoodCategories.MEAT,
  },
  {
    name: 'swiss',
    price: 1.25,
    friendlyName: 'Swiss',
    type: FoodCategories.CHEESE,
  },
  {
    name: 'american',
    price: 0.5,
    friendlyName: 'American',
    type: FoodCategories.CHEESE,
  },
  {
    name: 'chedder',
    price: 2.25,
    friendlyName: 'Chedder',
    type: FoodCategories.CHEESE,
  },
  {
    name: 'tomato',
    price: 0.25,
    friendlyName: 'Tomato',
    type: FoodCategories.ADDITIONAL_TOPPINGS,
  },
  {
    name: 'pickles',
    price: 0.25,
    friendlyName: 'Pickles',
    type: FoodCategories.ADDITIONAL_TOPPINGS,
  },
  {
    name: 'onions',
    price: 0.25,
    friendlyName: 'Onions',
    type: FoodCategories.ADDITIONAL_TOPPINGS,
  },
  {
    name: 'mushrooms',
    price: 0.25,
    friendlyName: 'Mushrooms',
    type: FoodCategories.ADDITIONAL_TOPPINGS,
  },
  {
    name: 'hotchilis',
    price: 0.25,
    friendlyName: "Hot Chili's",
    type: FoodCategories.ADDITIONAL_TOPPINGS,
  },
  {
    name: 'greenpeppers',
    price: 0.25,
    friendlyName: 'Green Peppers',
    type: FoodCategories.ADDITIONAL_TOPPINGS,
  },
  {
    name: 'olives',
    price: 0.25,
    friendlyName: 'Olives',
    type: FoodCategories.ADDITIONAL_TOPPINGS,
  },
];
