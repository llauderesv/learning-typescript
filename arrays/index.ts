const soldier = ['Harriet Tubman', 'Joan of Arc', 'Khutulun'];

const soldierAges = [90, 19, 45];

const conjoined = [...soldier, ...soldierAges];

type StringAndNumberOnly = (string | number)[];

let stringAndNumberOnly: StringAndNumberOnly = ['Hello World', 123]; // Ok

let stringAndNumberOnlyAndDates: StringAndNumberOnly = ['Hello World', 123, new Date(12345)];
// Error, Date is not assignable to (string | number)[]

// Spread Parameters
function logWarrior(greeting: string, ...names: string[]) {
  for (const name of names) {
    console.log(`${greeting}, ${name}!`);
  }
}

const warriors = ['Cathay Williams', 'Lozen', 'Nzinga'];

logWarrior('Hello', ...warriors);

const years = [1996, 2001, 2003];

logWarrior('Hello Again', ...years); 
// Error, Argument of type 'number' is not assignable to parameter of type 'string'.
