const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// returns every value after the head
const tail = (inputArr) => {
  return inputArr.slice(1);
};

const words = ["Yo Yo", "Lighthouse", "Labs"];
const newArr = tail(words);

// Test code
assertEqual(newArr.length, 2);
assertEqual(newArr.length, 4);
assertEqual(newArr[0], "Lighthouse");
assertEqual(newArr[1], "Lighthouse");