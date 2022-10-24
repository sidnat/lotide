const assertEqual = require("../assertEqual");
const findKeyByValue = require("../findKeyByValue");

const bestTVShowsByGenre = {
  sciFi: 'The Expanse',
  comedy: 'Brooklyn Nine-Nine',
  drama:  'The Wire',
  anime: 'Hunter X Hunter',
  documentary: 'The Office'
};

console.log(findKeyByValue(bestTVShowsByGenre, 'The Wire'));
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Office"), "documentary");
assertEqual(findKeyByValue(bestTVShowsByGenre, "Hunter X Hunter"), "anime");

// ✅✅✅ Assertion Passed: drama === drama
// ✅✅✅ Assertion Passed: undefined === undefined
// ✅✅✅ Assertion Passed: documentary === documentary
// ✅✅✅ Assertion Passed: anime === anime