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

module.exports = middle;