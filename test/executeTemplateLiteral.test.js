const executeTemplateLiteral = require("../src/executeTemplateLiteral.js");

const a = "test ${a}";

console.log(executeTemplateLiteral(a, [1], ["a"]));
// => test 1

const b = "test ${a}";

console.log(executeTemplateLiteral(b, [2], ["a"], true));
// => test 2
