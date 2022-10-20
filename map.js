// Our map function will take in two arguments:

// An array to map
// A callback function
// The map function will return a new array based on the results of the callback function.

const map = (arrayToMap, callBackFn) => {
  let newArray = [];

  for (let item of arrayToMap) {
    newArray.push(callBackFn(item));
  }

  return newArray;
};

const words = ["ground", "control", "to", "major", "tom"];
const words2 = ["bacon", "flower", "laptop", "orange"];
const words3 = ["blue", "wireless", "driveway", "lock", "watch"];

const results1 = map(words, word => word[0]);
const results2 = map(words2, word => word[0]);
const results3 = map(words3, word => word[0]);

console.log(results1);
console.log(results2);
console.log(results3);

// [ 'g', 'c', 't', 'm', 't' ]
// [ 'b', 'f', 'l', 'o' ]
// [ 'b', 'w', 'd', 'l', 'w' ]

const assertArraysEqual = (testArray, solution) => {
  const eqArrays = (arr1, arr2) => {
    if (arr1.length === arr2.length) {
      for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
          return false;
        }
      }
      return true;
    } else {
      return false;
    }
  };
  
  if (eqArrays(testArray, solution) === true) {
    console.log(`✅✅✅ Array Assertion Passed: ${testArray} === ${solution}`);
  } else {
    console.log(`🛑🛑🛑 Array Assertion Failed: ${testArray} !== ${solution}`);
  }
};

assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 't' ]);
assertArraysEqual(results2, [ 'b', 'f', 'l', 'o' ]);
assertArraysEqual(results3, [ 'b', 'w', 'd', 'l', 'w' ]);