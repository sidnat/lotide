const eqObjects = (obj1, obj2) => {
  const arrayOfKeys = Object.keys(obj1);
  
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

  if (arrayOfKeys.length !== Object.keys(obj2).length) {
    return false;
  }
  for (let key of arrayOfKeys) {
    if (Array.isArray(obj1[key]) && Array.isArray(obj2[key])) {
      if (!eqArrays(obj1[key], obj2[key])) {
        return false;
      }
    } else if (obj1[key] !== obj2[key]) {
      return false;
    }
  }
  return true;
};

const assertObjectsEqual = (testObject, solution) => {
  const inspect = require('util').inspect;

  if (eqObjects(testObject, solution) === true) {
    console.log(`✅✅✅ Object Assertion Passed: ${inspect(testObject)} === ${inspect(solution)}`);
  } else {
    console.log(`🛑🛑🛑 Object Assertion Failed: ${inspect(testObject)} !== ${inspect(solution)}`);
  }
};

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };
const cd3 = { a: [1, 2, "hello"], b: [2]};
const cd4 = { a: [1, 2, "hello"], b: [2]};

assertObjectsEqual(cd, dc);
assertObjectsEqual(dc, cd2);
assertObjectsEqual(cd3, cd4);