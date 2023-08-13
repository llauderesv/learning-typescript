/**
 * Interfaces are in many ways similar to aliased object types but are generally preferred
 * for their more readable messages, speedier compiler performance, and better interoperability with
 * classes.
 *
 * Type Aliases vs Interfaces
 */

type Poet = {
  born: number;
  name: string;
};

interface PoetInterface {
  born: number;
  name: string;
}

/**
 * Interfaces advantages
 *
 * Interface can merge together to be augmented -- a feature particularly useful when working with
 * third-party code such as built-in globals or npm packages.
 *
 * Interfaces can be used to type check the structure of class declarations.
 *
 * Interfaces are generally speedier for the TypeScript type checker to work with
 *
 */

interface Book {
  author?: string;
  pages: number;
}

const ok: Book = {
  author: 'Ryan Holiday',
  pages: 1234,
};

const missing: Book = {
  author: 'Ryan Holiday',
};
// Property 'pages' is missing in type '{ author: string; }' but required in type 'Book'

// Read-Only properties
interface Page {
  readonly text: string;
}

interface ReadOnly<T> {}

// Read-only interface members are a handy way to make sure areas of code don't unexpected modify
// objects they're not meant to.
function read(page: Page) {
  // Ok: reading the text property doesn't attempt to modify it
  console.log(page.text);

  page.text += ';';
  // Error: Cannot assign text because it is a read only property.
}

// Functions and Methods

interface Method {
  method: () => string;
  method2(): string;
}

/**
 * The first example is a method syntax: it has an access to this keyword in javascript 
 * The second one is the property syntax: is equal to standalone function like method2: () => void
 */
