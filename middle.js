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

//For arrays with one or two elements, there is no middle. Return an empty array.
//For arrays with odd number of elements, an array containing a single middle element should be returned.
//For arrays with an even number of elements, an array containing the two elements in the middle should be returned


const middle = (arr) => {
  let middleIndex;

  if (arr.length < 3) {
    return [];
  }
  
  if (arr.length % 2 === 1) {
    middleIndex = Math.floor(arr.length / 2);
    return arr.splice(middleIndex, 1);
    //return [arr[middleIndex]];
  }
  
  if (arr.length % 2 === 0) {
    middleIndex = Math.floor(arr.length / 2) - 1;
    return arr.splice(middleIndex, 2);
    //return [arr[middleIndex], arr[middleIndex + 1]];
  }
};

// if arr < 2
console.log(middle([1])); // => []
console.log(middle([1, 2])); // => []

//odd
console.log(middle([1, 2, 3])); // => [2]
console.log(middle([1, 2, 3, 4, 5])); // => [3]

//even
console.log(middle([1, 2, 3, 4])); // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13])); // => [3, 4]

//Write test assertions for the various scenarios with middle. We can and should use the assertArraysEqual function for testing our new function. That's why we brought it in here to begin with.

assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]), [7]);
assertArraysEqual(middle([1, 2, 5, 11, 22, 43, 53, 55, 85, 97]), [22, 43]);
