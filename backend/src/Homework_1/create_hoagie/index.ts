import input from '@inquirer/input';

import { exit } from 'process';
import { FOOD_CATEGORIES } from './enums/food-categories';
import { ITEMS_FOOD_MAP, Item } from './food-items';

async function main() {
  let response = '';
  let total = 0;
  welcome();
  response = (await getYesOrNoInput()).toLocaleLowerCase();

  while (!isValidAnswer(response)) {
    console.log('Invalid response please enter yes/no\n');
    response = (await getYesOrNoInput()).toLocaleLowerCase();
  }
  if (response[0] === 'n') {
    console.log('Come back once you are ready to order.');
    exit(1);
  }

  console.log("We'll start with the bread.");
  total += await getItemPrice(FOOD_CATEGORIES.BREAD);

  console.log('Next well add the cheese.');
  total += await getItemPrice(FOOD_CATEGORIES.CHEESE);

  console.log('Next well add the meats.');
  total += await getItemPrice(FOOD_CATEGORIES.MEAT);

  console.log('Here are some additional toppings would you like some?');
  response = (await getYesOrNoInput()).toLocaleLowerCase();

  while (!isValidAnswer(response)) {
    console.log('Invalid response please enter yes/no\n');
    response = (await getYesOrNoInput()).toLocaleLowerCase();
  }

  console.log(`Here is the total:`);
  if (response[0] == 'n') {
    console.log(formatMoney(total));
  } else {
    total += await getItemPrice(FOOD_CATEGORIES.ADDITIONAL_TOPPINGS);
    console.log(formatMoney(total));
  }
}

main();

function welcome() {
  console.log("Welcome, let's create a Hoagie.");
}

function getYesOrNoInput(): Promise<string> {
  return input({
    message: '\nYes or No',
  });
}

function isValidAnswer(response: string): boolean {
  if (response[0] !== 'y' && response[0] !== 'n') {
    return false;
  }
  return true;
}

function printFoodItems(category: FOOD_CATEGORIES): void {
  const filteredFoodItems = Array.from(ITEMS_FOOD_MAP.values()).filter((item) => item.type === category);
  console.log('Please select from the following:');

  filteredFoodItems.forEach((item) => {
    console.log(`${item.friendlyName} ${formatMoney(item.price)}`);
  });
}

function formatMoney(number: number): string {
  return number.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
}

function isValidChoice(choice: string): Item | undefined {
  return ITEMS_FOOD_MAP.get(choice);
}

async function getItemPrice(category: FOOD_CATEGORIES): Promise<number> {
  let response;
  let price = 0;
  printFoodItems(category);

  response = await input({
    message: 'Which would you like today',
  });

  const formatedResponse = response.replace(/\s+/g, '').trim().toLowerCase();

  while (!isValidChoice(formatedResponse)) {
    console.log();

    printFoodItems(category);

    response = await input({
      message: `Which would you like today`,
    });
  }

  const item = ITEMS_FOOD_MAP.get(response);

  if (item) {
    price += item.price;
  }
  return price;
}
