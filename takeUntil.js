const takeUntil = (array, callback) => {
  let result = [];

  for (let item of array) {
    if (callback(item)) {
      return result;
    } else {
      result.push(item);
    }
  }

  return result;
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

// [ 1, 2, 5, 7, 2 ]
// --
// [ 'I\'ve', 'been', 'to', 'Hollywood' ]

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

assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ]);
assertArraysEqual(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ]);

// FIRST ATTEMPT
// const takeUntil = (array, callback) => {
//   let sliceIndex;

//   for (let i = 0; i < array.length; i++) {
//     if (!callback(array[i])) {
//       sliceIndex = i = 1;
//     } else {
//       break;
//     }
//   }

//   return array.slice(0, sliceIndex);
// }
