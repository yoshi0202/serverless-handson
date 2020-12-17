"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ExampleClass_1 = require("./ExampleClass");
const exampleClass = new ExampleClass_1.ExampleClass();
const msg = exampleClass.echo("hogehoeg");
exports.handler = async (event) => {
    console.log(event);
};
//# sourceMappingURL=test.js.map