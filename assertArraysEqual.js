const eqArrays = require('./eqArrays');

const assertArraysEqual = (testArray, solution) => {
  if (eqArrays(testArray, solution) === true) {
    console.log(`✅✅✅ Array Assertion Passed: ${testArray} === ${solution}`);
  } else {
    console.log(`🛑🛑🛑 Array Assertion Failed: ${testArray} !== ${solution}`);
  }
};

module.exports = assertArraysEqual;