// Wildcard Module Declarations

// A common use of module declarations is to tell web applications that a particular
// non-JavaScript/TypeScript file extension is available to import into code.
// Module declarations may contain a single * wildcard to indicate that any module matching
// that pattern looks the same.
// For example, many web projects such as those preconfigured in popular React start‐ ers such as create-react-app and create-next-app support CSS modules to import styles from CSS files as objects that can be used at runtime. They would define modules with a pattern such as "*.module.css" that default exports an object of type { [i: string]: string }:
// styles.d.ts
declare module '*.module.css' {
  const styles: { [i: string]: string; helloWorld: string };
  export default styles;
}
