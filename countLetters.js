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

module.exports = countLetters;