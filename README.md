`yarn install`

Compile TypeScript into JavaScript ES5 that node can run:
`yarn tsc`

Run in node:
`node ./lib/index.js`

We will get a runtime error:
`TypeError: jsModules_1.MyModuleObject.method is not a function`

Why doesn't Typescript show a compile time error?