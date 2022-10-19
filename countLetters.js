const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

//The function should take in a sentence (as a string) and then return a count of each of the letters in that sentence.
//For example, countLetters('LHL') should return results indicating that L appears twice, and H once.

const countLetters = (sentence) => {
  const results = {};

  for (let item of sentence) {
    if (sentence[item]) {
      continue;
    }

    if (!results[item]) {
      results[item] = 0;
    }
  
    results[item]++;
  }

  return results;
};

console.log(countLetters('LHL'));
console.log(countLetters('Sid'));
console.log(countLetters('SSSsssSSsSSS'));
console.log(countLetters('camelCase'));
console.log(countLetters('here is a full sentence'));

assertEqual(countLetters('LHL').L, 2);
assertEqual(countLetters('LHL').H, 1);
assertEqual(countLetters('SSSsssSSsSSS').S, 8);