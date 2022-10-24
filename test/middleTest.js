const assertArraysEqual = require("../assertArraysEqual");
const middle = require("../middle");

// if arr < 2
console.log(middle([1])); // => []
console.log(middle([1, 2])); // => []

//odd
console.log(middle([1, 2, 3])); // => [2]
console.log(middle([1, 2, 3, 4, 5])); // => [3]

//even
console.log(middle([1, 2, 3, 4])); // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13])); // => [3, 4]

assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]), [7]);
assertArraysEqual(middle([1, 2, 5, 11, 22, 43, 53, 55, 85, 97]), [22, 43]);

// []
// []
// [ 2 ]
// [ 3 ]
// [ 2, 3 ]
// [ 7 ]
// ✅✅✅ Array Assertion Passed: 7 === 7
// ✅✅✅ Array Assertion Passed: 22,43 === 22,43