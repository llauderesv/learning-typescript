// Tuple is an array of fixed sized
let yearAndWarrior: [number, string];

yearAndWarrior = [530, 'Tomyris'];

const pairLoose = [false, 123];

const pairTupleLoose: [boolean, number] = pairLoose;
// Error: Type '(number | boolean)[]' is not assignable to type '[boolean, number]'.
// Target requires 2 element(s) but source may have fewer.

// Tuple Assignability
const tupleThree: [boolean, number, string] = [false, 1583, 'Nzinga'];

const tupleTwoExact: [boolean, number] = [tupleThree[0], tupleThree[1]];

// Tuple as rest parameter

function logPair(name: string, value: number) {
  console.log(`${name} has ${value}`);
}

const pairArray = ['Amage', 1];

logPair(...pairArray);
// Error: A spread argument must either have a tuple type or be passed to a rest parameter

const pairTupleInCorrect: [number, string] = [1, 'Amage'];

logPair(...pairTupleInCorrect);
// Error: Argument of type 'number' is not assignable to parameter of type 'string'

const pairTupleCorrect: [string, number] = ['Amage', 1];

logPair(...pairTupleCorrect);

// Tuple Inference

function firstCharAndSize(input: string) {
  return [input[0], input.length];
}

// First char type: (string | number)[]
// Size type: (string | number)[]
// const [firstChar, size] = firstCharAndSize('Gudlit');

// You can make the tuple explicit type
function firstCharAndSizeExplicit(input: string): [string, number] {
  return [input[0], input.length];
}

// First char type: string
// Size type: number
let [firstChar, size] = firstCharAndSizeExplicit('Gudlit');
firstChar = 'Hello';

// Type (string | number)[]
const unionArray = [1157, 'Tomoe'];

// Read only tuple
// Type: readonly [1157, Tomoe']
const readOnlyTuple = [1157, 'Tomoe'] as const;

// In practice, read-only tuples are convenient for function returns.
// Return values from functions that return a tuple are often destructured immediately anyway.
// So the tuple being read-only does not get in hte way of using the function.

function firstCharAndSizeConst(input: string) {
  return [input[0], input.length] as const;
}

const [firstCharConst, sizeConst] = firstCharAndSizeConst('Gudlit');

export default logPair;
