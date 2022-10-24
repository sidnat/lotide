//Instruction
//Implement without which will return a subset of a given array, removing unwanted elements.
//This function should take in a source array and a itemsToRemove array.
//It should return a new array with only those elements from source that are not present in the itemsToRemove array.
//if item to remove is === to each index of source, remove that value

const without = (source, itemsToRemove) => {
  let newArray = [];

  const find = (array, element) => {
    for (let elemOfArray of array) {
      if (elemOfArray === element) {
        return true;
      }
    }
    return false;
  };

  for (let i = 0; i < source.length; i++) {
    if (!find(itemsToRemove, source[i])) {
      newArray.push(source[i]);
    }
  }

  // Test case showing original array is not modified
  // console.log(source);

  return newArray;
};

module.exports = without;