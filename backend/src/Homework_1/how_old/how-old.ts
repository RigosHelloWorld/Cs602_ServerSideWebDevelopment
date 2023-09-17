import input from '@inquirer/input';

async function main() {
  const age = 16;
  console.log(`Are you older then ${age}? Let's find out`);

  let isValid = false;
  do {
    isValid = true;

    const month = parseInt(
      await input({
        message: 'Enter your month of birth (1-12):',
      }),
    );

    if (isNaN(month) || !isValidRange(1, 12, month)) {
      isValid = false;
      continue;
    }

    const day = parseInt(
      await input({
        message: 'Enter your day of birth (1-31):',
      }),
    );

    if (isNaN(day) || !isValidRange(1, 31, day)) {
      isValid = false;
      continue;
    }

    const year = parseInt(
      await input({
        message: 'Enter your year of birth (1900-2023):',
      }),
    );

    if (isNaN(year) || !isValidRange(1900, 2023, year)) {
      isValid = false;
      continue;
    }

    const currentAge: number = calculateAge(month, day, year);

    if (currentAge > age) {
      console.log(`You are ${currentAge} and are older than ${age}`);
    } else {
      console.log(`You are ${currentAge} and are younger than ${age}`);
    }
  } while (!isValid);
}
main();

function isValidRange(min: number, max: number, value: number): boolean {
  if (value < min || value > max) {
    return false;
  }
  return true;
}

function calculateAge(month: number, day: number, year: number): number {
  const today: Date = new Date();
  const birthdate: Date = new Date(year, month - 1, day);
  const age: number = today.getFullYear() - birthdate.getFullYear();

  // Adjust age if birthdate has not occurred this year yet
  if (
    today.getMonth() < birthdate.getMonth() ||
    (today.getMonth() === birthdate.getMonth() && today.getDate() < birthdate.getDate())
  ) {
    return age - 1;
  }

  return age;
}
