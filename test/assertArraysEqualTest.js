const assertArraysEqual = require("../assertArraysEqual");

assertArraysEqual([1, 2, 3], [1, 2, 3]); // => true
assertArraysEqual([1, 2, 3], [3, 2, 1]); // => false
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // => true
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); // => false

// ✅✅✅ Array Assertion Passed: 1,2,3 === 1,2,3
// 🛑🛑🛑 Array Assertion Failed: 1,2,3 !== 3,2,1
// ✅✅✅ Array Assertion Passed: 1,2,3 === 1,2,3
// 🛑🛑🛑 Array Assertion Failed: 1,2,3 !== 1,2,3