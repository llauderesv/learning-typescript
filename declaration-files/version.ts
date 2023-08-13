/**
 * Global Values
 * Because TypeScript files that have no import or export statements are treated as scripts 
 * rather than modules, constructs—including types—declared in them are avail‐ able globally. 
 * Definition files without any imports or exports can take advantage of that behavior to declare types 
 * globally. Global definition files are particularly useful for declaring global types or variables 
 * available across all files in an application. 
 * Here, a globals.d.ts file declares that a const version: string exists globally. 
 * A version.ts file is then able to refer to a global version variable despite not importing from globals.d.ts:
 */
export function logVersion() {
  console.log(`Version: ${version}`); // Ok
}
