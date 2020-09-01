const checkForDuplicates = require("../src/checkForDuplicates.js");

console.log(checkForDuplicates({ a: [1, 1, 1, 2] }));
// => { a: [ 1, 2 ]}
