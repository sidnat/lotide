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

module.exports = map;