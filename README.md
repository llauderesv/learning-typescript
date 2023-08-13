# Learning TypeScript

Playing around on TypeScript language.

TypeScript is highly configurable and made to adapt to all common JavaScript usage patterns. It can work
for projects ranging from legacy browser code to the most modern server environments.

## tsc Options

### File Inclusions

By default, tsc will rin on all nonhidden. ts files (those whose names do not start with a.) in the current directory any child directories, ignoring hidden directories and named `node_modules`. TypeScript configurations can change that list of files to run on.

### include

The most common way to include files is with a top-level "include" property in a tsconfig.json. It allows an array of strings that describes what directories and/or files to include in TypeScript compilation.
For example, this configuration file recursively includes all TypeScript source files in a src/ directory relative to the tsconfig.json:

```json
{
  "include": ["src"]
}
```

### lib

Think of the lib compiler option as indicating what built-in language APIs are available, whereas the target compiler option indicates what syntax features exist.

### module

TypeScript provides a module compiler option to direct which module system tran‐ spiled code will use. When writing source code with ECMAScript modules, Type‐ Script may transpile the export and import statements to a different module system based on the module value.
For example, directing that a project written in ECMAScript be output as CommonJS modules in either the command line:

```sh
tsc --module commonjs
```

or in a TSConfig:

```json
{
  "compilerOptions": {
    "module": "commonjs"
  }
}
```

The previous code snippet would roughly be output as:

```js
const my_example_lib = require('my-example-lib');
exports.logValue = () => console.log(my_example_lib.value);
```

## Configuration Extensions

As you write more and more TypeScript projects, you may find yourself writing the same project settings repeatedly. Although TypeScript doesn't allow configuration files to be written in JavaScript and use `import` or `required`, it does offer a mechanism for a TSConfig file or opt into "extending", or copying configuration values, from another configuration file.

### extends

A TSConfig may extend from another TSConfig with the extends configuration option. extends takes in a path to another TSConfig file and indicates that all settings from that file should be copied over. It behaves similarly to the extends keyword on classes: any option declared on the derived, or child, configuration will override any option of the same name on the base, or parent, configuration.

For example, many repositories that have multiple TSConfigs, such as monorepos containing multiple packages/\* directories, by convention create a tsconfig.base.json file for tsconfig.json files to extend from:

// tsconfig.base.json

```json
{
  "compilerOptions": {
    "strict": true
  }
}
```

// packages/core/tsconfig.json

```json
{
  "extends": "../../tsconfig.base.json",
  "includes": ["src"]
}
```

## Configuration Bases

Instead of creating your own configuration from scratch or the `--init` suggestions, you can start with a premade "base" TSConfig file tailored to a particular runtime environment. These premade configuration bases are available on the npm package registry under `@tsconfig/`, such as `@tsconfig/recommended` or `@tsconfig/node16`

For example, to install the recommended TSConfig base for deno:

```sh
npm install --save-dev @tsconfig/deno

# or

yarn add --dev @tsconfig/deno
```

Once a configuration base package is installed, it can be referenced like any other npm package configuration extension:

```json
{
  "extends": "@tsconfig/deno/tsconfig.json"
}
```

### Build Mode

It lets tsc rebuild only the projects that have been changed since the last build, based on when their contents and their file outputs were last generated.

More precisely, TypeScript's build mode will do the following when give a TSConfig.
