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

const letterPositions = (sentence) => {
  const results = {};
  
  if (sentence) {
    for (let i = 0; i < sentence.length; i++) {
      if (!results[sentence[i]]) {
        results[sentence[i]] = [];
      }
    
      results[sentence[i]].push(i);
    }
  }

  return results;
};

console.log(letterPositions("hello"));

console.log(letterPositions("lighthouse in the house"));
// {
//   l: [0],
//   i: [1, 11],
//   g: [2],
//   h: [3, 5, 15, 18],
//   t: [4, 14],
//   o: [6, 19],
//   u: [7, 20],
//   s: [8, 21],
//   e: [9, 16, 22],
//   n: [12]
// }

assertArraysEqual(letterPositions("lighthouse in the house").h, [3, 5, 15, 18]);