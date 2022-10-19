//Instruction
//Implement without which will return a subset of a given array, removing unwanted elements.
//This function should take in a source array and a itemsToRemove array.
//It should return a new array with only those elements from source that are not present in the itemsToRemove array.
//if item to remove is === to each index of source, remove that value

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

const assertArraysEqual = (testArray, solution) => {
  if (eqArrays(testArray, solution) === true) {
    console.log(`✅✅✅ Array Assertion Passed: ${testArray} === ${solution}`);
  } else {
    console.log(`🛑🛑🛑 Array Assertion Failed: ${testArray} !== ${solution}`);
  }
};

const find = (array, element) => {
  for (let elemOfArray of array) {
    if (elemOfArray === element) {
      return true;
    }
  }
  return false;
};

const without = (source, itemsToRemove) => {
  let newArray = [];

  for (let i = 0; i < source.length; i++) {
    if (!find(itemsToRemove, source[i])) {
      newArray.push(source[i]);
    }
  }

  // Test case showing original array is not modified
  // console.log(source);

  return newArray;
};

console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]

assertArraysEqual(without(['1', 2, 4, '9'], [2, '9']), ['1', 4]);

assertArraysEqual(without(['1', 2, 4, '3', '9'], ['3', '9']), ['1', 2, 4]);

assertArraysEqual(without(['1', '36', 2, 46, '9', 'hello', 'goodbye'], [2, 46, 'hello', '9']), ['1', '36', 'goodbye']);

assertArraysEqual(without([44, '1', 2, true, false, 4, '9'], [true, 2, 44]), ['1', false, 4, '9']);