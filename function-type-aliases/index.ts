type StringToNumber = (input: string) => number;

let stringToNumber: StringToNumber;

stringToNumber = input => input.length; // Ok

stringToNumber = input => input.toUpperCase();

// Error: Type 'string' is not assignable to type 'number'

type NumberToString = (input: number) => string;

function useNumberToString(numberToString: NumberToString) {
  console.log(`The string is: ${numberToString(1234)}`);
}

useNumberToString(input => `${input}! Hooray`);

useNumberToString(input => input * 2); // Error: Type 'number' is not assignable to type 'string'


