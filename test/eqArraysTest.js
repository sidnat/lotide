const assertEqual = require("../assertEqual");
const eqArrays = require("../eqArrays");

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => true
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => false
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => true
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // => false
assertEqual(eqArrays([4, 5, 6], [4, 3, 2]), false); // => false
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS

// ✅✅✅ Assertion Passed: true === true
// ✅✅✅ Assertion Passed: false === false
// ✅✅✅ Assertion Passed: true === true
// ✅✅✅ Assertion Passed: false === false
// ✅✅✅ Assertion Passed: false === false
// ✅✅✅ Assertion Passed: true === true