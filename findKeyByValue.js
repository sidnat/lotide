const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKeyByValue = (object, value) => {
  //scan the object and return the first key which contains the given value
  let arrayOfKeys = Object.keys(object);
  
  for (let key of arrayOfKeys) {
    if (object[key] === value) {
      return key;
    }
  }
};

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