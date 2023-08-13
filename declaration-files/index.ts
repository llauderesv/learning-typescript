import { Character } from './types';
import { value } from 'my-example-lib';

// Declaration Files
// A .d.ts declaration file generally works similarly to a .ts file, except with the notable
// constraint of not being allowed to include runtime code. .d.ts files contain only descriptions
// available runtime values, interfaces, modules and general types. They cannot contain any runtime
// code that could be compiled down to JavaScript.

export const character: Character = {
  catchphrase: 'Yee-haw!',
  name: 'Sandy Cheeks',
};

console.log(value);
