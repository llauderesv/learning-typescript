// Module Declarations
// One more important feature of declaration files is their ability to describe the shapes of modules.
// The declare keyword can be used before a string name of a module to inform the type system
// of the contents of that module. Here, the "my-example-lib" module is declared as being in
// existence in a modules.d.ts declaration script file, then used in an index.ts file:

declare module 'my-example-lib' {
  export const value: string;
}
