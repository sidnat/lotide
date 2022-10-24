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

module.exports = takeUntil;

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
